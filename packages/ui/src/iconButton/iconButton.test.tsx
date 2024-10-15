import { describe, test, expect, vi, beforeEach } from "vitest";
import { IconButton, IconButtonProps } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import userEvent from "@testing-library/user-event";

const colors = {
  action: "#004D61",
  black: "#000000",
};

describe("Button", () => {
  const mockedFunction = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test.each([
    ["default", colors.action],
    ["dark", colors.black],
  ])("should render correctly when variant is %s", (variant, background) => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <IconButton
          variant={variant as IconButtonProps["variant"]}
          icon={"mdiPen" as IconButtonProps["icon"]}
          onClick={mockedFunction}
        />
      </ThemeProvider>,
    );

    vi.waitFor(() => {
      expect(getByRole("button")).toHaveStyle({
        backgroundColor: background,
      });
    });
  });

  test("should call onClick function", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <IconButton
          variant="default"
          icon={"mdiPen" as IconButtonProps["icon"]}
          onClick={mockedFunction}
        />
      </ThemeProvider>,
    );

    const button = getByRole("button");

    userEvent.click(button);

    vi.waitFor(() => {
      expect(mockedFunction).toHaveBeenCalled();
    });
  });
});
