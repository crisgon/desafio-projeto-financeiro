import React, { createContext, useState, useContext, useEffect } from "react";
import useSWRMutation from "swr/mutation";
import type {
  CreateTransactionProps,
  DashboardContextProps,
} from "./dashboard-context.types";
import {
  fetcher,
  createTransactionRequest,
  updateSaldo,
  MOBILE_SIZE,
} from "./dashboard-context.utils";

const initialState = {
  isMobile: false,
  loading: false,
  balance: 0,
  createTransaction: () => Promise.resolve(),
};

const DashboardContext = createContext<DashboardContextProps>(initialState);

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<DashboardContextProps>(initialState);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_SIZE);

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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_SIZE);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DashboardContext.Provider
      value={{ ...state, isMobile, createTransaction }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
