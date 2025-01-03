import { Modal } from "@repo/ui/modal";
import { useTheme } from "@mui/material";
import { Toast } from "@repo/ui/toast";
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import { updateTransaction } from "modules/transactions/services";
import { TransactionForm } from "modules/components/transaction-form";
import type { Transaction } from "app/types/transaction";

interface ToastProps {
  type: string;
  content: string;
  isOpen: boolean;
}

interface EditModalProps {
  open: boolean;
  handleClose: () => void;
  transaction: Transaction | null;
}

export function EditModal({ open, handleClose, transaction }: EditModalProps) {
  const theme = useTheme();
  const [value, setValue] = useState<string>("");
  const [operationType, setOperationType] = useState<string | undefined>();
  const [transactionType, setTransactionType] = useState<string | undefined>();
  const [toastProps, setToastProps] = useState<ToastProps>({
    type: "",
    content: "",
    isOpen: false,
  });

  const { trigger: updateTransactionMutation, isMutating } = useSWRMutation(
    "/api/transacao",
    updateTransaction,
  );

  useEffect(() => {
    setValue((transaction?.value ?? "").toString());
    setOperationType(transaction?.operationType ?? "");
    setTransactionType(transaction?.transactionType || undefined);
  }, [transaction]);

  async function handleEditTransaction() {
    if (!transactionType || !transaction?.id) return;

    try {
      await updateTransactionMutation({
        id: transaction?.id,
        value: Number(value),
        operationType: operationType || "",
        transactionType,
      });

      setToastProps({
        type: "success",
        content: "Transação editada com sucesso!",
        isOpen: true,
      });
      handleClose();
    } catch (error) {
      console.log(error);
      setToastProps({
        type: "error",
        content: "Erro ao editar transação.",
        isOpen: true,
      });
    }
  }

  return (
    <>
      <Toast
        {...toastProps}
        handleClose={() => {
          setToastProps((p) => ({ ...p, isOpen: false }));
        }}
        type="info"
      />
      <Modal
        open={open}
        content={
          <TransactionForm
            transactionType={transactionType}
            setTransactionType={setTransactionType}
            value={value}
            setValue={setValue}
            operationType={operationType}
            setOperationType={setOperationType}
            isMutating={isMutating}
            handleEditTransaction={handleEditTransaction}
          />
        }
        title="Editar"
        handleClose={handleClose}
        handleConfirm={handleEditTransaction}
      />
    </>
  );
}
