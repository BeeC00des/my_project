import { describe, expect, it } from "vitest";
import { partnerEnquirySchema } from "@/lib/care-validation";

const base = {
  organisation: "Test Organisation",
  full_name: "Ada Test",
  email: "person@example.com",
  phone: "+234 805 478 4379",
  location: "Enugu",
  services: "General services",
};

describe("partner enquiry validation", () => {
  it("accepts a pharmacy with registration details", () => {
    const r = partnerEnquirySchema.safeParse({
      ...base,
      org_type: "Pharmacy",
      registration_number: "PCN Premises 1234567",
    });
    expect(r.success).toBe(true);
  });

  it("requires registration details for pharmacies", () => {
    const r = partnerEnquirySchema.safeParse({ ...base, org_type: "Pharmacy" });
    expect(r.success).toBe(false);
  });

  it("accepts a hospital without registration details", () => {
    const r = partnerEnquirySchema.safeParse({ ...base, org_type: "Hospital" });
    expect(r.success).toBe(true);
  });

  it("accepts a laboratory without registration details", () => {
    const r = partnerEnquirySchema.safeParse({ ...base, org_type: "Laboratory" });
    expect(r.success).toBe(true);
  });
});
