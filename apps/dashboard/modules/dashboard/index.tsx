"use client";

import styles from "./styles";
import { Card } from "@repo/ui/card";
import { Box } from "@mui/material";
import {
  NewTransactionCard,
  WelcomeCard,
  Menu,
} from "modules/dashboard/components";
import { Extract } from "modules/extract";

export default function Home() {
  return (
    <Box component="main" sx={styles.main}>
      <Card type="default" sx={styles.menuCard}>
        <Menu />
      </Card>
      <Box sx={styles.cardsBox}>
        <WelcomeCard />
        <NewTransactionCard />
      </Box>
      <Extract />
    </Box>
  );
}
