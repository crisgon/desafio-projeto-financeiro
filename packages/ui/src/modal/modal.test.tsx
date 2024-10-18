import { describe, it, expect, vi } from "vitest";
import { Modal } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import userEvent from "@testing-library/user-event";

import theme from "../theme";

const defaultProps = {
  title: "Confirmar ou cancelar?",
  open: true,
  content: (
    <div id="dialog-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      architecto tempore, numquam expedita commodi, voluptatum cum reiciendis
      consectetur sapiente aliquam eius soluta et, ipsum quae beatae itaque
      delectus vitae! Eligendi.
    </div>
  ),
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar Ação",
  handleClose: vi.fn(),
  handleConfirm: vi.fn(),
};

describe("Modal", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Modal {...defaultProps} />);
    expect(getByText("Confirmar ou cancelar?")).toBeInTheDocument();
  });

  it("should call handleClose when click x", () => {
    const handleCloseMock = vi.fn();
    const { getByTestId } = render(<Modal {...defaultProps} />);
    const closeBtn = getByTestId("close-button");

    userEvent.click(closeBtn);

    vi.waitFor(() => {
      expect(handleCloseMock).toHaveBeenCalled();
    });
  });

  it("should render default Button with correct style", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Modal {...defaultProps} />
      </ThemeProvider>,
    );
    expect(getByText("Cancelar Ação")).toHaveStyle({
      borderColor: "rgb(71 161 56 / 50%)",
    });
  });
});
