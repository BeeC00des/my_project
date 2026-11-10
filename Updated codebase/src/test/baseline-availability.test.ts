import { describe, expect, it } from "vitest";
import { BASELINE, PAYABLE_SERVICES } from "@/config/site";
import { baselineTotal, updateBaseline } from "@/lib/baseline";
import { AVAILABILITY_DELAY_MS, AVAILABILITY_SCROLL_THRESHOLD, canAutoShow } from "@/lib/visitor-engagement";

describe("Baseline assessment rules", () => {
  it("charges $40 for clinic only", () => expect(baselineTotal("clinic", false)).toBe(40));
  it("charges $60 for clinic and escort", () => expect(baselineTotal("clinic", true)).toBe(60));
  it("charges $40 for home without an escort", () => expect(baselineTotal("home", true)).toBe(40));
  it("uses video as the saved video call choice", () => expect(BASELINE.options.map((o) => o.id)).toEqual(["clinic", "home", "video"]));
  it("charges $25 for a video assessment without adding an escort", () => expect(baselineTotal("video", true)).toBe(25));
  it("charges $25 at checkout for the video option", () => expect(PAYABLE_SERVICES.find((s) => s.id === "baseline")?.options.find((o) => o.id === "video")?.amount).toBe(25));
  it("allows 30 days for the video credit", () => expect(BASELINE.videoCreditDays).toBe(30));
  it("leaves $15 after crediting the video baseline toward an in-person baseline", () => expect(BASELINE.amount - BASELINE.videoAmount).toBe(15));
  it("resets escort when switching to home", () => expect(updateBaseline({ caregiver_escort: true }, "baseline_location", "home")["caregiver_escort"]).toBe(false));
  it("resets escort when switching to video", () => expect(updateBaseline({ caregiver_escort: true }, "baseline_location", "video")["caregiver_escort"]).toBe(false));
  it("clears video time zone when video is disabled", () => expect(updateBaseline({ family_time_zone: "US Central" }, "join_video_call", false)["family_time_zone"]).toBe(""));
  it("clears video-call joiner fields when choosing video", () => expect(updateBaseline({ join_video_call: true, family_time_zone: "UK" }, "baseline_location", "video")).toMatchObject({ join_video_call: false, family_time_zone: "" }));
  it("sends reports within 48 hours", () => expect(BASELINE.reportHours).toBe(48));
  it("calls within 24 hours", () => expect(BASELINE.schedulingCallHours).toBe(24));
  it("schedules most visits within 3 to 5 days", () => expect(BASELINE.visitDays).toEqual([3, 5]));
  it("allows free rescheduling with 24 hours notice", () => expect(BASELINE.freeRescheduleNoticeHours).toBe(24));
});
describe("Availability popup rules", () => {
  it("waits 25 seconds", () => expect(AVAILABILITY_DELAY_MS).toBe(25000));
  it("triggers at 50 percent scroll", () => expect(AVAILABILITY_SCROLL_THRESHOLD).toBe(0.5));
  it("allows first-time visitors", () => expect(canAutoShow({}, "/plans")).toBe(true));
  it("never automatically repeats", () => expect(canAutoShow({ shown: true }, "/plans")).toBe(false));
  it("suppresses after any completed form", () => expect(canAutoShow({ engaged: true }, "/plans")).toBe(false));
  it.each(["/checkout", "/get-started"])("suppresses booking on %s", (path) => expect(canAutoShow({}, path)).toBe(false));
});