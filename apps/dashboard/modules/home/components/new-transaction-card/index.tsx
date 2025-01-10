"use client";

import { Box } from "@mui/material";
import { Card, Illustration, Toast } from "fiap-financeiro-ds";

import { useEffect, useState } from "react";
import styles from "./styles";
import { TransactionForm } from "modules/components/transaction-form";
import { useAddTransaction } from "modules/hooks/useAddTransaction.hook";
import { OperationTypes, TransactionTypes } from "app/types/transaction";

export default function NewTransactionCard() {
  const [value, setValue] = useState<string>("0");
  const [operationType, setOperationType] = useState<OperationTypes>();
  const [transactionType, setTransactionType] = useState<TransactionTypes>();

  const { createTransaction, isLoading, toastProps, setToastProps } =
    useAddTransaction();

  const handleCreateTransaction = () => {
    createTransaction({ transactionType, operationType, value });
  };

  useEffect(() => {
    if (toastProps.type === "success") {
      setValue("0");
      setTransactionType(undefined);
      setOperationType(undefined);
    }
  }, [toastProps]);

  return (
    <>
      <Toast
        {...toastProps}
        handleClose={() => {
          setToastProps({ ...toastProps, isOpen: false });
        }}
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
          isMutating={isLoading}
          onSubmit={handleCreateTransaction}
        />

        <Box sx={styles.pixelsBottom}>
          <Illustration name="pixelsBottomMedium" />
        </Box>
      </Card>{" "}
    </>
  );
}
