"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Icons } from "@repo/ui/icons";
import { Data } from "modules/transactions/types";

interface TableDataProps {
  data: Data[];
}

export function TableData({ data }: TableDataProps) {
  function generateOperationTypeIcon(operationType: string) {
    if (operationType === "deposit")
      return <Icons name={"mdiBankTransferIn"} color="#47A138" />;

    return <Icons name={"mdiBankTransferOut"} color="#FF0000" />;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>id</TableCell>
          <TableCell>Transação</TableCell>
          <TableCell>Valor</TableCell>
          <TableCell>Data</TableCell>
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
            <TableCell>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(row.value)}
            </TableCell>

            <TableCell>
              {Intl.DateTimeFormat("pt-BR", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              }).format(new Date(row.createdAt))}
            </TableCell>
            <TableCell>Detalhes</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
