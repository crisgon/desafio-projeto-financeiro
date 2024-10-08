import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#47A138",
      light: "#E4EDE3",
    },
    secondary: {
      main: "#FF5031",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    grey: {
      100: "#F5F5F5",
      200: "#F8F8F8",
      300: "#DEE9EA",
      400: "#CBCBCB",
    },
    background: {
      default: "#E4EDE3",
      paper: "linear-gradient(180deg, #004D61 0%, #FFFFFF 100%)",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "25px",
    },
    subtitle1: {
      fontSize: "20px",
    },
    body1: {
      fontSize: "16px",
    },
    caption: {
      fontSize: "13px",
    },
    button: {
      fontSize: "16px",
      fontWeight: 600,
    },
  },
  spacing: (value: ThemeOptions["spacing"]) => {
    const spacingValues = {
      small: 8,
      medium: 16,
      large: 24,
    };

    return `${spacingValues[value as keyof typeof spacingValues]}px`;
  },
  components: {
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
  },
});

export default theme;
