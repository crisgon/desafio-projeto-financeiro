"use client";

import { ThemeProvider, CssBaseline, GlobalStyles, Box } from "@mui/material";
import theme from "@repo/ui/theme";
import { RecoilRoot } from "recoil";

import "./globals.css";

import { Inter } from "next/font/google";
import Header from "modules/home/components/header";
import { Card } from "@repo/ui/card";
import { Menu } from "modules/home/components";
import styles from "./styles";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Projeto Finaceiro - Grupo 35</title>

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              ":root": {
                "--background-default-color": theme.palette.background.default,
              },
            }}
          />
          <RecoilRoot>
            <Header />
            <Box
              sx={{
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              <Box component="main" sx={styles.main}>
                <Card type="default" sx={styles.menu}>
                  <Menu />
                </Card>
                <Box flex={1}>{children}</Box>
              </Box>
            </Box>
          </RecoilRoot>
        </ThemeProvider>
      </body>
    </html>
  );
}
