import type { Components, CssVarsTheme, Theme } from "@mui/material";

export const radioGroupOverrides = {
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: "#DEE9EA",
        fontWeight: 600,
        fontSize: "16px",
        marginBottom: "14px",
        "&.Mui-focused": {
          color: "#DEE9EA",
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: "14px !important",
      },
    },
  },
} as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>;
