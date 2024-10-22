"use client";

import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import theme from "@repo/ui/theme";

import "./globals.css";

import { Inter } from "next/font/google";
import { DashboardProvider } from "./context/dashboard-context";

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
          <DashboardProvider>
            <header className="header">Header</header>
            {children}
          </DashboardProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
