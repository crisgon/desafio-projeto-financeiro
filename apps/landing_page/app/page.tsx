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
      <main style={styles.main}>
        <Box sx={styles.banner}>
          <Typography fontSize="28px" fontWeight="600">
            Experimente mais liberdade no controle da sua vida financeira.
            <br />
            Crie sua conta com a gente!
          </Typography>
          <Box>
            <Illustration name="report" />
          </Box>
        </Box>
        <Box sx={styles.advantages}>
          <Typography variant="h1">Vantagens do nosso banco:</Typography>
          <Box sx={styles.advantagesList}>
            <Box sx={styles.benefit}>
              <Illustration name="gift" />
              <Typography variant="subtitle1">
                Conta e cartão gratuitos
              </Typography>
              <Typography variant="body1">
                Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                isso: sem tarifa de manutenção.
              </Typography>
            </Box>
            <Box sx={styles.benefit}>
              <Illustration name="draw" />
              <Typography variant="subtitle1">Saques sem custo</Typography>
              <Typography variant="body1">
                Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
              </Typography>
            </Box>
            <Box sx={styles.benefit}>
              <Illustration name="points" />
              <Typography variant="subtitle1">Programa de pontos</Typography>
              <Typography variant="body1">
                Você pode acumular pontos com suas compras no crédito sem pagar
                mensalidade!
              </Typography>
            </Box>
            <Box sx={styles.benefit}>
              <Illustration name="devices" />
              <Typography variant="subtitle1">Seguro Dispositivos</Typography>
              <Typography variant="body1">
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
