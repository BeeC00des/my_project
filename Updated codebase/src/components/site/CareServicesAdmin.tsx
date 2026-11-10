import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowUp, ArrowDown, Save, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
type Service = Database["public"]["Tables"]["services"]["Row"];
export function CareServicesAdmin() {
  const qc = useQueryClient();
  const [busy, setBusy] = useState(false);
  const query = useQuery({
    queryKey: ["admin", "services"],
    queryFn: async () => {
      const { data, error } = await supabase.from("services").select("*").order("display_order");
      if (error) throw error;
      return data;
    },
  });
  async function save(s: Service, patch: Partial<Service>) {
    const { error } = await supabase.from("services").update(patch).eq("id", s.id);
    if (error) {
      toast.error("Couldn't update service");
      return;
    }
    toast.success("Service updated");
    await qc.invalidateQueries({ queryKey: ["admin", "services"] });
    await qc.invalidateQueries({ queryKey: ["care-services"] });
  }
  async function move(s: Service, direction: number) {
    const rows = query.data ?? [];
    const other = rows[rows.findIndex((r) => r.id === s.id) + direction];
    if (!other) return;
    setBusy(true);
    const updates = await Promise.all([
      supabase.from("services").update({ display_order: other.display_order }).eq("id", s.id),
      supabase.from("services").update({ display_order: s.display_order }).eq("id", other.id),
    ]);
    setBusy(false);
    if (updates.some((r) => r.error)) toast.error("Couldn't reorder services");
    await qc.invalidateQueries({ queryKey: ["admin", "services"] });
    await qc.invalidateQueries({ queryKey: ["care-services"] });
  }
  return (
    <div>
      <h1 className="text-3xl text-primary">Services</h1>
      {query.isLoading && <Loader2 className="mt-8 animate-spin" />}
      {query.error && <p className="mt-8 text-destructive">Couldn't load services.</p>}
      <div className="mt-8 max-w-4xl space-y-4">
        {query.data?.map((s, i, rows) => (
          <ServiceEditor
            key={`${s.id}-${s.description}-${s.status}-${s.display_order}`}
            service={s}
            save={save}
          >
            <Button
              variant="ghost"
              size="icon"
              disabled={busy || i === 0}
              aria-label={`Move ${s.name} up`}
              title="Move up"
              onClick={() => move(s, -1)}
            >
              <ArrowUp />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              disabled={busy || i === rows.length - 1}
              aria-label={`Move ${s.name} down`}
              title="Move down"
              onClick={() => move(s, 1)}
            >
              <ArrowDown />
            </Button>
          </ServiceEditor>
        ))}
      </div>
    </div>
  );
}
function ServiceEditor({
  service: s,
  save,
  children,
}: {
  service: Service;
  save: (s: Service, patch: Partial<Service>) => Promise<void>;
  children: React.ReactNode;
}) {
  const [description, setDescription] = useState(s.description);
  const [status, setStatus] = useState(s.status);
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="rounded-lg border bg-card p-5"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        await save(s, { description, status });
        setBusy(false);
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">{s.category}</p>
          <h2 className="text-xl text-primary">{s.name}</h2>
        </div>
        <div className="flex">{children}</div>
      </div>
      <label htmlFor={`status-${s.id}`} className="mt-4 block text-sm font-medium">
        Availability
      </label>
      <select
        id={`status-${s.id}`}
        className="mt-1 h-11 rounded-lg border bg-background px-3"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="available">Available</option>
        <option value="coming_soon">Coming soon</option>
      </select>
      <label htmlFor={`description-${s.id}`} className="mt-4 block text-sm font-medium">
        Description
      </label>
      <textarea
        id={`description-${s.id}`}
        required
        maxLength={2000}
        rows={3}
        className="mt-1 w-full rounded-lg border bg-background p-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit" className="mt-3" disabled={busy}>
        <Save /> Save
      </Button>
    </form>
  );
}
