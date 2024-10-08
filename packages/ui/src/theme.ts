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
    fontFamily: '"Inter", sans-serif',
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
});

export default theme;
