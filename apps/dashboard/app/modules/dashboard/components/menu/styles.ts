import theme from "@repo/ui/theme";

export const styles = {
  menu: {
    display: "flex",
    flexDirection: "column",
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      flexDirection: "row",
      justifyContent: "space-around",
      "> li": {
        flex: 1,
        border: "none",
      },
    },
  },
  menuItem: {
    px: "0px",
    py: theme.spacing("medium"),
    justifyContent: "center",
    borderBottom: `1px solid ${theme.palette.common.black}`,
  },
};
