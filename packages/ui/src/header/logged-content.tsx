import { Stack, Typography } from "@mui/material";
import { Icons } from "../icons";

export function LoggedContent() {
  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        justifyContent: "flex-end",
      }}
    >
      <Stack width="fit-content" direction="row" alignItems="center" gap="50px">
        <Typography variant="body2" sx={{ color: "common.white" }}>
          Joana da Silva Oliveira
        </Typography>
        <Icons color="#FF5031" name="mdiAccountCircle" size={32} />
      </Stack>
    </Stack>
  );
}
