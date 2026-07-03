export const chapter27Content = {
  id: "chapter-27",
  number: 27,
  title: {
    bn: "অধ্যায় ২৭: রিঅ্যাক্ট কম্পোনেন্ট প্যাটার্ন — রিয়েল প্রজেক্ট আর্কিটেকচার",
    en: "Chapter 27: React Component Patterns (Real Project Architecture)",
  },
  description: {
    bn: "কম্পোনেন্ট ডিজাইন প্যাটার্ন, কন্টেইনার বনাম প্রেজেন্টেশনাল প্যাটার্ন, কম্পোজিশন মডেল এবং রিয়েল-ওয়ার্ল্ড প্রজেক্ট ফোল্ডার স্ট্রাকচারের গাইড।",
    en: "Master component design patterns, Container vs. Presentational separation, Composition pattern, and scalable project directory architectures.",
  },
  difficulty: "intermediate",
  readingTime: 15,
  objectives: [
    {
      bn: "রিঅ্যাক্ট কম্পোনেন্ট ডিজাইন প্যাটার্নগুলোর মূল ধারণা এবং বাস্তব গুরুত্ব ব্যাখ্যা করা।",
      en: "Explain core React component design patterns and their real-world significance.",
    },
    {
      bn: "প্রেজেন্টেশনাল (Dumb) এবং কন্টেইনার (Smart) কম্পোনেন্টের মধ্যে কাজের ভাগ বিভাজন করা।",
      en: "Differentiate responsibilities between Presentational (Dumb) and Container (Smart) components.",
    },
    {
      bn: "কম্পোজিশন প্যাটার্ন (Composition Pattern) ব্যবহার করে জটিল ইউআই ছোট ছোট ব্লকে সাজানো।",
      en: "Compose complex user interfaces by combining small modular building blocks.",
    },
    {
      bn: "প্রফেশনাল স্কেলেবল ফ্রন্টএন্ড ফোল্ডার স্ট্রাকচার এবং প্রপ ড্রিলিং (Prop Drilling) এর বেসিক ধারণা পাওয়া।",
      en: "Understand professional folder structures and mitigate the basics of Prop Drilling.",
    },
  ],
  sections: [
    {
      id: "intro-patterns",
      title: {
        bn: "১. কম্পোনেন্ট প্যাটার্ন কী ও কেন গুরুত্বপূর্ণ? (What are Component Patterns & Why They Matter)",
        en: "1. What are Component Patterns & Why They Matter",
      },
      content: {
        bn: `## What are Component Patterns? (কম্পোনেন্ট প্যাটার্ন কী?)
আমরা যখন রিঅ্যাক্ট শিখি, তখন সাধারণত একটি ফাইলে বা একটি কম্পোনেন্টের ভেতরেই সব স্টেট, লজিক এবং ইউআই লিখে ফেলি। ছোট প্রজেক্টের ক্ষেত্রে এটি ঠিকঠাক কাজ করলেও, বাস্তব প্রজেক্টের কোড সাইজ যখন হাজার হাজার লাইন ছাড়িয়ে যায়, তখন কোড এডিট করা নরকযন্ত্রণা হয়ে দাঁড়ায়।

**কম্পোনেন্ট প্যাটার্ন** হলো রিঅ্যাক্ট কোড এবং ইউআই ডিজাইন সাজানোর এমন কিছু প্রফেশনাল ও পুনর্ব্যবহারযোগ্য কাঠামো (Design structures), যা ব্যবহার করে বড় বড় সফটওয়্যার টিম তাদের অ্যাপ্লিকেশনকে পরিচ্ছন্ন ও স্কেলেবল রাখে।

---

## Why Patterns are Important (প্যাটার্ন কেন গুরুত্বপূর্ণ?)

আসুন একটি তুলনা দেখে নেওয়া যাক:

### প্যাটার্ন ছাড়া কোড (Spaghetti Code) ❌
*   **বিশৃঙ্খলা**: একই ফাইলের ভেতর এপিআই কল, স্টেট ম্যানেজমেন্ট এবং হাজার লাইনের এইচটিএমএল (JSX) জগাখিচুড়ি হয়ে থাকে।
*   **ডুপ্লিকেশন**: একই কোড বাটন বা কার্ডের জন্য বারবার কপি-পেস্ট করা হয়।
*   **রক্ষণাবেক্ষণে সমস্যা**: একটি ফিচার চেঞ্জ করতে গেলে অন্য জায়গায় বাগ বা এরর তৈরি হয়।

### প্যাটার্ন সহ কোড (Clean & Scalable) ✔️
*   **পরিচ্ছন্ন কাঠামো (Clean Structure)**: কার দায়িত্ব কী (ইউআই দেখানো নাকি ডাটা আনা) তা স্পষ্টভাবে ভাগ করা থাকে।
*   **রিইউজেবল ইউআই (Reusable UI)**: একবার তৈরি করা কার্ড বা বোতাম পুরো প্রজেক্টে যেকোনো স্থানে সহজে ব্যবহার করা যায়।
*   **সহজ স্কেলিং**: নতুন ফিচার বা ফোল্ডার যোগ করা একদম সোজা ও দ্রুত হয়।`,
        en: `## What are Component Patterns?
When starting with React, developers often cram state, logic, APIs, and rendering code into a single massive file. While this works for simple apps, large-scale codebases become impossible to maintain without structure.

**Component Patterns** are established software engineering techniques for structuring component architecture. They keep code modular, reusable, and easy to test.

---

## Why Patterns are Important

Let's look at the direct contrast:

### Code Without Patterns (Spaghetti Code) ❌
*   **High Coupling**: State logic, styling, API fetches, and UI markup are tangled in single monolithic files.
*   **Duplication**: Similar layouts are copied and pasted, leading to high maintenance costs.
*   **Fragility**: Small modifications to styling cascade into logic breaks and bugs.

### Code With Patterns (Clean & Scalable) ✔️
*   **Separation of Concerns**: Visual rendering rules are separated from business logic states.
*   **Reusability**: Core components like buttons and modal templates are shared across the system.
*   **Scalability**: New features are integrated cleanly without affecting existing production assets.`,
      },
    },
    {
      id: "presentational-container",
      title: {
        bn: "২. প্রেজেন্টেশনাল বনাম কন্টেইনার কম্পোনেন্ট (Presentational vs. Container Components)",
        en: "2. Presentational vs. Container Components",
      },
      content: {
        bn: `## Separation of Concerns (দায়িত্বের বিভাজন)
প্যাটার্নগুলোর মধ্যে সবচেয়ে জনপ্রিয় ও ঐতিহাসিক একটি ধারণাকে বলা হয় **Presentational vs. Container** প্যাটার্ন। এর মূল কথা হলো: **স্ক্রিনে ইউআই দেখানো এবং ব্যাকগ্রাউন্ডে লজিক চালনা—এই দুটির ফাইল আলাদা হবে।**

| প্রেজেন্টেশনাল (Presentational / Dumb) | কন্টেইনার (Container / Smart) |
| :--- | :--- |
| **কাজ**: কেবল স্ক্রিনে সুন্দরভাবে ইউআই প্রদর্শন করা। | **কাজ**: ব্যাকগ্রাউন্ড থেকে ডাটা আনা ও স্টেট ম্যানেজ করা। |
| **স্টেট**: এর নিজস্ব কোনো ব্যবসায়িক স্টেট থাকে না (কেবল রিড-অনলি প্রপস গ্রহণ করে)। | **স্টেট**: এর নিজস্ব স্টেট এবং লাইফসাইকেল মেথড থাকে। |
| **স্টাইল**: সিএসএস/Tailwind দিয়ে সাজানো থাকে। | **স্টাইল**: এর ভেতরে সরাসরি কোনো সিএসএস বা ভিজ্যুয়াল ট্যাগ থাকে না। |
| **উদাহরণ**: \`UserCard.tsx\` | **উদাহরণ**: \`UserListContainer.tsx\` |

---

## Visual Concept of Separation (কাজের চমৎকার বিভাজন)

\`\`\`
┌──────────────────────────────────────────┐
│          UserListContainer (Smart)       │  <-- Logic: fetches data, manages state
│  ┌────────────────────────────────────┐  │
│  │   UserListPresentational (Dumb)    │  │  <-- UI: receives users as prop, maps over it
│  │  ┌──────────────┐ ┌──────────────┐  │  │
│  │  │ UserCard     │ │ UserCard     │  │  │  <-- Reusable UI Block: renders single user
│  │  └──────────────┘ └──────────────┘  │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
\`\`\``,
        en: `## Separation of Concerns
One of the classic design patterns in React is dividing components into two categories: **Presentational (Dumb) Components** and **Container (Smart) Components**.

### Presentational Components (Dumb)
*   **Focus**: How things look.
*   **Data**: Receive data and callbacks exclusively via Props.
*   **State**: Rarely have state (except for transient visual states like dropdown toggle booleans).
*   **Dependencies**: Styled using raw CSS or Tailwind classes.

### Container Components (Smart)
*   **Focus**: How things work.
*   **Data**: Fetch data from APIs, connect to data stores, or manage complex states.
*   **Layout**: Return presentational components, passing fetched state down as props.
*   **Dependencies**: Have dependencies on state management tools, APIs, and hooks.`,
      },
    },
    {
      id: "reusable-composition",
      title: {
        bn: "৩. পুনর্ব্যবহারযোগ্য ডিজাইন ও কম্পোজিশন প্যাটার্ন (Reusable Design & Composition)",
        en: "3. Reusable Design & Composition Pattern",
      },
      content: {
        bn: `## Reusable Component Design (পুনর্ব্যবহারযোগ্য ডিজাইন)
একটি প্রফেশনাল প্রজেক্টের গোড়াপত্তন হয় তার **Component Library** বা **Design System** দিয়ে। আমরা শুরুতেই কিছু অত্যন্ত কমন এলিমেন্ট বানিয়ে ফেলি যা সব পেজে লাগে:
*   **Button**: কালার ভ্যারিয়েন্ট (Primary, Secondary), ডিজেবল অবস্থা, এবং সাইজ হ্যান্ডেল করে।
*   **Card**: কন্টেন্ট র‍্যাপ করার সুন্দর শ্যাডো ও প্যাডিং যুক্ত ফ্রেম।
*   **Modal**: ডায়ালগ বক্সের সাধারণ আউটলাইন।

---

## Composition Pattern (কম্পোজিশন প্যাটার্ন)
অনেকে চাইল্ড কম্পোনেন্টে কন্টেন্ট দেখানোর জন্য প্রপস দিয়ে টেক্সট পাঠান। কিন্তু ধরুন আমরা বাটনের ভেতর শুধু টেক্সট না, একটি আইকন এবং একটি স্পিনারও দেখাতে চাই। তখন প্রপস দিয়ে এগুলো পাঠানো খুবই জটিল হয়ে যায়।

রিঅ্যাক্ট আমাদের **Composition (কম্পোজিশন)** সুবিধা দেয়, যেখানে আমরা একটি কম্পোনেন্টের ভেতরে অন্য যেকোনো এইচটিএমএল বা কম্পোনেন্ট সরাসরি ঢুকিয়ে দিতে পারি। এর জন্য আমরা বিশেষ প্রপ **\`children\`** ব্যবহার করি।

### Composition Example (কম্পোজিশনের উদাহরণ):
\`\`\`jsx
// কন্টেইনার কার্ড কম্পোনেন্ট
function Card(props) {
  return (
    <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
      {props.children} {/* এর ভেতর যেকোনো কন্টেন্ট স্বয়ংক্রিয়ভাবে ঢুকে যাবে */}
    </div>
  );
}

// কার্ডের ব্যবহার
<Card>
  <h2 className="text-xl font-bold">নতুন বইয়ের নাম</h2>
  <p className="text-slate-500">বিজ্ঞানপ্রো একাডেমি আপনার পাশে।</p>
  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">পড়ুন</button>
</Card>
\`\`\``,
        en: `## Reusable Component Design
SaaS engineering teams build software starting with atomic component primitives:
*   \`Button\`: Configures size sizes, disabled states, and color variations.
*   \`Card\`: Standardizes layout card borders, padding, and drop-shadows.
*   \`Modal\`: Provides a reusable overlay container.

---

## Composition Pattern
Instead of passing complex layouts through attributes (like string props), React allows us to wrap markup dynamically using **Composition**. This is powered by React's native **\`children\`** prop.

### Code Pattern:
\`\`\`jsx
// Reusable Layout Container
function Panel(props) {
  return (
    <section className="bg-slate-50 p-4 rounded-lg">
      <div className="text-sm font-semibold text-slate-400">{props.title}</div>
      <div className="mt-2">{props.children}</div>
    </section>
  );
}

// Nested usage
<Panel title="Quick Stats">
  <div className="flex gap-2">
    <span>Visits: 1,200</span>
    <span className="text-emerald-500">+12%</span>
  </div>
</Panel>
\`\`\``,
      },
    },
    {
      id: "prop-drilling-project-structure",
      title: {
        bn: "৪. প্রপ ড্রিলিং সমস্যা ও রিয়েল প্রজেক্ট ফোল্ডার কাঠামো (Prop Drilling & Folder Structure)",
        en: "4. Prop Drilling & Real Project Folder Structure",
      },
      content: {
        bn: `## Prop Drilling Issue (প্রপ ড্রিলিংয়ের সাধারণ ধারণা)
রিঅ্যাক্টে ডেটা সর্বদা উপর থেকে নিচে প্রবাহিত হয় (Parent ➔ Child)। কিন্তু ধরুন, একদম রুট কম্পোনেন্ট \`App\`-এ থাকা \`user\` ডেটাটি আমাদের ৫ ধাপ নিচে থাকা \`ProfileBadge\` কম্পোনেন্টে দেখাতে হবে।

**Prop Drilling** হলো এমন একটি অবস্থা যেখানে মধ্যবর্তী ৩টি কম্পোনেন্টের (যারা নিজেরা ওই ডেটা ব্যবহার করে না) ওপর দিয়ে জোর করে প্রপস পাস করে নিচে পাঠাতে হয়।
*   \`App\` ➔ \`Dashboard\` ➔ \`Sidebar\` ➔ \`UserNav\` ➔ \`ProfileBadge\`
*   **সমস্যা**: এটি কোডকে নোংরা করে ফেলে। (ভবিষ্যতে আমরা এটি সমাধান করতে Context API বা State Management ব্যবহার করা শিখবো)।

---

## Real Project Folder Structure (আসল প্রজেক্টের ফোল্ডার কাঠামো)
বাস্তব ইন্ডাস্ট্রি প্রজেক্টে কোড সাজানোর স্ট্যান্ডার্ড ফোল্ডার কাঠামো নিচে দেখানো হলো:

\`\`\`text
src/
├── components/          # পুনর্ব্যবহারযোগ্য গ্লোবাল ইউআই কম্পোনেন্টস
│   ├── ui/              # ক্ষুদ্র এলিমেন্ট (Button, Badge, Input)
│   └── layout/          # বড় ফ্রেম (Navbar, Sidebar, Footer)
├── pages/ or app/       # পেজ রাউট ও কন্টেইনার ভিউ
├── hooks/               # কাস্টম রিঅ্যাক্ট হুকস (e.g. useAuth, useLocalStorage)
├── utils/               # সাধারণ হেল্পার জাভাস্ক্রিপ্ট ফাংশন (e.g. formatNumber)
├── services/            # এপিআই কল বা ডাটাবেজ ইন্টিগ্রেশন কোড
├── context/             # গ্লোবাল স্টেট ম্যানেজমেন্ট প্রোভাইডার
└── types/               # টাইপস্ক্রিপ্ট টাইপ ডেফিনিশন ফাইল
\`\`\`

এই পরিচ্ছন্ন ডিরেক্টরি কাঠামোর ফলে হাজার ফাইলের প্রজেক্টেও কয়েক সেকেন্ডে প্রয়োজনীয় কোডটি খুঁজে পাওয়া যায়।`,
        en: `## Prop Drilling Issue
React propagates variables unidirectionally downwards. When deeply nested child components require access to root states, developer pass props through intermediate nodes that have no use for the data.
*   \`App (userState)\` ➔ \`DashboardLayout\` ➔ \`Sidebar\` ➔ \`NavigationPanel\` ➔ \`ProfileBadge\`
*   **Issue**: Modifying property schemas breaks intermediate nodes. (We mitigate this using React Context API or Redux store providers later).

---

## Real Project Folder Structure
A professional production React directory tree is partitioned by responsibility:

\`\`\`text
src/
├── components/          # Reusable shared UI assets
│   ├── ui/              # Low-level atoms (Button, Badge, Input)
│   └── layout/          # Layout grids (Navbar, Sidebar, Footer)
├── pages/ or app/       # Page route controllers / containers
├── hooks/               # Shared custom React hooks (useFetch, useAuth)
├── utils/               # Pure helper helper scripts (dateFormatter)
├── services/            # API client communication modules
├── context/             # Context state store wrappers
└── types/               # Global TypeScript definitions
\`\`\`

This standard separates files by domain boundaries, making larger codebases easily navigable.`,
      },
    },
    {
      id: "analogy-thinking-mistakes",
      title: {
        bn: "৫. ডিজাইন থিংকিং, সাধারণ ভুল এবং লেগো অ্যানালজি (Thinking & Analogies)",
        en: "5. Design Thinking, Common Mistakes & LEGO Analogy",
      },
      content: {
        bn: `## Design Thinking (ডিজাইন থিংকিং)
সিনিয়র ডেভেলপাররা কোনো ইউআই বা ফিজমা ডিজাইন দেখলেই সরাসরি কোড লেখা শুরু করেন না। তারা ৩টি ধাপে চিন্তা করেন:
1.  **Block Isolation (ব্লক চিহ্নিতকরণ)**: ইন্টারফেসটিকে ছোট ছোট আয়তক্ষেত্র বা ইউআই ব্লকে ভাগ করে নেওয়া।
2.  **Reusability Check (পুনর্ব্যবহারযোগ্যতা চেক)**: কোন কোন ব্লক প্রজেক্টের অন্য পেজেও মিলছে তা খুঁজে বের করা।
3.  **Hierarchy Layout (শ্রেণীবিন্যাস)**: কম্পোনেন্ট ট্রি খসড়া করে নেওয়া (কোনটি কার ভেতর বসবে)।

---

## Common Mistakes (সাধারণ ভুলসমূহ)
*   **Huge Monolith (বিশাল ফাইল)**: পুরো পেজের ১০০০ লাইন একটি ফাইলে রাখা।
*   **Zero Reuse (কোনো রিইউজেবিলিটি না রাখা)**: প্রতি বাটনের জন্য সিএসএস ক্লাস কপি পেস্ট করা।
*   **Tangled Logic & UI (লজিক ও ইউআই জগাখিচুড়ি)**: ডাটাবেজ ক্যোয়ারী বা এপিআই ফেচিং কোড সরাসরি বাটন রেন্ডারিংয়ের পাশে রাখা।

---

## The LEGO Analogy (লেগো ইটের রূপক)
রিঅ্যাক্ট আর্কিটেকচার হলো ঠিক একটি **LEGO রাজপ্রাসাদ** তৈরি করার মতো:
*   **ক্ষুদ্র ব্লক (Atoms)**: প্লাস্টিকের এক একটি লাল বা হলুদ লেগো ইট (আমাদের \`Button\` বা \`Input\`)।
*   **কাঠামো নির্দেশিকা (Component Patterns)**: প্রাসাদটি যাতে ধসে না পড়ে, তার জন্য লেগোর একটি গাইড ম্যানুয়াল থাকে।
*   **ভুল সংযোগ (Mistakes)**: আপনি যদি টাওয়ারের ওপর ছাদ না বসিয়ে কাদার সাথে ইট মিশিয়ে ফেলেন, প্রাসাদটি দুর্বল হবে। একইভাবে প্যাটার্ন অনুসরণ না করলে কোড ধসে পড়বে।`,
        en: `## Design Thinking
Senior React engineers approach UI mocks in three sequential phases:
1.  **Deconstruction**: Partitioning UI wireframes into distinct geometric boxes.
2.  **Abstraction Identification**: Highlighting blocks that repeat across layouts.
3.  **Dependency Mapping**: Drawing a hierarchy tree before opening code editors.

---

## Common Mistakes
*   **The Mega Component**: Writing massive JSX sheets lacking modular boundaries.
*   **Copy-Paste Layouts**: Re-styling borders and colors repeatedly instead of parameterizing props.
*   **Tangled Dependencies**: Inserting inline API fetches directly inside visual presentation triggers, blocking unit tests.

---

## The LEGO Analogy
Building structured React apps is like building a **LEGO model**:
*   **Atoms**: Standard plastic LEGO studs (individual primitive \`Button\` components).
*   **Patterns Manual**: The instruction manual outlining layout guidelines (Component Patterns).
*   **Structural Integrity**: Following the manual yields a stable, lightweight, and robust construction. Bypassing guidelines results in unstable structures.`,
      },
      codeBlock: {
        fileName: "UserManagement.jsx",
        language: "jsx",
        code: `import React, { useState, useEffect } from 'react';

// ==========================================
// ১. PRESENTATIONAL (DUMB) COMPONENT: UI ONLY
// ==========================================
function UserListUI({ users, loading, onReload }) {
  if (loading) return <div className="p-4 text-slate-500 text-center animate-pulse">ডাটা লোড হচ্ছে...</div>;
  
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-slate-800">অ্যাক্টিভ ইউজার লিস্ট</h3>
        <button 
          onClick={onReload}
          className="px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700 transition"
        >
          রিফ্রেশ
        </button>
      </div>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">{user.name}</span>
            <span className="px-2 py-0.5 text-xs bg-emerald-100 text-emerald-700 rounded-full">{user.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==========================================
// ২. CONTAINER (SMART) COMPONENT: HANDLES LOGIC
// ==========================================
export default function UserListContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    setLoading(true);
    // এপিআই কলের অ্যাকশন মক করা হলো
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Tanvir Rahman", role: "Admin" },
        { id: 2, name: "Maliha Chowdhury", role: "Editor" },
        { id: 3, name: "Sajid Hasan", role: "Subscriber" }
      ]);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // কন্টেইনার প্রেজেন্টেশনাল কম্পোনেন্ট রিটার্ন করে ডাটা ও অ্যাকশন পাস করে দিচ্ছে
  return (
    <UserListUI 
      users={users} 
      loading={loading} 
      onReload={fetchUsers} 
    />
  );
}`,
        explanations: [
          {
            line: 6,
            text: {
              bn: "UserListUI একটি প্রেজেন্টেশনাল কম্পোনেন্ট। এর কোনো নিজস্ব স্টেট নেই, এটি কেবল প্রপস থেকে ডাটা নিয়ে দেখাচ্ছে।",
              en: "UserListUI is stateless. It expects data arrays and handlers purely from incoming props.",
            },
          },
          {
            line: 35,
            text: {
              bn: "UserListContainer হলো কন্টেইনার কম্পোনেন্ট। এটি এপিআই ফেচিং ও স্টেট পরিবর্তন নিয়ন্ত্রণ করে।",
              en: "UserListContainer manages React hooks, state variables, and network side-effects.",
            },
          },
          {
            line: 58,
            text: {
              bn: "কন্টেইনারটি ইউআই কম্পোনেন্ট রিটার্ন করে এবং প্রপস ডাউনে স্টেট ডেটা ও রিলোড ইভেন্ট পাস করে দেয়।",
              en: "The container bridges logic to visual rendering by passing hooks outputs down via props attributes.",
            },
          },
        ],
      },
    },
    {
      id: "practice-patterns-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অ্যাসাইনমেন্ট সম্পন্ন করুন। এটি আপনার প্রজেক্ট আর্কিটেকচার এবং সিনিয়র ডেভেলপার চিন্তাপদ্ধতির ভিত্তি মজবুত করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your knowledge in modular layout designs, clean directory management, and concern separations before stepping into Next.js.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "কম্পোনেন্ট প্যাটার্ন মূলত কোডবেসের স্থায়িত্ব বাড়ানোর জন্য ব্যবহৃত হয়, যাতে প্রজেক্ট বড় হলেও কোড পরিষ্কার থাকে।",
          en: "Component patterns exist to shield codebases from architectural decay, keeping layouts maintainable over time.",
        },
        whyWorks: {
          bn: "এটি ডাটা ও ভিউ আলাদা রাখার কারণে রিঅ্যাক্টের ভার্চুয়াল ডম আরও দ্রুত ডিসিশন নিতে পারে কোন ফাইলটি আপডেট করা দরকার।",
          en: "Separating visual concerns from data logic helps teams write decoupled unit tests, increasing speed.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা সবসময় প্রজেক্টের শুরুতে 'Component Inventory' ডিজাইন করেন এবং প্রপ ড্রিলিং এড়াতে Context API এর সাহায্য নেন।",
          en: "Seniors map out abstract primitives (Buttons, Inputs) first and set up Context stores to prevent prop drilling issues.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় ভুল হলো লজিক আর ইউআই একসাথে মিশিয়ে ফেলা, যার ফলে ওই কার্ড অন্য কোথাও ব্যবহার করা অসম্ভব হয়ে পড়ে।",
          en: "A common mistake is embedding hardcoded endpoints inside UI cards, disabling the card's reusability.",
        },
        debugging: {
          bn: "প্রজেক্টের ফোল্ডার রুলস ঠিক রাখতে এবং ভুল জায়গায় ফাইল ক্রিয়েট করা বন্ধ করতে লিন্টিং রুলস বা ESLint কনফিগ ব্যবহার করুন।",
          en: "Use compiler strict directories and ESLint rule constraints to enforce consistent folder structures across teams.",
        },
        performance: {
          bn: "ইউআই কম্পোনেন্টগুলোকে লাইটওয়েট রাখার মাধ্যমে রি-রেন্ডারিং অপ্টিমাইজড থাকে ও ব্রাউজার মেমরি সাশ্রয় হয়।",
          en: "Keep presentational modules lightweight to prevent expensive logic recalculations on rendering passes.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "pat-q1",
      question: {
        bn: "রিঅ্যাক্ট প্রজেক্টে 'কম্পোনেন্ট প্যাটার্ন' ব্যবহারের মূল উদ্দেশ্য কী?",
        en: "What is the primary purpose of component patterns in React?",
      },
      options: [
        {
          bn: "ডাটাবেজ কানেকশন স্পীড বাড়ানো",
          en: "Increasing database connection speeds",
        },
        {
          bn: "কোডকে পরিষ্কার, মডিউলার, স্কেলেবল ও পুনর্ব্যবহারযোগ্য রাখা",
          en: "Keeping code clean, modular, scalable, and reusable",
        },
        {
          bn: "এইচটিএমএল ফাইলের সাইজ কমানো",
          en: "Minimizing raw HTML file sizes",
        },
        {
          bn: "ব্রাউজার কুকিজ ক্যাশে ক্লিয়ার করা",
          en: "Clearing browser cookies and cache files",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কম্পোনেন্ট প্যাটার্ন আমাদের বড় কোডবেসগুলোকে সুসংগঠিত, পঠনযোগ্য এবং সহজে রক্ষণাবেক্ষণযোগ্য রাখতে সাহায্য করে।",
        en: "Patterns organize structures to maintain scalability and simplify teamwork.",
      },
    },
    {
      id: "pat-q2",
      question: {
        bn: "প্রেজেন্টেশনাল (Presentational) কম্পোনেন্টের মূল দায়িত্ব কী?",
        en: "What is the main responsibility of a Presentational Component?",
      },
      options: [
        {
          bn: "এপিআই কল পরিচালনা করা",
          en: "Handling network API fetching routines",
        },
        {
          bn: "প্রপস গ্রহণ করে ইউজার ইন্টারফেস প্রদর্শন করা (How things look)",
          en: "Receiving props and rendering the user interface (How things look)",
        },
        { bn: "ডাটাবেজে নতুন ইউজার সেভ করা", en: "Saving database profiles" },
        {
          bn: "গ্লোবাল রাউটিং ম্যানেজ করা",
          en: "Managing global router redirections",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "প্রেজেন্টেশনাল কম্পোনেন্ট মূলত 'Dumb' কম্পোনেন্ট নামে পরিচিত, কারণ এদের কাজ কেবল প্রপস থেকে ডাটা নিয়ে স্ক্রিনে রেন্ডার করা।",
        en: "Presentational components focus purely on visual layouts, relying on props.",
      },
    },
    {
      id: "pat-q3",
      question: {
        bn: "কন্টেইনার (Container) কম্পোনেন্টের বৈশিষ্ট্য কোনটি?",
        en: "Which is a characteristic of a Container Component?",
      },
      options: [
        {
          bn: "এর ভেতরে সরাসরি কোনো সিএসএস বা স্টাইল ফাইল থাকে না",
          en: "It contains no styling or CSS properties directly",
        },
        {
          bn: "এটি ডাটা ফেচিং, লজিক ও স্টেট ম্যানেজ করে (How things work)",
          en: "It manages state, side-effects, and data queries (How things work)",
        },
        {
          bn: "এটি প্রেজেন্টেশনাল কম্পোনেন্টকে রিটার্ন করে",
          en: "It returns and renders presentational components",
        },
        { bn: "উপরের সবগুলোই সঠিক", en: "All of the above" },
      ],
      correctAnswerIndex: 3,
      explanation: {
        bn: "কন্টেইনার কম্পোনেন্ট কোনো ইউআই স্টাইলিং ছাড়া কেবল লজিক, ডাটা ফেচ ও স্টেট ম্যানেজমেন্টের যাবতীয় কাজ সামলায়।",
        en: "Container components orchestrate hooks, state variables, and pass data down.",
      },
    },
    {
      id: "pat-q4",
      question: {
        bn: "কম্পোজিশন প্যাটার্নে (Composition Pattern) এলিমেন্ট নেস্টিং করার জন্য কোন বিশেষ প্রপটি ব্যবহৃত হয়?",
        en: "Which special prop is used for nesting elements in the Composition Pattern?",
      },
      options: [
        { bn: "props.data", en: "props.data" },
        { bn: "props.children", en: "props.children" },
        { bn: "props.nested", en: "props.nested" },
        { bn: "props.elements", en: "props.elements" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রিঅ্যাক্ট জেএসএক্স-এর ভেতরের কন্টেন্টকে চাইল্ড কম্পোনেন্টে রিসিভ করার জন্য বিল্ট-ইন 'children' প্রপ ব্যবহৃত হয়।",
        en: "React automatically maps nested child tags inside the props.children parameter.",
      },
    },
    {
      id: "pat-q5",
      question: {
        bn: "'Prop Drilling' বলতে কোন পরিস্থিতিকে বোঝানো হয়?",
        en: "What does 'Prop Drilling' refer to in React?",
      },
      options: [
        {
          bn: "ডাটাবেজ স্ক্রিপ্ট রান করা",
          en: "Running database seed scripts",
        },
        {
          bn: "প্যারেন্ট থেকে অনেক চাইল্ড স্তরের মধ্য দিয়ে জোর করে প্রপস পাস করে নিচে পাঠানো",
          en: "Passing props down through multiple intermediate components that do not need them",
        },
        {
          bn: "বাটন ক্লিক ইভেন্ট ব্লক করা",
          en: "Blocking button click event handlers",
        },
        {
          bn: "সিএসএস ফাইল সাইজ কমানো",
          en: "Compressing stylesheet configurations",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "যখন কোনো স্টেটকে অনেকগুলো চাইল্ড লেয়ার পার করে নিচে পাঠাতে হয়, অথচ মাঝের লেয়ারগুলো তা ব্যবহার করে না, তাকে প্রপ ড্রিলিং বলে।",
        en: "Prop drilling is the process of passing props through intermediate layers to reach deep child nodes.",
      },
    },
  ],
  practice: [
    {
      bn: "১. একটি রিইউজেবল Button কম্পোনেন্ট ডিজাইন করার রূপরেখা তৈরি করুন যা প্রপস থেকে ভ্যারিয়েন্ট ('primary' বা 'secondary') ও সাইজ রিড করে স্টাইল সেট করবে।",
      en: "1. Design a reusable Button component processing properties like custom sizes and style variants (primary/secondary).",
    },
    {
      bn: "২. একটি স্ট্যান্ডার্ড ব্লগ পেজকে কম্পোজিশন প্যাটার্ন ব্যবহার করে কীভাবে ক্ষুদ্র কম্পোনেন্টে বিভক্ত করবেন তার ট্রি লেআউট লিখুন।",
      en: "2. Outline a component tree structure partitioning a blog interface using Composition layouts.",
    },
    {
      bn: "৩. কন্টেইনার কম্পোনেন্ট ব্যবহারের প্রধান সুবিধা কী যখন আমরা একাধিক ভিন্ন ইউআই ভিউতে একই ডাটা দেখাতে চাই?",
      en: "3. State the architectural benefit of Containers when sharing database fetching routines across multiple UI representations.",
    },
  ],
  assignment: {
    title: {
      bn: "ড্যাশবোর্ড লেআউট আর্কিটেকচার ডিজাইন",
      en: "SaaS Dashboard Layout Architecture",
    },
    description: {
      bn: "একটি প্রফেশনাল ড্যাশবোর্ড পেজের কাঠামো চিন্তা করুন। কম্পোজিশন প্যাটার্ন ও চিলড্রেন প্রপ ব্যবহার করে একটি 'DashboardLayout' কম্পোনেন্ট তৈরি করুন যা একটি Sidebar এবং মূল কন্টেন্ট এরিয়া (children) প্রদর্শন করবে।",
      en: "Build a modular SaaS DashboardLayout component utilizing composition. The component should render a Sidebar column alongside a primary content container utilizing the React 'children' prop.",
    },
    starterCode: `// SaaS Dashboard Layout Starter
import React from 'react';

// ১. সাইডবার চাইল্ড কম্পোনেন্ট
function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">বিজ্ঞানপ্রো একাডেমী</h2>
      <nav className="space-y-2">
        <a href="#" className="block hover:text-indigo-400">ড্যাশবোর্ড</a>
        <a href="#" className="block hover:text-indigo-400">কোর্সেস</a>
        <a href="#" className="block hover:text-indigo-400">সেটিংস</a>
      </nav>
    </aside>
  );
}

// ২. মূল লেআউট কম্পোনেন্ট (কম্পোজিশন ব্যবহার করুন)
function DashboardLayout(props) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      {/* কোড লিখুন: চিলড্রেন কন্টেন্ট রেন্ডার করার মেইন এরিয়া */}
      
    </div>
  );
}`,
    solution: {
      code: `// SaaS Dashboard Layout Solution
import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-6">বিজ্ঞানপ্রো একাডেমী</h2>
      <nav className="space-y-2 flex-1">
        <a href="#" className="block p-2 rounded hover:bg-slate-700 transition">ড্যাশবোর্ড</a>
        <a href="#" className="block p-2 rounded hover:bg-slate-700 transition">কোর্সেস</a>
        <a href="#" className="block p-2 rounded hover:bg-slate-700 transition">সেটিংস</a>
      </nav>
    </aside>
  );
}

export default function DashboardLayout(props) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* সাইডবার লেআউট */}
      <Sidebar />
      
      {/* ডাইনামিক কন্টেন্ট এরিয়া (children) */}
      <main className="flex-1 p-8">
        <header className="mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <h1 className="text-2xl font-bold text-slate-800">প্যানেল ড্যাশবোর্ড</h1>
          <span className="text-sm text-slate-500">স্বাগতম, ইউজার!</span>
        </header>
        
        {/* মেইন কন্টেন্ট রেন্ডার */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          {props.children}
        </div>
      </main>
    </div>
  );
}`,
      explanation: {
        bn: "দুর্দান্ত আর্কিটেকচার ডিজাইন! সাইডবার এবং মেইন চিলড্রেন কন্টেন্টকে আলাদা ফাইলে সেপারেট করে কম্পোজিশন লেআউট বিল্ড করার প্রসেসটি শতভাগ সঠিক হয়েছে।",
        en: "Correct implementation! Parameterizing layout grids while separating navigation structures preserves codebase flexibility.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "রিঅ্যাক্ট প্রজেক্টের স্কেলেবিলিটি বাড়াতে কন্টেইনার ও প্রেজেন্টেশনাল কম্পোনেন্ট আলাদা করার মূল কারণ কী?",
        en: "Why split Container and Presentational components for React project scalability?",
      },
      answer: {
        bn: "কন্টেইনার ও প্রেজেন্টেশনাল কম্পোনেন্ট আলাদা করার মূল কারণ ৩টি:\n১. লজিক রিইউজেবিলিটি (Logic Reusability): আমরা একই এপিআই ফেচিং লজিক ব্যবহার করে মোবাইল রেস্পন্সিভ ও ডেস্কটপ ভিউ নামের দুটি আলাদা ইউআই-তে ডেটা পাস করতে পারি।\n২. টেস্ট করার সুবিধা (Testability): ডাম প্রেজেন্টেশনাল কম্পোনেন্টগুলোকে সহজে ইউনিট টেস্ট করা যায়, কারণ এরা কেবল প্রপসের ওপর নির্ভরশীল থাকে, কোনো সার্ভার কানেকশন লাগে না।\n৩. কোড কোলাবোরেশন (Collaboration): ডিজাইনার বা জুনিয়র ডেভেলপাররা কোনো ভয় ছাড়াই ইউআই এডিট করতে পারেন, কারণ ডাটা লজিক সম্পূর্ণ আলাদা ফাইলে প্রটেক্টেড থাকে।",
        en: "Decoupling design sheets from state hooks improves engineering speed in three ways:\n1. Reusability: You can mount multiple visual presentational mockups targeting the same business state container.\n2. Isolated Unit Testing: Stateless visual cards can be tested easily by mocking simple props arrays, eliminating database Mocking overhead.\n3. Team Parallelism: UI/UX engineers can work on styling components files concurrently without disrupting API endpoints setups handled by logic engineers.",
      },
    },
    {
      question: {
        bn: "প্রপ ড্রিলিং (Prop Drilling) কী এবং বড় প্রজেক্টে এটি কীভাবে কোডবেস নষ্ট করে? এটি দূর করার আধুনিক উপায় কী?",
        en: "What is Prop Drilling, how does it damage clean codebases, and how is it solved in production?",
      },
      answer: {
        bn: "প্রপ ড্রিলিং হলো প্যারেন্ট স্টেটকে তার চাইল্ডে পৌঁছানোর জন্য অনাকাঙ্ক্ষিতভাবে ৪/৫টি মধ্যবর্তী কম্পোনেন্টের ওপর দিয়ে প্রপস আকারে পাস করে নিচে পাঠানো, যা নিজেরা ওই ডেটা ব্যবহার করে না।\n১. কোডবেস নষ্ট করার কারণ: কোনো প্রপের নাম চেঞ্জ করতে হলে সব মধ্যবর্তী ফাইলের কোড এডিট করতে হয়, যা কোডবেসকে ভঙ্গুর ও রি-ফ্যাক্টর করা কঠিন করে তোলে।\n২. দূর করার আধুনিক উপায়: রিঅ্যাক্ট Context API অথবা গ্লোবাল স্টেট ম্যানেজমেন্ট টুলস (যেমন Redux Toolkit, Zustand) ব্যবহার করা। এর ফলে গভীর চাইল্ড কম্পোনেন্টটি সরাসরি গ্লোবাল স্টোর থেকে ডাটা রিসিভ করতে পারে, মাঝের নোডগুলোতে প্রপস পাস করতে হয় না।",
        en: "Prop drilling is passing properties down through nested layers that have no functional interest in the arguments.\n1. Structural damage: It creates tight coupling. Modifying a prop schema forces edits across every intermediate wrapper, rendering codebase refactoring highly error-prone.\n2. Solutions: We resolve this using state providers like the React Context API or third-party stores (Zustand, Redux). Deeply nested components consume context directly from stores without intermediate pass-throughs.",
      },
    },
  ],
};
