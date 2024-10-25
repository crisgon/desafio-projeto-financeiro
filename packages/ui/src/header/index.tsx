import { Stack, useTheme } from "@mui/material";

import { LoggedContent } from "./logged-content";
import { PublicContent } from "./public-content";

interface HeaderProps {
  isLogged: boolean;
}

export function Header({ isLogged }: HeaderProps) {
  const { palette } = useTheme();

  return (
    <Stack
      component="header"
      width="100%"
      direction="row"
      height="94px"
      alignItems="center"
      bgcolor={isLogged ? palette.action.active : palette.common.black}
      sx={{
        padding: "0 24px",
      }}
    >
      {isLogged ? <LoggedContent /> : <PublicContent />}
    </Stack>
  );
}
