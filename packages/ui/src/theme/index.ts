import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material";
import { buttonOverrides } from "./overrides/button";
import { selectOverrides } from "./overrides/select";
import { menuItemOverrides } from "./overrides/menu-item";
import { radioGroupOverrides } from "./overrides/radio-group";

const theme = createTheme({
  palette: {
    primary: {
      main: "#47A138",
      light: "#E4EDE3",
      dark: "#004D61",
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
      500: "#767676",
    },
    background: {
      default: "#E4EDE3",
      paper: "linear-gradient(180deg, #004D61 0%, #FFFFFF 100%)",
    },
    action: {
      active: "#004D61",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "25px",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: 600,
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
    ...buttonOverrides,
    ...selectOverrides,
    ...menuItemOverrides,
    ...radioGroupOverrides,
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.15)",
        },
      },
    },
  },
});

export default theme;
