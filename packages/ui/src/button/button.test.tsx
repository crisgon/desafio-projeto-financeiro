import { describe, test, expect, vi, beforeEach } from "vitest";
import { Button, ButtonProps } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import userEvent from "@testing-library/user-event";

const colors = {
  primary: "#47A138",
  secondary: "#FF5031",
  tertiary: "#004D61",
  error: "#D32F2F",
  contrast: "#000000",
};

describe("Button", () => {
  const mockedFunction = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test.each([
    ["contained", "primary", colors.primary, "#FFFFFF", colors.primary],
    ["contained", "secondary", colors.secondary, "#FFFFFF", colors.secondary],
    ["contained", "tertiary", colors.tertiary, "#FFFFFF", colors.tertiary],
    ["contained", "error", colors.error, "#FFFFFF", colors.error],
    ["contained", "contrast", colors.contrast, "#FFFFFF", colors.contrast],
    ["outlined", "primary", "transparent", colors.primary, colors.primary],
    [
      "outlined",
      "secondary",
      "transparent",
      colors.secondary,
      colors.secondary,
    ],
    ["outlined", "tertiary", "transparent", colors.tertiary, colors.tertiary],
    ["outlined", "error", "transparent", colors.error, colors.error],
    ["outlined", "contrast", "transparent", colors.contrast, colors.contrast],
  ])(
    "should render correctly when variant is %s and color is %s",
    (variant, color, background, font, border) => {
      const { getByRole } = render(
        <ThemeProvider theme={theme}>
          <Button
            variant={variant as ButtonProps["variant"]}
            color={color as ButtonProps["color"]}
            label="Button test"
            onClick={mockedFunction}
          />
        </ThemeProvider>,
      );

      vi.waitFor(() => {
        expect(getByRole("button", { name: "Button test" })).toHaveStyle({
          backgroundColor: background,
          color: font,
          borderColor: border,
        });
      });
    },
  );

  test.each([
    [
      "contained",
      "rgba(0, 0, 0, 0.12)",
      "rgba(0, 0, 0, 0.26)",
      "rgba(0, 0, 0, 0.12)",
    ],
    ["outlined", "transparent", "rgba(0, 0, 0, 0.26)", "rgba(0, 0, 0, 0.12)"],
  ])(
    "should render correctly when variant is %s and button is disabled",
    (variant, background, font, border) => {
      const { getByRole } = render(
        <ThemeProvider theme={theme}>
          <Button
            variant={variant as ButtonProps["variant"]}
            label="Button test"
            onClick={mockedFunction}
            disabled
          />
        </ThemeProvider>,
      );

      vi.waitFor(() => {
        expect(getByRole("button", { name: "Button test" })).toHaveStyle({
          backgroundColor: background,
          color: font,
          borderColor: border,
        });
      });
    },
  );

  test.each([["primary"], ["secondary"], ["tertiary"], ["error"]])(
    "should render correctly when variant is contained and color is %s and the user hovers the mouse over the button",
    (color) => {
      beforeEach(() => {
        vi.clearAllMocks();
      });

      const { getByRole } = render(
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color={color as ButtonProps["color"]}
            label="Button test"
            onClick={mockedFunction}
          />
        </ThemeProvider>,
      );

      const button = getByRole("button", { name: "Button test" });

      userEvent.hover(button);

      vi.waitFor(() => {
        expect(getByRole("button", { name: "Button test" })).toHaveStyle({
          backgroundColor: "#000000",
          color: "#FFFFFF",
          borderColor: "#000000",
        });
      });
    },
  );

  test.each([["primary"], ["secondary"], ["tertiary"], ["error"]])(
    "should render correctly when variant is outlined and color is %s and the user hovers the mouse over the button",
    (color) => {
      beforeEach(() => {
        vi.clearAllMocks();
      });

      const { getByRole } = render(
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            color={color as ButtonProps["color"]}
            label="Button test"
            onClick={mockedFunction}
          />
        </ThemeProvider>,
      );

      const button = getByRole("button", { name: "Button test" });

      userEvent.hover(button);

      vi.waitFor(() => {
        expect(getByRole("button", { name: "Button test" })).toHaveStyle({
          backgroundColor: "transparent",
          borderColor: "#000000",
          color: "#000000",
        });
      });
    },
  );

  test("should render correctly when variant is contained and color is contrast and the user hovers the mouse over the button", () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="contrast"
          label="Button test"
          onClick={mockedFunction}
        />
      </ThemeProvider>,
    );

    const button = getByRole("button", { name: "Button test" });

    userEvent.hover(button);

    vi.waitFor(() => {
      expect(getByRole("button", { name: "Button test" })).toHaveStyle({
        backgroundColor: "#FFFFFF",
        color: "#000000",
        borderColor: "#FFFFFF",
      });
    });
  });

  test("should render correctly when variant is outlined and color is contrast and the user hovers the mouse over the button", () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          color="contrast"
          label="Button test"
          onClick={mockedFunction}
        />
      </ThemeProvider>,
    );

    const button = getByRole("button", { name: "Button test" });

    userEvent.hover(button);

    vi.waitFor(() => {
      expect(getByRole("button", { name: "Button test" })).toHaveStyle({
        backgroundColor: "transparent",
        color: "#FFFFFF",
        borderColor: "#FFFFFF",
      });
    });
  });

  test("should call onClick function", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button label="Button test" onClick={mockedFunction} />
      </ThemeProvider>,
    );

    const button = getByRole("button", { name: "Button test" });

    userEvent.click(button);

    vi.waitFor(() => {
      expect(mockedFunction).toHaveBeenCalled();
    });
  });
});
