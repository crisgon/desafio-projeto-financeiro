import theme from "@repo/ui/theme";

const styles = {
  pixelsTop: {
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
  },
  pixelsBottom: {
    position: "absolute",
    zIndex: 0,
    left: 0,
    bottom: -7,
  },
  saveMoney: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    bottom: 18,
  },
  today: {
    display: "flex",
    flexDirection: "column",
    gap: "48px",
    width: "50%",
    marginTop: theme.spacing("large"),
    zIndex: 1,
    "@media (max-width: 490px)": {
      width: "100%",
      textAlign: "center",
    },
  },
  balance: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing("medium"),
    width: "50%",
    marginTop: theme.spacing("large"),
    zIndex: 1,
    "@media (max-width: 490px)": {
      width: "fit-content",
    },
  },
  divider: {
    borderBottomWidth: "2px !important",
    width: "60%",
    borderColor: `${theme.palette.common.white} !important`,
    "@media (max-width: 490px)": {
      width: "100%",
    },
  },
};

export default styles;
