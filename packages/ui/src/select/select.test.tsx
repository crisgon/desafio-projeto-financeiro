import { describe, it, expect, vi } from "vitest";
import { Select } from ".";
import { render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

const args = {
  options: [
    { value: "1", label: "Câmbio de Moeda" },
    { value: "2", label: "DOC/TED" },
    { value: "3", label: "Empréstimo e Financiamento" },
  ],
  onChange: vi.fn(),
  placeholder: "Selecione o tipo de transação",
};

describe("Select", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Select {...args} />);
    expect(getByText(args.placeholder)).toBeInTheDocument();
  });

  it("should render options when click", () => {
    const { getByText } = render(<Select {...args} />);

    const selectElement = getByText(args.placeholder);

    userEvent.click(selectElement);

    vi.waitFor(() => {
      expect(getByText("DOC/TED")).toBeInTheDocument();
    });
  });
});
