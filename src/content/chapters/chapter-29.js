export const chapter29Content = {
  id: "chapter-29",
  number: 29,
  title: {
    bn: "অধ্যায় ২৯: ইউআই কম্পোনেন্ট সিস্টেম — কার্ড ডিজাইন মাস্টারক্লাস",
    en: "Chapter 29: UI Component System (Card Design Masterclass)",
  },
  description: {
    bn: "ইউআই কম্পোনেন্ট সিস্টেম কী, আধুনিক ওয়েব অ্যাপ্লিকেশনে কার্ডের ভূমিকা, হোভার ইফেক্ট ও রেসপন্সিভ গ্রিড লেআউট সিস্টেম গড়ার প্রফেশনাল গাইড।",
    en: "Master UI component systems, the role of card containers, hover micro-animations, and responsive CSS grid layout configurations.",
  },
  difficulty: "intermediate",
  readingTime: 12,
  objectives: [
    {
      bn: "ইউআই কম্পোনেন্ট সিস্টেমের ধারণা এবং এর বাস্তব প্রয়োজনীয়তা ব্যাখ্যা করা।",
      en: "Explain the concept of a UI component system and its practical necessity.",
    },
    {
      bn: "একটি কার্ড কম্পোনেন্টের স্ট্যান্ডার্ড ভিজ্যুয়াল কাঠামো ও বিভিন্ন অংশ বিশ্লেষণ করা।",
      en: "Deconstruct the visual anatomy of a standard card component container.",
    },
    {
      bn: "Tailwind CSS ব্যবহার করে কার্ডে হোভার মাইক্রো-অ্যানিমেশন এবং ট্রানজিশন যোগ করা।",
      en: "Implement interactive hover micro-animations using Tailwind transition utility classes.",
    },
    {
      bn: "মোবাইল-ফার্স্ট রেসপন্সিভ সিএসএস গ্রিড লেআউটে কার্ডগুলো চমৎকারভাবে সাজানো।",
      en: "Arrange component grids using mobile-first responsive CSS grid layout systems.",
    },
  ],
  sections: [
    {
      id: "intro-ui-system",
      title: {
        bn: "১. ইউআই কম্পোনেন্ট সিস্টেম ও কার্ডের ধারণা (UI Component System & The Card)",
        en: "1. UI Component System & The Card",
      },
      content: {
        bn: `## What is a UI Component System? (ইউআই কম্পোনেন্ট সিস্টেম কী?)
আমরা যখন কোনো প্রফেশনাল ওয়েবসাইট বা SaaS অ্যাপ্লিকেশন ডিজাইন করি, তখন প্রতিটি পেজের বাটন বা কার্ড যেন একই সাইজ, শ্যাডো এবং ফন্ট কালার মেনে চলে তা নিশ্চিত করা প্রয়োজন। 

**UI Component System** হলো এমন একটি ডিজাইন সিস্টেম বা পুনর্ব্যবহারযোগ্য ব্লকের সেট, যার মাধ্যমে সম্পূর্ণ ওয়েবসাইটের স্টাইল ও কাঠামো একটি নির্দিষ্ট রুলবুক অনুযায়ী পরিচালিত হয়।
*   **প্রধান উপাদানসমূহ (Core Atoms)**:
    - **Buttons**: সাইজ ও ভ্যারিয়েন্ট সমন্বিত বোতাম।
    - **Cards**: তথ্য ধারণকারী কন্টেইনার।
    - **Modals & Dialogs**: পপআপ স্ক্রিনসমূহ।
    - **Inputs**: টেক্সট ও সিলেক্ট ফর্ম ইনপুট বক্স।

---

## What is a Card? (কার্ড কী?)
রিঅ্যাক্ট এবং আধুনিক ওয়েব ইউআই ডিজাইনের সবচেয়ে জনপ্রিয় প্যাটার্ন হলো **Card (কার্ড)**। 
*   **সহজ সংজ্ঞা**: কার্ড হলো একটি ভিজ্যুয়াল কন্টেইনার (Visual Box) যা একটি সিঙ্গেল টপিক বা অবজেক্টের যাবতীয় তথ্য (যেমন: ফটো, হেডিং, বডি এবং অ্যাকশন বাটন) সুন্দরভাবে একটি আবদ্ধ ফ্রেমে প্রদর্শন করে।
*   **ব্যবহারের ক্ষেত্র**: ই-কমার্স প্রোডাক্ট গ্রিড, ব্লগ পোস্ট থাম্বনেইল, ড্যাশবোর্ড স্ট্যাটাস কাউন্টার এবং ইউজার প্রোফাইল উইজেট।`,
        en: `## What is a UI Component System?
In professional product design, consistency is key. A user should not see four different button paddings or distinct border-radius values on different pages.

A **UI Component System** represents a standardized set of reusable interface primitives that enforce design consistency across an entire web application.
*   **Core Atoms**:
    - **Buttons**: Interface action elements.
    - **Cards**: Contextual layout containers.
    - **Modals**: Focus dialog windows.
    - **Inputs**: Form collection boxes.

---

## What is a Card?
The **Card** is the building block of modern web layouts.
*   **Definition**: A content container that groups related information (media assets, headlines, description text, action buttons) into a single visual module.
*   **Use Cases**: Product list grids, articles index listings, metric stats dashboard blocks, and profile widgets.`,
      },
    },
    {
      id: "card-structure-tailwind",
      title: {
        bn: "২. কার্ডের কাঠামো ও হোভার মাইক্রো-অ্যানিমেশন (Card Structure & Hover Animations)",
        en: "2. Card Structure & Hover Animations",
      },
      content: {
        bn: `## Typical Card Structure (কার্ডের স্ট্যান্ডার্ড কাঠামো)
একটি আদর্শ কার্ড মূলত ৪টি অংশে বিভক্ত থাকে:
1.  **Media Block (মিডিয়া)**: ইমেজ বা ব্যানার যা সবার আগে নজর কাড়ে।
2.  **Title (শিরোনাম)**: বিষয়বস্তুর মূল হেডিং বা নাম।
3.  **Description (বর্ণনা)**: সংক্ষিপ্ত বিবরণ বা সামারি টেক্সট।
4.  **Action Buttons (অ্যাকশন বোতাম)**: কার্ডের ভেতরে থাকা বাটন বা রিড-মোর লিংক।

---

## Hover Micro-animations (হোভার অ্যানিমেশন)
ইউজার ইন্টারফেসকে সজীব ও ইন্টারেক্টিভ করে তুলতে কার্ডে হালকা মাইক্রো-অ্যানিমেশন যোগ করা প্রফেশনাল ডিজাইনারদের অন্যতম সিক্রেট। ব্যবহারকারী যখন কার্ডের ওপর মাউস আনবেন, তখন কার্ডের পজিশন বা শ্যাডো চেঞ্জ হওয়া উচিত।

### Tailwind Hover Classes (টেইলউইন্ড হোভার এফেক্টস)
*   **smooth transition**: অ্যানিমেশন যেন মসৃণ হয় তার জন্য \`transition-all duration-300\` যোগ করতে হবে।
*   **elevation change**: হোভার করলে শ্যাডো বাড়াতে \`hover:shadow-lg\` ব্যবহার করা হয়।
*   **scale shift**: কার্ডটি হালকা ওপরে ওঠাতে বা বড় করতে \`hover:-translate-y-1\` বা \`hover:scale-[1.02]\` ব্যবহার করা হয়।`,
        en: `## Typical Card Structure
A standard card container is deconstructed into four layout regions:
1.  **Media Block**: An visual asset (Image, SVG, Icon) that anchors user attention.
2.  **Title**: The main card bold header.
3.  **Description**: Concise summary text describing the object.
4.  **Action Area**: Primary buttons, links, or togglers to complete workflows.

---

## Hover Micro-interactions
Micro-interactions guide user interactions. An interactive card should respond to mouse focus with sleek transition loops.

### Tailwind Hover Configurations:
*   **Smooth transitions**: Attach \`transition-all duration-300 ease-in-out\` to prevent choppy frame shifts.
*   **Elevation shift**: Transition shadows on hover using \`hover:shadow-md\`.
*   **Translate scale**: Shift card offsets vertically using \`hover:-translate-y-1 hover:scale-[1.01]\`.`,
      },
    },
    {
      id: "twelve-card-designs",
      title: {
        bn: "৩. ১২টি প্রিমিয়াম কার্ড ডিজাইন চিটশিট (12 Card Designs Cheatsheet)",
        en: "3. 12 Card Designs Cheatsheet",
      },
      content: {
        bn: `## 12 Beautiful Card Designs (১২টি প্রিমিয়াম কার্ড)
আধুনিক প্রডাকশন রেডি অ্যাপে ১২টি প্রধান ক্যাটাগরির কার্ড ব্যবহৃত হয়:
1.  **Product Card**: প্রোডাক্ট ইমেজ, টাইটেল, স্টার রেটিং ও 'Add to Cart' বাটন সমন্বিত কার্ড। (হোভার: ওপরে উঠবে, শ্যাডো বাড়বে)।
2.  **Blog Card**: ইমেজের সাথে ক্যাটাগরি ট্যাগ, পাবলিশ ডেট এবং সংক্ষিপ্ত সামারি টেক্সট। (হোভার: ইমেজ হালকা জুম হবে, টেক্সট কালার চেঞ্জ হবে)।
3.  **Profile Card**: গোল ছবি বা এভাটার, ইউজার নেম, সোশ্যাল ফলোয়ারের স্ট্যাটিস্টিক্স কাউন্টার ও অ্যাকশন ফলো বোতাম। (হোভার: গ্রাডিয়েন্ট শিফট হবে)।
4.  **Team Member Card**: টিম মেম্বারের ছবি এবং সোশ্যাল আইকন যা হোভার করলে চমৎকারভাবে ডানদিক দিয়ে স্লাইড হয়ে ভেতরে আসবে।
5.  **Pricing Card**: প্রজেক্ট প্ল্যান নেম, প্রাইস ভ্যালু ও চেকলিস্ট আইটেম। (হোভার: বর্ডার গ্লো করবে ও পালস ইফেক্ট তৈরি হবে)।
6.  **Feature Card**: বৃত্তাকার আইকন ও সংক্ষিপ্ত বিবরণী। (হোভার: আইকন বাউন্স বা লাফাবে)।
7.  **Dashboard Stat Card**: বড় সাইজের মেট্রিকে সংখ্যা এবং নিচে ট্রেন্ড গ্রাফের ওয়েভ ডিজাইন। (হোভার: শ্যাডো বৃদ্ধি পাবে)।
8.  **NFT Card**: ফিউচারিস্টিক ইমেজ এবং ক্রিপ্টো প্রাইসিং ডিটেইলস সহ ডার্ক থিম লেআউট। (হোভার: গ্লো ইফেক্ট)।
9.  **Course Card**: কোর্স ব্যানার, টাইটেল, প্রাইস ও 'Enroll Now' বাটন।
10. **Glassmorphic Card**: আবহাওয়া বা ওয়েদারের জন্য ফ্রস্টেড সেমি-ট্রান্সপারেন্ট গ্লাস থিম উইজেট। (হোভার: ব্যাকড্রপ ব্লার বৃদ্ধি পাবে)।
11. **Dark Card**: কালো বা ডার্ক থিমের গেজেট কন্টেইনার। (হোভার: ডিভাইস ইমেজটি সামান্য রোটেট করবে)।
12. **Creative Card**: কোটেশন মার্ক সহ মিনিমাল ক্রিয়েটিভ আর্ট লেআউট। (হোভার: পেছনের আর্ট শেপটি স্থান পরিবর্তন করবে)।

---

## Common Hover Classes Used (হোভার চিটশিট)
*   \`hover:-translate-y-2\`: কার্ডটিকে ২ পিক্সেল ওপরে তোলে।
*   \`hover:shadow-xl\`: কার্ডের নিচে বাস্তব শ্যাডো তৈরি করে।
*   \`group-hover:scale-105\`: প্যারেন্ট কার্ডে মাউস নিলে ভেতরের ইমেজ জুম ইন করে।
*   \`hover:bg-gradient-to-r\`: হোভার করলে ব্যাকগ্রাউন্ড গ্রাডিয়েন্ট পরিবর্তন করে।`,
        en: `## 12 Beautiful Card Designs
Production SaaS websites utilize 12 fundamental card variations to organize data:
1.  **Product Card**: Image, category tags, rating stars, and primary action buttons.
2.  **Blog Card**: Cover picture, travel badge, publish dates, and summary text.
3.  **Profile Card**: Central avatar image, statistics blocks, and follow action button.
4.  **Team Member Card**: Photo, job designation, and floating social media hover icons.
5.  **Pricing Card**: Dynamic plan tag, large pricing labels, and features checkmarks list.
6.  **Feature Card**: Big center icons, brief benefit list, and learn-more link triggers.
7.  **Dashboard Stat Card**: Metrics tally, percentage indicator, and SVG wave sparkline charts.
8.  **NFT Card**: Heavy graphic container, ETH labels, and bidding buttons.
9.  **Course Card**: Colored banner top, lesson details, price tags, and buy actions.
10. **Glassmorphic Card**: Transparent container, blurred overlay, and weather info values.
11. **Dark Card**: Deep contrast background, headphones visual, and animated buy tags.
12. **Creative Card**: Abstract floating shape background layouts.`,
      },
    },
    {
      id: "saas-ui-design-thinking",
      title: {
        bn: "৪. রিয়েল SaaS ইউআই ও ডিজাইন প্রিন্সিপালস (Real SaaS UI & Design Principles)",
        en: "4. Real SaaS UI & Design Principles",
      },
      content: {
        bn: `## Core UI Design Principles (ডিজাইন প্রিন্সিপালস)
একটি কার্ড সিস্টেম ডিজাইন করার সময় প্রফেশনাল ডেভেলপাররা নিচের ৩টি নিয়ম সর্বদা মেনে চলেন:
*   **Visual Hierarchy (ভিজ্যুয়াল হায়ারার্কি)**: কার্ডের টাইটেলটি বড় ও বোল্ড হবে (\`text-lg font-bold\`), কিন্তু ভেতরের বর্ণনা টেক্সট হবে ছোট ও হালকা কালারের (\`text-sm text-slate-500\`)। এতে ইউজারের চোখে রিড করার সিকোয়েন্স পরিষ্কার থাকে।
*   **Spacing Consistency (স্পেসিং সামঞ্জস্য)**: কার্ডের ভেতরের প্যাডিং যেন সব জায়গায় সমান থাকে। একই সাথে ওপরে ৪ প্যাডিং (\`p-4\`) এবং পাশে ৮ প্যাডিং (\`px-8\`) করার মতো ডিজাইন অসঙ্গতি করা যাবে না।
*   **Color Simplicity (কালার লিমিটেশন)**: কার্ডের ব্যাকগ্রাউন্ড সবসময় সাধারণ সাদা (\`bg-white\`) বা একদম ডার্ক গ্রে রাখুন। অতিরিক্ত রংচঙে ব্যাকগ্রাউন্ড টেক্সট পড়ার রিডাবিলিটি নষ্ট করে।`,
        en: `## Core UI Design Principles
*   **Visual Hierarchy**: Enforce contrast. Titles must be bold and large (\`text-lg font-bold text-slate-800\`), while description text should be smaller and muted (\`text-sm text-slate-500\`).
*   **Spacing Consistency**: Never mix unrelated paddings. Keep card internal content gutters symmetric using standard tailwind paddings like \`p-5\`.
*   **Clean Contrast**: Cards should have clean solid backgrounds (\`bg-white\` or sleek dark modes) with sharp borders. Avoid over-saturated, colorful backgrounds that block readability.`,
      },
    },
    {
      id: "mistakes-analogy",
      title: {
        bn: "৫. শপের তাকের রূপক ও ৬টি কার্ড বিল্ড সলিউশন (6 Cards Build & Metaphor)",
        en: "5. Metaphor & 6 Cards Build Solution",
      },
      content: {
        bn: `## The Shop Shelf Analogy (শপের তাকের রূপক)
রিঅ্যাক্ট কার্ড গ্রিড সিস্টেমকে একটি সুপারশপের সাজানো প্রোডাক্ট ডিসপ্লে শেলফের সাথে মিলিয়ে নিন:
*   **প্রোডাক্ট বক্স (The Card)**: সাবান বা শ্যাম্পুর প্যাকেট (আমাদের \`ProductCard\`)। এর গায়ে স্পষ্ট ছবি, দাম ও ব্র্যান্ডিং লেখা থাকে।
*   **সুপারশপের তাক (The Grid)**: সুনির্দিষ্ট মাপে কাঠের তৈরি সেলফ বা তাক (আমাদের \`CSS Grid\`)। তাকগুলোর ফাকা জায়গা সমান থাকে (gap) এবং প্রতিটি বক্স সুন্দরভাবে লাইনে দাঁড়িয়ে থাকে।

---

## 6 Premium Cards Build Solution (৬টি প্রিমিয়াম কার্ডের লাইভ কোড)
নিচের এডিটর কোডবক্সে ৬টি ভিন্ন ক্যাটাগরির রেসপন্সিভ কার্ডের রিয়েল টেইলউইন্ড ডিজাইন ইমপ্লিমেন্ট করা হয়েছে। কোডটি ভালো করে লক্ষ্য করুন।`,
        en: `## The Shop Shelf Metaphor
*   **Product Box (The Card)**: A shampoo container showing a clear thumbnail image, price tag, brand header, and quick action checkout button.
*   **Display Shelf (The Grid)**: The wooden shelving layout partitioning packages into strict grid rows.

---

## 6 Premium Cards Build Solution
The React code below implements 6 distinct modular card primitives inside a fully responsive CSS grid layout, including hover interactions, absolute positioning overlaps, and custom transitions.`,
      },
      codeBlock: {
        fileName: "CardsDashboard.jsx",
        language: "jsx",
        code: `import React from 'react';

// ১. PRODUCT CARD COMPONENT
export function ProductCard() {
  return (
    <div className="group w-full max-w-xs overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative flex h-48 items-center justify-center rounded-xl bg-slate-50 p-4">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
          alt="Nike Shoe"
          className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <button className="absolute right-3 top-3 rounded-full bg-white p-2 text-slate-400 shadow-sm hover:text-rose-500">
          ❤️
        </button>
      </div>
      <div className="mt-4">
        <span className="text-xs font-semibold text-slate-400">Men's Shoes</span>
        <h3 className="mt-1 text-sm font-bold text-slate-800">Nike Air Max 270</h3>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-black text-slate-800">$149.99</span>
          <button className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-indigo-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// ২. BLOG CARD COMPONENT
export function BlogCard() {
  return (
    <div className="group w-full max-w-xs overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400"
          alt="Switzerland"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-md bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white">
          Travel
        </span>
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-slate-400">May 20, 2026</span>
        <h3 className="mt-2 text-md font-bold leading-snug text-slate-800 group-hover:text-indigo-600">
          Exploring the Beautiful Nature of Switzerland
        </h3>
        <button className="mt-4 flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline">
          Read More <span>→</span>
        </button>
      </div>
    </div>
  );
}

// ৩. PROFILE CARD COMPONENT
export function ProfileCard() {
  return (
    <div className="group w-full max-w-xs overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-indigo-100 p-1">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
          alt="Avatar"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-md font-bold text-slate-800">John Doe</h3>
      <span className="text-xs font-semibold text-slate-400">Frontend Developer</span>
      <div className="my-6 grid grid-cols-3 gap-2 border-y border-slate-50 py-3 text-center">
        <div>
          <p className="text-sm font-black text-slate-800">120</p>
          <span className="text-[10px] text-slate-400 font-bold uppercase">Posts</span>
        </div>
        <div>
          <p className="text-sm font-black text-slate-800">2.5K</p>
          <span className="text-[10px] text-slate-400 font-bold uppercase">Followers</span>
        </div>
        <div>
          <p className="text-sm font-black text-slate-800">180</p>
          <span className="text-[10px] text-slate-400 font-bold uppercase">Following</span>
        </div>
      </div>
      <button className="w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white hover:bg-indigo-700">
        Follow
      </button>
    </div>
  );
}

// ৪. STAT CARD COMPONENT
export function StatCard() {
  return (
    <div className="group w-full max-w-xs overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Revenue</span>
          <h3 className="mt-1 text-2xl font-black text-slate-800">$48,256</h3>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 transition-all duration-300 group-hover:scale-110">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
          </svg>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-605">
        <span>↗ 12.5%</span>
        <span className="text-slate-400 font-medium">from last month</span>
      </div>
    </div>
  );
}

// ৫. NFT CARD COMPONENT
export function NftCard() {
  return (
    <div className="group w-full max-w-xs overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="relative h-48 overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400"
          alt="NFT Robot"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 text-white">
        <h3 className="text-md font-bold tracking-tight">Cyber Punk #7890</h3>
        <div className="mt-3 flex items-center justify-between border-t border-slate-900 pt-3">
          <div>
            <span className="block text-[10px] text-slate-500 font-semibold uppercase">Price</span>
            <p className="text-xs font-bold text-purple-400">💎 1.25 ETH</p>
          </div>
          <button className="rounded-lg bg-purple-650 px-3.5 py-1.5 text-[10px] font-bold hover:bg-purple-700">
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
}

// ৬. GLASS WEATHER CARD COMPONENT
export function GlassCard() {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-amber-500 to-rose-500 p-6 text-white shadow-xl">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md transition-all duration-500 hover:backdrop-blur-lg" />
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">Sunny Day</h4>
            <h3 className="text-2xl font-bold mt-1">Dhaka</h3>
          </div>
          <span className="text-3xl">☀️</span>
        </div>
        <div className="mt-8 text-center">
          <p className="text-5xl font-black">24°C</p>
          <span className="text-xs font-semibold text-white/80">Sunny Sky</span>
        </div>
      </div>
    </div>
  );
}
`,
        explanations: [
          {
            line: 8,
            text: {
              bn: "group-hover:scale-110 প্যারেন্ট কার্ডে মাউস নিলে ভেতরের প্রোডাক্ট ছবিটিকে আলতো করে জুম ইন করবে।",
              en: "Scales the target product image smoothly when the cursor triggers card boundaries hover states.",
            },
          },
          {
            line: 41,
            text: {
              bn: "group-hover:text-indigo-600 মাউস এন্টার করলে ব্লগের টাইটেলের রঙ পরিবর্তন করে ব্রান্ড কালার ম্যাপ করে দেয়।",
              en: "Applies hover text color states dynamically, increasing visibility on mouse focus.",
            },
          },
          {
            line: 125,
            text: {
              bn: "backdrop-blur-md সিএসএস ব্লার ফিল্টার ইমপ্লিমেন্ট করে সেমি-ট্রান্সপারেন্ট গ্লাস লুক ইফেক্ট তৈরি করে।",
              en: "Enforces frosted glass styling overlays using standard backdrop blur properties.",
            },
          },
        ],
      },
    },
    {
      id: "practice-ui-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন সম্পন্ন করুন। এটি আপনার ডিজাইন ও থিংকিং লেভেলকে এক ধাপ এগিয়ে দেবে।`,
        en: `## Reflection & Lab Tasks
Solidify your component styling systems configurations before starting the final full-stack website project building chapters.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "কার্ড ডিজাইন সিস্টেম মূলত তথ্যকে ছোট ছোট ব্লকে বিভক্ত করে স্ক্যান করার জন্য ইউজারের রিডাবিলিটি ফাস্ট করে।",
          en: "Cards organize interfaces into scannable visual units, reducing user cognitive overhead.",
        },
        whyWorks: {
          bn: "টেইলউইন্ডের রিলেটিভ ভ্যালু ও ফ্লেক্স কন্টেইনার ডাইনামিকালি টেক্সট হাইট ম্যাচ করতে ব্রাউজারে রেন্ডারিং হেল্প করে।",
          en: "Tailwind's utility engine combines compiler speed with flex wrappers to maintain spacing rules.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা সব কার্ডের কোণ গোল করার কার্ভ (\`rounded-2xl\`) এবং বর্ডার সিস্টেম গ্লোবাল কন্সট্যান্ট ফাইলে ডিফাইন করে রাখেন।",
          en: "Professionals lock design tokens like corners curve values in configuration files for consistent brand designs.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় ডিজাইন ভুল হলো টেক্সট বেশি হলে কার্ডের আকার আঁকাবাঁকা বা উঁচু-নিচু হয়ে যাওয়া। এটি এড়াতে ফ্লেক্স বা গ্রিড হাইট ইউজ করুন।",
          en: "A common mistake is card heights misalignment. Set flex heights to keep columns aligned.",
        },
        debugging: {
          bn: "হোভার অ্যানিমেশন চেক করার সময় ব্রাউজার ইন্সপেক্টরে 'hover state' একটিভ করে সিএসএস রুলস নিখুঁত করুন।",
          en: "Toggle active hover states within chrome devtools inspectors to preview transitions frame-by-frame.",
        },
        performance: {
          bn: "ছবি অপ্টিমাইজড সাইজ ব্যবহার করতে হবে যাতে ড্যাশবোর্ডে ৫০টি কার্ড একবারে লোড হলেও সাইট স্লো না হয়।",
          en: "Always load optimized WebP or compressed images templates to ensure massive grid lists load instantly.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "card-q1",
      question: {
        bn: "আধুনিক ওয়েব ডিজাইনে কার্ড (Card) কম্পোনেন্টের মূল ভূমিকা কী?",
        en: "What is the primary role of a Card component in modern web design?",
      },
      options: [
        {
          bn: "সার্ভারে ফাইল আপলোড করা",
          en: "Uploading files to server layers",
        },
        {
          bn: "নির্দিষ্ট বিষয়ের সম্পর্কিত তথ্য একটি সুবিন্যস্ত ভিজ্যুয়াল ব্লকে সাজানো",
          en: "Grouping related topic information in an organized visual container block",
        },
        {
          bn: "ডাটাবেজ ক্যোয়ারী রান করানো",
          en: "Running database query structures",
        },
        {
          bn: "ব্রাউজার উইন্ডো রিলোড করা",
          en: "Reloading active browser windows",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কার্ড হলো এমন একটি ভিজ্যুয়াল কন্টেইনার যা থাম্বনেইল, টেক্সট ও বাটনের ডেটা একসাথে মডিউলার উপায়ে স্ক্রিনে প্রেজেন্ট করে।",
        en: "Cards wrap related items into single components for clear readability.",
      },
    },
    {
      id: "card-q2",
      question: {
        bn: "টেইলউইন্ড সিএসএস-এ ট্রানজিশন এবং হোভার অ্যানিমেশন দেওয়ার জন্য সঠিক সিনট্যাক্স কোনটি?",
        en: "Which Tailwind classes provide smooth hover translation animation?",
      },
      options: [
        {
          bn: "transition-all duration-300 hover:-translate-y-1",
          en: "transition-all duration-300 hover:-translate-y-1",
        },
        {
          bn: "hover:scale-normal transition-none",
          en: "hover:scale-normal transition-none",
        },
        { bn: "animate-ping hover:blur-sm", en: "animate-ping hover:blur-sm" },
        {
          bn: "transition-instant border-none",
          en: "transition-instant border-none",
        },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "transition-all duration-300 অ্যানিমেশনকে স্মুথ করে এবং hover:-translate-y-1 হোভার করলে কার্ডকে ১ পিক্সেল ওপরে তোলে।",
        en: "Combining transition duration and transform translate classes produces smooth hover elevations.",
      },
    },
    {
      id: "card-q3",
      question: {
        bn: "ট্যাবলেট এবং লার্জ স্ক্রিনে যথাক্রমে ২টি এবং ৩টি করে কার্ডের কলাম দেখানোর জন্য সঠিক গ্রিড সিনট্যাক্স কোনটি?",
        en: "What is the correct responsive grid class setting 2 columns on tablet and 3 columns on desktop?",
      },
      options: [
        {
          bn: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          en: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        },
        {
          bn: "flex flex-wrap md:flex-col lg:flex-row",
          en: "flex flex-wrap md:flex-col lg:flex-row",
        },
        { bn: "grid-cols-3 gap-0", en: "grid-cols-3 gap-0" },
        { bn: "block xl:grid-cols-4", en: "block xl:grid-cols-4" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "grid-cols-1 মোবাইলে ১টি, md:grid-cols-2 ট্যাবলেটে ২টি এবং lg:grid-cols-3 লার্জ ডেক্সটপ স্ক্রিনে ৩টি কলাম সেট করে।",
        en: "Declaring grid columns limits sets responsive responsive breaks maps automatically.",
      },
    },
    {
      id: "card-q4",
      question: {
        bn: "প্যারেন্ট কার্ডে হোভার ট্র্রিগার ঘটিয়ে কোনো নেস্টেড চাইল্ডের (যেমন ভেতরের টেক্সট বা আইকন) এনিমেশন স্টাইল পরিবর্তন করতে আমরা কোন টেইলউইন্ড গ্রুপ প্রিফিক্স ব্যবহার করি?",
        en: "Which Tailwind prefix is used on nested children to trigger transition animations when their parent card is hovered?",
      },
      options: [
        { bn: "hover:focus:", en: "hover:focus:" },
        { bn: "group-hover:", en: "group-hover:" },
        { bn: "parent-hover:", en: "parent-hover:" },
        { bn: "child:hover:", en: "child:hover:" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "প্যারেন্টে group এবং চাইল্ডে group-hover: ব্যবহার করলে কার্ডের যেকোনো স্থানে মাউস নেওয়া মাত্রই চাইল্ড অবজেক্টে একসাথে হোভার এনিমেশন কাজ করে।",
        en: "The group parent class coordinate with group-hover child classes to activate nested transitions.",
      },
    },
    {
      id: "card-q5",
      question: {
        bn: "গ্লাস মরফিজম (Glassmorphism) উইজেট তৈরি করার সময় গ্লাসের ফ্রস্টেড ঝাপসা লুক দেওয়ার জন্য কোন ক্লাস জুটি ব্যবহার করা হয়?",
        en: "Which Tailwind utility pair produces frosted blur overlays in glassmorphic card designs?",
      },
      options: [
        { bn: "bg-slate-900 border-none", en: "bg-slate-900 border-none" },
        {
          bn: "bg-white/10 backdrop-blur-md",
          en: "bg-white/10 backdrop-blur-md",
        },
        { bn: "opacity-50 ring-2", en: "opacity-50 ring-2" },
        { bn: "bg-transparent scale-110", en: "bg-transparent scale-110" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "bg-white/10 ব্যাকগ্রাউন্ড সেমি-ট্রান্সপারেন্ট করে এবং backdrop-blur-md পেছনের এলিমেন্টকে ব্লার করে কাঁচের এফেক্ট দেয়।",
        en: "Semi-transparent backgrounds paired with backdrop-blur classes produces clean visual transparency values.",
      },
    },
  ],
  practice: [
    {
      bn: "১. কার্ড ডিজাইনে 'group' এবং 'group-hover' ব্যবহারের ৩টি বাস্তব প্রোডাকশন সুবিধা লিখুন।",
      en: "1. Detail three benefits of utilizing group and group-hover states in reusable card UI elements.",
    },
    {
      bn: "২. কেন ফিক্সড উচ্চতা (fixed height) ব্যবহার করার চেয়ে ফ্লেক্সিবল স্পেসিং ও প্যাডিং দেওয়া কার্ড ডিজাইনে বেশি নিরাপদ?",
      en: "2. Argue why dynamic flexible wrapping height is superior to hardcoded fixed heights in responsive cards.",
    },
    {
      bn: "৩. গ্লাস মরফিজম ইউআই ডিজাইনের ক্ষেত্রে টেক্সটের কালার কন্ট্রাস্ট কীভাবে বজায় রাখতে হয়?",
      en: "3. Outline best practices for maintaining readable text contrast on top of blurred glassmorphic cards.",
    },
  ],
  assignment: {
    title: {
      bn: "৬টি প্রিমিয়াম কার্ড গ্রিড ও হোভার অ্যানিমেশন ড্যাশবোর্ড",
      en: "Multi-Card Interactive Dashboard Grid System",
    },
    description: {
      bn: "বিজ্ঞানপ্রো একাডেমির ডিজাইন লাইব্রেরির জন্য একটি রেসপন্সিভ কার্ড ড্যাশবোর্ড পেজ তৈরি করুন। ড্যাশবোর্ডে পাশাপাশি ৩টি কলামের গ্রিডে (মোবাইলে ১ কলাম) ১টি প্রোডাক্ট কার্ড (ইমেজ ও বাটন হোভার সহ), ১টি সোশ্যাল প্রোফাইল কার্ড (ফলো বাটন সহ), ১টি ড্যাশবোর্ড মেট্রিকেস কার্ড (ট্রেন্ড আইকন সহ), এবং ১টি গ্লাস ওয়েদার কার্ড থাকবে যা মাউস ফোকাসে মসৃণভাবে অ্যানিমেট হবে।",
      en: "Construct a modular React dashboard grid. Arrange at least four distinct card variations designed in this chapter (Product Card, Profile Card, Stat Card, Glass Weather Card) inside a responsive CSS grid layout system that scales from 1 column on mobile to 3 columns on desktop. Ensure all cards activate clean hover micro-animations.",
    },
    starterCode: `// Multi-Card Dashboard Grid
import React from 'react';

// কাস্টম কার্ড কম্পোনেন্টস গুলো আলাদা ডিক্লেয়ার করুন

export default function DashboardGrid() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">UI Components Library</h2>
      
      {/* রেসপন্সিভ গ্রিড তৈরি করে কার্ডগুলো অ্যাসেম্বল করুন */}
    </div>
  );
}
`,
    solution: {
      code: `// Multi-Card Dashboard Grid Solution
import React from 'react';

// ১. PRODUCT CARD
export function ProductCard() {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between">
      <div className="relative h-44 bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" 
          className="h-32 object-contain group-hover:scale-110 transition-transform duration-500"
          alt="Shoe"
        />
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-bold text-slate-800">Nike Air Max 270</h4>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-black">$149.99</span>
          <button className="px-3 py-1.5 bg-slate-900 hover:bg-indigo-650 text-white rounded-lg text-xs font-bold transition-all">Add</button>
        </div>
      </div>
    </div>
  );
}

