import { describe, it, expect, vi } from "vitest";
import { MenuItem } from ".";
import { fireEvent, getByRole, render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import { beforeEach } from "node:test";

describe("MenuItem", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render default variant correctly", () => {
    const { getByRole, getByText } = render(
      <ThemeProvider theme={theme}>
        <MenuItem handleClick={vi.fn}>Início</MenuItem>
      </ThemeProvider>,
    );

    expect(getByText("Início")).toBeInTheDocument();

    vi.waitFor(() => {
      expect(getByRole("menuitem")).toHaveStyle("color: #000000");
    });
  });

  it("should render active variant correctly", () => {
    const { getByRole, getByText } = render(
      <ThemeProvider theme={theme}>
        <MenuItem handleClick={vi.fn} active>
          Início
        </MenuItem>
      </ThemeProvider>,
    );

    const menuItem = getByRole("menuitem");

    expect(getByText("Início")).toBeInTheDocument();
    expect(menuItem).toHaveStyle("color: rgb(71, 161, 56)");
    expect(menuItem).toHaveStyle("font-weight: 700");
    expect(menuItem).toHaveStyle("border-bottom: 1px solid #47A138");
  });

  it("should render disabled variant correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MenuItem handleClick={vi.fn} disabled>
          Início
        </MenuItem>
      </ThemeProvider>,
    );

    const text = getByText("Início");

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle("pointer-events: none");
  });
});
