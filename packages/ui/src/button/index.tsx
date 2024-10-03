"use client";

import { ReactNode } from "react";

import {
  Button as MUIButton,
  type ButtonProps as MUIButtonProps,
} from "@mui/material";

interface ButtonProps {
  children: ReactNode;
  variant?: MUIButtonProps["variant"];
}

export const Button = ({ children, variant = "contained" }: ButtonProps) => {
  return <MUIButton variant={variant}>{children}</MUIButton>;
};
