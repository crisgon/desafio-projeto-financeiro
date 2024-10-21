import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import { StoryFn, Preview } from "@storybook/react";

const customViewports = {
  mobile: {
    name: "Mobile Small",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "720px",
      height: "768px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1920px",
      height: "768px",
    },
  },
};

export const decorators = [
  (StoryComponent: StoryFn) => (
    <ThemeProvider theme={theme}>
      <StoryComponent />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...customViewports,
      },
    },
    backgrounds: {
      values: [
        { name: "Dark", value: "#000" },
        { name: "Light", value: "#fff" },
      ],
      default: "Light",
    },
  },
};

export default preview;
