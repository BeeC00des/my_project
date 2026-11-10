import { describe, expect, it } from "vitest";
import {
  CARE_SERVICES,
  CARE_REQUEST_STATUSES,
  APPLICATION_STATUSES,
} from "@/config/care-on-request";
import { careRequestSchema, applicationSchema } from "@/lib/care-validation";
const request = {
  kind: "request",
  full_name: "Test family",
  email: "test@example.com",
  phone: "+1 5551234567",
  parent_name: "Parent",
  parent_location: "Abuja, FCT",
  service_id: "physiotherapy",
  consent: true,
};
describe("Care on request rules", () => {
  it.each([
    "physiotherapy",
    "post-hospital",
    "home-lab",
    "specialist",
    "hospital",
    "medication",
    "dietitian",
    "caregivers",
    "safety",
    "equipment",
    "memory",
    "palliative",
  ])("starts %s available", (id) => {
    expect(CARE_SERVICES.find((s) => s.id === id)?.status).toBe("available");
  });
  it("keeps only eye, dental and hearing checks coming soon", () => {
    expect(CARE_SERVICES.filter((s) => s.status === "coming_soon").map((s) => s.id)).toEqual([
      "sensory",
    ]);
  });
  it("requires the parent's consent", () => {
    expect(careRequestSchema.safeParse({ ...request, consent: false }).success).toBe(false);
    expect(careRequestSchema.safeParse(request).success).toBe(true);
  });
  it("requires parent city and state", () => {
    expect(careRequestSchema.safeParse({ ...request, parent_location: "" }).success).toBe(false);
  });
  it("allows name and email only for a service waitlist", () => {
    expect(
      careRequestSchema.safeParse({
        kind: "waitlist",
        full_name: "Test",
        email: "test@example.com",
        service_id: "sensory",
      }).success,
    ).toBe(true);
  });
  it("supports the requested care pipeline", () => {
    expect([...CARE_REQUEST_STATUSES]).toEqual([
      "new",
      "contacted",
      "quoted",
      "booked",
      "completed",
      "cancelled",
      "waitlist",
    ]);
  });
  it("preserves the existing applicant pipeline", () => {
    expect([...APPLICATION_STATUSES]).toEqual([
      "Applied",
      "Documents checked",
      "Verified",
      "Interviewed",
      "Active pool",
      "Not progressing",
    ]);
  });
  const applicant = {
    kind: "physiotherapists",
    full_name: "Test",
    email: "test@example.com",
    phone: "+234 8050000000",
    location: "Nigeria",
    registration_number: "TEST123",
    details: { "Reference 1": "Role and phone", "Reference 2": "Role and phone" },
    files: [],
  };
  it("requires physiotherapist board registration", () => {
    expect(applicationSchema.safeParse({ ...applicant, registration_number: "" }).success).toBe(
      false,
    );
    expect(applicationSchema.safeParse(applicant).success).toBe(true);
  });
  it("requires two physiotherapist references", () => {
    expect(
      applicationSchema.safeParse({ ...applicant, details: { "Reference 1": "Role and phone" } })
        .success,
    ).toBe(false);
  });
  it("requires pharmacy premises registration", () => {
    expect(
      applicationSchema.safeParse({
        ...applicant,
        kind: "pharmacy-partners",
        registration_number: "",
      }).success,
    ).toBe(false);
  });
});
