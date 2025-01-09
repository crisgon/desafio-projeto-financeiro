import type { ToastProps } from "@repo/ui/toast";
import { updateSaldo } from "app/services";
import { createTransactionRequest } from "app/services/transaction";
import type { TransactionTypes } from "app/types/transaction";
import { useState } from "react";
import { useCookies } from "react-cookie";
import useSWRMutation from "swr/mutation";

interface CreateTransactionPayload {
  accountId: string;
  transactionType?: TransactionTypes;
  value: string | number;
}

export const useAddTransaction = () => {
  const [cookies] = useCookies(["userToken"]);

  const {
    trigger: createTransactionMutation,
    isMutating: createTransactionIsMutating,
  } = useSWRMutation("/account/transaction", createTransactionRequest);

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
    accountId,
    transactionType = "Credit",
    value,
  }: CreateTransactionPayload) => {
    try {
      createTransactionMutation({
        data: {
          accountId,
          value: Number(value),
          type: transactionType,
        },
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
      });

      await updateSaldoMutation({
        operationValue: Number(value),
        operationType: transactionType,
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
