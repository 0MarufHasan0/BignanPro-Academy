export const chapter30Content = {
  id: "chapter-30",
  number: 30,
  title: {
    bn: "অধ্যায় ৩০: সম্পূর্ণ প্রজেক্ট বিল্ড — বাস্তব নেক্সট জেএস ওয়েবসাইট",
    en: "Chapter 30: Full Project Build (Real Next.js Website)",
  },
  description: {
    bn: "নেক্সট জেএস, রিঅ্যাক্ট এবং টেইলউইন্ড সিএসএস একসাথে ব্যবহার করে একটি সম্পূর্ণ প্রোডাকশন-রেডি ওয়েবসাইট তৈরির ধাপে ধাপে গাইডলাইন।",
    en: "A step-by-step guide to building a complete, production-ready website by combining React, Next.js, and Tailwind CSS.",
  },
  difficulty: "advanced",
  readingTime: 15,
  objectives: [
    {
      bn: "পূর্বে শেখা রিঅ্যাক্ট, নেক্সট জেএস এবং টেইলউইন্ড সিএসএস ধারণাগুলো প্রজেক্টে একীভূত করা।",
      en: "Integrate React, Next.js App Router, and Tailwind CSS concepts into a unified project.",
    },
    {
      bn: "নেক্সট জেএস লেআউট এবং অ্যাক্টিভ স্টেট টগল সিস্টেম বিশিষ্ট নেভিগেশন বার তৈরি করা।",
      en: "Configure Next.js Layouts and construct a state-driven responsive Navigation Bar.",
    },
    {
      bn: "হিরো সেকশন এবং ডাইনামিক ডেটা-ড্রিভেন কার্ড গ্রিড তৈরি করে হোমপেজ অ্যাসেম্বল করা।",
      en: "Assemble the home page utilizing a Hero section and a data-driven responsive Card grid layout.",
    },
    {
      bn: "মোবাইল-ফার্স্ট ডিজাইনের মাধ্যমে সম্পূর্ণ প্রজেক্টটিকে সকল স্ক্রিনের উপযোগী করে তোলা।",
      en: "Ensure full layout responsiveness across all screen sizes using mobile-first styles.",
    },
  ],
  sections: [
    {
      id: "project-overview",
      title: {
        bn: "১. প্রজেক্ট পরিচিতি ও ফোল্ডার কাঠামো (Project Overview & Folder Structure)",
        en: "1. Project Overview & Folder Structure",
      },
      content: {
        bn: `## Project Overview (প্রজেক্ট পরিচিতি)
আমরা যখন প্রোগ্রামিংয়ের বিভিন্ন বেসিক টেমপ্লেট ও লাইব্রেরি শিখে ফেলি, তখন পরবর্তী বড় চ্যালেঞ্জটি হলো সবকিছুকে একসাথে যুক্ত করে একটি পূর্ণাঙ্গ রানিং প্রজেক্ট তৈরি করা।

এই অধ্যায়ে আমরা একটি সম্পূর্ণ রেসপন্সিভ লার্নিং প্ল্যাটফর্ম ওয়েবসাইট তৈরি করবো, যার নাম **Modern Learning Dashboard UI**। আমাদের প্রজেক্টে নিচের ফিচারগুলো থাকবে:
*   **Stateful Navbar**: লোগো, অ্যাক্টিভ লিংক হাইলাইট এবং মোবাইল টগল মেনু।
*   **Hero Section**: আকর্ষণীয় বড় হেডিং, ডাইনামিক ও পজিশনিং ব্যাকগ্রাউন্ড এবং একটি ফ্লোটিং স্টুডেন্ট কার্ড।
*   **Card Grid**: লুপ বা ম্যাপ চালনা করে তৈরি করা রেসপন্সিভ কোর্সের কার্ডের গ্রিড (Hover effects সহ)।
*   **Subscription Form**: কাস্টম ভ্যালিডেশন স্টেট ও ইমেইল ইনপুট চেক সম্বলিত সাবস্ক্রিপশন বক্স।

---

## Directory Structure (ডিরেক্টরি কাঠামো)
একটি আধুনিক নেক্সট জেএস প্রজেক্টের ফোল্ডার স্ট্রাকচার কেমন হয়, তা নিচে স্পষ্টভাবে দেখানো হলো:

\`\`\`text
app/
├── layout.jsx            # মেইন লেআউট (এইচটিএমএল স্ট্রাকচার, হেডার ও ফুটার)
├── page.jsx              # হোমপেজ (হিরো, কার্ড ও ফর্মের মিলনস্থল)
└── components/           # পুনর্ব্যবহারযোগ্য উইজেটস ফোল্ডার
    ├── Navbar.jsx        # মেনু বার কম্পোনেন্ট
    ├── HeroSection.jsx   # হিরো সেকশন কম্পোনেন্ট
    ├── CardSection.jsx   # কার্ড গ্রিড কম্পোনেন্ট
    └── FormSection.jsx   # সাবস্ক্রিপশন ফর্ম কম্পোনেন্ট
\`\`\``,
        en: `## Project Overview
The ultimate test of a software engineer is combining modular libraries, styles, and tools into a single, fully functioning product.

In this chapter, we will build a complete, responsive education homepage website named **Modern Learning Dashboard UI**. The project integrates:
*   **Stateful Navbar**: Logo, dynamic active navigation link highlights, and mobile menu toggles.
*   **Hero Section**: High-impact typography, absolute background blobs, and floating stats cards.
*   **Card Grid**: Dynamic layout mapped from course dataset arrays with responsive hover animations.
*   **Subscription Form**: Centered newsletter form with custom React validation and success states.

---

## Directory Structure
Here is how a clean, professional Next.js App Router project directory is laid out:

\`\`\`text
app/
├── layout.jsx            # Core layout wrapper (Navbar & Footer shared wrapper)
├── page.jsx              # Homepage entry viewport
└── components/           # Reusable presentational components
    ├── Navbar.jsx        # Sticky navigation bar
    ├── HeroSection.jsx   # Impact banner
    ├── CardSection.jsx   # Product cards grid
    └── FormSection.jsx   # Newsletter input block
\`\`\``,
      },
    },
    {
      id: "layout-navbar",
      title: {
        bn: "২. লেআউট সিস্টেম ও রেসপন্সিভ নেভিগেশন বার (Layout & Stateful Navbar)",
        en: "2. Layout System & Stateful Navbar Component",
      },
      content: {
        bn: `## Layout System (লেআউট কী ও কেন?)
নেক্সট জেএস-এ 'layout.jsx' হলো একটি কমন ফ্রেম বা কাঠামো যা সাইটের প্রতিটি পেজের চারিদিকে স্বয়ংক্রিয়ভাবে মোড়ানো থাকে। এটি নেভিগেশন বার এবং ফুটারকে লেআউটে একবার বসিয়ে দিলে ট্রানজিশন স্মুথ রাখে।

---

## Coding a Responsive Navbar (রেসপন্সিভ নেভিগেশন বার)
নিচে একটি টেইলউইন্ড ও রিয়্যাক্ট স্টেট দিয়ে তৈরি অ্যাক্টিভ মেনু লিংক সম্বলিত নেভিগেশন বারের কোড ধারণা দেওয়া হলো:

\`\`\`jsx
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'Courses', 'About', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* লোগো */}
        <span className="text-xl font-extrabold text-indigo-650">BignanPro.</span>
        
        {/* ডেস্কটপ লিংকস (অ্যাক্টিভ স্টেট চেক সহ) */}
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          {menuItems.map(item => (
            <button 
              key={item} 
              onClick={() => setActive(item)}
              className={active === item ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
\`\`\`
*ক্লু: 'sticky top-0' স্ক্রল করার সময় মেনুটিকে ওপরে আটকে রাখে, এবং 'bg-white/80 backdrop-blur-md' চমৎকার গ্লাস মরফিজম লুক দেয়!*`,
        en: `## Layout System
In Next.js, 'layout.jsx' acts as the shell wrapping all pages inside a route. Placing shared elements like the Header inside the layout avoids redundant redraws.

---

## Coding a Responsive Navbar
Here is the code blueprint for a sticky, glassmorphic navigation bar using React state hooks to highlight active menu elements:

\`\`\`jsx
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'Courses', 'About', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-extrabold text-indigo-650">BignanPro.</span>
        
        {/* Desktop Links with Active State check */}
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          {menuItems.map(item => (
            <button 
              key={item} 
              onClick={() => setActive(item)}
              className={active === item ? 'text-indigo-600' : 'text-slate-600'}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
\`\`\``,
      },
    },
    {
      id: "hero-positioning",
      title: {
        bn: "৩. ও-অথ হিরো ব্যানার ও পজিশনিং সিস্টেম (Hero Section & Positioning)",
        en: "3. Hero Section & CSS Positioning",
      },
      content: {
        bn: `## The Hero Section (হিরো সেকশন)
হিরো সেকশন হলো ওয়েবসাইটের মেইন ল্যান্ডিং ব্যানার। এটি ইউজারের ইমপ্রেশন তৈরি করে। একটি মিনিমাল ও প্রফেশনাল হিরো সেকশন সেন্ট্রাল কন্টেন্ট এলাইনমেন্ট এবং বড় টাইপোগ্রাফি ব্যবহার করে তৈরি করা হয়।

---

## CSS Positioning (পজিশনিং সিস্টেম)
একটি আকর্ষণীয় ব্যানার তৈরি করতে আমাদের CSS positioning বা এলিমেন্ট বসানোর চমৎকার ধারণা থাকতে হবে:
*   **relative (রিলেটিভ)**: এটি প্যারেন্ট এলিমেন্ট হিসেবে কাজ করে। এর সাপেক্ষে অন্যান্য চাইল্ড আইটেমগুলোর সীমানা নির্ধারিত হয়।
*   **absolute (অ্যাবসোলিউট)**: চাইল্ড এলিমেন্টকে প্যারেন্ট বডির যেকোনো স্থানে ইচ্ছেমতো ভাসমান অবস্থায় বসাতে (যেমন: -bottom-6 -left-6) এটি ব্যবহার করা হয়।
*   **sticky (স্টিকি)**: এটি পেজ স্ক্রল করার সময় নির্দিষ্ট উইন্ডো সীমানায় ওপরে আটকে থাকে (যেমন: আমাদের Navbar)।

\`\`\`jsx
{/* রিলেটিভ প্যারেন্ট */}
<div className="relative h-64 bg-slate-100 rounded-3xl p-8">
  <h2 className="text-2xl font-bold">Main Banner Content</h2>

  {/* অ্যাবসোলিউট চাইল্ড */}
  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
    <p className="text-sm font-bold">Floating Stats</p>
  </div>
</div>
\`\`\``,
        en: `## The Hero Section
The Hero Section is the welcome banner of your website. It sets the theme. A polished hero layout centers headlines with clear typography and call-to-action buttons.

---

## CSS Positioning
Creating modern overlaps requires understanding CSS coordinates:
*   **relative**: Acts as the parent container constraint. Absolute children align relative to this wrapper's borders.
*   **absolute**: Pulls children out of standard document layout flow, placing them exactly at specified locations (e.g. '-bottom-6 -left-6') relative to their relative parent.
*   **sticky**: Behaves like standard relative boxes until the scroll offset reaches threshold boundaries, where it locks to the top of the viewport.

\`\`\`jsx
{/* Relative Parent Wrapper */}
<div className="relative h-64 bg-slate-100 rounded-3xl p-8">
  <h2 className="text-2xl font-bold">Main Banner Content</h2>

  {/* Absolute Child floating */}
  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
    <p className="text-sm font-bold">Floating Stats</p>
  </div>
</div>
\`\`\``,
      },
    },
    {
      id: "card-grid",
      title: {
        bn: "৪. ডাটা-ড্রিভেন রেসপন্সিভ কার্ড গ্রিড (Data-Driven Card Grid)",
        en: "4. Data-Driven Card Grid",
      },
      content: {
        bn: `## Card Grid Integration (কার্ড সিস্টেম যুক্ত করা)
একটি ল্যান্ডিং পেজে একাধিক কোর্সের তালিকা দেখানোর জন্য আমরা পূর্বে শেখা কার্ড ডিজাইনটি ব্যবহার করবো এবং ডাটা অবজেক্টের অ্যারে থেকে সেগুলোকে গ্রিড আকারে রেন্ডার করবো।

### Data Driven Rendering (ডেটা দিয়ে কার্ড তৈরি):
আমরা কোডকে হার্ডকোড না করে একটি ডেটা অ্যারে তৈরি করবো এবং সেটিকে ম্যাপ ('map') করে কার্ড রেন্ডার করবো:

\`\`\`jsx
const courses = [
  { id: 1, title: "React.js & State Management", tag: "Frontend" },
  { id: 2, title: "Express.js & REST API Design", tag: "Backend" }
];

// পেজের ভেতর রেন্ডারিং ফ্লো:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {courses.map(course => (
    <div key={course.id} className="group rounded-3xl border border-slate-100 bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <h3 className="group-hover:text-indigo-600">{course.title}</h3>
    </div>
  ))}
</div>
\`\`\`
*ক্লু: 'group' প্যারেন্ট কন্টেইনারে ব্যবহার করলে চাইল্ড এলিমেন্টেও একসাথে হোভার ইফেক্ট (যেমন: 'group-hover:translate-x-1') ট্রিগার করা যায়!*`,
        en: `## Card Grid Integration
We will arrange our course list in a responsive column block using CSS Grid, importing the course card primitives and looping over dynamic datasets.

### Data-Driven UI Rendering
Instead of writing static card structures for each product, we create a JSON-like array of courses and loop over it using the JavaScript 'map()' function:

\`\`\`jsx
const courses = [
  { id: 1, title: "React.js & State Management", tag: "Frontend" },
  { id: 2, title: "Express.js & REST API Design", tag: "Backend" }
];

// Inside the grid container:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {courses.map(course => (
    <div key={course.id} className="group rounded-3xl border border-slate-100 bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <h3 className="group-hover:text-indigo-600">{course.title}</h3>
    </div>
  ))}
</div>
\`\`\`
*Tip: Declaring 'group' on parent cards allows triggering transition classes on nested children (like 'group-hover:translate-x-1') during mouseenters.*`,
      },
    },
    {
      id: "validation-form",
      title: {
        bn: "৫. সাবস্ক্রিপশন ফর্ম ও বিল্ডিং সিস্টেমের রূপক (Form & Metaphor)",
        en: "5. Subscription Form & Metaphor",
      },
      content: {
        bn: `## Newsletter Subscription Form (সাবস্ক্রিপশন ফর্ম)
একটি ল্যান্ডিং পেজে ইউজার ডাটা সংগ্রহের জন্য ফর্ম সেকশন অত্যন্ত গুরুত্বপূর্ণ। আমরা রিঅ্যাক্ট স্টেট দিয়ে ইমেইল ভ্যালু ক্যাচ করে সাবমিশন সফল হলে একটি সাকসেস মেসেজ প্রদর্শন করবো।

\`\`\`jsx
const [email, setEmail] = useState('');
const [success, setSuccess] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  if(email) {
    setSuccess(true);
    setEmail('');
  }
};
\`\`\`

---

## The Building Construction Metaphor (বাড়ি তৈরির রূপক)
একটি সম্পূর্ণ ওয়েবসাইট বিল্ডিংয়ের প্রসেসকে একটি তিনতলা দালান তৈরির সাথে তুলনা করুন:
*   **মেইন লেআউট (The Foundation)**: মাটির নিচে ঢালাই করা বেইসমেন্ট বা স্ট্রাকচার যা পুরো বাড়ির ওজন ধরে রাখে (আমাদের 'layout.jsx')। এটি একবারই তৈরি করা হয়।
*   **কম্পোনেন্টস (The Rooms)**: রান্নাঘর, বেডরুম কিংবা ওয়াশরুম—এর প্রতিটি আলাদা মডিউলার স্পেস (আমাদের 'Navbar' বা 'HeroSection')। এগুলোকে বাড়ির যেকোনো জায়গায় সেট করা যায়।
*   **ইউআই ও কালার (Interior Design)**: ঘরের দেয়ালের রঙ, আসবাবপত্র এবং আলো (আমাদের 'Tailwind CSS') যা ঘরগুলোকে চমৎকার ও ব্যবহারযোগ্য করে তোলে।`,
        en: `## Newsletter Subscription Form
Form inputs collect user data securely. We track client input using useState, checking submission patterns, resetting variables, and rendering confirmation prompts.

\`\`\`jsx
const [email, setEmail] = useState('');
const [success, setSuccess] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  if(email) {
    setSuccess(true);
    setEmail('');
  }
};
\`\`\`

---

## The Building Construction Metaphor
Building a web project is like constructing a house:
*   **layout.jsx (The Foundation)**: The concrete structural foundation and framing. It is poured once and stays identical across all floors.
*   **Components (The Rooms)**: Decoupled modular spaces (kitchen, bedrooms, bathrooms) representing headers, hero banners, and cards. You can rearrange them on different floors.
*   **Tailwind CSS (Interior Design)**: The paint, lighting, and furniture that turn raw concrete structures into a premium, liveable home.`,
      },
      codeBlock: {
        fileName: "app/page.jsx",
        language: "jsx",
        code: `import React, { useState } from 'react';

// ১. NAVBAR COMPONENT
export function Navbar() {
  const [active, setActive] = useState('Home');
  const menuItems = ['Home', 'Courses', 'About', 'Contact'];
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-extrabold text-indigo-600">BignanPro.</span>
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          {menuItems.map(item => (
            <button 
              key={item} 
              onClick={() => setActive(item)}
              className={active === item ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-full">Get Started</button>
      </div>
    </nav>
  );
}

// ২. HERO SECTION COMPONENT
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            Learn Programming <span className="text-indigo-600">Step-by-Step.</span>
          </h1>
          <p className="mt-6 text-slate-500 text-lg">Build real-world full-stack web applications with modern architectures.</p>
        </div>
        <div className="relative lg:col-span-5 flex justify-center">
          <div className="relative h-64 w-full max-w-sm rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white">Master Fullstack Architectures</h3>
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-lg">
            <p className="text-xs font-bold text-slate-400">Enrolled Students</p>
            <p className="text-xl font-black text-slate-800">4,928+</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ৩. CARD SECTION COMPONENT
export function CardSection() {
  const courses = [
    { id: 1, title: 'React.js & State Management', desc: 'Master hooks, context API, and composition layout patterns.' },
    { id: 2, title: 'Express.js & REST API Design', desc: 'Build secure, scalable endpoints with Mongoose and Middlewares.' }
  ];
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map(course => (
          <div key={course.id} className="group p-6 rounded-3xl border border-slate-100 bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600">{course.title}</h3>
            <p className="mt-2 text-slate-500 text-sm">{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
`,
        explanations: [
          {
            line: 9,
            text: {
              bn: "menuItems অ্যারেকে ম্যাপ করে বাটন লিংক জেনারেট করা হয়েছে, এবং ক্লিক করলে setActive কল হয়ে হাইলাইট কালার চেঞ্জ করে দেয়।",
              en: "Maps menu items into active buttons, calling setActive to toggle navigation highlights.",
            },
          },
          {
            line: 35,
            text: {
              bn: "হিরো সেকশনে relative কন্টেইনারের সাপেক্ষে absolute ব্যবহার করে ফ্লোটিং স্টুডেন্টস কার্ডটি চমৎকারভাবে ডেকোরেট করা হয়েছে।",
              en: "Aligns the stats banner card dynamically using absolute coordinates within the relative container.",
            },
          },
          {
            line: 52,
            text: {
              bn: "courses ডেটা সেট ম্যাপ করার সময় প্রতিটি আইটেমকে গ্রিডের কলামে সাজিয়ে hover:-translate-y-2 ক্লাস দিয়ে অ্যানিমেট করা হয়েছে।",
              en: "Loops over dynamic datasets using map, wrapping cards inside columns with hover displacement triggers.",
            },
          },
        ],
      },
    },
    {
      id: "practice-build-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও প্রজেক্ট লেআউট অ্যাসাইনমেন্ট সম্পন্ন করুন। এটি আপনার প্রজেক্ট বিল্ড ও ডেভেলপমেন্ট কনফিডেন্স চরম বাড়িয়ে দেবে।`,
        en: `## Reflection & Lab Tasks
Solidify your website integration architectures before stepping into backend APIs, database connections, and fullstack servers.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "সম্পূর্ণ প্রজেক্ট বিল্ড চ্যাপ্টারটি পূর্ববর্তী সব কনসেপ্টের মধ্যে সেতু বন্ধন তৈরি করে প্রোডাকশন মাইন্ডসেট ডেভেলপ করে।",
          en: "Full project integration connects core layout rules with atomic primitives, validating production structures.",
        },
        whyWorks: {
          bn: "নেক্সট জেএস বিল্ড মেকানিজম পেজ ও লেআউট ফাইলগুলোকে একত্রে মার্জ করে পিওর কম্পাইলড কোড ব্রাউজারে ডেলিভারি করে।",
          en: "Next.js combines layout shells and dynamic page trees into optimized, prerendered static assets.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা স্টেট সর্বদা পেজ লেভেলে রাখেন এবং কার্ডগুলোকে প্রপস দিয়ে লাইটওয়েট রেখে রি-ইউজেবিলিটি বাড়ান।",
          en: "Professionals store state variables at page/route levels, leaving visual card primitives stateless.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় প্রজেক্ট ভুল হলো লেআউট ফাইলের ভেতর বারবার পেজ রিলোডার স্ক্রিপ্ট ইম্পোর্ট করা, যা নেক্সট জেএস-এর ক্যাশ ড্রপ করায়।",
          en: "A common pitfall is adding redundant, heavy page-level reloads scripts inside layouts, breaking speed caches.",
        },
        debugging: {
          bn: "ফাইল বা পাথ লিংক কাজ না করলে ডিরেক্টরি স্পেলিং এবং ইম্পোর্ট করার পাথে \`@/\` (রুট এলিয়াস) ঠিকঠাক ব্যবহার করেছেন কিনা চেক করুন।",
          en: "If component imports fail, check your tsconfig path aliases configurations (e.g., `@/components/`).",
        },
        performance: {
          bn: "সম্পূর্ণ হোমপেজ লোডিং ফাস্ট রাখতে অপ্রয়োজনীয় বড় এনিমেশন স্ক্রিপ্ট লোকাল বডি থেকে বাদ দিন।",
          en: "Enforce CSS transitions instead of embedding massive JavaScript animation libraries to speed up load times.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "build-q1",
      question: {
        bn: "নেক্সট জেএস অ্যাপ্লিকেশনে \`layout.jsx\` ফাইলের মূল কাজ কী?",
        en: "What is the primary function of layout.jsx in Next.js?",
      },
      options: [
        { bn: "ডাটাবেজ কনেকশন ওপেন করা", en: "Opening a database connection" },
        {
          bn: "সব পেজের জন্য একটি কমন শেয়ার্ড ফ্রেম বা কাঠামো তৈরি করা",
          en: "Creating a shared layout frame that wraps all page routes within the directory",
        },
        { bn: "সিএসএস ফাইল কম্প্রেস করা", en: "Compressing stylesheet rules" },
        { bn: "গিট রিপোজিটরি মার্জ করা", en: "Merging git repositories" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "layout.jsx হলো মেইন রুট টেমপ্লেট যা পেজগুলোর চারপাশে গ্লোবাল কাঠামো (যেমন Navbar & Footer) বজায় রাখে।",
        en: "Layout files define common wrappers like headers, avoiding redundant page redraws.",
      },
    },
    {
      id: "build-q2",
      question: {
        bn: "নেভিগেশন বারে \`sticky top-0\` ক্লাসের কাজ কী?",
        en: "What does the sticky top-0 class do in a Navigation Bar?",
      },
      options: [
        {
          bn: "মেনু বার পেজ থেকে ডিলিট করে দেওয়া",
          en: "Deletes the navigation bar from page views",
        },
        {
          bn: "পেজ স্ক্রল করার সময় মেনু বারটিকে স্ক্রিনের ওপরে আটকে রাখা",
          en: "Fixes the menu bar to the top of the viewport when scrolling",
        },
        { bn: "লোগো সাইজ ছোট করা", en: "Resizing logo text widths" },
        {
          bn: "সার্ভারে এপিআই কল স্টপ করা",
          en: "Halting API requests to servers",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "sticky top-0 স্ক্রল করার পরও মেনুটিকে টপে আটকে রাখে যেন ব্যবহারকারী যেকোনো সময় অন্য লিংকে ক্লিক করতে পারেন।",
        en: "Sticky positioning keeps navigation controls accessible during scrolls.",
      },
    },
    {
      id: "build-q3",
      question: {
        bn: "ডাটা-ড্রিভেন ইউআই (Data-driven UI) বলতে কী বোঝায়?",
        en: "What does Data-driven UI mean?",
      },
      options: [
        {
          bn: "সব কার্ড ইউজার ক্লিক ছাড়াই ডিলিট হওয়া",
          en: "Automatically deleting cards on user scrolls",
        },
        {
          bn: "ম্যানুয়ালি হার্ডকোড না করে ডাটা অবজেক্টের অ্যারে থেকে ডাইনামিকালি ইউআই রেন্ডার করা",
          en: "Rendering UI elements dynamically by looping over data arrays instead of hardcoding markup",
        },
        {
          bn: "সার্ভার স্পীড কমিয়ে দেওয়া",
          en: "Decelerating network requests",
        },
        { bn: "গুগল সাইনইন ডিজেবল করা", en: "Disabling Google signins" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ম্যাপ মেথড চালিয়ে ডাটা অ্যারে থেকে ডাইনামিক ইউআই তৈরি করাকেই ডাটা ড্রিভেন ইউআই বলা হয়।",
        en: "Decoupling arrays and loop mapping allows UI systems to render records from database APIs.",
      },
    },
    {
      id: "build-q4",
      question: {
        bn: "একটি এলিমেন্টকে স্ক্রিনের স্বাভাবিক লেআউট প্রবাহ থেকে আলাদা করে কাস্টম কোঅর্ডিনেটে সেট করার জন্য নিচের কোন পজিশনটি ব্যবহার করা হয়?",
        en: "Which CSS position property is used to pull elements out of standard layouts flow, mapping them to coordinates relative to ancestors?",
      },
      options: [
        { bn: "position: static", en: "position: static" },
        { bn: "position: absolute", en: "position: absolute" },
        { bn: "position: relative", en: "position: relative" },
        { bn: "position: sticky", en: "position: sticky" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "absolute পজিশন নরমাল ফ্লো ভেঙে রিলেটিভ প্যারেন্টের সাপেক্ষে নির্দিষ্ট জায়গায় ভাসমান এলিমেন্ট সেট করে।",
        en: "Absolute coordinates ignore the regular DOM layout tree offsets, adhering strictly to relative containers margins.",
      },
    },
    {
      id: "build-q5",
      question: {
        bn: "বাড়ি তৈরির রূপকে বেইসমেন্ট বা ফাউন্ডেশন-এর সাথে নিচের কোন ফাইলের তুলনা করা হয়েছে?",
        en: "In the Building construction metaphor, the concrete basement foundation represents which Next.js file?",
      },
      options: [
        { bn: "page.jsx", en: "page.jsx" },
        { bn: "layout.jsx", en: "layout.jsx" },
        { bn: "Navbar.jsx", en: "Navbar.jsx" },
        { bn: "CourseCard.jsx", en: "CourseCard.jsx" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "layout.jsx হলো বেইসমেন্ট যা পেজ পরিবর্তন হলেও স্ট্যাটিক থাকে এবং পুরো ওয়েবসাইটের স্ট্রাকচার ধরে রাখে।",
        en: "Layout wrappers persist structures (like templates, navs, footers) without executing redundant re-renders.",
      },
    },
  ],
  practice: [
    {
      bn: "১. রিঅ্যাক্ট অ্যাপ্লিকেশনে কেন সরাসরি হার্ডকোড না করে ডাটা অ্যারে ডিক্লেয়ার করে ম্যাপ (.map) চালানো বেশি সুবিধাজনক?",
      en: "1. Contrast dynamic mapping loops using .map() with manual HTML card code replication.",
    },
    {
      bn: "২. টেইলউইন্ড সিএসএস-এর 'group' এবং 'group-hover' ব্যবহার করে কীভাবে নেস্টেড এনিমেশন তৈরি করা যায়?",
      en: "2. Outline how combining group and group-hover classes facilitates multi-element transitions.",
    },
    {
      bn: "৩. পজিশন 'sticky' এবং 'fixed'-এর মধ্যে প্রধান স্থাপত্যগত (Architectural) পার্থক্যগুলো কী কী?",
      en: "3. Differentiate between CSS sticky and fixed placement rules regarding viewport boundaries.",
    },
  ],
  assignment: {
    title: {
      bn: "অ্যাক্টিভ লিংক ও সাবস্ক্রিপশন চেক সহ ল্যান্ডিং পেজ বিল্ড",
      en: "Interactive Dashboard Page with Newsletter Validation",
    },
    description: {
      bn: "বিজ্ঞানপ্রো একাডেমির মতো একটি চমৎকার রেসপন্সিভ ল্যান্ডিং পেজ ড্যাশবোর্ড তৈরি করুন। পেজটিতে একটি হেডার (একটিভ লিংক হাইলাইট সহ), একটি রিলেটিভ হিরো ব্যানার (ফ্লোটিং স্ট্যাটাস সহ), এবং একটি ইমেইল সাবস্ক্রিপশন বক্স থাকবে যা স্টেট সাবমিট করে সাকসেস নোটিশ প্রদর্শন করবে।",
      en: "Assemble a responsive educational homepage viewport. Combine a sticky header (active links toggling via state), a relative hero banner (with absolute overlapping cards), and a newsletter subscription block updating local states to trigger validation confirmations.",
    },
    starterCode: `// Modern Dashboard Page Assembly
import React, { useState } from 'react';

export default function ModernDashboard() {
  // ১. সেশন স্টেট ও একটিভ মেনু স্টেট ডিক্লেয়ার করুন

  // ২. ইউআই কম্পোনেন্ট অ্যাসেম্বল করুন
}
`,
    solution: {
      code: `// Modern Dashboard Page Solution
import React, { useState } from 'react';

export default function ModernDashboard() {
  const [active, setActive] = useState('Home');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const courses = [
    { id: 1, title: 'React.js Mastery', tag: 'Frontend' },
    { id: 2, title: 'Backend Design Patterns', tag: 'Backend' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ১. sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-slate-800">Academy.</span>
        <div className="flex gap-4">
          {['Home', 'Courses'].map(item => (
            <button 
              key={item}
              onClick={() => setActive(item)}
              className={active === item ? 'text-indigo-600 font-semibold' : 'text-slate-500'}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* ২. Relative Hero Section */}
      <section className="relative bg-slate-50 py-16 px-6 max-w-5xl mx-auto rounded-3xl mt-8 overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl lg:text-5xl font-black text-slate-800">Study Fullstack Development</h1>
          <p className="mt-4 text-slate-500 text-sm max-w-md">Master industry standards through production-grade projects.</p>
        </div>
        {/* Absolute floating cards */}
        <div className="absolute -bottom-2 right-4 bg-indigo-600 text-white p-4 rounded-2xl shadow-lg transform rotate-2">
          <p className="text-xs">Live Sessions</p>
          <p className="text-lg font-bold">24 / 7 Available</p>
        </div>
      </section>

      {/* ৩. Responsive Grid Section */}
      <section className="py-12 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map(course => (
          <div key={course.id} className="p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
            <span className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-bold">{course.tag}</span>
            <h3 className="mt-4 text-lg font-bold text-slate-800">{course.title}</h3>
          </div>
        ))}
      </section>

      {/* ৪. Subscription Validation Form */}
      <section className="py-10 max-w-sm mx-auto px-6">
        <form 
          onSubmit={(e) => { e.preventDefault(); if(email) { setSuccess(true); setEmail(''); } }} 
          className="p-6 rounded-2xl border border-slate-100 shadow-sm"
        >
          <h3 className="font-bold text-slate-800 text-center">Subscribe Newsletter</h3>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@address.com"
            required
            className="mt-4 w-full p-3 rounded-xl bg-slate-50 border outline-none focus:border-indigo-500 focus:bg-white text-sm"
          />
          <button className="mt-4 w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-sm">Subscribe</button>
        </form>
        {success && <p className="mt-3 text-center text-xs text-emerald-600 font-semibold">✓ Subscribed successfully!</p>}
      </section>
    </div>
  );
}`,
      explanation: {
        bn: "অসাধারণ ল্যান্ডিং পেজ ইমপ্লিমেন্টেশন! একটিভ মেনু স্টেট টগল, হিরোর ফ্লোটিং অ্যাবসোলিউট কন্টেইনার এবং ফর্ম সাবমিশন লাইফসাইকেল শতভাগ ইন্ডাস্ট্রি স্ট্যান্ডার্ড মেনে সফল হয়েছে।",
        en: "Flawless layout integration! Toggling active navigation links alongside absolute offsets and form resets handles responsive dashboard UI architectures perfectly.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "নেক্সট জেএস (Next.js)-এ সার্ভার কম্পোনেন্ট (RSC) এবং ক্লায়েন্ট কম্পোনেন্ট ('use client') এর মধ্যে মূল স্থাপত্যগত পার্থক্য কী এবং স্টেট হ্যান্ডলিংয়ের সময় আমরা কোন ফাইল বেছে নেব?",
        en: "Explain the architectural differences between React Server Components (RSC) and Client Components ('use client') in Next.js, and which one we select for state handling.",
      },
      answer: {
        bn: "সার্ভার ও ক্লায়েন্ট কম্পোনেন্টের মধ্যে পার্থক্য এবং স্টেট ব্যবহারের নীতি নিচে আলোচনা করা হলো:\n১. Server Components (RSC - ডিফল্ট): এই কম্পোনেন্টগুলো সরাসরি নোড সার্ভারে প্রসেস হয়ে পিওর এইচটিএমএল (HTML) আকারে ব্রাউজারে আসে। এতে জাভাস্ক্রিপ্ট বান্ডেল সাইজ কমে, ফলে পেজ লোডিং ফাস্ট হয়। কিন্তু এগুলো কোনো ইভেন্ট লিসেনার (যেমন onClick) বা রিঅ্যাক্ট হুক (useState) সাপোর্ট করে না।\n২. Client Components ('use client'): ফাইলের ওপরে \`'use client'\` নির্দেশক দিয়ে এগুলো ঘোষণা করা হয়। এই ফাইলগুলো ব্রাউজারে জাভাস্ক্রিপ্ট কোড সচল করে রিঅ্যাক্টিভ ইন্টারঅ্যাকশন সাপোর্ট করে।\n৩. স্টেট হ্যান্ডলিং রায়: যেহেতু ইউজার ক্লিক টগল বা ডাটা ইনপুটের জন্য রিঅ্যাক্ট হুক (\`useState\`, \`useEffect\`) প্রয়োজন হয়, তাই স্টেট হ্যান্ডলিং এবং ইন্টারেক্টিভ ইন্টারফেস তৈরির জন্য আমাদেরকে অবশ্যই ফাইলের ওপরে \`'use client'\` যুক্ত করে ক্লায়েন্ট কম্পোনেন্ট ব্যবহার করতে হবে।",
        en: "Next.js separates components based on where their code executes:\n1. Server Components (RSC): Rendered on the server. They ship zero client-side JavaScript, improving page speed. However, they lack access to browser APIs, event listeners ('onClick'), and hooks ('useState').\n2. Client Components: Declared with 'use client' at the top of the file. They are hydrated in the browser, enabling interactivity.\n3. Selection Rule: For state handling (hooks like useState, input bindings, active toggles), you must specify 'use client' since interactivity requires browser-side JavaScript cycles.",
      },
    },
    {
      question: {
        bn: "CSS positioning-এর ক্ষেত্রে 'position: relative' and 'position: absolute' কীভাবে একসাথে কাজ করে এবং একটি রেসপন্সিভ ওভারল্যাপ লেআউট ডিজাইনের সময় কেন এই জোড়া অত্যন্ত গুরুত্বপূর্ণ?",
        en: "How do 'position: relative' and 'position: absolute' coordinate in CSS positioning, and why are they critical for overlaps design?",
      },
      answer: {
        bn: "relative এবং absolute পজিশনিংয়ের যৌথ কাজ করার পদ্ধতি ও রেসপন্সিভ ডিজাইনে এর গুরুত্ব নিচে দেওয়া হলো:\n১. সীমানা নির্ধারণ (Boundary Constraint): একটি চাইল্ড এলিমেন্টকে যখন \`position: absolute\` দেওয়া হয়, তখন সে তার নরমাল ডকুমেন্ট ফ্লো থেকে বের হয়ে ভাসমান হয়ে যায়। সে স্ক্রিনের কোথায় বসবে তা ঠিক করার জন্য তার নিকটতম রিলেটিভ প্যারেন্টকে (\`position: relative\`) সীমানা হিসেবে গ্রহণ করে। যদি প্যারেন্টকে রিলেটিভ না করা হয়, তবে চাইল্ডটি পুরো ব্রাউজার বডিকে সাপেক্ষ ধরে চলে যাবে, যা লেআউট ভেঙে ফেলে।\n২. ডেকোরেশন ও ওভারল্যাপ (Overlap UI): হিরো সেকশনে ফ্লোটিং আর্কিটেকচার, ব্যাজ বা আইকন বক্স প্যারেন্টের কোণায় বসাতে (যেমন: top-0, right-0, transform) এই দুটি এট্রিবিউট ব্যবহার করা অত্যন্ত জরুরি।\n৩. রেসপন্সিভনেস সুবিধা: প্যারেন্টকে রিলেটিভ রাখলে স্ক্রিন সাইজ ছোট-বড় হলেও অ্যাবসোলিউট চাইল্ডটি প্যারেন্টের বাউন্ডারির বাইরে যায় না, ফলে কন্টেন্ট ওভারফ্লো হয়ে সাইট কেটে যাওয়ার ঝুঁকি থাকে না।",
        en: "Relative and absolute coordinates establish alignment limits in CSS layouts:\n1. Origin Anchors: An element with 'position: absolute' locates coordinates (top, left, bottom, right) relative to its nearest positioned ancestor (usually marked 'position: relative'). Without a relative parent, absolute elements align to the viewport scroll bounds, causing displacement on viewport scaling.\n2. Layer Overlaps: Crucial for absolute tags (discount badges, overlay shapes, floating stats blocks) aligned to corners of parent layout boxes.\n3. Responsive Anchoring: By binding absolute units to relative parents, floating cards resize and move dynamically as screen dimensions scale down, preventing layout breaks.",
      },
    },
  ],
};
