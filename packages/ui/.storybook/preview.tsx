import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import { StoryFn } from "@storybook/react";

export const decorators = [
  (StoryComponent: StoryFn) => (
    <ThemeProvider theme={theme}>
      <StoryComponent />
    </ThemeProvider>
  ),
];
