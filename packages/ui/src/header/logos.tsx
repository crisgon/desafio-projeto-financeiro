"use client";
import { Box, useTheme } from "@mui/material";
import { Illustration } from "../illustration";

export function Logos() {
  const { breakpoints } = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "block",
          [breakpoints.only("md")]: {
            display: "none",
          },
        }}
      >
        <Illustration name="logo" />
      </Box>
      <Box
        sx={{
          display: "none",
          [breakpoints.only("md")]: {
            display: "block",
          },
        }}
      >
        <Illustration name="logoSmall" />
      </Box>
    </>
  );
}
