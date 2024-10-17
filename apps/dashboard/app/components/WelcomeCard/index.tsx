"use client";

import { Box, Typography, useTheme } from "@mui/material";

import { Card } from "@repo/ui/card";
import { Illustration } from "@repo/ui/illustration";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function WelcomeCard() {
  const theme = useTheme();

  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Card
      type="primary"
      sx={{ height: "420px", position: "relative" }}
      title="Olá, Joana! :)"
    >
      <Box position="absolute" zIndex={0} top={0} right={0}>
        <Illustration name="pixelsTopLight" />
      </Box>
      <Box display="flex">
        <Box
          display="flex"
          flexDirection="column"
          gap="48px"
          width="50%"
          mt={theme.spacing("large")}
          zIndex={1}
        >
          <Typography variant="caption">{capitalize(today)}</Typography>
          <Illustration name="saveMoney" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="48px"
          width="50%"
          mt={theme.spacing("large")}
          zIndex={1}
        >
          <Typography variant="caption">Saldo</Typography>
        </Box>
      </Box>
      <Box position="absolute" zIndex={0} left={0} bottom={-7}>
        <Illustration name="pixelsBottomLight" />
      </Box>
    </Card>
  );
}
