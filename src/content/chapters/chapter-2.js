export const chapter2Content = {
  id: "chapter-2",
  number: 2,
  title: {
    bn: "অধ্যায় ২: প্রোগ্রামিং মাইন্ডসেট — সমস্যা সমাধানের চিন্তাপদ্ধতি",
    en: "Chapter 2: Programming Mindset — Think Like a Developer",
  },
  description: {
    bn: "কোড লেখার আগে কীভাবে চিন্তা করতে হয়, কীভাবে সমস্যাকে ছোট ছোট ভাগে ভাঙতে হয় এবং ডিবাগিং করার সঠিক মনস্তত্ত্ব।",
    en: "Learn how developers think, break down complex tasks, debug logical flaws, and approach coding problems step-by-step.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "প্রোগ্রামিং যে কেবল কোড মুখস্থ করা নয়, বরং নির্দেশনার মাধ্যমে সমস্যা সমাধান—তা হৃদয়ঙ্গম করা।",
      en: "Understand that programming is problem-solving using instructions, not syntax memorization.",
    },
    {
      bn: "যেকোনো বড় সমস্যাকে ভেঙে ছোট ছোট অংশে বিভক্ত করার কৌশল (Decomposition) আয়ত্ত করা।",
      en: "Master the art of breaking down big problems into smaller, manageable parts (Decomposition).",
    },
    {
      bn: "এরর বা বাগকে কোডিংয়ের সাধারণ অংশ হিসেবে মেনে নিয়ে শান্ত মাথায় ডিবাগ করার অভ্যাস করা।",
      en: "Develop a calm debugging mindset, treating errors as natural steps in the development process.",
    },
    {
      bn: "জুনিয়র ও সিনিয়র ডেভেলপারদের চিন্তার পার্থক্য এবং কোড লেখার আগে পরিকল্পনার গুরুত্ব বোঝা।",
      en: "Understand the differences between junior and senior mindsets, and the value of planning before coding.",
    },
  ],
  sections: [
    {
      id: "mindset-intro",
      title: {
        bn: "১. প্রোগ্রামিং আসলে কী? (What is Programming Really?)",
        en: "1. What is Programming Really?",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
প্রোগ্রামিং শেখার শুরুতে অনেকেই ভাবেন এটি হয়তো গণিতবিদ বা অতি মেধাবীদের কাজ। কিন্তু বাস্তবতা সম্পূর্ণ ভিন্ন। প্রোগ্রামিং কোনো জাদু নয়, এটি মূলত একটি চিন্তাপদ্ধতি। এই লেসনে আমরা জানবো প্রোগ্রামিংয়ের ভেতরের আসল সত্যটি কী।

## Why should I learn this? (কেন শিখবো?)
সিনট্যাক্স (কোড লেখার নিয়ম) খুব দ্রুত গুগল বা এআই দিয়ে খুঁজে নেওয়া যায়। কিন্তু কোডিংয়ের পেছনের লজিকাল মাইন্ডসেট বা চিন্তাভাবনার দক্ষতা কোনো টুল আপনাকে দিতে পারবে না। এটিই একজন ভালো ডেভেলপারের আসল সুপারপাওয়ার।

## Real Life Story (বাস্তব জীবনের গল্প)
নিহাল যখন প্রথম কোডিং শেখা শুরু করল, সে জাভাস্ক্রিপ্টের শত শত লাইনের ফাংশন মুখস্থ করার চেষ্টা করছিল। কিন্তু প্রতিবারই কোড লিখতে গিয়ে সে আটকে যেত। অবশেষে তার এক সিনিয়র মেন্টর তাকে বললেন, "কোড মুখস্থ করো না, আগে চিন্তা করো সমস্যাটা কীভাবে ধাপে ধাপে সমাধান করবে।" নিহাল তার খাতা খুলে লজিক আঁকা শুরু করল এবং হঠাৎ করেই কোডিং তার কাছে অনেক সহজ হয়ে গেল।

## Simple Explanation (সহজ ব্যাখ্যা)
সহজ কথায়: **প্রোগ্রামিং = নির্দেশনার মাধ্যমে সমস্যা সমাধান (Problem solving using instructions)**।

আমরা কম্পিউটারকে আমাদের ভাষা সরাসরি বোঝাতে পারি না। তাই নির্দিষ্ট লজিক এবং স্টেপ মেনে আমরা কম্পিউটারকে নির্দেশনা দিই। 
১. **সমস্যা (Problem)**: আমরা কী সমাধান করতে চাই?
২. **ধাপ (Steps)**: সমস্যা সমাধানের উপায় কী কী?
৩. **লজিক (Logic)**: কোন ধাপে কী সিদ্ধান্ত নেওয়া হবে?
৪. **নির্দেশনা (Instruction)**: লজিকগুলোকে কোডিংয়ের মাধ্যমে কম্পিউটারকে বুঝিয়ে দেওয়া।

## Analogy (অ্যানালজি/রূপক)
একটি রান্নার রেসিপি কল্পনা করুন। ফুচকা বানানোর জন্য আপনাকে ধাপে ধাপে কিছু নির্দিষ্ট নিয়ম অনুসরণ করতে হবে। আপনি যদি তেঁতুলের টক বানানোর আগে ফুচকা ভেজে রাখেন এবং আলু ভর্তা তৈরিতে লবণ দিতে ভুলে যান, তবে ফুচকা সুস্বাদু হবে না। প্রোগ্রামিংও ঠিক তেমনি—ধাপে ধাপে সাজানো একটি নিখুঁত রেসিপি!`,
        en: `## Introduction
Programming is not about typing code fast; it is a systematic framework of thinking. In this module, we dissect what programming is at its core.

## Simple Explanation
*   **Programming**: Problem solving using explicit instruction sets.
*   **Analogy**: A cooking recipe. You must boil, season, and serve in a chronological layout to yield a delicious meal. Skipping checkpoints ruins the dish.`,
      },
    },
    {
      id: "dev-thinking-decomp",
      title: {
        bn: "২. ডেভেলপারদের চিন্তাপদ্ধতি ও সমস্যা বিশ্লেষণ (How Developers Think & Decomposition)",
        en: "2. How Developers Think & Decomposition",
      },
      content: {
        bn: `## The Developer Mindset (চিন্তার ৫টি ধাপ)
একজন প্রফেশনাল ডেভেলপার যেকোনো টাস্ক পেলে নিচের ৫টি ধাপ অনুসরণ করেন:
১. **সমস্যাটি সম্পূর্ণ বোঝা (Understand)**: ক্লায়েন্ট বা সিস্টেম ঠিক কী চাচ্ছে তা পরিষ্কার করা।
২. **সমস্যাকে ছোট ছোট ভাগে ভাঙা (Break down)**: একটি বড় সমস্যাকে ভেঙে ফেলা।
৩. **ধাপে ধাপে চিন্তা করা (Step-by-step)**: প্রতিটি ভাগের জন্য আলাদা সমাধান ভাবা।
৪. **একটি করে সমাধান করা (Solve one by one)**: একসাথে সব না করে একটি করে অংশ কোড করা।
৫. **সমাধানগুলো জোড়া দেওয়া (Combine)**: সব ছোট সমাধান যুক্ত করে পূর্ণাঙ্গ রূপ দেওয়া।

## What is Problem Decomposition? (সমস্যা বিশ্লেষণ)
বড় কোনো কাজ দেখে ঘাবড়ে না গিয়ে তাকে ছোট অংশে ভাগ করার প্রক্রিয়াকেই প্রোগ্রামিংয়ের ভাষায় **ডিকম্পোজিশন (Decomposition)** বলা হয়।

**বাস্তব উদাহরণ: একটি লগইন সিস্টেম (Login System) তৈরি করা**
নতুনরা লগইন সিস্টেম বললেই ঘাবড়ে যান। কিন্তু আমরা যদি এটিকে ভেঙে ফেলি:
*   ধাপ ১: ইউজার ইন্টারফেস (UI Form) তৈরি করা যেখানে ইমেইল ও পাসওয়ার্ড লেখার জায়গা থাকবে।
*   ধাপ ২: ইউজার খালি ঘর রেখে সাবমিট করলে 'লাল সতর্কবার্তা' বা ভ্যালিডেশন দেখানো।
*   ধাপ ৩: ডাটা ঠিক থাকলে ব্যাকএন্ড সার্ভারে ইমেইল ও পাসওয়ার্ড পাঠানো।
*   ধাপ ৪: সার্ভার ডাটা চেক করে ভুল হলে এরর মেসেজ দেখাবে, সঠিক হলে প্রোফাইলে নিয়ে যাবে।

দেখলেন? কত বড় একটি ফিচার ভেঙে ৪টি সহজ ধাপে রূপান্তর হয়ে গেল!

---
## Vision Breakdown: E-commerce Website (ই-কমার্স প্রজেক্ট বিশ্লেষণ)
একইভাবে একটি বিশাল দারাজ বা অ্যামাজনের মতো ই-কমার্স সাইট মূলত নিচের ছোট ছোট প্রজেক্টের সমষ্টি:
*   **প্রোডাক্ট লিস্ট (Product List)**: ইমেজ ও প্রাইস কার্ড দেখানো।
*   **কার্ট সিস্টেম (Cart System)**: প্রোডাক্ট সিলেক্ট করে ব্যাগে অ্যাড করা।
*   **পেমেন্ট গেটওয়ে (Payment)**: বিকাশ বা কার্ডে বিল পে করার প্যানেল।
*   **ইউজার লগইন (User Auth)**: ক্রেতার আইডি সুরক্ষিত রাখা।`,
        en: `## Developer Logic Loop
1. Understand the problem thoroughly.
2. Break it down into micro-objectives (Decomposition).
3. Draft a step-by-step logic path.
4. Resolve one micro-objective at a time.
5. Merge all modular checkouts together.

## Decomposition Case Study: E-commerce Site
A huge e-commerce site breaks down into:
*   A product showcase directory catalog.
*   A shopping cart memory list buffer.
*   A checkout payment processing gateway.
*   User credential profiles.`,
      },
      codeBlock: {
        fileName: "mindset_logic.js",
        language: "javascript",
        code: `// লগইন সিস্টেমের পেছনের লজিকাল মাইন্ডসেট
const inputEmail = "student@bignanpro.com";
const inputPassword = "correct-password";

function loginWorkflow(email, password) {
  // ১. ভ্যালিডেশন চেক
  if (!email || !password) {
    return "❌ ইমেইল এবং পাসওয়ার্ড দুটিই দিন!";
  }
  
  // ২. সিকিউরিটি চেক
  if (email === "student@bignanpro.com" && password === "correct-password") {
    return "✅ লগইন সফল! ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে...";
  } else {
    return "❌ ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।";
  }
}

console.log(loginWorkflow(inputEmail, inputPassword));`,
        explanations: [
          {
            line: 5,
            text: {
              bn: "প্রথম ধাপ: ব্যবহারকারী ইমেইল ও পাসওয়ার্ড ইনপুট দিয়েছেন কিনা তা ভ্যালিডেট করা।",
              en: "First checkpoint: Validate that credentials are not empty.",
            },
          },
          {
            line: 10,
            text: {
              bn: "দ্বিতীয় ধাপ: ডাটাবেজের তথ্যের সাথে ইউজারের ইমেইল ও পাসওয়ার্ড মিলিয়ে সিদ্ধান্ত নেওয়া।",
              en: "Second checkpoint: Verify credentials logic parameters.",
            },
          },
        ],
      },
    },
    {
      id: "debugging-mindset",
      title: {
        bn: "৩. ডিবাগিং মনস্তত্ত্ব ও জুনিয়র বনাম সিনিয়র (Debugging Mindset & Junior vs Senior)",
        en: "3. Debugging Mindset & Junior vs Senior",
      },
      content: {
        bn: `## The Debugging Mindset (এরর দেখে ঘাবড়াবেন না!)
কোডিং করতে গেলে এরর বা বাগ (Bug) আসবেই। এটি সূর্যের পূর্ব দিকে ওঠার মতোই সত্য। সিনিয়র ডেভেলপারদের জীবনেও প্রতিদিন শত শত এরর আসে।

পার্থক্য হলো তাদের মনস্তত্ত্বে:
*   **ভয় পাবেন না**: এরর আসার মানে আপনি ভুল মানুষ নন; কোড কেবল আপনার নির্দেশ বুঝতে পারেনি।
*   **এরর রিড করুন**: লাল রঙের এরর টেক্সটটিতে ক্লিক করে বুঝুন ঠিক কোন লাইনে এবং কী টাইপের ভুল হয়েছে।
*   **আইসোলেশন (Isolate)**: পুরো কোড চেক না করে শুধু যে অংশে সমস্যা, সেটিকে আলাদা করে টেস্ট করুন।

## Junior vs Senior Thinking (চিন্তার পার্থক্য)
যখন কোনো কোড কাজ করে না, তখন তাদের চিন্তার ধরন বদলে যায়:

*   **জুনিয়র ডেভেলপার ভাবেন**: 
    *"হায় খোদা! আমার কোড কেন কাজ করছে না? আমি মনে হয় প্রোগ্রামিংয়ের যোগ্য নই!"* (panic mode)
*   **সিনিয়র ডেভেলপার ভাবেন**: 
    *"আমি ঠিক কোন পরিবর্তনটি করার কারণে কোডটি ভেঙে গেল? লাইন ১০ এর ভ্যালুটি কি ঠিকভাবে পাস হচ্ছে?"* (detective mode)

পেশাদাররা এররকে শত্রু ভাবেন না, বরং এটি কোড ঠিক করার সবচেয়ে বড় গাইড!`,
        en: `## Debugging Psychology
Errors are normal. A bug is a logical mismatch between developer intent and system compilation.

## The Mental Shift
*   **Junior Dev**: "Why is my code broken? I'm not cut out for this." (Emotional despair)
*   **Senior Dev**: "What exact parameter state changed that caused this output? Let's isolate line 15..." (Analytical diagnostic)`,
      },
    },
    {
      id: "plan-before-code",
      title: {
        bn: "৪. কোড করার আগে পরিকল্পনা (Think Before You Code)",
        en: "4. Think Before You Code",
      },
      content: {
        bn: `## Golden Rule: Never Code Immediately (কখনো সরাসরি কোড করবেন না)
নতুন কোডাররা কোনো প্রজেক্ট দেখলেই সাথে সাথে কিবোর্ড নিয়ে বসেন এবং লিখতে শুরু করেন। ২ ঘণ্টা পর দেখা যায় তারা এলোমেলো লজিকের এক গোলকধাঁধায় হারিয়ে গেছেন।

পেশাদারদের নিয়ম: **"কোড করার আগে চিন্তা করুন, প্ল্যান করুন, তারপর কোড লিখুন।"**

**পরিকল্পনার সুনির্দিষ্ট ধাপ:**
১. খাতা-কলম নিন। প্রজেক্টের ফ্লো-চার্ট আঁকুন।
২. ইউজারের জার্নি কেমন হবে তা ক্রমানুসারে লিখুন।
৩. কোন কোন ডাটা সেভ করতে হবে তা চিহ্নিত করুন।
৪. খসড়া বা সিউডোকোড (Pseudocode) লিখে লজিক সাজান।
৫. যখন লজিক শতভাগ পরিষ্কার হবে, কেবল তখনই কিবোর্ডে হাত দিন।

এতে আপনার কোড লেখার সময় অনেক বেঁচে যাবে এবং ভুল হওয়ার সম্ভাবনা কমে যাবে।`,
        en: `## Plan Before You Code
Keyboard typing is only 20% of programming; the other 80% is critical reasoning.

## Implementation Steps:
1. Grab a notebook. Sketch visual flows.
2. Outline state requirements (what database entries to save).
3. Write Pseudocode (plain language steps of the logic).
4. Start IDE workspace setup only after logical blocks are clear.`,
      },
    },
    {
      id: "real-life-problem",
      title: {
        bn: "৫. বাস্তব উদাহরণ ও সাধারণ ভুলসমূহ (Real-World Case Study & Pitfalls)",
        en: "5. Real-World Case Study & Pitfalls",
      },
      content: {
        bn: `## Case Study: WhatsApp Messaging System (হোয়াটসঅ্যাপ মেসেজ লজিক)
আসুন বিশ্বের অন্যতম বড় মেসেজিং অ্যাপের কাজকে ভেঙে ছোট লজিক্যাল ধাপে সাজাই:
১. **মেসেজ টাইপ ও সেন্ড**: ইউজার ইনপুট বক্সে মেসেজ লিখে সেন্ড বাটনে ট্যাপ করলেন।
২. **মেসেজ প্রসেসিং**: রিকোয়েস্ট তৈরি করে ইন্টারনেট দিয়ে ব্যাকএন্ড সার্ভারে পাঠানো হলো।
৩. **মেসেজ স্টোরেজ**: সার্ভার মেসেজটি গ্রহণ করে ডাটাবেজে স্থায়ীভাবে সেভ করল।
৪. **মেসেজ রিসিভ**: প্রাপকের ফোন অনলাইনে থাকলে সার্ভার তাকে মেসেজটি পুশ নোটিফিকেশনের মাধ্যমে পাঠাল।
৫. **মেসেজ রিড UI**: প্রাপকের চ্যাট স্ক্রিনে মেসেজটি সুন্দরভাবে রেন্ডার হলো।

এই সাধারণ ধাপগুলো মিলেই তৈরি হয়েছে হোয়াটসঅ্যাপের মতো জটিল মেসেজিং সিস্টেম!

## 5 Critical Mistakes (নতুনদের এড়ানোর মতো ভুল)
১. **না বুঝে কোড কপি করা**: টিউটোরিয়াল বা এআই থেকে কোড কপি করে না বুঝে পেস্ট করা।
২. **পরিকল্পনা এড়ানো**: প্রজেক্টের আর্কিটেকচার না ভেবে সরাসরি কোড করতে বসা।
৩. **তাড়াহুড়ো করে লাইব্রেরি শেখা**: বেসিক জাভাস্ক্রিপ্ট ভালো না বুঝেই রিঅ্যাক্ট নিয়ে মাতামাতি করা।
৪. **এরর দেখে ভয় পাওয়া**: এরর দেখে কোডিং বন্ধ করে দেওয়া।
৫. **ধৈর্য হারিয়ে ফেলা**: লজিক প্রথমবার না মিললে হাল ছেড়ে দেওয়া। মনে রাখবেন, প্রোগ্রামিং হলো একটি ধৈর্য ও প্র্যাকটিসের খেলা।`,
        en: `## Case Study: WhatsApp message flow
1. User inputs string characters in input box, taps send.
2. HTTP client emits payload request packets.
3. Server receives stream, saves data into message collection database.
4. Push socket triggers node notification to recipient ID.
5. Recipient browser client fetches and appends visual bubble message card.

## Top Pitfalls
*   Skipping logic planning.
*   Framework hopping.
*   Treating console errors as failures rather than clues.`,
      },
    },
    {
      id: "ai-mentor-thinking",
      title: {
        bn: "৬. এআই ব্যবহারের সঠিক লজিক ও প্র্যাকটিস (AI Logic & Daily Practice)",
        en: "6. AI Logic & Daily Practice",
      },
      content: {
        bn: `## Smart AI Mentorship (এআই-এর সাথে বন্ধুত্ব)
একটিভ লার্নিংয়ের জন্য এআই মেন্টরকে সঠিক প্রশ্ন করুন:
*   **খারাপ প্রশ্ন (Bad Prompt)**: "আমাকে একটি ক্যালকুলেটর অ্যাপের কোড দাও।" (এর ফলে আপনার মস্তিষ্ক অলস থাকবে)।
*   **ভালো প্রশ্ন (Good Prompt)**: "আমি জাভাস্ক্রিপ্ট দিয়ে একটি সাধারণ যোগ করার লজিক লিখতে চাই। এর ধাপগুলো কী কী হতে পারে এবং আমি কীভাবে প্রবলেমটি ডিকম্পোজ করতে পারি?" (এটি আপনাকে চিন্তা করতে সাহায্য করবে)।

## Daily Mindset Practice (দৈনিক প্র্যাকটিস)
কোড না লিখেও প্রতিদিন আপনি মাইন্ডসেট প্র্যাকটিস করতে পারেন। রাস্তা দিয়ে হাঁটার সময় বা কোনো অ্যাপ ব্যবহার করার সময় ভাবুন: "এই অ্যাপের বাটনটিতে ক্লিক করলে সার্ভারে কী কী রিকোয়েস্ট যেতে পারে? ডাটাবেজ কীভাবে কাজ করছে?" এই ভিজ্যুয়ালাইজেশন প্র্যাকটিস আপনাকে খুব দ্রুত একজন সিনিয়র ডিজাইনার ও সিস্টেম আর্কিটেক্ট হিসেবে গড়ে তুলবে।`,
        en: `## Smarter AI Guidelines
Query systems for design methodologies. Understand patterns rather than requesting full executable blocks.

## Daily Visualization Exercise
Practice offline decomposition. When using apps like Spotify, ask: "How does the search bar communicate with the database index to serve music lists instantly?"`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "সিনট্যাক্স পরিবর্তনশীল কিন্তু লজিক বা সমস্যা সমাধানের চিন্তাধারা চিরন্তন। প্রোগ্রামিং মাইন্ডসেট আপনাকে যেকোনো প্রযুক্তিতে দ্রুত খাপ খাইয়ে নিতে সাহায্য করে।",
          en: "Syntaxes change, but problem-solving paradigms are immutable. A solid mindset makes you language-agnostic.",
        },
        whyWorks: {
          bn: "বড় প্রবলেমকে ছোট অংশে ভাঙলে ব্রেইন খুব সহজে তার প্যাটার্ন মেলাতে পারে, ফলে স্ট্রেস বা ক্লান্তি কম লাগে।",
          en: "Decomposition reduces cognitive load, allowing the human brain to process small patterns sequentially without fatigue.",
        },
        professionalThinking: {
          bn: "সিনিয়র ডেভেলপাররা কোড করার চেয়ে সমস্যা বিশ্লেষণের পেছনে বেশি সময় দেন। তারা নিশ্চিত করেন যেন প্রজেক্টের প্ল্যান ১০০% নিখুঁত হয়।",
          en: "Professionals optimize logical architectures before launching IDE workspace projects.",
        },
        mistakes: {
          bn: "নতুনদের সবচেয়ে বড় ভুল হলো এরর দেখলেই ঘাবড়ে যাওয়া এবং কোডটি ডিলিট করে দেওয়া। এরর হলো আপনার কোডকে নিখুঁত করার সেরা টুল।",
          en: "The greatest bug is panic. Read the stack trace; it tells you exactly what failed and where.",
        },
        debugging: {
          bn: "এরর মেসেজটি ভালোভাবে পড়ুন, বিশেষ করে এররের লাইনের সংখ্যা এবং টাইপ (যেমন: SyntaxError, ReferenceError)।",
          en: "Inspect type warnings. Focus diagnostic efforts exactly on the reported line scopes.",
        },
        performance: {
          bn: "পরিকল্পনাহীন কোড পরবর্তীতে রান টাইমে অনেক স্লো হতে পারে এবং বাগে ভরপুর থাকে। তাই প্রথম থেকেই প্ল্যান করে রিফ্যাক্টর করুন।",
          en: "Unplanned spaghetti code creates logical dead-ends and performance bottlenecks. Refactoring becomes extremely difficult.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "m-q1",
      question: {
        bn: "প্রোগ্রামিং এর মূল অর্থ ও উদ্দেশ্য কী?",
        en: "What is the core definition of programming?",
      },
      options: [
        {
          bn: "কম্পিউটার কিবোর্ড খুব দ্রুত টাইপ করা",
          en: "Typing keyboard characters very fast",
        },
        {
          bn: "নির্দেশনার সাহায্যে সুনির্দিষ্ট সমস্যা সমাধান করা",
          en: "Problem-solving using sequential instructions",
        },
        {
          bn: "সব কোডিং সিনট্যাক্স মুখস্থ করে রাখা",
          en: "Memorizing all programming syntaxes",
        },
        { bn: "কম্পিউটার গেম ডেভেলপ করা", en: "Only building video games" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "প্রোগ্রামিং হলো নির্দেশনার সেট তৈরি করে কম্পিউটারের সাহায্যে কোনো সমস্যার বাস্তব সমাধান করা।",
        en: "Programming is the act of directing hardware instructions to solve user problems.",
      },
    },
    {
      id: "m-q2",
      question: {
        bn: "একটি বড় সমস্যাকে ছোট ছোট সহজ উপ-সমস্যায় বিভক্ত করার প্রক্রিয়াকে কী বলা হয়?",
        en: "What is the process of splitting a large task into smaller sub-tasks called?",
      },
      options: [
        { bn: "ডিবাগিং (Debugging)", en: "Debugging" },
        { bn: "কোডিং (Coding)", en: "Coding" },
        { bn: "ডিকম্পোজিশন (Decomposition)", en: "Decomposition" },
        { bn: "ইন্টিগ্রেশন (Integration)", en: "Integration" },
      ],
      correctAnswerIndex: 2,
      explanation: {
        bn: "ডিকম্পোজিশন মানে বড় জটিল প্রবলেমকে ছোট ছোট লজিক্যাল ভাগে ভেঙে সমাধান করা।",
        en: "Decomposition breaks complex problems down into modular, solvable units.",
      },
    },
    {
      id: "m-q3",
      question: {
        bn: "কোডিংয়ে বাগ বা এরর (Bug/Error) দেখা দিলে একজন ডেভেলপারের সঠিক আচরণ কেমন হওয়া উচিত?",
        en: "What is the correct developer response when encountering a bug?",
      },
      options: [
        {
          bn: "ভয় পেয়ে কোডিং করা বন্ধ করে দেওয়া",
          en: "Get scared and close the workspace",
        },
        {
          bn: "শান্ত মাথায় এরর মেসেজটি পড়ে ভুল আইসোলেট বা চিহ্নিত করার চেষ্টা করা",
          en: "Read the error calmly and isolate the failing component logic",
        },
        {
          bn: "পুরো কোড ডিলিট করে আবার শুরু করা",
          en: "Delete all files and write from scratch",
        },
        {
          bn: "না বুঝে এলোমেলোভাবে কোড এডিট করতে থাকা",
          en: "Edit random lines of code blindly hoping it works",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "বাগ কোডিংয়ের অংশ। এরর মেসেজ রিড করে শান্তভাবে ভুল অংশটি আলাদা করে ডিবাগ করাই সিনিয়রদের বৈশিষ্ট্য।",
        en: "Calm diagnostics, error inspection, and scope isolation are key to resolving bug states.",
      },
    },
    {
      id: "m-q4",
      question: {
        bn: "কোড কাজ না করলে একজন সিনিয়র ডেভেলপার কীভাবে চিন্তা করেন?",
        en: "How does a Senior Developer approach broken code?",
      },
      options: [
        {
          bn: "কেন কোড কাজ করছে না তা নিয়ে হতাশ হন",
          en: "Wonder emotionally why things are not working",
        },
        {
          bn: "আমি ঠিক কী পরিবর্তন করার ফলে কোডটি ভেঙে গেল তা ট্র্যাক করেন",
          en: "Investigate what exact parameter or system change broke the logic flow",
        },
        {
          bn: "পুরো প্রজেক্ট বাতিল করে দেন",
          en: "Discard the project entirely",
        },
        {
          bn: "এআই মেন্টরকে সম্পূর্ণ সলিউশন লিখে দিতে বলেন",
          en: "Request AI to rewrite the entire project",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সিনিয়ররা পরিবর্তন বা ভ্যারিয়েবল ট্র্যাকিং করেন এবং বাগকে একটি গোয়েন্দা তদন্তের মতো দেখেন।",
        en: "Seniors trace variable states and verify delta changes in system environments.",
      },
    },
    {
      id: "m-q5",
      question: {
        bn: "এআই এর কাছে কোডের সমস্যা সমাধানের জন্য নিচের কোনটি সবচেয়ে ভালো প্রম্পট?",
        en: "Which of the following is the best AI prompt for logical debugging?",
      },
      options: [
        {
          bn: "'আমাকে সম্পূর্ণ প্রজেক্টের কোড লিখে দাও'",
          en: "'Write the entire project code for me'",
        },
        {
          bn: "'লাইন ১৫-তে কেন এই এররটি আসছে তার লজিক এবং ডিবাগিংয়ের ধাপগুলো বুঝিয়ে বলো'",
          en: "'Explain the logic behind this line 15 error and show me how to debug it'",
        },
        {
          bn: "'এই কোডটি কাজ করছে না, কোডটি ঠিক করো'",
          en: "'This code is not working, fix it'",
        },
        {
          bn: "'সবচেয়ে বড় ক্যালকুলেটরের কোড কপি করতে দাও'",
          en: "'Give me a calculator code to copy'",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এটি এআই এর সাথে ইন্টারেক্টিভ ও লজিক্যাল ওয়েতে শেখে এবং আপনার প্রবলেম সলভিং স্কিল বজায় রাখে।",
        en: "Requesting explanations rather than code prompts improves logic and diagnostics autonomy.",
      },
    },
  ],
  practice: [
    {
      bn: "একটি সাধারণ ক্যালকুলেটর (Calculator) কীভাবে কাজ করে তা ৩টি লজিক্যাল ধাপে ভেঙে খাতায় বা ফাইলে লিখুন। (No Code)",
      en: "Decompose a simple calculator app logic flow into 3 steps. (No code required)",
    },
    {
      bn: "ইউজার জিমেইল অ্যাকাউন্টে পাসওয়ার্ড ভুলে গেলে কীভাবে 'পাসওয়ার্ড রিসেট' করবেন, তার একটি স্টেপ-বাই-স্টেপ লজিক্যাল ফ্লো চার্ট তৈরি করুন।",
      en: "Outline the step-by-step logic flow for a 'forgot password / password reset' sequence.",
    },
    {
      bn: "একটি স্টুডেন্ট রেজাল্ট শিট প্রজেক্ট (যেখানে মার্ক দেখে গ্রেড দেখাবে) কীভাবে ডিকম্পোজ করবেন? নিজের ভাষায় গুছিয়ে লিখুন।",
      en: "Explain how you would decompose a Student Gradebook system.",
    },
  ],
  assignment: {
    title: {
      bn: "আপনার প্রথম বাস্তবমুখী প্রজেক্টের পরিকল্পনা ও লজিক্যাল ডিকম্পোজিশন",
      en: "Logic Planning & Decomposition for Your First App",
    },
    description: {
      bn: "একটি সাধারণ টু-ডু লিস্ট (To-Do List) অ্যাপ্লিকেশনের কাজকে ৪টি লজিক্যাল ধাপে ডিকম্পোজ করুন এবং ডেক্লারেটিভ ভ্যারিয়েবল ফ্লো লিখে অ্যাসাইনমেন্ট অবজেক্ট সাবমিট করুন।",
      en: "Decompose a simple To-Do List application. Structure the logical milestones inside a JavaScript config object.",
    },
    starterCode: `// To-Do App Logic Decomposition
const todoAppPlanning = {
  appName: "Simple To-Do List",
  logicalSteps: [
    // এখানে অন্তত ৩টি লজিক্যাল ধাপের তালিকা লিখুন
  ],
  potentialBugsToWatch: [
    // কী কী এরর আসতে পারে তার তালিকা
  ],
  readyToPlanBeforeCode: false
};`,
    solution: {
      code: `// To-Do App Decomposition Reference Solution
const todoAppPlanning = {
  appName: "বিজ্ঞানপ্রো টু-ডু অ্যাপ্লিকেশন",
  logicalSteps: [
    "ধাপ ১: ইউজার টেক্সট ইনপুট দিয়ে অ্যাড বাটনে চাপলে নতুন টাস্ক তৈরি হওয়া।",
    "ধাপ ২: টাস্কগুলোর তালিকা স্ক্রিনে সুন্দর কার্ড আকারে রেন্ডার করা।",
    "ধাপ ৩: সম্পন্ন হওয়া টাস্কে টিক চিহ্ন দেওয়া এবং তালিকা থেকে মুছে ফেলার অপশন রাখা।"
  ],
  potentialBugsToWatch: [
    "ইউজার খালি ঘর রেখে অ্যাড বাটনে চাপ দিলে ফাঁকা টাস্ক অ্যাড হয়ে যাওয়া।",
    "টাস্ক রিমুভ করার সময় আইডি ভুল সিলেক্ট করা।"
  ],
  readyToPlanBeforeCode: true
};`,
      explanation: {
        bn: "এটি টু-ডু লিস্টের চমৎকার আর্কিটেকচারাল প্ল্যান। কোড করার আগে এভাবে চিন্তা করলে অ্যাপ বিল্ড করা পানির মতো সহজ মনে হবে।",
        en: "This maps app features into clear logical deliverables, laying down a solid development blueprint.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "কোড ডিকম্পোজিশন (Decomposition) কেন গুরুত্বপূর্ণ এবং এটি না করলে কী সমস্যা হতে পারে?",
        en: "Why is Decomposition important and what happens if developers skip it?",
      },
      answer: {
        bn: "ডিকম্পোজিশন ছাড়া বড় কোনো প্রজেক্ট তৈরি করতে গেলে কোডাররা খুব দ্রুত লজিকের খেই হারিয়ে ফেলেন। একে বলে স্প্যাগেটি কোড (Spaghetti Code)—যা পরবর্তীতে এডিট করা বা এরর ডিবাগ করা অসম্ভব হয়ে পড়ে। ডিকম্পোজিশন প্রজেক্টকে সহজ, মডিউলার এবং বাগ-মুক্ত রাখতে সাহায্য করে।",
        en: "Without decomposition, you write messy 'spaghetti code' where components are tightly coupled. Locating errors and refactoring features becomes extremely costly and stressful.",
      },
    },
    {
      question: {
        bn: "কোড কাজ না করলে এবং ব্রাউজারে লাল এরর দেখাবে—এমতাবস্থায় একজন প্রফেশনাল ডেভেলপারের পদক্ষেপগুলো কী কী?",
        en: "What step-by-step procedure does a professional follow when code returns an exception error?",
      },
      answer: {
        bn: "১. তারা শান্ত থাকেন এবং ঘাবড়ে যান না।\n২. এরর ডিরেক্টরি, লাইনের সংখ্যা এবং এরর টাইপ (যেমন: ReferenceError) রিড করেন।\n৩. কনসোল লগ ব্যবহার করে ভ্যারিয়েবলের শেষ মান ট্র্যাক করে সমস্যা চিহ্নিত (Isolate) করেন।\n৪. সমাধান না পেলে অফিসিয়াল ম্যানুয়াল বা ডকুমেন্টেশন সার্চ করেন।\n৫. শেষ অপশন হিসেবে এআই কে এরর লজিক ব্যাখ্যা করতে বলেন।",
        en: "1. Maintain calm.\n2. Read the exception details: type, file path, line numbers.\n3. Isolate variables state using console logs.\n4. Search official documentations.\n5. Ask AI assistant for conceptual debug models if stuck.",
      },
    },
  ],
};
