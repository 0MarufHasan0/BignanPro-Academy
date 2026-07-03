import { Chapter } from "@/types";

export const chapter8Content: Chapter = {
  id: "chapter-8",
  number: 8,
  title: {
    bn: "অধ্যায় ৮: অপারেটিং সিস্টেম — কম্পিউটারের প্রাণশক্তি",
    en: "Chapter 8: Operating System — OS Deep Concept",
  },
  description: {
    bn: "অপারেটিং সিস্টেম কীভাবে হার্ডওয়্যার নিয়ন্ত্রণ করে, কার্নেল কী, এবং প্রসেস ও মেমরি ম্যানেজমেন্টের ভেতরের রসায়ন।",
    en: "Explore how operating systems control computer hardware, schedule CPU processes, allocate system RAM memory, partition files directories, and manage kernels.",
  },
  difficulty: "beginner",
  readingTime: 12,
  objectives: [
    {
      bn: "অপারেটিং সিস্টেমকে কেবল ডিজাইন স্ক্রিন না ভেবে এটি কীভাবে ব্যাকগ্রাউন্ড রিসোর্স বা হার্ডওয়্যার কন্ট্রোল করে তা চেনা।",
      en: "Learn how the operating system manages hardware resources and background services.",
    },
    {
      bn: "মাল্টিটাস্কিংয়ের সময় প্রসেস শিডিউলিং (Process Management) কীভাবে কাজ করে তা বোঝা।",
      en: "Understand process scheduling and multitasking resource controls.",
    },
    {
      bn: "র‍্যামের লিমিটেড স্পেস কীভাবে অ্যাপ্লিকেশনের মধ্যে বন্টিত (Memory Management) হয় তা শেখা।",
      en: "Learn how memory space allocation partitions app execution blocks without conflicts.",
    },
    {
      bn: "অপারেটিং সিস্টেমের মূল চালিকাশক্তি বা কার্নেল (Kernel) এর মূল দায়িত্বগুলো চিহ্নিত করা।",
      en: "Identify the core responsibilities of the Operating System Kernel.",
    },
  ],
  sections: [
    {
      id: "what-is-os-need",
      title: {
        bn: "১. অপারেটিং সিস্টেম কী ও কেন প্রয়োজন? (What is OS & Why Needed)",
        en: "1. What is OS & Why Needed",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
যখন আপনি মাউস দিয়ে কোনো ফাইল ড্র্যাগ করেন বা ভিএস কোডে কোড লেখেন, আপনি আসলে কম্পিউটারের সাথে ইন্টারঅ্যাক্ট করছেন। কিন্তু কম্পিউটারের প্লাস্টিক আর মেটাল কীভাবে আপনার কমান্ড বুঝতে পারে? এর পেছনের জাদুকর প্রোগ্রামটিই হলো **অপারেটিং সিস্টেম (OS - Operating System)**।

## Why should I learn this? (কেন শিখবো?)
আমরা যখন রিয়েল-ওয়ার্ল্ড সফটওয়্যার তৈরি করব, তখন মেমরি ফাস্ট লোড করা বা একাধিক ফাইল নিয়ে কাজ করা অত্যন্ত সাধারণ বিষয়। অপারেটিং সিস্টেম কীভাবে ফাইল এবং প্রসেস চালায় তা জানা থাকলে আপনার তৈরি অ্যাপ্লিকেশনগুলোতে কখনো পারফরম্যান্স বাগ তৈরি হবে না।

## What is an Operating System? (ওএস কী?)
সহজ কথায়: **অপারেটিং সিস্টেম হলো কম্পিউটারের প্রধান সিস্টেম সফটওয়্যার যা হার্ডওয়্যার রিসোর্স (CPU, RAM, Storage) নিয়ন্ত্রণ করে এবং অন্যান্য ইউজার অ্যাপ্লিকেশন (Chrome, VS Code) রান করার উপযুক্ত পরিবেশ তৈরি করে।**

*   **উদাহরণ**: Windows, macOS, Linux (কম্পিউটারের জন্য) এবং Android, iOS (মোবাইলের জন্য)।
*   **রূপক**: ওএস হলো একটি বড় কোম্পানির জেনারেল ম্যানেজারের মতো, যিনি অফিস রুম ও কর্মচারীদের সমস্ত দায়িত্ব বন্টন করেন এবং শৃঙ্খলা বজায় রাখেন। ওএস ছাড়া প্রতিটি সফটওয়্যারকে নিজে নিজে কিবোর্ড সিগন্যাল ও সাউন্ড হার্ডওয়্যার অ্যাক্সেস করার জটিল লজিক লিখতে হতো—যা কোডিংকে অসম্ভব কঠিন করে তুলত!`,
        en: `## Introduction
Every keyboard event and browser process runs inside scopes managed by the host Operating System. Understanding system interactions helps you write optimized scripts.

## What is an Operating System?
A primary system software stack managing physical hardware allocations (CPU, RAM, Disk I/O) and hosting user-space software runtimes. E.g., Linux, Windows, macOS, Android.`,
      },
    },
    {
      id: "os-flow-types",
      title: {
        bn: "২. ওএস-এর প্রকারভেদ ও কাজ করার ফ্লো (OS Flow & OS Types)",
        en: "2. OS Flow & OS Types",
      },
      content: {
        bn: `## The System Architecture Flow (কাজের ক্রমানুসার)
অপারেটিং সিস্টেম মূলত ইউজার অ্যাপ্লিকেশন এবং ভেতরের সিলিকন চিপের সংযোগ সেতু হিসেবে কাজ করে:

\`\`\`
User (ইউজার) ➔ Application (Chrome/VS Code) ➔ Operating System (OS) ➔ Hardware (CPU/RAM/GPU) ➔ Device Output (ফলাফল)
\`\`\`

## Types of Operating Systems (ওএস-এর প্রকারভেদ)
বিভিন্ন কাজের চাহিদার ওপর ভিত্তি করে ওএস ডিজাইন করা হয়:
১. **ডেস্কটপ ওএস (Desktop OS)**: যেমন Windows, macOS, Linux। এগুলো মাল্টিটাস্কিং এবং ইউজার ইন্টারঅ্যাকশনের জন্য অপ্টিমাইজড।
২. **মোবাইল ওএস (Mobile OS)**: যেমন Android, iOS। এগুলো মোবাইলের টাচ স্ক্রিন, জিপিএস ও ব্যাটারি সেভিংয়ের কথা মাথায় রেখে তৈরি।
৩. **সার্ভার ওএস (Server OS)**: যেমন Linux Server (Ubuntu/Debian), Windows Server। এগুলোতে কোনো গ্রাফিক্স স্ক্রিন বা GUI থাকে না। এর কাজ হলো হাজার হাজার নেটওয়ার্ক কানেকশন ফাস্ট প্রসেস করা ও ডেটাবেজ হোস্ট করা।`,
        en: `## The OS Data Pipeline
"User ➔ Application (Chrome) ➔ Operating System ➔ Hardware (CPU/RAM/GPU) ➔ Output"

## Core OS Categories
*   **Desktop**: Windows, macOS, Desktop Linux. Emphasizes visual graphics and multitasking.
*   **Mobile**: Android, iOS. Built for touch coordinates, sensors, and battery savings.
*   **Server**: Headless Linux. Stripped of GUI to maximize network interface card outputs and memory speeds.`,
      },
    },
    {
      id: "process-memory-management",
      title: {
        bn: "৩. প্রসেস ও মেমরি ম্যানেজমেন্ট (Process & Memory Management)",
        en: "3. Process & Memory Management",
      },
      content: {
        bn: `## Process Management: Multitasking Secrets (প্রসেস ম্যানেজমেন্ট)
যখন কোনো কোড ফাইল নিষ্ক্রিয় অবস্থায় হার্ডডিস্কে থাকে, তাকে আমরা 'প্রোগ্রাম' বলি। কিন্তু যখন আপনি সেটিতে ডাবল ক্লিক করে রান করেন এবং ওএস সেটিকে র‍্যামে নিয়ে রান করায়, তখন তাকে বলা হয় **প্রসেস (Process)**।

আপনার কম্পিউটারে একই সাথে ক্রোম ব্রাউজার, স্পোটিফাই ও ভিএস কোড চালু থাকতে পারে। প্রসেসর কিন্তু এক সেকেন্ডে মাত্র একটি কাজ করতে পারে। তাহলে ওএস কীভাবে একসাথে সব চালায়?

*   **টাইম স্লাইস (Time Slice)**: ওএস প্রসেসরকে বলে দেয় তুমি ক্রোমের জন্য ০.০০১ সেকেন্ড, স্পোটিফাইয়ের জন্য ০.০০১ সেকেন্ড এবং ভিএস কোডের জন্য ০.০০১ সেকেন্ড করে সময় দাও। এই পরিবর্তন এত দ্রুত ঘটে যে মানুষ মনে করে সব অ্যাপ্লিকেশন একসাথে চলছে! একে **মাল্টিটাস্কিং (Multitasking)** বলে।

---
## Memory Management: RAM Allocation (মেমরি বন্টন)
র‍্যামের সাইজ লিমিটেড (যেমন ৮ জিবি)। ওএস প্রতিটি সচল প্রসেসকে আলাদা আলাদা মেমরি টেবিল বা স্পেস বরাদ্দ করে।
*   **দ্বন্দ্ব প্রতিরোধ (Conflict Prevention)**: ওএস নিশ্চিত করে যেন ক্রোম ব্রাউজার কখনোই স্পোটিফাইয়ের বরাদ্দ করা মেমরি স্পেসে গিয়ে ডাটা রিড বা রাইট করতে না পারে। অন্যথায় সিকিউরিটি লিকেজ বা অ্যাপ্লিকেশন ক্র্যাশ হবে।

## Analogy (মেমরি বন্টনের রূপক)
ওএস হলো একটি ব্যস্ত রেস্টুরেন্টের সুপারভাইজার। যখন কাস্টমাররা (প্রসেস) খাবার খেতে আসেন, সুপারভাইজার তাদের আলাদা আলাদা টেবিল (RAM Space) বরাদ্দ করেন। টেবিল নম্বর ২ এর কাস্টমার কখনোই টেবিল নম্বর ৫ এর প্লেট থেকে খাবার তুলে খেতে পারবেন না—ওএস এটি কঠোরভাবে তদারকি করে!`,
        en: `## Process Management
A **program** is static code stored on disk. A **process** is an active execution unit loaded in RAM memory registers.

## Multitasking scheduling
The OS partitions CPU cycles into micro-timeslices (CPU scheduling), switching contexts between threads so fast it creates the illusion of concurrent multitasking.

## Memory Management
The OS maps physical RAM addresses to virtual memory spaces for each process. This isolation prevents one app from crashing or snooping into the memory buffers of another.`,
      },
    },
    {
      id: "file-system-ui",
      title: {
        bn: "৪. ফাইল সিস্টেম ও ইউজার ইন্টারফেস (File System & GUI vs CLI)",
        en: "4. File System & GUI vs CLI",
      },
      content: {
        bn: `## File System Management (নথি ব্যবস্থাপনা)
মাদারবোর্ড বাস দিয়ে হার্ডডিস্ক থেকে ডাটা খোঁজার প্রসেস অত্যন্ত জটিল। ওএস ফাইলগুলোকে সাজাতে একটি ইনডেক্স ব্যবহার করে যাকে **ফাইল সিস্টেম (File System)** বলে (যেমন: NTFS, ext4, APFS)।
*   এটি ফোল্ডার স্ট্রাকচার (যেমন Downloads, Documents, Desktop) তৈরি করে ডাটা অর্গানাইজ করে।
*   কোন ফাইল কে রিড করতে পারবে বা কোন ফাইল প্রোটেক্টেড—তার পারমিশনও ওএস ফাইল সিস্টেমের মাধ্যমে নিয়ন্ত্রণ করে।

---
## User Interface Layers (ইউজার ইন্টারফেসের দুই রূপ)
ইউজার ও ওএস-এর মাঝে যোগাযোগের দুটি জনপ্রিয় মাধ্যম রয়েছে:

১. **GUI (Graphical User Interface)**: যেখানে আইকন, ফোল্ডার, বাটন ও গ্রাফিক্স দেখা যায়। যেমন: উইন্ডোজের ডেস্কটপ স্ক্রিন। এটি সাধারণ ব্যবহারকারীদের জন্য খুব সহজ।
২. **CLI (Command Line Interface)**: যেখানে কোনো মাউস কার্সার বা ছবি থাকে না। কেবল টেক্সট লিখে কমান্ড দিতে হয়। যেমন: উইন্ডোজের টার্মিনাল বা লিনাক্সের ব্যাশ (Bash)। ডেভেলপার হিসেবে আমরা এই টার্মিনাল সিএলআই ব্যবহার করে দ্রুত প্রজেক্ট বা সার্ভার কন্ট্রোল করব।`,
        en: `## File System
An OS layer mapping directory paths to physical hard disk blocks (NTFS, ext4). It organizes index logs and security permissions.

## User Interface Formats
*   **GUI (Graphical User Interface)**: Icons, pointers, and desktop frames.
*   **CLI (Command Line Interface)**: Terminal shells executing text scripts directly. Essential for backend deployments.`,
      },
    },
    {
      id: "kernel-core-company",
      title: {
        bn: "৫. ওএস কার্নেল পরিচিতি ও কোম্পানি অ্যানালজি (Kernel Intro & Company Analogy)",
        en: "5. Kernel Intro & Company Analogy",
      },
      content: {
        bn: `## The Core of the OS: The Kernel (কার্নেল কী?)
অপারেটিং সিস্টেমের সবচেয়ে গুরুত্বপূর্ণ এবং কেন্দ্রীয় অংশ হলো **কার্নেল (Kernel)**। 

কার্নেলের কাজ:
*   এটি হার্ডডিস্কের বুট সেক্টরে লোড হয়ে পুরো সেশন ধরে ব্যাকগ্রাউন্ডে রান করতে থাকে।
*   সিপিইউ কোরের শিডিউলিং ম্যানেজ করা।
*   র‍্যাম মেমরি এবং কিবোর্ড/সাউন্ড কার্ডের মতো ডিভাইস ড্রাইভারগুলোর সাথে সরাসরি কমিউনিকেশন হ্যান্ডেল করা।

সহজ ভাষায়, কার্নেল হলো অপারেটিং সিস্টেমের ভেতরের মূল ইঞ্জিন। আপনি যখন উইন্ডোজ বা উবুন্টু চালাচ্ছেন, আপনি আসলে কার্নেলের তৈরি করা নিরাপত্তা ও নিয়মাবলি মেনে চলছেন।

---
## The Complete Company Analogy (কোম্পানি রূপক)
কম্পিউটার এবং ওএস-এর ভেতরের মেলবন্ধনকে একটি রানিং কোম্পানির সাথে মিলিয়ে নিন:
*   **কোম্পানি (Company)**: কম্পিউটার হার্ডডিস্ক ও হার্ডওয়্যার।
*   **জেনারেল ম্যানেজার (General Manager)**: অপারেটিং সিস্টেম (OS)।
*   **ম্যানেজারের অফিস ডায়েরি ও সিকিউরিটি ডেক্স**: কার্নেল (Kernel - ওএসের মূল ইঞ্জিন)।
*   **ফাইল ক্যাবিনেট (File Cabinet)**: ফাইল সিস্টেম (File System)।
*   **অফিসের কর্মচারীরা (Employees)**: রানিং অ্যাপ্লিকেশন বা প্রসেস (Chrome, VS Code)।
*   **অফিসের কাজের টেবিল (Desk)**: র‍্যাম (RAM - যেখানে সচল কাজের ফাইল ছড়ানো থাকে)।
*   **অফিসের ফ্যাক্টরি ওয়ার্কার্স (Workers)**: সিপিইউ (CPU - যারা রিয়েল কাজগুলো প্রসেস করেন)।`,
        en: `## The Kernel
The foundational heart of any OS. It loads first into protected system memory sectors, controlling processor cycles, resource boundaries, and physical hardware device drivers.

## Company Metaphor
*   **OS**: General Manager (arranges structures and guidelines).
*   **Kernel**: The Manager's personal assistant (handles low-level driver calls and core tasks).
*   **Processes**: Operating employees working on desks.
*   **RAM**: Office desks.`,
      },
      codeBlock: {
        fileName: "os_process.js",
        language: "javascript",
        code: `// ওএস প্রসেস লাইফ সাইকেল সিমুলেটর
class OSKernel {
  constructor() {
    this.processQueue = [];
    this.allocatedMemory = 0;
  }

  // ১. প্রসেস ক্রিয়েশন ও মেমরি এলোকেশন
  startProcess(processName, ramNeededMB) {
    console.log("📦 কার্নেল: " + processName + " সচল করার রিকোয়েস্ট এসেছে...");
    if (this.allocatedMemory + ramNeededMB <= 8192) { // ৮ জিবি র‍্যাম লিমিট
      this.processQueue.push({ name: processName, ram: ramNeededMB });
      this.allocatedMemory += ramNeededMB;
      console.log("✅ " + processName + " সফলভাবে র‍্যামে লোড হয়েছে। বর্তমান র‍্যাম খরচ: " + this.allocatedMemory + " MB");
    } else {
      console.log("❌ এরর: মেমরি ওভারফ্লো! ওএস রানিং প্রোসেস কিল করছে...");
    }
  }
}

const kernel = new OSKernel();
kernel.startProcess("VS Code", 1024);
kernel.startProcess("Google Chrome", 4096);
kernel.startProcess("Spotify", 512);`,
        explanations: [
          {
            line: 9,
            text: {
              bn: "প্রসেস চালু করার সময় কার্নেল র‍্যাম লিমিট চেক করে মেমরি এলোকেট করে।",
              en: "Checking physical RAM limits before allocating memory pages.",
            },
          },
          {
            line: 11,
            text: {
              bn: "সফলভাবে প্রসেসটি সচল কিউ বা লাইনে যুক্ত করা হয়।",
              en: "Pushing process configurations onto the active scheduler queue.",
            },
          },
        ],
      },
    },
    {
      id: "practice-os-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার ওএস প্রসেসিং এবং মেমরি শেয়ারিং মডেল সম্পর্কে ভিশন ক্লিয়ার করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your system software configurations before learning how browser engines execute web pages.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "সফ্টওয়্যার ডেভেলপারদের ওএস প্রসেস জানা থাকলে তারা মাল্টি-থ্রেডিং বা ব্যাকগ্রাউন্ড টাস্ক রান করার কোড নিখুঁতভাবে লিখতে পারেন।",
          en: "Knowing OS scheduling patterns prepares you to build scalable async server instances.",
        },
        whyWorks: {
          bn: "ওএস কার্নেল কম্পিউটারের হার্ডওয়্যার রেজিস্টারে ইলেকট্রিক্যাল পালস পাঠিয়ে ফাইল ও পোর্টের ডাটা আদান-প্রদান করে।",
          en: "The kernel leverages interrupt vectors to intercept keyboard keys and CPU instruction registers.",
        },
        professionalThinking: {
          bn: "পেশাদাররা লিনাক্স সিএলআই (CLI) এবং ব্যাশ স্ক্রিপ্টিং ব্যবহার করে সার্ভারের ব্যাকগ্রাউন্ড প্রসেস নিয়ন্ত্রণ করেন।",
          en: "Seniors prefer CLI commands over GUIs to automate server deployment routines.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো মেমরি ফ্রি করার কথা ভুলে যাওয়া। ওএস মেমরি ডিলিট করার দায়িত্ব নিলেও লিক এড়াতে ভ্যারিয়েবল নাল করুন।",
          en: "Garbage collection handles memory cleanup, but memory leaks still occur if you maintain references to unused objects.",
        },
        debugging: {
          bn: "কোনো অ্যাপ্লিকেশন আনরেসপন্সিভ হলে টাস্ক ম্যানেজার থেকে প্রসেস আইডি (PID) দেখে প্রসেসটি কিল করে মেমরি ফ্রি করা যায়।",
          en: "To resolve frozen threads, trace PID logs and kill the parent process tree.",
        },
        performance: {
          bn: "র‍্যামের ডাটা ও হার্ডডিস্কের মধ্যে পেজিং (Paging) প্রসেস যাতে ঘন ঘন না ঘটে, সেদিকে খেয়াল রাখুন।",
          en: "Minimize disk operations inside loop processes. Cache active logs in RAM array buffers.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "os-q1",
      question: {
        bn: "অপারেটিং সিস্টেম (OS) এর প্রধান কাজ এবং ভূমিকা কী?",
        en: "What is the primary role of the Operating System?",
      },
      options: [
        { bn: "কম্পিউটারের পাওয়ার ক্যাবল মেরামত করা", en: "Repair electrical power lines" },
        { bn: "হার্ডওয়্যার রিসোর্স ম্যানেজ করা ও ইউজার অ্যাপ চালাতে সাহায্য করা", en: "Manage physical hardware resources and facilitate app execution" },
        { bn: "ইন্টারনেটের স্পিড বাড়ানো", en: "Increase internet bandwidth" },
        { bn: "ইউটিউব ভিডিও প্লেলিস্ট তৈরি করা", en: "Assemble YouTube playlists" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "অপারেটিং সিস্টেম হলো মেইন প্ল্যাটফর্ম যা হার্ডওয়্যার কন্ট্রোল ও ইউজার স্পেস অ্যাপ চালাতে সাহায্য করে।",
        en: "The OS manages RAM allocations, CPU schedules, and serves system calls to apps.",
      },
    },
    {
      id: "os-q2",
      question: {
        bn: "কাজের টেবিলে বসার রেস্টুরেন্ট সুপারভাইজার রূপক অনুযায়ী, ওএস মেমরি ম্যানেজমেন্টের প্রধান দায়িত্ব কোনটি?",
        en: "In the restaurant table metaphor, what does OS memory management protect?",
      },
      options: [
        { bn: "খাবারের প্লেট সুন্দর করে ধুয়ে রাখা", en: "Clean the plates visually" },
        { bn: "প্রতিটি প্রসেসের জন্য র‍্যামে আলাদা মেমরি বরাদ্দ করা ও ডাটা সিকিউরিটি নিশ্চিত করা", en: "Allocate isolated RAM tables for each running process to prevent memory conflicts" },
        { bn: "বাবুর্চির কাজের গতি বাড়ানো", en: "Increase chef cooking velocity" },
        { bn: "নতুন কাস্টমারকে স্বাগত জানানো", en: "Welcome new guests" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ওএস সচল প্রসেসগুলোকে আলাদা মেমরি স্পেস বরাদ্দ দেয় যাতে একটি অন্যটির বাফারে প্রবেশ বা দ্বন্দ্ব করতে না পারে।",
        en: "Isolated virtual memory offsets prevent concurrent processes from colliding and crashing the OS.",
      },
    },
    {
      id: "os-q3",
      question: {
        bn: "টার্মিনাল বা কমান্ড লাইনের সাহায্যে ওএস-এর সাথে টেক্সট দিয়ে যোগাযোগের মাধ্যমকে কী বলা হয়?",
        en: "What is the text-based interface used to interact with the OS called?",
      },
      options: [
        { bn: "GUI (Graphical User Interface)", en: "GUI" },
        { bn: "CLI (Command Line Interface)", en: "CLI (Command Line Interface)" },
        { bn: "RAM Table", en: "RAM Table" },
        { bn: "BIOS Program", en: "BIOS Program" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সিএলআই (Command Line Interface) দিয়ে আমরা মাউস ছাড়াই সরাসরি কোড বা লাইনের মাধ্যমে ওএস নিয়ন্ত্রণ করতে পারি।",
        en: "CLI/Terminal permits developers to invoke OS kernel calls using textual scripts.",
      },
    },
    {
      id: "os-q4",
      question: {
        bn: "অপারেটিং সিস্টেমের সবচেয়ে অভ্যন্তরীণ এবং কেন্দ্রীয় ইঞ্জিন চিপসটির নাম কী?",
        en: "What is the core engine of the operating system called?",
      },
      options: [
        { bn: "ক্রোম ব্রাউজার (Browser)", en: "Chrome Browser" },
        { bn: "কার্নেল (Kernel)", en: "Kernel" },
        { bn: "ফাইল ইনডেক্সার (File Indexer)", en: "File Indexer" },
        { bn: "ইনপুট বাটন", en: "Input switches" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কার্নেল হলো ওএসের হার্ট বা ইঞ্জিন যা সিপিইউ কোড রানিং ও মেমরি ড্রাইভের ফিজিক্যাল অ্যাক্সেস কন্ট্রোল করে।",
        en: "The kernel operates at the lowest instruction level, interfacing system drivers and scheduling threads.",
      },
    },
    {
      id: "os-q5",
      question: {
        bn: "কম্পিউটার প্রসেস শিডিউলিং বা মাল্টিটাস্কিং কীভাবে সম্পন্ন করে?",
        en: "How does the OS achieve multitasking?",
      },
      options: [
        { bn: "কম্পিউটার ধীর গতিতে কাজ করে", en: "Slow down system operations" },
        { bn: "সিপিইউ সাইকেলকে অত্যন্ত ক্ষুদ্র টাইম স্লাইসে ভাগ করে দ্রুত এক প্রসেস থেকে অন্য প্রসেসে সুইচ করে", en: "Split CPU cycle intervals into micro-timeslices and context-switch between processes rapidly" },
        { bn: "একটি করে সম্পূর্ণ প্রজেক্ট রান শেষ করে পরবর্তী প্রজেক্ট ওপেন করে", en: "Execute only one project to completion before opening the next" },
        { bn: "সব ডাটা ডিলিট করে দেয়", en: "Wipes all current active states" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ওএস সিপিইউ রিসোর্সকে মিলি সেকেন্ডের টাইম স্লাইসে ভাগ করে সমস্ত রানিং অ্যাপে বিতরণ করে, একেই মাল্টিটাস্কিং বলে।",
        en: "Timeslices allocate CPU ticks to active threads in round-robin scheduler queues.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার কম্পিউটারে যখন ক্রোম, স্পোটিফাই ও ভিএস কোড একসাথে চালু করেন, ওএস প্রসেস শিডিউলার কীভাবে টাইম স্লাইস কন্ট্রোল করে তা ১টি লাইনে লিখুন।",
      en: "Describe how the OS timeslices CPU cores to run Chrome and Spotify concurrently.",
    },
    {
      bn: "মাদারবোর্ডের মেমরি স্লটের দ্বন্দ্ব এড়াতে ওএসের 'মেমরি আইসোলেশন' কেন জরুরি? নিজের ভাষায় লিখুন।",
      en: "Why is memory isolation critical for system stability and security?",
    },
    {
      bn: "একটি সার্ভার সিস্টেমে কেন কোনো ভিজ্যুয়াল ডেস্কটপ ওএস (GUI) ইনস্টল করা হয় না? সংক্ষেপে লিখুন।",
      en: "Explain why server deployments utilize headless OS instances instead of GUIs.",
    },
  ],
  assignment: {
    title: {
      bn: "ওএস বুটআপ এবং প্রসেস শিডিউলিং মডিউল",
      en: "OS Bootup & Process Scheduling Layout",
    },
    description: {
      bn: "কম্পিউটার বুটআপ হওয়ার পর ওএস কীভাবে মেমরি এবং প্রসেস শিডিউল কিউ ম্যানেজ করে, তার একটি লজিক্যাল কনফিগারেশন তৈরি করুন।",
      en: "Decompose the state changes and memory layouts of the OS during startup and process launch sequences.",
    },
    starterCode: `// OS Bootup & Process Allocation Schema
const osSchedulingFlow = {
  bootloaderState: "OS Loading",
  kernelMemoryReservedMB: 1024,
  activeProcessQueue: [
    // রানিং প্রসেসগুলোর নাম ও মেমরি সাইজ
  ],
  multitaskingMethod: "Time Slicing / Context Switching",
  memoryIsolationActive: false
};`,
    solution: {
      code: `// OS Processing Flow Resolved
const osSchedulingFlow = {
  bootloaderState: "ওএস সফলভাবে র‍্যাম মেমরিতে রানিং",
  kernelMemoryReservedMB: 1024,
  activeProcessQueue: [
    { processId: 101, name: "System Shell (GUI)", ramAllocatedMB: 512 },
    { processId: 102, name: "VS Code Editor", ramAllocatedMB: 1536 },
    { processId: 103, name: "Node.js Server", ramAllocatedMB: 2048 }
  ],
  multitaskingMethod: "সিপিইউ সাইকেলকে মিলি সেকেন্ডের ইন্টারভেলে কন্টেক্সট সুইচ করা।",
  memoryIsolationActive: true
};`,
      explanation: {
        bn: "চমৎকার ডিজাইন! কার্নেল স্পেস রিজার্ভ রাখা এবং মেমরি আইসোলেশন অন করার পুরো প্রবাহটি আর্কিটেকচারালি নিখুঁত হয়েছে।",
        en: "Mapping process schemas shows how scheduling queues organize operating system loads dynamically.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "লিনাক্স (Linux) অপারেটিং সিস্টেম কেন বিশ্বের বেশিরভাগ সার্ভার এবং ক্লাউড সিস্টেমে ব্যবহার করা হয়?",
        en: "Why is Linux preferred over Windows for backend servers and cloud infrastructure?",
      },
      answer: {
        bn: "১. লিনাক্স সম্পূর্ণ লাইটওয়েট এবং কোনো ভারী ইউজার গ্রাফিক্স (GUI) ছাড়াই অত্যন্ত দক্ষতার সাথে চলতে পারে।\n২. এটি একটি ওপেন সোর্স ওএস, ফলে যে কেউ কোড কাস্টমাইজ করতে পারেন এবং কোনো লাইসেন্স ফি দিতে হয় না।\n৩. লিনাক্সের সিকিউরিটি এবং কার্নেল পারমিশন লেভেল উন্ডোজের চেয়ে অনেক কড়া ও স্ট্যাবল। উন্ডোজের মতো ঘন ঘন আপডেট বা রিবুট দেওয়ার প্রয়োজন পড়ে না।\n৪. নেটওয়ার্ক প্যাকেট হ্যান্ডলিং ও ফাইল রাইটিংয়ের গতি লিনাক্সে অত্যন্ত বেশি যা সার্ভারের জন্য আবশ্যক।",
        en: "1. Linux is lightweight and operates headless (without a GUI), directing all resources to background logic.\n2. Open-source structure eliminates licensing costs and permits deep kernel customization.\n3. Advanced security permissions and modular kernels yield high stability, uptime, and resistance to runtime exploits.\n4. Optimized network stacks handle high TCP/IP concurrency efficiently.",
      },
    },
    {
      question: {
        bn: "ভার্চুয়াল মেমরি (Virtual Memory) কী এবং র‍্যাম শেষ হয়ে গেলে ওএস কীভাবে এটি ব্যবহার করে?",
        en: "What is Virtual Memory and how does the OS leverage it when RAM is exhausted?",
      },
      answer: {
        bn: "র‍্যামের জায়গা যখন রানিং অ্যাপ দিয়ে সম্পূর্ণ ভরে যায়, ওএস তখন নতুন অ্যাপ বন্ধ না করে স্টোরেজ ড্রাইভের (SSD) কিছু খালি জায়গাকে অস্থায়ী র‍্যাম হিসেবে ব্যবহার করা শুরু করে। একেই **ভার্চুয়াল মেমরি** বলা হয়। ওএস র‍্যাম থেকে নিষ্ক্রিয় অ্যাপ্লিকেশনের ডাটা স্টোরেজে সরিয়ে দেয় (Swap out) এবং সচল অ্যাপের ডাটা র‍্যামে নিয়ে আসে (Swap in)। যেহেতু এসএসডি র‍্যামের চেয়ে অনেক ধীর গতির, তাই এই পেজিং প্রসেস চলাকালে কম্পিউটার স্লো বা হ্যাং হয়ে যায়।",
        en: "When physical memory space is exhausted, the OS memory manager maps unused virtual page addresses to designated swap partitions on the storage drive (SSD). Active page buffers are swapped back to DRAM, while idle threads are swapped to disk. This paging system preserves stability, though it causes latency bottlenecks.",
      },
    },
  ],
};
