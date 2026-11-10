import { describe, expect, it } from "vitest";
import { initialNurseService } from "@/config/site";

describe("Nurse service accordion defaults", () => {
  it("starts with all groups collapsed on mobile", () => {
    expect(initialNurseService(false)).toBe("");
  });
  it("starts with the first group open on desktop", () => {
    expect(initialNurseService(true)).toBe("health-monitoring");
  });
});
