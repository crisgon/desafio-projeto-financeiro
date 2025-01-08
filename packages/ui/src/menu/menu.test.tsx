import { describe, it, expect, vi } from "vitest";
import Menu from ".";
import { fireEvent, getByRole, render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import { beforeEach } from "node:test";

describe("Menu", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render full variant correctly", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1000,
    });

    const { getByRole, getAllByRole } = render(
      <ThemeProvider theme={theme}>
        <Menu variant="full">
          <>
            <Menu.MenuItem
              handleClick={() => console.log("clicou no item")}
              active
            >
              Início
            </Menu.MenuItem>
            <Menu.MenuItem handleClick={() => console.log("clicou no item")}>
              Transações
            </Menu.MenuItem>
            <Menu.MenuItem
              handleClick={() => console.log("clicou no item")}
              disabled
            >
              Investimentos
            </Menu.MenuItem>
            <Menu.MenuItem handleClick={() => console.log("clicou no item")}>
              Outros serviços
            </Menu.MenuItem>
          </>
        </Menu>
      </ThemeProvider>,
    );

    expect(getAllByRole("menuitem")).toHaveLength(4);

    vi.waitFor(() => {
      expect(getByRole("menu")).toHaveStyle("flex-direction: row");
    });
  });

  it("should render compact variant correctly", () => {
    const { getByRole, getAllByRole } = render(
      <ThemeProvider theme={theme}>
        <Menu variant="compact">
          <>
            <Menu.MenuItem
              handleClick={() => console.log("clicou no item")}
              active
            >
              Início
            </Menu.MenuItem>
            <Menu.MenuItem handleClick={() => console.log("clicou no item")}>
              Transações
            </Menu.MenuItem>
            <Menu.MenuItem
              handleClick={() => console.log("clicou no item")}
              disabled
            >
              Investimentos
            </Menu.MenuItem>
            <Menu.MenuItem handleClick={() => console.log("clicou no item")}>
              Outros serviços
            </Menu.MenuItem>
          </>
        </Menu>
      </ThemeProvider>,
    );

    expect(getAllByRole("menuitem")).toHaveLength(4);
    expect(getByRole("menu")).toHaveStyle("flex-direction: column");
  });

  it("should render mobile layout correctly", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 360,
    });

    const { getByRole, queryByRole, getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Menu variant="full">
          <>
            <Menu.MenuItem
              handleClick={() => console.log("clicou no item")}
              active
            >
              Início
            </Menu.MenuItem>
            <Menu.MenuItem handleClick={() => console.log("clicou no item")}>
              Transações
            </Menu.MenuItem>
            <Menu.MenuItem
              handleClick={() => console.log("clicou no item")}
              disabled
            >
              Investimentos
            </Menu.MenuItem>
            <Menu.MenuItem handleClick={() => console.log("clicou no item")}>
              Outros serviços
            </Menu.MenuItem>
          </>
        </Menu>
      </ThemeProvider>,
    );

    const menuButton = getByLabelText("open menu");
    let menu = queryByRole("menu");

    expect(menuButton).toBeInTheDocument();
    expect(menu).not.toBeInTheDocument();

    fireEvent.click(menuButton);

    menu = getByRole("menu");

    expect(menu).toBeInTheDocument();
  });
});
