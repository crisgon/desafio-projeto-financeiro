import { Select } from "@repo/ui/select";
import { CurrencyInput, formatCurrency } from "@repo/ui/currency-input";
import { Box, useTheme } from "@mui/material";
import { Button } from "@repo/ui/button";
import { useRecoilValue } from "recoil";
import { transactionTypesState } from "app/recoil/atoms/transactionTypesAtom";
import type { TransactionTypes } from "app/types/transaction";

interface TransactionFormProps {
  transactionType?: string;
  setTransactionType: (value: TransactionTypes) => void;
  value: string;
  setValue: (value: string) => void;
  isMutating: boolean;
  onSubmit: () => void;
}

export function TransactionForm({
  transactionType,
  setTransactionType,
  value,
  setValue,
  isMutating,
  onSubmit,
}: TransactionFormProps) {
  const theme = useTheme();

  const transactionTypes = useRecoilValue(transactionTypesState);

  return (
    <Box display="flex" flexDirection="column" gap="32px" mt="32px">
      <Select
        label="Tipo de transação"
        value={transactionType}
        options={transactionTypes.options}
        onChange={(event) =>
          setTransactionType(event?.target.value as TransactionTypes)
        }
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
