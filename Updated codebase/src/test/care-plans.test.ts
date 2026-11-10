import { describe, expect, it } from "vitest";
import { BASELINE_FEATURES, PLANS, PLAN_COMPARISON, ONE_TIME_SERVICES, ADD_ONS, SITE } from "@/config/site";

describe("MyCareEnvoy care offers", () => {
  it("keeps approved monthly and annual prices", () => {
    expect(PLANS.map((p) => [p.name, p.price, p.annualPrice])).toEqual([
      ["Essential", "$35", 350], ["Core", "$79", 790], ["Complete", "$149", 1490],
    ]);
    expect(PLANS.find((p) => p.popular)?.id).toBe("core");
  });
  it("compares every plan and includes all service categories", () => {
    for (const row of PLAN_COMPARISON) expect(Object.keys(row.values)).toEqual(PLANS.map((p) => p.id));
    expect(ONE_TIME_SERVICES).toHaveLength(3);
    expect(ADD_ONS).toHaveLength(5);
    expect(SITE.social.twitter).toBe("https://x.com/MyCareEnvoy");
  });
});