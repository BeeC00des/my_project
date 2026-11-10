import { BASELINE } from "@/config/site";
export type BaselineLocation = "clinic" | "home" | "video";
export function baselineTotal(location: BaselineLocation, escort: boolean) {
  return (location === "video" ? BASELINE.videoAmount : BASELINE.amount) + (location === "clinic" && escort ? BASELINE.escortAmount : 0);
}
export function updateBaseline(values: Record<string, unknown>, key: string, value: unknown) {
  const next = { ...values, [key]: value };
  if (key === "baseline_location" && value !== "clinic") next["caregiver_escort"] = false;
  if (key === "baseline_location" && value === "video") { next["join_video_call"] = false; next["family_time_zone"] = ""; }
  if (key === "join_video_call" && value !== true) next["family_time_zone"] = "";
  return next;
}
