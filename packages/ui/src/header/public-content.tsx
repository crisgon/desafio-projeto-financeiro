"use client";

import { Stack, Typography, useTheme } from "@mui/material";
import { Actions } from "./actions";
import { Logos } from "./logos";
import Menu from "../menu";

export function PublicContent() {
  const { breakpoints } = useTheme();
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="0px 24px"
    >
      <Stack
        direction="row"
        alignItems="center"
        useFlexGap
        spacing={{ md: "72px", xs: "10px" }}
        sx={{
          width: "fit-content",
          padding: "0 24px",

          [breakpoints.only("xs")]: {
            width: "100%",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          },
        }}
      >
        <Logos />

        <Menu variant="full">
          <>
            <Menu.MenuItem
              handleClick={() => console.log("clicou no item")}
              active
            >
              Sobre
            </Menu.MenuItem>
            <Menu.MenuItem handleClick={() => console.log("clicou no item")}>
              Serviços
            </Menu.MenuItem>
          </>
        </Menu>

        <Stack
          sx={{
            display: "none",
            [breakpoints.up("sm")]: {
              display: "flex",
            },
          }}
          component="nav"
          direction="row"
          gap="40px"
        >
          <Typography sx={{ color: "primary.main" }}>Sobre</Typography>
          <Typography sx={{ color: "primary.main" }}>Serviços</Typography>
        </Stack>
      </Stack>

      <Actions />
    </Stack>
  );
}
