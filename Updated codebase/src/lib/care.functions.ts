import { createServerFn } from "@tanstack/react-start";
import { careRequestSchema, applicationSchema, partnerEnquirySchema } from "./care-validation";

export const listCareServices = createServerFn({ method: "GET" }).handler(async () => {
  const { carePublicClient } = await import("./care-public.server");
  const { data, error } = await carePublicClient()
    .from("services")
    .select("id,name,category,description,status,display_order")
    .order("display_order");
  if (error) throw new Error("We couldn't load services. Please try again.");
  return data;
});
export const submitCareRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => careRequestSchema.parse(data))
  .handler(async ({ data }) => {
    const { carePublicClient } = await import("./care-public.server");
    const client = carePublicClient();
    const { data: service, error: serviceError } = await client
      .from("services")
      .select("status")
      .eq("id", data.service_id)
      .single();
    if (serviceError || !service) throw new Error("Please choose a service from the list.");
    if ((data.kind === "request") !== (service.status === "available"))
      throw new Error("Service availability has changed. Please refresh and try again.");
    const id = crypto.randomUUID();
    const values =
      data.kind === "request"
        ? {
            phone: data.phone,
            country: data.country ?? null,
            existing_family: data.existing_family ?? null,
            parent_name: data.parent_name,
            parent_location: data.parent_location,
            urgency: data.urgency ?? null,
            message: data.message ?? null,
          }
        : {};
    const { error } = await client.from("care_requests").insert({
      ...values,
      id,
      full_name: data.full_name,
      email: data.email,
      service_id: data.service_id,
      status: data.kind === "waitlist" ? "waitlist" : "new",
      consent: data.kind === "request",
    });
    if (error) throw new Error("We couldn't save your request. Please try again.");
    return { id };
  });
export const submitCareApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => applicationSchema.parse(data))
  .handler(async ({ data }) => {
    const { carePublicClient } = await import("./care-public.server");
    const { kind, ...values } = data;
    const id = crypto.randomUUID();
    const { error } = await carePublicClient()
      .from("physiotherapist_applicants")
      .insert({
        ...values,
        id,
        registration_number: data.registration_number ?? "",
        years_experience: data.years_experience ?? null,
      });
    if (error) throw new Error("We couldn't save your application. Please try again.");
    return { id };
  });
// One partner enquiry form for all organisations. Laboratories and pharmacies land
// in their own applicant tables for vetting; every other organisation lands in
// partner_inquiries, so admins keep their existing per-type workflows.
export const submitPartnerEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => partnerEnquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { carePublicClient } = await import("./care-public.server");
    const client = carePublicClient();
    const id = crypto.randomUUID();
    const details = {
      org_type: data.org_type,
      contact_name: data.full_name,
      contact_role: data.role ?? null,
      home_services: data.home_services ?? null,
      services: data.services,
      message: data.message ?? null,
    };
    // The pharmacy table requires a non-empty registration number.
    if (data.org_type === "Pharmacy" && !data.registration_number?.trim())
      throw new Error("Please add your Pharmacists Council of Nigeria registration details.");
    let error: { message: string } | null = null;
    if (data.org_type === "Laboratory" || data.org_type === "Pharmacy") {
      ({ error } = await client
        .from(
          data.org_type === "Laboratory" ? "lab_partner_applicants" : "pharmacy_partner_applicants",
        )
        .insert({
          id,
          full_name: data.organisation,
          email: data.email,
          phone: data.phone,
          location: data.location,
          registration_number: data.registration_number ?? "",
          details,
        }));
    } else {
      ({ error } = await client.from("partner_inquiries").insert({
        id,
        organisation: data.organisation,
        org_type: data.org_type,
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        details,
      }));
    }
    if (error) throw new Error("We couldn't save your enquiry. Please try again.");
    return { id };
  });
