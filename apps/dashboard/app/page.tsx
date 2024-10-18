"use client";

import WelcomeCard from "./(components)/welcome-card";
import useSWR from "swr";
import styles from "./page.styles";
import { Card } from "@repo/ui/card";
import { Box } from "@mui/material";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, isLoading, error } = useSWR("/api/transacao", fetcher);

  console.log({ data, isLoading, error });

  return (
    <Box component="main" sx={styles.main}>
      <Card type="default" sx={{ width: "180px" }}>
        Menu
      </Card>
      <Box sx={styles.cardsBox}>
        <WelcomeCard />
        <Card type="secondary" sx={{ height: "420px" }}>
          Nova transação
        </Card>
      </Box>
      <Card type="default" sx={{ width: "282px" }}>
        Extrato
      </Card>
    </Box>
  );
}
