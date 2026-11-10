import { useState, type ReactNode } from "react";
import { CheckCircle2, Loader2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import type { Json } from "@/integrations/supabase/types";
import { cn } from "@/lib/utils";
import { markEngaged } from "@/lib/visitor-engagement";

export type Option = string | { value: string; label: string };
export type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "number" | "select" | "multi" | "textarea" | "file" | "consent" | "radio";
  required?: boolean;
  options?: Option[];
  placeholder?: string;
  help?: string;
  full?: boolean;
  defaultCountry?: string;
  showIf?: (v: Values) => boolean;
};
export type Values = Record<string, unknown>;
export type UploadedFile = { field: string; label: string; name: string; path: string };

export const COUNTRY_CODES = [
  { code: "+1", label: "US/CA +1" },
  { code: "+44", label: "UK +44" },
  { code: "+234", label: "NG +234" },
  { code: "+353", label: "IE +353" },
  { code: "+49", label: "DE +49" },
  { code: "+971", label: "UAE +971" },
  { code: "+61", label: "AU +61" },
  { code: "+27", label: "ZA +27" },
  { code: "+233", label: "GH +233" },
];

const opt = (o: Option) => (typeof o === "string" ? { value: o, label: o } : o);
const inputCls = "h-12 w-full rounded-xl border border-input bg-card px-4 text-base outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive";

const MAX = 5 * 1024 * 1024;
const OK_TYPES = ["application/pdf", "image/jpeg", "image/png"];

export function validate(fields: Field[], v: Values): Record<string, string> {
  const errs: Record<string, string> = {};
  for (const f of fields) {
    if (f.showIf && !f.showIf(v)) continue;
    const val = v[f.name];
    const empty = val === undefined || val === null || val === "" || (Array.isArray(val) && val.length === 0) || (f.type === "tel" && typeof val === "string" && !val.split(" ")[1]);
    if (f.required && (empty || (f.type === "consent" && val !== true))) {
      errs[f.name] = f.type === "consent" ? "Please tick this box to continue." : f.type === "multi" ? "Please choose at least one." : f.type === "file" ? "Please attach this file." : `Please add ${f.label.toLowerCase()}.`;
      continue;
    }
    if (!empty && f.type === "email" && !/^\S+@\S+\.\S+$/.test(String(val))) errs[f.name] = "That email doesn't look quite right.";
    if (!empty && f.type === "tel" && String(val).replace(/\D/g, "").length < 8) errs[f.name] = "Please check the phone number.";
    if (!empty && f.type === "file") {
      const file = val as File;
      if (!OK_TYPES.includes(file.type)) errs[f.name] = "Please use a PDF, JPG or PNG file.";
      else if (file.size > MAX) errs[f.name] = "That file is over 5MB. Please use a smaller one.";
    }
  }
  return errs;
}

