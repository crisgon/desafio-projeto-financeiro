"use client";

import { Box, useTheme } from "@mui/material";
import { Card } from "@repo/ui/card";
import { Illustration } from "@repo/ui/illustration";
import { Select } from "@repo/ui/select";
import { CurrencyInput } from "@repo/ui/currency-input";
import RadioGroup from "@repo/ui/radio-group";
import { useState } from "react";
import styles from "./styles";
import { Button } from "@repo/ui/button";
import useSWRMutation from "swr/mutation";
import { createTransactionRequest, updateSaldo } from "app/services";

export default function NewTransactionCard() {
  const theme = useTheme();
  const [value, setValue] = useState<string>("0,00");
  const [operationType, setOperationType] = useState<string>("deposito");
  const [transactionType, setTransactionType] = useState<string>("");

  const { trigger: createTransactionMutation } = useSWRMutation(
    "/api/transacao",
    createTransactionRequest,
  );

  const { trigger: updateSaldoMutation } = useSWRMutation(
    "/api/saldo",
    updateSaldo,
  );

  const handleCreateTransaction = async () => {
    try {
      await createTransactionMutation({
        createdAt: new Date().toISOString(),
        transactionType,
        operationType,
        value: Number(value),
      });

      await updateSaldoMutation({
        operationValue: Number(value),
        operationType,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card type="secondary" sx={styles.card} title="Nova transação">
      <Box sx={styles.pixelsTop}>
        <Illustration name="pixelsTopMedium" />
      </Box>

      <Box display="flex" flexDirection="column" gap="32px" mt="32px">
        <Select
          options={[
            { value: "cambio", label: "Câmbio de Moeda" },
            { value: "doc/ted", label: "DOC/TED" },
            { value: "emprestimo", label: "Empréstimo e Financiamento" },
          ]}
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
            defaultValue={value}
            onChange={(event) => setValue(event)}
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
            onClick={handleCreateTransaction}
            color="tertiary"
          />
        </Box>
      </Box>

      <Box sx={styles.pixelsBottom}>
        <Illustration name="pixelsBottomMedium" />
      </Box>
    </Card>
  );
}
