import type { ToastProps } from "@repo/ui/toast";
import { createTransactionRequest, updateSaldo } from "app/services";
import type { OperationTypes, TransactionTypes } from "app/types/transaction";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

interface CreateTransactionPayload {
  transactionType?: TransactionTypes;
  operationType?: OperationTypes;
  value: string | number;
}

export const useAddTransaction = () => {
  const {
    trigger: createTransactionMutation,
    isMutating: createTransactionIsMutating,
  } = useSWRMutation("/api/transacao", createTransactionRequest);

  const {
    trigger: updateSaldoMutation,
    isMutating: updateTransactionIsMutating,
  } = useSWRMutation("/api/saldo", updateSaldo);

  const [toastProps, setToastProps] = useState<Omit<ToastProps, "handleClose">>(
    {
      type: "info",
      content: "",
      isOpen: false,
    },
  );

  const createTransaction = async ({
    transactionType = "doc/ted",
    operationType = "deposito",
    value,
  }: CreateTransactionPayload) => {
    try {
      const newTransaction = {
        createdAt: new Date().toISOString(),
        transactionType,
        operationType,
        value: Number(value),
      };

      await createTransactionMutation(newTransaction);

      await updateSaldoMutation({
        operationValue: Number(value),
        operationType: operationType,
      });

      setToastProps({
        type: "success",
        content: "Transação criada com sucesso!",
        isOpen: true,
      });
    } catch (e) {
      console.error(e);
      setToastProps({
        type: "error",
        content: "Erro ao criar transação.",
        isOpen: true,
      });
    }
  };

  return {
    createTransaction,
    isLoading: createTransactionIsMutating || updateTransactionIsMutating,
    toastProps,
    setToastProps,
  };
};
