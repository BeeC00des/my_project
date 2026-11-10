ALTER TABLE public.family_leads DROP CONSTRAINT family_leads_baseline_location_check;
ALTER TABLE public.family_leads ADD CONSTRAINT family_leads_baseline_location_check CHECK (baseline_location IS NULL OR baseline_location IN ('clinic', 'home', 'virtual', 'video'));
ALTER TABLE public.family_leads DROP CONSTRAINT family_leads_baseline_total_usd_check;
ALTER TABLE public.family_leads ADD CONSTRAINT family_leads_baseline_total_usd_check CHECK (baseline_total_usd IN (25, 40, 60));
ALTER TABLE public.family_leads DROP CONSTRAINT baseline_selection_consistent;
ALTER TABLE public.family_leads ADD CONSTRAINT baseline_selection_consistent CHECK (baseline_location IS NULL OR (parent_consent = true AND baseline_total_usd IS NOT NULL AND baseline_total_usd = CASE WHEN baseline_location = 'video' THEN 25 WHEN baseline_location = 'clinic' AND caregiver_escort THEN 60 ELSE 40 END AND (baseline_location = 'clinic' OR caregiver_escort = false) AND (NOT join_video_call OR NULLIF(trim(family_time_zone), '') IS NOT NULL)));
COMMENT ON COLUMN public.family_leads.baseline_location IS 'Assessment choice: clinic, home, video. Legacy virtual values remain valid for historical records.';