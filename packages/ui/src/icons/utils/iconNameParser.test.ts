import { describe, expect, it } from "vitest";
import { iconNameParser } from "./iconNameParser";

describe("iconNameParser", () => {
  it("should return legacy name to iconify", () => {
    expect(iconNameParser("mdiRocketLaunch")).toBe("mdi:rocket-launch");
  });

  it("should return original name to iconify", () => {
    expect(iconNameParser("mdi:rocket-launch")).toBe("mdi:rocket-launch");
  });
});
