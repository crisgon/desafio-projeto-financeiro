"use client";

import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import theme from "@repo/ui/theme";

import "./globals.css";

import { Inter } from "next/font/google";

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
                "--primary-color": theme.palette.primary.main,
                "--secondary-color": theme.palette.secondary.main,
                "--background-default-color": theme.palette.background.default,
                "--background-paper-color": theme.palette.background.paper,
                "--common-white": theme.palette.common.white,

                "--spacing-small": "8px",
                "--spacing-medium": "16px",
                "--spacing-large": "24px",
              },
            }}
          />
          <header className="header">Header</header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
