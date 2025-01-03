import RadioGroup from "@repo/ui/radio-group";
import { Select } from "@repo/ui/select";
import { CurrencyInput, formatCurrency } from "@repo/ui/currency-input";
import { Box, useTheme } from "@mui/material";
import { Button } from "@repo/ui/button";
import { useRecoilValue } from "recoil";
import { operationTypesState } from "app/recoil/atoms/operationTypesAtom";
import { transactionTypesState } from "app/recoil/atoms/transactionTypesAtom";
import type { OperationTypes, TransactionTypes } from "app/types/transaction";

interface TransactionFormProps {
  transactionType?: string;
  setTransactionType: (value: TransactionTypes) => void;
  value: string;
  setValue: (value: string) => void;
  operationType?: string;
  setOperationType: (value: OperationTypes) => void;
  isMutating: boolean;
  onSubmit: () => void;
}

export function TransactionForm({
  transactionType,
  setTransactionType,
  value,
  setValue,
  operationType,
  setOperationType,
  isMutating,
  onSubmit,
}: TransactionFormProps) {
  const theme = useTheme();

  const transactionTypes = useRecoilValue(transactionTypesState);
  const transactionTypeOptions = transactionTypes.map((transaction) => ({
    label: transaction,
    value:
      transaction
        .split(" ")[0]
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") || "",
  }));

  const operationTypes = useRecoilValue(operationTypesState);
  const operationTypeOptions = operationTypes.map((operation) => ({
    label: operation,
    value: operation.toLowerCase(),
  }));

  return (
    <Box display="flex" flexDirection="column" gap="32px" mt="32px">
      <Select
        label="Tipo de transação"
        value={transactionType}
        options={transactionTypeOptions}
        onChange={(event) =>
          setTransactionType(event?.target.value as TransactionTypes)
        }
        placeholder="Selecione o tipo de transação"
      />

      <Select
        label="Tipo de operação"
        value={operationType}
        options={operationTypeOptions}
        onChange={(event) =>
          setOperationType(event?.target.value as OperationTypes)
        }
        placeholder="Selecione o tipo de operação"
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
      </Box>

      <Box width="250px" zIndex={1} mt="32px">
        <Button
          label="Concluir transação"
          onClick={onSubmit}
          color="tertiary"
          isLoading={isMutating}
        />
      </Box>
    </Box>
  );
}
