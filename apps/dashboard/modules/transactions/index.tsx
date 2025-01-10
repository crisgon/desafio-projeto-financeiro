"use client";

import { Card } from "fiap-financeiro-ds";
import { TableData } from "./components/table-data";
import { Loading } from "./components/loading";
import type { Transaction } from "app/types/transaction";
import { useRecoilValue } from "recoil";
import { transactionsState } from "app/recoil/atoms/transactionsAtom";

function createData({
  id,
  operationType,
  transactionType,
  value,
  createdAt,
}: Transaction) {
  return { id, operationType, transactionType, value, createdAt };
}

export function Transactions() {
  const { data, isLoading } = useRecoilValue(transactionsState);

  const rows = data ? data.map((d: Transaction) => createData(d)) : [];

  return (
    <Card type="default" sx={{ flex: 1, overflow: "auto" }}>
      {isLoading ? <Loading /> : <TableData data={rows} />}
    </Card>
  );
}
