"use client";

import styles from "./page.styles";
import { Card } from "@repo/ui/card";
import { Box } from "@mui/material";
import {
  NewTransactionCard,
  WelcomeCard,
  Menu,
} from "./modules/dashboard/components";
import theme from "@repo/ui/theme";

export default function Home() {
  return (
    <Box component="main" sx={styles.main}>
      <Card
        type="default"
        sx={{
          minWidth: "180px",
          [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
            backgroundColor: "transparent",
            padding: "0px",
          },
        }}
      >
        <Menu />
      </Card>
      <Box sx={styles.cardsBox}>
        <WelcomeCard />
        <NewTransactionCard />
      </Box>
      <Card type="default" sx={{ width: "282px" }}>
        Extrato
      </Card>
    </Box>
  );
}
