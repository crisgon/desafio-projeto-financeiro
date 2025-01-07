"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";

import { Icons } from "@repo/ui/icons";

import { EditModal } from "../edit-modal";
import { useState } from "react";
import { Button } from "@repo/ui/button";
import { formatDate } from "modules/utils/formats";
import { formatCurrency } from "@repo/ui/currency-input";
import { DeleteModal } from "../delete-modal";
import type { Transaction } from "app/types/transaction";

interface TableDataProps {
  data: Transaction[];
}

export function TableData({ data }: TableDataProps) {
  const { palette } = useTheme();
  const [openEditModa, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [currentTransaction, setCurrentTransaction] =
    useState<Transaction | null>(null);

  function generateOperationTypeIcon(operationType: string) {
    if (operationType === "deposit")
      return <Icons name={"mdiBankTransferIn"} color={palette.success.main} />;

    return <Icons name={"mdiBankTransferOut"} color={palette.error.main} />;
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
              <TableCell>
                {generateOperationTypeIcon(row.operationType)}
              </TableCell>
              <TableCell>{row.id}</TableCell>

              <TableCell>{row.transactionType}</TableCell>
              <TableCell>{formatCurrency(String(row.value ?? 0))}</TableCell>

              <TableCell>{formatDate(row.createdAt, "full")}</TableCell>
              <TableCell>
                <Button
                  onClick={() =>
                    handleEditTransaction({
                      id: row.id,
                      operationType: row.operationType,
                      transactionType: row.transactionType,
                      value: row.value,
                      createdAt: row.createdAt,
                    })
                  }
                  label="Detalhes"
                  variant="outlined"
                  color="tertiary"
                />
              </TableCell>
              <TableCell
                onClick={() => {
                  handleDeleteTransaction({
                    id: row.id,
                    operationType: row.operationType,
                    transactionType: row.transactionType,
                    value: row.value,
                    createdAt: row.createdAt,
                  });
                }}
              >
                <Icons
                  color={palette.error.main}
                  name="mdiTrashCan"
                  size={32}
                  styles={{ cursor: "pointer" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
