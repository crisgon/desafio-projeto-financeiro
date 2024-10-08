import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import { StoryFn, Preview } from "@storybook/react";

export const decorators = [
  (StoryComponent: StoryFn) => (
    <ThemeProvider theme={theme}>
      <StoryComponent />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "Dark", value: "#000" },
        { name: "Light", value: "#E4EDE3" },
      ],
      default: "Light",
    },
  },
};

export default preview;
