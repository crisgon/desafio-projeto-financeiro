import theme from "@repo/ui/theme";

const styles = {
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    marginBottom: "72px",
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "center",
    margin: "40px 0",
  },
  advantages: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "40px",
  },
  advantagesList: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    gap: theme.spacing("large"),
  },
  benefit: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "279px",
    gap: theme.spacing("medium"),

    h6: {
      color: theme.palette.primary.main,
    },

    p: {
      color: theme.palette.grey[500],
      textAlign: "center",
    },
  },
};

export default styles;
