import { Chapter } from "@/types";

export const chapter1Content: Chapter = {
  id: "chapter-1",
  number: 1,
  title: {
    bn: "অধ্যায় ১: বিজ্ঞানপ্রো একাডেমিতে স্বাগতম — অনবোর্ডিং ও গাইডলাইন",
    en: "Chapter 1: Welcome to BignanPro Academy — Onboarding & Guidelines",
  },
  description: {
    bn: "প্রোগ্রামিং জার্নি শুরুর আগে সঠিক মাইন্ডসেট তৈরি, আমাদের লার্নিং মেথডোলজি, রোডম্যাপ এবং এআই (AI) এর সঠিক ব্যবহার গাইড।",
    en: "A comprehensive onboarding guide covering platform vision, learning methodology, roadmap, study hacks, and smart AI prompts.",
  },
  difficulty: "beginner",
  readingTime: 12,
  objectives: [
    {
      bn: "বিজ্ঞানপ্রো একাডেমি প্ল্যাটফর্ম এবং এর অনন্য শিক্ষা পদ্ধতি সম্পর্কে স্পষ্ট ধারণা পাওয়া।",
      en: "Understand what BignanPro Academy is and how its active learning system works.",
    },
    {
      bn: "ফুল স্ট্যাক ডেভেলপার হওয়ার সম্পূর্ণ লার্নিং রোডম্যাপ পরিষ্কারভাবে বোঝা।",
      en: "Visualize the entire Full Stack Web Development learning roadmap.",
    },
    {
      bn: "দৈনিক অনুশীলনের কৌশল এবং কোডিং শেখার সময় কোন কোন ভুল এড়াতে হবে তা জানা।",
      en: "Learn daily study strategies and critical mistakes to avoid as a beginner.",
    },
    {
      bn: "কোডিং শেখার গতি বাড়াতে কীভাবে এআই (AI) টুলসকে বুদ্ধিমানের মতো ব্যবহার করতে হয় তা শেখা।",
      en: "Master how to use AI tools correctly for explanations and debugging rather than copying.",
    },
  ],
  sections: [
    {
      id: "intro-onboarding",
      title: {
        bn: "১. বিজ্ঞানপ্রো একাডেমির যাত্রা শুরু (Welcome & Introduction)",
        en: "1. Welcome & Introduction",
      },
      content: {
        bn: `## Introduction (অনবোর্ডিং)
বিজ্ঞানপ্রো একাডেমির ইন্টারেক্টিভ লার্নিং বুকে আপনাকে স্বাগতম! এটি কোনো মুখস্থ করার গাইড নয়; এটি আপনার ডেভেলপার হওয়ার স্বপ্নকে বাস্তবে রূপ দেওয়ার একটি সম্পূর্ণ ল্যাবরেটরি। 

আপনি যদি একদম নতুন হয়ে থাকেন এবং কোডিংয়ের কিছুই না জানেন, তবে দুশ্চিন্তার কোনো কারণ নেই। আমরা ধরে নিচ্ছি আপনার জ্ঞান একদম শূন্য (০)। এখান থেকেই শুরু হবে আপনার লিজেন্ডারি জার্নি।

## Why this platform exists? (বিজ্ঞানপ্রো কেন তৈরি হয়েছে?)
ইন্টারনেটে হাজার হাজার ভিডিও টিউটোরিয়াল আছে, কিন্তু তবুও ৯০% মানুষ কোডিং শিখতে এসে ব্যর্থ হয়। কেন জানেন? 
ভিডিও দেখা অত্যন্ত সহজ, কিন্তু ভিডিও দেখে কোড না করে নিজে ব্রেন খাটানো হয় না। একে আমরা বলি **প্যাসিভ লার্নিং (Passive Learning)**। 

বিজ্ঞানপ্রো একাডেমি তৈরি হয়েছে এই সমস্যার সমাধান করতে। এখানে আপনাকে শুধু পড়তে হবে না; পড়ার সাথে সাথে ইন্টারঅ্যাক্টিভ অ্যানিমেশন দেখতে হবে, কোড বিশ্লেষণ করতে হবে এবং কুইজ ও এসাইনমেন্ট সলভ করতে হবে। এটি হলো **একটিভ লার্নিং (Active Learning)**।

## Why beginners fail? (নতুনদের ব্যর্থ হওয়ার কারণ)
১. **টিউটোরিয়াল হেল (Tutorial Hell)**: শুধু একের পর এক ভিডিও দেখা, নিজে কোনো রিয়েল প্রজেক্ট না বানানো।
২. **তাড়াহুড়ো করা**: এইচটিএমএল না শিখে সরাসরি রিঅ্যাক্ট (React) শিখতে যাওয়া।
৩. **ভুল এআই প্রম্পটিং**: এআই দিয়ে সরাসরি কোড কপি-পেস্ট করা।

বিজ্ঞানপ্রো সিস্টেম আপনাকে ধাপে ধাপে নিয়ে যাবে, যাতে আপনি কখনোই হারিয়ে না যান!`,
        en: `## Welcome to BignanPro Academy
Welcome to the interactive onboarding chapter! We assume you know absolutely nothing. We start from ground zero.

## Why BignanPro?
Traditional video tutorials fail because they promote passive consumption. BignanPro utilizes active learning—requiring you to analyze, trace, quiz, and code at every step.

## Why Beginners Fail:
1. **Tutorial Hell**: Watching endless guides without compiling real codes.
2. **Skipping Steps**: Attempting React before mastering raw JavaScript.
3. **Copy-Paste Mentality**: Let AI write code without understanding the logic.`,
      },
    },
    {
      id: "vision-what-build",
      title: {
        bn: "২. আপনি কী কী তৈরি করতে পারবেন? (What You Will Build)",
        en: "2. What You Will Build",
      },
      content: {
        bn: `## The Vision (আপনার ভবিষ্যৎ সৃষ্টি)
এই কোর্সের মাধ্যমে আপনি ধাপে ধাপে কী কী তৈরি করতে শিখবেন, তার একটি বাস্তবসম্মত ধারণা নেওয়া দরকার। আপনি শুধু কোড করতে শিখবেন না, বরং রিয়েল-ওয়ার্ল্ড প্রবলেম সলভ করতে শিখবেন।

আপনি যা যা তৈরি করতে পারবেন:
১. **রেসপন্সিভ ওয়েবসাইট (Websites)**: যা মোবাইল, ট্যাব ও কম্পিউটার সব স্ক্রিনেই নিখুঁতভাবে শো করবে।
২. **ইন্টারঅ্যাক্টিভ ওয়েব অ্যাপ (Web Applications)**: যেমন পার্সোনাল ড্যাশবোর্ড, নোশনের মতো খাতা বা টাস্ক ট্র্যাকার।
৩. **ফুল স্ট্যাক প্রজেক্ট (Full Stack Projects)**: যেখানে ডেটাবেজ থাকবে, ইউজার সাইন-ইন করতে পারবেন এবং রিয়েল-টাইম তথ্য আপডেট হবে।
৪. **পোর্টফোলিও (Developer Portfolio)**: নিজের তৈরি সেরা প্রজেক্টগুলো নিয়ে একটি চমৎকার পোর্টফোলিও, যা দেখে ইন্টারভিউয়াররা মুগ্ধ হবেন।

## A Realistic Career Expectation (বাস্তব প্রত্যাশা)
প্রোগ্রামিং কোনো জাদুর কাঠি নয়। রাতারাতি বড় অংকের টাকার বেতন বা চাকরি পাওয়ার মিথ্যা আশ্বাস আমরা দেবো না। বেতন বা ক্যারিয়ারের সুযোগ সম্পূর্ণ নির্ভর করে আপনার নিয়মিত প্র্যাকটিস, প্রজেক্টের কোয়ালিটি, আপনি কোন দেশ থেকে চাকরি খুঁজছেন এবং আপনার টেকনিক্যাল দক্ষতার ওপর। কঠোর পরিশ্রম ও ধারাবাহিকতা থাকলে ফুল স্ট্যাক ডেভেলপার হিসেবে একটি সফল ক্যারিয়ার নিশ্চিত সম্ভব।`,
        en: `## What You Will Build
You will acquire skills to assemble production-grade layouts:
1. Responsive static websites.
2. Highly interactive web applications (dashboards, state-driven planners).
3. Secure Full-Stack software linked with databases.
4. Premium portfolios to showcase to potential clients and recruiters.

## Realistic Expectations
Web development is a trade that rewards consistency. Income and careers vary dramatically based on skill level, portfolio strength, geographic market, and interview execution.`,
      },
    },
    {
      id: "how-book-works",
      title: {
        bn: "৩. এই বইটি যেভাবে কাজ করে (How This Book Works)",
        en: "3. How This Book Works",
      },
      content: {
        bn: `## The 5-Step Learning Loop (আমাদের লার্নিং মেথডোলজি)
বিজ্ঞানপ্রো একাডেমি সাজানো হয়েছে একটি বৈজ্ঞানিক লার্নিং মেথডের ওপর ভিত্তি করে:

\`\`\`
Read (পড়ুন) ➔ Understand (বুঝুন) ➔ Practice (অনুশীলন) ➔ Build (তৈরি করুন) ➔ Repeat (পুনরাবৃত্তি)
\`\`\`

প্রতিটি অধ্যায়ের ভেতরে আপনি পাবেন:
১. **থিওরি ও গল্প (Theory & Story)**: বাংলা ভাষায় রিয়েল লাইফ অ্যানালজি বা গল্প দিয়ে কনসেপ্ট ক্লিয়ার করা।
২. **লাইনভিত্তিক কোড বিশ্লেষণ**: কোড ব্লকের যেকোনো লাইনে ক্লিক করে সেটির অর্থ বুঝে নেওয়া।
৩. **এআই মেন্টর (AI Mentor)**: কেন এবং কীভাবে এই জিনিসটি প্রফেশনালরা ব্যবহার করেন তার ভেতরের কথা।
৪. **কুইজ ও চ্যালেঞ্জ**: পড়ার ঠিক পরপরই ছোট পরীক্ষা দিয়ে নিজের মেধা যাচাই।
৫. **ল্যাব এসাইনমেন্ট**: বাস্তব প্রজেক্ট তৈরি করে কোডিং প্র্যাকটিস।

প্রতিটি ধাপ শেষ করলেই কেবল আপনার রিডিং প্রগ্রেস বারটি ১০০% সম্পন্ন হবে!`,
        en: `## How BignanPro Works
We utilize a simple loop:
"Read ➔ Understand ➔ Practice ➔ Build ➔ Repeat"

Every module breaks down into:
*   Theoretical analogies written in plain language.
*   Interactive clickable CodeBlocks.
*   Contextual AI Mentor drawers.
*   Automated MCQs.
*   Hands-on lab assignments.`,
      },
    },
    {
      id: "career-roadmap-learning",
      title: {
        bn: "৪. সম্পূর্ণ লার্নিং রোডম্যাপ (Interactive Full Stack Roadmap)",
        en: "4. Interactive Full Stack Roadmap",
      },
      content: {
        bn: `## Complete Full Stack Path (পূর্ণাঙ্গ রোডম্যাপ)
নিচে আমাদের ফুল স্ট্যাক জার্নির রোডম্যাপটি কার্ড আকারে দেওয়া হলো। এখানে আপনার প্রথম ভিত্তি স্থাপন থেকে শুরু করে রিয়েল-ওয়ার্ল্ড প্রজেক্ট ও ক্যারিয়ার প্লেসমেন্ট পর্যন্ত প্রতিটি ধাপ ধাপে ধাপে সাজানো হয়েছে। 

প্রতিটি কার্ডে ক্লিক করে ভেতরে কী কী থাকছে তা দেখে নিন এবং মনের মাঝে একটি ভিশন বোর্ড তৈরি করুন।`,
        en: `## Interactive Roadmap
Below is the structural timeline from zero setup up to career readiness. Click each step card to explore the core topics.`,
      },
    },
    {
      id: "learning-strategy-ai",
      title: {
        bn: "৫. শেখার সঠিক কৌশল ও এআই এর ব্যবহার (Learning Strategy & AI Prompts)",
        en: "5. Learning Strategy & AI Prompts",
      },
      content: {
        bn: `## Daily Study Plan (দৈনিক রুটিন)
*   **১-ঘণ্টা নিয়ম**: দিনে অন্তত ১ ঘণ্টা অন্য সবকিছু বন্ধ করে কোডিং প্র্যাকটিস করুন। সপ্তাহে একদিন ১০ ঘণ্টা পড়ার চেয়ে প্রতিদিন ১ ঘণ্টা পড়া অনেক বেশি কার্যকর।
*   **এক্টিভ রিকল**: যেকোনো কোড পড়ার পর রিডার ক্লোজ করে নিজে নিজে স্ক্র্যাচ থেকে লেখার চেষ্টা করুন। একে বলে সক্রিয় অনুশীলন।

## How to use AI correctly? (এআই এর সঠিক ব্যবহার)
এআই (যেমন ChatGPT বা Gemini) আপনার সবচেয়ে ভালো বন্ধু হতে পারে, আবার আপনার শেখার ক্ষমতা নষ্ট করে দিতে পারে। এটি নির্ভর করে আপনি তাকে কীভাবে প্রশ্ন করছেন।

*   **ভুল ব্যবহার (Bad Prompt)**: "আমাকে একটি কন্টাক্ট ফর্মের সম্পূর্ণ কোড লিখে দাও।" (এতে আপনি কিছুই শিখলেন না, শুধু কপি-পেস্ট করলেন)।
*   **সঠিক ব্যবহার (Good Prompt)**: "আমি জাভাস্ক্রিপ্টে একটি ভ্যারিয়েবল ডিক্লেয়ার করেছি কিন্তু এর মান পরিবর্তন করতে পারছি না। const এবং let এর মধ্যে পার্থক্য কী এবং এক্ষেত্রে কেন এরর আসছে বুঝিয়ে বলো।"

---
## Prompting Comparison Table (প্রম্পটিং তুলনা)
| খারাপ প্রম্পট (Bad Prompt) | ভালো প্রম্পট (Good Prompt) | ফলাফল (Result) |
| :--- | :--- | :--- |
| "ফেসবুকের কোড লিখে দাও" | "একটি সোশ্যাল মিডিয়া পোস্টের ডেটাবেজ কীভাবে ডিজাইন করতে হয়?" | লজিক ও ডেটাবেজ আর্কিটেকচার শেখা |
| "এররটি সলভ করে দাও" | "এই এরর মেসেজটি কেন আসছে এবং কীভাবে আমি এটি ফিক্স করতে পারি?" | ডিবাগিং ও প্রবলেম সলভিং স্কিল বৃদ্ধি |`,
        en: `## Study Discipline
Practice active recall. Rebuild components from scratch without looking at the reference screen.

## AI Prompting Rules:
*   **Bad**: "Write a login page code for me."
*   **Good**: "Why is my database user password returning undefined on submission? Here is my schema..."
*   Use AI to understand logic and debug errors, not to bypass thinking.`,
      },
    },
    {
      id: "mistakes-motivation",
      title: {
        bn: "৬. সাধারণ ভুল ও মানসিক প্রস্তুতি (Common Mistakes & Mindset)",
        en: "6. Common Mistakes & Mindset",
      },
      content: {
        bn: `## Common Beginner Mistakes (নতুনদের ৫টি ভুল)
১. **ভিডিও দেখা কিন্তু কোড না করা**: কোড রান না করলে আপনি কখনই সিনট্যাক্স মনে রাখতে পারবেন না।
২. **তাড়াহুড়ো করে ফ্রেমওয়ার্ক শেখা**: জাভাস্ক্রিপ্ট ভালো না বুঝে সরাসরি রিঅ্যাক্ট বা নেক্সট জেএস শিখতে যাওয়া।
৩. **সব মুখস্থ করার চেষ্টা**: প্রোগ্রামিং সিনট্যাক্স মুখস্থ করার বিষয় নয়, এটি গুগলিং ও ডকুমেন্টেশন থেকে দেখার বিষয়।
৪. **এরর দেখে ভয় পাওয়া**: এরর আসা মানে আপনি ভুল করছেন না, বরং এটি আপনাকে সঠিক পথ দেখাচ্ছে। এরর মেসেজ পড়ার অভ্যাস করুন।

## Motivation & Mindset (মানসিক প্রস্তুতি)
সবাই একদিন শূন্য থেকেই শুরু করে। আজকের সেরা ডেভেলপারও একদিন আপনার মতোই প্রথম কোড রান করতে গিয়ে সমস্যায় পড়েছিলেন। গুরুত্বপূর্ণ হলো আপনি প্রতিদিন ছোট একটি পদক্ষেপে অগ্রসর হচ্ছেন কিনা। 
পরিপূর্ণতার (Perfection) দিকে না তাকিয়ে প্রগতি বা অগ্রগতির (Progress) দিকে ফোকাস রাখুন। কন্সিস্টেন্ট থাকুন, আপনি পারবেন!`,
        en: `## 5 Common Mistakes:
1. Watching tutorials passively.
2. Jumping to libraries before mastering the core language.
3. Trying to memorize syntaxes.
4. Getting intimidated by console errors.
5. Copying code without reasoning.

## Mindset
Every senior developer once struggled with basic syntax. Focus on daily incremental progress rather than perfection.`,
      },
    },
  ],
  quizzes: [
    {
      id: "ob-q1",
      question: {
        bn: "বিজ্ঞানপ্রো একাডেমির মূল উদ্দেশ্য কী?",
        en: "What is the primary purpose of BignanPro Academy?",
      },
      options: [
        { bn: "Endless ভিডিও টিউটোরিয়াল দেখানো", en: "Show endless video tutorials" },
        { bn: "একটিভ লার্নিং মেথডোলজির মাধ্যমে নিজে কোড করতে সাহায্য করা", en: "Promote active learning through interactive text and exercises" },
        { bn: "সরাসরি রেডিমেড কোড কপি পেস্ট করতে দেওয়া", en: "Provide readymade code to copy-paste" },
        { bn: "শুধুমাত্র সার্টিফিকেট বিক্রি করা", en: "Just sell certificates" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "বিজ্ঞানপ্রো একাডেমির লক্ষ্য আপনাকে কেবল নিষ্ক্রিয় পাঠক না বানিয়ে একটিভ কোডিং ও অনুশীলনের মাধ্যমে দক্ষ ডেভেলপার তৈরি করা।",
        en: "BignanPro focuses on active learning, ensuring you code, quiz, and troubleshoot dynamically.",
      },
    },
    {
      id: "ob-q2",
      question: {
        bn: "কোনটি বিজ্ঞানপ্রো লার্নিং লুপের (Learning Loop) সঠিক সিকোয়েন্স?",
        en: "Which of the following is BignanPro's learning loop?",
      },
      options: [
        { bn: "পড়ুন ➔ মুখস্থ করুন ➔ ভুলে যান", en: "Read ➔ Memorize ➔ Forget" },
        { bn: "পড়ুন ➔ বুঝুন ➔ অনুশীলন ➔ তৈরি করুন ➔ পুনরাবৃত্তি", en: "Read ➔ Understand ➔ Practice ➔ Build ➔ Repeat" },
        { bn: "শুধু কোড কপি করুন ➔ সার্ভারে ডেপ্লয় করুন", en: "Just Copy ➔ Deploy to Server" },
        { bn: "টিউটোরিয়াল দেখুন ➔ অলস সময় কাটান", en: "Watch Tutorial ➔ Sleep" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "পড়ুন, কনসেপ্ট বুঝুন, অনুশীলন করুন, প্রজেক্ট বিল্ড করুন এবং নিয়মিত রিপিট বা রিভিশন দিন—এটাই শিখার সঠিক নিয়ম।",
        en: "Read, comprehend, practice, build capstones, and repeat. This is the optimal developer loop.",
      },
    },
    {
      id: "ob-q3",
      question: {
        bn: "এআই (AI) ব্যবহারের ক্ষেত্রে নিচের কোনটি সঠিক অভ্যাস?",
        en: "Which of the following is the correct way to use AI?",
      },
      options: [
        { bn: "এআই দিয়ে সম্পূর্ণ কোড লিখিয়ে রান করা", en: "Ask AI to generate all codes directly" },
        { bn: "লজিক্যাল ধাপ ও এরর হ্যান্ডলিংয়ের কারণ বুঝে শেখা", en: "Ask AI for logical steps, concepts, and error diagnostics" },
        { bn: "এআই কে হোমওয়ার্কের সব সমাধান লিখে দিতে বলা", en: "Tell AI to solve assignments for you" },
        { bn: "এআই কে এড়িয়ে চলা", en: "Avoid AI entirely" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এআই আপনাকে কোডের কনসেপ্ট ও ডিবাগিং গাইডেন্স দিতে পারে, যা মেন্টর হিসেবে অত্যন্ত কার্যকর।",
        en: "Leverage AI to learn syntax mechanics and debug exceptions, preserving your own critical thinking.",
      },
    },
    {
      id: "ob-q4",
      question: {
        bn: "নতুন ডেভেলপারদের ক্ষেত্রে টিউটোরিয়াল হেল (Tutorial Hell) এ পড়ার কারণ কী?",
        en: "Why do beginners get trapped in Tutorial Hell?",
      },
      options: [
        { bn: "কোডিং প্র্যাকটিস না করে শুধু ভিডিও দেখা ও কপি পেস্ট করা", en: "Watching endless tutorials without building projects" },
        { bn: "অতিরিক্ত প্রজেক্ট সাবমিট করা", en: "Submitting too many projects" },
        { bn: "ডকুমেন্টেশন বেশি পড়া", en: "Reading too much documentation" },
        { bn: "এআই মেন্টরকে বেশি প্রশ্ন করা", en: "Asking AI too many questions" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "ভিডিও প্যাসিভলি কনজিউম করলে নিজের প্রবলেম সলভিং স্কিল বা মেমরি মাসল তৈরি হয় না, ফলে টিউটোরিয়ালে আটকে যেতে হয়।",
        en: "Endless passive consumption prevents developers from training their problem-solving instincts.",
      },
    },
    {
      id: "ob-q5",
      question: {
        bn: "আমাদের রোডম্যাপ অনুযায়ী ভ্যারিয়েবল ও লজিক শেখার আগে কোন জিনিস আয়ত্ত করতে হবে?",
        en: "What should you learn before variables and logic in our roadmap?",
      },
      options: [
        { bn: "ডাটাবেজ ও ক্লাউড হোস্টিং", en: "Database and Cloud hosting" },
        { bn: "এইচটিএমএল ও সিএসএস কাঠামো", en: "HTML & CSS structures" },
        { bn: "রিঅ্যাক্ট ও নেক্সট জেএস", en: "React & Next.js libraries" },
        { bn: "অ্যাডভান্সড টাইপস্ক্রিপ্ট", en: "Advanced TypeScript configurations" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কোডিং লজিক (JavaScript) এ যাওয়ার আগে ওয়েব পেজের বেসিক কাঠামো (HTML/CSS) আয়ত্ত করতে হবে।",
        en: "Visual markup layouts (HTML & CSS) are the foundations before coding active logic controls (JS).",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার নিজের ভাষায় বিজ্ঞানপ্রো একাডেমির একটিভ লার্নিং মেথড কী তা সংক্ষেপে ৩টি বাক্যে লিখুন।",
      en: "Summarize BignanPro's active learning loop in 3 sentences.",
    },
    {
      bn: "কোডিং শেখার সময় নতুনরা যে ৫টি সাধারণ ভুল করে, তার মধ্যে আপনার ক্ষেত্রে কোন ভুলটি সবচেয়ে বেশি হতে পারে বলে আপনি মনে করেন এবং তা এড়াতে কী করবেন?",
      en: "Which of the 5 common mistakes are you most prone to, and how will you actively prevent it?",
    },
    {
      bn: "একটি খারাপ এআই প্রম্পট ও একটি ভালো এআই প্রম্পটের পার্থক্য নিজের ভাষায় উদাহরণসহ লিখুন।",
      en: "Illustrate the difference between a bad AI prompt and a good AI prompt.",
    },
  ],
  assignment: {
    title: {
      bn: "আপনার ৯০ দিনের কাস্টম লার্নিং গোল ও দৈনিক রুটিন প্ল্যান",
      en: "Your 90-Day Learning Goals & Daily Study Routine Plan",
    },
    description: {
      bn: "নিচের অবজেক্ট স্ট্রাকচারটি কপি করুন এবং আপনার কাল্পনিক অ্যাকাউন্টের ভেরিয়েবল ভ্যালুগুলো কাস্টমাইজ করুন। আপনার শেখার পেছনে মূল উদ্দেশ্য এবং দৈনিক রুটিন ঠিক করুন।",
      en: "Customize the JSON object schema below to reflect your personal profile goals, daily commitment hour, and learning motivations.",
    },
    starterCode: `// BignanPro Onboarding Challenge
const onboardingChallenge = {
  learnerName: "Your Name",
  myDailyTimeSlot: "9 PM to 10 PM",
  motivationGoal: "Why are you learning full stack?",
  willNeverCopyPasteWithoutUnderstanding: false,
  targetDaysCount: 90
};`,
    solution: {
      code: `// Onboarding Challenge Completed
const onboardingChallenge = {
  learnerName: "তাসনিম জাহান",
  myDailyTimeSlot: "রাত ১০:০০ থেকে ১১:০০টা",
  motivationGoal: "নিজের আইডিয়া অনুযায়ী চমৎকার ওয়েব অ্যাপ্লিকেশন ও প্রজেক্ট একাই ডেপ্লয় করা।",
  willNeverCopyPasteWithoutUnderstanding: true,
  targetDaysCount: 90
};`,
      explanation: {
        bn: "অভিনন্দন! আপনি আপনার প্রথম গোল ডেটা ডিক্লেয়ার করেছেন। এই অবজেক্টের স্ট্রাকচার আপনার গোলকে প্রোগ্রামিংয়ের ভাষায় রূপান্তর করেছে।",
        en: "Declaring onboarding config values inside key-value properties models how web programs declare states.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "বিজ্ঞানপ্রো একাডেমির একটিভ লার্নিং (Active Learning) কীভাবে ট্র্যাডিশনাল ভিডিও কোর্সের চেয়ে কার্যকর?",
        en: "How does BignanPro's Active Learning outperform video tutorials?",
      },
      answer: {
        bn: "ট্র্যাডিশনাল ভিডিও কোর্সে ব্যবহারকারী নিষ্ক্রিয়ভাবে শুধু স্ক্রিন দেখেন (Passive Learning), ফলে ব্রেইন অলস থাকে এবং শেখা কোড দ্রুত ভুলে যায়। কিন্তু বিজ্ঞানপ্রো একাডেমিতে শিক্ষার্থীকে লাইনের পর লাইন বিশ্লেষণ করতে হয়, কুইজে অংশ নিতে হয় এবং সাথে সাথে এসাইনমেন্ট কোড করতে হয়। এটি একটি সক্রিয় অনুশীলন, যা ব্রেইনে মেমরি মাসল তৈরি করতে সাহায্য করে।",
        en: "Video tutorials promote passive consumption. BignanPro forces active cognitive recall through interactive inline quizzes, clickable code highlights, and mandatory lab projects.",
      },
    },
    {
      question: {
        bn: "এআই (AI) এর কাছে কোনো কোডের এরর বা সমস্যা কীভাবে সঠিক উপায়ে প্রম্পট করবেন?",
        en: "What is the correct protocol to ask AI to help debug an error?",
      },
      answer: {
        bn: "এআই এর কাছে এরর পেস্ট করে সরাসরি 'কোড ফিক্স করে দাও' না বলে প্রথমে এরর মেসেজ ও আপনার কোড ব্লকটি সরবরাহ করা উচিত। এরপর প্রশ্ন করতে হবে: 'এই এররটি আসার লজিক্যাল কারণ কী, কোন লাইনটিতে ভুল হচ্ছে এবং কীভাবে আমি এটি ফিক্স করতে পারি তা ব্যাখ্যা করে বুঝিয়ে বলো।' এতে এরর ডিবাগিংয়ের পেছনের কারণ জানা যায় যা পরবর্তীতে নিজে নিজে প্রবলেম সলভ করতে সাহায্য করে।",
        en: "Provide the exact stack trace and code snippet. Ask AI: 'Explain the root cause of this error, identify which scope it fails in, and provide step-by-step debug rules.' This trains your diagnostics skills.",
      },
    },
    {
      question: {
        bn: "প্রোগ্রামিং শেখার শুরুতে 'টুলস ও লাইব্রেরি হেল' এড়ানো কেন জরুরি?",
        en: "Why should beginners avoid framework/library hopping early on?",
      },
      answer: {
        bn: "অনেক নতুন শিক্ষার্থী বেসিক ল্যাঙ্গুয়েজ (যেমন জাভাস্ক্রিপ্ট) ভালো না শিখেই দ্রুত রিঅ্যাক্ট বা নোড জেএস শেখার চেষ্টা করেন। এটি করতে গিয়ে তারা প্রচুর ফ্রেমওয়ার্ক এররের সম্মুখীন হন এবং লজিক বুঝতে না পেরে হতাশ হয়ে পড়েন। সঠিক নিয়মে আগে ভিত্তি মজবুত করতে হবে, তারপর নতুন ফ্রেমওয়ার্ক ও লাইব্রেরি ব্যবহার করা উচিত।",
        en: "Focus on learning programming logic patterns (Vanilla JS, variables, logic blocks) first. Frameworks are built on these primitives. Without them, you will struggle to debug library abstractions."
      }
    }
  ]
};
