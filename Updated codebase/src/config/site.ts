/**
 * MyCareEnvoy site configuration.
 * Shared contact details and approved care offers.
 */

export const SITE = {
  name: "MyCareEnvoy",
  url: "https://pixel-perfect-view-6192.lovable.app",
  email: "hello@careenvoy.com",
  whatsappNumber: "2348054784379", // digits only, with country code
  whatsappDisplay: "+234 805 478 4379",
  whatsappMessage: "Hi MyCareEnvoy, I'd like to learn more about care for my parent in Nigeria.",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61595116603935",
    instagram: "https://www.instagram.com/mycareenvoy/",
    linkedin: "https://www.linkedin.com/company/mycareenvoy/home/",
    twitter: "https://x.com/MyCareEnvoy",
  },
  billingCurrencies: "USD, GBP or CAD",
  referralReward: "one free month of care for every family you refer who signs up",
};

export const whatsappLink = (message: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export type PlanId = "essential" | "core" | "complete";

export const PLANS: { id: PlanId; name: string; price: string; period: string; annualPrice: number; tagline: string; popular?: boolean; features: string[] }[] = [
  { id: "essential", name: "Essential", price: "$35", period: "/month", annualPrice: 350,
    tagline: "For parents who are mostly well.", features: [
      "1 nurse home visit a month: vitals, medications and wellbeing", "Weekly wellness call to your parent",
      "Verified update after every visit and call: readings and a short note", "A doctor reviews every reading",
      "Quarterly physician review with the family", "Prescription refills and appointment booking",
      "Annual home lab collection (tests at cost)", "Emergency coordination", "Help enrolling in an HMO plan",
    ] },
  { id: "core", name: "Core", price: "$79", period: "/month", annualPrice: 790, popular: true,
    tagline: "For parents managing conditions such as diabetes or high blood pressure.", features: [
      "Everything in Essential, plus:", "2 nurse home visits a month, from the same nurse",
      "Physician review with the family every 2 months", "Home lab collection every 6 months (tests at cost)",
      "1 accompanied hospital appointment every quarter",
    ] },
  { id: "complete", name: "Complete", price: "$149", period: "/month", annualPrice: 1490,
    tagline: "For frail parents, multiple conditions or recovery after a hospital stay.", features: [
      "Everything in Core, plus:", "Weekly nurse home visits, from the same nurse", "Monthly physician review with the family",
      "Quarterly home lab collection (tests at cost)", "Up to 2 accompanied hospital appointments a month",
      "Hospital visits included during any admission", "Priority response: a reply within 1 hour, day or night",
    ] },
];
export const BASELINE = {
  amount: 40, videoAmount: 25, videoCreditDays: 30, escortAmount: 20,
  reportHours: 48, schedulingCallHours: 24, visitDays: [3, 5], freeRescheduleNoticeHours: 24,
  title: "Your parent's first visit: a full health baseline",
  description: "A MyCareEnvoy doctor reviews your parent's health, medications and history, so we know exactly where to start. It's also the first time your parent meets our team.",
  exclusions: "Lab tests (such as blood sugar, cholesterol or blood counts) and medication are charged at cost, and only after you approve.",
  options: [
    { id: "clinic" as const, title: "At a partner clinic", description: "Your parent visits one of our trusted partner clinics. You arrange their transport, or add a caregiver escort for $20." },
    { id: "home" as const, title: "Doctor home visit", description: "Prefer the doctor to come to them? A MyCareEnvoy doctor visits your parent at home. Available across Lagos, subject to doctor availability in some areas. We'll confirm when you book." },
    { id: "video" as const, title: "By video call", description: "The doctor meets your parent over a video call, from wherever they are. A simple first look, ideal if your parent isn’t ready for a visit yet. If the doctor needs hands-on checks, we’ll recommend a clinic or home visit, and your $25 counts toward it." },
  ],
};
export const BASELINE_FEATURES = [
  "Physical examination: blood pressure, pulse, temperature, weight and a general check-up",
  "Review of every medication your parent takes",
  "Discussion of their health history and current concerns",
  "Join by video call from wherever you are (optional)",
  "Written report sent to you within 48 hours",
  "A care plan with clear next steps",
];
export const NURSE_SERVICES = [
  { id: "health-monitoring", title: "Health monitoring", items: [
    "Vital signs: blood pressure, pulse, temperature, breathing rate and oxygen level",
    "Weight and nutrition checks",
    "Spotting early warning signs such as swelling, breathlessness, confusion, dehydration or new pain",
    "Tracking long-term conditions such as hypertension, diabetes, heart failure and arthritis",
  ] },
  { id: "medication-management", title: "Medication management", items: [
    "Checking every medication your parent takes, including herbal remedies",
    "Making sure doses are taken correctly and on time",
    "Setting up weekly pill organisers",
    "Flagging side effects, missed doses or risky combinations to the doctor",
    "Tracking supplies so medications never run out",
  ] },
  { id: "clinical-care", title: "Clinical care (on a doctor's instruction)", items: [
    "Blood sugar checks", "Injections, including insulin",
    "Wound and pressure sore care, and dressing changes", "Catheter care",
    "Collecting blood or urine samples for the lab",
  ] },
  { id: "safety-mobility", title: "Safety and mobility", items: [
    "Checking the home for fall risks such as loose rugs, poor lighting or slippery bathrooms",
    "Checking mobility, balance and walking aids",
    "Preventing pressure sores for parents who spend a lot of time in bed",
    "Simple memory and mood checks, noticing early signs of confusion, dementia or low mood",
  ] },
  { id: "hospital-coordination", title: "Hospital appointments and coordination", items: [
    "Going with your parent to hospital appointments and taking notes for you",
    "Following up on referrals, test results and specialist advice",
    "Working with our doctor to keep the care plan up to date",
  ] },
  { id: "parent-support", title: "Support for your parent", items: [
    "Teaching your parent and any live-in carer about medications, diet, exercise and warning signs",
    "Encouraging healthy routines: drinking enough water, staying active, sleeping well",
    "Unhurried time together, because loneliness affects health too",
  ] },
  { id: "family-reports", title: "Keeping you informed", items: [
    "A clear report after every visit",
    "Anything urgent goes straight to our doctor and to you, the same day",
  ] },
];
export const initialNurseService = (desktop: boolean) => desktop ? "health-monitoring" : "";
export const ONE_TIME_SERVICES = [
  { id: "post-hospital", name: "Post-hospital support", price: "$89 for 2 weeks · $149 for 4 weeks", intro: "Support for the risky weeks after discharge.", features: [
    "Nurse home visits twice a week", "Daily check-in call for the first week, then every other day", "Discharge instructions and new medications reviewed",
    "Wound and recovery checks", "Follow-up appointment booked, with accompaniment for one visit", "Doctor review of progress and a family update at the end",
  ] },
  { id: "family-visit", name: "Family home visit", price: "$40", intro: "Meet the care team when you are home.", features: [
    "In-person visit with you, your parent and their nurse", "Walk-through of your parent's health and care plan", "Questions, answers and agreed next steps",
  ] },
  { id: "urgent", name: "Urgent visit", price: "$35", intro: "When something feels wrong between scheduled visits.", features: [
    "Same-day or next-day nurse home visit", "Vitals and assessment, with doctor review", "Escalation to a hospital if needed", "Family update right after the visit",
  ] },
];
export const ADD_ONS = [
  { name: "Extra nurse visit", price: "$20", description: "Full home visit with vitals, medication check and family update." },
  { name: "Doctor home visit", price: "$35", description: "In-person assessment, medication review and family update." },
  { name: "Appointment accompaniment", price: "$20 half day · $30 full day", description: "Caregiver pickup, support through the appointment, doctor notes and safe return. Transport at cost. Add $10 for a nurse instead." },
  { name: "Hospital stay visit", price: "$15 per visit or day", description: "Check on your parent, speak with the ward team and update the family. Transport and supplies at cost, with receipts." },
  { name: "Home lab collection", price: "$10 + tests at cost", description: "Home sample collection, with results shared with the doctor and family." },
];
export const PLAN_COMPARISON: { feature: string; values: Record<PlanId, boolean | string> }[] = [
  { feature: "Nurse home visits", values: { essential: "1 / month", core: "2 / month", complete: "Weekly" } },
  { feature: "Weekly wellness calls", values: { essential: true, core: true, complete: true } },
  { feature: "Update after every visit and call", values: { essential: true, core: true, complete: true } },
  { feature: "Doctor reviews every reading", values: { essential: true, core: true, complete: true } },
  { feature: "Physician review with family", values: { essential: "Quarterly", core: "Every 2 months", complete: "Monthly" } },
  { feature: "Home lab collection (tests at cost)", values: { essential: "Annually", core: "Every 6 months", complete: "Quarterly" } },
  { feature: "Accompanied hospital appointments", values: { essential: "Add-on", core: "1 / quarter", complete: "Up to 2 / month" } },
  { feature: "Visits during hospital admission", values: { essential: "Add-on", core: "Add-on", complete: true } },
  { feature: "1-hour reply, day or night", values: { essential: false, core: false, complete: true } },
  { feature: "Prescription refills and appointment booking", values: { essential: true, core: true, complete: true } },
  { feature: "Emergency coordination and HMO enrollment help", values: { essential: true, core: true, complete: true } },
  { feature: "Shared family access and split payments", values: { essential: true, core: true, complete: true } },
];


/** Owner-approved customer quotes; dashboard-published testimonials take precedence. */
export const TESTIMONIALS = [
  { quote: "For two years I called Mummy every Sunday and heard \"I'm fine.\" The first MyCareEnvoy report showed her pressure was 168/100. Within a month, with the right medication and a nurse checking in, it was back under control. I finally sleep.", name: "Adaeze O.", city: "Houston, Texas", role: "Nurse practitioner" },
  { quote: "My brothers and I are in three countries. Now we all get the same report after every visit, so nobody is relaying news secondhand. We split the cost, and the arguments about who should fly home have stopped.", name: "Tunde A.", city: "London, UK", role: "Software engineer" },
  { quote: "Daddy refused at first. He said he didn't need anybody. Nurse Funmi came, greeted him properly, and talked football for twenty minutes before checking anything. Now he asks me when she's coming.", name: "Chioma E.", city: "Toronto, Canada", role: "Accountant" },
];

export const PARENT_LOCATIONS = ["Lagos", { value: "Outside Lagos", label: "Somewhere else" }];

export const HEALTH_CONCERNS = [
  "High blood pressure", "Diabetes", "Mobility", "Memory", "Heart condition",
  "Recovering from illness or surgery", "General wellbeing", "Other",
];

export const FAMILY_SOURCES = [
  "Church", "Friend or family", "WhatsApp", "Facebook group", "LinkedIn",
  "Instagram", "Google", "ANPA or medical association", "Other",
];

export const TEAM_SOURCES = [
  "Friend or colleague", "WhatsApp", "Facebook", "LinkedIn", "Instagram",
  "Nursing or medical association", "Google", "Other",
];

export const LANGUAGES = ["English", "Yoruba", "Igbo", "Hausa", "Pidgin", "Other"];

/** Payable services. Each main service can be combined with any add-on. Amounts in USD. */
export type PayableOption = { id: string; label: string; amount: number };
export type PayableService = { id: string; name: string; summary: string; options: PayableOption[] };
export const PAYABLE_SERVICES: PayableService[] = [
  { id: "baseline", name: "Baseline health assessment", summary: "Full health review, written report and care plan. Optional family video call.", options: BASELINE.options.map((o) => ({ id: o.id, label: o.title, amount: o.id === "video" ? BASELINE.videoAmount : BASELINE.amount })) },
  { id: "post-hospital", name: "Post-hospital support", summary: "Nurse visits, check-in calls and doctor review after discharge.", options: [{ id: "ph-2w", label: "2 weeks", amount: 89 }, { id: "ph-4w", label: "4 weeks", amount: 149 }] },
  { id: "family-visit", name: "Family home visit", summary: "Meet your parent's nurse and walk through the care plan.", options: [{ id: "family-visit", label: "One visit", amount: 40 }] },
  { id: "urgent", name: "Urgent visit", summary: "Same-day or next-day nurse visit with doctor review.", options: [{ id: "urgent", label: "One visit", amount: 35 }] },
];
export const PAYABLE_ADDONS: PayableOption[] = [
  { id: "extra-nurse", label: "Extra nurse visit", amount: 20 },
  { id: "doctor-visit", label: "Doctor home visit", amount: 35 },
  { id: "accomp-half", label: "Appointment accompaniment, half day", amount: 20 },
  { id: "accomp-full", label: "Appointment accompaniment, full day", amount: 30 },
  { id: "accomp-nurse", label: "Nurse instead of caregiver for accompaniment", amount: 10 },
  { id: "hospital-visit", label: "Hospital stay visit (per visit or day)", amount: 15 },
  { id: "home-lab", label: "Home lab collection (tests billed at cost)", amount: 10 },
];
