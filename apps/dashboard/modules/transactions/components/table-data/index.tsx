"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";

import { Icons, Button, IconButton } from "fiap-financeiro-ds";

import { EditModal } from "../edit-modal";
import { useState } from "react";
import { formatDate } from "modules/utils/formats";
import { DeleteModal } from "../delete-modal";
import type { Transaction } from "app/types/transaction";
import { formatCurrency } from "fiap-financeiro-ds/dist/currency-input";

interface TableDataProps {
  data: Transaction[];
}

const operationTypeMapper = {
  Debit: "Débito",
  Credit: "Crédito",
};

export function TableData({ data }: TableDataProps) {
  const { palette } = useTheme();
  const [openEditModa, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [currentTransaction, setCurrentTransaction] =
    useState<Transaction | null>(null);

  function generateOperationTypeIcon(operationType: string) {
    if (operationType === "Credit")
      return (
        <Icons
          name={"mdiBankTransferIn"}
          size={24}
          color={palette.success.main}
        />
      );

    return (
      <Icons name={"mdiBankTransferOut"} size={24} color={palette.error.main} />
    );
  }

  function handleEditTransaction(transaction: Transaction) {
    setOpenEditModal(true);
    setCurrentTransaction(transaction);
  }

  function handleDeleteTransaction(transaction: Transaction) {
    setOpenDeleteModal(true);
    setCurrentTransaction(transaction);
  }

  return (
    <>
      <EditModal
        open={openEditModa}
        handleClose={() => {
          setOpenEditModal(false);
          setCurrentTransaction(null);
        }}
        transaction={currentTransaction}
      />
      <DeleteModal
        open={openDeleteModal}
        handleClose={() => {
          setOpenDeleteModal(false);
          setCurrentTransaction(null);
        }}
        id={currentTransaction?.id ?? ""}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>id</TableCell>
            <TableCell>Transação</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Data</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell>{generateOperationTypeIcon(row.type)}</TableCell>
              <TableCell>{row.id}</TableCell>

              <TableCell>{operationTypeMapper[row.type]}</TableCell>
              <TableCell>{formatCurrency(String(row.value ?? 0))}</TableCell>

              <TableCell>{formatDate(row.date, "full")}</TableCell>
              <TableCell>
                <Button
                  disabled
                  onClick={() =>
                    handleEditTransaction({
                      id: row.id,
                      type: row.type,
                      value: row.value,
                      date: row.date,
                      accountId: row.accountId,
                    })
                  }
                  label="Detalhes"
                  variant="outlined"
                  color="tertiary"
                />
              </TableCell>
              <TableCell>
                <IconButton
                  icon="mdiTrashCan"
                  variant="dark"
                  iconSize={24}
                  iconColor={palette.error.main}
                  disabled
                  onClick={() => {
                    handleDeleteTransaction({
                      id: row.id,
                      type: row.type,
                      value: row.value,
                      date: row.date,
                      accountId: row.accountId,
                    });
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
