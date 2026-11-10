export const CARE_CATEGORIES = ["Recovery and therapy", "Tests and medication", "Specialist care", "Support at home", "When it matters most"] as const;
export const CARE_REQUEST_STATUSES = ["new", "contacted", "quoted", "booked", "completed", "cancelled", "waitlist"] as const;
export const CARE_URGENCIES = ["Today", "This week", "Within a month", "Just exploring"] as const;
export const APPLICATION_STATUSES = ["Applied", "Documents checked", "Verified", "Interviewed", "Active pool", "Not progressing"] as const;
export const CARE_SERVICES = [
  { id: "physiotherapy", name: "Physiotherapy at home", category: CARE_CATEGORIES[0], description: "For recovery after a stroke, fall or surgery, and for joint and back pain.", status: "available" },
  { id: "post-hospital", name: "Post-hospital support", category: CARE_CATEGORIES[0], description: "Extra visits, medication review and follow-up in the weeks after discharge.", status: "available" },
  { id: "home-lab", name: "Home lab sample collection", category: CARE_CATEGORIES[1], description: "Blood and other tests collected at home, with results shared with you.", status: "available" },
  { id: "medication", name: "Medication refills and delivery", category: CARE_CATEGORIES[1], description: "Monthly medications sourced from trusted pharmacies, checked and delivered.", status: "available" },
  { id: "specialist", name: "Specialist appointments", category: CARE_CATEGORIES[2], description: "Booking and accompaniment to specialists such as cardiologists and eye doctors.", status: "available" },
  { id: "sensory", name: "Eye, dental and hearing checks", category: CARE_CATEGORIES[2], description: "Routine checks that are often missed in later life.", status: "coming_soon" },
  { id: "dietitian", name: "Dietitian advice", category: CARE_CATEGORIES[2], description: "Practical eating plans for conditions like diabetes and high blood pressure.", status: "available" },
  { id: "caregivers", name: "Home caregivers", category: CARE_CATEGORIES[3], description: "Daily or live-in support from vetted care aides.", status: "available" },
  { id: "safety", name: "Home safety check", category: CARE_CATEGORIES[3], description: "A visit to spot and fix fall risks around the home.", status: "available" },
  { id: "equipment", name: "Medical equipment", category: CARE_CATEGORIES[3], description: "Wheelchairs, walkers, hospital beds and monitoring devices, sourced and delivered.", status: "available" },
  { id: "hospital", name: "Hospital admission support", category: CARE_CATEGORIES[4], description: "Help getting admitted, someone at the bedside, and updates for the family.", status: "available" },
  { id: "memory", name: "Memory and dementia support", category: CARE_CATEGORIES[4], description: "Screening, routines and guidance for the family.", status: "available" },
  { id: "palliative", name: "Palliative and end-of-life care", category: CARE_CATEGORIES[4], description: "Comfort-focused care coordinated with compassion.", status: "available" },
] as const;