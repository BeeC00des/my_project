import { IMG } from "@/config/images";

export type Article = {
  slug: string;
  title: string;
  category: "Health tips" | "Caring from abroad" | "Family conversations" | "Living well";
  excerpt: string;
  minutes: number;
  image: { src: string; alt: string };
  html: string;
};

export const CATEGORIES = ["Health tips", "Caring from abroad", "Family conversations", "Living well"] as const;

export const ARTICLES: Article[] = [
  {
    slug: "signs-your-parent-needs-more-support",
    title: "7 signs your parent in Nigeria may need more support",
    category: "Family conversations",
    excerpt: "Our parents rarely ask for help. These are the quiet signals worth paying attention to, even from thousands of miles away.",
    minutes: 5,
    image: IMG.garden,
    html: `
<p>Most of our parents will not tell us when things are getting harder. They don't want to worry us, and many of them have spent their whole lives being the ones who take care of everyone else. So the signs come quietly, often through a cousin, a neighbour, or something you notice on a video call. Here are seven worth taking seriously.</p>
<h2>1. Medicines are running out, or piling up</h2>
<p>If you hear that a prescription "finished last week," or a relative mentions a drawer full of unopened packs, your parent may be struggling to keep track. Missed blood pressure or diabetes medication is one of the most common reasons older adults end up in hospital.</p>
<h2>2. They sound tired, or more confused than usual</h2>
<p>Repeating stories, forgetting a recent conversation, or mixing up days can be normal now and then. A noticeable change over weeks is different. It can point to anything from dehydration and infection to low blood sugar or early memory problems, and many of these are treatable.</p>
<h2>3. They've stopped going out</h2>
<p>When a parent who loved church, the market or visiting friends starts staying home, ask why. Sometimes it's knee pain or fear of falling. Sometimes it's low mood. Isolation affects both physical and mental health.</p>
<h2>4. Weight loss or poor appetite</h2>
<p>Clothes that look loose on video, or comments like "I'm not really hungry these days," deserve attention. Unplanned weight loss in older adults is always worth a medical check.</p>
<h2>5. Small falls or near misses</h2>
<p>"I just slipped small" is a phrase many of us have heard. One fall raises the chance of another. Poor lighting, wet bathroom floors and loose rugs are common culprits, and simple changes at home can help a lot.</p>
<h2>6. The house is harder to keep up</h2>
<p>Unpaid bills, spoiled food in the fridge, or a home that's less tidy than your parent would normally accept can be a sign that daily tasks are becoming too much.</p>
<h2>7. You're hearing about health events after they happen</h2>
<p>If you keep finding out about hospital visits, new symptoms or prescription changes after the fact, the system around your parent isn't working. It's not anyone's fault. Relatives are busy, and your parent may be protecting you. But it means nobody has the full picture.</p>
<h2>What to do next</h2>
<p>Start with a gentle conversation, framed around your own peace of mind rather than their ability to cope. Ask a trusted relative what they've noticed. And consider getting a qualified professional to visit regularly, so decisions are based on real information rather than guesswork.</p>
<p>A regular nurse visit means vitals are measured, medicines are checked, and small problems are caught before they become emergencies. Most importantly, it means you no longer have to rely on "I'm fine."</p>`,
  },
  {
    slug: "manage-parents-medications-from-abroad",
    title: "How to manage your parent's medications from abroad",
    category: "Caring from abroad",
    excerpt: "Refills, fakes, missed doses and duplicate prescriptions. A practical system for keeping medications on track from another country.",
    minutes: 5,
    image: IMG.hero,
    html: `
<p>Medication problems are among the most common, and most preventable, reasons older adults become unwell. When you live abroad, it can feel impossible to keep track. It isn't. With a simple system, you can know what your parent is taking and whether they're taking it.</p>
<h2>Start with a complete list</h2>
<p>Ask someone at home to photograph every medicine pack your parent has, including supplements, herbal remedies and anything bought over the counter. From the photos, build a single list with the name, strength, dose, time of day and who prescribed it. Share it with all your siblings. You'll often find duplicates, old prescriptions that should have stopped, or two medicines that shouldn't be taken together.</p>
<h2>Get the list reviewed</h2>
<p>A doctor or pharmacist should look over the full list at least once a year, and after every hospital stay. Many older adults collect prescriptions from different clinics over the years, and no single doctor has seen them all.</p>
<h2>Use a weekly pill organiser</h2>
<p>A simple box with days and times makes it obvious whether a dose was missed. Someone should fill it once a week, ideally the same person each time. If your parent has memory problems, this one change can make a big difference.</p>
<h2>Plan refills before they run out</h2>
<p>Note when each prescription will finish and set a reminder a week before. Running out on a Friday evening often means missing doses all weekend. For long-term medicines like those for blood pressure and diabetes, ask whether a two or three month supply is possible.</p>
<h2>Buy from a trusted pharmacy</h2>
<p>Counterfeit and substandard medicines are a real risk. Stick with one reputable, registered pharmacy, and check packs for the NAFDAC number and expiry date. A consistent pharmacy also builds a record of what your parent takes.</p>
<h2>Watch for side effects</h2>
<p>Dizziness, unusual tiredness, swollen ankles, a new cough or confusion can all be side effects. Older adults are more sensitive to medicines, and doses that suited them ten years ago may now be too strong. Encourage your parent, and whoever checks on them, to mention anything new.</p>
<h2>Make someone accountable</h2>
<p>The biggest gap is usually not knowledge, it's follow-through. Someone needs to physically check that medicines are being taken and that refills are arriving. That's hard to ask of a busy relative week after week.</p>
<p>This is one of the main things a MyCareEnvoy nurse does on every visit: checks the organiser, counts remaining doses, flags refills early and coordinates with the pharmacy. You see it all in the visit report.</p>`,
  },
  {
    slug: "preparing-parent-for-hospital-visit",
    title: "Preparing your parent for a hospital visit",
    category: "Health tips",
    excerpt: "A little preparation turns a long, stressful hospital day into a productive one. Here's a checklist families can share.",
    minutes: 4,
    image: IMG.caregiver,
    html: `
<p>A hospital visit in Nigeria can easily take a whole day: queues for registration, waiting to see the doctor, then more waiting for tests and the pharmacy. For an older parent, it can be exhausting. A little planning makes a real difference, both to how they feel and to what gets done.</p>
<h2>Before the day</h2>
<ul>
<li><strong>Write down the reason for the visit.</strong> List symptoms, when they started, and what makes them better or worse. Older adults often forget details once they're in front of the doctor.</li>
<li><strong>Prepare questions.</strong> Agree as a family on the two or three most important questions so they don't get lost.</li>
<li><strong>Gather documents.</strong> Hospital card, previous results, discharge summaries and the full list of current medicines. Bring the actual packs if possible.</li>
<li><strong>Check payment.</strong> Confirm the hospital's payment methods and have enough for consultation, tests and medicines. Know if HMO cover applies.</li>
<li><strong>Book transport.</strong> A reliable driver or ride saves stress. Go early to avoid the worst traffic and heat.</li>
</ul>
<h2>What to pack</h2>
<ul>
<li>Water and a light snack, especially for anyone with diabetes</li>
<li>Their regular medicines for the day</li>
<li>Reading glasses, hearing aid and a charged phone</li>
<li>A light shawl or jacket, as waiting areas can be cold</li>
<li>Something to read, or a small radio</li>
</ul>
<h2>On the day</h2>
<p>No older person should go to hospital alone if it can be avoided. A companion can help with registration, keep their place in queues, take notes during the consultation and make sure prescriptions are collected correctly. If you can, join by phone during the consultation so you hear the doctor's advice directly.</p>
<h2>After the visit</h2>
<p>Ask for a written summary or take a photo of any notes. Update the family medication list if anything changed. Book any follow-up tests or appointments before leaving, and set reminders.</p>
<h2>How MyCareEnvoy helps</h2>
<p>A trusted caregiver can accompany your parent to the appointment, wait with them, and make sure nothing is missed. Our nurse can prepare the questions in advance, and our doctor reviews the outcome so the care plan is updated. You get a short summary the same day.</p>`,
  },
  {
    slug: "blood-pressure-at-70",
    title: "Blood pressure at 70: what's normal and what to watch",
    category: "Living well",
    excerpt: "High blood pressure is common among older Nigerians and often silent. Here's what the numbers mean and when to act.",
    minutes: 5,
    image: IMG.couple,
    html: `
<p>High blood pressure, or hypertension, is one of the most common health conditions among older adults in Nigeria. It often has no symptoms at all, which is why it's called a silent condition. Left uncontrolled, it raises the risk of stroke, heart failure and kidney disease. The good news: it's very treatable.</p>
<h2>Understanding the numbers</h2>
<p>A blood pressure reading has two numbers, for example 138/84. The top number (systolic) is the pressure when the heart beats. The bottom number (diastolic) is the pressure between beats.</p>
<ul>
<li><strong>Below 120/80:</strong> generally considered normal.</li>
<li><strong>120 to 139 over 80 to 89:</strong> elevated. Worth watching and improving with lifestyle changes.</li>
<li><strong>140/90 or above:</strong> high. Usually needs treatment and regular monitoring.</li>
<li><strong>180/120 or above:</strong> very high. Needs urgent medical attention, especially with headache, chest pain, breathlessness or confusion.</li>
</ul>
<p>For many people over 70, doctors aim for a reading below about 140/90, and sometimes lower. The right target depends on the person's overall health, so it should be agreed with their doctor.</p>
<h2>Why regular checks matter</h2>
<p>A single reading tells you little. Blood pressure changes through the day and can rise with stress, pain or a rushed walk to the clinic. Regular readings taken at home, at a similar time, give a much clearer picture and help the doctor adjust medication safely.</p>
<h2>Watch for low readings too</h2>
<p>In older adults, blood pressure that is too low can cause dizziness and falls, especially when standing up. If your parent feels faint or lightheaded after starting a new medicine, tell their doctor.</p>
<h2>Everyday habits that help</h2>
<ul>
<li><strong>Less salt.</strong> Seasoning cubes and salty soups add up quickly. Try herbs, pepper and fresh ingredients instead.</li>
<li><strong>Keep moving.</strong> A daily walk, even in the compound, helps.</li>
<li><strong>Take medicines every day.</strong> Not only when feeling unwell. Many people stop once they feel fine.</li>
<li><strong>Limit alcohol</strong> and avoid smoking.</li>
<li><strong>Sleep well</strong> and manage stress where possible.</li>
</ul>
<h2>What we do</h2>
<p>On every visit, a MyCareEnvoy nurse measures blood pressure properly: seated, rested, with the right cuff size. Readings are tracked over time in your report, and the doctor is alerted if anything is out of range. You'll see the trend, not just a single number.</p>`,
  },
];
