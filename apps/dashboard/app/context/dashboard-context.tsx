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
} from "./dashboard-context.utils";

const initialState = {
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

  const { trigger: getSaldoMutation, isMutating: getSaldoIsMutating } =
    useSWRMutation("/api/saldo", fetcher);
  const {
    trigger: createTransactionMutation,
    isMutating: createTransactionIsMutating,
  } = useSWRMutation("/api/transacao", createTransactionRequest);
  const { trigger: updateSaldoMutation, isMutating: updateSaldoIsMutating } =
    useSWRMutation("/api/saldo", updateSaldo);

  const createTransaction = async ({
    transactionType,
    operationType,
    value,
  }: CreateTransactionProps) => {
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

      setState({ ...state, balance: newBalance });
    } catch (e) {
      console.error(e);
    }
  };

  const getSaldo = async () => {
    const result = await getSaldoMutation();
    setState({ ...state, balance: result.value });
  };

  useEffect(() => {
    setState({ ...state });
    getSaldo();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        ...state,
        createTransaction,
        loading:
          getSaldoIsMutating ||
          updateSaldoIsMutating ||
          createTransactionIsMutating,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
