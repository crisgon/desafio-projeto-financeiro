"use client";

import { Box } from "@mui/material";
import { Card } from "@repo/ui/card";
import { Illustration } from "@repo/ui/illustration";
import { Select } from "@repo/ui/select";
import { CurrencyInput } from "@repo/ui/currency-input";
import RadioGroup from "@repo/ui/radio-group";
import { useState } from "react";
import styles from "./styles";
import { Button } from "@repo/ui/button";
import { useDashboardContext } from "app/context/dashboard-context";

export default function NewTransactionCard() {
  const [value, setValue] = useState<string>("0,00");
  const [operationType, setOperationType] = useState<string>("deposito");
  const [transactionType, setTransactionType] = useState<string>("");
  const { createTransaction, isMobile } = useDashboardContext();

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
          flexDirection={isMobile ? "column" : "row"}
          gap={isMobile ? "32px" : "60px"}
        >
          <CurrencyInput
            label="Valor"
            defaultValue={value}
            onChange={(event) => setValue(event)}
            sx={{ zIndex: 1, width: isMobile ? "100%" : "inherit" }}
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
            onClick={async () => {
              try {
                await createTransaction({
                  transactionType,
                  operationType,
                  value: Number(value),
                });
              } catch (e) {
                console.log(e);
              }
            }}
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
