import { SxProps, Theme } from "@mui/material";
import theme from "@repo/ui/theme";

export const styles: Record<string, SxProps<Theme>> = {
  menuItem: {
    px: "0px",
    py: theme.spacing("medium"),
    justifyContent: "center",
    borderBottom: `1px solid ${theme.palette.common.black}`,
  },
};
