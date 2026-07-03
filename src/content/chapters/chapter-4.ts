import { Chapter } from "@/types";

export const chapter4Content: Chapter = {
  id: "chapter-4",
  number: 4,
  title: {
    bn: "অধ্যায় ৪: এআই (AI) এর সঠিক ব্যবহার — কোডিং টিউটর ও প্রডাক্টিভিটি গাইড",
    en: "Chapter 4: Using AI Effectively — Your Coding Partner",
  },
  description: {
    bn: "কোডিং শেখার গতি বাড়াতে এআইকে পার্সোনাল টিউটর ও ডিবাগার হিসেবে ব্যবহারের বাস্তবসম্মত নিয়ম।",
    en: "Learn how to use AI as a programming tutor, debug errors efficiently, write good prompts, and avoid over-dependence.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "এআই (AI) কে কেবল কোড জেনারেটর হিসেবে না দেখে একজন ব্যক্তিগত শিক্ষক হিসেবে মূল্যায়ন করা।",
      en: "Learn to treat AI as a personal tutor rather than just a code generator.",
    },
    {
      bn: "এআই ব্যবহারের সঠিক ও ভুল পদ্ধতিগুলোর পার্থক্য বাস্তব উদাহরণ দিয়ে বোঝা।",
      en: "Differentiate between correct and incorrect AI habits using real examples.",
    },
    {
      bn: "সিস্টেম্যাটিক প্রম্পট টেমপ্লেট ব্যবহার করে এআই থেকে লজিক্যাল উত্তর বের করার কৌশল শেখা।",
      en: "Master prompt engineering techniques to extract logical breakdowns from AI.",
    },
    {
      bn: "এরর মেসেজ কপি করে ধাপে ধাপে এআই এর সাহায্যে ডিবাগ করার প্রফেশনাল ওয়ার্কফ্লো রপ্ত করা।",
      en: "Adopt a step-by-step professional debugging workflow with AI assistance.",
    },
  ],
  sections: [
    {
      id: "ai-tutor-concept",
      title: {
        bn: "১. এআই আসলে কী আমাদের জন্য? (What is AI for Developers?)",
        en: "1. What is AI for Developers?",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আজকের দিনে চ্যাটজিপিটি (ChatGPT), জেমিনি (Gemini) বা ক্লড (Claude) এর মতো এআই টুলসগুলো কোডিংয়ের জগতকে অনেক বদলে দিয়েছে। কিন্তু নতুন কোডার হিসেবে আপনি যদি এগুলোকে ভুল উপায়ে ব্যবহার করেন, তবে আপনার ডেভেলপার হওয়ার স্বপ্ন শুরুতেই শেষ হয়ে যেতে পারে। এই লেসনে আমরা জানবো কীভাবে এআই কে আমাদের সেরা লার্নিং পার্টনার বানানো যায়।

## Why should I learn this? (কেন শিখবো?)
এআই কে কোড লেখার জন্য ব্যবহার করা আর গণিত পরীক্ষার আগে ক্যালকুলেটরে সরাসরি উত্তর দেখে লিখে দেওয়া একই কথা। এটি আপনার মস্তিষ্কের লজিক শেখার ক্ষমতা নষ্ট করে দেয়। কিন্তু এআই কে যদি আপনি শিক্ষক হিসেবে ব্যবহার করতে পারেন, তবে আপনার শেখার গতি হবে সাধারণের চেয়ে ১০ গুণ বেশি!

## Simple Explanation (সহজ ব্যাখ্যা)
পেশাদার ডেভেলপারদের কাছে এআই কেবল একটি 'কোড জেনারেটর' নয়। এটি মূলত একটি বহুমুখী টুল:
*   **শিক্ষক (Teacher)**: যেকোনো জটিল বিষয় (যেমন: অবজেক্ট বা এপিআই) খুব সহজ ভাষায় ডায়াগ্রাম দিয়ে বুঝিয়ে দিতে পারে।
*   **ডিবাগার (Debugger)**: আপনার কোডে কোনো এরর আসলে তার পেছনের কারণ ও ফিক্সিং গাইড দিতে পারে।
*   **মেন্টর (Mentor)**: আপনার লেখা কোডটি আরও কীভাবে অপ্টিমাইজ বা ভালো করা যায় তার আইডিয়া দেয়।
*   **প্র্যাকটিস পার্টনার**: আপনাকে কোডিং অনুশীলন করার জন্য নতুন নতুন কাস্টম চ্যালেঞ্জ দিতে পারে।`,
        en: `## Introduction
Artificial Intelligence has reshaped how developers write code. However, misusing AI as a beginner can permanently stunt your logical development.

## Simple Explanation
For modern programmers, AI functions as:
*   **Private Tutor**: Explains syntax structures with custom analogies.
*   **Debugging Assistant**: Breaks down console stack traces.
*   **Code Reviewer**: Recommends logic optimizations and refactoring pathways.`,
      },
    },
    {
      id: "wrong-vs-right-ai",
      title: {
        bn: "২. এআই এর ভুল ও সঠিক ব্যবহারের উদাহরণ (Wrong vs Right Way)",
        en: "2. Wrong vs Right Way",
      },
      content: {
        bn: `## The Wrong Way (ভুল ব্যবহারের ফাঁদ)
সবচেয়ে বড় ভুল হলো—কোনো সমস্যা পাওয়ার সাথে সাথে এআই কে বলা: "আমাকে সম্পূর্ণ কোডটি লিখে দাও।" 

এতে কী ক্ষতি হয়?
*   আপনার মস্তিষ্ক একটুও পরিশ্রম করে না।
*   আপনি সিনট্যাক্স বা লজিক কিছুই বুঝতে পারেন না।
*   সার্ভারে কোনো এরর আসলে এআই ছাড়া আপনি একা হয়ে যান এবং প্রজেক্ট চালাতে পারেন না।
*   প্যাসিভ কোডিংয়ের কারণে আপনার ক্যারিয়ারে কোনো গ্রোথ বা উন্নতি আসে না।

## The Right Way (সঠিক ও বৈজ্ঞানিক ব্যবহার)
এআই কে সরাসরি উত্তর না চেয়ে লজিক জিজ্ঞেস করুন। যেমন:
*   "আমি এই কোডটি লিখেছি কিন্তু কাজ করছে না। সমাধান সরাসরি না দিয়ে আমাকে ১টি ক্লু বা সংকেত দাও যাতে আমি নিজে কোডটি ঠিক করতে পারি।"
*   "লাইন ৫ এর কোডটি কীভাবে কাজ করছে তা আমাকে একদম শুরু থেকে সহজ বাংলা উদাহরণ দিয়ে ধাপে ধাপে বুঝিয়ে দাও।"
*   "এই লজিকের পেছনের মূল নীতিটি কী এবং কেন এটি সিএসএসে ব্যবহার করা হয়?"`,
        en: `## Wrong AI Habits
Asking for full code solutions. Blindly copy-pasting codes without reading line details halts cognitive muscle growth, leading to zero logical autonomy.

## Right AI Habits
Request hints instead of solutions. Ask AI to trace data flows or explain syntax constructs to improve your own problem-solving skills.`,
      },
    },
    {
      id: "prompt-engineering-asking",
      title: {
        bn: "৩. কীভাবে ভালো প্রশ্ন করবেন? (How to Ask Good Questions)",
        en: "3. How to Ask Good Questions",
      },
      content: {
        bn: `## Prompt Engineering: Asking Better Questions (প্রম্পট সাজানোর কৌশল)
এআই কে ভালো প্রশ্ন করার ওপরেই আপনার উত্তরের মান নির্ভর করে।

*   **খারাপ প্রম্পট (Bad Prompt)**: 
    *"একটি লগইন পেজ বানাও।"* (এআই আপনাকে ৫০০ লাইনের একটি জটিল কোড দিয়ে দেবে যা দেখে আপনি কেবল বিভ্রান্ত হবেন)।
*   **ভালো প্রম্পট (Good Prompt)**: 
    *"আমি জাভাস্ক্রিপ্ট দিয়ে একটি সাধারণ লগইন ফর্মের ইনপুট ভ্যালিডেশন লজিক শিখতে চাই। কোনো জটিল কোড ছাড়া আমাকে খুব সহজ ভাষায় ধাপে ধাপে লজিকটি বুঝিয়ে বলো।"*

---
## The 4-Step Prompt Template (আদর্শ প্রম্পট ফরম্যাট)
যেকোনো নতুন বিষয় শেখার সময় নিচের টেমপ্লেটটি কপি করে এআই-তে পেস্ট করুন:
\`\`\`text
১. এই বিষয়টি আমাকে খুব সহজ বাংলায় ধাপে ধাপে বুঝিয়ে বলো।
২. একটি বাস্তব জীবনের বাস্তবসম্মত উদাহরণ বা অ্যানালজি দাও।
৩. একটি ছোট কোড উদাহরণ দেখাও।
৪. কোডটির লাইন বাই লাইন ব্যাখ্যা দাও।
\`\`\``,
        en: `## Prompt Engineering
The quality of AI answers correlates directly to the specificity of your queries.

## Good Prompt Template:
"1. Explain this concept in simple steps.
2. Give a real-world cooking or driving analogy.
3. Provide a minimal code snippet.
4. Explain the code line-by-line."`,
      },
    },
    {
      id: "ai-debugging-workflow",
      title: {
        bn: "৪. এআই ডিবাগিং ওয়ার্কফ্লো (AI Debugging Workflow)",
        en: "4. AI Debugging Workflow",
      },
      content: {
        bn: `## AI Debugging Workflow (এআই ডিবাগিং ওয়ার্কফ্লো)
আপনার কোডে লাল রঙের এরর আসলে ঘাবড়ে না গিয়ে নিচের ওয়ার্কফ্লোটি মেনে চলুন:

১. **এরর কপি করুন**: ব্রাউজার কনসোল বা কোড এডিটরে আসা এরর মেসেজটি পুরো কপি করুন।
২. **এআই কে লজিক জিজ্ঞেস করুন**: এআই-তে এরর পেস্ট করে বলুন:
   *"আমার কোডে এই এররটি এসেছে। এর মানে কী এবং কেন এই এররটি তৈরি হতে পারে তা সহজ ভাষায় বুঝিয়ে বলো।"*
৩. **ধাপগুলো অনুসরণ করুন**: এআই যে কারণ ও ফিক্সিং গাইড দেবে, তা দেখে নিজে নিজে কোড ফাইলের লাইনে গিয়ে পরিবর্তন করুন।
৪. **টেস্ট করুন**: কোড সেভ করে আবার রান করুন।

**বাস্তব উদাহরণ (React Event Error):**
ধরুন, বাটনে ক্লিক করলে কিছু হচ্ছে না।
*   **ভুল এআই প্রশ্ন**: "বাটন কাজ করছে না, কোড ঠিক করো।"
*   **সঠিক এআই প্রশ্ন**: "আমি একটি বাটন অ্যাড করেছি কিন্তু ক্লিক করলে ইভেন্ট ফায়ার হচ্ছে না। এর সম্ভাব্য কারণ কী কী হতে পারে এবং আমি কীভাবে কনসোল লগ দিয়ে এটি ট্র্যাক করতে পারি?"
*   **এআই ক্লু**: "আপনার বাটনে onClick ফাংশনটির বানান এবং স্টেট আপডেট হচ্ছে কিনা তা চেক করুন।"
*   **ফলাফল**: আপনি নিজে কোডের বানান ঠিক করলেন এবং ডিবাগিং শিখে গেলেন!`,
        en: `## AI Debugging Flow
1. Copy the exact exception message.
2. Ask AI: 'Explain the root cause of this error message and list potential triggers.'
3. Review your code files, tracking down the exact line indices.
4. Apply the fix manually and compile again.`,
      },
      codeBlock: {
        fileName: "prompt_test.js",
        language: "javascript",
        code: `// এআই প্রম্পটিং লজিক সিমুলেটর
function evaluatePrompt(promptText) {
  if (promptText.includes("সম্পূর্ণ কোড লিখে দাও") || promptText.includes("write full code")) {
    return {
      type: "BAD",
      result: "❌ এআই সম্পূর্ণ কোড দিয়ে দিয়েছে। ব্রেন অলস রয়েছে। লার্নিং ০%!"
    };
  }
  
  if (promptText.includes("ধাপগুলো বুঝিয়ে বলো") || promptText.includes("explain step by step")) {
    return {
      type: "GOOD",
      result: "✅ এআই লজিক ও ডায়াগ্রাম দিয়েছে। আপনি নিজেই কোডটি লিখতে পেরেছেন। লার্নিং ১০০%!"
    };
  }
  
  return { type: "NEUTRAL", result: "💡 সাধারণ প্রম্পট।" };
}

console.log(evaluatePrompt("লগইন পেজের সম্পূর্ণ কোড লিখে দাও"));
console.log(evaluatePrompt("লগইন পেজ তৈরির ধাপগুলো বুঝিয়ে বলো"));`,
        explanations: [
          {
            line: 3,
            text: {
              bn: "যদি ব্যবহারকারী সরাসরি কোড চান, তবে তা লার্নিং প্রগ্রেস নষ্ট করে।",
              en: "Requesting full code blocks leads to passive copying.",
            },
          },
          {
            line: 10,
            text: {
              bn: "যদি ব্যবহারকারী লজিক ও এক্সপ্লেনেশন চান, তবে তা লার্নিং প্রগ্রেস বৃদ্ধি করে।",
              en: "Requesting logic and design explanations promotes active learning.",
            },
          },
        ],
      },
    },
    {
      id: "ai-limitations-mindset",
      title: {
        bn: "৫. এআই এর সীমাবদ্ধতা ও প্রফেশনাল টিপস (AI Limitations & Pro Tips)",
        en: "5. AI Limitations & Pro Tips",
      },
      content: {
        bn: `## AI Limitations (এআই এর সীমাবদ্ধতা)
মনে রাখবেন, এআই কিন্তু মানুষ নয়।
*   **ভুল করতে পারে (Hallucination)**: এআই অনেক সময় আত্মবিশ্বাসের সাথে ভুল কোড দিতে পারে। তাই অন্ধভাবে তার কথা বিশ্বাস করবেন না।
*   **প্রজেক্টের পুরো কনটেক্সট জানে না**: এআই আপনার পুরো ফাইলের রিলেশনশিপ অনেক সময় বুঝতে পারে না।
*   **ভেরিফাই করুন**: এআই থেকে পাওয়া যেকোনো লজিক সর্বদা অফিসিয়াল ডকুমেন্টেশন (যেমন MDN) দেখে ভেরিফাই করার অভ্যাস গড়ে তুলুন।

## Professional AI Usage (প্রফেশনালরা যেভাবে ব্যবহার করেন)
১. **লার্নিং গাইড**: নতুন কোনো টপিক পড়ার আগে এআই কে বলুন তার রোডম্যাপ সাজাতে।
২. **কোড রিভিউ**: আপনার লেখা কোড এআই কে দিয়ে বলুন: *"এই কোডটি কি আরও সহজ এবং ফাস্ট করার কোনো উপায় আছে?"*
৩. **ধারণা গভীর করা**: জটিল অ্যালগরিদম বোঝার জন্য এআই কে পার্সোনাল টিউটর হিসেবে ব্যবহার করা।`,
        en: `## AI Hallucinations
AI models can present incorrect logic configurations confidently. Always verify codes using official manuals.

## Professional Workflows
*   Ask AI to review your working code and recommend performance upgrades.
*   Consult AI to explain legacy code setups or design patterns.`,
      },
    },
    {
      id: "practice-ai-mentor",
      title: {
        bn: "৬. বাস্তব প্র্যাকটিস ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Practice Tasks (বাস্তব অনুশীলন)
নিচের প্র্যাকটিস সেকশনে দেওয়া কাজগুলো নিজে চিন্তা করে সমাধান করার চেষ্টা করুন। আপনার এআই লার্নিং গোল ও প্রম্পটিং দক্ষতা পরীক্ষা করুন।`,
        en: `## Reflection & Practice Tasks
Test your prompt engineering skills and define your daily AI workflow template.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "এআই বর্তমানের সেরা প্রডাক্টিভিটি বুস্টার। আপনি যদি সঠিক প্রশ্ন করা না শিখেন, তবে আপনি এআই যুগের সুবিধাগুলো পুরোপুরি নিতে পারবেন না।",
          en: "AI is the ultimate developer assistant. Formulating queries correctly determines your velocity in software engineering.",
        },
        whyWorks: {
          bn: "প্রম্পটে সুনির্দিষ্ট কনটেক্সট দিলে লার্জ ল্যাঙ্গুয়েজ মডেল সবচেয়ে নির্ভুল এবং প্রাসঙ্গিক উত্তর প্রদান করতে পারে।",
          en: "Contextual boundaries inside prompts allow LLMs to narrow down syntax constraints, yielding cleaner answers.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা এআই কে ব্যবহার করেন একজন অ্যাসিস্ট্যান্ট হিসেবে, ড্রাইভার হিসেবে নয়। ড্রাইভিং সীট বা কন্ট্রোল সবসময় মানুষের হাতেই থাকে।",
          en: "Seniors treat AI as an assistant, never as the driver. Maintain absolute control over your code base.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় ভুল হলো কোডে এরর আসার সাথে সাথে না পড়ে চোখ বন্ধ করে এআই কে দেওয়া। আগে নিজে এরর পড়ার চেষ্টা করুন, তারপর এআই-এর সাহায্য নিন।",
          en: "Pasting errors immediately to AI without reading them halts your debug intuition. Inspect logs yourself first.",
        },
        debugging: {
          bn: "এরর মেসেজের পাশাপাশি এররের আশেপাশের ৪-৫ লাইনের কোডও এআই কে দেওয়া উচিত যাতে সে সঠিক রিলেশন বুঝতে পারে।",
          en: "When querying AI for debugging, provide the error details along with the adjacent lines of code for scope context.",
        },
        performance: {
          bn: "এআই প্রম্পট ছোট না লিখে বিস্তারিত লিখুন। এতে নির্ভুল সমাধান পাওয়ার সম্ভাবনা অনেক বেড়ে যায়।",
          en: "Elaborate your prompt conditions. Precise details prevent generic and irrelevant code generations.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "ai-q1",
      question: {
        bn: "ডেভেলপারদের জন্য এআই (AI) ব্যবহারের প্রধান উদ্দেশ্য কী হওয়া উচিত?",
        en: "What should be the primary purpose of using AI for a developer?",
      },
      options: [
        { bn: "সরাসরি কোড কপি পেস্ট করে প্রজেক্ট নামানো", en: "Copy-paste code directly to ship projects faster" },
        { bn: "পার্সোনাল টিউটর ও ডিবাগিং অ্যাসিস্ট্যান্ট হিসেবে লজিক বুঝে শেখা", en: "Use it as a tutor and debug assistant to learn logic details" },
        { bn: "কোড করা সম্পূর্ণ বন্ধ করে দেওয়া", en: "Stop writing code entirely" },
        { bn: "এআই এর তথ্য যাচাই না করে অন্ধের মতো বিশ্বাস করা", en: "Believe all AI codes without any manual verification" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এআই আপনার লার্নিং পার্টনার ও টিউটর। এটি দিয়ে কনসেপ্ট বুঝে শিখলে আপনার প্রবলেম সলভিং স্কিল বহুগুণ বৃদ্ধি পায়।",
        en: "AI accelerates learning when treated as a reasoning engine, guiding syntax comprehension and debug steps.",
      },
    },
    {
      id: "ai-q2",
      question: {
        bn: "কোনটি এআই (AI) এর সম্পূর্ণ ভুল এবং ক্ষতিকর ব্যবহারের উদাহরণ?",
        en: "Which of the following is a harmful AI habit?",
      },
      options: [
        { bn: "এররের পেছনের কারণ সহজ বাংলায় জিজ্ঞেস করা", en: "Asking for error explanations in simple terms" },
        { bn: "না বুঝে সরাসরি এআই এর জেনারেট করা সম্পূর্ণ কোড কপি-পেস্ট করা", en: "Blindly copy-pasting full code blocks without understanding them" },
        { bn: "কোড রিভিউর জন্য পরামর্শ চাওয়া", en: "Asking for code reviews and tips" },
        { bn: "ছোট কোড উদাহরণ চাওয়া", en: "Asking for small code examples" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "না বুঝে কোড কপি করলে মস্তিষ্ক অলস থাকে এবং পরবর্তীতে সামান্য এরর আসলেও নিজে নিজে ফিক্স করা সম্ভব হয় না।",
        en: "Blind copying leads to lack of code autonomy and prevents developers from learning how to build features.",
      },
    },
    {
      id: "ai-q3",
      question: {
        bn: "এআই এর সাহায্যে ডিবাগিং করার সিস্টেম্যাটিক ওয়ার্কফ্লো এর প্রথম ধাপ কোনটি?",
        en: "What is the first step in the systematic AI debugging workflow?",
      },
      options: [
        { bn: "পুরো কোড ডিলিট করা", en: "Delete the entire file content" },
        { bn: "এরর মেসেজটি পুরো কপি করে তার মানে ও সম্ভাব্য কারণ এআই কে জিজ্ঞেস করা", en: "Copy the error message and ask AI for its meaning and potential triggers" },
        { bn: "এআই কে সম্পূর্ণ প্রজেক্ট আবার লিখতে বলা", en: "Tell AI to rewrite the entire project" },
        { bn: "কোড রিফ্রেশ করতে থাকা", en: "Keep refreshing the page continuously" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "প্রথমে এরর মেসেজটি কপি করে এআই কে এর লজিক্যাল কারণ জিজ্ঞেস করা হলো প্রফেশনাল ডিবাগিংয়ের সঠিক প্রথম ধাপ।",
        en: "Copying the exact console exception details allows AI to diagnose the type and source of error accurately.",
      },
    },
    {
      id: "ai-q4",
      question: {
        bn: "প্রম্পট ডিজাইনে ভালো ও নির্দিষ্ট প্রম্পট (Good Prompt) কোনটি?",
        en: "Which is a good, specific prompt example?",
      },
      options: [
        { bn: "'একটি ওয়েবসাইট বানাও'", en: "'Make a website'" },
        { bn: "'জাভাস্ক্রিপ্ট array map এর প্যারামিটারগুলো সহজ বাংলায় ডায়াগ্রামসহ বুঝিয়ে বলো'", en: "'Explain JavaScript array map parameters in simple terms with diagrams'" },
        { bn: "'কোড ঠিক করো'", en: "'Fix code'" },
        { bn: "'জাভাস্ক্রিপ্ট কী?'", en: "'What is JavaScript?'" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এই প্রম্পটটি নির্দিষ্ট কি-ওয়ার্ড এবং আউটপুট ফরম্যাট উল্লেখ করেছে, ফলে এআই অত্যন্ত নির্ভুল ও শিক্ষণীয় উত্তর দেবে।",
        en: "Specific queries targeting logic blocks return highly educational structures.",
      },
    },
    {
      id: "ai-q5",
      question: {
        bn: "এআই এর সীমাবদ্ধতা বা হ্যালুসিনেশন (Hallucination) বলতে কী বোঝায়?",
        en: "What does AI Hallucination mean?",
      },
      options: [
        { bn: "এআই এর অত্যন্ত দ্রুত উত্তর দেওয়ার ক্ষমতা", en: "AI's ability to respond extremely fast" },
        { bn: "এআই কর্তৃক আত্মবিশ্বাসের সাথে সম্পূর্ণ ভুল তথ্য বা কোড প্রদান করা", en: "AI confidently presenting false information or broken code as correct" },
        { bn: "এআই সার্ভার ডাউন হওয়া", en: "AI server shutting down" },
        { bn: "এআই মানুষের মতো গান গাওয়া", en: "AI singing like a human" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এআই অনেক সময় কাল্পনিক ভুল কোড বা তথ্য দিতে পারে। তাই সিনিয়ররা সর্বদা অফিসিয়াল ডকুমেন্টেশন দেখে তথ্য ভেরিফাই করেন।",
        en: "Hallucination is when AI invents false syntaxes. Always verify libraries with official manuals.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার প্রথম প্রজেক্টের জন্য ৩টি ভালো প্রম্পটের খসড়া তৈরি করুন (যেমন: ডোমেন, টেমপ্লেট ও কোড ব্যাখ্যা)।",
      en: "Draft 3 good prompts you would use to learn about HTML semantic tags.",
    },
    {
      bn: "এআই-কে দিয়ে একটি এরর মেসেজ (যেমন: TypeError: Cannot read property of undefined) ডিকোড করানোর জন্য একটি কাস্টম প্রম্পট লিখুন।",
      en: "Write a prompt to query AI about a specific console error log.",
    },
    {
      bn: "আপনি কাজ করার সময় এআই-এর ওপর পরনির্ভরশীলতা এড়াতে কী কী নিয়ম অনুসরণ করবেন? ৩টি বাক্যে লিখুন।",
      en: "List 3 rules you will apply to prevent becoming over-dependent on AI.",
    },
  ],
  assignment: {
    title: {
      bn: "আপনার এআই লার্নিং ওয়ার্কফ্লো এবং প্রম্পটিং ডায়েরি",
      en: "Your AI Study Workflow & Prompting Diary Setup",
    },
    description: {
      bn: "নিচের প্রম্পট ডায়েরি অবজেক্টটিতে ৩টি ভালো প্রম্পট এবং ৩টি খারাপ প্রম্পটের তুলনা লিখে আপনার এআই ব্যবহারের সঠিক পরিকল্পনাটি তৈরি করুন।",
      en: "Complete the prompting diary object below, defining comparison examples of good vs. bad prompts and your study strategy.",
    },
    starterCode: `// Prompting Diary Configuration Schema
const aiWorkflowPlan = {
  studentName: "Your Name",
  threeBadPrompts: [
    // ৩টি খারাপ প্রম্পটের তালিকা লিখুন
  ],
  threeGoodPrompts: [
    // ৩টি ভালো প্রম্পটের তালিকা লিখুন
  ],
  iAgreeToAlwaysVerifyWithDocs: false
};`,
    solution: {
      code: `// Completed AI Workflow Plan
const aiWorkflowPlan = {
  studentName: "আরিফ শাহরিয়ার",
  threeBadPrompts: [
    "ক্যালকুলেটর কোড দাও",
    "কনসোল এরর সলভ করে দাও",
    "এইচটিএমএল ফাইল লিখে দাও"
  ],
  threeGoodPrompts: [
    "জাভাস্ক্রিপ্ট ফাংশনে কীভাবে প্যারামিটার কাজ করে সহজ বাংলায় উদাহরণসহ বুঝাও",
    "TypeError: Cannot read property of null এররটির ৩টি সাধারণ কারণ কী কী হতে পারে?",
    "এইচটিএমএল সেকশন ট্যাগ এবং ডিভ ট্যাগের মূল পার্থক্য কী?"
  ],
  iAgreeToAlwaysVerifyWithDocs: true
};`,
      explanation: {
        bn: "দারুণ! আপনি প্রম্পট ইঞ্জিনিয়ারিংয়ের মূল পার্থক্যটি ধরেছেন। এভাবে গুছিয়ে প্রশ্ন করলে এআই আপনাকে দক্ষ ডেভেলপার হতে সবচেয়ে বেশি সাহায্য করবে।",
        en: "Defining prompting templates represents how systems map user inputs and query filters.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "কোডিংয়ের ক্ষেত্রে এআই (AI) ব্যবহারের সুবিধা ও প্রধান ঝুঁকিগুলো কী কী?",
        en: "What are the benefits and primary risks of using AI in software development?",
      },
      answer: {
        bn: "সুবিধা হলো—এআই এররের দ্রুত ব্যাখ্যা দেয়, কোড রিভিউ করতে পারে এবং প্রডাক্টিভিটি অনেক বাড়িয়ে দেয়। প্রধান ঝুঁকি হলো—নতুন ডেভেলপাররা না বুঝে কোড কপি করে পরনির্ভরশীল হয়ে পড়েন, যার ফলে তাদের নিজস্ব চিন্তা বা সমস্যা সমাধানের ক্ষমতা নষ্ট হয়ে যায়। এছাড়া এআই এর জেনারেট করা কোডে হ্যালুসিলেশন বা সিকিউরিটি বাগ থাকতে পারে যা যাচাই না করলে বড় ধরণের ক্ষতি হতে পারে।",
        en: "Benefits: Quick error diagnostics, fast boilerplate code, and active reviews. Risks: Over-dependence causing logical decay, security vulnerabilities, and hallucinations containing invalid library methods.",
      },
    },
    {
      question: {
        bn: "এআই জেনারেটেড কোড ব্যবহারের আগে একজন প্রফেশনাল ডেভেলপারের দায়িত্বগুলো কী কী?",
        en: "What are a professional's duties before shipping AI-generated code?",
      },
      answer: {
        bn: "১. কোডের প্রতিটি লাইনের কাজ এবং উদ্দেশ্য শতভাগ বুঝতে হবে।\n২. কোডটি কোম্পানির সিকিউরিটি গাইডলাইন এবং নিয়ম অনুসরণ করছে কিনা তা দেখতে হবে।\n৩. অফিশিয়াল ডকুমেন্টেশন রিড করে সিনট্যাক্সটি সঠিক ও আপ-টু-ডেট কিনা তা ভেরিফাই করতে হবে।\n৪. কোডটিতে কোনো হিডেন এরর বা পারফরম্যান্স লিক আছে কিনা তা ম্যানুয়ালি টেস্ট করতে হবে।",
        en: "1. Ensure complete line-by-line code comprehension.\n2. Confirm security directives and corporate code guidelines.\n3. Cross-reference the code with official API documentation specifications.\n4. Perform manual unit tests to identify logical loopholes or memory leaks.",
      },
    },
  ],
};
