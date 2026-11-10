import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Session } from "@supabase/supabase-js";
import { z } from "zod";
import { Download, FileText, LayoutDashboard, Loader2, LogOut, Plus, Search, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "@/components/site/primitives";
import { cn } from "@/lib/utils";
import { CareServicesAdmin } from "@/components/site/CareServicesAdmin";
import { CARE_REQUEST_STATUSES, CARE_URGENCIES } from "@/config/care-on-request";

export const Route = createFileRoute("/admin")({
  validateSearch: z.object({ s: z.string().optional() }),
  head: () => ({ meta: [{ title: "Admin | MyCareEnvoy" }, { name: "robots", content: "noindex" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { name: "description", content: "MyCareEnvoy admin dashboard" }, { property: "og:title", content: "Admin | MyCareEnvoy" }, { property: "og:description", content: "MyCareEnvoy admin dashboard" }] }),
  component: AdminPage,
});

type TableName = "family_leads" | "waitlist" | "nurse_applicants" | "doctor_applicants" | "caregiver_applicants" | "partner_inquiries" | "employer_inquiries" | "referrals" | "care_requests" | "physiotherapist_applicants" | "lab_partner_applicants" | "pharmacy_partner_applicants";
type Row = Record<string, unknown> & { id: string; created_at: string; status?: string; notes?: string | null };

const APPLICANT = ["Applied", "Documents checked", "Verified", "Interviewed", "Active pool", "Not progressing"];
const INQUIRY = ["New", "Contacted", "In discussion", "Partner", "Closed"];

const SECTIONS: { key: string; label: string; table: TableName; statuses?: string[]; cols: [string, string][] }[] = [
  { key: "care-requests", label: "Care requests", table: "care_requests", statuses: [...CARE_REQUEST_STATUSES], cols: [["full_name", "Name"], ["service_id", "Service"], ["phone", "WhatsApp"], ["parent_location", "Parent location"], ["urgency", "Urgency"]] },
  { key: "physiotherapists", label: "Physiotherapists", table: "physiotherapist_applicants", statuses: APPLICANT, cols: [["full_name", "Name"], ["registration_number", "Registration"], ["location", "Location"], ["phone", "Phone"]] },
  { key: "lab-partners", label: "Lab partners", table: "lab_partner_applicants", statuses: APPLICANT, cols: [["full_name", "Lab"], ["location", "Coverage"], ["email", "Email"], ["phone", "Phone"]] },
  { key: "pharmacy-partners", label: "Pharmacy partners", table: "pharmacy_partner_applicants", statuses: APPLICANT, cols: [["full_name", "Pharmacy"], ["registration_number", "Registration"], ["location", "Location"], ["phone", "Phone"]] },
  { key: "families", label: "Families", table: "family_leads", statuses: ["New inquiry", "Call booked", "Onboarding", "Active", "Paused", "Closed"], cols: [["full_name", "Name"], ["country", "Country"], ["parent_area", "Parent area"], ["plan", "Plan"], ["source", "Source"]] },
  { key: "waitlist", label: "Waitlist", table: "waitlist", cols: [["email", "Email"], ["parent_city", "City"]] },
  { key: "nurses", label: "Nurses", table: "nurse_applicants", statuses: APPLICANT, cols: [["full_name", "Name"], ["phone", "Phone"], ["license_number", "NMCN"], ["years_experience", "Experience"]] },
  { key: "doctors", label: "Doctors", table: "doctor_applicants", statuses: APPLICANT, cols: [["full_name", "Name"], ["phone", "Phone"], ["license_number", "MDCN"], ["years_experience", "Years"]] },
  { key: "caregivers", label: "Caregivers", table: "caregiver_applicants", statuses: APPLICANT, cols: [["full_name", "Name"], ["phone", "Phone"], ["source", "Source"]] },
  { key: "partners", label: "Partners", table: "partner_inquiries", statuses: INQUIRY, cols: [["organisation", "Organisation"], ["org_type", "Type"], ["full_name", "Contact"], ["email", "Email"]] },
  { key: "employers", label: "Employers", table: "employer_inquiries", statuses: INQUIRY, cols: [["company", "Company"], ["company_size", "Size"], ["full_name", "Contact"], ["email", "Email"]] },
  { key: "referrals", label: "Referrals", table: "referrals", statuses: ["New", "Contacted", "Signed up", "Rewarded", "Closed"], cols: [["full_name", "Referrer"], ["friend_name", "Friend"], ["friend_contact", "Friend contact"]] },
];

const fmt = (v: unknown): string => (v === null || v === undefined ? "" : Array.isArray(v) ? v.join(", ") : typeof v === "object" ? JSON.stringify(v) : String(v));

function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    return () => data.subscription.unsubscribe();
  }, []);
  return { session, ready };
}

