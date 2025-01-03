import { Box, Stack, Typography } from "@mui/material";
import { Button } from "@repo/ui/button";
import { Modal } from "@repo/ui/modal";
import { Toast } from "@repo/ui/toast";
import { useDeleteTransaction } from "modules/hooks/useDeleteTransaction.hook";

interface DeleteModalProps {
  id: string;
  open: boolean;
  handleClose: () => void;
}

export function DeleteModal({ id, open, handleClose }: DeleteModalProps) {
  const { deleteTransaction, isLoading, toastProps, setToastProps } =
    useDeleteTransaction();

  async function handleDeleteTransaction() {
    deleteTransaction(id, handleClose);
  }

  return (
    <>
      <Toast
        {...toastProps}
        handleClose={() => setToastProps({ ...toastProps, isOpen: false })}
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
                onClick={handleDeleteTransaction}
                color="tertiary"
                isLoading={isLoading}
              />
            </Stack>
          </Box>
        }
        title="Apagar"
        handleClose={handleClose}
        handleConfirm={() => {}}
      />
    </>
  );
}
