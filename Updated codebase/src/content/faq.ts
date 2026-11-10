export type Faq = { q: string; a: string };

export const FAQ_GROUPS: { title: string; items: Faq[] }[] = [
  {
    title: "Your parent's baseline assessment",
    items: [
      {
        q: "Where does the first assessment happen?",
        a: "You choose. Your parent can visit one of our partner clinics, a MyCareEnvoy doctor can visit them at home, or the doctor can meet them by video call. Clinic and home visits cost $40; a video call costs $25. Home visits are available across Lagos, subject to doctor availability in some areas. If you choose the clinic, you can arrange transport yourself or add a caregiver escort for $20.",
      },
      {
        q: "What if the doctor needs to see my parent in person after a video call?",
        a: "We’ll recommend a clinic or home visit. If you book it within 30 days, your $25 counts toward it, so you only pay $15 more.",
      },
      {
        q: "What's included in the baseline?",
        a: "A physical examination (blood pressure, pulse, temperature, weight and a general check-up), a full medication review, a discussion of your parent's health history, a written report within 48 hours, and a care plan. You can also join by video call.",
      },
      {
        q: "Are tests like blood sugar included?",
        a: "No. Lab tests such as blood sugar, cholesterol or blood counts are charged at cost. If the doctor recommends any, we tell you the cost first and only go ahead once you approve.",
      },
      {
        q: "Can I join the visit?",
        a: "Yes. Tick the video call option when you book and we'll arrange a time that works for your time zone.",
      },
      {
        q: "What if the doctor finds something serious?",
        a: "We contact you immediately and help you arrange the next steps, including referral to a hospital or specialist if needed.",
      },
      {
        q: "Can I cancel or reschedule?",
        a: "You can reschedule for free up to 24 hours before the visit. If we can't complete the visit for any reason on our side, including a home visit we can't arrange in your parent's area, you get a full refund.",
      },
      {
        q: "What can't your nurses do?",
        a: "Our nurses don't diagnose or prescribe. That's our doctor's role. They also don't provide bathing, cooking, cleaning or overnight care.",
      },
    ],
  },
  {
    title: "About the service",
    items: [
      {
        q: "What exactly does MyCareEnvoy do?",
        a: "We pair your parent in Nigeria with a dedicated, verified registered nurse who visits them at home on a regular schedule. A doctor oversees their care plan. After every visit you get a clear report with vitals, medications, concerns and next steps.",
      },
      {
        q: "What if my parent doesn't want a nurse visiting?",
        a: "This is common, and it's usually about pride, not the care itself. Our first visit is designed to feel like a friendly introduction, not an inspection. We also have a short guide on how to talk to your parent, and we're happy to speak with them or a trusted relative first.",
      },
      {
        q: "Can my siblings and I all see the reports?",
        a: "Yes. You can add siblings and other family members so everyone receives the same report, by app, email or web. No more relaying news secondhand.",
      },
      {
        q: "How quickly can we start?",
        a: "Most families have their intake call within 24 hours of reaching out, and the doctor's onboarding assessment within the first week.",
      },
    ],
  },
  {
    title: "Nurses, doctors and caregivers",
    items: [
      {
        q: "How do you vet your nurses and caregivers?",
        a: "Every nurse is a registered nurse whose license we verify with the Nursing and Midwifery Council of Nigeria. Every doctor is verified with the Medical and Dental Council of Nigeria. Caregivers go through ID and guarantor checks. Everyone is interviewed, reference checked, trained and supervised.",
      },
      {
        q: "Will my parent see the same nurse each time?",
        a: "Yes. Consistency matters. Your parent has a dedicated nurse, with a trusted backup who already knows them if their nurse is ever unavailable.",
      },
      {
        q: "What does the doctor do?",
        a: "A licensed doctor carries out the onboarding assessment, builds the care plan with you, reviews visit reports, and advises the nurse whenever something changes.",
      },
      {
        q: "Can someone go with my parent to hospital appointments?",
        a: "Yes. A trusted caregiver can accompany your parent to hospital and clinic visits and errands. Core includes one accompanied appointment each quarter. Complete includes up to two each month. Extra accompaniment starts at $20 for a half day; transport is at cost.",
      },
    ],
  },
  {
    title: "Emergencies",
    items: [
      {
        q: "What happens in an emergency?",
        a: "If a nurse finds something worrying, they assess immediately and consult the doctor. You're informed right away. If needed, we arrange transfer to a partner hospital. MyCareEnvoy is not an ambulance service, so please also keep local emergency contacts in place.",
      },
      {
        q: "Is MyCareEnvoy available around the clock?",
        a: "Complete includes a reply within 1 hour, day or night. Emergency coordination is included on every plan. For life-threatening emergencies, call local emergency services and a nearby relative first.",
      },
      {
        q: "Which hospitals do you work with?",
        a: "We're building a network of trusted partner hospitals, clinics, labs and pharmacies locally. Where your parent already has a preferred hospital, we coordinate with them.",
      },
    ],
  },
  {
    title: "Plans and billing",
    items: [
      {
        q: "Can my siblings and I split the cost?",
        a: "Yes. Many families do. We can split the monthly payment between family members so no one carries it alone.",
      },
      {
        q: "Which currencies can I pay in?",
        a: "We bill monthly in USD, GBP or CAD, so you can pay from wherever you live.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. There are no long contracts. You can pause or cancel before your next billing date.",
      },
      {
        q: "Is there an enrollment fee?",
        a: "The 20 to 30 minute enrollment call is free. A baseline assessment at a partner clinic or at home costs $40 once; a video call costs $25. The baseline is waived on annual plans.",
      },
      {
        q: "Can I pay yearly?",
        a: "Yes. Pay for 10 months and receive 12 months of care: Essential $350, Core $790 or Complete $1,490 per year. Your $40 baseline assessment is also waived. Siblings can split any plan.",
      },
      {
        q: "Does every plan include a doctor?",
        a: "Yes. Doctor oversight is part of every plan, including Essential.",
      },
    ],
  },
  {
    title: "Privacy and data",
    items: [
      {
        q: "Who can see my parent's health information?",
        a: "Only your parent's care team and the family members you approve. We never sell personal data, and we follow the Nigeria Data Protection Act 2023.",
      },
      {
        q: "Can I ask you to delete our data?",
        a: "Yes. Email us and we'll delete your family's data, except anything we're legally required to keep.",
      },
    ],
  },
  {
    title: "Locations",
    items: [
      {
        q: "Can you care for my parent in their city?",
        a: "Tell us your parent's city and area. We confirm local availability before care begins. If care is not available yet, you can join the city waitlist.",
      },
      {
        q: "How do I confirm local availability?",
        a: "Send your parent's city and area on WhatsApp. Our care team will confirm availability and next steps.",
      },
    ],
  },
];

const all = FAQ_GROUPS.flatMap((g) => g.items);
const pick = (q: string): Faq =>
  all.find((f) => f.q === q) ?? { q, a: "Please contact our care team." };
export const FAQ_PREVIEW: Faq[] = [
  pick("What happens in an emergency?"),
  pick("What if my parent doesn't want a nurse visiting?"),
  pick("Can you care for my parent in their city?"),
  pick("Can my siblings and I split the cost?"),
  pick("How do you vet your nurses and caregivers?"),
];
