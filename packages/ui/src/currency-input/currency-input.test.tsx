import { describe, it, expect, vi } from "vitest";
import { CurrencyInput } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

import userEvent from "@testing-library/user-event";

const args = {
  label: "Valor",
  value: "0,00",
  onChange: vi.fn(),
};

describe("Select", () => {
  it("should render correctly", () => {
    const { getByText } = render(<CurrencyInput {...args} />);
    expect(getByText(args.label)).toBeInTheDocument();
  });

  it("should format value when type", () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <CurrencyInput defaultValue="0" onChange={onChangeMock} />
      </ThemeProvider>,
    );

    const inputElement = getByRole("textbox");

    userEvent.type(inputElement, "123456");
    vi.waitFor(() => {
      expect(inputElement).toHaveValue("1.234,56");
      expect(onChangeMock).toHaveBeenCalledWith("123456");
    });
  });
});
