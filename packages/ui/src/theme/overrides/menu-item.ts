import type { Components, CssVarsTheme, Theme } from "@mui/material";

export const menuItemOverrides = {
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontWeight: 400,
        "&.Mui-selected": {
          fontWeight: 700,
        },
        "&.menu-item-menu-component": {
          "&.active": {
            borderBottom: "1px solid #47A138",
            color: "#47A138",
            fontWeight: 700,
            background: "transparent",
            pointerEvents: "none",
          },

          "&:hover": {
            borderBottom: "1px solid #47A138",
            color: "#47A138",
            fontWeight: 700,
            background: "transparent",
          },
        },
      },
    },
  },
} as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>;
