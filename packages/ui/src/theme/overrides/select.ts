import { Components, CssVarsTheme, Theme } from "@mui/material";

export const selectOverrides = {
  MuiSelect: {
    styleOverrides: {
      root: {
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#47A138",

        "& .MuiSelect-icon": {
          color: "#47A138",
        },
      },
    },
  },
} as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>;
