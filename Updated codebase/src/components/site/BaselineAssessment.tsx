import { Link } from "@tanstack/react-router";
import { Building2, Check, House, ShieldCheck, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BASELINE, BASELINE_FEATURES } from "@/config/site";
import { FieldGrid, type Field, type Values } from "@/components/forms/FormKit";
import { baselineTotal } from "@/lib/baseline";
import { cn } from "@/lib/utils";

export function BaselineAssessment() {
  return (
    <div className="mt-10 border-t pt-10">
      <h2 className="text-3xl text-primary">{BASELINE.title}</h2>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{BASELINE.description}</p>
      <p className="mt-4 text-xl font-semibold text-terracotta">
        Video call: ${BASELINE.videoAmount}. Clinic or home visit: ${BASELINE.amount}, one-time.
      </p>
      <p className="mt-1 text-sm text-muted-foreground">Waived on annual plans.</p>
      <h3 className="mt-8 text-xl text-primary">What's included</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {BASELINE_FEATURES.map((f) => (
          <li key={f} className="flex gap-3">
            <Check className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
            {f}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-muted-foreground">
        <strong>Not included:</strong> {BASELINE.exclusions}
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {BASELINE.options.map((o) => (
          <article key={o.id} className="rounded-lg border bg-card p-6">
            {o.id === "clinic" ? (
              <Building2 className="size-7 text-primary" aria-hidden />
            ) : o.id === "video" ? (
              <Video className="size-7 text-primary" aria-hidden />
            ) : (
              <House className="size-7 text-primary" aria-hidden />
            )}
            <h3 className="mt-3 text-2xl text-primary">{o.title}</h3>
            <p className="mt-2 font-semibold text-terracotta">
              ${o.id === "video" ? BASELINE.videoAmount : BASELINE.amount}
            </p>
            <p className="mt-3 text-muted-foreground">{o.description}</p>
            {o.id === "video" && (
              <p className="mt-3 text-sm text-muted-foreground">
                Someone will need to be with your parent to help with the call.
              </p>
            )}
            <Button asChild variant="cta" className="mt-5">
              <Link to="/get-started" search={{ baseline: o.id }}>
                Choose{" "}
                {o.id === "clinic"
                  ? "clinic assessment"
                  : o.id === "video"
                    ? "video call"
                    : "home visit"}
              </Link>
            </Button>
          </article>
        ))}
      </div>
      <div className="mt-8 border-y py-6">
        <h3 className="text-xl text-primary">How booking works</h3>
        <ol className="mt-4 grid gap-5 md:grid-cols-3">
          {[
            "Request a free enrollment call. We confirm your assessment choice and cost before booking or payment.",
            "We call you within 24 hours to schedule. Most visits happen within 3 to 5 days.",
            "Your parent is seen, and you receive the report within 48 hours.",
          ].map((s, i) => (
            <li key={s} className="flex gap-3">
              <span className="font-semibold text-terracotta">{i + 1}.</span>
              {s}
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-cream p-5">
          <h3 className="text-xl text-primary">Help your parent prepare</h3>
          <p className="mt-2">
            Please ask your parent to have ready: all current medications (including herbal
            remedies), any old test results or hospital cards, and a list of symptoms or concerns.
          </p>
        </div>
        <p className="flex gap-3 rounded-lg bg-primary-soft p-5">
          <ShieldCheck className="size-6 shrink-0 text-primary" aria-hidden />
          If the doctor finds anything urgent, we contact you immediately and help arrange next
          steps.
        </p>
      </div>
    </div>
  );
}

export const baselineFields = [
  {
    name: "baseline_location",
    label: "Baseline assessment",
    type: "radio" as const,
    required: true,
  },
  {
    name: "family_time_zone",
    label: "Your time zone",
    type: "text" as const,
    required: true,
    showIf: (v: Values) => v["join_video_call"] === true,
  },
  { name: "parent_consent", label: "Parent consent", type: "consent" as const, required: true },
];
export function BaselineSelection({
  values,
  setValue,
  errors,
}: {
  values: Values;
  setValue: (key: string, value: unknown) => void;
  errors: Record<string, string>;
}) {
  const location = values["baseline_location"];
  const total = baselineTotal(
    location === "home" || location === "video" ? location : "clinic",
    values["caregiver_escort"] === true,
  );
  return (
    <div className="space-y-6">
      <div
        className="grid gap-4 sm:grid-cols-2"
        role="radiogroup"
        aria-label="Baseline assessment"
        aria-required="true"
      >
        {BASELINE.options.map((o) => (
          <Button
            key={o.id}
            type="button"
            variant="outline"
            role="radio"
            aria-checked={location === o.id}
            onClick={() => setValue("baseline_location", o.id)}
            className={cn(
              "h-auto min-h-32 flex-col items-start whitespace-normal rounded-lg p-5 text-left",
              location === o.id && "border-primary bg-primary-soft ring-2 ring-primary",
            )}
          >
            {o.id === "clinic" ? (
              <Building2 aria-hidden />
            ) : o.id === "video" ? (
              <Video aria-hidden />
            ) : (
              <House aria-hidden />
            )}
            <span>
              {o.title} (${o.id === "video" ? BASELINE.videoAmount : BASELINE.amount})
            </span>
            {o.id === "home" && (
              <span className="text-sm font-normal text-muted-foreground">
                Available across Lagos. We'll confirm availability for your parent's area within 24
                hours.
              </span>
            )}
          </Button>
        ))}
      </div>
      {errors["baseline_location"] && (
        <p role="alert" className="text-destructive">
          {errors["baseline_location"]}
        </p>
      )}
      {location === "clinic" && (
        <fieldset>
          <legend className="mb-3 font-medium">
            Would you like a caregiver to accompany your parent to and from the clinic?
          </legend>
          <div className="space-y-3">
            {[
              { value: false, label: "No, we'll arrange transport" },
              { value: true, label: `Yes, add a caregiver escort (+$${BASELINE.escortAmount})` },
            ].map((o) => (
              <label key={o.label} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="caregiver_escort"
                  className="size-5 accent-primary"
                  checked={(values["caregiver_escort"] === true) === o.value}
                  onChange={() => setValue("caregiver_escort", o.value)}
                />
                {o.label}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <FieldGrid
        fields={[
          ...(location === "video"
            ? []
            : ([
                {
                  name: "join_video_call",
                  label: "Video call",
                  type: "consent",
                  placeholder: "I'd like to join the assessment by video call.",
                },
                {
                  name: "family_time_zone",
                  label: "Your time zone",
                  type: "text",
                  required: true,
                  placeholder: "e.g. US Central or UK",
                  showIf: (v: Values) => v["join_video_call"] === true,
                },
              ] as Field[])),
          {
            name: "parent_consent",
            label: "Parent consent",
            type: "consent",
            required: true,
            placeholder: "My parent knows about this visit and has agreed to it.",
          },
        ]}
        values={values}
        setValue={setValue}
        errors={errors}
      />
      {(location === "clinic" || location === "home" || location === "video") && (
        <div className="border-t pt-5" aria-live="polite">
          <p className="font-semibold">
            {location === "home"
              ? "Doctor home visit"
              : location === "video"
                ? "Video call baseline"
                : "Baseline at partner clinic"}
            : ${location === "video" ? BASELINE.videoAmount : BASELINE.amount}.{" "}
            {location === "clinic" &&
              values["caregiver_escort"] === true &&
              `Caregiver escort: $${BASELINE.escortAmount}. `}
            Total: ${total}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {location === "video"
              ? `If the doctor recommends a clinic or home visit within ${BASELINE.videoCreditDays} days, your $${BASELINE.videoAmount} counts toward it.`
              : "Lab tests and medication, if needed, are charged at cost and only after you approve."}
          </p>
        </div>
      )}
    </div>
  );
}
