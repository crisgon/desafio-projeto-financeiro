import { Box, Stack, Typography } from "@mui/material";
import { Button } from "@repo/ui/button";
import { Modal } from "@repo/ui/modal";
import { Toast } from "@repo/ui/toast";
import { deleteTransaction } from "modules/transactions/services";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

interface ToastProps {
  type: string;
  content: string;
  isOpen: boolean;
}

interface DeleteModalProps {
  id: string;
  open: boolean;
  handleClose: () => void;
}

export function DeleteModal({ id, open, handleClose }: DeleteModalProps) {
  const [toastProps, setToastProps] = useState<ToastProps>({
    type: "",
    content: "",
    isOpen: false,
  });
  const { trigger: deleteTransactionMutation, isMutating } = useSWRMutation(
    "/api/transacao",
    deleteTransaction,
  );

  async function handleEditTransaction() {
    try {
      await deleteTransactionMutation({
        id,
      });

      setToastProps({
        type: "success",
        content: "Transação apagada com sucesso!",
        isOpen: true,
      });
      handleClose();
    } catch (error) {
      console.log(error);
      setToastProps({
        type: "error",
        content: "Erro ao apagar transação.",
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
          <Box display="flex" flexDirection="column" gap="32px" mt="32px">
            <Typography variant="body1">
              Tem certeza que deseja excluir a transação de id {id}?
            </Typography>

            <Stack direction="row" gap="16px" width="100%" zIndex={1} mt="32px">
              <Button
                label="Cancelar"
                onClick={handleClose}
                color="tertiary"
                variant="outlined"
              />
              <Button
                label="Apagar transação"
                onClick={handleEditTransaction}
                color="tertiary"
                isLoading={isMutating}
              />
            </Stack>
          </Box>
        }
        title="Apagar"
        handleClose={handleClose}
        handleConfirm={() => {}}
      />{" "}
    </>
  );
}
