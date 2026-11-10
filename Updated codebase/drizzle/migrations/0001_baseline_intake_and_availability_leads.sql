ALTER TABLE public.family_leads
 ADD COLUMN baseline_location text CHECK (baseline_location IN ('clinic', 'home')),
 ADD COLUMN caregiver_escort boolean NOT NULL DEFAULT false,
 ADD COLUMN join_video_call boolean NOT NULL DEFAULT false,
 ADD COLUMN family_time_zone text,
 ADD COLUMN parent_consent boolean NOT NULL DEFAULT false,
 ADD COLUMN baseline_total_usd integer CHECK (baseline_total_usd IN (40, 60));
ALTER TABLE public.family_leads ADD CONSTRAINT baseline_selection_consistent CHECK (baseline_location IS NULL OR (parent_consent = true AND baseline_total_usd IS NOT NULL AND baseline_total_usd = CASE WHEN baseline_location = 'clinic' AND caregiver_escort THEN 60 ELSE 40 END AND (baseline_location = 'clinic' OR caregiver_escort = false) AND (NOT join_video_call OR NULLIF(trim(family_time_zone), '') IS NOT NULL)));
CREATE TABLE public.leads (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 name text NOT NULL CHECK (length(trim(name)) BETWEEN 1 AND 200),
 email text NOT NULL CHECK (length(email) <= 320 AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
 whatsapp_number text NOT NULL CHECK (length(whatsapp_number) BETWEEN 8 AND 40),
 country text NOT NULL CHECK (country IN ('United States', 'United Kingdom', 'Canada', 'Other')),
 parent_location text NOT NULL CHECK (parent_location IN ('lagos', 'other')),
 parent_city text,
 source text NOT NULL DEFAULT 'popup' CHECK (source = 'popup'),
 created_at timestamptz NOT NULL DEFAULT now(),
 CONSTRAINT other_city_required CHECK (parent_location = 'lagos' OR length(trim(parent_city)) > 0 AND parent_city IS NOT NULL)
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can submit availability requests" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (source = 'popup');