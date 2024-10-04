import { describe, it, expect } from "vitest";
import { Button } from ".";
import { render } from "@testing-library/react";

describe("Button", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Button>Primary</Button>);
    expect(getByText("Primary")).toBeInTheDocument();
  });
});
