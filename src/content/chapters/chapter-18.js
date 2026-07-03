export const chapter18Content = {
  id: "chapter-18",
  number: 18,
  title: {
    bn: "অধ্যায় ১৮: জাভাস্ক্রিপ্ট ফান্ডামেন্টালস — প্রোগ্রামিংয়ের প্রথম ধাপ",
    en: "Chapter 18: JavaScript Fundamentals",
  },
  description: {
    bn: "জাভাস্ক্রিপ্ট কী, ভ্যারিয়েবল ও ডাটা টাইপ, ফাংশন, ইফ-এলস কন্ডিশনাল এবং লুপের সাহায্যে লজিক বিল্ড করার বেসিক গাইড।",
    en: "Learn the core concepts of programming: variables, data types, functions, conditional statements (if/else), loops, and runtime execution flows.",
  },
  difficulty: "beginner",
  readingTime: 12,
  objectives: [
    {
      bn: "জাভাস্ক্রিপ্ট কীভাবে ওয়েবসাইটকে ডাইনামিক এবং বুদ্ধিমান করে তা শেখা।",
      en: "Learn how JavaScript makes websites interactive and dynamic.",
    },
    {
      bn: "ভ্যারিয়েবল ও ডাটা টাইপ (String, Number, Boolean) এর কনসেপ্ট ক্লিয়ার করা।",
      en: "Understand variables as boxes storing strings, numbers, and booleans.",
    },
    {
      bn: "ফাংশন ব্যবহারের মাধ্যমে কোড বারবার না লিখে পুনর্ব্যবহার করতে শেখা।",
      en: "Write reusable actions using functions and parameter passes.",
    },
    {
      bn: "ইফ/এলস (If/Else) কন্ডিশন ও লুপ (Loops) ব্যবহার করে লজিক্যাল সিদ্ধান্ত নেওয়া।",
      en: "Build logic structures using if/else conditionals and iterative loops.",
    },
  ],
  sections: [
    {
      id: "what-is-javascript",
      title: {
        bn: "১. জাভাস্ক্রিপ্ট কী ও কোড কীভাবে রান করে? (What is JS & How it Runs)",
        en: "1. What is JS & How it Runs",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
HTML দিয়ে আমরা ওয়েবসাইটের কঙ্কাল বা বডি বানিয়েছি, CSS দিয়ে তাকে জামা পরিয়ে সুন্দর করেছি। কিন্তু সেই ওয়েবসাইটটি কি নিজে নিজে কোনো সিদ্ধান্ত নিতে পারে? আপনি যদি বিকাশ অ্যাপ বা কোনো ওয়েবসাইটে পাসওয়ার্ড ভুল লেখেন, অ্যাপটি কি লাল সংকেত দিয়ে বলতে পারে পাসওয়ার্ড ভুল হয়েছে? এই বুদ্ধিমান বা ইন্টারেক্টিভ কান্ডকারখানা করার জাদুর নামই হলো **JavaScript (জাভাস্ক্রিপ্ট)**।

## Why should I learn this? (কেন শিখবো?)
জাভাস্ক্রিপ্ট হলো ইন্টারনেটের সবচেয়ে শক্তিশালী এবং ব্যবহৃত প্রোগ্রামিং ল্যাঙ্গুয়েজ। আপনি ফ্রন্টএন্ড বলুন, ব্যাকএন্ড (Node.js) বলুন কিংবা মোবাইল অ্যাপস—সবখানেই জাভাস্ক্রিপ্ট রাজত্ব করছে। এটি আয়ত্ত করতে পারলে আপনি নিজেই রিয়েল ওয়ার্ল্ড সফটওয়্যার বানানোর যোগ্যতা পাবেন।

## What is JavaScript? (জাভাস্ক্রিপ্ট কী?)
সহজ কথায়: **জাভাস্ক্রিপ্ট হলো একটি হাই-লেভেল স্ক্রিপ্টিং প্রোগ্রামিং ল্যাঙ্গুয়েজ যার কাজ হলো স্ট্যাটিক বা মৃত ওয়েবসাইটকে প্রাণবন্ত, বুদ্ধিমান এবং ইন্টারেক্টিভ করে তোলা।**

*   **রূপক**: এইচটিএমএল কঙ্কাল আর সিএসএস পোশাক হলে, জাভাস্ক্রিপ্ট হলো মানুষের মস্তিষ্ক ও স্নায়ুতন্ত্র যা পেশী নাড়াতে সাহায্য করে এবং চারপাশের ঘটনা দেখে সিদ্ধান্ত নেয়।

---
## How Code Runs (কোড কীভাবে চলে?)
কম্পিউটার ব্রাউজারে থাকা জাভাস্ক্রিপ্ট ইঞ্জিন (যেমন V8) আপনার লেখা কোড ফাইলকে লাইন বাই লাইন প্রসেস করে:
১. **টপ-টু-বটম (Top-to-Bottom)**: কোড সর্বদা প্রথম লাইন থেকে ক্রমানুসারে নিচের দিকে রান করে।
২. **লাইন-বাই-লাইন (Line-by-line)**: ২নং লাইন শেষ হওয়ার আগে প্রসেসর সাধারণত ৩নং লাইনে যায় না।`,
        en: `## Introduction
HTML establishes page layouts, CSS crafts typography styles, but JavaScript supplies the application logic and interactive behaviors.

## What is JavaScript?
A dynamic programming language used to build interactive websites, logic algorithms, backend APIs (Node.js), and mobile systems.

## Execution Flow
The JavaScript engine (e.g., V8) evaluates text instructions sequentially:
1. **Top-to-Bottom**: Executes line 1 first, proceeding downwards.
2. **Synchronous**: Processes tasks step-by-step, maintaining order.`,
      },
    },
    {
      id: "js-variables-data-types",
      title: {
        bn: "২. ভ্যারিয়েবল এবং ডাটা টাইপ (Variables & Data Types)",
        en: "2. Variables & Data Types",
      },
      content: {
        bn: `## What is a Variable? (ভ্যারিয়েবল কী?)
কোডিং করার সময় আমাদের প্রচুর ডেটা বা তথ্য মেমরিতে সাময়িকভাবে মনে রাখতে বা সেভ করে রাখতে হয়। এই তথ্য জমা রাখার পাত্র বা বক্সকে **ভ্যারিয়েবল (Variable)** বলা হয়।
*   **রূপক**: রান্নাঘরের মসলার বক্স। বক্সের গায়ে একটি নামফলক লেবেল লাগানো থাকে (যেমন: "জিরা" বা "লবণ"), আর বক্সের ভেতরে থাকে আসল মসলা।
*   **কোড উদাহরণ**:
    \`\`\`javascript
    let name = "Maruf"; // 'name' নামক বক্সে "Maruf" লেখাটি রাখা হলো
    let age = 22;      // 'age' নামক বক্সে 22 নম্বরটি রাখা হলো
    \`\`\`

---
## Data Types (ডাটার প্রকারভেদ)
জাভাস্ক্রিপ্টে মসলার বক্সের মসলার মতো ভিন্ন ভিন্ন ডাটা ফরম্যাট থাকে, এদের **ডাটা টাইপ (Data Types)** বলে:

১. **String (স্ট্রিং - লেখা)**: ডাবল বা সিঙ্গেল কোটেশনের ভেতরে থাকা যেকোনো টেক্সট বা অক্ষর।
   - **উদাহরণ**: \`"Tasnim"\`, \`"bignanpro"\`।
২. **Number (নাম্বার - সংখ্যা)**: কোটেশন ছাড়া যেকোনো গাণিতিক সংখ্যা (পূর্ণ বা দশমিক)।
   - **উদাহরণ**: \`25\`, \`99.5\`।
３. **Boolean (বুলিয়ান - সত্য/মিথ্যা)**: কেবল দুটি মান ধারণ করতে পারে—সত্য বা মিথ্যা।
   - **উদাহরণ**: \`true\` (হ্যাঁ) এবং \`false\` (না)।`,
        en: `## What is a Variable?
A conceptual container mapped to a memory address used to store variable values. E.g., \`let age = 25;\`.

## Core Data Types
*   **String**: Text enclosed in quotes. E.g., \`"Amiya"\`.
*   **Number**: Numerical values. E.g., \`42\` or \`10.5\`.
*   **Boolean**: Logical true/false flags. E.g., \`true\`.`,
      },
    },
    {
      id: "js-functions",
      title: {
        bn: "৩. ফাংশন — পুনর্ব্যবহারযোগ্য কোড ব্লক (Functions & Actions)",
        en: "3. Functions & Actions",
      },
      content: {
        bn: `## What is a Function? (ফাংশন কী?)
একটি বড় প্রজেক্টে আমাদের একই কোড বারবার লেখার প্রয়োজন হতে পারে। যেমন: কোনো ইউজারকে হ্যালো বলা। আমরা যদি ১০০০ লাইনের কোডে বারবার হ্যালো লেখার কোড লিখি, কোডের সাইজ অনেক বড় হয়ে যাবে।

**ফাংশন (Function)** হলো একটি পুনর্ব্যবহারযোগ্য কোডের বক্স বা অ্যাকশন যা একবার লিখে রাখলে আমরা নাম ধরে যেকোনো জায়গায় হাজার বার কল (Call) করতে পারি।

*   **রূপক**: জ্যামিতির ক্যালকুলেটর বা কফি মেকার। আপনি ইনপুট কফি বিন্স ও পানি দেবেন, মেশিন প্রসেস করে কফি আউটপুট দেবে। আপনাকে বারবার ম্যানুয়ালি পানি গরম করতে হবে না!
*   **কোড উদাহরণ**:
    \`\`\`javascript
    // ফাংশন তৈরি (Declaration)
    function greetUser(userName) {
      console.log("হ্যালো " + userName + ", বিজ্ঞানপ্রো একাডেমিতে স্বাগতম!");
    }

    // ফাংশন চালানো (Call / Execution)
    greetUser("Maruf"); // আউটপুট: হ্যালো Maruf, বিজ্ঞানপ্রো একাডেমিতে স্বাগতম!
    greetUser("Afrin"); // আউটপুট: হ্যালো Afrin, বিজ্ঞানপ্রো একাডেমিতে স্বাগতম!
    \`\`\``,
        en: `## What is a Function?
A reusable block of code designed to perform a particular task when invoked (called).

## Code Structure:
\`\`\`javascript
function calculateSum(a, b) {
  return a + b;
}
let total = calculateSum(5, 10); // Returns 15
\`\`\``,
      },
    },
    {
      id: "js-conditionals-loops",
      title: {
        bn: "৪. কন্ডিশনাল ও লুপস — সিদ্ধান্ত ও পুনরাবৃত্তি (Conditionals & Loops)",
        en: "4. Conditionals & Loops",
      },
      content: {
        bn: `## Conditionals: If/Else (সিদ্ধান্ত নেওয়া)
সফটওয়্যারকে বুদ্ধিমান করতে হলে তাকে পরিস্থিতি অনুযায়ী সিদ্ধান্ত নেওয়ার ক্ষমতা দিতে হবে। একে **কন্ডিশনাল স্টেটমেন্ট (Conditionals)** বলে।

আমরা বাস্তব জীবনে যেভাবে কথা বলি: *"যদি বৃষ্টি হয় ছাতা নেব, অন্যথায় ছাতা নেব না।"*
কোডিংয়েও ঠিক তাই:
\`\`\`javascript
let isRaining = true;

if (isRaining) {
  console.log("☔ ছাতা নিয়ে বাইরে যান।");
} else {
  console.log("☀️ রোদ আছে, ছাতা লাগবে না।");
}
\`\`\`

---
## Loops: Repetition (পুনরাবৃত্তি)
আমাদের যদি বলা হয় ১ থেকে ১০০ পর্যন্ত সংখ্যা প্রিন্ট করতে, আমরা কি ১০০ বার \`console.log\` লিখব? অবশ্যই না!

লুপের কাজ হলো: **নির্দিষ্ট শর্ত পূরণ না হওয়া পর্যন্ত একটি নির্দিষ্ট কোড ব্লককে বারবার চালিয়ে যাওয়া (Looping/Repetition)।**
*   **উদাহরণ (For Loop)**:
    \`\`\`javascript
    for (let count = 1; count <= 5; count++) {
      console.log("ধাপ নম্বর: " + count);
    }
    // এটি স্ক্রিনে ৫ বার ধাপ নম্বর ১ থেকে ৫ পর্যন্ত প্রিন্ট করবে!
    \`\`\``,
        en: `## Conditionals (if/else)
Conditional statements execute code blocks based on boolean truth values.

## Loops (for/while)
Loops repeat a block of code as long as a specified condition holds true. Perfect for iterating over arrays of product database data.`,
      },
    },
    {
      id: "brain-analogy-workflow",
      title: {
        bn: "৫. ব্রেইনের রূপক ও রিয়েল লজিক ফ্লো (Logic Brain Analogy)",
        en: "5. Logic Brain Analogy",
      },
      content: {
        bn: `## The Brain & Mind Metaphor (মানুষের ব্রেন রূপক)
জাভাস্ক্রিপ্টের লজিক কাজ করাকে মানুষের ব্রেনের চিন্তাশক্তির সাথে মিলিয়ে নিন:
*   **ব্রেনের স্মৃতিশক্তি (Memory Storage)**: ভ্যারিয়েবল (Variables - যেখানে বয়স, নাম ইত্যাদি মনে রাখা হয়)।
*   **ব্রেনের সিদ্ধান্ত নেওয়া (Decision System)**: ইফ/এলস (If/Else - যদি খিদে লাগে তবে খাব, অন্যথায় ঘুমাব)।
*   **শরীরের মেকানিক্যাল পুনরাবৃত্তি**: লুপস (Loops - যতক্ষণ না পেট ভরে, লোকমা মুখে দিতে থাকো)।
*   **অভ্যাস বা নির্দিষ্ট কাজ**: ফাংশন (Functions - যেমন: দাঁত ব্রাশ করা। আপনি যখন ব্রাশ করেন, আপনি মাথা খাটান না। আপনার ব্রেন সাব-রুটিন অ্যাকশন চালু করে দেয়!)।`,
        en: `## Metaphor
*   **Brain Memory**: Variables.
*   **Decision Making**: If/Else conditionals.
*   **Repetitive Muscle Actions**: Loops.
*   **Habit Subroutines**: Functions.`,
      },
      codeBlock: {
        fileName: "js_fundamentals.js",
        language: "javascript",
        code: `// জাভাস্ক্রিপ্ট ভ্যারিয়েবল, কন্ডিশন ও ফাংশন সিমুলেটর
let userScore = 85;
const passingScore = 60;

function evaluateUserResult(score) {
  console.log("📊 টেস্ট প্রসেস হচ্ছে, প্রাপ্ত নম্বর: " + score);
  
  if (score >= passingScore) {
    console.log("🎉 অভিনন্দন! আপনি পাস করেছেন।");
    return "PASS";
  } else {
    console.log("❌ দুঃখিত! আপনি ফেইল করেছেন।");
    return "FAIL";
  }
}

const finalStatus = evaluateUserResult(userScore);
console.log("🏁 রেজাল্ট স্ট্যাটাস: " + finalStatus);`,
        explanations: [
          {
            line: 4,
            text: {
              bn: "ফাংশন ডিক্লেয়ারেশন যা ইনপুট প্যারামিটার হিসেবে 'score' রিসিভ করে।",
              en: "Declaring helper function to process numerical parameters.",
            },
          },
          {
            line: 7,
            text: {
              bn: "ইফ কন্ডিশন ম্যাচ করে যদি ইউজার স্কোর ৬০ বা তার বেশি পায়, তবে রিটার্ন বডি রান হবে।",
              en: "Checking values inside boolean expression block.",
            },
          },
        ],
      },
    },
    {
      id: "practice-js-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার কোডিং সিনট্যাক্স, ভ্যারিয়েবল ও লজিক লুপের ধারণা শক্তিশালী করবে।`,
        en: `## Reflection & Lab Tasks
Assess your coding logic before manipulating browser elements dynamically in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "জাভাস্ক্রিপ্টের লজিক বিল্ডিং প্র্যাকটিস করলে আপনার মস্তিষ্কের লজিক্যাল চিন্তা করার ক্ষমতা বাড়বে এবং যেকোনো কঠিন রিয়েল প্রজেক্ট সহজে বানাতে পারবেন।",
          en: "Programming builds neural pathways for systemic problem-solving, converting concepts to steps.",
        },
        whyWorks: {
          bn: "জাভাস্ক্রিপ্ট ইঞ্জিন কোড পার্স করে একটি অ্যাবস্ট্রাক্ট সিনট্যাক্স ট্রি (AST) তৈরি করে লোকাল রানটাইমে এক্সিকিউট করায়।",
          en: "Engines parse text code into Abstract Syntax Trees (ASTs) before generating machine code.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা গ্লোবাল স্কোপের ভেরিয়েবল কলোশন এড়াতে 'var' এর বদলে ব্লক স্কোপড 'let' এবং 'const' ব্যবহার করেন।",
          en: "Seniors enforce clean lexical scope boundaries by replacing legacy 'var' keywords with 'let' and 'const'.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো অ্যাসাইনমেন্ট অপারেটর (=) এবং ইকুয়ালিটি কম্প্যারিজন অপারেটর (===) গুলিয়ে ফেলা। একটি মান সেভ করে, অন্যটি মান তুলনা করে।",
          en: "Avoid using assignments (=) inside conditional expressions instead of equality operators (===).",
        },
        debugging: {
          bn: "কোডের মান চেক করতে এবং ভেরিয়েবলের ডাটা দেখতে ক্রোম কনসোলে 'console.log()' ফাংশন ব্যবহার করুন।",
          en: "Inject console.log assertions in target function bodies to trace parameter value drift.",
        },
        performance: {
          bn: "লুপের কন্ডিশনে ইনফিনিট লুপ এড়াতে লুপ ইটারেটর (যেমন i++) প্রপারলি আপডেট হচ্ছে কিনা ডাবল চেক করুন।",
          en: "Verify loop exit conditions clearly to prevent infinite loops from hanging CPU threads.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "js-q1",
      question: {
        bn: "জাভাস্ক্রিপ্ট (JavaScript) ল্যাঙ্গুয়েজের মূল কাজ কোনটি?",
        en: "What is the primary role of JavaScript?",
      },
      options: [
        {
          bn: "ওয়েবসাইটের কঙ্কাল কাঠামো তৈরি করা",
          en: "Create skeletal webpage markup layers",
        },
        {
          bn: "ওয়েবসাইটকে ইন্টারেক্টিভ ও লজিক্যাল সিদ্ধান্ত নেওয়ার বুদ্ধিমত্তা দেওয়া",
          en: "supply logic and dynamic interactive behaviors to webpages",
        },
        {
          bn: "শুধুমাত্র ফন্ট কালার নীল করা",
          en: "Style background font colors blue only",
        },
        {
          bn: "কম্পিউটারের পাওয়ার অন করা",
          en: "Turn on computer motherboard hardware",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "জাভাস্ক্রিপ্ট ওয়েবসাইটকে সচল করে, ইন্টারেক্টিভ করে ও ডাটা কন্ডিশনাল লুপ দিয়ে হ্যান্ডেল করে।",
        en: "JS executes interactive routines on client browsers, creating dynamic UI updates.",
      },
    },
    {
      id: "js-q2",
      question: {
        bn: "কোডিংয়ের ভাষায় ভ্যারিয়েবল (Variable) বলতে কী বোঝায়?",
        en: "What is a Variable in programming?",
      },
      options: [
        { bn: "একটি বড় মেমরি কার্ড", en: "A physical storage card" },
        {
          bn: "মেমরিতে সাময়িকভাবে ডাটা বা তথ্য সেভ করে রাখার কন্টেইনার বা পাত্র",
          en: "A named memory container used to store application data values",
        },
        { bn: "একটি ভুল কোড লাইন", en: "An invalid lines of code" },
        {
          bn: "ব্রাউজার ক্লোজ করার বাটন",
          en: "A button used to close browsers",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ভ্যারিয়েবল মসলার বক্সের মতো, যার একটি লেবেল নাম থাকে ও ভেতরে ডাটা ধারণ করে।",
        en: "Variables store data configurations in heap space, referenced via lexical names.",
      },
    },
    {
      id: "js-q3",
      question: {
        bn: "কোড বারবার না লিখে এক জায়গার কোড প্রজেক্টের যেকোনো স্থানে বারবার কল করে চালানোর নিয়মের নাম কী?",
        en: "Which code structure allows reusability of actions?",
      },
      options: [
        { bn: "String Variables", en: "String Variables" },
        { bn: "Function (ফাংশন)", en: "Function" },
        { bn: "Boolean value", en: "Boolean value" },
        { bn: "HTML Tag", en: "HTML Tag" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ফাংশন হলো পুনর্ব্যবহারযোগ্য অ্যাকশন বক্স যা ইনপুট প্যারামিটার নিয়ে নির্দিষ্ট কাজ সম্পন্ন করতে পারে।",
        en: "Functions pack instruction sequences, exposing parameter interfaces to consumers.",
      },
    },
    {
      id: "js-q4",
      question: {
        bn: "শর্ত সাপেক্ষে কোড রান করানোর লজিক্যাল পদ্ধতিকে কী বলা হয়?",
        en: "Which statement executes blocks depending on conditional truth?",
      },
      options: [
        { bn: "For loop", en: "For loop" },
        { bn: "If / Else Conditionals", en: "If / Else Conditionals" },
        { bn: "Var container", en: "Var container" },
        { bn: "DNS Resolver", en: "DNS Resolver" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ইফ/এলস কন্ডিশন চেক করে সত্য হলে একটি কোড ব্লক চালায় এবং মিথ্যা হলে অন্যটি চালায়।",
        en: "If/Else checks boolean expressions, splitting code execution down specific forks.",
      },
    },
    {
      id: "js-q5",
      question: {
        bn: "একটি নির্দিষ্ট কাজকে বারবার লুপে ঘুরিয়ে রান করার স্ট্রাকচারের নাম কী?",
        en: "What programming structure repeats an action?",
      },
      options: [
        { bn: "String declaration", en: "String declaration" },
        { bn: "Loop (লুপ)", en: "Loop" },
        { bn: "API endpoint", en: "API endpoint" },
        { bn: "V8 Compiler", en: "V8 Compiler" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "লুপ (যেমন for, while) নির্দিষ্ট শর্ত পূরণ হওয়া পর্যন্ত একই কোড বারবার চালায়।",
        en: "Loops loop execution paths back to conditional hooks, repeating operations.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার নাম ধারণকারী একটি ভ্যারিয়েবল এবং বয়স ধারণকারী একটি ভ্যারিয়েবল ডিক্লেয়ার করার কোড লিখুন।",
      en: "Write JS variable declarations mapping your name to a string and age to a number.",
    },
    {
      bn: "বৃষ্টি হলে ছাতা নেব, আর তীব্র রোদ থাকলে টুপি নেব—এই ৩ স্তর লজিকের ইফ/এলস (if / else if / else) কোড কীভাবে লিখবেন? লিখুন। *ক্লু: else if ব্যবহার করুন।*",
      en: "Write a three-tier conditional script checking rain vs. sunny states.",
    },
    {
      bn: "১ থেকে ৩ পর্যন্ত সংখ্যা স্ক্রিনে প্রিন্ট করতে ১টি সিম্পল 'for loop' কোড লিখুন।",
      en: "Draft a simple for loop counting and logging integers from 1 to 3.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি ইউজার ডিসকাউন্ট ক্যালকুলেটর লজিক",
      en: "User Discount Calculator Logic Design",
    },
    description: {
      bn: "ইউজার কত টাকার কেনাকাটা করেছেন তার ওপর ভিত্তি করে ১০% ডিসকাউন্ট ক্যালকুলেট করার একটি ফাংশন তৈরি করে সাবমিট করুন। যদি কেনাকাটা ৫০০ টাকার বেশি হয় তবে ডিসকাউন্ট প্রযোজ্য হবে।",
      en: "Create a discount calculator function evaluating shopping amounts. Grant a 10% discount if the bill exceeds 500.",
    },
    starterCode: `// Discount Calculator Schema
function calculateDiscount(cartTotal) {
  let finalBill = cartTotal;
  
  // কন্ডিশন লিখুন: ৫০০ টাকার বেশি হলে ১০% ডিসকাউন্ট দিন
  
  return finalBill;
}

console.log(calculateDiscount(600)); // আউটপুট ৫৪০ হওয়া উচিত`,
    solution: {
      code: `// Discount Calculator Active
function calculateDiscount(cartTotal) {
  let finalBill = cartTotal;
  
  if (cartTotal > 500) {
    const discount = cartTotal * 0.10; // ১০% ডিসকাউন্ট হিসাব
    finalBill = cartTotal - discount;
  }
  
  return finalBill;
}

console.log(calculateDiscount(600)); // Returns 540`,
      explanation: {
        bn: "চমৎকার প্রজেক্ট! ৫০০ টাকার কন্ডিশন চেক করে ১০% ডিসকাউন্ট বিয়োগ করার সম্পূর্ণ ক্যালকুলেশন লজিক ফ্লোটি শতভাগ সঠিক হয়েছে।",
        en: "Evaluating discount offsets models how client-side carts calculate final bills dynamically.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "কোডিং ভ্যারিয়েবল ডিক্লেয়ার করার ক্ষেত্রে const এবং let এর মধ্যে কাজের মূল পার্থক্য কী?",
        en: "What is the core functional difference between const and let variables declarations?",
      },
      answer: {
        bn: "১. **let**: এটি ডাইনামিক বা পরিবর্তনশীল মানের জন্য ব্যবহৃত হয়। এর মান ডিক্লেয়ার করার পর যেকোনো সময় কোডে পরিবর্তন করা যায় (যেমন: let score = 0; score = 10;)।\n২. **const (Constant)**: এটি ধ্রুবক বা অপরিবর্তনশীল মানের জন্য ব্যবহৃত হয়। এর মান একবার সেট করার পর আর কোনোভাবেই কোডে রি-অ্যাসাইন বা পরিবর্তন করা যায় না (যেমন: const passingScore = 60;)। পরিবর্তন করার চেষ্টা করলে এরর দেখাবে। এটি ভুল করে কোডের গুরুত্বপূর্ণ ডেটা চেঞ্জ হওয়া থেকে প্রজেক্টকে রক্ষা করে।",
        en: "1. **let**: Declares block-scoped variables that can be reassigned later in execution loops (e.g., counters).\n2. **const**: Declares read-only variables whose values cannot be reassigned after declaration. Helps prevent developer mistakes that overwrite configuration variables.",
      },
    },
    {
      question: {
        bn: "ফাংশনে প্যারামিটার (Parameter) এবং আর্গুমেন্ট (Argument) এর মধ্যে সম্পর্ক ও পার্থক্য কী?",
        en: "What is the difference between a function Parameter and an Argument?",
      },
      answer: {
        bn: "১. **প্যারামিটার (Parameter)**: এটি হলো ফাংশন তৈরি বা ডিক্লেয়ার করার সময় ফার্স্ট ব্যাকেটের ভেতরে লিখে রাখা কাল্পনিক বা প্লেসহোল্ডার ভেরিয়েবল নাম (যেমন: function greet(name)—এখানে 'name' হলো প্যারামিটার)।\n২. **আর্গুমেন্ট (Argument)**: এটি হলো ফাংশনটি রান বা কল করার সময় বাস্তবে প্যারামিটারের স্থানে পাঠানো আসল রিয়েল ডেটা মান (যেমন: greet('Maruf')—এখানে 'Maruf' হলো আর্গুমেন্ট)। প্যারামিটার হলো ইনপুট বক্সের নামফলক এবং আর্গুমেন্ট হলো বক্সের ভেতরে রাখা আসল উপাদান।",
        en: "1. **Parameter**: Named placeholder variables declared in function signatures (e.g., 'a' and 'b' in 'function sum(a, b)').\n2. **Argument**: The real values passed down to parameters during function invocation (e.g., '5' and '10' in 'sum(5, 10)'). Parameters declare signature structure, arguments supply runtime values.",
      },
    },
  ],
};
