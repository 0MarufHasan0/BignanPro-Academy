export const chapter28Content = {
  id: "chapter-28",
  number: 28,
  title: {
    bn: "অধ্যায় ২৮: নেক্সট জেএস পরিচিতি — রিয়েল ফুলস্ট্যাক রিঅ্যাক্ট যাত্রা",
    en: "Chapter 28: Next.js Introduction (Real Fullstack React Start)",
  },
  description: {
    bn: "নেক্সট জেএস কী, কেন রিঅ্যাক্ট অ্যাপ্লিকেশনকে প্রডাকশন লেভেলে নিতে নেক্সট জেএস ব্যবহার করা হয়, ফাইল-ভিত্তিক রাউটিং এবং সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্টের বেসিক ধারণা।",
    en: "Learn what Next.js is, why it scales React for production web apps, file-based routing, and the basics of Server vs. Client rendering.",
  },
  difficulty: "intermediate",
  readingTime: 12,
  objectives: [
    {
      bn: "নেক্সট জেএস (Next.js) কী এবং এটি কেন আধুনিক ওয়েব ডেভেলপমেন্টের প্রথম পছন্দ তা জানা।",
      en: "Understand what Next.js is and why it's the premium choice for modern web apps.",
    },
    {
      bn: "ফাইল-ভিত্তিক রাউটিং (File-based Routing) এবং ডিরেক্টরি কাঠামো বিশ্লেষণ করা।",
      en: "Grasp Next.js App Router file-based routing and directory layouts.",
    },
    {
      bn: "পেজ (Page) এবং সাধারণ কম্পোনেন্ট (Component)-এর মধ্যে পার্থক্য পরিষ্কার করা।",
      en: "Differentiate between a dynamic Route Page and a reusable UI Component.",
    },
    {
      bn: "সার্ভার কম্পোনেন্ট (Server Components) এবং ক্লায়েন্ট কম্পোনেন্ট (Client Components)-এর মৌলিক ধারণা লাভ করা।",
      en: "Learn the foundational differences between Server and Client rendering components.",
    },
  ],
  sections: [
    {
      id: "intro-nextjs",
      title: {
        bn: "১. নেক্সট জেএস কী ও কেন শক্তিশালী? (What is Next.js & Why It's Powerful)",
        en: "1. What is Next.js & Why It's Powerful",
      },
      content: {
        bn: `## What is Next.js? (নেক্সট জেএস কী?)
আমরা যখন রিঅ্যাক্ট দিয়ে কোনো ওয়েবসাইট বানাই, তখন রেন্ডারিং এবং রাউটিংয়ের জন্য আমাদের বাইরে থেকে অনেক থার্ড-পার্টি লাইব্রেরি (যেমন React Router) যুক্ত করতে হতো। রিঅ্যাক্ট একা কেবল একটি ইউজার ইন্টারফেস (UI) লাইব্রেরি, এটি কোনো পূর্ণাঙ্গ ওয়েব ফ্রেমওয়ার্ক নয়।

ফেসবুকের লাইব্রেরি রিঅ্যাক্টকে ব্যবহার করে ভেরসেল (Vercel) কোম্পানি তৈরি করেছে **Next.js (নেক্সট জেএস)**। এটি হলো রিঅ্যাক্টের একটি অত্যন্ত শক্তিশালী **প্রোডাকশন-গ্রেড ফুলস্ট্যাক ফ্রেমওয়ার্ক**।

---

## Why Next.js is Used (নেক্সট জেএস কেন ব্যবহৃত হয়?)
নেক্সট জেএস ব্যবহার করে আমরা বিশ্বের সবচেয়ে বড় বড় ই-কমার্স সাইট, SaaS অ্যাপ্লিকেশন, ড্যাশবোর্ড এবং রিয়েল-ওয়ার্ল্ড প্রোডাক্ট পেজ তৈরি করি। এর মূল শক্তি হলো:

### ১. রিঅ্যাক্ট একা বনাম নেক্সট জেএস
*   **React (Vanilla)**:
    - এটি কেবল ইউআই লাইব্রেরি।
    - রাউটিং ও পারফরম্যান্স অপ্টিমাইজেশন নিজেকে ম্যানুয়ালি কনফিগার করতে হয়।
    - এসইও (SEO) ফ্রেন্ডলি নয়, কারণ ব্রাউজারে খালি এইচটিএমএল লোড হয়ে জাভাস্ক্রিপ্ট রান করে পেজ জেনারেট করে।
*   **Next.js (Framework)**:
    - রাউটিং, ইমেজ অপ্টিমাইজেশন এবং ফন্ট লোডিং বিল্ট-ইন থাকে।
    - পেজগুলোকে সার্ভার স্তরে আগে থেকেই রেন্ডার (Pre-rendering) করার কারণে ওয়েবসাইট চোখের পলকে লোড হয়।
    - অত্যন্ত চমৎকার এসইও (SEO) ফ্রেন্ডলি পেজ তৈরি করা যায়।`,
        en: `## What is Next.js?
React is a UI library focused on building interactive views. However, React by itself lacks a built-in routing system, optimization rules, and server configurations needed for production apps.

To bridge this gap, Vercel engineered **Next.js**, a production-grade **Fullstack React Framework**.

---

## Why Next.js is Used
Industry leaders use Next.js to build large-scale e-commerce web applications, SaaS platforms, corporate portals, and interactive dashboards.

### Vanilla React vs. Next.js Framework
*   **Vanilla React**:
    - A library focused purely on rendering views.
    - Routing (React Router), build optimizations, and image compressions must be manually integrated.
    - Lacks native Search Engine Optimization (SEO) capabilities because it relies on Client-Side Rendering (CSR).
*   **Next.js Framework**:
    - Built-in App Router directory structure, image compressors, and font loaders.
    - Server-side rendering (SSR) and Static Site Generation (SSG) deliver pre-rendered HTML, making it SEO-ready and extremely fast.`,
      },
    },
    {
      id: "routing-structure",
      title: {
        bn: "২. ফাইল-ভিত্তিক রাউটিং ও বেসিক অ্যাপ কাঠামো (File-Based Routing & Structure)",
        en: "2. File-Based Routing & Basic App Structure",
      },
      content: {
        bn: `## File-Based Routing (ফাইল-ভিত্তিক রাউটিং)
অন্যান্য ফ্রেমওয়ার্কে রাউটিং করার জন্য অনেক কোড লিখে রাউটার কনফিগার করতে হলেও নেক্সট জেএস-এ তা একেবারেই করতে হয় না। এখানে ফোল্ডার তৈরি করলেই রাউট তৈরি হয়ে যায়! একেই বলা হয় **ফাইল-ভিত্তিক রাউটিং (File-Based Routing)**।

*   **নিয়ম**: \`app\` ফোল্ডারের ভেতর আপনি যে নামের ফোল্ডার তৈরি করবেন এবং তার ভেতর \`page.js\` (বা \`page.tsx\`) ফাইল রাখবেন, সেটিই একটি ওয়েব পেজ রাউট হয়ে যাবে।

### Routing Example (রাউট ম্যাপিং):

\`\`\`text
app/
├── page.js          ➔   https://example.com/ (Homepage)
├── about/
│   └── page.js      ➔   https://example.com/about (About page)
└── contact/
    └── page.js      ➔   https://example.com/contact (Contact page)
\`\`\`

---

## Page vs. Component (পেজ বনাম কম্পোনেন্ট)
নেক্সট জেএস ডেভেলপমেন্টে এই পার্থক্যটি বোঝা অত্যন্ত গুরুত্বপূর্ণ:
1.  **Page (পেজ)**: এটি হলো একটি রাউটের মূল স্ক্রিন বা এন্ট্রি পয়েন্ট। এটি অবশ্যই \`page.js\` ফাইলের ভেতর ডিক্লেয়ার করতে হয়।
2.  **Component (কম্পোনেন্ট)**: এটি পেজের ভেতরের একটি ছোট ভিজ্যুয়াল ব্লক (যেমন: \`Button\`, \`Navbar\`)। এটি পেজের যেকোনো স্থানে ইম্পোর্ট করে রেন্ডার করা যায়।

---

## Basic App Folder Structure (বেসিক অ্যাপ কাঠামো)
নেক্সট জেএস অ্যাপ তৈরি করার সময় নিচের ডিরেক্টরি কাঠামোটি প্রধান ভূমিকা রাখে:

\`\`\`text
app/                     # অ্যাপ্লিকেশনের সব রাউট ও লেআউট ধারণ করে
├── layout.js            # সম্পূর্ণ ওয়েবসাইটের মেইন ফ্রেম বা নেভিগেশন বার
├── page.js              # হোমপেজের প্রধান ভিজ্যুয়াল ফাইল
└── components/          # পেজের ভেতর ব্যবহার করার মতো রিইউজেবল উইজেট
    └── Button.js
\`\`\``,
        en: `## File-Based Routing
In Next.js, you do not write JS scripts to map path configurations. Next.js uses the local filesystem to determine route paths. This is called **File-based Routing**.

*   **The Rule**: Inside the \`app\` directory, every folder represents a path segment, and a special \`page.js\` (or \`page.tsx\`) file inside it defines the visual entry point of that route.

### Directory Path Mapping:
*   \`app/page.js\` maps to: \`https://example.com/\` (Home)
*   \`app/about/page.js\` maps to: \`https://example.com/about\` (About)
*   \`app/contact/page.js\` maps to: \`https://example.com/contact\` (Contact)

---

## Page vs. Component
*   **Page**: Defines a route endpoint. It must be named \`page.js\` and export a React component.
*   **Component**: A modular, reusable visual snippet (e.g., \`Card.js\`). It is imported and rendered inside pages or layouts.

---

## Basic App Router Directory Tree
*   \`app/\`: Root route folder.
    - \`layout.js\`: Global wrapper providing HTML envelopes, shared Navbars, and Footers.
    - \`page.js\`: Homepage entry point.
    - \`components/\`: Directory for local reusable primitives.`,
      },
    },
    {
      id: "server-vs-client",
      title: {
        bn: "৩. সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্ট ধারণা (Server vs. Client Components)",
        en: "3. Server vs. Client Components Concept",
      },
      content: {
        bn: `## Server vs. Client Components (সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্ট)
নেক্সট জেএস-এর অন্যতম বৈপ্লবিক দিক হলো এটি রেন্ডারিংয়ের কাজকে দুই ভাগে ভাগ করে দেয়:

### ১. Server Components (সার্ভার কম্পোনেন্ট - ডিফল্ট)
নেক্সট জেএস-এ তৈরি সব কম্পোনেন্ট ডিফল্টভাবে সার্ভার কম্পোনেন্ট হিসেবে কাজ করে।
*   **কাজের ধরণ**: এর সম্পূর্ণ রেন্ডারিং সার্ভারে সম্পন্ন হয়ে কেবল পিওর এইচটিএমএল ব্রাউজারে পাঠানো হয়।
*   **সুবিধা**:
    - ব্রাউজারে কোনো জাভাস্ক্রিপ্ট লোড হয় না, ফলে সাইট সুপার ফাস্ট চলে।
    - এপিআই কি বা ডাটাবেজ ক্যোয়ারী সুরক্ষিতভাবে সরাসরি সার্ভারেই চালানো যায়।

### ২. Client Components (ক্লায়েন্ট কম্পোনেন্ট)
যেসব কম্পোনেন্টে ইউজার ইন্টারঅ্যাকশন (যেমন বাটন ক্লিক, ফর্ম সাবমিট) অথবা রিঅ্যাক্ট হুক (যেমন \`useState\`, \`useEffect\`) ব্যবহার করা প্রয়োজন, সেগুলোকে ক্লায়েন্ট কম্পোনেন্ট বানাতে হয়।
*   **ঘোষণা**: ফাইলের একদম ওপরের লাইনে \`'use client'\` স্ট্রিংটি লিখে দিলে সেটি ক্লায়েন্ট কম্পোনেন্ট হিসেবে কাজ করে।
*   **সুবিধা**: রিঅ্যাক্টের ইন্টারেক্টিভ সুবিধা সম্পূর্ণ ব্যবহার করা যায়।

---

## Visual Summary (রেন্ডারিং সামারি)
\`\`\`
┌────────────────────────────────────────────────────────┐
│                      Next.js App                       │
│                                                        │
│   ┌──────────────────────────┐  ┌──────────────────┐   │
│   │ Server Component (Default)│  │ Client Component │   │
│   │ - Runs on Server         │  │ - Runs on Browser│   │
│   │ - SEO & Speed Focus      │  │ - 'use client'   │   │
│   │ - Safe Database Calls    │  │ - Handles Hooks  │   │
│   └──────────────────────────┘  └──────────────────┘   │
└────────────────────────────────────────────────────────┘
\`\`\``,
        en: `## Server vs. Client Components
Next.js App Router partitions components based on where they execute:

### 1. Server Components (Default)
By default, all components inside the \`app\` folder are React Server Components (RSC).
*   **Execution**: Rendered completely on the server. Next.js streams static HTML to the browser.
*   **Benefits**:
    - Zero client-side JavaScript bundle sizes.
    - Secure backend fetches and direct database connections without exposing tokens.
    - Highly indexed by search engines (SEO).

### 2. Client Components
When a component requires user interaction, browser APIs, or React state hooks, it must run on the client.
*   **Execution**: Triggered by writing the directive \`'use client'\` at the very top of the file.
*   **Benefits**: Full access to state variables (\`useState\`), side effects (\`useEffect\`), and events (\`onClick\`).`,
      },
    },
    {
      id: "industry-production",
      title: {
        bn: "৪. ইন্ডাস্ট্রিতে কেন নেক্সট জেএস ব্যবহৃত হয়? (Why Next.js is Used in Industry)",
        en: "4. Why Next.js is Used in Industry",
      },
      content: {
        bn: `## Why Next.js is Industry Standard (কেন এটি ইন্ডাস্ট্রি স্ট্যান্ডার্ড?)
আধুনিক সফটওয়্যার ইন্ডাস্ট্রিতে নেক্সট জেএস-কে প্রধান ফ্রেমওয়ার্ক হিসেবে বেছে নেওয়ার পেছনে কয়েকটি অকাট্য কারণ রয়েছে:

1.  **SEO Optimization (সার্চ ইঞ্জিন অপ্টিমাইজেশন)**: গুগল সার্চ ইঞ্জিনে আপনার সাইটকে ওপরের দিকে র্যাঙ্ক করাতে হলে এসইও ম্যাটাডাটা প্রোভাইড করতে হয়। নেক্সট জেএস বিল্ট-ইন মেটাডাটা এপিআই দিয়ে এটি করা অত্যন্ত সহজ করে তোলে।
2.  **Performance & Optimization**: ইমেজ রিসাইজ করা, স্ক্রলিংয়ের সাথে সাথে নিচের ইমেজ লেজি-লোড করা এবং ফন্ট প্রি-ফেচ করার মতো বিষয়গুলো নেক্সট জেএস স্বয়ংক্রিয়ভাবে হ্যান্ডেল করে।
3.  **API Routes (ফুলস্ট্যাক ক্ষমতা)**: নেক্সট জেএস-এ আলাদা এক্সপ্রেস ব্যাকগ্রাউন্ড সার্ভার ছাড়াও সরাসরি প্রজেক্টের ভেতর \`/api\` ফোল্ডার বানিয়ে ব্যাকএন্ড এপিআই রুট তৈরি করা যায়।

---

## Real Production Project Modules (বাস্তব প্রজেক্ট মডিউলস)
একটি প্রফেশনাল নেক্সট জেএস অ্যাপ্লিকেশনে নিচের পেজগুলো এভাবে ম্যাপ করা থাকে:
*   **Landing Page**: হোমপেজ (\`app/page.js\`), যা সার্চ র্যাঙ্কিংয়ের জন্য সম্পূর্ণ সার্ভার রেন্ডার করা থাকে।
*   **Dynamic Product Page**: পণ্য দেখার পেজ (\`app/products/[id]/page.js\`), যা ডাটাবেজ থেকে ডাটা লোড করে।
*   **SaaS Dashboard**: ড্যাশবোর্ড প্যানেল (\`app/dashboard/page.js\`), যা ইউজার ইন্টারঅ্যাকশন ও চার্ট প্রদর্শনের জন্য \`'use client'\` ব্যবহার করে।`,
        en: `## Why Next.js is the Industry Standard
Web agencies and enterprises standardize React projects around Next.js due to key capabilities:

1.  **Metadata and SEO**: Next.js provides structured metadata API definitions, rendering meta tags server-side for search crawlers.
2.  **Asset Optimization**: Built-in Image tags perform on-the-fly resizing and conversion to modern WebP formats.
3.  **Hybrid Rendering**: You can mix statically generated blog posts with server-rendered product checkouts within the same codebase.
4.  **Backend Integration**: Native API routes let developers write Node.js server scripts without spawning secondary Express servers.

---

## Real-world Production App Mapping
A professional corporate product portal structures its features like:
*   **Landing Page**: (\`app/page.js\`) Server-rendered for maximum speed and SEO.
*   **Interactive Dashboard**: (\`app/dashboard/page.js\`) Runs on Client (\`'use client'\`) to handle active graphs.
*   **Authentication Portal**: (\`app/login/page.js\`) Uses hooks to validate passwords.`,
      },
    },
    {
      id: "analogy-thinking-mistakes",
      title: {
        bn: "৫. সাধারণ ভুল ও পূর্ণাঙ্গ বাড়ি তৈরির রূপক (Common Mistakes & Analogy)",
        en: "5. Common Mistakes & Building System Analogy",
      },
      content: {
        bn: `## Common Mistakes (সাধারণ ভুলসমূহ)
1.  **React বনাম Next.js গোলমাল করা**: অনেকে মনে করেন নেক্সট জেএস শিখলে রিঅ্যাক্ট লাগবে না। বিষয়টি ভুল। নেক্সট জেএস রান করার ইঞ্জিনই হলো রিঅ্যাক্ট।
2.  **অনাবশ্যক 'use client' ব্যবহার**: মেমরি পারফরম্যান্স ভালো রাখার জন্য কেবল ইন্টারঅ্যাক্টিভিটি যুক্ত কম্পোনেন্টেই \`'use client'\` লিখুন, অপ্রয়োজনে সব ফাইলে এটি লেখা এড়িয়ে চলুন।
3.  **ভুল ফোল্ডার রাউটিং**: ফোল্ডারের নাম ভুল হলে বা পেজের নাম \`page.js\`-এর বদলে অন্য কিছু দিলে ব্রাউজার \`404 Not Found\` দেখাবে।

---

## The Building System Analogy (পূর্ণাঙ্গ বাড়ি তৈরির রূপক)
আমরা যদি একটি পূর্ণাঙ্গ বাড়ি তৈরি করতে চাই:
*   **React = ইটের গাঁথুনি (Bricks)**: ঘর ও দেয়াল তৈরির ক্ষুদ্র মডিউলার কাঁচামাল। ইট দিয়ে দেয়াল তোলা গেলেও দরজা, পাইপলাইন বা বিদ্যুৎ সংযোগের অটোমেটিক গাইডলাইন ইটের ভেতর থাকে না।
*   **Next.js = সম্পূর্ণ আর্কিটেকচার সিস্টেম (Full Building System)**: এটি আপনাকে ছাদের নকশা, ড্রেনেজ পাইপলাইন, রুমের ম্যাপ (Routing), লাইটের ওয়্যারিং (Server/Client) এবং মেইন গেটের ডিজাইন (Layout) একবারে প্রোভাইড করে। এটি ইটের কার্যকারিতাকে পূর্ণতা দিয়ে থাকার উপযোগী বাড়ি বানিয়ে দেয়!`,
        en: `## Common Mistakes
1.  **Confusing Next.js with React**: Beginners think Next.js is a replacement for React. Next.js is a framework wrapper. You write React components inside it.
2.  **Overusing 'use client'**: Declaring client directives everywhere voids Server Component speed benefits. Declare it only on visual boundary endpoints that capture events.
3.  **Incorrect Routing Names**: Naming route entry files \`home.js\` instead of \`page.js\` fails to register the path in the App Router.

---

## The Building System Metaphor
*   **React = Bricks**: High-quality modular clay blocks. You use them to stack walls, but they don't solve plumbing layouts or structural blueprints.
*   **Next.js = The Engineered Building System**: Provides structural blueprints (Folder Layouts), room partitions (File-based Routing), wiring grids (Server-Client components), and main exit systems. It turns raw bricks into a completed, liveable mansion.`,
      },
      codeBlock: {
        fileName: "app/about/page.jsx",
        language: "jsx",
        code: `// ১. নেক্সট জেএস রাউট পেজ ফাইল
import React from 'react';
import TeamSection from '@/components/TeamSection';

// এই ভেরিয়েবলটি সার্ভারে রেন্ডার হয়ে এসইও ক্রলার রিড করতে পারবে
export const metadata = {
  title: 'আমাদের সম্পর্কে - বিজ্ঞানপ্রো একাডেমী',
  description: 'আমরা দেশের সেরা স্কেলেবল প্রোগ্রামিং লার্নিং প্ল্যাটফর্ম।'
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-800">বিজ্ঞানপ্রো একাডেমী</h1>
        <p className="mt-2 text-lg text-indigo-600 font-medium">প্রোডাকশন-গ্রেড ফুলস্ট্যাক ক্যারিয়ার গড়ার রোডম্যাপ</p>
      </header>
      
      <section className="prose prose-slate bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
        <p>
          আমাদের মূল লক্ষ্য কেবল কোডিং শেখানো নয়, বরং প্রফেশনাল ফ্রন্টএন্ড এবং ব্যাকএন্ড আর্কিটেকচার থিংকিং তৈরি করা।
        </p>
      </section>

      {/* ২. রিইউজেবল কম্পোনেন্ট ইম্পোর্ট করে ব্যবহার */}
      <div className="mt-12">
        <TeamSection />
      </div>
    </div>
  );
}`,
        explanations: [
          {
            line: 6,
            text: {
              bn: "metadata অবজেক্টটি নেক্সট জেএস সার্ভার নোড পেজ হেড সেকশনে এসইও অপ্টিমাইজড করে রেন্ডার করবে।",
              en: "Static metadata objects configure route meta tags server-side for indexing.",
            },
          },
          {
            line: 11,
            text: {
              bn: "AboutPage হলো একটি ডিফল্ট সার্ভার কম্পোনেন্ট, যা ব্রাউজারে জিরো জাভাস্ক্রিপ্ট বান্ডেল পাঠাবে।",
              en: "AboutPage is a Server Component, sending static pre-rendered HTML payloads.",
            },
          },
          {
            line: 25,
            text: {
              bn: "পেজের ভেতর TeamSection নামের সাধারণ রিইউজেবল কম্পোনেন্ট ইম্পোর্ট করে ব্যবহার করা হয়েছে।",
              en: "Importing separate reusable components to compose the final route viewport layout.",
            },
          },
        ],
      },
    },
    {
      id: "practice-nextjs-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন সম্পন্ন করুন। এটি আপনার রিয়েল-ওয়ার্ল্ড প্রডাকশন থিংকিংকে পরিপক্ক করে তুলবে।`,
        en: `## Reflection & Lab Tasks
Solidify your Next.js directory setup and rendering models understanding before designing complex UI libraries in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "নেক্সট জেএস মূলত ক্লায়েন্ট ও সার্ভারকে একই প্রজেক্টে একীভূত করে রিয়েল লাইফ প্রডাকশন-রেডি ওয়েব অ্যাপ তৈরির প্রক্রিয়া সহজ করে।",
          en: "Next.js integrates client interaction and server rendering into a single, unified framework.",
        },
        whyWorks: {
          bn: "এটি ব্যাকগ্রাউন্ডে নোড জেএস রানটাইমকে রেন্ডারিং ইঞ্জিন হিসেবে ব্যবহার করে রিঅ্যাক্ট কোড রান করায়।",
          en: "Next.js utilizes a server-side Node.js environment to pre-render React components into HTML.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা ডাটা সিকিউরিটি ও স্পীড ভালো রাখতে যথাসম্ভব সার্ভার কম্পোনেন্ট ব্যবহার করেন এবং কেবল ফিজিক্যাল ইভেন্টে ক্লায়েন্ট কম্পোনেন্ট জোড়েন।",
          en: "Seniors prefer Server Components for queries and only transition to Client Components at boundary nodes.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো নেক্সট জেএস রাউটার ফোল্ডারের ভেতর ভুলবশত \`page.js\`-এর বদলে অন্য নাম দেওয়া, যার ফলে রাউট কাজ করে না।",
          en: "A common pitfall is naming the route entry file something else, failing to register it under the App Router.",
        },
        debugging: {
          bn: "সার্ভার সাইড কোড ডিবাগ করতে ব্রাউজারের বদলে সরাসরি আপনার নোড টার্মিনাল বা কমান্ড লাইনের \`console.log\` চেক করুন।",
          en: "Use Node.js server terminal logs to debug Server Components, as browser consoles won't capture them.",
        },
        performance: {
          bn: "নেক্সট জেএস-এর ইমেজ কম্পোনেন্ট (\`<Image />\`) ব্যবহার করলে ছবিগুলো কম্প্রেসড হয়ে পেজ লোডিং টাইম অনেক গুণ কমিয়ে দেয়।",
          en: "Leverage Next.js native optimization tags to automatically compress images and fonts assets.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "next-q1",
      question: {
        bn: "নেক্সট জেএস (Next.js) মূলত কী?",
        en: "What is Next.js?",
      },
      options: [
        {
          bn: "একটি ডেটাবেজ সফটওয়্যার সামগ্রী",
          en: "A relational database software utility",
        },
        {
          bn: "রিঅ্যাক্টের একটি প্রোডাকশন-গ্রেড ফুলস্ট্যাক ফ্রেমওয়ার্ক",
          en: "A production-grade fullstack React framework developed by Vercel",
        },
        {
          bn: "একটি নতুন সিএসএস স্টাইলিং ইঞ্জিন",
          en: "A custom CSS compiler engine",
        },
        {
          bn: "জাভাস্ক্রিপ্টের জন্য বিকল্প ব্রাউজার",
          en: "An alternative web browser client",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "নেক্সট জেএস হলো রিঅ্যাক্টের ওপর ভিত্তি করে তৈরি একটি অত্যন্ত জনপ্রিয় ওপেন-সোর্স ফুলস্ট্যাক ওয়েব ফ্রেমওয়ার্ক।",
        en: "Next.js extends React's UI capabilities into a complete production framework.",
      },
    },
    {
      id: "next-q2",
      question: {
        bn: "নেক্সট জেএস-এর 'ফাইল-ভিত্তিক রাউটিং' (File-based Routing) বলতে কী বোঝায়?",
        en: "What does 'File-based Routing' mean in Next.js?",
      },
      options: [
        {
          bn: "রাউটিং করার জন্য ফাইল জিপ করে ইমেইল করা",
          en: "Sending route files inside zip formats",
        },
        {
          bn: "ডিরেক্টরি ফোল্ডারের নামের ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে ওয়েব পেজ রাউট তৈরি হওয়া",
          en: "Creating web routes automatically based on filesystem directory structures",
        },
        { bn: "রাউটার ডিলিট করে দেওয়া", en: "De-registering paths manually" },
        { bn: "গিট কমিট চেক করা", en: "Checking git commit status" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "নেক্সট জেএস-এ আমাদের কোনো রাউটিং কোড লিখতে হয় না, ফোল্ডারের নাম অনুযায়ী অটোমেটিকালি পাথ ম্যাপিং হয়ে যায়।",
        en: "Folder structures in the app directory automatically register matching URL endpoints.",
      },
    },
    {
      id: "next-q3",
      question: {
        bn: "নেক্সট জেএস-এ একটি পেজ (Page) ডিফাইন করার জন্য ফাইলের নাম কী হতে হবে?",
        en: "What must be the filename to define a page route in Next.js?",
      },
      options: [
        { bn: "route.js", en: "route.js" },
        { bn: "index.html", en: "index.html" },
        { bn: "page.js (অথবা page.tsx)", en: "page.js (or page.tsx)" },
        { bn: "home.js", en: "home.js" },
      ],
      correctAnswerIndex: 2,
      explanation: {
        bn: "নেক্সট জেএস অ্যাপ রাউটারে একটি ডিরেক্টরিকে পেজ হিসেবে রেজিস্টার করতে ফাইলের নাম অবশ্যই page.js বা page.tsx হতে হবে।",
        en: "The App Router expects exactly page.js/page.tsx for rendering viewports.",
      },
    },
    {
      id: "next-q4",
      question: {
        bn: "একটি রিঅ্যাক্ট কম্পোনেন্টকে ক্লায়েন্ট কম্পোনেন্ট (Client Component) হিসেবে ঘোষণা করতে ওপরে কী লিখতে হয়?",
        en: "Which directive declares a Client Component in Next.js?",
      },
      options: [
        { bn: "'use client'", en: "'use client'" },
        { bn: "'client side'", en: "'client side'" },
        { bn: "'import client'", en: "'import client'" },
        { bn: "'use state'", en: "'use state'" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "ফাইলের একদম প্রথম লাইনে 'use client' লিখলে নেক্সট জেএস বুঝতে পারে যে কম্পোনেন্টটিতে ক্লায়েন্ট রিঅ্যাক্ট কোড ও হুক ব্যবহৃত হবে।",
        en: "'use client' instructs compiler to ship rendering assets to browser.",
      },
    },
    {
      id: "next-q5",
      question: {
        bn: "নেক্সট জেএস-এর ডিফল্ট সার্ভার কম্পোনেন্ট (Server Components) এর প্রধান সুবিধা কী?",
        en: "What is a main benefit of default Server Components?",
      },
      options: [
        {
          bn: "ব্রাউজারে জিরো জাভাস্ক্রিপ্ট বান্ডেল পাঠানো ও সুপার ফাস্ট স্পীড",
          en: "Sending zero client-side JavaScript bundle sizes and maximizing speed",
        },
        {
          bn: "এস ই ও (SEO) ফ্রেন্ডলি পেজ জেনারেশন",
          en: "SEO-friendly pre-rendered HTML pages",
        },
        {
          bn: "ডাটাবেজ ও এপিআই কী-র সর্বোচ্চ সুরক্ষা",
          en: "Secure database access without token exposures",
        },
        { bn: "উপরের সবগুলোই সঠিক", en: "All of the above" },
      ],
      correctAnswerIndex: 3,
      explanation: {
        bn: "সার্ভার কম্পোনেন্ট ডাটা সার্ভারেই প্রসেস করার ফলে সাইট ফাস্ট চলে, সিকিউর থাকে এবং গুগল সার্চ র্যাঙ্কে ভালো এসইও পারফর্ম করে।",
        en: "RSCs bundle together speed, search index capabilities, and server-side safety.",
      },
    },
  ],
  practice: [
    {
      bn: "১. নেক্সট জেএস অ্যাপ্লিকেশনে একটি '/dashboard/settings' রাউট পেজ তৈরি করতে কী ফোল্ডার ও ফাইল সিকোয়েন্স লাগবে তা লিখুন।",
      en: "1. List the directories and file paths needed to establish a '/dashboard/settings' route in Next.js.",
    },
    {
      bn: "২. কেন আমরা হোমপেজের ফুটার বা হেডারকে ক্লায়েন্ট কম্পোনেন্ট বানাবো না? সার্ভার কম্পোনেন্ট হিসেবে রাখার যুক্তি দিন।",
      en: "2. Argue why global layouts Navbars/Footers should remain Server Components instead of Client Components.",
    },
    {
      bn: "৩. নেক্সট জেএস ফাইলে 'use client' না লিখলে useState হুক ব্যবহার করতে গেলে টার্মিনালে কী ধরণের কম্পাইলার এরর আসতে পারে?",
      en: "3. Identify the compiler warning you get when using useState inside a component lacking the 'use client' directive.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি স্কেলেবল ব্লগ অ্যাপ ফোল্ডার আর্কিটেকচার",
      en: "Scalable Blog App Directory Layout Design",
    },
    description: {
      bn: "একটি নেক্সট জেএস ব্লগ প্রজেক্টের ডিরেক্টরি কাঠামো ডিজাইন করুন। হোমপেজ, একটি ব্লগ পোস্ট দেখার পেজ (/blog/[id]) এবং আমাদের সম্পর্কে পেজ (/about)-এর জন্য নেক্সট জেএস ফাইল রাউটিং স্ট্রাকচারটি তৈরি করুন। সেই সাথে কেন নেক্সট জেএস ভ্যানিলা রিঅ্যাক্টের চেয়ে সেরা তা ৩টি বাক্যে বুঝিয়ে লিখুন।",
      en: "Draft the filesystem layout and folder mapping for a blog app in Next.js containing a Homepage, a Dynamic Post view page (/blog/[id]), and an About page (/about). Briefly explain three advantages of Next.js over vanilla React.",
    },
    starterCode: `// Blog App Folder Tree Layout Mapping
// নিচের ডিরেক্টরি ও ফাইলগুলোর নাম এবং পাথ লিখুন:

app/
├── 
│   
├── 
│   
└── 
`,
    solution: {
      code: `// Blog App Folder Tree Layout Completed
app/
├── layout.tsx            // গ্লোবাল লেআউট (Navbar & Footer Wrapper)
├── page.tsx              // হোমপেজ (ব্লগ আর্টিকেলের তালিকা)
├── about/
│   └── page.tsx          // আমাদের সম্পর্কে পেজ (/about)
└── blog/
    └── [id]/
        └── page.tsx      // ডাইনামিক ব্লগ ডিটেইলস পেজ (/blog/123)

// ==========================================
// ADVANTAGES OF NEXT.JS OVER VANILLA REACT:
// ==========================================
// ১. প্রাক-রেন্ডারিং (Pre-rendering / SSR) পেজগুলোকে গুগল সার্চে র্যাঙ্ক করতে (SEO) সহায়তা করে।
// ২. স্বয়ংক্রিয় ইমেজ এবং ফন্ট অপ্টিমাইজেশন সাইটের গতি কয়েক গুণ বাড়িয়ে দেয়।
// ৩. ফাইল-ভিত্তিক রাউটিং ব্যবহার করায় কোনো রাউটিং লাইব্রেরি কনফিগারেশনের কোড লিখতে হয় না।`,
      explanation: {
        bn: "চমৎকার ডিজাইন কাঠামো! ডাইনামিক আইডি [id] ফোল্ডার রাউটিং এবং মেইন পেজ ফাইল কনফিগারেশনটি শতভাগ সঠিক হয়েছে।",
        en: "Excellent layout mapping! Defining routing checkpoints and outlining Next.js advantages shows production readiness.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "রিঅ্যাক্টকে একটি লাইব্রেরি বলা হলেও নেক্সট জেএস-কে কেন একটি ফ্রেমওয়ার্ক বলা হয়? এদের মূল পার্থক্য বুঝিয়ে বলুন।",
        en: "Why is React categorized as a Library, whereas Next.js is a Framework? Explain key differences.",
      },
      answer: {
        bn: "রিঅ্যাক্ট হলো একটি ইউজার ইন্টারফেস (UI) তৈরির লাইব্রেরি। এর মানে হলো এটি কেবল স্ক্রিনে ভিউ রেন্ডার করার কাজটুকু করে। রাউটিং, ডাটা ফেচিং বা ফাইল স্ট্রাকচার কীভাবে সাজাতে হবে তা রিঅ্যাক্ট আপনাকে নির্দেশ দেয় না, এগুলো ডেভেলপারকে নিজেকে করতে হয় (You are in control)। অন্যদিকে নেক্সট জেএস হলো একটি সম্পূর্ণ ফ্রেমওয়ার্ক। এটি নিজস্ব ডিরেক্টরি কাঠামো (App Router Layout), রাউটিং সিস্টেম, সার্ভার রেন্ডারিং এবং অপ্টিমাইজেশন রুলস প্রোভাইড করে। এটি ডেভেলপারকে একটি নির্দিষ্ট ফ্রেমে বা নিয়মে কোড লিখতে বাধ্য করে (The framework is in control)। লাইব্রেরি আপনাকে টুলস দেয়, আর ফ্রেমওয়ার্ক আপনাকে দেয় একটি কাজের সম্পূর্ণ পরিবেশ।",
        en: "React is a UI library providing rendering blocks (the 'bricks'). It gives developers control over integrating routing, state managers, and compilation rules. Next.js is an opinionated framework that dictates directory structure, asset compilers, and data-flow policies (the 'engineered building system'). It inversion of controls (IoC) — calling your components within its pre-built environment to build hybrid, fast, and SEO-optimized production applications.",
      },
    },
    {
      question: {
        bn: "নেক্সট জেএস-এ সার্ভার কম্পোনেন্ট (RSC) এবং ক্লায়েন্ট কম্পোনেন্টের মধ্যে পার্থক্য কী? কখন কোনটি ব্যবহার করবেন?",
        en: "What is the difference between Server (RSC) and Client Components in Next.js? When should we use which?",
      },
      answer: {
        bn: "মূল পার্থক্য রেন্ডারিং লোকেশন ও মেমরিতে:\n১. সার্ভার কম্পোনেন্ট (RSC): ডিফল্টভাবে নেক্সট জেএস-এর সব কম্পোনেন্ট সার্ভারে চলে। এটি ডাটাবেজ ক্যোয়ারী ও ডাটা এপিআই কল ডিরেক্টলি করতে পারে। এটি ব্রাউজারে কোনো জাভাস্ক্রিপ্ট সাইজ বাড়ায় না। যখন পেজে কেবল তথ্য প্রদর্শন করা দরকার (যেমন ব্লগ বডি বা ল্যান্ডিং পেজ), তখন এটি ব্যবহার করা হয়।\n২. ক্লায়েন্ট কম্পোনেন্ট: ফাইলের মাথায় \`'use client'\` দিয়ে ডিক্লেয়ার করা হয়। এটি ব্রাউজারে রান করে ও রিঅ্যাক্ট হুকস (\`useState\`, \`useEffect\`) ও ইন্টারঅ্যাক্টিভ ইভেন্ট লিসেনার (\`onClick\`) এক্সেস করতে পারে। যখন পেজে ডাইনামিক ব্যবহারকারী ইন্টারঅ্যাকশন প্রয়োজন হয় (যেমন ড্রপডাউন টগল, লাইক বাটন বা ফর্ম ভ্যালিডেশন), তখন এটি ব্যবহার করা হয়।",
        en: "The primary difference lies in where the component executes:\n1. Server Components: Execute on the server. They send lightweight, static HTML outputs to the client, keeping JavaScript bundles small and SEO optimized. Use them by default for general layouts, lists, and pages accessing database layers.\n2. Client Components: Instructed via the `'use client'` directive. They are compiled to run in the user's browser, permitting access to React state hooks (`useState`, `useEffect`) and physical DOM events (`onClick`). Use them selectively at visual interactive boundaries like forms, search inputs, and animations.",
      },
    },
  ],
};
