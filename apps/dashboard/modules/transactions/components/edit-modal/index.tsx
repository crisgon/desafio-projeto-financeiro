import { Modal } from "@repo/ui/modal";
import RadioGroup from "@repo/ui/radio-group";
import { Select } from "@repo/ui/select";
import { CurrencyInput, formatCurrency } from "@repo/ui/currency-input";
import { Box, useTheme } from "@mui/material";
import { Button } from "@repo/ui/button";
import { Toast } from "@repo/ui/toast";
import { useEffect, useState } from "react";
import { Data } from "modules/transactions/types";
import useSWRMutation from "swr/mutation";
import { updateTransaction } from "modules/transactions/services";

interface ToastProps {
  type: string;
  content: string;
  isOpen: boolean;
}

interface EditModalProps {
  open: boolean;
  handleClose: () => void;
  transaction: Data | null;
}

const options = [
  { value: "cambio", label: "Câmbio de Moeda" },
  { value: "doc/ted", label: "DOC/TED" },
  { value: "emprestimo", label: "Empréstimo e Financiamento" },
];

export function EditModal({ open, handleClose, transaction }: EditModalProps) {
  const theme = useTheme();
  const [value, setValue] = useState<string>("");
  const [operationType, setOperationType] = useState<string>("");
  const [transactionType, setTransactionType] = useState<string>("");
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
    setTransactionType(transaction?.transactionType ?? "");
  }, [transaction]);

  async function handleEditTransaction() {
    if (!transaction?.id) return;

    try {
      await updateTransactionMutation({
        id: transaction?.id,
        value: Number(value),
        operationType,
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
          <Box display="flex" flexDirection="column" gap="32px" mt="32px">
            <Select
              value={transactionType}
              options={options}
              onChange={(event) => setTransactionType(event?.target.value)}
              placeholder="Selecione o tipo de transação"
            />

            <Box
              display="flex"
              sx={{
                flexDirection: "row",
                gap: "60px",
                [theme.breakpoints.down("sm")]: {
                  flexDirection: "column",
                  gap: "32px",
                },
              }}
            >
              <CurrencyInput
                label="Valor"
                defaultValue={formatCurrency(value)}
                onChange={(v) => {
                  setValue(v);
                }}
                sx={{
                  zIndex: 1,
                  width: "inherit",
                  [theme.breakpoints.down("sm")]: {
                    width: "100%",
                  },
                }}
              />

              <RadioGroup
                label="Tipo de operação"
                inputName="tipo-de-operacao"
                value={operationType}
                handleChange={(event) => setOperationType(event?.target?.value)}
                sx={{ zIndex: 1 }}
              >
                <>
                  <RadioGroup.RadioButton label="Depósito" value="deposito" />
                  <RadioGroup.RadioButton
                    label="Transferência"
                    value="transferencia"
                  />
                </>
              </RadioGroup>
            </Box>

            <Box width="250px" zIndex={1} mt="32px">
              <Button
                label="Concluir transação"
                onClick={handleEditTransaction}
                color="tertiary"
                isLoading={isMutating}
              />
            </Box>
          </Box>
        }
        title="Editar"
        handleClose={handleClose}
        handleConfirm={handleEditTransaction}
      />
    </>
  );
}
