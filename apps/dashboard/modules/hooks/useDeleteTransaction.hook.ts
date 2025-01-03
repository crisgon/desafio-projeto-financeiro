import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { deleteTransaction as deleteTransactionService } from "modules/transactions/services";
import type { ToastProps } from "@repo/ui/toast";

export const useDeleteTransaction = () => {
  const { trigger: deleteTransactionMutation, isMutating } = useSWRMutation(
    "/api/transacao",
    deleteTransactionService,
  );

  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);

  const [toastProps, setToastProps] = useState<ToastProps>({
    type: "info",
    content: "",
    isOpen: toastIsOpen,
    handleClose: () => setToastIsOpen(false),
  });

  const deleteTransaction = async (id: string, handleClose: VoidFunction) => {
    try {
      await deleteTransactionMutation({
        id,
      });

      setToastProps({
        ...toastProps,
        type: "success",
        content: "Transação apagada com sucesso!",
        isOpen: true,
      });
    } catch (error) {
      console.error(error);
      setToastProps({
        ...toastProps,
        type: "error",
        content: "Erro ao apagar transação.",
        isOpen: true,
      });
    } finally {
      handleClose();
    }
  };

  return {
    deleteTransaction,
    isLoading: isMutating,
    toastProps,
  };
};
