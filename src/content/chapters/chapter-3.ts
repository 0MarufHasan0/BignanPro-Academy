import { Chapter } from "@/types";

export const chapter3Content: Chapter = {
  id: "chapter-3",
  number: 3,
  title: {
    bn: "অধ্যায় ৩: প্রোগ্রামিং শেখার সঠিক কৌশল — স্টাডি হ্যাকস ও গাইডলাইন",
    en: "Chapter 3: How to Learn Programming — Study Hacks & Guidelines",
  },
  description: {
    bn: "কীভাবে কার্যকরীভাবে প্রোগ্রামিং শিখবেন, টিউটোরিয়াল হেল থেকে বাঁচার উপায় এবং কন্সিস্টেন্ট থাকার বৈজ্ঞানিক উপায়।",
    en: "Master the active learning cycle, escape tutorial hell, practice using the 70/30 rule, write smart notes, and build daily coding habits.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "অধিকাংশ বিগিনার কেন প্রোগ্রামিং শিখতে গিয়ে মাঝপথে ব্যর্থ হন তা জানা।",
      en: "Learn the primary reasons why most beginners fail and how to avoid them.",
    },
    {
      bn: "টিউটোরিয়াল হেল (Tutorial Hell) কী এবং এটি থেকে বাঁচার সক্রিয় উপায়গুলো শেখা।",
      en: "Understand what Tutorial Hell is and how to actively escape it.",
    },
    {
      bn: "৭০% প্র্যাকটিস এবং ৩০% লার্নিং রুল ব্যবহার করে শেখার গতি বহুগুণ বাড়িয়ে নেওয়া।",
      en: "Apply the 70/30 practice rule to maximize study efficiency.",
    },
    {
      bn: "কার্যকরীভাবে নোট নেওয়া, এআই (AI) কে মেন্টর হিসেবে কাজে লাগানো এবং দৈনিক রুটিন সাজানো।",
      en: "Master note-taking, leverage AI as a helper, and define a consistent study routine.",
    },
  ],
  sections: [
    {
      id: "why-people-fail",
      title: {
        bn: "১. বেশিরভাগ মানুষ কেন ব্যর্থ হয়? (Why Most People Fail)",
        en: "1. Why Most People Fail",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
প্রোগ্রামিং শেখা এক দুর্দান্ত রোমাঞ্চকর কাজ। কিন্তু দুঃখজনকভাবে, প্রায় ৮০-৯০% মানুষ শুরু করার কয়েক সপ্তাহের মধ্যে হাল ছেড়ে দেন। কেন এমন হয়? তারা কি মেধাবী ছিলেন না? না, আসলে তারা ভুল পদ্ধতিতে শিখছিলেন। এই লেসনে আমরা জানবো সেই ভুলগুলো কী এবং কীভাবে আপনি সঠিক পথে থাকবেন।

## Why should I learn this? (কেন শিখবো?)
ভুল পদ্ধতিতে পরিশ্রম করলে কেবল সময় নষ্ট হয়, কোনো ফলাফল আসে না। সঠিক স্টাডি গাইডলাইন জানা থাকলে আপনার শেখার জার্নি অনেক সহজ ও আনন্দদায়ক হবে।

## Real Life Story (বাস্তব জীবনের গল্প)
তানভীর যখন পাইথন শেখা শুরু করল, সে প্রতিদিন ৪ ঘণ্টা করে ইউটিউব ভিডিও দেখত। সে ভাবত সে অনেক কিছু শিখছে। কিন্তু ২ মাস পর যখন তাকে একটি সাধারণ কোড লিখতে বলা হলো, সে এক লাইনও লিখতে পারল না! সে বুঝতে পারল, সে আসলে শুধু স্ক্রিন দেখছিল, তার মস্তিষ্ক কোড করার অ্যাক্টিভ লজিক কিছুই শেখেনি। একেই বলে **প্যাসিভ লার্নিং ট্র্যাপ (Passive Learning Trap)**।

## Simple Explanation (সহজ ব্যাখ্যা)
নতুনরা প্রধানত নিচের ৫টি কারণে কোডিংয়ে ব্যর্থ হন:
১. **ভিডিও দেখা কিন্তু নিজে না লেখা**: কোড টাইপ না করলে মেমরি মাসল তৈরি হয় না।
২. **অতিরিক্ত পড়ার ফাঁদ**: শুধুমাত্র বই বা থিওরি পড়া, কোড রান না করা।
৩. **প্রজেক্ট তৈরি না করা**: ছোট ছোট ফিচার নিজে ডিজাইন না করা।
৪. **এলোমেলোভাবে টপিক খোঁজা**: এক সপ্তাহ জাভাস্ক্রিপ্ট তো পরের সপ্তাহ পাইথন শেখা।
৫. **ভুলভ্রান্তি বা এরর দেখে ভয় পাওয়া**: এরর দেখলেই হাল ছেড়ে দেওয়া।`,
        en: `## Introduction
Why do 90% of beginners fail to master programming? It is rarely due to a lack of intellect, but almost always a failure of learning methodology.

## Simple Explanation
Beginners fail because they treat programming like a movie. They watch hours of tutorial footage without running compiler tools locally.`,
      },
    },
    {
      id: "learning-loop-tutorial-hell",
      title: {
        bn: "২. টিউটোরিয়াল হেল ও সঠিক লার্নিং সাইকেল (Tutorial Hell & Learning Loop)",
        en: "2. Tutorial Hell & Learning Loop",
      },
      content: {
        bn: `## What is Tutorial Hell? (টিউটোরিয়াল হেল কী?)
**টিউটোরিয়াল হেল** হলো এমন একটি অবস্থা যেখানে একজন লার্নার একের পর এক ভিডিও টিউটোরিয়াল বা গাইড দেখতে থাকেন, কিন্তু টিউটোরিয়ালের সাহায্য ছাড়া নিজে নিজে এক লাইনের কোডও লিখতে পারেন না। 

এটি হওয়ার কারণ হলো ব্রেইনে কাল্পনিক আত্মবিশ্বাস তৈরি হওয়া। ভিডিও দেখার সময় সবকিছু সহজ মনে হয়, কিন্তু ব্রাউজার বন্ধ করলেই মস্তিষ্ক ব্ল্যাঙ্ক হয়ে যায়।

## How to escape? (বাঁচার উপায়)
১. **টিউটোরিয়াল দেখা থামান, অ্যাক্টিভ কোডিং শুরু করুন**: ভিডিওর মাঝপথে পজ করে কোডটি নিজে টাইপ করুন এবং রান করে পরীক্ষা করুন।
২. **কোড ভেঙে ফেলুন**: কোডটি কীভাবে কাজ করে তা বোঝার জন্য ভ্যারিয়েবল পরিবর্তন করে পরীক্ষা করুন।
৩. **নিজে প্রজেক্ট বিল্ড করুন**: সামান্য এদিক ওদিক করে নিজের মতো ছোট কোনো চেঞ্জ অ্যাড করুন।

---
## The 4-Step Active Learning System (সঠিক ৪ ধাপের লুপ)
১. **Learn Concept**: নতুন একটি কনসেপ্ট বা নিয়ম জানুন।
২. **Understand Example**: বই বা সোর্সের দেওয়া উদাহরণটি ভালোভাবে বুঝুন।
৩. **Code with Guidance**: গাইড দেখে দেখে কোডটি নিজে টাইপ করুন এবং রান করুন।
৪. **Build Small Project**: গাইডলাইন বন্ধ করে নিজের মতো একটি ছোট কাস্টম প্রজেক্ট করুন।

## Analogy (অ্যানালজি/রূপক)
ড্রাইভিং শেখার জন্য ড্রাইভিং গাইডবুক মুখস্থ করা বা অন্যের ড্রাইভ করার ভিডিও দেখা যথেষ্ট নয়। আপনাকে অবশ্যই স্টিয়ারিং ধরে গাড়ি চালাতে হবে, ব্রেক চাপতে হবে এবং ভুল পথে গিয়ে আবার ফিরতে হবে। কোডিংও ঠিক তেমনই—কিবোর্ডে হাত না দিলে আপনি কোড শিখতে পারবেন না!`,
        en: `## Tutorial Hell
Tutorial Hell is the false confidence built by passive tutorial watching. You feel like you understand everything, but freeze when presented with a blank editor window.

## The Solution
Immediately pause videos. Type, break, modify, and build small variations.`,
      },
    },
    {
      id: "practice-notes-strategy",
      title: {
        bn: "৩. ৭০/৩০ প্র্যাকটিস রুল ও নোট নেওয়ার পদ্ধতি (Practice & Note-Taking Strategy)",
        en: "3. Practice & Note-Taking Strategy",
      },
      content: {
        bn: `## The Golden Rule: 70% Practice & 30% Learning (৭০/৩০ নিয়ম)
প্রোগ্রামিং শেখার জন্য আপনার মোট পড়ার সময়ের:
*   **৩০% সময়**: নতুন থিওরি বা নিয়ম শেখা ও বোঝার পেছনে দিন।
*   **৭০% সময়**: নিজে কোড করতে, কোড ডিবাগ করতে এবং প্রজেক্ট তৈরিতে ব্যয় করুন।

পড়লে তথ্য মাথায় যায়, কিন্তু কোড করলে লজিক ব্রেইনে গেঁথে যায়।

---
## Project-Based Learning Examples (প্রজেক্ট ভিত্তিক শিক্ষা)
যেকোনো টপিক শেষে একটি বাস্তব প্রজেক্ট তৈরি করুন:
*   **HTML শেখা শেষে**: নিজের পোর্টফোলিও পেজ তৈরি করুন।
*   **CSS শেখা শেষে**: একটি প্রিমিয়াম ল্যান্ডিং পেজ তৈরি করুন।
*   **JavaScript শেখা শেষে**: একটি ইন্টারঅ্যাক্টিভ টু-ডু বা ক্যালকুলেটর অ্যাপ তৈরি করুন।

## How to Take Notes (নোট নেওয়ার সঠিক নিয়ম)
কোডিং শেখার সময় অনেকে পুরো কোড খাতায় কপি করে রাখেন। এটি সম্পূর্ণ ভুল! 
*   **নিয়ম ১**: কোড কপি করবেন না। লজিকের ধাপগুলো আপনার নিজের ভাষায় সংক্ষেপে লিখুন।
*   **নিয়ম ২**: নতুন ও জটিল কি-ওয়ার্ডগুলোর শর্টকাট চিরকুট বা চিট শিট (Cheat Sheet) তৈরি করুন।
*   **নিয়ম ৩**: কেন এই এররটি এসেছিল এবং আপনি কীভাবে সমাধান করেছিলেন—তার একটি 'ডিবাগিং ডায়েরি' রাখুন।`,
        en: `## The 70/30 Rule
*   30% of your time: Reading documentation or studying theories.
*   70% of your time: Hands-on coding, solving bugs, and building variations.

## Notes Writing
*   Never write line-by-line syntax in notebooks.
*   Document the logical reasons why a block works.
*   Keep a debugging journal tracking errors and their resolutions.`,
      },
    },
    {
      id: "study-routine-ai-use",
      title: {
        bn: "৪. দৈনিক পড়ার রুটিন ও এআই এর ব্যবহার (Daily Routine & AI for Learning)",
        en: "4. Daily Routine & AI for Learning",
      },
      content: {
        bn: `## Daily Study Routine (দৈনিক অনুশীলনের মডেল)
ধারাবাহিকতা (Consistency) তীব্রতার (Intensity) চেয়ে অনেক বেশি শক্তিশালী।
*   **দৈনিক সময়**: ১.৫ থেকে ২ ঘণ্টা।
*   **শিডিউল**: 
    - ৩০ মিনিট: নতুন থিওরি পড়া বা লজিক বোঝা।
    - ৬০-৯০ মিনিট: নিজে নিজে ল্যাপটপে কোড টাইপ করে ভুল শুধরানো ও কাস্টমাইজ করা।

## How to use AI properly for learning? (এআই এর সঠিক ব্যবহার)
এআই (ChatGPT/Gemini) কে আপনার কোডার না বানিয়ে আপনার মেন্টর বা শিক্ষক বানান।

*   **খারাপ ব্যবহার (Bad Usage)**: "আমাকে একটি টু-ডু অ্যাপের সম্পূর্ণ কোড লিখে দাও।" (এতে আপনার ব্রেইন অলস থাকে)।
*   **ভালো ব্যবহার (Good Usage)**: 
    - "আমি টু-ডু অ্যাপে নতুন আইটেম যোগ করার লজিকটি বুঝতে পারছি না। সাধারণ বাংলা উদাহরণ দিয়ে বুঝিয়ে দাও।"
    - "এই এরর মেসেজটি কেন আসছে এবং কীভাবে আমি এটি ডিবাগ করব তা বুঝিয়ে বলো।"`,
        en: `## Study Timetable
Commit 90 minutes daily: 30 minutes of study, 60 minutes of raw compiler execution.

## Leverage AI as a Tutor
*   **Yes**: "Why does an index out of bounds error happen in arrays?"
*   **No**: "Write the array filter code for my project."`,
      },
    },
    {
      id: "common-mistakes-bugs",
      title: {
        bn: "৫. সাধারণ ভুল ও এরর হ্যান্ডলিং (Common Mistakes & Bug Handling)",
        en: "5. Common Mistakes & Bug Handling",
      },
      content: {
        bn: `## Common Beginner Mistakes (এড়ানোর মতো ৫টি ভুল)
১. **ভিডিও টিউটোরিয়াল গিলতে থাকা**: না লিখে শুধু ভিডিও দেখতে থাকা।
২. **দৈনিক কোড না করা**: নিয়মের ব্যাঘাত ঘটানো।
৩. **ভুল এড়ানোর চেষ্টা**: বাগকে ব্যর্থতা মনে করা।
৪. **কপি-পেস্ট মাইন্ডসেট**: কোড না বুঝে কপি করে চালানো।
৫. **ফাউন্ডেশন স্কিপ করা**: বেসিক প্রোগ্রামিং লজিক না শিখে সরাসরি ফ্রেমওয়ার্ক শেখা।

## How to handle bugs (বাগ হ্যান্ডেল করার ৪টি ধাপ)
বাগ কোনো ত্রুটি নয়, এটি আপনার শেখার অন্যতম প্রধান হাতিয়ার।
১. **এরর মেসেজ রিড করুন**: শান্ত হয়ে লাল রঙের এরর টেক্সট ও লাইন নম্বর দেখুন।
২. **সমস্যা আলাদা করুন (Isolate)**: কোডের কোন ব্লকে এরর এসেছে তা চিহ্নিত করুন।
৩. **ছোট ছোট অংশে প্রিন্ট করুন**: ডেটা ঠিকমতো ফ্লো হচ্ছে কিনা চেক করুন।
৪. **ফিক্স করুন**: পরিবর্তনের সাথে সাথে টেস্ট করুন।

---
## The Developer Learning Cycle (বাস্তব লার্নিং ফ্লো)
\`\`\`
Learn (শিখুন) ➔ Understand (বুঝুন) ➔ Code (কোড লিখুন) ➔ Break (কোড ভেঙে এরর আনুন) ➔ Fix (ঠিক করুন) ➔ Repeat (পুনরাবৃত্তি)
\`\`\``,
        en: `## Real Learning Cycle
"Learn ➔ Understand ➔ Code ➔ Break ➔ Fix ➔ Repeat"

## Bug Resolution Checklist
1. Inspect console error logs.
2. Isolate code sections.
3. Print debug points.
4. Execute changes incrementally.`,
      },
    },
    {
      id: "practice-tasks-mentor",
      title: {
        bn: "৬. বাস্তব অনুশীলন ও এআই মেন্টর প্যানেল (Practice Tasks & AI Mentor Panel)",
        en: "6. Practice Tasks & AI Mentor Panel",
      },
      content: {
        bn: `## Reflection & Commitment (আপনার লার্নিং গোল নির্ধারণ)
আসুন কোড করার আগে আপনার নিজের লার্নিং স্ট্র্যাটেজি প্রস্তুত করি। নিচের প্র্যাকটিস প্রশ্নগুলো নিয়ে গভীরভাবে ভাবুন এবং উত্তরগুলো মনে সাজিয়ে নিন। এটি আপনাকে জার্নি জুড়ে কন্সিস্টেন্ট রাখতে সাহায্য করবে।`,
        en: `## Reflection & Commitment
Reflect on your study habits and plan your learning path before typing code.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "সফটওয়্যারে প্রতিদিন নতুন লাইব্রেরি ও ফ্রেমওয়ার্ক আসে। আপনি যদি 'কীভাবে শিখতে হয়' তা জানেন, তবে আপনি যেকোনো নতুন টেকনোলজিতে মাত্র কয়েক দিনে বস হয়ে যেতে পারবেন।",
          en: "Frameworks disappear, but the art of learning is eternal. Knowing how to learn makes you future-proof.",
        },
        whyWorks: {
          bn: "এক্টিভ লার্নিং ও প্রজেক্ট বেসড স্টাডি ব্রেইনের নিউরাল পাথওয়েকে অ্যাক্টিভেট করে, ফলে স্মৃতিশক্তি ও প্রবলেম সলভিং স্কিল বহুগুণ বেড়ে যায়।",
          en: "Active recall triggers deep cognitive connections, increasing logical retrieval speeds during debugging.",
        },
        professionalThinking: {
          bn: "সিনিয়র ইঞ্জিনিয়াররা কোনো নতুন ফ্রেমওয়ার্ক শিখতে ভিডিও কোর্স খোঁজেন না। তারা সরাসরি ডেমো কোড দেখেন ও অফিশিয়াল ডকুমেন্টেশন পড়েন।",
          en: "Professionals skip video tutorials and read official specifications directly.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় ফাঁদ হলো ভিডিও দেখার পর ভাবা: 'আমি সব বুঝে গেছি'। আসলে কোড নিজে না লিখলে কোনো বোঝাই পূর্ণাঙ্গ নয়।",
          en: "Confusing watching with doing is the greatest learning mistake.",
        },
        debugging: {
          bn: "কোড কাজ না করলে নিজেকে গালি না দিয়ে এরর মেসেজের দিকে তাকান। এরর মেসেজ পড়ার দক্ষতাই একজন ভালো ডেভেলপারের লক্ষণ।",
          en: "Console logs are clues. Read them like a detective analyzes evidence.",
        },
        performance: {
          bn: "পরিকল্পিত চিট শিট এবং সংক্ষিপ্ত নোট পড়ার সময় অনেক বাঁচায় এবং রিভিশন দিতে সাহায্য করে।",
          en: "Maintain modular notes and cheat sheets to reduce revision time.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "l-q1",
      question: {
        bn: "প্রোগ্রামিং শেখার সবচেয়ে কার্যকরী পদ্ধতি কোনটি?",
        en: "What is the most effective way to learn programming?",
      },
      options: [
        { bn: "সবগুলো টিউটোরিয়াল ভিডিও মুখস্থ করা", en: "Memorizing all tutorial videos" },
        { bn: "এক্টিভ লার্নিং এবং নিজে কোড লিখে ছোট প্রজেক্ট তৈরি করা", en: "Active learning and building hands-on projects" },
        { bn: "বইয়ের সব কোড খাতায় কপি করে রাখা", en: "Copying all code into notebooks" },
        { bn: "শুধুমাত্র এআই দিয়ে সব কোড জেনারেট করানো", en: "Using AI to write everything" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এক্টিভ লার্নিং ও নিজের হাতে কোড রান করে ছোট প্রজেক্ট বিল্ড করা হলো কোডিং শেখার সেরা বৈজ্ঞানিক পদ্ধতি।",
        en: "Hands-on implementation and project assembly ensure active recall and retention.",
      },
    },
    {
      id: "l-q2",
      question: {
        bn: "টিউটোরিয়াল হেল (Tutorial Hell) বলতে কী বোঝায়?",
        en: "What does Tutorial Hell mean?",
      },
      options: [
        { bn: "সব টিউটোরিয়াল বন্ধ করে দেওয়া", en: "Stopping all tutorials" },
        { bn: "নিজে কোড না লিখে শুধু ভিডিও কনজিউম করা এবং সাহায্য ছাড়া নিজে কোড লিখতে না পারা", en: "Being unable to write code without tutorial guidance" },
        { bn: "ইউটিউব এরর প্রদর্শন করা", en: "YouTube throwing errors" },
        { bn: "অতিরিক্ত প্রজেক্ট তৈরি করে ক্লান্ত হওয়া", en: "Getting tired of building too many projects" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "টিউটোরিয়াল হেল হলো ভিডিও দেখার পর লজিক না বুঝে নিজে একা কোড লিখতে না পারার চক্র।",
        en: "Tutorial Hell is the dependency loop created by watching guides without practicing independently.",
      },
    },
    {
      id: "l-q3",
      question: {
        bn: "কোডিং শেখার সময় অনুশীলনের সঠিক অনুপাত বা রেশিও (Ratio) কোনটি?",
        en: "What is the recommended study-to-practice ratio?",
      },
      options: [
        { bn: "৯০% রিডিং ও ১০% প্র্যাকটিস", en: "90% Study & 10% Practice" },
        { bn: "৭০% প্র্যাকটিস ও ৩০% লার্নিং", en: "70% Practice & 30% Study" },
        { bn: "১০০% ভিডিও দেখা", en: "100% Video watching" },
        { bn: "৫০% অলস সময় কাটানো", en: "50% Idle time" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কোডিংয়ের ৭০% সময় প্র্যাকটিস বা লজিক সলভিংয়ে দেওয়া উচিত এবং ৩০% সময় থিওরি পড়াতে দেওয়া উচিত।",
        en: "Spend 70% of your schedule compiling, debugging, and building variations.",
      },
    },
    {
      id: "l-q4",
      question: {
        bn: "কোড করার সময় নোট নেওয়ার সঠিক পদ্ধতি কী?",
        en: "What is the correct way to take notes?",
      },
      options: [
        { bn: "সব কোড হুবহু খাতায় লিখে রাখা", en: "Copying all code blocks verbatim" },
        { bn: "লজিক্যাল ধাপ ও এরর হ্যান্ডলিংয়ের নিয়মগুলো নিজের ভাষায় সংক্ষেপে লেখা", en: "Documenting logical flows and debug summaries in your own words" },
        { bn: "কোনো নোট না নেওয়া", en: "Taking no notes" },
        { bn: "সব সিনট্যাক্স স্ক্রিনশট দিয়ে রাখা", en: "Screenshotting everything" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "নিজের ভাষায় লজিকের ধারণা ও এরর ডিবাগিংয়ের ট্রিক্স লিখে রাখলে তা খুব সহজে রিভিশন দেওয়া যায়।",
        en: "Note-taking should capture mental frameworks and debug checklists, not raw code syntaxes.",
      },
    },
    {
      id: "l-q5",
      question: {
        bn: "ধারাবাহিকতা (Consistency) বজায় রাখতে দৈনিক অনুশীলনের কোন নিয়মটি সেরা?",
        en: "What is the key rule for maintaining learning consistency?",
      },
      options: [
        { bn: "সপ্তাহে একদিন ১০ ঘণ্টা কোড করা", en: "Coding 10 hours once a week" },
        { bn: "প্রতিদিন নিয়মিত ১-২ ঘণ্টা মন দিয়ে কোড করা", en: "Coding 1-2 hours consistently every single day" },
        { bn: "শুধুমাত্র পরীক্ষার আগের দিন কোড করা", en: "Coding only before exams" },
        { bn: "কোনো নিয়মিত রুটিন অনুসরণ না করা", en: "Having no study routine" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "প্রতিদিন নিয়মিতভাবে কোড করলে নিউরাল সংযোগ শক্তিশালী হয় এবং কন্সিস্টেন্সি গড়ে ওঠে।",
        en: "Daily short practice runs train cognitive processes far better than irregular marathon sprints.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার নিজের লার্নিং জার্নির জন্য একটি ৭ দিনের গোল সেট করে খাতায় বা ফাইলে লিখুন। (যেমন: প্রতিদিন কোন সময় প্র্যাকটিস করবেন)।",
      en: "Create a 7-day personal commitment schedule listing your daily study time slots.",
    },
    {
      bn: "টিউটোরিয়াল হেল থেকে বাঁচার জন্য আপনি কী কী করবেন, তার একটি ৩ ধাপের অ্যাকশন প্ল্যান তৈরি করুন।",
      en: "Draft a 3-step action plan you will implement to avoid falling into Tutorial Hell.",
    },
    {
      bn: "আপনার প্রথম মিনি প্রজেক্টের একটি কাল্পনিক আইডিয়া (যেমন: সহজ একটি পোর্টফোলিও বা ট্র্যাকার) নিজের ভাষায় গুছিয়ে লিখুন।",
      en: "Describe a small personal project idea you want to build during the frontend phase.",
    },
  ],
  assignment: {
    title: {
      bn: "আপনার ৭ দিনের লার্নিং রুটিন অ্যান্ড অ্যাকশন প্ল্যান",
      en: "Your 7-Day Personal Action Plan & Routine Chart",
    },
    description: {
      bn: "নিচের দেওয়া অবজেক্টটি পূরণ করে আপনার কাস্টম গোল, প্র্যাকটিসের সময় এবং প্রথম মিনি প্রজেক্টের আইডিয়া সেট করে সাবমিট করুন।",
      en: "Fill out the study plan object template below, setting your schedule, target projects, and consistency rules.",
    },
    starterCode: `// 7-Day Study Routine Configuration
const studyRoutine = {
  studentName: "Your Name",
  dailyHoursGoal: 1.5,
  practiceTimeSlot: "10:00 PM",
  myFirstProjectIdea: "Personal Bio Web Page",
  agreeToActiveLearningOnly: false
};`,
    solution: {
      code: `// Completed Study Routine Object
const studyRoutine = {
  studentName: "আফসানা মির্জা",
  dailyHoursGoal: 2,
  practiceTimeSlot: "রাত ০৯:০০ থেকে ১১:০০টা",
  myFirstProjectIdea: "একটি সাধারণ ট্রাভেল কার্ড ডিজাইন",
  agreeToActiveLearningOnly: true
};`,
      explanation: {
        bn: "চমৎকার! আপনি আপনার দৈনিক লার্নিং রুটিন ও প্রথম মিনি প্রজেক্ট ডিক্লেয়ার করেছেন। এই নিয়মানুবর্তিতা আপনাকে সফল ডেভেলপার তৈরি করবে।",
        en: "Defining configurations represents how programs organize run-time variables and states.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "কোডিং শেখার ক্ষেত্রে 'প্যাসিভ লার্নিং' এবং 'একটিভ লার্নিং' এর পার্থক্য কী?",
        en: "What is the difference between Passive Learning and Active Learning in programming?",
      },
      answer: {
        bn: "প্যাসিভ লার্নিং হলো কোনো নিজে চেষ্টা না করে কেবল ভিডিও দেখা বা অন্যের কোড রিডিং পড়া। এতে সাময়িকভাবে সব সহজ মনে হলেও পরবর্তীতে লজিক তৈরি করা যায় না। আর একটিভ লার্নিং হলো পড়ার পরপরই নিজে কোড লেখা, কোডে এরর আনা, ডিবাগ করা এবং নিজে থেকে ছোট প্রজেক্ট তৈরি করা। এটি প্রবলেম সলভিং স্কিল বহুগুণ বাড়িয়ে দেয়।",
        en: "Passive learning is consumption without application (watching videos without typing). Active learning forces application, debugging errors, and project creation, training your cognitive muscles to solve problems independently.",
      },
    },
    {
      question: {
        bn: "টিউটোরিয়াল হেল (Tutorial Hell) এ পড়লে কেন ডেভেলপারদের ক্যারিয়ারের ক্ষতি হয় এবং কীভাবে তা এড়ানো যায়?",
        en: "Why is Tutorial Hell dangerous for your career, and how can you escape it?",
      },
      answer: {
        bn: "টিউটোরিয়াল হেলের বড় সমস্যা হলো এটি লার্নারকে পরনির্ভরশীল করে তোলে। ফলে চাকরিতে কোনো বাস্তব সমস্যা বা কাস্টম প্রজেক্ট দিলে তারা কোড করতে পারেন না। এটি এড়ানোর উপায় হলো—যেকোনো টিউটোরিয়ালের সাহায্য নিয়ে কাজ শেখার পর টিউটোরিয়াল বন্ধ করে পুরো প্রজেক্টটি নিজে একা স্ক্র্যাচ থেকে আবার ট্রাই করা এবং সেখানে নিজের মতো এক্সট্রা ফিচার অ্যাড করা।",
        en: "Tutorial hell destroys developer autonomy. To escape, immediately apply concepts to build variations. Try coding the same app from memory without looking at any reference tutorial.",
      },
    },
  ],
};
