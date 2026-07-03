import { Chapter } from "@/types";

export const chapter9Content: Chapter = {
  id: "chapter-9",
  number: 9,
  title: {
    bn: "অধ্যায় ৯: ফাইল সিস্টেম — ফোল্ডার, ফাইল ও ডিরেক্টরি কাঠামো",
    en: "Chapter 9: File System (Folders, Files & Structure)",
  },
  description: {
    bn: "কম্পিউটার কীভাবে তথ্য সাজায়, ডিরেক্টরি ট্রি কী এবং কোডিংয়ে অ্যাবসোলিউট ও রিলেটিভ পাথের নিখুঁত ব্যবহার।",
    en: "Understand directory trees, root hubs, file paths, absolute vs. relative referencing, module import strategies, and standard project layouts.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "ফাইল এবং ফোল্ডারের গঠন ও কাজের তফাৎ পরিষ্কারভাবে চেনা।",
      en: "Differentiate between physical file data and organizing directory folders.",
    },
    {
      bn: "ডিরেক্টরি কাঠামো বা ট্রি স্ট্রাকচার (Root, Sub, Nested) ভিজ্যুয়ালাইজ করতে পারা।",
      en: "Visualize structural directory tree hierarchies (Root, Sub-folders, Nested directories).",
    },
    {
      bn: "কোডিং প্রজেক্টে অ্যাবসোলিউট পাথ এবং রিলেটিভ পাথের পার্থক্য জানা ও ব্যবহার করা।",
      en: "Master absolute and relative paths inside programming references.",
    },
    {
      bn: "প্রফেশনাল ডেভেলপাররা কীভাবে প্রজেক্ট ফাইল অর্গানাইজ করেন তার বাস্তব রূপরেখা পাওয়া।",
      en: "Adopt industrial directory conventions to structure clean frontend and backend apps.",
    },
  ],
  sections: [
    {
      id: "what-is-file-system",
      title: {
        bn: "১. ফাইল সিস্টেম কী ও কেন প্রয়োজন? (What is File System & Structure)",
        en: "1. What is File System & Structure",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
যখন আপনি উইন্ডোজ বা লিনাক্সে কোনো ফাইল সেভ করেন, তখন কম্পিউটারের প্রসেসর সেই ফাইলটিকে হার্ডডিস্কের লক্ষ লক্ষ মেমরি ব্লকের মধ্যে একটি নির্দিষ্ট অবস্থানে রাখে। কিন্তু আপনি যখন ফোল্ডার ওপেন করেন, আপনি দেখতে পান সবকিছু খুব সুন্দরভাবে গোছানো আছে। স্ক্রিনের পেছনে এই গোছানোর কাজটি যে প্রোগ্রাম করে—তার নাম হলো **ফাইল সিস্টেম (File System)**।

## Why should I learn this? (কেন শিখবো?)
প্রোগ্রামিংয়ের শুরুতে কোডারদের সবচেয়ে বেশি এররের সম্মুখীন হতে হয় পাথ এরর (Path Errors) বা ফাইল খুঁজে না পাওয়ার এররের কারণে। ইমপোর্ট-এক্সপোর্ট বা ওয়েবসাইট ইমেজ লিঙ্ক করার জন্য ফাইল পাথ বোঝা অত্যন্ত জরুরি।

## What is a File System? (ফাইল সিস্টেম কী?)
সহজ কথায়: **ফাইল সিস্টেম হলো ওএসের একটি বিশেষ সিস্টেম যা হার্ডডিস্কে তথ্য সংরক্ষণ করার পদ্ধতি, তথ্যের নাম দেওয়া এবং ফাইল খোঁজার পুরো কাঠামো নিয়ন্ত্রণ করে।**

ফাইল সিস্টেম ছাড়া হার্ডডিস্কে সংরক্ষিত কোটি কোটি বাইট ডাটা জগাখিচুড়ি হয়ে থাকত। ওএস বুঝতে পারত না কোন গানটি কোথায় শুরু হয়েছে এবং কোথায় শেষ হয়েছে!`,
        en: `## Introduction
Data bits written to disk drives must be indexed. The operating system uses file systems to translate physical sectors into files and directories.

## What is a File System?
A method used by operating systems to name, organize, store, and retrieve files from storage media (e.g., NTFS, ext4). Without it, storage is just a raw stream of unindexed bytes.`,
      },
    },
    {
      id: "directory-tree-folders",
      title: {
        bn: "২. ফোল্ডার বনাম ফাইল ও ডিরেক্টরি ট্রি (Files vs Folders & Directory Tree)",
        en: "2. Files vs Folders & Directory Tree",
      },
      content: {
        bn: `## Files vs Folders (বই বনাম বুকশেলফ)
*   **ফাইল (Files)**: ফাইলের মধ্যে আসল তথ্য বা ডাটা (ডাটা টাইপ অনুযায়ী যেমন টেক্সট, ইমেজ বা কোড) থাকে। ফাইলই হলো কম্পিউটারের তথ্যের ক্ষুদ্রতম রূপ।
*   **ফোল্ডার/ডিরেক্টরি (Folders/Directories)**: ফোল্ডারে কোনো আসল ফাইল ডাটা থাকে না। এর কাজ হলো ফাইলগুলোকে সাজিয়ে রাখা।
*   **রূপক**: ফাইল হলো লাইব্রেরির একেকটি বই, আর ফোল্ডার হলো সেই বইগুলো সাজিয়ে রাখার বুকশেলফ।

---
## The Directory Tree Structure (গাছের শিকড়ের মতো কাঠামো)
কম্পিউটার ডিরেক্টরিগুলো একটি উল্টো গাছের শিকড়ের মতো সাজানো থাকে, একে **ডিরেক্টরি ট্রি (Directory Tree)** বলা হয়:

১. **রুট ফোল্ডার (Root Folder)**: সবার ওপরে থাকা ফোল্ডার, যার নিচ থেকে সমস্ত ফোল্ডারের জন্ম হয়। (Windows-এ রুট হলো \`C:\\\` বা \`D:\\\`, Linux-এ রুট হলো \`/\`)।
২. **সাব-ফোল্ডার (Sub-folders)**: রুট ফোল্ডারের ভেতরে থাকা ফোল্ডার।
３. **নেস্টেড ফোল্ডার (Nested Folders)**: ফোল্ডারের ভেতরের ফোল্ডার।

**বাস্তব কোডিং প্রজেক্টের ডিরেক্টরি ট্রি:**
\`\`\`text
my-project/ (Root)
  ├── src/ (Sub-folder)
  │    ├── components/ (Nested Folder)
  │    └── pages/
  ├── public/ (Sub-folder)
  └── package.json (File)
\`\`\``,
        en: `## Files vs. Folders
*   **Files**: Store binary payload data (images, text, compiled binaries).
*   **Folders (Directories)**: Conceptual containers grouping related files.

## The Tree Directory Structure
Folders organize hierarchically from a single starting node called the **Root**:
*   Windows Root: \`C:\\\` or \`D:\\\`
*   UNIX/Linux Root: \`/\`
*   Sub-directories and nested paths branch outwards from the root block.`,
      },
    },
    {
      id: "path-absolute-relative",
      title: {
        bn: "৩. পাথ কী? অ্যাবসোলিউট বনাম রিলেটিভ পাথ (Path: Absolute vs Relative)",
        en: "3. Path: Absolute vs Relative",
      },
      content: {
        bn: `## What is a File Path? (ফাইল পাথ কী?)
**ফাইল পাথ (File Path)** হলো কম্পিউটারের ফাইল সিস্টেমে একটি নির্দিষ্ট ফাইল বা ফোল্ডারের ঠিকানা (Address)।

যেমন: \`/home/user/project/index.html\`

পাথ মূলত দুই প্রকার:
১. **অ্যাবসোলিউট পাথ (Absolute Path)**: কম্পিউটারের রুট ফোল্ডার (একেবারে গোড়া) থেকে শুরু করে ফাইলের শেষ অবস্থান পর্যন্ত পূর্ণ ঠিকানা।
   *   **উদাহরণ**: \`C:\\Users\\Name\\Desktop\\project\\images\\logo.png\`
   *   **রূপক**: গ্লোবাল জিপিএস কো-অর্ডিনেট (যেটি পৃথিবীর যেকোনো প্রান্ত থেকে খুঁজলে একই অবস্থান দেখাবে)।
২. **রিলেটিভ পাথ (Relative Path)**: আপনি বর্তমানে যে ফোল্ডারে আছেন (Current Directory), সেখান থেকে লক্ষ্য ফাইলের আপেক্ষিক ঠিকানা।
   *   **উদাহরণ**: \`../images/logo.png\` (\`..\` এর অর্থ হলো এক ধাপ ওপরে বা পেছনে যাওয়া)।
   *   **রূপক**: কাউকে নিজের অবস্থান থেকে রাস্তা চেনানো: *"সামনের চায়ের দোকান থেকে বামে যান।"* (এটি কেবল আপনার বর্তমান অবস্থানের জন্যই কাজ করবে)।

---
## Relative Path Cheat Sheet (রিলেটিভ পাথের ডিরেক্টরি কোড)
*   \`.\` (একক ডট): বর্তমান ডিরেক্টরি।
*   \`..\` (ডাবল ডট): এক ধাপ ওপরে বা প্যারেন্ট ডিরেক্টরি।
*   \`/\` (স্ল্যাশ): ফোল্ডারের ভেতরে ঢোকা।`,
        en: `## What is a File Path?
The textual address of a file or folder within the file system hierarchy.

## Absolute vs. Relative Paths
*   **Absolute Path**: Starts from the system root node. E.g., \`C:\\Workspace\\project\\index.html\` (global GPS coordinate).
*   **Relative Path**: Maps paths starting from the current active directory. E.g., \`../assets/logo.png\` (directions starting from where you stand).
    *   \`. / \`: Search current scope directory.
    *   \`.. / \`: Move up one level into the parent directory.`,
      },
    },
    {
      id: "why-matters-programming",
      title: {
        bn: "৪. প্রোগ্রামিংয়ে ফাইল সিস্টেমের গুরুত্ব (Why it Matters in Coding)",
        en: "4. Why it Matters in Coding",
      },
      content: {
        bn: `## Why it Matters in Programming (কোডিংয়ে এর কাজ কী?)
ডেভেলপার হিসেবে আমরা সারাদিন ফাইল সিস্টেম নিয়েই কাজ করি:
১. **মডিউল ইমপোর্ট (Module Imports)**: এক কোড ফাইল থেকে অন্য কোড ফাইলে ফাংশন নিয়ে আসার জন্য রিলেটিভ পাথ (যেমন: \`import Button from "./components/Button"\`) ব্যবহার করা হয়।
২. **অ্যাসেট ম্যানেজমেন্ট (Assets)**: ওয়েবসাইটে লোগো, ইমেজ বা ফন্ট লিংক করতে পাথের সঠিক ধারণা প্রয়োজন।
৩. **ব্যাকএন্ড ও এপিআই (Backend I/O)**: ব্যাকএন্ড প্রজেক্টে ফাইল তৈরি করা, ডেটা রিড করা এবং ছবি আপলোড করার কোড লেখার সময় ফাইল সিস্টেমের এপিআই ব্যবহার করা হয়।
৪. **ডেপ্লয়মেন্ট (Deployment)**: কোড সার্ভারে আপলোড করার সময় ফোল্ডার স্ট্রাকচার ঠিক না থাকলে প্রজেক্ট লাইভ বা রান হবে না।`,
        en: `## Developer Workflows
*   **Module Imports**: Referencing helper codes across directories (e.g., \`import Card from "../ui/Card"\`).
*   **Asset Linkage**: Referencing media (logos, font files) correctly.
*   **File I/O**: Server applications reading and writing database text configurations or uploading user files.`,
      },
    },
    {
      id: "project-structure-analogy",
      title: {
        bn: "৫. প্রজেক্ট কাঠামো ও লাইব্রেরি অ্যানালজি (Project Structure & Library Analogy)",
        en: "5. Project Structure & Library Analogy",
      },
      content: {
        bn: `## Real World Project Layout (প্রফেশনাল ফোল্ডার স্ট্রাকচার)
পেশাদার প্রজেক্টে কোড এলোমেলো না রেখে নিচের স্ট্যান্ডার্ড মডেলে সাজানো হয়:

\`\`\`text
my-web-app/
  ├── assets/          # ছবি, লোগো ও ফন্ট ফাইল
  ├── config/          # ডেটাবেজ ও এপিআই কানেকশন সেটিংস
  ├── frontend/        # রিঅ্যাক্ট বা এইচটিএমএল ভিজ্যুয়াল কোড
  ├── backend/         # এক্সপ্রেস বা নোড জেএস সার্ভার কোড
  └── README.md        # প্রজেক্টের ডকুমেন্টেশন ফাইল
\`\`\`

এই মডিউলার আর্কিটেকচার কাজের গতি বাড়ায় এবং বাগকে আলাদা রাখতে সাহায্য করে।

---
## The Complete Library Analogy (লাইব্রেরি রূপক)
কম্পিউটার ফাইল সিস্টেমকে একটি বিশাল পাবলিক লাইব্রেরির সাথে মিলিয়ে নিন:
*   **লাইব্রেরি ভবন (Library)**: হার্ডডিস্ক / স্টোরেজ স্পেস।
*   **বই বুকশেলফ ইনডেক্স (Index card)**: ফাইল সিস্টেম (File System)।
*   **বইয়ের সেলফ বা কাঠের আলমারি**: ফোল্ডার বা ডিরেক্টরি (Directories)।
*   **আলমারির ভেতরের তাক (Shelves)**: সাব-ফোল্ডার (Sub-folders)।
*   **আসল বই (Physical Book)**: ফাইল (Files - যেখানে মূল লেখা বা ডাটা থাকে)।
*   **বইয়ের ক্যাটালগ নম্বর (Shelf B, Row 4)**: ফাইল পাথ (File Path - বইয়ের সঠিক ঠিকানা)।`,
        en: `## Standard Project Layout
Avoid chaotic file piles. Standardize directory setups so other programmers can easily locate components.

## The Library Metaphor
*   **Library Building**: The storage drive hardware.
*   **Index Card Catalog**: The File System.
*   **Book Shelves**: Directories/Folders.
*   **Specific Shelf Slots**: Sub-folders.
*   **Physical Books**: Files (contain the data).
*   **Shelf Code (Aisle 3, Shelf B, Book 12)**: File Path.`,
      },
      codeBlock: {
        fileName: "file_path_eval.js",
        language: "javascript",
        code: `// রিলেটিভ পাথ রিজলভারের লজিক্যাল মডেল
const projectRoot = "/desktop/my-project";
let currentDirectory = "/desktop/my-project/src/components";

function resolveRelativePath(targetRelative) {
  console.log(\`📂 বর্তমান ফোল্ডার: \${currentDirectory}\`);
  console.log(\`🔍 টার্গেট রিলেটিভ লিঙ্ক: \${targetRelative}\`);
  
  if (targetRelative.startsWith("../")) {
    // এক ধাপ ওপরে প্যারেন্ট ডিরেক্টরিতে যাওয়া
    const parts = currentDirectory.split("/");
    parts.pop(); // 'components' রিমুভ করা
    const parentDir = parts.join("/");
    const resolved = parentDir + targetRelative.replace("..", "");
    console.log(\`✅ রিজলভ করা ফাইল পাথ: \${resolved}\`);
    return resolved;
  }
  
  return currentDirectory + "/" + targetRelative;
}

resolveRelativePath("../assets/logo.png");`,
        explanations: [
          {
            line: 9,
            text: {
              bn: "যদি রিলেটিভ লিঙ্ক '..' দিয়ে শুরু হয়, তবে কার্নেল এক ধাপ ওপরেcomponents ফোল্ডারের বাইরে চলে যায়।",
              en: "Popping components folder from array path to navigate into parent directory.",
            },
          },
          {
            line: 12,
            text: {
              bn: "প্যারেন্ট ডিরেক্টরির সাথে রিলেটিভ ফাইল লিঙ্ক মার্জ করে অ্যাবসোলিউট পাথে রূপান্তর করা।",
              en: "Merging parent directory path string with child offset file path.",
            },
          },
        ],
      },
    },
    {
      id: "practice-fs-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার ফাইল পাথের ধারণা এবং ডিরেক্টরি নেভিগেশন সহজ করবে।`,
        en: `## Reflection Tasks
Confirm your path navigation logic before coding client import blocks in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "সফটওয়্যারে কোডের ফাইল সাইজ বৃদ্ধি পেলে ডিরেক্টরি কাঠামো নিখুঁত না রাখলে কোড রিফ্যাক্টর বা অপ্টিমাইজ করা অসম্ভব হয়ে পড়ে।",
          en: "Clean directory trees prevent logic overlap, enabling other developers to locate dependencies instantly.",
        },
        whyWorks: {
          bn: "ওএস ফাইল সিস্টেম হার্ডডিস্কের ফিজিক্যাল মেমরি সেক্টর ব্লকে ফাইল ইনডেক্স রাইট করে ডাটা খুঁজে বের করে।",
          en: "File systems manage directory nodes as linked lists or tree structures mapping file streams to sector blocks.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা ফাইল ইমপোর্ট ছোট করতে রিঅ্যাক্ট প্রজেক্টের tsconfig ফাইলে পাথ এলিয়াস (Path Alias) যেমন '@/' কনফিগার করেন।",
          en: "Seniors configure path aliases (e.g., '@/*') inside tsconfig JSON to avoid messy relative back-references.",
        },
        mistakes: {
          bn: "বিগিনারদের বড় ভুল হলো লিনাক্স সার্ভারে কোড আপলোড করার সময় ফাইলের নামের ক্যাপিটালাইজেশন বা বানান ভুল করা। লিনাক্স কেস-সেনসিটিভ (Case-sensitive)।",
          en: "UNIX systems are case-sensitive. Linking 'Logo.png' instead of 'logo.png' will break build deployments.",
        },
        debugging: {
          bn: "ফাইল খুঁজে না পাওয়ার 'File Not Found' বা 'Cannot find module' এরর আসলে ইমপোর্ট লিঙ্কের ডট ও স্ল্যাশ সংখ্যা রিভেরিফাই করুন।",
          en: "When debugging import errors, inspect directory offsets by tracing dot levels in terminal scripts.",
        },
        performance: {
          bn: "একটি ফোল্ডারে লাখ লাখ ফাইল একবারে রাখা রিড স্পিড ধীর করে দিতে পারে। তাই ডাটা ডেট বা ক্যাটাগরি ফোল্ডারে ভাগ করে রাখুন।",
          en: "Avoid dumping millions of files in one directory; it slows down directory reads. Partition files into subfolders.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "fs-q1",
      question: {
        bn: "ফাইল এবং ফোল্ডার (Folder/Directory) এর মধ্যে মূল অমিল বা পার্থক্য কী?",
        en: "What is the key difference between a file and a folder?",
      },
      options: [
        { bn: "ফোল্ডার ফাইল ধারণ করে এবং ফাইল ডেটা বা তথ্য ধারণ করে", en: "Folders contain files, whereas files contain raw data" },
        { bn: "ফাইল ফোল্ডার তৈরি করতে পারে", en: "Files can contain folders" },
        { bn: "ফোল্ডারে ছবি সেভ রাখা যায় না", en: "Folders cannot save image files" },
        { bn: "কোনো পার্থক্য নেই", en: "There is no difference" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "ফোল্ডার হলো ফাইল সাজিয়ে রাখার কনটেইনার এবং ফাইলের ভেতরে আসল বাইনারি বা টেক্সট তথ্য সংরক্ষিত থাকে।",
        en: "Folders are catalog organizers; files contain the actual target data payload.",
      },
    },
    {
      id: "fs-q2",
      question: {
        bn: "কম্পিউটারের রুট ফোল্ডার (Root Folder) বলতে কী বোঝায়?",
        en: "What is the Root folder in a file system?",
      },
      options: [
        { bn: "ফাইল সিস্টেমের সবচেয়ে গভীরে থাকা ফাইল", en: "The most hidden file in the directory tree" },
        { bn: "পুরো ডিরেক্টরি কাঠামোর গোড়া বা সবার ওপরে থাকা মূল ফোল্ডার", en: "The very beginning node or highest folder of the directory tree" },
        { bn: "ডাউনলোড করা ফাইল ফোল্ডার", en: "The download catalog folder" },
        { bn: "ডিলিট হওয়া ফাইলের ট্র্যাশ ফোল্ডার", en: "The trash bin folder" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রুট ফোল্ডার হলো মূল হাব বা গাছের গোড়া যেখান থেকে অন্য সমস্ত ফোল্ডার ও সাব-ডিরেক্টরির উৎপত্তি হয়।",
        en: "The Root node (e.g., C:\\ or /) is the parent container of all files and directories on that partition.",
      },
    },
    {
      id: "fs-q3",
      question: {
        bn: "একটি ফাইলের ঠিকানা রুট ফোল্ডার থেকে শুরু করে শেষ পর্যন্ত দেখালে তাকে কী বলা হয়?",
        en: "What is a file address that starts all the way from the root node called?",
      },
      options: [
        { bn: "রিলেটিভ পাথ (Relative Path)", en: "Relative Path" },
        { bn: "অ্যাবসোলিউট পাথ (Absolute Path)", en: "Absolute Path" },
        { bn: "ডকুমেন্ট ইনডেক্স", en: "Document Index" },
        { bn: "সার্ভার লিঙ্ক", en: "Server Link" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "অ্যাবসোলিউট পাথ রুট ডিরেক্টরি থেকে ফাইলের পুরো গ্লোবাল জিপিএস অ্যাড্রেসের মতো ঠিকানা প্রদর্শন করে।",
        en: "Absolute paths define the complete global address starting directly from the drive root.",
      },
    },
    {
      id: "fs-q4",
      question: {
        bn: "রিলেটিভ পাথের সংকেতে ডাবল ডট (..) ডিরেক্টরি দ্বারা কী বোঝানো হয়?",
        en: "What does the double dot (..) syntax indicate in relative paths?",
      },
      options: [
        { bn: "বর্তমান ফোল্ডারের ভেতরে ঢোকা", en: "Navigate into the current folder" },
        { bn: "এক ধাপ ওপরে বা প্যারেন্ট (Parent) ফোল্ডারে যাওয়া", en: "Move up one level into the parent folder" },
        { bn: "ফাইলটি পার্মানেন্ট ডিলিট করা", en: "Delete the target file permanently" },
        { bn: "ফাইলটি কপি করা", en: "Copy the current file" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডাবল ডট (..) ওএস কে কমান্ড দেয় বর্তমান ডিরেক্টরি ছেড়ে এক লেভেল পেছনের বা প্যারেন্ট ফোল্ডারে যেতে।",
        en: "Double dots reference the parent directory of the current working directory.",
      },
    },
    {
      id: "fs-q5",
      question: {
        bn: "সার্ভারে কোড ডেপ্লয় বা রান করার সময় বিগিনারদের পাথের ক্ষেত্রে কোন বড় বিষয়টি খেয়াল রাখতে হয়?",
        en: "What file naming issue must beginners watch out for on server deployments?",
      },
      options: [
        { bn: "ফাইলের নামের অক্ষরের ক্যাপিটালাইজেশন বা কেস-সেনসিটিভিটি (Case-sensitivity)", en: "File name casing/capitalization due to case-sensitivity" },
        { bn: "ফাইলের মেমরি সাইজ কমানো", en: "Compressing memory file size" },
        { bn: "ফাইল রিফ্রেশ করতে থাকা", en: "Refreshing files continuously" },
        { bn: "শুধুমাত্র ডেক্সটপে ফাইল রাখা", en: "Keeping all files on the desktop only" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "সার্ভার (Linux) কেস-সেনসিটিভ হওয়ায় 'Logo.png' এবং 'logo.png' আলাদা ফাইল। বানানে ছোট-বড় হাত মেলালে পাথ এরর আসে।",
        en: "Linux servers are case-sensitive. Mismatched capitalizations yield broken links and import errors.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনি বর্তমানে '/project/src/pages' ফোল্ডারে আছেন। এক ধাপ ওপরে গিয়ে 'assets' ফোল্ডারের 'photo.jpg' ফাইলের রিলেটিভ পাথ কেমন হবে? লিখুন।",
      en: "Calculate the relative path to assets/photo.jpg if you are currently in /project/src/pages.",
    },
    {
      bn: "আপনার কম্পিউটারের ডাউনলোড (Downloads) ফোল্ডারটি কীভাবে সাজালে প্রজেক্টের কাজের স্পিড বাড়ে তা ৩টি সাব-ফোল্ডার দিয়ে সাজিয়ে লিখুন।",
      en: "Describe a clean directory layout to organize a developer's local downloads folder.",
    },
    {
      bn: "পাথ রেফারেন্সিংয়ের ক্ষেত্রে অ্যাবসোলিউট পাথ কেন প্রজেক্ট কোডে সরাসরি হার্ডকোড করা অনুচিত? নিজের ভাষায় ব্যাখ্যা করুন।",
      en: "Explain why hardcoding absolute paths inside code causes runtime failures on other developers' machines.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি পার্সোনাল ব্লগ ওয়েবসাইটের ডিরেক্টরি ট্রি কাঠামো",
      en: "Directory Tree Layout Design for a Blog Website",
    },
    description: {
      bn: "একটি ব্লগ ওয়েবসাইটের ফোল্ডার আর্কিটেকচার ডিজাইন করুন। রুট ফোল্ডার, ইমেজের জন্য আলাদা ডিরেক্টরি এবং আর্টিকেলের ফাইলগুলো ডেক্লারেটিভ অবজেক্টে সাজিয়ে সাবমিট করুন।",
      en: "Design a modular file and folder structure for a blog web application. Map out directories and file nodes inside a JS object.",
    },
    starterCode: `// Blog Project Directory Tree Config
const blogDirectoryTree = {
  projectName: "bignanpro-blog",
  rootPath: "/",
  directories: [
    // ফোল্ডার ও সাব-ফোল্ডারের চেইন তালিকা
  ],
  relativeImportExample: "হোমপেজ থেকে লোগো ইমপোর্ট করার রিলেটিভ পাথ লিঙ্ক",
  isStructureOptimized: false
};`,
    solution: {
      code: `// Blog Project Directory Tree Resolved
const blogDirectoryTree = {
  projectName: "bignanpro-blog",
  rootPath: "/desktop/bignanpro-blog",
  directories: [
    { folder: "public", files: ["index.html", "favicon.ico"] },
    { folder: "src/components", files: ["Header.js", "Footer.js", "PostCard.js"] },
    { folder: "src/assets/images", files: ["banner.png", "author.jpg"] }
  ],
  relativeImportExample: "../../assets/images/banner.png",
  isStructureOptimized: true
};`,
      explanation: {
        bn: "চমৎকার প্রজেক্ট লেআউট! ইমেজ সোর্স ও এইচটিএমএল কাঠামো আলাদা ফোল্ডারে সাজিয়ে আপনি স্ট্যান্ডার্ড মডিউলার আর্কিটেকচার তৈরি করেছেন।",
        en: "Structuring separate directories for images and reusable parts mirrors real-world framework directory patterns.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "প্রজেক্টের কোডে ফাইলের সোর্স লিঙ্ক হিসেবে অ্যাবসোলিউট পাথ (Absolute Path) ব্যবহার করা কেন বড় ধরণের ভুল?",
        en: "Why is using Absolute Paths inside application code considered a critical mistake?",
      },
      answer: {
        bn: "অ্যাবসোলিউট পাথ আপনার লোকাল কম্পিউটারের রুট থেকে অ্যাড্রেস ধরে (যেমন: C:\\Users\\Tasnim\\Desktop\\project\\logo.png)। আপনি যখন এই কোডটি অন্য ডেভেলপারের কম্পিউটারে বা গিটহাবে রান করবেন, তখন তার কম্পিউটারে 'Tasnim' নামের ইউজার ডিরেক্টরি থাকবে না। ফলে সেখানে ফাইল লোড হবে না এবং ওএস ফাইল পাথ এরর দেবে। কোডের ফাইল লিঙ্ক সবসময় রিলেটিভ পাথে রাখতে হয় যাতে প্রজেক্ট ফোল্ডারটি সরালেও ফাইলের আপেক্ষিক দূরত্ব ঠিক থাকে ও কোড রান করে।",
        en: "Absolute paths bind imports to specific local system profiles (e.g., C:\\Users\\DeveloperName). Running this code on servers or another workspace fails because the directory path does not exist. Application paths must use relative paths to ensure environment portability.",
      },
    },
    {
      question: {
        bn: "পাথ এলিয়াস (Path Alias) কী এবং এটি কীভাবে বড় আকারের কোডবেস ডিরেক্টরিতে ইমপোর্ট করার স্পিড বাড়ায়?",
        en: "What is a Path Alias and how does it prevent import path clutter in large codebases?",
      },
      answer: {
        bn: "বড় প্রজেক্টে ফাইল যখন অনেক গভীরে থাকে, তখন রিলেটিভ পাথে বারবার প্যারেন্ট ডিরেক্টরিতে যেতে প্রচুর ডাবল ডট লিখতে হয় (যেমন: ../../../../components/Button)। এটি পড়া কঠিন এবং ফাইল সরালে লিঙ্ক নষ্ট হয়ে যায়। পাথ এলিয়াস কনফিগার করলে আমরা একটি নির্দিষ্ট সিম্বল বা টার্গেট রুট সেট করতে পারি (যেমন: @)। তখন আমরা যেকোনো ডিরেক্টরি থেকে সরাসরি `@/components/Button` লিখে ইমপোর্ট করতে পারি। ওএস বা কম্পাইলার ব্যাকগ্রাউন্ডে এটি সমাধান করে নেয়, ফলে কোড সুন্দর ও সহজ থাকে।",
        en: "In large codebases, importing deeply nested files results in hard-to-read 'relative path hell' (e.g., ../../../ui/Button). A path alias maps a prefix symbol like '@' directly to the project root directory. This keeps import statements short, clean, and portable across nested file refactors.",
      },
    },
  ],
};
