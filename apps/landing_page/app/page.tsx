"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { Footer } from "@repo/ui/footer";
import { Illustration } from "@repo/ui/illustration";
import styles from "./page.styles";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <header className="header">Header</header>
      <main
        style={{ maxWidth: "1200px", margin: "0 auto", marginBottom: "72px" }}
      >
        <Box
          display="flex"
          flexDirection="row"
          gap="16px"
          alignItems="center"
          marginY="40px"
        >
          <Typography fontSize="28px" fontWeight="600">
            Experimente mais liberdade no controle da sua vida financeira.
            <br />
            Crie sua conta com a gente!
          </Typography>
          <Box>
            <Illustration name="report" />
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap="40px"
        >
          <Typography variant="h1">Vantagens do nosso banco:</Typography>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            gap={theme.spacing("large")}
          >
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              width="279px"
              gap={theme.spacing("medium")}
            >
              <Illustration name="gift" />
              <Typography
                color={theme.palette.primary.main}
                variant="subtitle1"
              >
                Conta e cartão gratuitos
              </Typography>
              <Typography
                color={theme.palette.grey[500]}
                variant="body1"
                textAlign="center"
              >
                Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                isso: sem tarifa de manutenção.
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              width="279px"
              gap={theme.spacing("medium")}
            >
              <Illustration name="draw" />
              <Typography
                color={theme.palette.primary.main}
                variant="subtitle1"
              >
                Saques sem custo
              </Typography>
              <Typography
                color={theme.palette.grey[500]}
                variant="body1"
                textAlign="center"
              >
                Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              width="279px"
              gap={theme.spacing("medium")}
            >
              <Illustration name="points" />
              <Typography
                color={theme.palette.primary.main}
                variant="subtitle1"
              >
                Programa de pontos
              </Typography>
              <Typography
                color={theme.palette.grey[500]}
                variant="body1"
                textAlign="center"
              >
                Você pode acumular pontos com suas compras no crédito sem pagar
                mensalidade!
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              width="279px"
              gap={theme.spacing("medium")}
            >
              <Illustration name="devices" />
              <Typography
                color={theme.palette.primary.main}
                variant="subtitle1"
              >
                Seguro Dispositivos
              </Typography>
              <Typography
                color={theme.palette.grey[500]}
                variant="body1"
                textAlign="center"
              >
                Seus dispositivos móveis (computador e laptop) protegidos por
                uma mensalidade simbólica.
              </Typography>
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}