function FieldInput({ f, value, onChange, error }: { f: Field; value: unknown; onChange: (v: unknown) => void; error?: string | undefined }) {
  const id = `f-${f.name}`;
  const describedBy = error ? `${id}-err` : f.help ? `${id}-help` : undefined;
  const common = { id, "aria-invalid": !!error, "aria-describedby": describedBy };

  switch (f.type) {
    case "textarea":
      return <textarea {...common} rows={4} placeholder={f.placeholder} value={(value as string) ?? ""} onChange={(e) => onChange(e.target.value)} className={cn(inputCls, "h-auto py-3")} />;
    case "select":
      return (
        <select {...common} value={(value as string) ?? ""} onChange={(e) => onChange(e.target.value)} className={inputCls}>
          <option value="">Choose one</option>
          {f.options!.map(opt).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      );
    case "radio":
      return (
        <div role="radiogroup" aria-labelledby={`${id}-label`} className="flex flex-wrap gap-2">
          {f.options!.map(opt).map((o) => (
            <label key={o.value} className={cn("cursor-pointer rounded-full border px-4 py-2 transition", value === o.value ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary")}>
              <input type="radio" name={f.name} value={o.value} checked={value === o.value} onChange={() => onChange(o.value)} className="sr-only" />
              {o.label}
            </label>
          ))}
        </div>
      );
    case "multi": {
      const arr = (value as string[]) ?? [];
      return (
        <div className="grid gap-2 sm:grid-cols-2" role="group" aria-labelledby={`${id}-label`}>
          {f.options!.map(opt).map((o) => {
            const on = arr.includes(o.value);
            return (
              <label key={o.value} className={cn("flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition", on ? "border-primary bg-primary-soft" : "bg-card hover:border-primary/50")}>
                <input type="checkbox" checked={on} onChange={() => onChange(on ? arr.filter((x) => x !== o.value) : [...arr, o.value])} className="size-4 accent-[var(--primary)]" />
                <span>{o.label}</span>
              </label>
            );
          })}
        </div>
      );
    }
    case "consent":
      return (
        <label className="flex cursor-pointer items-start gap-3">
          <input {...common} type="checkbox" checked={value === true} onChange={(e) => onChange(e.target.checked)} className="mt-1 size-5 accent-[var(--primary)]" />
          <span>{f.placeholder}</span>
        </label>
      );
    case "tel": {
      const [cc, num] = ((value as string) ?? `${f.defaultCountry ?? "+1"} `).split(" ");
      return (
        <div className="flex gap-2">
          <label className="sr-only" htmlFor={`${id}-cc`}>Country code</label>
          <select id={`${id}-cc`} value={cc} onChange={(e) => onChange(`${e.target.value} ${num ?? ""}`)} className={cn(inputCls, "w-32 shrink-0 px-2")}>
            {COUNTRY_CODES.map((c) => <option key={c.code} value={c.code}>{c.label}</option>)}
          </select>
          <input {...common} type="tel" inputMode="tel" placeholder={f.placeholder ?? "Phone number"} value={num ?? ""} onChange={(e) => onChange(`${cc} ${e.target.value.replace(/[^\d\s-]/g, "")}`)} className={inputCls} />
        </div>
      );
    }
    case "file": {
      const file = value as File | undefined;
      return file ? (
        <div className="flex items-center justify-between gap-3 rounded-xl border bg-card px-4 py-3">
          <span className="truncate">{file.name} <span className="text-sm text-muted-foreground">({(file.size / 1024 / 1024).toFixed(1)}MB)</span></span>
          <button type="button" onClick={() => onChange(undefined)} aria-label={`Remove ${file.name}`} className="rounded-full p-1 hover:bg-muted"><X className="size-4" /></button>
        </div>
      ) : (
        <label htmlFor={id} className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed bg-card px-4 py-4 text-muted-foreground transition hover:border-primary hover:text-primary">
          <Upload className="size-5" aria-hidden /> Choose a file (PDF, JPG or PNG, max 5MB)
          <input {...common} type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" className="sr-only" onChange={(e) => onChange(e.target.files?.[0])} />
        </label>
      );
    }
    default:
      return <input {...common} type={f.type} placeholder={f.placeholder} value={(value as string) ?? ""} onChange={(e) => onChange(e.target.value)} className={inputCls} />;
  }
}

export function FieldGrid({ fields, values, setValue, errors }: { fields: Field[]; values: Values; setValue: (k: string, v: unknown) => void; errors: Record<string, string> }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {fields.filter((f) => !f.showIf || f.showIf(values)).map((f) => {
        const wide = f.full || ["textarea", "multi", "consent", "file", "radio"].includes(f.type);
        return (
          <div key={f.name} className={cn(wide && "md:col-span-2")}>
            {f.type !== "consent" && (
              <label id={`f-${f.name}-label`} htmlFor={`f-${f.name}`} className="mb-2 block font-medium">
                {f.label} {f.required ? <span className="text-terracotta" aria-hidden>*</span> : <span className="text-sm font-normal text-muted-foreground">(optional)</span>}
              </label>
            )}
            <FieldInput f={f} value={values[f.name]} onChange={(v) => setValue(f.name, v)} error={errors[f.name]} />
            {f.help && !errors[f.name] && <p id={`f-${f.name}-help`} className="mt-1.5 text-sm text-muted-foreground">{f.help}</p>}
            {errors[f.name] && <p id={`f-${f.name}-err`} className="mt-1.5 text-sm font-medium text-destructive" role="alert">{errors[f.name]}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="absolute -left-[9999px]" aria-hidden>
      <label>Leave this empty<input tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} /></label>
    </div>
  );
}

export async function uploadFiles(folder: string, fields: Field[], values: Values, onProgress: (label: string) => void): Promise<UploadedFile[]> {
  const out: UploadedFile[] = [];
  for (const f of fields.filter((x) => x.type === "file")) {
    const file = values[f.name] as File | undefined;
    if (!file) continue;
    onProgress(`Uploading ${f.label.toLowerCase()}...`);
    const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${folder}/${crypto.randomUUID()}-${safe}`;
    const { error } = await supabase.storage.from("applicant-files").upload(path, file, { contentType: file.type });
    if (error) throw new Error(`We couldn't upload your ${f.label.toLowerCase()}. Please try again.`);
    out.push({ field: f.name, label: f.label, name: file.name, path });
  }
  return out;
}

/** Strips files and returns a plain JSON object for the details column. */
export function plainDetails(fields: Field[], values: Values): Json {
  const out: Record<string, unknown> = {};
  for (const f of fields) {
    if (f.type === "file") continue;
    if (values[f.name] !== undefined && values[f.name] !== "") out[f.label] = values[f.name];
  }
  return out as Json;
}

export function Success({ title, children, actions }: { title: string; children: ReactNode; actions?: ReactNode }) {
  return (
    <div className="rounded-3xl bg-card p-8 text-center shadow-soft md:p-12" role="status">
      <CheckCircle2 className="mx-auto size-14 text-primary" aria-hidden />
      <h2 className="mt-4 text-3xl text-primary">{title}</h2>
      <div className="mx-auto mt-3 max-w-lg text-lg text-muted-foreground">{children}</div>
      {actions && <div className="mt-7 flex flex-wrap justify-center gap-3">{actions}</div>}
    </div>
  );
}

/** Single-page form: validates, uploads files, then calls onSubmit. */
export function SimpleForm({
  fields,
  folder,
  submitLabel = "Submit",
  onSubmit,
  success,
  initial = {},
}: {
  fields: Field[];
  folder?: string;
  submitLabel?: string;
  onSubmit: (values: Values, files: UploadedFile[]) => Promise<void>;
  success: ReactNode;
  initial?: Values;
}) {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hp, setHp] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [fail, setFail] = useState("");

  const setValue = (k: string, v: unknown) => {
    setValues((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setFail("");
    const errs = validate(fields, values);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      document.getElementById(`f-${Object.keys(errs).find((k) => errs[k])}`)?.focus();
      return;
    }
    if (hp) return setDone(true);
    try {
      setBusy("Sending...");
      const files = folder ? await uploadFiles(folder, fields, values, setBusy) : [];
      setBusy("Saving your details...");
      await onSubmit(values, files);
      markEngaged();
      setDone(true);
      window.scrollTo({ top: (document.getElementById("form-top")?.offsetTop ?? 0) - 100, behavior: "smooth" });
    } catch (err) {
      setFail(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(null);
    }
  }

  if (done) return <div id="form-top">{success}</div>;
  return (
    <form id="form-top" onSubmit={submit} noValidate className="relative rounded-3xl bg-card p-6 shadow-soft md:p-10">
      <Honeypot value={hp} onChange={setHp} />
      <FieldGrid fields={fields} values={values} setValue={setValue} errors={errors} />
      {fail && <p className="mt-6 rounded-xl bg-destructive/10 p-3 text-destructive" role="alert">{fail}</p>}
      <Button type="submit" variant="cta" size="lg" className="mt-8 w-full sm:w-auto" disabled={!!busy}>
        {busy ? <><Loader2 className="animate-spin" aria-hidden /> {busy}</> : submitLabel}
      </Button>
    </form>
  );
}

export function check(error: { message: string } | null) {
  if (error) throw new Error("We couldn't save your details. Please try again in a moment.");
}
