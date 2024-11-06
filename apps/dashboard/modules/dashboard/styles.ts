import { SxProps, Theme } from "@mui/material";
import theme from "@repo/ui/theme";

const styles: Record<string, SxProps<Theme>> = {
  main: {
    display: "flex",
    gap: theme.spacing("large"),
    justifyContent: "center",
    padding: theme.spacing("large"),
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      flexDirection: "column",
      "> div": {
        width: "100%",
      },
    },
  },
  cardsBox: {
    flex: 1,
    minWidth: "400px",
    maxWidth: "690px",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing("large"),
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      maxWidth: "unset",
      minWidth: "unset",
    },
  },
  menuCard: {
    minWidth: "180px",
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      backgroundColor: "transparent",
      padding: "0px",
    },
    [`@media (max-width: 700px)`]: {
      display: "none",
    },
  },
};

export default styles;
