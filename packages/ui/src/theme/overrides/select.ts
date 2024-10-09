import {
  MenuPaper,
  type Components,
  type CssVarsTheme,
  type Theme,
} from "@mui/material";

export const selectOverrides = {
  MuiSelect: {
    styleOverrides: {
      root: {
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#47A138",
        backgroundColor: "#FFFFFF",

        "& .MuiSelect-icon": {
          color: "#47A138",
        },
      },
    },
    defaultProps: {
      MenuProps: {
        PaperProps: {
          sx: {
            bgcolor: "#FFFFFF",
          },
        },
      },
    },
  },
} as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>;
