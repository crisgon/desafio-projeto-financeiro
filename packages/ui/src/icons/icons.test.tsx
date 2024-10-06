import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Icons } from ".";

describe("Icons", () => {
  it("will check icon for no changes", () => {
    const { container } = render(<Icons name="mdiRocketLaunch" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
