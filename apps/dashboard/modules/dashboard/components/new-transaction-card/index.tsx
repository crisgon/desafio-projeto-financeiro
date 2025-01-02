"use client";

import { Box, useTheme } from "@mui/material";
import { Card } from "@repo/ui/card";
import { Illustration } from "@repo/ui/illustration";

import { useState } from "react";
import styles from "./styles";
import useSWRMutation from "swr/mutation";
import { createTransactionRequest, updateSaldo } from "app/services";
import { useSWRConfig } from "swr";
import { TransactionForm } from "modules/components/transaction-form";
import { Toast } from "@repo/ui/toast";

interface ToastProps {
  type: string;
  content: string;
  isOpen: boolean;
}

export default function NewTransactionCard() {
  const [value, setValue] = useState<string>("0");
  const [operationType, setOperationType] = useState<string | undefined>();
  const [transactionType, setTransactionType] = useState<string | undefined>();
  const [toastProps, setToastProps] = useState<ToastProps>({
    type: "",
    content: "",
    isOpen: false,
  });
  const { mutate } = useSWRConfig();

  const {
    trigger: createTransactionMutation,
    isMutating: createTransactionIsMutating,
  } = useSWRMutation("/api/transacao", createTransactionRequest);

  const {
    trigger: updateSaldoMutation,
    isMutating: updateTransactionIsMutating,
  } = useSWRMutation("/api/saldo", updateSaldo);

  const handleCreateTransaction = async () => {
    try {
      await createTransactionMutation({
        createdAt: new Date().toISOString(),
        transactionType: transactionType || "doc/ted",
        operationType: operationType || "",
        value: Number(value),
      });

      await updateSaldoMutation({
        operationValue: Number(value),
        operationType: operationType || "",
      });

      setToastProps({
        type: "success",
        content: "Transação criada com sucesso!",
        isOpen: true,
      });
      setValue("0");
      setTransactionType(undefined);
      setOperationType("");

      mutate("/api/saldo");
    } catch (e) {
      console.log(e);
      setToastProps({
        type: "error",
        content: "Erro ao criar transação.",
        isOpen: true,
      });
    }
  };

  return (
    <>
      <Toast
        {...toastProps}
        handleClose={() => {
          setToastProps((p) => ({ ...p, isOpen: false }));
        }}
        type="info"
      />
      <Card type="secondary" sx={styles.card} title="Nova transação">
        <Box sx={styles.pixelsTop}>
          <Illustration name="pixelsTopMedium" />
        </Box>

        <TransactionForm
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          value={value}
          setValue={setValue}
          operationType={operationType}
          setOperationType={setOperationType}
          isMutating={
            createTransactionIsMutating || updateTransactionIsMutating
          }
          handleEditTransaction={handleCreateTransaction}
        />

        <Box sx={styles.pixelsBottom}>
          <Illustration name="pixelsBottomMedium" />
        </Box>
      </Card>{" "}
    </>
  );
}
