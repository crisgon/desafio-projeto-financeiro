"use client";

import { Box, Divider, Skeleton, Typography, useTheme } from "@mui/material";
import { Card } from "@repo/ui/card";
import { Illustration } from "@repo/ui/illustration";
import { IconButton, IconButtonProps } from "@repo/ui/iconButton";
import { useState } from "react";
import styles from "./styles";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function WelcomeCard() {
  const theme = useTheme();
  const [isBalanceVisible, setIsBalanceVisible] = useState<boolean>(true);
  const [balanceIcon, setBalanceIcon] =
    useState<IconButtonProps["icon"]>("mdiEye");

  const { data, isLoading } = useSWR("/api/saldo", fetcher);

  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedNumber = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(data?.value / 100);

  const toggleBalanceVisibility = () => {
    setBalanceIcon(isBalanceVisible ? "mdiEyeOff" : "mdiEye");
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <Card
      type="primary"
      sx={{
        height: "420px",
        position: "relative",
        "@media (max-width: 490px)": {
          height: "570px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
      title="Olá, Joana! :)"
    >
      <Box sx={styles.pixelsTop}>
        <Illustration name="pixelsTopLight" />
      </Box>

      <Box
        display="flex"
        sx={{
          "@media (max-width: 490px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box sx={styles.today}>
          <Typography variant="caption">{capitalize(today)}</Typography>
        </Box>

        <Box sx={styles.balance}>
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", gap: theme.spacing("large") }}
          >
            Saldo{" "}
            <IconButton icon={balanceIcon} onClick={toggleBalanceVisibility} />
          </Typography>

          <Divider sx={styles.divider} />

          <Typography variant="body1">Conta corrente</Typography>

          <Typography component="span" sx={styles.balanceText}>
            R${" "}
            {isLoading ? (
              <Skeleton variant="text" sx={styles.skeleton} />
            ) : isBalanceVisible ? (
              `${formattedNumber}`
            ) : (
              "******"
            )}
          </Typography>
        </Box>
      </Box>

      <Box sx={styles.saveMoney}>
        <Illustration name="saveMoney" />
      </Box>

      <Box sx={styles.pixelsBottom}>
        <Illustration name="pixelsBottomLight" />
      </Box>
    </Card>
  );
}
