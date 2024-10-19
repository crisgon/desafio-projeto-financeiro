"use client";

import styles from "./page.styles";
import { Card } from "@repo/ui/card";
import { Box } from "@mui/material";
import WelcomeCard from "./(components)/welcome-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
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
