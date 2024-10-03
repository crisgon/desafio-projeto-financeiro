"use client";

import { ReactNode } from "react";

import {
  Button as MUIButton,
  Typography,
  useTheme,
  type ButtonProps as MUIButtonProps,
} from "@mui/material";

interface ButtonProps {
  children: ReactNode;
  variant?: MUIButtonProps["variant"];
}

export const Button = ({ children, variant = "contained" }: ButtonProps) => {
  const theme = useTheme();

  return (
    <MUIButton
      variant={variant}
      color="secondary"
      sx={{
        p: theme.spacing("small"),
      }}
    >
      <Typography variant="subtitle1">{children}</Typography>
    </MUIButton>
  );
};
