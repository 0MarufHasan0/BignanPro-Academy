export const chapter24Content = {
  id: "chapter-24",
  number: 24,
  title: {
    bn: "অধ্যায় ২৪: রিঅ্যাক্ট বেসিকস — কম্পোনেন্ট থিংকিং",
    en: "Chapter 24: React Basics (Component Thinking)",
  },
  description: {
    bn: "রিঅ্যাক্ট কী, কম্পোনেন্ট-ভিত্তিক ডিজাইন ধারণা, জেএসএক্স (JSX) সিনট্যাক্স এবং প্রপস (Props) এর সাহায্যে ডেটা পাস করার বেসিক গাইড।",
    en: "Learn the core philosophy of React: component-based architecture, JSX templates, passing arguments via props, component trees, and reusability.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "রিঅ্যাক্ট (React) কী এবং এটি কেন আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরির সেরা ফ্রেমওয়ার্ক লাইব্রেরি তা জানা।",
      en: "Understand what React is and why it dominates modern web app developments.",
    },
    {
      bn: "ইউজার ইন্টারফেসকে মডিউলার কম্পোনেন্টে (Components) ভাগ করে চিন্তা করার অভ্যাস গড়া।",
      en: "Adopt component-based thinking, partitioning UIs into modular building blocks.",
    },
    {
      bn: "জেএসএক্স (JSX) এর মানে এবং জাভাস্ক্রিপ্টের ভেতর এইচটিএমএল লেখার সিনট্যাক্স আয়ত্ত করা।",
      en: "Grasp JSX templates, combining HTML elements structures within JS scripts.",
    },
    {
      bn: "প্রপস (Props) কী এবং এর মাধ্যমে চাইল্ড কম্পোনেন্টে কীভাবে ডাইনামিক ডেটা পাঠাতে হয় তা শেখা।",
      en: "Learn to pass dynamic arguments into nested child components using Props.",
    },
  ],
  sections: [
    {
      id: "what-is-react-framework",
      title: {
        bn: "১. রিঅ্যাক্ট কী ও কেন ব্যবহার করা হয়? (What is React & Component Design)",
        en: "1. What is React & Component Design",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা যখন এইচটিএমএল, সিএসএস এবং সাধারণ জাভাস্ক্রিপ্ট দিয়ে কোনো ওয়েবসাইট বানাই, তখন প্রতিবার কোনো ডেটা আপডেট হলে আমাদের অনেক লাইনের কোড লিখে ডম নোড খুঁজে খুঁজে টেক্সট চেঞ্জ করতে হতো। প্রজেক্টের সাইজ একটু বড় হলেই হাজার লাইনের কোডে কোথায় কোন এলিমেন্ট সিলেক্ট করেছি তা খুঁজে বের করা অসম্ভব হয়ে দাঁড়াতো।

এই বিশৃঙ্খলা এড়াতে এবং মডিউলার ও পরিচ্ছন্ন উপায়ে বড় ওয়েব অ্যাপ তৈরি করতে ফেসবুক ডাস্ট সিস্টেম থেকে জন্ম নিয়েছে বিশ্বের সবচেয়ে জনপ্রিয় লাইব্রেরি **React (রিঅ্যাক্ট)**।

## What is React? (রিঅ্যাক্ট কী?)
**রিঅ্যাক্ট** হলো ইউজার ইন্টারফেস (UI) তৈরির জন্য একটি ওপেন সোর্স **জাভাস্ক্রিপ্ট লাইব্রেরি**।

*   **কম্পোনেন্ট-ভিত্তিক ডিজাইন (Component-based)**: রিঅ্যাক্ট ব্যবহারের মূল শর্ত হলো আপনার সম্পূর্ণ স্ক্রিনকে একবারে না বানিয়ে ছোট ছোট টুকরো টুকরো কার্ড বা বাটনে ভাগ করে ফেলা।
*   **কেন ব্যবহার করবো?**
    - **কোড রিইউজেবিলিটি (Reusability)**: একবার একটি বাটন বানিয়ে প্রজেক্টের যেকোনো জায়গায় শতবার ব্যবহার করা যায়।
    - **সহজ রক্ষণাবেক্ষণ (Maintainability)**: কোনো বাটনে প্রবলেম হলে পুরো ওয়েবসাইট ঘাটার প্রয়োজন নেই, কেবল ওই নির্দিষ্ট বাটনের ফাইলে ফিক্স করলেই কাজ শেষ!`,
        en: `## Introduction
Managing raw DOM updates across thousands of custom code lines introduces logical overhead. React solves this by rendering viewports declaratively using functional modules.

## What is React?
A component-based open-source JavaScript library developed by Facebook for building modular user interfaces.

## Benefits:
*   **Code Reusability**: Write a component once, import and render it multiple times.
*   **Maintainability**: Isolate UI bugs to single component files, preserving application integrity.`,
      },
    },
    {
      id: "react-components-jsx",
      title: {
        bn: "২. রিঅ্যাক্ট কম্পোনেন্ট ও জেএসএক্স (React Components & JSX)",
        en: "2. React Components & JSX",
      },
      content: {
        bn: `## What is a Component? (কম্পোনেন্ট কী?)
সহজ কথায়: **কম্পোনেন্ট হলো একটি সাধারণ জাভাস্ক্রিপ্ট ফাংশন যা দেখতে এইচটিএমএল কোডের মতো একটি ইউজার ইন্টারফেস রিটার্ন করে।**

ওয়েবসাইটের নেভিগেশন বার (\`Navbar\`), হিরো ব্যানার (\`Hero\`), কিংবা প্রোডাক্ট কার্ড (\`ProductCard\`)—এর প্রতিটি হলো আলাদা আলাদা রিঅ্যাক্ট কম্পোনেন্ট।

---
## What is JSX? (জেএসএক্স কী?)
রিঅ্যাক্টের ভেতরে আমরা যে সিনট্যাক্সে কোড লিখি তাকে **JSX (JavaScript XML)** বলা হয়।
*   **সহজ সংজ্ঞা**: জাভাস্ক্রিপ্ট ফাইলের ভেতরে কোনো কোটেশন মার্ক ছাড়াই সরাসরি এইচটিএমএল ট্যাগ লেখার স্পেশাল ফরম্যাট।
*   **কোড উদাহরণ (আমাদের প্রথম কম্পোনেন্ট)**:
    \`\`\`jsx
    // এটি একটি রিঅ্যাক্ট কম্পোনেন্ট
    function WelcomeHeading() {
      return <h1 className="text-3xl font-bold">বিজ্ঞানপ্রো একাডেমিতে স্বাগতম!</h1>;
    }
    \`\`\`
    *ক্লু: রিঅ্যাক্ট জেএসএক্স-এ এইচটিএমএল 'class' এর জায়গায় 'className' লিখতে হয়, কারণ জাভাস্ক্রিপ্টে 'class' শব্দটি একটি সংরক্ষিত কিওয়ার্ড।*`,
        en: `## What is a Component?
A JavaScript function returning visual markup, acting as an independent, isolated piece of user interface.

## What is JSX?
JavaScript XML. A syntax extension for JavaScript allowing HTML markup structures to be written directly in code without string wrappers.

## Example:
\`\`\`jsx
function ProfileHeader() {
  return <header className="bg-slate-100 p-4"><h1>Header Title</h1></header>;
}
\`\`\``,
      },
    },
    {
      id: "react-props-concept",
      title: {
        bn: "৩. প্রপস (Props) — কম্পোনেন্টের ডেটা ট্রান্সফার (Understanding React Props)",
        en: "3. Understanding React Props",
      },
      content: {
        bn: `## What are Props? (প্রপস কী?)
আমরা যখন একটি রিইউজেবল বাটন বা কার্ড বানাই, আমরা চাই বাটনের লেখা একেক জায়গায় একেক রকম হোক (যেমন: এক জায়গায় থাকবে "Login", অন্য জায়গায় থাকবে "Signup")। কিন্তু আমরা যদি প্রতিবার আলাদা আলাদা ফাংশন লিখি, তবে কোড রিইউজ করার কোনো মানে থাকলো না।

প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টের ভেতরে যে ডাটা বা তথ্য পাঠানো হয়, তাকে রিঅ্যাক্টের ভাষায় **Props (Properties)** বলে।

*   **সহজ রূপক**: ফাংশনের প্যারামিটার (Parameters) যেমন কাজের সময় ইনপুট মান গ্রহণ করে, প্রপসও ঠিক তেমনি কম্পোনেন্টের ইনপুট ডাটা রিসিভ করে।
*   **কোড উদাহরণ**:
    \`\`\`jsx
    // চাইল্ড কম্পোনেন্ট (ডাটা রিসিভ করছে props অবজেক্টের মাধ্যমে)
    function Button(props) {
      return <button class="px-4 py-2 bg-blue-500">{props.text}</button>;
    }

    // প্যারেন্ট কম্পোনেন্ট (ডাটা পাঠাচ্ছে অ্যাট্রিবিউট আকারে)
    function App() {
      return (
        <div>
          <Button text="লগইন করুন" />
          <Button text="সাইনআপ করুন" />
        </div>
      );
    }
    \`\`\``,
        en: `## What are Props?
Props (Properties) are dynamic configuration inputs passed down from parent components to child components.

## Example:
\`\`\`jsx
// Child receiving props
function Badge(props) {
  return <span className="bg-emerald-50 text-emerald-600">{props.label}</span>;
}

// Parent passing values
function App() {
  return <Badge label="New Release" />;
}
\`\`\``,
      },
    },
    {
      id: "component-tree-structure",
      title: {
        bn: "৪. কম্পোনেন্ট ট্রি আর্কিটেকচার (The Component Tree Layout)",
        en: "4. The Component Tree Layout",
      },
      content: {
        bn: `## The Component Tree (কম্পোনেন্ট গাছ)
রিঅ্যাক্ট প্রজেক্ট তৈরি করার সময় প্রতিটি প্রজেক্টকে একটি বৃক্ষ বা গাছের মডেলে চিন্তা করতে হয়। একে **কম্পোনেন্ট ট্রি (Component Tree)** বলে:

*   **App (Root Node)**: মূল মূল প্যারেন্ট নোড।
    ├── **Navbar (Child)**: লোগো ও মেনু কন্টেইনার।
    ├── **Dashboard (Child)**: মূল কন্টেন্ট এরিয়া।
    │     ├── **Sidebar (Child)**: নেভিগেশন লিংক।
    │     └── **CardsContainer (Child)**: ড্যাশবোর্ড কার্ডের লিস্ট।
    │           ├── **InfoCard (Child)**: ইনফো কার্ড ১।
    │           └── **InfoCard (Child)**: ইনফো কার্ড ২।
    └── **Footer (Child)**: কপিরাইট ট্যাগ।

এই ট্রি স্ট্রাকচারিংয়ের ফলে ডাটা সর্বদা উপর থেকে ক্রমানুসারে নিচের চাইল্ড কম্পোনেন্টগুলোতে প্রবাহিত হয় (One-way Data Flow)।`,
        en: `## The Component Tree
React structures interfaces as a tree of nested components branching from a single Root Node (App):
*   \`App\` (Root)
    ├── \`Navbar\`
    ├── \`MainContainer\`
    │     ├── \`Sidebar\`
    │     └── \`GridList\`
    │           ├── \`Card\`
    │           └── \`Card\`
    └── \`Footer\`
Data flows uni-directionally downwards through the tree nodes.`,
      },
    },
    {
      id: "lego-blocks-react-analogy",
      title: {
        bn: "৫. লেগো ব্লক ও রিঅ্যাক্ট রূপক (LEGO Analogy in React)",
        en: "5. LEGO Analogy in React",
      },
      content: {
        bn: `## The LEGO Castle Metaphor (লেগো দুর্গের রূপক)
রিঅ্যাক্ট কম্পোনেন্ট কীভাবে প্রজেক্টে সাজানো হয় তা প্লাস্টিকের তৈরি লেগো রাজদুর্গের সাথে মিলিয়ে নিন:
*   **সম্পূর্ণ ইন্টারফেস (Full UI)**: আপনার তৈরি করা পুরো লেগো দুর্গ।
*   **রিঅ্যাক্ট কম্পোনেন্ট (Component)**: দুর্গের দরজা, ওয়াচটাওয়ার কিংবা ছোট ছোট জানালা। দরজা কিন্তু একটি স্বাধীন খেলনা মডিউল।
*   **কোড রিইউজেবিলিটি (Reusability)**: আপনি যদি ৪টি ওয়াচটাওয়ার বানাতে চান, তবে প্রতিবার কাদা দিয়ে নতুন ৪টি টাওয়ার বানাবেন না। আপনি একই ডিজাইনের ওয়াচটাওয়ার মডিউলটি ৪ বার কপি করে দুর্গের চার কোণায় বসিয়ে দেবেন।
*   **প্রপস (Props)**: ওয়াচটাওয়ারের জানালা দিয়ে কী দেখাবে তার কাস্টম কালার (যেমন: লাল পতাকা বা নীল পতাকা)। টাওয়ারের মূল স্ট্রাকচার কিন্তু একই আছে, প্রপস দিয়ে কেবল পতাকার কালার চেঞ্জ করা হয়েছে!`,
        en: `## Metaphor
*   **Full UI Website**: A completed LEGO Castle model.
*   **React Component**: Reusable castle parts like towers, gates, or walls modules.
*   **Props**: Custom flags values attached to watchtowers. The structural tower component is identical; passing a prop changes the color accent of the flags.`,
      },
      codeBlock: {
        fileName: "ProfileCard.jsx",
        language: "jsx",
        code: `// ডাইনামিক প্রোফাইল কার্ড কম্পোনেন্ট
import React from 'react';

// ১. চাইল্ড কম্পোনেন্ট ডিক্লেয়ারেশন
function ProfileCard(props) {
  return (
    <div className="w-64 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
      <h3 className="text-lg font-bold text-slate-800">{props.name}</h3>
      <p className="text-xs text-indigo-600 font-semibold">{props.role}</p>
      <p className="mt-2 text-sm text-slate-500">{props.bio}</p>
    </div>
  );
}

// ২. প্যারেন্ট অ্যাপ রেন্ডারিং
export default function App() {
  return (
    <div className="flex gap-4 p-6 bg-slate-50 justify-center">
      <ProfileCard 
        name="Tasnim Jahan" 
        role="Frontend Architect" 
        bio="Designing reusable UI systems." 
      />
      <ProfileCard 
        name="Nabil Ahmed" 
        role="Backend Engineer" 
        bio="Optimizing cloud databases." 
      />
    </div>
  );
}`,
        explanations: [
          {
            line: 5,
            text: {
              bn: "প্রপস ইনপুট থেকে ডাইনামিক নাম ও টাইটেল ভ্যালু রিড করে এইচটিএমএল ট্যাগে বসানো।",
              en: "Reading dynamic properties from the props argument object inside components.",
            },
          },
          {
            line: 17,
            text: {
              bn: "একই ProfileCard কম্পোনেন্ট দুবার রেন্ডার করা হয়েছে কিন্তু ডাইনামিক ভিন্ন ভিন্ন ডাটা পাঠিয়ে।",
              en: "Rendering the same ProfileCard twice, passing different arguments.",
            },
          },
        ],
      },
    },
    {
      id: "practice-react-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার রিঅ্যাক্ট কম্পোনেন্ট চিন্তা ও ডাটা প্রপস ফ্লো-এর ধারণা পোক্ত করবে।`,
        en: `## Reflection & Lab Tasks
Solidify React component thinking concepts before learning React states and interactive events in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "রিঅ্যাক্টের কম্পোনেন্ট থিংকিং আয়ত্ত করলে আপনি খুব সহজে ফিজমা ইন্টারফেসকে ক্ষুদ্র ক্ষুদ্র মডিউলার কার্ডে ভাগ করে রিইউজেবল উপায়ে কোড সাজাতে পারবেন।",
          en: "Mastering component architecture enables you to refactor messy web files into elegant, reusable systems structures.",
        },
        whyWorks: {
          bn: "রিঅ্যাক্ট ব্যাকগ্রাউন্ডে একটি ভার্চুয়াল ডম (Virtual DOM) তৈরি করে মেমরিতে চেঞ্জ ক্যালকুলেট করে ব্রাউজারের আসল ডমে লাইভ আপডেট দেয়।",
          en: "React computes updates inside an in-memory Virtual DOM, syncing deltas to actual browser displays to optimize speed.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা প্রপসের ডাটা টাইপ সিকিউর রাখতে টাইপস্ক্রিপ্ট (TypeScript) দিয়ে অবজেক্ট টাইপ ডিফাইন করে কোড সেফ করেন।",
          en: "Seniors enforce compile-time verification checks on props using TypeScript type schemas.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো কম্পোনেন্টের ভেতর প্রপসের ভ্যালু রি-রাইট করার চেষ্টা করা। রিঅ্যাক্ট প্রপস সর্বদা রিড-অনলি বা আনচেঞ্জেবল (Immutable) থাকে।",
          en: "React props are immutable. Never attempt to reassign props values directly inside child component routines.",
        },
        debugging: {
          bn: "প্রপস ঠিকঠাক প্রবাহিত হচ্ছে কিনা তা দেখতে ব্রাউজারে 'React Developer Tools' ক্রোম এক্সটেনশন দিয়ে ইন্সপেক্ট করে চেক করুন।",
          en: "Install the React Developer Tools Chrome extension to trace properties values across tree layers.",
        },
        performance: {
          bn: "লিস্ট ডাটা রেন্ডার করার সময় চাইল্ড নোডে ইউনিক 'key' প্রপার্টি ব্যবহার করতে ভুলবেন না, নতুবা রিঅ্যাক্ট ডম আপডেট করতে কনফিউজড হয়ে পারফরম্যান্স ড্রপ করবে।",
          en: "Always attach unique 'key' props when mapping array lists to help React track element shifts.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "rt-q1",
      question: {
        bn: "রিঅ্যাক্ট (React) মূলত কোন ধরণের সফটওয়্যার সামগ্রী?",
        en: "What is React in web development?",
      },
      options: [
        {
          bn: "একটি ডেটাবেজ ম্যানেজমেন্ট ইঞ্জিন",
          en: "A relational database management system",
        },
        {
          bn: "ইউজার ইন্টারফেস (UI) তৈরির জন্য একটি জনপ্রিয় ওপেন সোর্স জাভাস্ক্রিপ্ট লাইব্রেরি",
          en: "An open-source JavaScript library used for building user interfaces",
        },
        { bn: "একটি অপারেটিং সিস্টেম", en: "An operating system platform" },
        { bn: "সিএসএস ফ্রেমওয়ার্ক", en: "A custom CSS framework" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রিঅ্যাক্ট হলো ফেসবুকের তৈরি করা জাভাস্ক্রিপ্ট ইউআই লাইব্রেরি যা মডিউলার কম্পোনেন্ট তৈরিতে ব্যবহৃত হয়।",
        en: "React is a UI-focused client-side JavaScript library.",
      },
    },
    {
      id: "rt-q2",
      question: {
        bn: "রিঅ্যাক্ট প্রজেক্টের ক্ষেত্রে কম্পোনেন্ট (Component) বলতে কী বোঝায়?",
        en: "What is a React Component?",
      },
      options: [
        { bn: "একটি বড় ফটো ব্যাকআপ ফাইল", en: "A heavy image file asset" },
        {
          bn: "একটি স্বাধীন, পুনর্ব্যবহারযোগ্য ইউজার ইন্টারফেস ব্লক বা কোড ফাংশন",
          en: "An independent, reusable block of UI defined as a function",
        },
        {
          bn: "এইচটিএমএলের পুরো বডি ট্যাগ",
          en: "The entire body tag of HTML documents",
        },
        { bn: "সার্ভারের আইপি এড্রেস", en: "The server IP address" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কম্পোনেন্ট হলো ইউআই-এর ক্ষুদ্র মডিউল (যেমন Navbar, Card) যা বারবার প্রজেক্টে রিইউজ করা যায়।",
        en: "Components are decoupled UI blocks returning JSX markups.",
      },
    },
    {
      id: "rt-q3",
      question: {
        bn: "রিঅ্যাক্টে ব্যবহৃত জেএসএক্স (JSX) এর কাজ ও রূপ কী?",
        en: "What is JSX in React?",
      },
      options: [
        {
          bn: "একটি ডাটাবেজ ক্যোয়ারী ল্যাঙ্গুয়েজ",
          en: "A database query syntax",
        },
        {
          bn: "জাভাস্ক্রিপ্ট ফাইলের ভেতরে সরাসরি এইচটিএমএল ট্যাগ লেখার স্পেশাল সিনট্যাক্স",
          en: "A syntax extension allowing HTML elements to be written directly within JavaScript code",
        },
        { bn: "একটি সিএসএস সিলেক্টর কোড", en: "A custom CSS selector string" },
        { bn: "গিট কমিট কমান্ড", en: "A git commit command utility" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "JSX আমাদের কোটেশন ছাড়াই জাভাস্ক্রিপ্টের ভেতর সরাসরি ব্রাউজার ট্যাগ বা এইচটিএমএল রিটার্ন করার সুবিধা দেয়।",
        en: "JSX compiles into react elements call blocks, facilitating templating inside script files.",
      },
    },
    {
      id: "rt-q4",
      question: {
        bn: "প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডাইনামিক ডাটা ট্রান্সফার করতে কোনটি ব্যবহার করা হয়?",
        en: "What is used to pass dynamic data down to child components?",
      },
      options: [
        { bn: "DNS Records", en: "DNS Records" },
        { bn: "Props (Properties)", en: "Props (Properties)" },
        { bn: "Git Push", en: "Git Push" },
        { bn: "Operating System Kernels", en: "Operating System Kernels" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "প্রপস হলো চাইল্ড ফাংশনে প্যারামিটার পাঠিয়ে ডাটা ভ্যালু কাস্টমাইজ করার ইনপুট রিড-অনলি গেটওয়ে।",
        en: "Props act as data attributes passed into component parameters context.",
      },
    },
    {
      id: "rt-q5",
      question: {
        bn: "রিঅ্যাক্ট প্রপস (Props) এর আচরণ কেমন হয়?",
        en: "What is the behavior of React Props?",
      },
      options: [
        {
          bn: "যেকোনো সময় কোডে রি-অ্যাসাইন করে চাইল্ডের ভেতর পরিবর্তন করা যায়",
          en: "Mutable: Can be overwritten directly inside children",
        },
        {
          bn: "রিড-অনলি বা অপরিবর্তনশীল (Immutable)",
          en: "Read-only and immutable",
        },
        {
          bn: "ডাটাবেজে সেভ হয়ে চিরতরে ডিলিট হয়",
          en: "Saves on physical drive permanently",
        },
        {
          bn: "এইচটিএমএল ফাইল ক্যাশে ক্লিয়ার করে",
          en: "Clears HTML document caches",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রিঅ্যাক্ট প্রপস সর্বদা রিড-অনলি বা অপরিবর্তনশীল থাকে যাতে ডেটা প্রবাহ একমুখী ও সুরক্ষিত থাকে।",
        en: "Props cannot be reassigned by the receiving child component, maintaining data predictability.",
      },
    },
  ],
  practice: [
    {
      bn: "একটি রিঅ্যাক্ট বাটন কম্পোনেন্ট তৈরি করুন যা প্রপস থেকে 'label' রিসিভ করে বোতামের ভেতর লেখা হিসেবে দেখাবে।",
      en: "Write a React Button component displaying a label value retrieved from props.",
    },
    {
      bn: "ফেসবুক ফিডের একটি পোস্ট কার্ডকে কোন কোন রিঅ্যাক্ট কম্পোনেন্টে ভাগ করা যায়? নামগুলো ক্রমানুসারে লিখুন।",
      en: "Deconstruct a standard Facebook feed post card layout into separate React components.",
    },
    {
      bn: "রিঅ্যাক্ট জেএসএক্স (JSX) এ এইচটিএমএল 'class' কেন সরাসরি ব্যবহার করা যায় না? কারণটি লিখুন।",
      en: "Explain why standard class attributes are replaced by className inside React JSX templates.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি ডাইনামিক প্রোডাক্ট প্রমোশন কার্ড কম্পোনেন্ট",
      en: "Dynamic Product Promo Card Component Design",
    },
    description: {
      bn: "একটি রিঅ্যাক্ট প্রোডাক্ট কার্ড কম্পোনেন্ট ডিজাইন করুন যা প্রপস থেকে প্রোডাক্টের নাম (title) এবং মূল্য (price) রিসিভ করে একটি কার্ড ফরম্যাটে রেন্ডার করবে।",
      en: "Design the JSX markup structure and parameter definitions for a ProductCard component rendering dynamic title and price values.",
    },
    starterCode: `// React Product Card Schema
import React from 'react';

function ProductCard(props) {
  return (
    // কোড লিখুন: প্রপস থেকে টাইটেল ও প্রাইস রেন্ডার করুন
    
  );
}

// প্যারেন্ট রেন্ডারিং এক্সাম্পল
// <ProductCard title="কোডিং ল্যাপটপ" price="৳৮০,০০০" />`,
    solution: {
      code: `// React Product Card Completed
import React from 'react';

function ProductCard(props) {
  return (
    <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm w-60">
      <h4 className="text-base font-bold text-slate-800">{props.title}</h4>
      <p className="mt-1 text-sm text-emerald-600 font-semibold">{props.price}</p>
    </div>
  );
}

export default function App() {
  return <ProductCard title="কোডিং ল্যাপটপ" price="৳৮০,০০০" />;
}`,
      explanation: {
        bn: "চমৎকার কম্পোনেন্ট ডিজাইন! প্রপস থেকে title এবং price ডাইনামিক ভ্যালু রেন্ডার করার জেএসএক্স লেআউট ফ্লোটি শতভাগ সঠিক হয়েছে।",
        en: "Evaluating props templates parameters configures scalable visual grids configurations in React applications.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "রিঅ্যাক্টের ভার্চুয়াল ডম (Virtual DOM) কী এবং এটি কীভাবে প্রজেক্ট রেন্ডারিং পারফরম্যান্স বৃদ্ধি করে?",
        en: "What is React's Virtual DOM and how does it optimize rendering performance?",
      },
      answer: {
        bn: "ভার্চুয়াল ডম হলো ব্রাউজারের আসল ডকুমেন্ট অবজেক্ট মডেলের (Real DOM) একটি হালকা ইন-মেমরি ক্লোন কপি। যখন অ্যাপ্লিকেশনের কোনো ডেটা চেঞ্জ হয়, রিঅ্যাক্ট সরাসরি আসল ডম আপডেট না করে মেমরিতে থাকা ভার্চুয়াল ডমে নতুন রেন্ডার ট্রি তৈরি করে। এরপর সে পূর্বের ভার্চুয়াল ডমের সাথে বর্তমান ডমের তুলনা করে বের করে ঠিক কোন ফাইলে বা কোন বাটনের লেখায় পরিবর্তন এসেছে (একে 'Diffing' অ্যালগরিদম বলা হয়)। অবশেষে কেবল সেই পরিবর্তিত অংশটুকুই সে আসল ব্রাউজার ডমে রি-রেন্ডার করে (একে Reconciliation বলে)। পুরো পেজ রিফ্রেশ না করার কারণে সাইট স্পিড ও পারফরম্যান্স চরম বৃদ্ধি পায়।",
        en: "The Virtual DOM is a lightweight, in-memory representation of the browser's actual DOM nodes. When application states alter, React rebuilds the Virtual DOM tree structure, comparing it to the previous snapshot to isolate exact differences using a Diffing algorithm. It updates only the specific node delta in the browser's Real DOM rather than re-rendering the whole page template. This avoids layout reflow calculations, maintaining fast interface updates.",
      },
    },
    {
      question: {
        bn: "রিঅ্যাক্ট প্রপস (Props) কেন অপরিবর্তনশীল (Immutable) বা রিড-অনলি রাখা হয়? এটি পরিবর্তন করার চেষ্টা করলে কী সমস্যা হবে?",
        en: "Why are React Props immutable? What happens if developers try to modify them?",
      },
      answer: {
        bn: "রিঅ্যাক্ট 'একমুখী ডেটা প্রবাহ' (One-Way Data Flow) নীতি মেনে চলে। প্রপস অপরিবর্তনশীল রাখা হয় ডেটার সিকিউরিটি ও নিশ্চয়তা বজায় রাখার জন্য। চাইল্ড যদি প্যারেন্ট থেকে আসা ডাটা প্রপস এডিট করে দিতে পারতো, তবে প্যারেন্ট নিজেই কনফিউজড হয়ে যেত এবং অ্যাপের বিভিন্ন জায়গায় ডেটা অসঙ্গতি (Data Inconsistency) দেখা দিত। প্রপস চেঞ্জ করার ট্রাই করলে রিঅ্যাক্ট টার্মিনালে এরর দেবে (TypeError: Cannot assign to read-only property)। চাইল্ড যদি ডাটা ভ্যালু আপডেট করতে চায়, তাকে সরাসরি প্রপস এডিট না করে প্যারেন্টের পাঠানো একটি স্টেট কলব্যাক ফাংশন ট্রিগার করতে হয়, যা প্যারেন্টকে বলে তার নিজের ডাটা চেঞ্জ করতে।",
        en: "React enforces a strict unidirectional data flow. Props are immutable to maintain data predictability. If a child component could mutate properties received from its parent, state consistency would drift, making debugging extremely difficult. Modifying props directly yields TypeError exceptions. If children must suggest value changes, they execute callback function handlers passed as props, requesting the parent node to modify its state variables.",
      },
    },
  ],
};
