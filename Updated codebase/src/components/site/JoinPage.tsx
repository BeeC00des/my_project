import type { ReactNode } from "react";
import { Info } from "lucide-react";
import { PageHero, SectionHeading } from "./primitives";
import {
  SimpleForm,
  Success,
  check,
  plainDetails,
  type Field,
  type UploadedFile,
  type Values,
} from "@/components/forms/FormKit";
import { supabase } from "@/integrations/supabase/client";

type Table = "nurse_applicants" | "doctor_applicants" | "caregiver_applicants";

export function JoinPage({
  title,
  intro,
  image,
  imageAlt,
  eyebrow,
  table,
  fields,
  licenseField,
  yearsField,
  why,
  sections,
  poolNote,
}: {
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  table: Table;
  fields: Field[];
  licenseField?: string;
  yearsField?: string;
  why?: { t: string; b: string }[];
  sections: ReactNode;
  poolNote: string;
}) {
  async function onSubmit(v: Values, files: UploadedFile[]) {
    const { error } = await supabase.from(table).insert({
      full_name: String(v["full_name"]),
      email: v["email"] ? String(v["email"]) : null,
      phone: String(v["phone"]),
      license_number: licenseField ? String(v[licenseField] ?? "") || null : null,
      years_experience: yearsField ? String(v[yearsField] ?? "") || null : null,
      source: v["source"] ? String(v["source"]) : null,
      details: plainDetails(fields, v) as never,
      files: files as never,
    });
    check(error);
  }
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} image={image} imageAlt={imageAlt} />
      {why && (
        <section className="py-20">
          <div className="container-page">
            <SectionHeading title="Why join us" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {why.map((w) => (
                <div key={w.t} className="rounded-3xl bg-card p-6 shadow-soft">
                  <h3 className="text-xl text-primary">{w.t}</h3>
                  <p className="mt-2 text-muted-foreground">{w.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="bg-cream py-20">
        <div className="container-page grid gap-10 md:grid-cols-2">{sections}</div>
      </section>
      <section className="py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading title="Apply" />
          <p className="my-6 flex gap-3 rounded-2xl bg-primary-soft p-5">
            <Info className="mt-1 size-5 shrink-0 text-primary" aria-hidden /> {poolNote}
          </p>
          <SimpleForm
            fields={fields}
            folder={table}
            submitLabel="Submit application"
            onSubmit={onSubmit}
            success={
              <Success title="Application received. Thank you.">
                We review every application carefully. If your profile is a good fit, we'll contact
                you on WhatsApp to arrange verification and an interview.
              </Success>
            }
          />
        </div>
      </section>
    </>
  );
}

export function BulletCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-card p-7 shadow-soft">
      <h2 className="text-2xl text-primary">{title}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
