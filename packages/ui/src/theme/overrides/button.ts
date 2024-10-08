import { Components, CssVarsTheme, Theme } from "@mui/material";

export const buttonOverrides = {
  MuiButton: {
    styleOverrides: {
      root: {
        variants: [
          {
            props: { color: "primary", variant: "contained" },
            style: {
              borderColor: "#47A138",
              backgroundColor: "#47A138",
              color: "#FFFFFF",
            },
          },
          {
            props: { color: "primary", variant: "outlined" },
            style: {
              borderColor: "#47A138",
              backgroundColor: "transparent",
              color: "#47A138",
            },
          },
          {
            props: { color: "secondary", variant: "contained" },
            style: {
              borderColor: "#FF5031",
              backgroundColor: "#FF5031",
              color: "#FFFFFF",
            },
          },
          {
            props: { color: "secondary", variant: "outlined" },
            style: {
              borderColor: "#FF5031",
              backgroundColor: "transparent",
              color: "#FF5031",
            },
          },
          {
            props: { color: "tertiary", variant: "contained" },
            style: {
              borderColor: "#004D61",
              backgroundColor: "#004D61",
              color: "#FFFFFF",
            },
          },
          {
            props: { color: "tertiary", variant: "outlined" },
            style: {
              borderColor: "#004D61",
              backgroundColor: "transparent",
              color: "#004D61",
            },
          },
          {
            props: { variant: "contained" },
            style: {
              "&:hover": {
                backgroundColor: "#000000",
                borderColor: "#000000",
                color: "#FFFFFF",
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              "&:hover": {
                backgroundColor: "transparent",
                borderColor: "#000000",
                color: "#000000",
              },
            },
          },
        ],
        textTransform: "capitalize",
        fontWeight: 600,
        borderRadius: 8,
        borderWidth: 2,
      },
    },
  },
} as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>;