function AdminPage() {
  const { session, ready } = useSession();
  const isAdmin = useQuery({
    queryKey: ["is-admin", session?.user.id],
    enabled: !!session,
    queryFn: async () => {
      if (!session) return false;
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle();
      return !!data;
    },
  });

  if (!ready) return <Center><Loader2 className="animate-spin" /></Center>;
  if (!session) return <Login />;
  if (isAdmin.isLoading) return <Center><Loader2 className="animate-spin" /></Center>;
  if (!isAdmin.data)
    return (
      <Center>
        <div className="max-w-sm text-center">
          <h1 className="text-2xl text-primary">No admin access</h1>
          <p className="mt-2 text-muted-foreground">{session.user.email} is signed in but isn't an admin.</p>
          <Button className="mt-6" onClick={() => supabase.auth.signOut()}>Sign out</Button>
        </div>
      </Center>
    );
  return <Dashboard email={session.user.email ?? ""} />;
}

function Center({ children }: { children: React.ReactNode }) {
  return <div className="grid min-h-screen place-items-center bg-cream p-4">{children}</div>;
}

function Login() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message);
    } else {
      const { error, data } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/admin` } });
      if (error) setMsg(error.message);
      else if (!data.session) setMsg("Check your email to confirm your account, then sign in.");
    }
    setBusy(false);
  }
  return (
    <Center>
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl bg-card p-8 shadow-lift">
        <Logo />
        <h1 className="mt-6 text-2xl text-primary">{mode === "in" ? "Admin sign in" : "Create admin account"}</h1>
        <label className="mt-6 block font-medium" htmlFor="a-email">Email</label>
        <input id="a-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 h-11 w-full rounded-xl border bg-background px-3" />
        <label className="mt-4 block font-medium" htmlFor="a-pass">Password</label>
        <input id="a-pass" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 h-11 w-full rounded-xl border bg-background px-3" />
        {msg && <p className="mt-4 text-sm text-terracotta" role="alert">{msg}</p>}
        <Button type="submit" className="mt-6 w-full" size="lg" disabled={busy}>{busy ? <Loader2 className="animate-spin" /> : mode === "in" ? "Sign in" : "Create account"}</Button>
        <button type="button" onClick={() => setMode(mode === "in" ? "up" : "in")} className="mt-4 w-full text-sm text-muted-foreground hover:underline">
          {mode === "in" ? "First time? Create the admin account" : "Already have an account? Sign in"}
        </button>
        <Link to="/" className="mt-2 block text-center text-sm text-primary hover:underline">Back to website</Link>
      </form>
    </Center>
  );
}

function Dashboard({ email }: { email: string }) {
  const { s } = Route.useSearch();
  const section = SECTIONS.find((x) => x.key === s);
  const isTestimonials = s === "testimonials";
  const isServices = s === "services";
  return (
    <div className="flex min-h-screen bg-cream">
      <aside className="hidden w-60 shrink-0 flex-col bg-sidebar p-5 text-sidebar-foreground md:flex">
        <Logo light />
        <nav className="mt-8 flex flex-1 flex-col gap-1" aria-label="Admin">
          <Link to="/admin" search={{}} className={cn("flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-sidebar-accent", !section && !isTestimonials && !isServices && "bg-sidebar-accent")}><LayoutDashboard className="size-4" /> Overview</Link>
          <Link to="/admin" search={{ s: "services" }} className={cn("rounded-xl px-3 py-2 hover:bg-sidebar-accent", isServices && "bg-sidebar-accent")}>Services</Link>
          {SECTIONS.map((x) => (
            <Link key={x.key} to="/admin" search={{ s: x.key }} className={cn("rounded-xl px-3 py-2 hover:bg-sidebar-accent", section?.key === x.key && "bg-sidebar-accent")}>{x.label}</Link>
          ))}
          <Link to="/admin" search={{ s: "testimonials" }} className={cn("rounded-xl px-3 py-2 hover:bg-sidebar-accent", isTestimonials && "bg-sidebar-accent")}>Testimonials</Link>
        </nav>
        <p className="truncate text-xs opacity-70">{email}</p>
        <button onClick={() => supabase.auth.signOut()} className="mt-2 flex items-center gap-2 text-sm hover:underline"><LogOut className="size-4" /> Sign out</button>
      </aside>
      <div className="min-w-0 flex-1">
        <div className="flex gap-2 overflow-x-auto border-b bg-card p-3 md:hidden">
          <Link to="/admin" search={{}} className="shrink-0 rounded-full border px-3 py-1 text-sm">Overview</Link>
          <Link to="/admin" search={{ s: "services" }} className={cn("shrink-0 rounded-full border px-3 py-1 text-sm", isServices && "bg-primary text-primary-foreground")}>Services</Link>
          {SECTIONS.map((x) => <Link key={x.key} to="/admin" search={{ s: x.key }} className={cn("shrink-0 rounded-full border px-3 py-1 text-sm", section?.key === x.key && "bg-primary text-primary-foreground")}>{x.label}</Link>)}
          <Link to="/admin" search={{ s: "testimonials" }} className={cn("shrink-0 rounded-full border px-3 py-1 text-sm", isTestimonials && "bg-primary text-primary-foreground")}>Testimonials</Link>
        </div>
        <main className="p-4 md:p-8">{isServices ? <CareServicesAdmin /> : isTestimonials ? <TestimonialsAdmin /> : section ? <TableView key={section.key} section={section} /> : <Overview />}</main>
      </div>
    </div>
  );
}

type Testimonial = { id: string; quote: string; name: string; detail: string | null; published: boolean; created_at: string };

function TestimonialsAdmin() {
  const qc = useQueryClient();
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [busy, setBusy] = useState(false);
  const list = useQuery({
    queryKey: ["admin", "testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data as Testimonial[];
    },
  });

  async function add(e: React.FormEvent) {
    e.preventDefault();
    if (!quote.trim() || !name.trim()) { toast.error("Quote and name are required"); return; }
    setBusy(true);
    const { error } = await supabase.from("testimonials").insert({ quote: quote.trim(), name: name.trim(), detail: detail.trim() || null, published: false });
    setBusy(false);
    if (error) { toast.error("Couldn't add testimonial"); return; }
    toast.success("Added. Publish it when you're ready for it to appear on the site.");
    setQuote(""); setName(""); setDetail("");
    qc.invalidateQueries({ queryKey: ["admin", "testimonials"] });
  }

  async function setPublished(t: Testimonial, published: boolean) {
    const { error } = await supabase.from("testimonials").update({ published }).eq("id", t.id);
    if (error) { toast.error("Couldn't update"); return; }
    toast.success(published ? "Published on the website" : "Unpublished");
    qc.invalidateQueries({ queryKey: ["admin", "testimonials"] });
  }

  async function remove(t: Testimonial) {
    const { error } = await supabase.from("testimonials").delete().eq("id", t.id);
    if (error) { toast.error("Couldn't delete"); return; }
    toast.success("Deleted");
    qc.invalidateQueries({ queryKey: ["admin", "testimonials"] });
  }

  return (
    <div>
      <h1 className="text-3xl text-primary">Testimonials</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">Add real, approved family testimonials here. They only appear on the website once you publish them.</p>
      <form onSubmit={add} className="mt-6 max-w-2xl space-y-3 rounded-2xl bg-card p-6 shadow-soft">
        <label className="block text-sm font-medium" htmlFor="t-quote">Quote</label>
        <textarea id="t-quote" rows={4} required value={quote} onChange={(e) => setQuote(e.target.value)} className="w-full rounded-xl border bg-background p-3" />
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium" htmlFor="t-name">Name</label>
            <input id="t-name" required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 h-10 w-full rounded-xl border bg-background px-3" />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="t-detail">Detail (optional, e.g. city or role)</label>
            <input id="t-detail" value={detail} onChange={(e) => setDetail(e.target.value)} className="mt-1 h-10 w-full rounded-xl border bg-background px-3" />
          </div>
        </div>
        <Button type="submit" disabled={busy}>{busy ? <Loader2 className="animate-spin" /> : <Plus />} Add testimonial</Button>
      </form>
      <div className="mt-8 max-w-2xl space-y-4">
        {list.isLoading && <Loader2 className="animate-spin" />}
        {list.data?.length === 0 && <p className="text-muted-foreground">No testimonials yet. Nothing shows on the website until you add and publish one.</p>}
        {list.data?.map((t) => (
          <div key={t.id} className="rounded-2xl bg-card p-5 shadow-soft">
            <p className="font-serif italic">"{t.quote}"</p>
            <p className="mt-2 text-sm font-semibold">{t.name}{t.detail ? ` · ${t.detail}` : ""}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button size="sm" variant={t.published ? "outline" : "cta"} onClick={() => setPublished(t, !t.published)}>{t.published ? "Unpublish" : "Publish"}</Button>
              <Button size="sm" variant="ghost" onClick={() => remove(t)}><Trash2 className="size-4" /> Delete</Button>
              <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", t.published ? "bg-primary-soft text-primary" : "bg-gold-soft")}>{t.published ? "Live on site" : "Hidden"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function useRows(table: TableName) {
  return useQuery({
    queryKey: ["admin", table],
    queryFn: async () => {
      const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: false }).limit(1000);
      if (error) throw error;
      return data as unknown as Row[];
    },
  });
}

function Overview() {
  const fam = useRows("family_leads");
  const n = useRows("nurse_applicants");
  const d = useRows("doctor_applicants");
  const c = useRows("caregiver_applicants");
  const w = useRows("waitlist");
  const weekAgo = Date.now() - 7 * 864e5;
  const applicants = [...(n.data ?? []), ...(d.data ?? []), ...(c.data ?? [])];
  const byStage = APPLICANT.map((st) => [st, applicants.filter((a) => a.status === st).length] as const);
  const sources = useMemo(() => {
    const m = new Map<string, number>();
    (fam.data ?? []).forEach((r) => { const k = fmt(r["source"]) || "Unknown"; m.set(k, (m.get(k) ?? 0) + 1); });
    return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [fam.data]);
  const stat = (label: string, value: number) => (
    <div className="rounded-2xl bg-card p-5 shadow-soft"><p className="text-sm text-muted-foreground">{label}</p><p className="mt-1 font-serif text-4xl text-primary">{value}</p></div>
  );
  return (
    <div>
      <h1 className="text-3xl text-primary">Overview</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stat("New family inquiries this week", (fam.data ?? []).filter((r) => new Date(r.created_at).getTime() > weekAgo).length)}
        {stat("Active families", (fam.data ?? []).filter((r) => r.status === "Active").length)}
        {stat("Total applicants", applicants.length)}
        {stat("Waitlist", (w.data ?? []).length)}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-card p-6 shadow-soft">
          <h2 className="text-xl">Applicants by stage</h2>
          <ul className="mt-4 space-y-2">{byStage.map(([st, v]) => <li key={st} className="flex justify-between border-b pb-2 last:border-0"><span>{st}</span><span className="font-semibold">{v}</span></li>)}</ul>
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-soft">
          <h2 className="text-xl">Top "how did you hear about us"</h2>
          {sources.length === 0 ? <p className="mt-4 text-muted-foreground">No family inquiries yet.</p> : (
            <ul className="mt-4 space-y-2">{sources.map(([k, v]) => <li key={k} className="flex justify-between border-b pb-2 last:border-0"><span>{k}</span><span className="font-semibold">{v}</span></li>)}</ul>
          )}
        </div>
      </div>
    </div>
  );
}

function toCsv(rows: Row[]) {
  if (!rows.length) return "";
  const first = rows[0];
  if (!first) return "";
  const keys = Object.keys(first);
  const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
  return [keys.join(","), ...rows.map((r) => keys.map((k) => esc(fmt(r[k]))).join(","))].join("\n");
}

function TableView({ section }: { section: (typeof SECTIONS)[number] }) {
  const { data, isLoading, error } = useRows(section.table);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState<Row | null>(null);
  const [service, setService] = useState("");
  const [urgency, setUrgency] = useState("");
  const careServices = useQuery({ queryKey: ["admin", "services"], enabled: section.table === "care_requests", queryFn: async () => { const { data, error } = await supabase.from("services").select("*").order("display_order"); if (error) throw error; return data; } });
  const rows = useMemo(() => (data ?? []).filter((r) => (!status || r.status === status) && (!service || r["service_id"] === service) && (!urgency || r["urgency"] === urgency) && (!q || JSON.stringify(r).toLowerCase().includes(q.toLowerCase()))), [data, q, status, service, urgency]);

  function exportCsv() {
    const blob = new Blob([toCsv(rows)], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${section.key}-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl text-primary">{section.label}</h1>
        <Button variant="outline" onClick={exportCsv} disabled={!rows.length}><Download /> Export CSV</Button>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {section.table === "care_requests" && <>
          <select aria-label="Filter by service" value={service} onChange={(e) => setService(e.target.value)} className="h-10 max-w-full rounded-xl border bg-card px-3"><option value="">All services</option>{careServices.data?.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select>
          <select aria-label="Filter by urgency" value={urgency} onChange={(e) => setUrgency(e.target.value)} className="h-10 rounded-xl border bg-card px-3"><option value="">All urgency levels</option>{CARE_URGENCIES.map((u) => <option key={u}>{u}</option>)}</select>
        </>}
        <div className="relative min-w-60 flex-1">
          <Search className="absolute left-3 top-3 size-4 text-muted-foreground" aria-hidden />
          <input aria-label="Search" placeholder="Search..." value={q} onChange={(e) => setQ(e.target.value)} className="h-10 w-full rounded-xl border bg-card pl-9 pr-3" />
        </div>
        {section.statuses && (
          <select aria-label="Filter by status" value={status} onChange={(e) => setStatus(e.target.value)} className="h-10 rounded-xl border bg-card px-3">
            <option value="">All statuses</option>
            {section.statuses.map((s) => <option key={s}>{s}</option>)}
          </select>
        )}
      </div>
      <div className="mt-4 overflow-x-auto rounded-2xl bg-card shadow-soft">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead><tr className="border-b text-muted-foreground"><th className="p-3">Date</th>{section.cols.map(([, l]) => <th key={l} className="p-3">{l}</th>)}{section.statuses && <th className="p-3">Status</th>}</tr></thead>
          <tbody>
            {isLoading && <tr><td className="p-6" colSpan={9}><Loader2 className="animate-spin" /></td></tr>}
            {error && <tr><td className="p-6 text-destructive" colSpan={9}>Couldn't load records.</td></tr>}
            {!isLoading && rows.length === 0 && <tr><td className="p-6 text-muted-foreground" colSpan={9}>No records yet.</td></tr>}
            {rows.map((r) => (
              <tr key={r.id} onClick={() => setOpen(r)} className="cursor-pointer border-b last:border-0 hover:bg-primary-soft">
                <td className="whitespace-nowrap p-3">{new Date(r.created_at).toLocaleDateString()}</td>
                {section.cols.map(([k]) => <td key={k} className="max-w-56 truncate p-3">{k === "service_id" ? careServices.data?.find((s) => s.id === r[k])?.name ?? fmt(r[k]) : fmt(r[k])}</td>)}
                {section.statuses && <td className="p-3"><span className="rounded-full bg-gold-soft px-2.5 py-1 text-xs font-medium">{r.status}</span></td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Sheet open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
          {open && <Detail row={open} section={section} onSaved={(r) => setOpen(r)} />}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Detail({ row, section, onSaved }: { row: Row; section: (typeof SECTIONS)[number]; onSaved: (r: Row) => void }) {
  const qc = useQueryClient();
  const [status, setStatus] = useState(row["status"] ?? "");
  const [notes, setNotes] = useState(row.notes ?? "");
  const [saving, setSaving] = useState(false);
  const details = (row["details"] ?? {}) as Record<string, unknown>;
  const files = (row["files"] ?? []) as { label: string; name: string; path: string }[];
  const skip = new Set(["id", "details", "files", "notes", "status"]);

  async function save() {
    setSaving(true);
    const patch: Record<string, unknown> = { notes: notes || null };
    if (section.statuses) patch["status"] = status;
    const { data, error } = await supabase.from(section.table).update(patch as never).eq("id", row.id).select().single();
    setSaving(false);
    if (error) { toast.error("Couldn't save changes"); return; }
    toast.success("Saved");
    qc.invalidateQueries({ queryKey: ["admin", section.table] });
    onSaved(data as unknown as Row);
  }

  async function openFile(path: string) {
    const { data, error } = await supabase.storage.from("applicant-files").createSignedUrl(path, 300);
    if (error || !data) { toast.error("Couldn't open file"); return; }
    window.open(data.signedUrl, "_blank", "noopener");
  }

  return (
    <>
      <SheetHeader><SheetTitle className="font-serif text-2xl text-primary">{fmt(row["full_name"] ?? row["organisation"] ?? row["company"] ?? row["email"])}</SheetTitle></SheetHeader>
      <div className="space-y-6 px-4 pb-8">
        {section.statuses && (
          <div>
            <label htmlFor="d-status" className="text-sm font-medium">Status</label>
            <select id="d-status" value={status} onChange={(e) => setStatus(e.target.value)} className="mt-1 h-10 w-full rounded-xl border bg-background px-3">
              {section.statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        )}
        <div>
          <label htmlFor="d-notes" className="text-sm font-medium">Internal notes</label>
          <textarea id="d-notes" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-1 w-full rounded-xl border bg-background p-3" />
        </div>
        <Button onClick={save} disabled={saving}>{saving ? <Loader2 className="animate-spin" /> : "Save changes"}</Button>
        {files.length > 0 && (
          <div>
            <h3 className="font-semibold">Uploaded files</h3>
            <ul className="mt-2 space-y-2">
              {files.map((f) => (
                <li key={f.path}><button onClick={() => openFile(f.path)} className="flex items-center gap-2 text-primary hover:underline"><FileText className="size-4" /> {f.label}: {f.name}</button></li>
              ))}
            </ul>
          </div>
        )}
        <dl className="space-y-3 text-sm">
          {Object.entries(row).filter(([k, v]) => !skip.has(k) && v !== null && v !== "").map(([k, v]) => (
            <div key={k}><dt className="text-muted-foreground">{k.replace(/_/g, " ")}</dt><dd>{k === "created_at" ? new Date(String(v)).toLocaleString() : fmt(v)}</dd></div>
          ))}
          {Object.entries(details).filter(([, v]) => v !== undefined && v !== null && v !== "").map(([k, v]) => (
            <div key={k}><dt className="text-muted-foreground">{k.replace(/_/g, " ")}</dt><dd className="whitespace-pre-wrap">{fmt(v)}</dd></div>
          ))}
        </dl>
      </div>
    </>
  );
}
