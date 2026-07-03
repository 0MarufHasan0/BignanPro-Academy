import { Chapter } from "@/types";

export const chapter5Content: Chapter = {
  id: "chapter-5",
  number: 5,
  title: {
    bn: "অধ্যায় ৫: ডেভেলপার মাইন্ডসেট — গভীর চিন্তাপদ্ধতি ও সিস্টেম ডিজাইন",
    en: "Chapter 5: Developer Mindset — Deep Thinking System",
  },
  description: {
    bn: "কোড মুখস্থ না করে কীভাবে প্রফেশনালদের মতো সিস্টেম ডিজাইন করতে হয়, অ্যাবস্ট্রাকশন কী এবং বড় বড় প্রজেক্ট ভাঙার বাস্তবসম্মত গাইড।",
    en: "Learn how professional software developers think deeply in systems, apply abstraction layers, decompose complex architectures, and plan before coding.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "অগভীর কোডিং চিন্তা (Shallow Thinking) এবং গভীর সিস্টেম চিন্তা (Deep Thinking) এর তফাৎ বোঝা।",
      en: "Differentiate between shallow syntax-focused thinking and deep system thinking.",
    },
    {
      bn: "যেকোনো জটিল সফটওয়্যারকে লেয়ার বা স্তরে (UI, Logic, Data) বিভক্ত করার কৌশল (Abstraction) শেখা।",
      en: "Master abstraction, dividing software into UI, Logic, and Data layers.",
    },
    {
      bn: "৬টি ধাপে বড় প্রজেক্টকে সম্পূর্ণ ভেঙে ফেলার সিস্টেম্যাটিক ফ্রেমওয়ার্ক আয়ত্ত করা।",
      en: "Learn a systematic 6-step framework to decompose large applications.",
    },
    {
      bn: "ফুড ডেলিভারি বা ইন্সটাগ্রামের মতো বড় সিস্টেমকে আর্কিটেকচারাল মডিউলে সাজানোর দক্ষতা অর্জন করা।",
      en: "Acquire the skill to break down real-world apps like food delivery and Instagram into logical components.",
    },
  ],
  sections: [
    {
      id: "deep-thinking-vs-shallow",
      title: {
        bn: "১. অগভীর বনাম গভীর চিন্তাপদ্ধতি (Shallow vs Deep Thinking)",
        en: "1. Shallow vs Deep Thinking",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
যখন আপনি জাভাস্ক্রিপ্ট বা পাইথনের মতো কোডিং ল্যাঙ্গুয়েজ শিখছেন, তখন আপনি আসলে একটি ভাষা বা হাতিয়ার শিখছেন। কিন্তু এই হাতিয়ারটিকে দিয়ে কীভাবে একটি বড় যুদ্ধ জয় করবেন—তা নির্ভর করে আপনার রণকৌশলের ওপর। প্রোগ্রামিংয়ের জগতে এই রণকৌশলই হলো **ডেভেলপার মাইন্ডসেট (Developer Mindset)**।

## Why should I learn this? (কেন শিখবো?)
যারা শুধু কোডের লাইনের পর লাইন মুখস্থ করেন, তারা সামান্য এরর আসলেই থমকে যান। কিন্তু যারা সিস্টেম ডিজাইনের মতো গভীর চিন্তাপদ্ধতি বোঝেন, তারা যেকোনো জটিল অ্যাপ্লিকেশন খুব সহজে এবং নির্ভুলভাবে ডিজাইন করতে পারেন।

## Shallow vs Deep Thinking (চিন্তার পার্থক্য)
আসুন একটি তুলনা দিয়ে বিষয়টি বুঝি:
*   **অগভীর চিন্তাবিদ (Shallow Thinker)**: যখন কোড কাজ করে না, তখন তারা চিৎকার করে ওঠেন—*"কোড কাজ করছে না কেন?"* তারা সিনট্যাক্সের ভুল খুঁজতে থাকেন এবং গুগলে সরাসরি উত্তর খুঁজে কপি করতে চান।
*   **গভীর চিন্তাবিদ (Deep Thinker)**: যখন কোড কাজ করে না, তখন তারা শান্ত মাথায় বিশ্লেষণ করেন—*"সিস্টেমের ঠিক কোন অংশটি ভেঙে পড়েছে? ডাটা কি ফ্রন্টএন্ড থেকে এপিআই (API) পর্যন্ত পৌঁছাচ্ছে, নাকি এপিআই থেকে ডেটাবেজে যাওয়ার সময় ব্লক হচ্ছে?"* তারা পুরো অ্যাপ্লিকেশনটিকে একটি প্রবাহিত জলস্রোতের মতো দেখেন।

গভীর চিন্তা আপনাকে কোডের লাইনের বাইরে গিয়ে পুরো সফটওয়্যারের গতিপথ ও স্ট্রাকচার বুঝতে সাহায্য করে।`,
        en: `## Introduction
Learning coding syntax is learning a tool. How you use that tool to engineer scalable architectures is what defines a software developer.

## Shallow vs. Deep Thinking
*   **Shallow Thinker**: Asks emotionally, "Why is my code broken?" Focuses only on syntax fixes.
*   **Deep Thinker**: Asks analytically, "Which component in the data pipeline is failing to transmit packets?" Visualizes the program as a fluid system flow.`,
      },
    },
    {
      id: "system-thinking-layers",
      title: {
        bn: "২. সিস্টেমেটিক চিন্তাধারা ও লেয়ারড অ্যাবস্ট্রাকশন (System Thinking & Layers)",
        en: "2. System Thinking & Layers",
      },
      content: {
        bn: `## Everything is a System of Systems (সবকিছুই সিস্টেমের সমষ্টি)
বাস্তব পৃথিবীর যেকোনো বড় জিনিস যেমন ছোট ছোট পার্টস দিয়ে তৈরি, আমাদের সফটওয়্যারও ঠিক তেমনি।

যেমন: **ফেসবুকের লগইন সিস্টেম (Login System)**
এটি দেখতে একটি সাধারণ লগইন পেজ হলেও পেছনের সিস্টেমগুলো লক্ষ্য করুন:
১. **ইউজার ইন্টারফেস সিস্টেম (UI System)**: যেখানে ফর্ম, বাটন এবং ডিজাইন দেখা যায়।
২. **ভ্যালিডেশন সিস্টেম (Validation)**: ইমেইলটি সঠিক কিনা তা চেক করা।
৩. **এপিআই কানেকশন সিস্টেম (API)**: ডাটাবেজে রিকোয়েস্ট পাঠানোর চ্যানেল।
৪. **ডাটাবেজ সিস্টেম (Database)**: যেখানে আসল ইউজার ডাটা সেভ থাকে।
৫. **সিকিউরিটি ও সেশন সিস্টেম (Auth Session)**: লগইন হওয়ার পর ইউজারকে সেশনে ধরে রাখা।

## Abstraction Thinking: Don't Think of Everything at Once (অ্যাবস্ট্রাকশন কী?)
সফটওয়্যার অনেক বড় ও জটিল হতে পারে। প্রফেশনালরা একসাথে সব চিন্তা করেন না। তারা কোডকে তিনটি প্রধান লেয়ার বা স্তরে বিভক্ত করে চিন্তা করেন, একেই বলে **অ্যাবস্ট্রাকশন (Abstraction)**:

১. **ইউজার ইন্টারফেস লেয়ার (UI Layer)**: শুধুমাত্র স্ক্রিনের ডিজাইন ও বাটন। (ভিজুয়াল স্তরের চিন্তা)
২. **লজিক লেয়ার (Logic/API Layer)**: হিসাবনিকাশ, কন্ডিশন ও ডাটা ট্রান্সফার। (মস্তিষ্ক স্তরের চিন্তা)
৩. **ডাটা লেয়ার (Data Layer)**: ডেটাবেজে তথ্য সেভ করা ও ফিরিয়ে আনা। (মেমরি স্তরের চিন্তা)

যখন আপনি UI ডিজাইন করছেন, তখন ডাটাবেজে কী কুয়েরি চলবে তা নিয়ে মাথা ঘামানোর প্রয়োজন নেই। এই লেয়ারড চিন্তাই কোডিংকে সহজ করে তোলে।`,
        en: `## System of Systems
Every modern application is an orchestra of minor systems operating in synergy. E.g., User Authentication breaks down into validation pipelines, HTTP APIs, and DB lookup operations.

## Abstraction Layers
Do not process entire projects simultaneously. Isolate logic into layers:
1. **Presentation Layer (UI)**: Visual design and styling sheets.
2. **Logic Layer (API/Control)**: Data transformations and route checks.
3. **Data Layer (DB)**: Schema blueprints and query transactions.`,
      },
    },
    {
      id: "problem-breaking-rules",
      title: {
        bn: "৩. প্রবলেম ব্রেকিং ওয়ার্কফ্লো (Problem Breaking Workflow)",
        en: "3. Problem Breaking Workflow",
      },
      content: {
        bn: `## The 6-Step Deconstruction System (সমস্যা ভাঙার ৬টি ধাপ)
যেকোনো বড় চ্যালেঞ্জকে সমাধান করতে এই ৬টি লজিক্যাল ধাপ সবসময় অনুসরণ করুন:

১. **সমস্যাটি ভালোভাবে বোঝা (Understand)**: রিকোয়ারমেন্টস পরিষ্কার করা।
২. **অংশে অংশে বিভক্ত করা (Decompose)**: প্রজেক্টকে ছোট মডিউলে ভাগ করা।
৩. **ইনপুট চিহ্নিত করা (Inputs)**: এই সিস্টেমে কী কী ডাটা প্রবেশ করবে?
৪. **আউটপুট চিহ্নিত করা (Outputs)**: সিস্টেম থেকে ইউজার কী ফলাফল পাবেন?
৫. **ছোট ছোট মডিউল তৈরি করা (Build Small)**: একটি করে ফিচার কোড করা।
৬. **যুক্ত করা (Combine)**: ছোট মডিউলগুলো একসাথে যুক্ত করা।

---
## The Input-Output Mindset (ইনপুট-আউটপুট থিংকিং)
যেকোনো ফাংশন বা লজিক লেখার আগে নিজেকে ২টি প্রশ্ন করুন:
*   *"এই লজিকটি চালু করার জন্য আমার ইনপুট হিসেবে কী কী ডাটা প্রয়োজন?"*
*   *"কাজ শেষে এই লজিকটি আমাকে আউটপুট হিসেবে কী ফলাফল বা ডেটা রিটার্ন করবে?"*

এটি করতে পারলে আপনার কোডিং লজিকে কখনো এলোমেলো অবস্থা (Chaos) তৈরি হবে না।`,
        en: `## The 6-Step Deconstruction Framework
1. Define the objective requirements.
2. Decompose into modules.
3. Establish what Inputs (data types) are needed.
4. Establish what Outputs are expected.
5. Code one modular check at a time.
6. Connect all parts.`,
      },
    },
    {
      id: "case-study-food-delivery",
      title: {
        bn: "৪. বাস্তব উদাহরণ: ফুড ডেলিভারি অ্যাপ (Real-World Case Study: Food Delivery App)",
        en: "4. Real-World Case Study: Food Delivery App",
      },
      content: {
        bn: `## Case Study: Food Delivery App (ফুডপান্ডা যেভাবে চিন্তা করবেন)
নতুনরা ফুড ডেলিভারি অ্যাপের মতো বড় প্রজেক্টের কথা শুনে ভয় পান। কিন্তু আপনি যদি একজন সিস্টেম আর্কিটেক্ট বা সিনিয়রের মতো ভাবেন, তবে আপনি এটিকে ৪টি সাব-সিস্টেমে ভাগ করবেন:

১. **কাস্টমার সিস্টেম (User App)**:
   *   ইনপুট: ইউজার লোকেশন, খাবার অর্ডার ও পেমেন্ট ডাটা।
   *   কাজ: রেস্টুরেন্ট ব্রাউজ করা, কার্ট তৈরি করা ও ট্র্যাকিং করা।
২. **রেস্টুরেন্ট সিস্টেম (Restaurant Panel)**:
   *   ইনপুট: নতুন অর্ডার অ্যালার্ট, খাবারের মেনু কনফিগারেশন।
   *   কাজ: অর্ডার রিসিভ করা ও খাবার প্রস্তুতের লাইভ স্ট্যাটাস দেওয়া।
৩. **ডেলিভারি ম্যান সিস্টেম (Rider App)**:
   *   ইনপুট: রাইডারের জিপিএস কো-অর্ডিনেট, ডেলিভারি রিকোয়েস্ট।
   *   কাজ: অর্ডার গ্রহণ করা, কাস্টমার লোকেশন ম্যাপে দেখা ও ওটিপি (OTP) নেওয়া।
৪. **অ্যাডমিন সিস্টেম (Central Admin Portal)**:
   *   কাজ: খাবার প্রস্তুত থেকে ডেলিভারি পর্যন্ত পুরো ফ্লো মনিটর করা, বিল বন্টন ও সাপোর্ট প্রদান।

এভাবে ভাবলে আপনার কাছে পুরো অ্যাপ্লিকেশনটি কত সাধারণ ও গোছানো মনে হবে! এটিই হলো সিস্টেম থিংকিংয়ের আসল জাদু।`,
        en: `## Case Study: Food Delivery System
Decompose a massive app like Foodpanda into 4 independent sub-systems:
1. **User Client**: Location inputs, catalog views, cart additions, payment checkouts.
2. **Merchant Portal**: Order alarms, menu adjustments, status updates.
3. **Rider App**: GPS transmissions, delivery routes, OTP clearances.
4. **Admin Dashboard**: Central analytics, commission splitting, customer support.`,
      },
      codeBlock: {
        fileName: "system_design.js",
        language: "javascript",
        code: `// ফুড ডেলিভারি অর্ডারের একটি অত্যন্ত সরল লজিক্যাল ডেমো
const activeOrder = {
  orderId: "FP-9082",
  items: ["বিরিয়ানি", "কোক"],
  price: 250,
  status: "PREPARING" // PREPARING -> RIDER_PICKED -> DELIVERED
};

function updateOrderStatus(order, nextStatus) {
  console.log(\`📦 অর্ডার \${order.orderId} এর বর্তমান অবস্থা: \${order.status}\`);
  order.status = nextStatus;
  console.log(\`🚀 আপডেট করা অবস্থা: \${order.status}\`);
  
  if (nextStatus === "DELIVERED") {
    sendNotificationToUser(order.orderId);
  }
}

function sendNotificationToUser(id) {
  console.log(\`🔔 ইউজারকে মেসেজ পাঠানো হলো: আপনার অর্ডার \${id} সফলভাবে ডেলিভার হয়েছে!\`);
}

updateOrderStatus(activeOrder, "RIDER_PICKED");
updateOrderStatus(activeOrder, "DELIVERED");`,
        explanations: [
          {
            line: 2,
            text: {
              bn: "অর্ডারের ডাটা ভ্যালু অবজেক্ট, যেখানে বর্তমান স্ট্যাটাস রাখা হয়েছে।",
              en: "The order state object storing parameters and item arrays.",
            },
          },
          {
            line: 8,
            text: {
              bn: "ফাংশনটি অর্ডারের স্ট্যাটাস পরিবর্তন করে এবং ডেলিভারড হলে ইউজারকে নোটিফিকেশন সিস্টেম কল করে।",
              en: "Function updating status key and triggering client notification.",
            },
          },
        ],
      },
    },
    {
      id: "think-before-code-rule",
      title: {
        bn: "৫. কোডিংয়ের সুবর্ণ নিয়ম: পরিকল্পনা (Think Before You Code)",
        en: "5. Think Before You Code",
      },
      content: {
        bn: `## Golden Rule of Programming (কোডিংয়ের সুবর্ণ নিয়ম)
আমরা আবারও মনে করিয়ে দিচ্ছি: **"Never start coding immediately."**

জুনিয়র ও সিনিয়র ডেভেলপারদের চিন্তার মৌলিক পার্থক্য এখানেই:
*   **জুনিয়রের পদ্ধতি**: টাস্ক পাওয়ার সাথে সাথে আইডিই (IDE) ওপেন করে কোড লেখা শুরু করা। কোড এরর খেলে তা এলোমেলোভাবে জোড়াতালি দেওয়া।
*   **সিনিয়রের পদ্ধতি**: আগে ঠান্ডা মাথায় খাতা-কলমে সিস্টেমের ডায়াগ্রাম আঁকা। ডাটা ফ্লো ও ইনপুট-আউটপুট নিশ্চিত করা। লজিক্যাল ব্লকের সিকিউরিটি ডিজাইন করা। এরপর যখন প্ল্যান কমপ্লিট, তখন অত্যন্ত শান্ত ও দ্রুত গতিতে পরিচ্ছন্ন কোড টাইপ করে ফেলা।

প্রথম ২০ মিনিট পরিকল্পনা করা আপনাকে পরবর্তী ৩ ঘণ্টার অতিরিক্ত পরিশ্রম ও এররের ঝামেলা থেকে অনায়াসে বাঁচিয়ে দেবে।`,
        en: `## The Developer Gold Standard
Planning saves programming lifetimes. Spend 20 minutes drafting logic trees and database flows before writing a single line of script.`,
      },
    },
    {
      id: "practice-mentor-mindset",
      title: {
        bn: "৬. প্র্যাকটিস টাস্ক ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Practice & Reflection (বাস্তব চিন্তার প্র্যাকটিস)
নিচের প্র্যাকটিস সেকশনে দেওয়া অ্যাপ্লিকেশনগুলোর আর্কিটেকচার নিজে নিজে চিন্তা করুন। কোডিং ছাড়া কেবল সিস্টেম ডিজাইনের খসড়া তৈরি করুন। এটি আপনার সিস্টেম থিংকিংয়ের ক্ষমতা বাড়াবে।`,
        en: `## Practice & Reflection
Practice abstract thinking by breaking down the logic architecture of daily apps.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "সিস্টেম থিংকিং আপনাকে কোডের অন্ধ অনুকরণ থেকে মুক্ত করে একজন দূরদর্শী স্থপতি বা 'সফটওয়্যার আর্কিটেক্ট' হিসেবে গড়ে তোলে।",
          en: "System thinking turns you from a code typewriter into a software architect. Architecture dictates scalability.",
        },
        whyWorks: {
          bn: "লেয়ারড অ্যাবস্ট্রাকশন (UI, Logic, Data) ব্যবহারের ফলে ডেভেলপার যেকোনো এক সময়ে মাত্র একটি ব্লকে ফোকাস করতে পারেন, ফলে কোড ভুল কম হয়।",
          en: "Separation of concerns isolates variables, preventing collateral damage to other modules during updates.",
        },
        professionalThinking: {
          bn: "সিনিয়র ডেভেলপাররা কোড কত লাইনে লেখা হলো তা দেখেন না। তারা দেখেন কোডটি কতটা রি-ইউজেবল (Reusable) এবং স্কেলেবল (Scalable)।",
          en: "Senior engineers evaluate design patterns for component reuse and performance optimization.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় ভুল হলো পুরো প্রজেক্ট একবারে কোড করার চেষ্টা করা। প্রতিটি ছোট ছোট মডিউল আলাদা টেস্ট করে তবেই মেইন ব্রাঞ্চে মার্জ করুন।",
          en: "Attempting to code everything at once leads to debugging nightmare. Build and test iteratively.",
        },
        debugging: {
          bn: "বাগ আসলে ভাবুন: 'এই এররটি কি ফ্রন্টএন্ডে হচ্ছে, লজিকে হচ্ছে নাকি ডাটাবেজের ডাটায় ভুল থাকার কারণে হচ্ছে?'",
          en: "Trace data payloads across communication endpoints to isolate which layer is failing.",
        },
        performance: {
          bn: "ডাটাবেজে অপ্রয়োজনীয় ভারী কুয়েরি চালানো পরিহার করুন। প্রথম থেকেই অপ্টিমাইজড ডাটা ফ্লো প্ল্যান করুন।",
          en: "Ensure index structures are optimal to prevent bottleneck searches on large collections.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "dm-q1",
      question: {
        bn: "গভীর চিন্তাধারা (Deep Thinking) অনুযায়ী কোডে বাগ আসলে ডেভেলপারের প্রথম কাজ কী?",
        en: "According to Deep Thinking, what is a developer's first step when a bug occurs?",
      },
      options: [
        { bn: "হতাশ হয়ে প্রজেক্টের কাজ বন্ধ করা", en: "Get frustrated and stop work" },
        { bn: "সিস্টেমের কোন লেয়ার বা মডিউলে ডাটা ফ্লো ব্যাহত হচ্ছে তা শান্তভাবে বিশ্লেষণ করা", en: "Calmly analyze which layer or module in the system is failing the data flow" },
        { bn: "সব কোড ডিলিট করে আবার লেখা শুরু করা", en: "Delete all files and write from scratch" },
        { bn: "এআই কে দিয়ে সরাসরি নতুন কোড জেনারেট করানো", en: "Directly tell AI to write new codes" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "গভীর চিন্তাবিদরা এররকে সিস্টেম ফ্লোর দৃষ্টিকোণ থেকে দেখেন এবং সমস্যা চিহ্নিত করতে ডেটা ট্র্যাকিং করেন।",
        en: "Deep thinkers inspect variables state and trace data paths across modules to isolate errors.",
      },
    },
    {
      id: "dm-q2",
      question: {
        bn: "কোডকে UI, Logic, এবং Data স্তরে বিভক্ত করে সহজ করার চিন্তাধারাকে কী বলা হয়?",
        en: "What is the concept of isolating code into UI, Logic, and Data layers called?",
      },
      options: [
        { bn: "ইন্টিগ্রেশন (Integration)", en: "Integration" },
        { bn: "অ্যাবস্ট্রাকশন (Abstraction)", en: "Abstraction" },
        { bn: "সিনট্যাক্স লোডিং (Syntax Loading)", en: "Syntax Loading" },
        { bn: "সেশন কন্ট্রোল (Session Control)", en: "Session Control" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "অ্যাবস্ট্রাকশন হলো কোডের জটিলতাকে আড়াল করে গুরুত্বপূর্ণ অংশে আলাদা ফোকাস দেওয়ার চিন্তাপদ্ধতি।",
        en: "Abstraction hides background complexities, letting developers focus on a single layer at a time.",
      },
    },
    {
      id: "dm-q3",
      question: {
        bn: "সবচেয়ে বড় ক্ষতিকর প্র্যাকটিস কোনটি?",
        en: "What is the most harmful developer practice?",
      },
      options: [
        { bn: "কোড করার আগে সিউডোকোড বা খসড়া প্ল্যান করা", en: "Drafting pseudocode before writing script" },
        { bn: "লজিক না ভেবে সরাসরি আইডিই তে কোড করা শুরু করা", en: "Starting to code directly in the IDE without any logic planning" },
        { bn: "এরর মেসেজ মনোযোগ দিয়ে রিড করা", en: "Reading error logs carefully" },
        { bn: "মডিউলার বা রিউজেবল কোড তৈরি করা", en: "Creating modular and reusable functions" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "পরিকল্পনাহীন কোডিং আপনাকে এলোমেলো কোড তৈরিতে বাধ্য করে যা পরবর্তীতে ডিবাগ করা অসম্ভব হয়ে দাঁড়ায়।",
        en: "Coding without planning creates unstructured spaghetti structures that are extremely hard to debug.",
      },
    },
    {
      id: "dm-q4",
      question: {
        bn: "ফুড ডেলিভারি অ্যাপ ডিকম্পোজিশন অনুযায়ী, খাবার প্রস্তুতের লাইভ নোটিফিকেশন মূলত কোন সিস্টেম প্রসেস করে?",
        en: "In food delivery decomposition, which sub-system handles order preparation status updates?",
      },
      options: [
        { bn: "রাইডার সিস্টেম (Rider App)", en: "Rider App" },
        { bn: "রেস্টুরেন্ট সিস্টেম (Restaurant Panel)", en: "Restaurant Panel" },
        { bn: "কাস্টমার সিস্টেম (User Client)", en: "User Client" },
        { bn: "পেমেন্ট গেটওয়ে (Payment)", en: "Payment Gateway" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রেস্টুরেন্ট প্যানেল থেকে শেফ অর্ডারের লাইভ স্ট্যাটাস আপডেট করেন যা সার্ভার কাস্টমারকে নোটিফাই করে।",
        en: "The merchant/restaurant panel controls food status variables, serving updates to the central API.",
      },
    },
    {
      id: "dm-q5",
      question: {
        bn: "জুনিয়র ও সিনিয়র ডেভেলপারের কাজের পদ্ধতির প্রধান তফাৎ কী?",
        en: "What is the key differentiator in work approach between juniors and seniors?",
      },
      options: [
        { bn: "সিনিয়ররা কিবোর্ডে অনেক ফাস্ট টাইপ করেন", en: "Seniors type much faster on keyboards" },
        { bn: "সিনিয়ররা কোড লেখার চেয়ে আর্কিটেকচারাল পরিকল্পনা ও ডিকম্পোজিশনের পেছনে বেশি সময় দেন", en: "Seniors invest more time in system architecture planning and decomposition before coding" },
        { bn: "জুনিয়ররা কোনো এরর মেসেজ ফিক্স করতে পারেন না", en: "Juniors can never fix any errors" },
        { bn: "সিনিয়ররা কোনো এআই ব্যবহার করেন না", en: "Seniors avoid using any AI assistants" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সিনিয়র ডেভেলপাররা কোডিং শুরুর আগে সিস্টেমের আর্কিটেকচার ও লজিক্যাল ফ্লো সম্পূর্ণ ডিজাইন করে নেন।",
        en: "Professional software engineers prioritize structural planning over raw keyboard entry.",
      },
    },
  ],
  practice: [
    {
      bn: "ইউটিউব (YouTube) অ্যাপ্লিকেশনকে কাস্টমার, ক্রিয়েটর ও অ্যাডমিন—এই ৩টি মডিউল সিস্টেমে ডিকম্পোজ করুন। (No Code)",
      en: "Decompose YouTube app logic flow into Creator, Viewer, and Admin modules. (No code)",
    },
    {
      bn: "একটি ক্যালকুলেটর অ্যাপ্লিকেশনকে UI, Logic, এবং Data স্তরে কীভাবে ভাগ করবেন? খাতায় বা নোটে বিস্তারিত লিখুন।",
      en: "Describe how you would isolate a calculator project into UI, Logic, and Data layers.",
    },
    {
      bn: "আপনার জীবনের যেকোনো বাস্তবমুখী জটিল সমস্যাকে কীভাবে এই ৬টি ধাপে ভাঙবেন? নিজের ভাষায় ১টি উদাহরণ দিন।",
      en: "Decompose a personal real-world life challenge using our 6-step framework.",
    },
  ],
  assignment: {
    title: {
      bn: "কাল্পনিক ফটো-শেয়ারিং (Instagram) অ্যাপ্লিকেশনের লজিক্যাল ডিজাইন",
      en: "Logic Design & Architecture of a Photo-Sharing App",
    },
    description: {
      bn: "ইন্সটাগ্রামের মতো একটি ফটো শেয়ারিং অ্যাপের মূল কাঠামো বিশ্লেষণ করুন। ৩টি মূল ফিচার (যেমন: ফটো আপলোড, লাইক/কমেন্ট ও ইউজার ফিড) ডিকম্পোজ করে অবজেক্ট ডাটা ফ্লো সাবমিট করুন।",
      en: "Decompose a photo-sharing application (Instagram). Structure the features, databases, and variables inside a JS configuration object.",
    },
    starterCode: `// Photo Sharing App Decomposition Schema
const instaArchitecture = {
  appName: "Instagram Clone",
  threeCoreModules: [
    // ৩টি মূল মডিউলের তালিকা
  ],
  databaseCollections: [
    // কোন কোন টেবিল বা কালেকশন লাগবে
  ],
  isPlanFullyApprovedBeforeCoding: false
};`,
    solution: {
      code: `// Instagram App Decomposition Reference Solution
const instaArchitecture = {
  appName: "বিজ্ঞানপ্রো ইন্সটাগ্রাম",
  threeCoreModules: [
    "১. ফটো আপলোড ও প্রসেসিং মডিউল (UI + Logic)",
    "২. লাইক ও কমেন্ট রিয়েল-টাইম রেন্ডারিং মডিউল (Logic)",
    "৩. ফলোয়ার অ্যাক্টিভিটি টাইমলাইন ফিড জেনারেশন (Data)"
  ],
  databaseCollections: [
    "users (ইউজার অ্যাকাউন্ট ডাটা)",
    "posts (ফটো লিংক ও আপলোডের তারিখ)",
    "interactions (লাইক কাউন্টার ও কমেন্ট তালিকা)"
  ],
  isPlanFullyApprovedBeforeCoding: true
};`,
      explanation: {
        bn: "চমৎকার ডিজাইন! ডাটাবেজ টেবিল এবং মডিউল আলাদা করার মাধ্যমে আপনি একটি জটিল সিস্টেমকে অত্যন্ত পরিষ্কারভাবে সাজিয়েছেন।",
        en: "Structuring database collections and logic components prevents system architecture errors during coding.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "কোডিংয়ে অ্যাবস্ট্রাকশন (Abstraction) এর প্রয়োজনীয়তা কী এবং এটি কীভাবে জটিল প্রজেক্টের কাজের গতি বাড়ায়?",
        en: "Why is Abstraction necessary, and how does it optimize project delivery speed?",
      },
      answer: {
        bn: "অ্যাবস্ট্রাকশন কোডের জটিল ব্যাকগ্রাউন্ড ডিটেইলসকে লুকিয়ে রেখে আমাদের মাত্র একটি নির্দিষ্ট স্তরে (যেমন UI বা Database) কাজ করার সুযোগ দেয়। এর ফলে ডেভেলপারকে একই সাথে ড্যাশবোর্ডের ডিজাইন ও ডাটাবেজের সিকিউরিটি নিয়ে ভাবতে হয় না। এতে কোড মডিউলার থাকে, বাগ সহজে চিহ্নিত করা যায় এবং একাধিক ডেভেলপার একসাথে প্রজেক্টে কাজ করতে পারেন।",
        en: "Abstraction reduces cognitive overload by isolating layers. Developers can build frontend templates without knowing SQL queries, and DBA engineers can partition databases without affecting CSS styles, resulting in faster and parallel developer iterations.",
      },
    },
    {
      question: {
        bn: "সিস্টেম থিংকিং (System Thinking) বলতে কী বোঝায় এবং কেন জুনিয়র ডেভেলপারদের এটি শেখা উচিত?",
        en: "What is System Thinking and why should junior developers learn it?",
      },
      answer: {
        bn: "সিস্টেম থিংকিং হলো কোনো অ্যাপ্লিকেশনকে কেবল পৃথক লাইনের কোড হিসেবে না দেখে পুরো সিস্টেমের সমষ্টি হিসেবে দেখা। জুনিয়ররা সাধারণত লাইন বাই লাইন সিনট্যাক্স মুখস্থ করার ভুল করেন, যার ফলে বড় প্রজেক্ট দিলে তারা খেই হারিয়ে ফেলেন। সিস্টেম থিংকিং শিখলে তারা কোডকে ডাটা ফ্লো, এপিআই ইন্টারফেস ও মডিউল হিসেবে দেখতে পারেন, যা তাদের দ্রুত জটিল সফটওয়্যার তৈরিতে যোগ্য করে তোলে।",
        en: "System Thinking teaches engineers to analyze applications as interconnected modules. Juniors who focus only on line-by-line syntax struggle to scale. System thinking empowers them to understand API contracts, data stores, and event streams, turning them into capable programmers.",
      },
    },
  ],
};
