import { Chapter } from "@/types";

export const chapter22Content: Chapter = {
  id: "chapter-22",
  number: 22,
  title: {
    bn: "অধ্যায় ২২: রেসপন্সিভ ডিজাইন — মোবাইল ফার্স্ট ওয়েব লেআউট",
    en: "Chapter 22: Responsive Design (Mobile First Web)",
  },
  description: {
    bn: "রেসপন্সিভ ডিজাইন কী, মোবাইল-ফার্স্ট অ্যাপ্রোচ, মিডিয়া কোয়েরি এবং ফ্লেক্স ও গ্রিডের সাহায্যে সকল ডিভাইসে খাপ খাইয়ে নেওয়ার লেআউট মেথড।",
    en: "Learn core responsive design principles, mobile-first strategies, media queries, flexbox/grid adaptation, and relative typography scaling units.",
  },
  difficulty: "intermediate",
  readingTime: 10,
  objectives: [
    {
      bn: "রেসপন্সিভ ডিজাইনের সংজ্ঞা এবং মোবাইল, ট্যাবলেট ও ডেস্কটপের স্ক্রিনে লেআউট মানিয়ে নেওয়ার ধারণা পরিষ্কার করা।",
      en: "Grasp how responsive layouts adapt user interfaces across mobile, tablet, and desktop viewports.",
    },
    {
      bn: "মোবাইল-ফার্স্ট (Mobile-First) ডিজাইন থিংকিংয়ের গুরুত্ব ও মিডিয়া কোয়েরি লেখার নিয়ম জানা।",
      en: "Understand Mobile-First design priorities and write custom CSS Media Queries.",
    },
    {
      bn: "সিএসএস গ্রিড (CSS Grid) এবং ফ্লেক্সবক্সের সাহায্যে ডাইনামিক কলাম লেআউট তৈরি করতে শেখা।",
      en: "Utilize CSS Grid columns and Flexbox directions to change container structure dynamically.",
    },
    {
      bn: "পিক্সেল (px) পরিহার করে রিলেটিভ ইউনিট (rem, vh, vw, %) ব্যবহারের গুরুত্ব বোঝা।",
      en: "Deploy relative typography sizing units (rem, %, vh, vw) to avoid rigid layouts.",
    },
  ],
  sections: [
    {
      id: "what-is-responsive-design",
      title: {
        bn: "১. রেসপন্সিভ ডিজাইন ও মিডিয়া কোয়েরি (What is Responsive Design & Media Queries)",
        en: "1. What is Responsive Design & Media Queries",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা যখন কম্পিউটারে কোনো ওয়েবসাইট দেখি, স্ক্রিনটি অনেক বড় বা চওড়া থাকে। কিন্তু যখন সেই একই সাইট আমাদের হাতের ছোট মোবাইল স্ক্রিনে ওপেন করি, তখন যদি কন্টেন্টগুলো ডানে-বামে কেটে যায়, ফন্ট অনেক ছোট হয়ে থাকে কিংবা বাটনে ক্লিক করাই না যায়, তবে ইউজার সাথে সাথে সাইটটি থেকে বের হয়ে যান।

বিভিন্ন আকৃতির মোবাইল, ট্যাবলেট ও মনিটরের স্ক্রিনে ওয়েবসাইটের প্রতিটি উপাদানের আকার ও লেআউট স্বয়ংক্রিয়ভাবে খাপ খাইয়ে নেওয়ার জাদুকরী কৌশলের নামই হলো **রেসপন্সিভ ডিজাইন (Responsive Design)**।

## What is a Media Query? (মিডিয়া কোয়েরি কী?)
**মিডিয়া কোয়েরি (Media Query)** হলো সিএসএসের সেই বিশেষ লজিক্যাল ফিল্টার যার মাধ্যমে আমরা ব্রাউজারকে বলি: *"যদি ইউজারের স্ক্রিনের চওড়া বা উইডথ একটি নির্দিষ্ট পিক্সেলের চেয়ে বেশি বা কম হয়, তবে এই সিএসএস স্টাইলটি রান করাও।"*

*   **কোড উদাহরণ**:
    \`\`\`css
    /* ডিফল্ট স্টাইল (মোবাইলের জন্য) */
    .title {
      font-size: 18px;
    }

    /* ৭৬৮ পিক্সেল বা তার চেয়ে বড় স্ক্রিনের (যেমন: ট্যাবলেট/ডেস্কটপ) জন্য মিডিয়া কোয়েরি */
    @media (min-width: 768px) {
      .title {
        font-size: 28px; /* বড় স্ক্রিনে টাইটেল সাইজ বাড়িয়ে দেওয়া হলো */
      }
    }
    \`\`\``,
        en: `## Introduction
Displaying desktop coordinates on narrow screens yields broken layouts. Responsive design programmatically adapts containers relative to viewport widths.

## What are Media Queries?
CSS filters applying custom stylesheet properties depending on viewport width breakpoints.

## Syntax:
\`\`\`css
/* Applied on narrow screens */
body { background: white; }

/* Triggered on screens wider than 768px */
@media (min-width: 768px) {
  body { background: lightgray; }
}
\`\`\``,
      },
    },
    {
      id: "mobile-first-concept",
      title: {
        bn: "২. মোবাইল-ফার্স্ট থিংকিং কেন প্রয়োজন? (The Mobile-First Approach)",
        en: "2. The Mobile-First Approach",
      },
      content: {
        bn: `## The Mobile-First Concept (মোবাইল-ফার্স্ট কী?)
পূর্বে ডেভেলপাররা প্রথমে ডেস্কটপের জন্য ওয়েবসাইট ডিজাইন করতেন, তারপর মিডিয়া কোয়েরি ব্যবহার করে মোবাইল স্ক্রিনের জন্য এলিমেন্টগুলোকে জোড়াতালি দিয়ে ছোট করতেন। কিন্তু এটি ছিল অত্যন্ত জটিল এবং ভারী কোড তৈরি করতো।

আধুনিক প্রফেশনাল মেথড হলো **মোবাইল-ফার্স্ট (Mobile-First) ডিজাইন**:
*   **নিয়ম**: প্রথমে কোনো মিডিয়া কোয়েরি ছাড়াই ডিফল্ট সিএসএস দিয়ে মোবাইলের সুন্দর সিঙ্গেল কলাম লেআউট লিখুন। এরপর স্ক্রিনের উইডথ বাড়তে থাকলে মিডিয়া কোয়েরিতে \`min-width\` ব্যবহার করে ধীরে ধীরে ডেস্কটপের ২ কলাম বা ৩ কলাম গ্রিড লেআউট যোগ করতে থাকুন।

---
## Why Mobile-First matters? (কেন এটি জরুরি?)
১. **ইউজার বেস (Users)**: ইন্টারনেটের প্রায় ৬০%+ ইউজার মোবাইল ডিভাইস থেকে ওয়েবসাইট ভিজিট করেন।
২. **পারফরম্যান্স (Performance)**: মোবাইল ডিভাইসের প্রসেসর ও ইন্টারনেট ডেস্কটপের মতো শক্তিশালী থাকে না। মোবাইল-ফার্স্ট কোড লিখলে মোবাইলে অপ্রয়োজনীয় ভারী জাভাস্ক্রিপ্ট বা সিএসএস কম্পাইলেশন এড়ানো যায়, ফলে সাইট দ্রুত লোড হয়।
৩. **কোডের পরিচ্ছন্নতা (Clean Code)**: \`min-width\` দিয়ে কোড লিখলে মিডিয়া কোয়েরির ভেতরে ডুপ্লিকেট সিএসএস লেখার হার অনেক কমে যায়।`,
        en: `## The Mobile-First Concept
Writing base CSS layout for mobile screens first without media queries, then nesting progressive overrides using \`min-width\` properties to target wider viewports.

## Why Mobile-First Matters
*   **Dominant Traffic**: Over 60% of global web requests come from smartphones.
*   **Performance Optimization**: Mobile processors and 4G networks require clean, lightweight stylesheets.
*   **Simplified Diffs**: Prevents complex responsive overrides down the CSS cascade tree.`,
      },
    },
    {
      id: "flexbox-grid-responsive",
      title: {
        bn: "৩. রেসপন্সিভ লেআউটে ফ্লেক্সবক্স ও গ্রিড সিস্টেম (Flex & Grid Adaptability)",
        en: "3. Flex & Grid Adaptability",
      },
      content: {
        bn: `## Flexbox in Responsive layouts (ফ্লেক্সবক্সের নমনীয়তা)
ফ্লেক্সবক্সের \`flex-wrap: wrap\` প্রপার্টিটি রেসপন্সিভ ডিজাইনে অত্যন্ত শক্তিশালী ভূমিকা পালন করে।
*   **ডেস্কটপ**: ৩টি কার্ড ডানে-বামে পাশাপাশি থাকে।
*   **মোবাইল**: স্ক্রিন ছোট হলে বাটন বা কার্ডগুলো নিচে নেমে সোজা দাঁড়িয়ে যায় (Stacked Layout)।
*   **কোড**:
    \`\`\`css
    .card-list {
      display: flex;
      flex-wrap: wrap; /* পাশাপাশি জায়গা না থাকলে কার্ড নিচে নেমে যাবে */
    }
    \`\`\`

---
## The CSS Grid (গ্রিড সিস্টেমের ভূমিকা)
ফ্লেক্সবক্স যেখানে একমুখী (১D - হয় রো নয় কলাম) সাজাতে পারে, **সিএসএস গ্রিড (CSS Grid)** হলো দ্বিমুখী (২D - কলাম ও রো একসাথে) সাজানোর চমৎকার শক্তিশালী লেআউট সিস্টেম। কার্ড বা ড্যাশবোর্ড বানানোর জন্য এটি সেরা।

*   **সহজ উদাহরণ**:
    \`\`\`css
    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr; /* মোবাইলে ১টি কলাম */
      gap: 20px;
    }

    @media (min-width: 768px) {
      .dashboard-grid {
        grid-template-columns: repeat(3, 1fr); /* ট্যাবলেটে ৩টি সমান কলাম */
      }
    }
    \`\`\`
*   \`1fr\` (Fractional Unit) হলো স্ক্রিনের ফাঁকা জায়গাকে সমান ভাগে ভাগ করার রিলেটিভ অনুপাত ইউনিট।`,
        en: `## Flexbox Flex Wrap
Declaring \`flex-wrap: wrap\` on flex parents forces children to wrap onto new lines when the container shrinks, turning side-by-side desktop items into stacked mobile rows.

## CSS Grid System
Grid layouts control layout columns and rows simultaneously:
*   \`grid-template-columns: 1fr\`: 1 column on smartphones.
*   \`grid-template-columns: repeat(3, 1fr)\`: Transforms into 3 columns on desktops using media query breakpoints.`,
      },
    },
    {
      id: "responsive-units-units",
      title: {
        bn: "৪. রিলেটিভ ইউনিট ও লেআউট শিফটিং (Relative Units: %, rem, vh, vw)",
        en: "4. Relative Units: %, rem, vh, vw",
      },
      content: {
        bn: `## Avoiding Fixed Pixels (পিক্সেল পরিহারের প্রয়োজনীয়তা)
আমরা যদি কন্টেইনারের উইডথ ফিক্সড পিক্সেল দিয়ে লিখে রাখি (যেমন: \`width: 800px;\`), তবে ৭৬৮ পিক্সেল চওড়া মোবাইল স্ক্রিনে ওয়েবসাইটটি কেটে যাবে এবং ডানে-বামে স্ক্রোলবার চলে আসবে।

রেসপন্সিভ ডিজাইনের অন্যতম প্রধান শর্ত হলো **রিলেটিভ ইউনিট (Relative Units)** ব্যবহার করা:

১. **Percentage (%)**: প্যারেন্ট এলিমেন্টের সাপেক্ষে চওড়া হওয়া।
   - \`width: 100%;\` (মোবাইলে স্ক্রিনের পুরোটা জুড়ে থাকবে)।
২. **rem**: ইউজারের ব্রাউজার সেটিংসের রুট ফন্ট সাইজের সাপেক্ষে স্কেল হওয়া।
   - \`font-size: 2rem;\` (ইউজার ব্রাউজারের টেক্সট সাইজ বড় করলে ফন্ট অটোমেটিক খাপ খেয়ে বড় হবে)।
৩. **vh / vw (Viewport Height / Viewport Width)**:
   - \`100vh\` হলো স্ক্রিনের সম্পূর্ণ লম্বালম্বি উচ্চতা (Height) এবং \`100vw\` হলো স্ক্রিনের সম্পূর্ণ চওড়া উইডথ।`,
        en: `## Relative Spacing Units
Fixed pixel declarations (px) force containers to overflow when viewport dimensions shrink. Responsive layout models rely on relative units:
*   \`%\`: Percentage size based on parent dimension constraints.
*   \`rem\`: Dynamic text sizing based on the root HTML font size.
*   \`vw\` / \`vh\`: Viewport Width / Viewport Height percentages. E.g., \`100vh\` equals the screen height.`,
      },
    },
    {
      id: "water-container-analogy",
      title: {
        bn: "৫. পানির পাত্র ও লেআউট রূপান্তর অ্যানালজি (Water Container Analogy)",
        en: "5. Water Container Analogy",
      },
      content: {
        bn: `## The Water in Container Metaphor (পানির পাত্র রূপক)
রেসপন্সিভ ডিজাইন এবং মোবাইল-ফার্স্ট অ্যাপ্রোচকে একটি গ্লাসের পানির সাথে মিলিয়ে নিন:
*   **ওয়েবসাইটের কন্টেন্ট (লেখা, ছবি, ডাটা)**: পানি (Water)। পানির কিন্তু নিজস্ব কোনো ফিক্সড চারকোনা আকৃতি নেই।
*   **মোবাইল, ট্যাবলেট ও ডেস্কটপের স্ক্রিন**: পানির পাত্র (গ্লাস, বোতল, বা থালা)।
*   **লেআউট এডজাস্টমেন্ট (Responsive)**: আপনি যদি এক গ্লাস পানি একটি লম্বা বোতলে ঢালেন, পানি লম্বা বোতলের আকার ধারণ করবে (মোবাইলে stacked লম্বা লেআউট)। আবার সেই পানি যখন চওড়া থালায় ঢালেন, পানি চওড়া হয়ে ছড়িয়ে পড়ে (ডেস্কটপে ৩ কলাম লেআউট)। পানি কিন্তু একই আছে, কেবল পাত্রের আকৃতি অনুযায়ী সে নিজের শেপ রি-রেন্ডার করে নিয়েছে!
*   **ডেস্কটপ-ফার্স্ট ভুল**: বরফের মতো শক্ত ফিক্সড বরফ খণ্ড (যেমন ফিক্সড পিক্সেল) চওড়া থালায় রাখা সহজ, কিন্তু সরু বোতলের মুখে তা ঢুকবে না এবং গ্লাস ফেটে যাবে!`,
        en: `## Metaphor
*   **Web Content (text, image, data)**: Water. Water does not possess a fixed physical shape.
*   **Viewing Devices (mobile, tablet, desktop)**: Containers (bottle, bowl, plate).
*   **Responsive Adaptation**: Pouring water into a bottle nests it in a tall stacked structure (mobile layout). Pouring it onto a plate spreads it horizontally (desktop columns layout). The content is unchanged; it reflows according to container properties.`,
      },
      codeBlock: {
        fileName: "responsive.css",
        language: "css",
        code: `/* মোবাইল-ফার্স্ট রেসপন্সিভ কলাম লেআউট */

/* ১. ডিফল্ট স্টাইল (মোবাইলের জন্য) */
.features-container {
  display: grid;
  grid-template-columns: 1fr; /* মোবাইলে সিঙ্গেল কলাম */
  gap: 16px;
  padding: 1rem;
}

/* ২. ট্যাবলেটের জন্য মিডিয়া কোয়েরি (৭৬৮ পিক্সেল বা তার বেশি) */
@media (min-width: 768px) {
  .features-container {
    grid-template-columns: repeat(2, 1fr); /* ২ কলাম লেআউট */
    padding: 2rem;
  }
}

/* ৩. বড় মনিটরের জন্য মিডিয়া কোয়েরি (১০২৪ পিক্সেল বা তার বেশি) */
@media (min-width: 1024px) {
  .features-container {
    grid-template-columns: repeat(3, 1fr); /* ৩ কলাম লেআউট */
  }
}`,
        explanations: [
          {
            line: 5,
            text: {
              bn: "মোবাইলে ডিফল্ট সিঙ্গেল কলাম লেআউট দেওয়া হয়েছে যাতে স্ক্রল বারে ডানে কেটে না যায়।",
              en: "Defaulting to 1-column layouts on smartphones without media queries.",
            },
          },
          {
            line: 12,
            text: {
              bn: "স্ক্রিন ৭৬৮ পিক্সেল ছুঁলে সিএসএস গ্রিড স্বয়ংক্রিয়ভাবে ফিচার কার্ডগুলোকে ২ কলামে সাজিয়ে দেবে।",
              en: "Updating layouts to 2-columns on tablets using min-width overrides.",
            },
          },
        ],
      },
    },
    {
      id: "practice-responsive-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার রেসপন্সিভ মিডিয়া কোয়েরি এবং মোবাইল ফার্স্ট লজিকের ধারণা শক্তিশালী করবে।`,
        en: `## Reflection & Lab Tasks
Solidify responsive CSS breakpoints before learning utility-first frameworks like Tailwind CSS in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "রেসপন্সিভ লেআউটের সঠিক ব্যবহার জানলে আপনার ওয়েবসাইট যেকোনো স্ক্রিনেই প্রিমিয়াম দেখাবে এবং ইউজার রিটেনশন বাড়বে।",
          en: "Websites must adapt fluidly. Mastering media queries prevents layout broken bugs on high-end device displays.",
        },
        whyWorks: {
          bn: "ব্রাউজার ভিউপোর্ট সাইজ চেঞ্জ হওয়ার সাথে সাথে মিডিয়া কোয়েরির কন্ডিশন ভ্যালিডেশন রি-ইভালুয়েট করে এবং অ্যাক্টিভ স্টাইল সিঙ্ক করে।",
          en: "Browsers re-evaluate media queries during resize events, rendering layout transformations instantly.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা ব্রেকপয়েন্ট পিক্সেল র্যান্ডমলি না দিয়ে স্ট্যান্ডার্ড ডিভাইস ব্রেকপয়েন্ট (যেমন: 576px, 768px, 1024px, 1280px) অনুসরণ করেন।",
          en: "Seniors adopt standard device breakpoints matching framework conventions (e.g., sm, md, lg, xl).",
        },
        mistakes: {
          bn: "বিগিনারদের ভুল হলো হেড সেকশনে মেটা ভিউপোর্ট ট্যাগ (<meta name='viewport' content='width=device-width'>) না দেওয়া, ফলে মোবাইলে সাইট জুমিং হয়ে ছোট দেখায়।",
          en: "Forgetting viewport meta tags in HTML heads forces mobile browsers to render desktop sizes scaled down.",
        },
        debugging: {
          bn: "ক্রোম ডেভটুলসের 'Responsive Toggle Device' বাটন ক্লিক করে মাউস দিয়ে টেনে বিভিন্ন স্ক্রিন সাইজে আপনার লেআউটের ভাঙন টেস্ট করুন।",
          en: "Simulate mobile displays inside browser DevTools to test layout flow shifting and breakpoints.",
        },
        performance: {
          bn: "অপ্রয়োজনীয় বড় সাইজের ইমেজ মোবাইলে লোড হওয়া রোধ করতে 'srcset' এইচটিএমএল অ্যাট্রিবিউট ব্যবহার করে ইমেজ স্কেলিং কন্ট্রোল করুন।",
          en: "Optimize image delivery by serving small images to smartphones using HTML5 srcset parameters.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "rp-q1",
      question: {
        bn: "রেসপন্সিভ ওয়েব ডিজাইন (Responsive Web Design) বলতে কী বোঝায়?",
        en: "What does Responsive Web Design mean?",
      },
      options: [
        { bn: "সবচেয়ে দ্রুত গতির সার্ভার রান করা", en: "Run high-speed servers engines" },
        { bn: "বিভিন্ন আকারের স্ক্রিন (মোবাইল, ট্যাবলেট ও ডেস্কটপ) অনুযায়ী ওয়েবসাইটের লেআউট স্বয়ংক্রিয়ভাবে মানিয়ে নেওয়া", en: "Ensure the webpage layout adapts automatically based on the device screen size" },
        { bn: "জাভাস্ক্রিপ্ট ফাইল ডিলিট করা", en: "Delete script assets files" },
        { bn: "ডিএনএস পোর্ট পরিবর্তন করা", en: "Change remote port properties" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রেসপন্সিভ ডিজাইনের মূল লক্ষ্য হলো মোবাইল ও মনিটর স্ক্রিনে কোড ভেঙে না গিয়ে লেআউট এডজাস্ট করা।",
        en: "Responsive design ensures content fits fluidly within any viewport boundaries.",
      },
    },
    {
      id: "rp-q2",
      question: {
        bn: "মোবাইল-ফার্স্ট (Mobile-First) ডিজাইন অ্যাপ্রোচের মূল আইডিয়া কোনটি?",
        en: "What is the primary concept of Mobile-First design?",
      },
      options: [
        { bn: "প্রথমে ডেস্কটপের জন্য সম্পূর্ণ সাইট ডিজাইন করা", en: "Style desktop viewport layout rules first" },
        { bn: "প্রথমে মোবাইলের জন্য বেসিক সিঙ্গেল কলাম কোড লেখা এবং পরবর্তীতে মিডিয়া কোয়েরি দিয়ে বড় স্ক্রিনে কলাম যোগ করা", en: "Write styling rules for mobile screens first, then progressively add columns for larger viewports" },
        { bn: "এইচটিএমএল ফাইল না লেখা", en: "Avoid coding HTML documents" },
        { bn: "শুধুমাত্র জাভাস্ক্রিপ্ট রান করা", en: "Run scripts files exclusively" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "মোবাইল-ফার্স্ট ডিজাইনে ডিফল্ট কোড লেখা হয় মোবাইলের জন্য, তারপর min-width দিয়ে ট্যাবলেট ও ডেস্কটপের জন্য কলাম বড় করা হয়।",
        en: "Mobile-first establishes basic lightweight layout configurations before compiling heavy desktop assets.",
      },
    },
    {
      id: "rp-q3",
      question: {
        bn: "স্ক্রিন ৭৬৮ পিক্সেল বা তার বেশি চওড়া হলে সিএসএস রুল রান করতে কোন মিডিয়া কোয়েরি কন্ডিশন ব্যবহার করা উচিত?",
        en: "Which media query breakpoint syntax targets viewports wider than 768px?",
      },
      options: [
        { bn: "@media (max-width: 768px)", en: "@media (max-width: 768px)" },
        { bn: "@media (min-width: 768px)", en: "@media (min-width: 768px)" },
        { bn: "@media (width: 768px)", en: "@media (width: 768px)" },
        { bn: "if (screenWidth >= 768)", en: "if (screenWidth >= 768)" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "min-width: 768px অর্থ হলো সর্বনিম্ন ৭৬৮ পিক্সেল থেকে শুরু করে তার চেয়ে বড় সকল স্ক্রিনে এই স্টাইল কার্যকর হবে।",
        en: "min-width filters styles for viewports equal to or wider than the specified pixel breakpoint value.",
      },
    },
    {
      id: "rp-q4",
      question: {
        bn: "রেসপন্সিভ লেআউটে কোন ইউনিটটি ব্যবহার করলে স্ক্রিনের চওড়া বা ভিউপোর্টের সাপেক্ষে এলিমেন্ট বড় ছোট হয় (Viewport Width)?",
        en: "Which CSS relative unit scale is based on viewport width dimensions?",
      },
      options: [
        { bn: "px (পিক্সেল)", en: "px (pixels)" },
        { bn: "vw (ভিউপোর্ট উইডথ)", en: "vw (viewport width)" },
        { bn: "rem", en: "rem" },
        { bn: "vh", en: "vh" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "vw বা Viewport Width হলো ইউজারের ব্রাউজার স্ক্রিন চওড়ার ১% সাইজ অনুপাত।",
        en: "vw represents 1% of the viewport's total horizontal layout dimension.",
      },
    },
    {
      id: "rp-q5",
      question: {
        bn: "মোবাইলে ইমেজ ও কলাম জুম হয়ে ছোট থাকা আটকাতে কোন মেটা ট্যাগটি এইচটিএমএল হেডে ব্যবহার করা বাধ্যতামূলক?",
        en: "Which metadata tag in the HTML head prevents mobile viewport scaling errors?",
      },
      options: [
        { bn: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", en: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" },
        { bn: "<meta charset='UTF-8'>", en: "<meta charset='UTF-8'>" },
        { bn: "<title>", en: "<title>" },
        { bn: "<link>", en: "<link>" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "viewport মেটা ট্যাগ ব্রাউজারকে নির্দেশ দেয় যে মোবাইল স্ক্রিনের আসল উইডথ অনুযায়ী স্কেল রেন্ডার করতে হবে।",
        en: "Viewport meta tags set layout scaling sizes relative to actual physical screen widths.",
      },
    },
  ],
  practice: [
    {
      bn: "স্ক্রিন উইডথ ১০২৪ পিক্সেলের চেয়ে বড় হলে ব্যাকগ্রাউন্ড কালার হালকা নীল (#e0f7fa) করার একটি মিডিয়া কোয়েরি সিএসএস কোড লিখুন।",
      en: "Write a media query targeting min-width 1024px to update styling backgrounds to #e0f7fa.",
    },
    {
      bn: "ফিক্সড পিক্সেল (যেমন: width: 500px) ব্যবহারের বদলে কেন পার্সেন্টেজ (width: 100%) ব্যবহার করা উচিত? ব্যাখ্যা করুন।",
      en: "Explain why declaring widths in percentages is superior to fixed pixels.",
    },
    {
      bn: "সিএসএস গ্রিডে 'grid-template-columns: repeat(3, 1fr)' এর কাজ কী? সংক্ষেপে লিখুন।",
      en: "Describe what the grid template column repeat syntax does.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি রেস্পন্সিভ ফিচার গ্রিড লেআউট ডিজাইন",
      en: "Responsive Feature Grid Layout Design",
    },
    description: {
      bn: "মোবাইলে ১টি কলাম এবং ৭৬৮ পিক্সেল বা তার চেয়ে বড় স্ক্রিন সাইজে ৩টি সমান কলাম দেখাবে—এমন একটি রেস্পন্সিভ সিএসএস লেআউট কোড কনফিগারেশন তৈরি করে সাবমিট করুন।",
      en: "Design responsive column templates configurations mapping smartphone stacked layouts to tablet columns grids.",
    },
    starterCode: `/* Responsive Layout Schema Map */
.product-grid {
  display: grid;
  
  /* মোবাইলের ডিফল্ট কলাম ও গ্যাপ প্রপার্টি লিখুন */
  
}

/* ট্যাবলেট ও ডেস্কটপের জন্য ৩ কলাম লেআউট মিডিয়া কোয়েরি লিখুন */`,
    solution: {
      code: `/* Responsive Layout Schema Active */
.product-grid {
  display: grid;
  grid-template-columns: 1fr; /* মোবাইলে ১ কলাম */
  gap: 20px;
}

@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr); /* ডেস্কটপে ৩ কলাম */
  }
}`,
      explanation: {
        bn: "চমৎকার ডিজাইন! মোবাইল-ফার্স্ট মেথডে মোবাইলের ১ কলাম লেআউট লিখে বড় স্ক্রিনে ৩টি গ্রিড কলামে রূপান্তর করার সিএসএস কোডটি শতভাগ সঠিক হয়েছে।",
        en: "Transforming columns sizes using min-width breakpoints scales application grids safely.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "মোবাইল-ফার্স্ট ডিজাইন পদ্ধতিতে (min-width) এবং ডেস্কটপ-ফার্স্ট ডিজাইন পদ্ধতিতে (max-width) মিডিয়া কোয়েরি লেখার মূল পার্থক্য কী?",
        en: "What is the difference between writing Media Queries using min-width vs. max-width?",
      },
      answer: {
        bn: "১. **min-width (মোবাইল-ফার্স্ট)**: এটি নির্দেশ করে 'এই পিক্সেল বা তার চেয়ে বড় স্ক্রিনে' স্টাইল লোড হবে। এখানে ডিফল্ট কোড লেখা হয় মোবাইলের জন্য (ছোট স্ক্রিন) এবং মিডিয়া কোয়েরি দিয়ে বড় স্ক্রিনের (ট্যাবলেট/ডেস্কটপ) ফিচার যোগ করা হয়। এটি সিএসএস ওভাররাইটিং কমায় এবং কোড হালকা রাখে।\n২. **max-width (ডেস্কটপ-ফার্স্ট)**: এটি নির্দেশ করে 'এই পিক্সেল বা তার চেয়ে ছোট স্ক্রিনে' স্টাইল লোড হবে। এখানে প্রথমে বড় ডেস্কটপের জন্য জটিল ডিজাইন লিখে তারপর মিডিয়া কোয়েরির ভেতরে মোবাইলের জন্য সিএসএস ওভাররাইট করে এলিমেন্ট লুকানো বা সাজানো হয়, যা কোডের সাইজ ও রি-রেন্ডারিং ওভারহেড বাড়িয়ে দেয়।",
        en: "1. **min-width (Mobile-First)**: Targets viewports equal to or wider than the breakpoint. The baseline styles style mobile screens, and media queries selectively append layout structures for larger viewports. Highly performant.\n2. **max-width (Desktop-First)**: Targets viewports equal to or narrower than the breakpoint. Styles are compiled for desktops first, then media queries overwrite configurations to squeeze or hide elements on narrow displays, increasing CSS code size."
      },
    },
    {
      question: {
        bn: "রেস্পন্সিভ ডিজাইনের ক্ষেত্রে সিএসএস ফ্লেক্সবক্স (Flexbox) এবং সিএসএস গ্রিড (Grid) এর মধ্যে কোনটির ব্যবহার কখন বেশি উপযুক্ত?",
        en: "When should developers use CSS Flexbox vs. CSS Grid in responsive layouts?",
      },
      answer: {
        bn: "১. **Flexbox (ওয়ান-ডাইমেনশনাল)**: এটি এলিমেন্টগুলোকে কেবল একটি লাইনে (হয় কলাম আকারে নিচে নিচে অথবা রো আকারে পাশাপাশি) সাজানোর জন্য উপযুক্ত। যেমন: নেভিগেশন বার, সাধারণ বাটন সেট, কিংবা ফর্ম ইনপুট এলাইনমেন্ট। এটি কন্টেন্টের আকারের ওপর ভিত্তি করে ফ্লেক্সিবল সাইজ এডজাস্ট করে।\n২. **CSS Grid (টু-ডাইমেনশনাল)**: এটি একই সাথে রো এবং কলাম (লম্বালম্বি ও পাশাপাশি দুই অক্ষেই) লেআউট নিয়ন্ত্রণ করার জন্য ব্যবহৃত হয়। যেমন: জটিল ড্যাশবোর্ড প্যানেল, প্রজেক্ট ফিচার কার্ড গ্রিড, গ্যালারি লেআউট। এটি আগে থেকে নির্দিষ্ট গ্রিড কলাম প্যাটার্ন তৈরি করে তার ভেতরে কন্টেন্ট বসাতে সাহায্য করে।",
        en: "1. **Flexbox (One-Dimensional)**: Ideal for aligning items along a single axis (either vertical columns or horizontal rows). Perfect for navbars, buttons rows, or input fields where spacing size is driven by content volume.\n2. **CSS Grid (Two-Dimensional)**: Designed for complex layouts managing rows and columns simultaneously. Perfect for grids of product cards, dashboard charts panels, or editorial page layouts where elements align strictly to a predefined grid system."
      },
    },
  ],
};
