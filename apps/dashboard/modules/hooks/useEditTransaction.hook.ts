import type { ToastProps } from "@repo/ui/toast";
import type { OperationTypes, TransactionTypes } from "app/types/transaction";
import { updateTransaction } from "modules/transactions/services";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

export const useEditTransaction = () => {
  const { trigger: updateTransactionMutation, isMutating } = useSWRMutation(
    "/api/transacao",
    updateTransaction,
  );

  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);

  const [toastProps, setToastProps] = useState<ToastProps>({
    type: "info",
    content: "",
    isOpen: toastIsOpen,
    handleClose: () => setToastIsOpen(false),
  });

  const editTransaction = async (
    transactionId: string,
    value: number | string,
    transactionType: TransactionTypes,
    handleClose: VoidFunction,
    operationType?: OperationTypes,
  ) => {
    try {
      await updateTransactionMutation({
        id: transactionId,
        value: Number(value),
        operationType: operationType || "",
        transactionType,
      });

      setToastProps({
        ...toastProps,
        type: "success",
        content: "Transação editada com sucesso!",
        isOpen: true,
      });

      handleClose();
    } catch (error) {
      console.error(error);
      setToastProps({
        ...toastProps,
        type: "error",
        content: "Erro ao editar transação.",
        isOpen: true,
      });
    }
  };

  return { editTransaction, isLoading: isMutating, toastProps };
};
