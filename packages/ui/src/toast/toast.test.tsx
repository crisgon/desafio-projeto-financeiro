import { describe, it, expect, vi } from "vitest";
import { Toast } from ".";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import userEvent from "@testing-library/user-event";

let defaultProps = {
  isOpen: true,
  content: "This is a toast",
  handleClose: vi.fn(),
};

describe("Toast", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Toast {...defaultProps} type="info" />);
    expect(getByText("This is a toast")).toBeInTheDocument();
  });

  it("should render with correct info icon and style", () => {
    const { getByTestId, getByRole } = render(
      <ThemeProvider theme={theme}>
        <Toast {...defaultProps} type="info" />
      </ThemeProvider>,
    );
    expect(getByTestId("InfoOutlinedIcon")).toBeInTheDocument();

    expect(getByRole("alert")).toHaveStyle({
      color: "rgb(255, 255, 255)",
      backgroundColor: "#0288d1",
    });
  });

  it("should render with correct success icon & style", () => {
    const { getByTestId, getByRole } = render(
      <ThemeProvider theme={theme}>
        <Toast {...defaultProps} type="success" />
      </ThemeProvider>,
    );
    expect(getByTestId("SuccessOutlinedIcon")).toBeInTheDocument();

    expect(getByRole("alert")).toHaveStyle({
      color: "rgb(255, 255, 255)",
      backgroundColor: "#2e7d32",
    });
  });

  it("should render with correct warning icon & style", () => {
    const { getByTestId, getByRole } = render(
      <ThemeProvider theme={theme}>
        <Toast {...defaultProps} type="warning" />
      </ThemeProvider>,
    );
    expect(getByTestId("ReportProblemOutlinedIcon")).toBeInTheDocument();

    expect(getByRole("alert")).toHaveStyle({
      color: "rgb(255, 255, 255)",
      backgroundColor: "#ed6c02",
    });
  });

  it("should render with correct error icon & style", () => {
    const { getByTestId, getByRole } = render(
      <ThemeProvider theme={theme}>
        <Toast {...defaultProps} type="error" />
      </ThemeProvider>,
    );
    expect(getByTestId("ErrorOutlineIcon")).toBeInTheDocument();

    expect(getByRole("alert")).toHaveStyle({
      color: "rgb(255, 255, 255)",
      backgroundColor: "#d32f2f",
    });
  });

  it("should trigger handleClose function when click on close button", () => {
    const handleCloseMock = vi.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Toast {...defaultProps} handleClose={handleCloseMock} type="error" />
      </ThemeProvider>,
    );

    const closeBtn = getByTestId("CloseIcon");

    userEvent.click(closeBtn);

    vi.waitFor(() => {
      expect(handleCloseMock).toHaveBeenCalled();
    });
  });
});
