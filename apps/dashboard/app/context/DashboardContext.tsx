import React, { createContext, useState, useContext, useEffect } from "react";
import useSWRMutation from "swr/mutation";

interface CreateTransactionProps {
  transactionType: string;
  value: number;
  operationType: string;
}

type DashboardContextType = {
  loading: boolean;
  balance: number;
  createTransaction: ({
    transactionType,
    operationType,
    value,
  }: CreateTransactionProps) => Promise<void>;
};

const initialState = {
  loading: false,
  balance: 0,
  createTransaction: () => Promise.resolve(),
};

const DashboardContext = createContext<DashboardContextType>(initialState);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

async function createTransactionRequest(
  url: string,
  {
    arg,
  }: {
    arg: {
      createdAt: string;
      transactionType: string;
      value: number;
      operationType: string;
    };
  },
) {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
}

async function updateSaldo(
  url: string,
  {
    arg,
  }: {
    arg: {
      value: number;
    };
  },
) {
  await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
  });
}

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<DashboardContextType>(initialState);

  const { trigger: getSaldoMutation } = useSWRMutation("/api/saldo", fetcher);
  const { trigger: createTransactionMutation } = useSWRMutation(
    "/api/transacao",
    createTransactionRequest,
  );
  const { trigger: updateSaldoMutation } = useSWRMutation(
    "/api/saldo",
    updateSaldo,
  );

  const createTransaction = async ({
    transactionType,
    operationType,
    value,
  }: CreateTransactionProps) => {
    setState({ ...state, loading: true });

    try {
      await createTransactionMutation({
        createdAt: new Date().toISOString(),
        transactionType,
        operationType,
        value: Number(value),
      });

      let newBalance;

      if (operationType === "deposito") {
        newBalance = state.balance + Number(value);
      } else {
        newBalance = state.balance - Number(value);
      }

      await updateSaldoMutation({
        value: newBalance,
      });

      setState({ ...state, balance: newBalance, loading: false });
    } catch (e) {
      console.error(e);
      setState({ ...state, loading: false });
    }
  };

  const getSaldo = async () => {
    const result = await getSaldoMutation();
    setState({ ...state, loading: false, balance: result.value });
  };

  useEffect(() => {
    setState({ ...state, loading: true });
    getSaldo();
  }, []);

  return (
    <DashboardContext.Provider value={{ ...state, createTransaction }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
