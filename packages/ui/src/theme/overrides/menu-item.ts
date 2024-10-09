import { Components, CssVarsTheme, Theme } from "@mui/material";

export const menuItemOverrides = {
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontWeight: 400,

        "&.Mui-selected": {
          fontWeight: 700,
        },
      },
    },
  },
} as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>;