// ২. PROFILE CARD
export function ProfileCard() {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img 
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" 
        className="w-16 h-16 rounded-full mx-auto border-2 border-indigo-150 p-0.5"
        alt="User"
      />
      <h4 className="mt-3 font-bold text-slate-800 text-sm">John Doe</h4>
      <p className="text-[10px] text-slate-400">Developer</p>
      <button className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all">Follow</button>
    </div>
  );
}

// ৩. DASHBOARD STAT CARD
export function StatCard() {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:shadow-lg flex justify-between items-center">
      <div>
        <span className="text-[10px] font-bold text-slate-400 uppercase">Sales</span>
        <h3 className="text-xl font-black text-slate-800 mt-0.5">$48,256</h3>
      </div>
      <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform">
        📈
      </div>
    </div>
  );
}

// ৪. GLASS WEATHER CARD
export function GlassCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-amber-500 to-rose-500 p-5 text-white shadow-lg h-full min-h-[140px] flex flex-col justify-between">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md hover:backdrop-blur-lg transition-all" />
      <div className="relative z-10 flex flex-col justify-between h-full w-full">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold">Dhaka</span>
          <span>☀️</span>
        </div>
        <p className="text-3xl font-black mt-4">24°C</p>
      </div>
    </div>
  );
}

// ৫. MAIN DASHBOARD GRID ASSEMBLY
export default function DashboardGrid() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-slate-800 mb-8">UI Components Library</h2>
        
        {/* Responsive Layout Grid columns mapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard />
          <ProfileCard />
          <StatCard />
          <div className="lg:col-span-1">
            <GlassCard />
          </div>
        </div>
      </div>
    </div>
  );
}`,
      explanation: {
        bn: "অসাধারণ কম্পোনেন্ট লাইব্রেরি সলিউশন! পৃথক ডিকাপল্ড কার্ড এলিমেন্টস এবং রেসপন্সিভ গ্রিড ম্যাপিং ড্যাশবোর্ড লেআউটকে অত্যন্ত পরিচ্ছন্ন ও প্রফেশনাল করেছে।",
        en: "Excellent components library solution! Separating visual cards into independent blocks and rendering them inside the layout grid handles design scaling cleanly.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "টেইলউইন্ড সিএসএস-এ 'group' এবং 'group-hover' কীভাবে কাজ করে এবং নেস্টেড সাব-কম্পোনেন্টে এনিমেশন ট্রিগার করার ক্ষেত্রে এটি কীভাবে কার্যকর?",
        en: "How do 'group' and 'group-hover' utilities operate in Tailwind CSS, and how do they help animate nested child elements?",
      },
      answer: {
        bn: "group এবং group-hover এর সমন্বিত কাজের নীতি নিচে ব্যাখ্যা করা হলো:\n১. প্যারেন্ট বাউন্ডারি (group): যখন আমরা কার্ডের মতো কোনো মেইন প্যারেন্ট ডম নোডে \`group\` ক্লাস যোগ করি, তখন টেইলউইন্ড কম্পাইলার সেই প্যারেন্ট বডির সীমানা নির্ধারণ করে।\n২. চাইল্ড ট্রিগার (group-hover): চাইল্ড বা ভেতরের কোনো উপাদানে (যেমন ইমেজে) যখন \`group-hover:scale-105\` লেখা হয়, তখন এর অর্থ দাঁড়ায়—ইউজার যখন প্যারেন্ট কার্ডের যেকোনো জায়গায় মাউস রাখবে, তখনই চাইল্ড এলিমেন্টটির এনিমেশন একযোগে সচল হবে। এর জন্য মাউস সরাসরি চাইল্ড অবজেক্টের ওপর নেওয়ার প্রয়োজন পড়ে না।\n৩. ব্যবহারের সুবিধা: এটি জাভাস্ক্রিপ্ট স্টেট লিসেনার ছাড়াই শুধু সিএসএস দিয়ে মাইক্রো-ইন্টারেকশন সচল রাখে যা ব্রাউজারের স্পিড ও কোড ক্লিননেস বজায় রাখে।",
        en: "Tailwind's group utility establishes visual event bounds:\n1. Parent Target: Attaching 'group' to parent layouts instructs compilers to track mouseenter/mouseleave cycles over the entire container.\n2. Child Triggers: Inner elements with prefixes like 'group-hover:scale-110' scale up when the cursor enters anywhere inside the parent group, rather than requiring direct hovering on the image tag.\n3. Native Efficiency: Eliminates rendering delays since state checking executes entirely via raw CSS selectors rather than JavaScript event wrappers.",
      },
    },
    {
      question: {
        bn: "একটি রেসপন্সিভ কার্ড গ্রিড লেআউট তৈরির সময় 'CSS Flexbox' এবং 'CSS Grid' এর মধ্যে প্রধান স্থাপত্যগত (Architectural) পার্থক্যগুলো কী কী এবং আমরা কোন সময়ে কোনটি ব্যবহার করবো?",
        en: "What are the architectural differences between CSS Flexbox and CSS Grid when constructing responsive card layouts, and how do we choose between them?",
      },
      answer: {
        bn: "Flexbox এবং Grid লেআউটের স্থাপত্যগত পার্থক্য নিচে দেওয়া হলো:\n১. CSS Flexbox (One-Dimensional): এটি শুধু একটি অক্ষে (হয় আনুভূমিক সারি অথবা উল্লম্ব কলাম) কাজ করে। ফ্লেক্সবক্সে কন্টেন্টের উইড অনুযায়ী কলামের আকার স্বয়ংক্রিয়ভাবে ছোট-বড় হয়। এটি নেভিগেশন বার, বাটন লিস্ট বা ডাইনামিক ট্যাগ ক্যাটাগরির জন্য উপযুক্ত যেখানে এলিমেন্টের সাইজ কন্টেন্ট ভিত্তিক।\n২. CSS Grid (Two-Dimensional): এটি একসাথে আনুভূমিক সারি (Rows) এবং উল্লম্ব কলাম (Columns) উভয় দিকে গ্রিড ম্যাপ ট্র্যাক করে। এতে আগে থেকেই কলামের সাইজ সুনির্দিষ্ট করে দেওয়া হয় এবং কন্টেন্ট যাই হোক না কেন, তা গ্রিডের নির্দিষ্ট ছকের ভেতরেই ফিট হয়ে বসে। এটি কার্ড গ্রিড, ড্যাশবোর্ড চার্ট প্যানেল বা ম্যাগাজিন লেআউটের জন্য অত্যন্ত কার্যকর।\n৩. সিদ্ধান্ত নীতি: যখন কার্ড গ্রিড তৈরি করবেন যেখানে পাশাপাশি ৩টি বা ৪টি কলাম সমান মাপে বসা প্রয়োজন এবং স্ক্রিন ছোট হলে কলাম সংখ্যা রেসপন্সিভলি কমা-বাড়া করবে, তখন সর্বদা 'CSS Grid' (\`grid grid-cols-1 md:grid-cols-2\` ইত্যাদি) ব্যবহার করা আবশ্যক।",
        en: "Grid and Flexbox manage coordinates differently:\n1. CSS Flexbox (1D): Align items along a single axis (either vertical or horizontal). The size of items is determined by their content volume. Ideal for headers, button menus, and tag lists.\n2. CSS Grid (2D): Manages columns and rows simultaneously. It establishes a rigid structural template where elements adhere to predefined lines. Ideal for card listings, dashboards, and media grids.\n3. Choosing Rule: Choose CSS Grid for card grids to enforce identical column widths and aligned rows regardless of description lengths. Choose Flexbox to align buttons or icons inside single card footprints.",
      },
    },
  ],
};
