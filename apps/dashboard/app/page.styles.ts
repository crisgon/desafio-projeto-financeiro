import theme from "@repo/ui/theme";

const styles = {
  main: {
    display: "flex",
    gap: theme.spacing("large"),
    justifyContent: "center",
    padding: theme.spacing("large"),
    "@media (max-width: 900px)": {
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
    "@media (max-width: 900px)": {
      minWidth: "unset",
      width: "100%",
    },
  },
};

export default styles;
