"use client";

import { Box } from "@mui/material";
import { WelcomeCard } from "modules/home/components";
import { Extract } from "modules/extract";
import styles from "./styles";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={styles.content}>
      <Box sx={styles.cardsBox}>
        <WelcomeCard />
        {children}
      </Box>
      <Extract />
    </Box>
  );
}
