"use client";

import { Card } from "@repo/ui/card";
import { Box, Stack } from "@mui/material";

import styles from "modules/dashboard/styles";
import useSWR from "swr";
import { Menu } from "modules/dashboard/components";
import { TableData } from "./components/table-data";
import { Data } from "./types";
import { Loading } from "./components/loading";

function createData({
  id,
  operationType,
  transactionType,
  value,
  createdAt,
}: Data) {
  return { id, operationType, transactionType, value, createdAt };
}

export function Transactions() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading } = useSWR<Data[]>("/api/transacao", fetcher);

  const rows = data ? data.map((d) => createData(d)) : [];

  return (
    <Box component="main" sx={styles.main}>
      <Card
        type="default"
        sx={{
          width: "180px",
          [`@media (max-width: 700px)`]: {
            display: "none",
          },
        }}
      >
        <Menu />
      </Card>
      <Card type="default" sx={{ width: "100%" }}>
        {isLoading ? <Loading /> : <TableData data={rows} />}
      </Card>
    </Box>
  );
}
