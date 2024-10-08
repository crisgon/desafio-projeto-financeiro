import { describe, it, expect } from "vitest";
import { Card } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

describe("Card", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Card type="primary">Primary</Card>);
    expect(getByText("Primary")).toBeInTheDocument();
  });

  it("should render default card with correct style", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card type="default">Default</Card>
      </ThemeProvider>,
    );
    expect(getByText("Default")).toHaveStyle({
      backgroundColor: "#FFFFFF",
      color: "rgba(0, 0, 0, 0.87)",
    });
  });

  it("should render primary card with correct style", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card type="primary">Primary</Card>
      </ThemeProvider>,
    );
    expect(getByText("Primary")).toHaveStyle({
      backgroundColor: "rgb(49, 112, 39)",
      color: "#FFFFFF",
    });
  });

  it("should render secondary card with correct style", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card type="secondary">Secondary</Card>
      </ThemeProvider>,
    );
    expect(getByText("Secondary")).toHaveStyle({
      backgroundColor: "#CBCBCB",
      color: "#DEE9EA",
    });
  });

  it("should render with title", () => {
    const { getByText } = render(
      <Card type="primary" title="Card Title">
        Card content
      </Card>,
    );
    expect(getByText("Card Title")).toBeInTheDocument();
  });
});
