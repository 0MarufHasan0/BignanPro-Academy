import { Chapter } from "@/types";

export const chapter23Content: Chapter = {
  id: "chapter-23",
  number: 23,
  title: {
    bn: "অধ্যায় ২৩: টেইলউইন্ড সিএসএস — ইউটিলিটি ফার্স্ট ডিজাইন",
    en: "Chapter 23: Tailwind CSS (Utility First Styling)",
  },
  description: {
    bn: "টেইলউইন্ড সিএসএস কী, ইউটিলিটি-ফার্স্ট কনসেপ্ট, বেসিক স্পেসিফিকেশন ক্লাস এবং রেস্পন্সিভ ও কালার প্রিপারেশন নিয়ে দ্রুত ইউআই গড়ার গাইড।",
    en: "Learn about utility-first CSS frameworks, Tailwind spacing rules, typography, flexbox configurations, breakpoint prefixes, and colors design systems.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "টেইলউইন্ড সিএসএস (Tailwind CSS) এর ধারণা এবং ইউটিলিটি-ফার্স্ট ডিজাইনের অর্থ বোঝা।",
      en: "Grasp utility-first styling principles using Tailwind CSS frameworks.",
    },
    {
      bn: "আলাদা সিএসএস ফাইল না লিখে সরাসরি এইচটিএমএল ফাইলে ক্লাস বসিয়ে দ্রুত ডিজাইন করতে শেখা।",
      en: "Build rich user interfaces quickly directly within HTML markup class tags.",
    },
    {
      bn: "ফ্লেক্সবক্স ও রেস্পন্সিভ প্রেক্সিস ক্লাস (sm:, md:, lg:) ব্যবহার করে ডাইনামিক স্ক্রিন লেআউট সাজানো।",
      en: "Deploy flex layout utilities and responsive breakpoint prefixes.",
    },
    {
      bn: "টেইলউইন্ডের বিল্ট-ইন কালার ও শ্যাডো সিস্টেম ব্যবহার করে আধুনিক প্রোডাকশন-লেভেল কার্ড ডিজাইন করা।",
      en: "Combine colors palettes and drop-shadow definitions to construct landing page UI cards.",
    },
  ],
  sections: [
    {
      id: "what-is-tailwind-css",
      title: {
        bn: "১. টেইলউইন্ড সিএসএস ও ইউটিলিটি-ফার্স্ট ধারণা (What is Tailwind & Utility-First)",
        en: "1. What is Tailwind & Utility-First",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা যখন ঐতিহ্যগত বা নরমাল সিএসএস ব্যবহার করি, আমাদের এইচটিএমএল ফাইলের পাশাপাশি একটি \`style.css\` ফাইল তৈরি করতে হয়। সেখানে একেকটি ক্লাসের নাম দিয়ে বর্ডার, প্যাডিং, মার্জিন ইত্যাদি বার বার লিখতে হয়। ফাইলগুলোর মধ্যে বার বার সুইচ করা এবং বড় বড় ক্লাসের নাম মনে রাখা বেশ কষ্টকর ও সময়সাপেক্ষ।

এই সমস্যার আধুনিক ইন্ডাস্ট্রিয়াল সমাধান হলো **Tailwind CSS (টেইলউইন্ড সিএসএস)**।

## Why should I learn this? (কেন শিখবো?)
আধুনিক সফটওয়্যার ডেভেলপমেন্ট বিশেষ করে Next.js এবং React অ্যাপ তৈরিতে টেইলউইন্ড সিএসএস হলো ডিফল্ট চয়েস। এটি ব্যবহার করলে আপনি প্রথাগত সিএসএসের তুলনায় প্রায় ৫ গুণ দ্রুত ইউজার ইন্টারফেস (UI) ডিজাইন করতে পারবেন।

## What is Tailwind CSS? (টেইলউইন্ড সিএসএস কী?)
**টেইলউইন্ড সিএসএস** হলো একটি **ইউটিলিটি-ফার্স্ট (Utility-first) সিএসএস ফ্রেমওয়ার্ক**।

*   **ইউটিলিটি-ফার্স্ট আইডিয়া**: এখানে আপনাকে আলাদা কোনো \`.css\` ফাইল লিখতে হবে না। টেইলউইন্ডে আগে থেকেই হাজার হাজার ছোট ছোট কাজের ক্লাস (Utility Classes) তৈরি করা থাকে। আপনি সেগুলো সরাসরি এইচটিএমএল কোডের \`class\` ট্যাগে বসিয়ে ডিজাইন শেষ করবেন।
*   **সাধারণ তুলনা**:
    - **সাধারণ সিএসএস**: \`h1 { color: blue; font-size: 24px; }\`
    - **টেইলউইন্ড সিএসএস**: \`<h1 class="text-blue-500 text-2xl">হ্যালো</h1>\``,
        en: `## Introduction
Switching between HTML markups and custom CSS files slow down UI iterations. Tailwind CSS solves this issue by exposing pre-compiled class utilities directly to HTML.

## What is Tailwind CSS?
Tailwind is a utility-first CSS framework providing low-level styling classes like flex, pt-4, text-center, and bg-blue-500.

## Comparison:
*   **Custom CSS**: Write \`button { background: red; }\` in files.
*   **Tailwind**: Write \`<button class="bg-red-500">Submit</button>\` in markups.`,
      },
    },
    {
      id: "basic-utility-classes",
      title: {
        bn: "২. বেসিক ইউটিলিটি ক্লাস ও স্পেসিং (Core Utilities & Spacing)",
        en: "2. Core Utilities & Spacing",
      },
      content: {
        bn: `## Basic Spacing Classes (বেসিক স্পেসিং ক্লাস)
টেইলউইন্ডের স্পেসিং ক্লাসগুলো অত্যন্ত সহজ ও নিয়মতান্ত্রিক। এখানে \`1\` ইউনিট বলতে \`4px\` বুঝায়:

*   **Padding (প্যাডিং)**:
    - \`p-4\`: চারদিকে ১৬ পিক্সেল প্যাডিং (4 * 4px = 16px)।
    - \`px-4\`: ডানে-বামে (X-অক্ষে) ১৬ পিক্সেল প্যাডিং।
    - \`py-2\`: উপরে-নিচে (Y-অক্ষে) ৮ পিক্সেল প্যাডিং।
*   **Margin (মার্জিন)**:
    - \`m-4\`: চারদিকে ১৬ পিক্সেল মার্জিন।
    - \`mt-8\`: শুধুমাত্র উপরে (Margin Top) ৩২ পিক্সেল মার্জিন।

---
## Basic Typography & Shape (লেখার আকৃতি ও কোণ)
*   **text-lg** / **text-xl**: ফন্ট সাইজ বড় করা।
*   **font-bold**: লেখা মোটা বা বোল্ড করা।
*   **rounded**: বর্ডার কোণগুলো সামান্য গোল করা (\`border-radius: 0.25rem;\`)।
*   **rounded-xl**: কোণগুলো আরও বেশি বাঁকা করা।
*   **shadow**: নিচে চমৎকার ৩ডি শ্যাডো বা হালকা ছায়া দেওয়া।`,
        en: `## Spacing Utilities
Tailwind scales spacing by multiplier units where 1 unit = 0.25rem (4px):
*   **Padding**: \`p-4\` (16px), \`px-6\` (horizontal), \`py-2\` (vertical).
*   **Margin**: \`m-2\` (8px), \`mt-10\` (margin-top 40px).

## Typography & Borders
*   \`text-xl\`: Increases text size.
*   \`font-semibold\`: Applies medium font weight.
*   \`rounded-lg\`: Applies corner rounding.
*   \`shadow-md\`: Applies medium drop shadow layouts.`,
      },
    },
    {
      id: "tailwind-flex-responsive",
      title: {
        bn: "৩. টেইলউইন্ডে ফ্লেক্সবক্স ও রেস্পন্সিভ ব্রেকপয়েন্ট (Flexbox & Breakpoints: sm, md, lg)",
        en: "3. Flexbox & Breakpoints: sm, md, lg",
      },
      content: {
        bn: `## Flexbox in Tailwind (ফ্লেক্সবক্স ক্লাস)
টেইলউইন্ডে ফ্লেক্স এলাইনমেন্ট করা হাতের মোয়া। আপনাকে কোনো অতিরিক্ত সিএসএস লাইন লিখতে হবে না:
*   \`flex\`: ডিসপ্লে ফ্লেক্স অন করা (\`display: flex;\`)।
*   \`justify-center\`: ডানে-বামে মাঝখানে আনা (\`justify-content: center;\`)।
*   \`items-center\`: উপরে-নিচে মাঝখানে আনা (\`align-items: center;\`)।
*   \`gap-4\`: চাইল্ড এলিমেন্টগুলোর মাঝখানে ১৬ পিক্সেল ফাঁকা রাখা।

---
## Responsive Prefixes (রেস্পন্সিভ কোয়েরি ক্লাস)
টেইলউইন্ডের সবচেয়ে আকর্ষণীয় দিক হলো এর ইন-বিল্ট মিডিয়া কোয়েরি প্রিফিক্স। কোনো সিএসএস মিডিয়া কোয়েরি ব্লক ছাড়া সহজেই ক্লাসের শুরুতে প্রিফিক্স বসিয়ে রেসপন্সিভ ডিজাইন করা যায়:
*   \`sm:\` (৬৪০ পিক্সেল এর বেশি)
*   \`md:\` (৭৬৮ পিক্সেল এর বেশি - ট্যাবলেট)
*   \`lg:\` (১০২৪ পিক্সেল এর বেশি - ডেস্কটপ)

*   **উদাহরণ**:
    \`\`\`html
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ... </div>
    \`\`\`
    *ব্যাখ্যা: মোবাইলে ডিফল্টভাবে ১টি কলাম থাকবে, কিন্তু স্ক্রিন সাইজ যখন ট্যাবলেট বা ডেস্কটপ (\`md:\`) হবে, গ্রিডটি স্বয়ংক্রিয়ভাবে ৩ কলামে রূপান্তর হয়ে যাবে!*`,
        en: `## Flexbox Utilities
*   \`flex\`: Sets display to flex.
*   \`justify-between\`: Distributes space evenly between items.
*   \`items-center\`: Centers items vertically.
*   \`gap-6\`: Sets spaces between nested flex children.

## Responsive Classes
Append viewport breakpoints prefix flags to target properties directly:
*   \`sm:\`: Applies on screens >= 640px.
*   \`md:\`: Applies on screens >= 768px.
*   \`lg:\`: Applies on screens >= 1024px.
*   E.g., \`<h1 class="text-sm md:text-lg">Title</h1>\`.`,
      },
    },
    {
      id: "tailwind-colors-card",
      title: {
        bn: "৪. কালার সিস্টেম ও কার্ড কম্পোনেন্ট তৈরি (Colors & Step-by-Step Card)",
        en: "4. Colors & Step-by-Step Card",
      },
      content: {
        bn: `## The Tailwind Color System (ডিজাইন কালার কোড)
টেইলউইন্ডের একটি পূর্বনির্ধারিত প্রিমিয়াম কালার প্যালেট থাকে যা আপনার ওয়েবসাইটের রঙের ধারাবাহিকতা বজায় রাখে। রঙের তীব্রতা বুঝাতে ৫০ থেকে ৯০০ পর্যন্ত নম্বর ব্যবহার করা হয়:
*   \`bg-blue-50\`: সবচেয়ে হালকা নীল ব্যাকগ্রাউন্ড।
*   \`bg-blue-500\`: স্ট্যান্ডার্ড ব্র্যান্ড নীল রং।
*   \`bg-blue-900\`: সবচেয়ে গাঢ় নীল রং।
*   \`text-gray-700\`: চারকোল গ্রে কালার যা রিডারদের পড়ার জন্য চোখের জন্য অত্যন্ত আরামদায়ক।

---
## Building a Card: Step-by-Step (কার্ড তৈরির ধাপসমূহ)
একটি আধুনিক ব্লগ কার্ডের টেইলউইন্ড কোড কাঠামো:
\`\`\`html
<div class="max-w-sm p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
  <h2 class="text-xl font-bold text-gray-900">বিজ্ঞানপ্রো ড্যাশবোর্ড</h2>
  <p class="mt-2 text-gray-600">টেইলউইন্ড দিয়ে কোড লেখা অনেক সহজ ও দ্রুত!</p>
  <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
    শুরু করুন
  </button>
</div>
\`\`\``,
        en: `## Color Palettes
Tailwind builds consistent palettes graded from 50 (lightest) to 900 (darkest):
*   \`bg-slate-50\`: Off-white canvas.
*   \`text-slate-700\`: Soft charcoal reading texts.
*   \`bg-emerald-500\`: Emerald green branding accents.

## UI Card Structures:
\`\`\`html
<div class="p-6 bg-white rounded-xl shadow-md border border-slate-100">
  <h2 class="text-lg font-bold text-slate-800">Title</h2>
  <p class="mt-1 text-slate-600">Card description.</p>
</div>
\`\`\``,
      },
    },
    {
      id: "lego-blocks-analogy",
      title: {
        bn: "৫. লেগো ব্লক ও ইউআই বিল্ডিংয়ের অ্যানালজি (LEGO Blocks Metaphor)",
        en: "5. LEGO Blocks Metaphor",
      },
      content: {
        bn: `## The LEGO Blocks Metaphor (লেগো ব্লকের রূপক)
টেইলউইন্ড সিএসএস দিয়ে প্রজেক্টের ইন্টারফেস সাজানোকে প্লাস্টিকের লেগো (LEGO) খেলনা জোড়া দেওয়ার সাথে মিলিয়ে নিন:
*   **সাধারণ সিএসএস**: মাটি থেকে কাদা দিয়ে কাস্টম উপায়ে একেকটি ইটের সাইজ ও রং নিজে পুড়িয়ে বানানো (যা সময়সাপেক্ষ ও ক্লান্তিকর)।
*   **টেইলউইন্ড ইউটিলিটি ক্লাস**: কারখানায় আগে থেকেই তৈরি চমৎকার ও উজ্জ্বল লাল, নীল, গোল বা চারকোণা প্লাস্টিক লেগো বক্স ব্লক।
*   **ইউআই বিল্ডিং (UI Construction)**: আপনার খেলনা গাড়ি বানাতে হলে কাস্টম প্লাস্টিক বানানোর দরকার নেই। আপনি কেবল লাল ব্লক (\`bg-red-500\`), চারকোণা চাকা ব্লক (\`rounded-full\`) ও এলাইনমেন্ট ব্লক (\`flex\`) জোড়া দিয়ে চোখের নিমিষেই বাড়ি বা খেলনা তৈরি করে ফেলেন। ব্লকগুলো সব সময় একই মাপে নিখুঁতভাবে বসে, ফলে পুরো প্রজেক্ট দেখতে আকর্ষণীয় ও সিমেট্রিকাল হয়!`,
        en: `## Metaphor
*   **Custom CSS**: Digging clay, shaping individual bricks, and baking them in a custom kiln to build walls (laborious).
*   **Tailwind Utilities**: Standardized plastic LEGO blocks pre-manufactured to snap together instantly.
*   **UI Construction**: To build a car, you don't smelt rubber. You take 4 wheel blocks (\`rounded-full\`), 1 red brick (\`bg-red-500\`), snap them into place using alignments slots (\`flex\`), and immediately deploy the final toy.`,
      },
      codeBlock: {
        fileName: "card_component.html",
        language: "html",
        code: `<!-- টেইলউইন্ড সিএসএস ডাইনামিক ইন্টারফেস কার্ড -->
<div class="flex justify-center items-center p-6 bg-slate-50 min-h-screen">
  
  <div class="w-full max-w-sm bg-white rounded-2xl border border-slate-100 p-6 shadow-lg transition-transform hover:scale-105">
    <span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
      নতুন অধ্যায়
    </span>
    
    <h3 class="mt-4 text-xl font-bold text-slate-800">টেইলউইন্ড সিএসএস</h3>
    <p class="mt-2 text-sm text-slate-500 leading-relaxed">
      আলাদা সিএসএস কোড না লিখে সরাসরি এইচটিএমএল এলিমেন্টে প্রি-বিল্ট ক্লাস বসিয়ে রেস্পন্সিভ কার্ড তৈরির ফ্লো।
    </p>

    <button class="mt-6 w-full py-2.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors">
      পরবর্তী ধাপে যান
    </button>
  </div>

</div>`,
        explanations: [
          {
            line: 4,
            text: {
              bn: "ক্লাসগুলো কোণ গোল (rounded-2xl) করে, বর্ডার দিয়ে এবং সুন্দর ৩ডি শ্যাডো দিয়ে কার্ড তৈরি করে।",
              en: "Utilizing rounded corners, subtle border strokes, and shadows to style card wrappers.",
            },
          },
          {
            line: 5,
            text: {
              bn: "সবুজ থিমের ব্যাজ ডিক্লেয়ার করা হয়েছে bg-emerald-50 এবং text-emerald-600 ক্লাস দিয়ে।",
              en: "Creating emerald accents using custom graded background shades.",
            },
          },
        ],
      },
    },
    {
      id: "practice-tailwind-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার টেইলউইন্ড রেসপন্সিভ ক্লাস এবং ইউটিলিটি গাইডলাইনের ধারণা পোক্ত করবে।`,
        en: `## Reflection & Lab Tasks
Solidify utility styling concepts before constructing functional components structures in React in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "টেইলউইন্ড সিএসএস বুঝলে আপনি খুব সহজে আধুনিক সব স্টাইল টেমপ্লেট কাস্টমাইজ করতে পারবেন ও টিমের সাথে দ্রুত নতুন প্রোডাক্ট প্রোটোটাইপ রিলিজ দিতে পারবেন।",
          en: "Velocity is crucial. Tailwind bypasses custom stylesheet mappings, permitting developers to iterate interfaces directly.",
        },
        whyWorks: {
          bn: "টেইলউইন্ড কম্পাইলার আপনার এইচটিএমএল ফাইল স্ক্যান করে কেবল ব্যবহৃত ইউটিলিটি ক্লাসগুলো বেছে নিয়ে ফাইনাল সিএসএস সাইজ অপ্টিমাইজড করে।",
          en: "Tailwind's engine scans templates source maps, compiling only the exact utility classes used into a minified asset.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা বাটন বা কাস্টম এলিমেন্টের ক্লাস দীর্ঘ হওয়া এড়াতে রিঅ্যাক্ট/নেক্সটজেএস-এর মডিউলার কম্পোনেন্টে কোড টুকরো করে রাখেন।",
          en: "Seniors avoid cluttered markup classes by splitting markup into decoupled reusable React components.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো টেইলউইন্ড ও সাধারণ সিএসএস কাস্টম ফাইল একই প্রজেক্টে গুলিয়ে ফেলা। টেইলউইন্ড ব্যবহার করলে কাস্টম সিএসএস প্রায় ১% ও লিখতে হয় না।",
          en: "Avoid mixing heavy inline custom styles with Tailwind utility chains. Commit to one architecture design system.",
        },
        debugging: {
          bn: "কোনো ক্লাস কাজ না করলে বানানে এরর আছে কিনা চেক করুন (যেমন: text-center এর বদলে txt-center)। ক্রোম ইন্সপেক্টরে লাইভ ক্লাস ফিল্টার চেক করুন।",
          en: "Verify classes strings spelling errors (e.g., bg-red-500 vs. bg-red-5000). Inspect node rule matches in browser panels.",
        },
        performance: {
          bn: "ডাইনামিক ক্লাস জেনারেট করার সময় কোডে স্ট্রিং কনক্যাটিনেশন (যেমন: 'bg-' + color) পরিহার করুন। টেইলউইন্ড সম্পূর্ণ ক্লাস নেম ডিক্লেয়ারেশন পড়তে ভালোবাসে।",
          en: "Never construct dynamic class names string maps (e.g., \`bg-\${color}-500\`). Tailwind needs whole strings to compile them.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "tw-q1",
      question: {
        bn: "টেইলউইন্ড সিএসএস (Tailwind CSS) এর প্রধান মূলনীতি কোনটি?",
        en: "What is the core philosophy of Tailwind CSS?",
      },
      options: [
        { bn: "সবচেয়ে বেশি ফন্ট ডাউনলোড করা", en: "Download multiple custom fonts files" },
        { bn: "ইউটিলিটি-ফার্স্ট (Utility-First) — আলাদা সিএসএস ফাইল না লিখে এইচটিএমএলেই ছোট প্রি-বিল্ট ক্লাস ব্যবহার করা", en: "Utility-First: using pre-built classes directly in HTML instead of writing custom CSS rules" },
        { bn: "ডাটাবেজ কানেকশন লক করা", en: "Lock database network ports connection" },
        { bn: "সার্ভারে ফাইল আপলোড করা", en: "Upload server-side build files" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "টেইলউইন্ড সিএসএস আলাদা স্টাইল শিট লেখার ঝামেলা দূর করে সরাসরি এইচটিএমএল ক্লাসে ডিজাইন করতে দেয়।",
        en: "Tailwind focuses on low-level utility classes directly applied in HTML markup.",
      },
    },
    {
      id: "tw-q2",
      question: {
        bn: "টেইলউইন্ডে চারদিকে ১৬ পিক্সেল প্যাডিং দেওয়ার জন্য কোন ইউটিলিটি ক্লাসটি সঠিক (১ ইউনিট = ৪ পিক্সেল)?",
        en: "Which Tailwind utility class applies a 16px padding on all sides?",
      },
      options: [
        { bn: "padding-16", en: "padding-16" },
        { bn: "p-4 (কারণ ৪ * ৪ পিক্সেল = ১৬ পিক্সেল)", en: "p-4 (since 4 * 4px = 16px)" },
        { bn: "m-4", en: "m-4" },
        { bn: "px-16", en: "px-16" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "টেইলউইন্ডের ৪ নম্বর স্কেল ১৬ পিক্সেল প্যাডিং রিপ্রেজেন্ট করে (p-4 = padding 1rem বা 16px)।",
        en: "Tailwind's spacing scale multiplies input variables by 4px, making p-4 map to 16px padding.",
      },
    },
    {
      id: "tw-q3",
      question: {
        bn: "টেইলউইন্ডে ট্যাবলেট স্ক্রিন (৭৬৮ পিক্সেল বা বেশি) টার্গেট করে রেসপন্সিভ স্টাইল দিতে কোন প্রিফিসটি ব্যবহার করা হয়?",
        en: "Which Tailwind prefix targets tablet displays?",
      },
      options: [
        { bn: "tablet:", en: "tablet:" },
        { bn: "md: (Medium Breakpoint)", en: "md: (Medium Breakpoint)" },
        { bn: "lg:", en: "lg:" },
        { bn: "sm:", en: "sm:" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "md: প্রিফিক্স মাঝারি স্ক্রিন বা ৭৬৮ পিক্সেল ভিউপোর্টের চেয়ে চওড়া স্ক্রিনের মিডিয়া কোয়েরি টার্গেট করে।",
        en: "md: targets viewports equal to or wider than the standard 768px tablet grid boundary.",
      },
    },
    {
      id: "tw-q4",
      question: {
        bn: "টেইলউইন্ডে কোণ গোল করার জন্য (border-radius) কোন ক্লাসটি ব্যবহার করা হয়?",
        en: "Which Tailwind class controls corner rounding (border-radius)?",
      },
      options: [
        { bn: "circle", en: "circle" },
        { bn: "rounded", en: "rounded" },
        { bn: "border-corner", en: "border-corner" },
        { bn: "radius-8", en: "radius-8" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "rounded ক্লাস ও তার বিভিন্ন ভেরিয়েন্ট (যেমন rounded-xl) কোণ গোল বা বাঁকা করতে সিএসএস বর্ডার-রেডিয়াস সেট করে।",
        en: "rounded applies border-radius settings, and extensions like rounded-full make shapes circular.",
      },
    },
    {
      id: "tw-q5",
      question: {
        bn: "টেইলউইন্ড কালার সিস্টেমে টেক্সটকে স্ট্যান্ডার্ড চোখের আরামদায়ক চারকোল গ্রে করতে নিচের কোনটি সঠিক?",
        en: "Which Tailwind utility targets a charcoal text color?",
      },
      options: [
        { bn: "text-red-500", en: "text-red-500" },
        { bn: "text-gray-700", en: "text-gray-700" },
        { bn: "bg-gray-100", en: "bg-gray-100" },
        { bn: "font-bold", en: "font-bold" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "text-gray-700 ক্লাস লেখার কালার গ্রে-৭০০ হেক্স কোডে সেট করে যা ব্রাউজারে রিডেবিলিটি বৃদ্ধি করে।",
        en: "text-gray-700 renders soft charcoal typographies, improving client visual comfort.",
      },
    },
  ],
  practice: [
    {
      bn: "একটি সবুজ ব্যাকগ্রাউন্ড কালার ও টেক্সট কালার সাদা যুক্ত গোল বাটনের জন্য টেইলউইন্ড ক্লাসগুলোর একটি চেইন লিখুন।",
      en: "Write a Tailwind class chain for a green button with white text and rounded corners.",
    },
    {
      bn: "টেইলউইন্ডের 'লেগো ব্লক' মেটাফরটির মূল গুরুত্ব নিজের ভাষায় ৩টি বাক্যে বুঝিয়ে লিখুন।",
      en: "Explain the LEGO analogy of Tailwind CSS styling workflows.",
    },
    {
      bn: "মোবাইলে ১ কলাম এবং ডেস্কটপে ৪ কলাম গ্রিড লেআউট তৈরি করার টেইলউইন্ড ডিভ কোড কীভাবে লিখবেন? লিখুন।",
      en: "Write an HTML div tag mapping 1 column on mobile and 4 columns on large screens via Tailwind.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি টেইলউইন্ড সিএসএস কার্ড লেআউট ডিজাইন",
      en: "Tailwind CSS Card Layout Configuration Design",
    },
    description: {
      bn: "একটি ইউজার ফিডব্যাক কার্ড ডেক্লারেটিভ ক্লাসের সাহায্যে ডিজাইন করুন। প্যাডিং ১৬ পিক্সেল, হালকা ধূসর ব্যাকগ্রাউন্ড, গোল কোণ এবং মাঝারি শ্যাডো যুক্ত করে কোডটি সাবমিট করুন।",
      en: "Construct the Tailwind CSS classes checklist for a user feedback card containing padding, gray background, rounded corners, and shadow.",
    },
    starterCode: `<!-- User Review Card Selector -->
<div class="/* কোড লিখুন: টেইলউইন্ড ক্লাসগুলো চেইন আকারে বসান */">
  <h4 class="font-bold text-gray-800">নিলা জাহান</h4>
  <p class="text-sm text-gray-500">বিজ্ঞানপ্রো একাডেমির কোর্স কারিকুলাম চমৎকার!</p>
</div>`,
    solution: {
      code: `<!-- User Review Card Active -->
<div class="p-6 bg-gray-50 rounded-2xl shadow-md border border-gray-100 max-w-sm">
  <h4 class="font-bold text-gray-800 text-lg">নিলা জাহান</h4>
  <p class="text-sm text-gray-600 mt-1">বিজ্ঞানপ্রো একাডেমির কোর্স কারিকুলাম চমৎকার!</p>
</div>`,
      explanation: {
        bn: "চমৎকার টেইলউইন্ড লেআউট! কার্ড কন্টেইনারের প্যাডিং (p-6), ব্যাকগ্রাউন্ড (bg-gray-50), গোল কোণ (rounded-2xl) ও শ্যাডো ডিক্লেয়ারেশন সব লজিক্যালি শতভাগ সঠিক হয়েছে।",
        en: "Combining paddings, border strokes, and subtle gray backgrounds shapes clean components designs.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "ইউটিলিটি-ফার্স্ট সিএসএস (जैसे Tailwind) এবং প্রথাগত বিইএম (BEM) সিএসএস আর্কিটেকচারের মধ্যে মূল পার্থক্য ও সুবিধা কী?",
        en: "Compare Tailwind's Utility-First approach with standard BEM CSS styling architectures.",
      },
      answer: {
        bn: "১. **বিইএম (BEM - Block Element Modifier)**: এটি কাস্টম সিএসএস ফাইলের উপর নির্ভরশীল। এখানে প্রতিটি উপাদানের জন্য বড় বড় ক্লাস নেম (যেমন: \`card__button--disabled\`) তৈরি করে ডিজাইন ম্যাপ করতে হয়। এর সমস্যা হলো সিএসএস ফাইল বড় হতে থাকে এবং ফাইল চেঞ্জের সময় আগের স্টাইল ভেঙে যাওয়ার ভয় থাকে।\n২. **টেইলউইন্ড (Utility-First)**: এটি কাস্টম ক্লাস নেম এড়ায়। টেইলউইন্ডের কোডবেস কখনোই আনলিমিটেড বড় হয় না, কারণ এটি একটি ফিক্সড প্রি-বিল্ট ক্লাস লাইব্রেরি। এর ফলে ডেভেলপমেন্ট উইন্ডো দ্রুত কাজ করে, স্টাইল সাইড-ইফেক্ট এড়ানো যায় এবং কোনো একটি কম্পোনেন্ট এডিট করলে অন্য কম্পোনেন্টের কোড ভাঙার কোনো ঝুঁকি থাকে না।",
        en: "1. **BEM (Block Element Modifier)**: Relies on custom class declarations in external stylesheets (e.g., \`card__button--active\`). CSS bundle sizes grow proportionally with the codebase, and refactoring styles carries high risks of breaking side-effects. \n2. **Tailwind (Utility-First)**: Eliminates custom stylesheet updates. Since class utilities are fixed and finite, compiled CSS asset sizes remain clean and optimized. Style changes are localized, isolating updates to the modified component markup only."
      },
    },
    {
      question: {
        bn: "টেইলউইন্ড কীভাবে তার ফাইনাল কম্পাইল করা সিএসএস ফাইলের সাইজ খুব ছোট (সাধারণত < ১০কেবি) রাখতে পারে?",
        en: "How does Tailwind optimize its production compiled CSS bundle sizes?",
      },
      answer: {
        bn: "টেইলউইন্ড তার প্রোডাকশন বিল্ড অপ্টিমাইজ করতে **Purge (বা Content Scanning)** মেকানিজম ব্যবহার করে। যখন আপনি \`npm run build\` কমান্ড রান করেন, টেইলউইন্ডের পোস্ট-সিএসএস ইঞ্জিন আপনার প্রজেক্টের সব এইচটিএমএল, রিঅ্যাক্ট ও নেক্সটজেএস ফাইল স্ক্যান করে। সে চেক করে আপনি আসলে কোন কোন স্পেসিফিক ক্লাসগুলো (যেমন: bg-blue-500, p-4) কোডে লিখেছেন। কেবল সেই ক্লাসগুলোর সিএসএস জেনারেট করা হয় এবং বাকি হাজার হাজার অব্যবহৃত ক্লাস সম্পূর্ণ বাদ দিয়ে ফাইল কম্প্রেস করা হয়। এর ফলে বিশাল ফ্রেমওয়ার্ক হওয়া সত্ত্বেও ফাইনাল প্রজেক্টে মাত্র ২-৮ কেবির সিএসএস ফাইল আউটপুট হয় যা পেজ লোড স্পিড চরম বাড়িয়ে দেয়।",
        en: "Tailwind utilizes content scanning compiler checks. During production builds, its engine scans source maps to detect the exact class tokens used in codebases. Unused classes are omitted, generating a minimized, production-ready stylesheet bundle. E.g., a massive utility framework is purged down to a 5KB asset, significantly enhancing page speeds."
      },
    },
  ],
};
