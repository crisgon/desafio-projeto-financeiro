import { SxProps, Theme } from "@mui/material";
import { theme } from "fiap-financeiro-ds";

const styles: Record<string, SxProps<Theme>> = {
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    marginBottom: "72px",
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing("medium"),
    alignItems: "center",
    margin: "40px 0",

    "@media (max-width: 1208px)": {
      flexDirection: "column",
      maxWidth: "600px",
      margin: "40px auto",
      textAlign: "center",
      gap: "40px",
    },

    "@media (max-width: 700px)": {
      margin: "40px 16px",
      svg: {
        width: "490px",
        height: "320px",
      },
    },

    "@media (max-width: 530px)": {
      gap: "60px",
      svg: {
        width: "350px",
        height: "195px",
      },
    },
  },
  advantages: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "40px",

    "@media (max-width: 530px)": {
      h1: {
        fontSize: theme.typography.subtitle1.fontSize,
      },
    },
  },
  advantagesList: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    gap: theme.spacing("large"),

    "@media (max-width: 1208px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },

    "@media (max-width: 700px)": {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "40px",
    },
  },
  benefit: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "260px",
    gap: theme.spacing("medium"),

    h6: {
      color: theme.palette.primary.main,
    },

    p: {
      color: theme.palette.grey[500],
      textAlign: "center",
    },

    "@media (max-width: 1208px)": {
      width: "280px",
    },
  },
};

export default styles;
