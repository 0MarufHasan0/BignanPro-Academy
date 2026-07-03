import { LocalizedString } from "@/types";

export interface ChapterMeta {
  id: string;
  number: number;
  title: LocalizedString;
  description: LocalizedString;
  difficulty: "beginner" | "intermediate" | "advanced";
  readingTime: number;
  sections: { id: string; title: LocalizedString }[];
}

export const chaptersList: ChapterMeta[] = [
  {
    id: "chapter-0",
    number: 0,
    title: {
      bn: "অধ্যায় ০: শুরু করার আগে — ফাউন্ডেশন ও পরিচিতি",
      en: "Chapter 0: Before Starting — Foundation & Introduction",
    },
    description: {
      bn: "ফুল স্ট্যাক ডেভেলপার হওয়ার রোডম্যাপ, বিজ্ঞানপ্রো একাডেমির পরিচিতি এবং লার্নিং মেথডোলজি।",
      en: "Roadmap to becoming a Full Stack Developer, introduction to BignanPro Academy, and our learning methodology.",
    },
    difficulty: "beginner",
    readingTime: 12,
    sections: [
      { id: "intro", title: { bn: "ভূমিকা (Introduction)", en: "Introduction" } },
      { id: "why-fullstack", title: { bn: "ফুল স্ট্যাক কী? (What is Full Stack?)", en: "What is Full Stack?" } },
      { id: "how-to-study", title: { bn: "কীভাবে পড়বেন? (How to Study)", en: "How to Study" } },
      { id: "conclusion", title: { bn: "আমাদের লক্ষ্য (Our Goal)", en: "Our Goal" } },
    ],
  },
  {
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
    sections: [
      {
        id: "intro-onboarding",
        title: {
          bn: "১. বিজ্ঞানপ্রো একাডেমির যাত্রা শুরু",
          en: "1. Welcome & Introduction",
        },
      },
      {
        id: "vision-what-build",
        title: {
          bn: "২. আপনি কী কী তৈরি করতে পারবেন?",
          en: "2. What You Will Build",
        },
      },
      {
        id: "how-book-works",
        title: {
          bn: "৩. এই বইটি যেভাবে কাজ করে",
          en: "3. How This Book Works",
        },
      },
      {
        id: "career-roadmap-learning",
        title: {
          bn: "৪. সম্পূর্ণ লার্নিং রোডম্যাপ",
          en: "4. Interactive Full Stack Roadmap",
        },
      },
      {
        id: "learning-strategy-ai",
        title: {
          bn: "৫. শেখার সঠিক কৌশল ও এআই এর ব্যবহার",
          en: "5. Learning Strategy & AI Prompts",
        },
      },
      {
        id: "mistakes-motivation",
        title: {
          bn: "৬. সাধারণ ভুল ও মানসিক প্রস্তুতি",
          en: "6. Common Mistakes & Mindset",
        },
      },
    ],
  },
  {
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
    sections: [
      {
        id: "mindset-intro",
        title: {
          bn: "১. প্রোগ্রামিং আসলে কী?",
          en: "1. What is Programming Really?",
        },
      },
      {
        id: "dev-thinking-decomp",
        title: {
          bn: "২. ডেভেলপারদের চিন্তাপদ্ধতি ও সমস্যা বিশ্লেষণ",
          en: "2. How Developers Think & Decomposition",
        },
      },
      {
        id: "debugging-mindset",
        title: {
          bn: "৩. ডিবাগিং মনস্তত্ত্ব ও জুনিয়র বনাম সিনিয়র",
          en: "3. Debugging Mindset & Junior vs Senior",
        },
      },
      {
        id: "plan-before-code",
        title: {
          bn: "৪. কোড করার আগে পরিকল্পনা",
          en: "4. Think Before You Code",
        },
      },
      {
        id: "real-life-problem",
        title: {
          bn: "৫. বাস্তব উদাহরণ ও সাধারণ ভুলসমূহ",
          en: "5. Real-World Case Study & Pitfalls",
        },
      },
      {
        id: "ai-mentor-thinking",
        title: {
          bn: "৬. এআই ব্যবহারের সঠিক লজিক ও প্র্যাকটিস",
          en: "6. AI Logic & Daily Practice",
        },
      },
    ],
  },
  {
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
    sections: [
      {
        id: "why-people-fail",
        title: {
          bn: "১. বেশিরভাগ মানুষ কেন ব্যর্থ হয়?",
          en: "1. Why Most People Fail",
        },
      },
      {
        id: "learning-loop-tutorial-hell",
        title: {
          bn: "২. টিউটোরিয়াল হেল ও সঠিক লার্নিং সাইকেল",
          en: "2. Tutorial Hell & Learning Loop",
        },
      },
      {
        id: "practice-notes-strategy",
        title: {
          bn: "৩. ৭০/৩০ প্র্যাকটিস রুল ও নোট নেওয়ার পদ্ধতি",
          en: "3. Practice & Note-Taking Strategy",
        },
      },
      {
        id: "study-routine-ai-use",
        title: {
          bn: "৪. দৈনিক পড়ার রুটিন ও এআই এর ব্যবহার",
          en: "4. Daily Routine & AI for Learning",
        },
      },
      {
        id: "common-mistakes-bugs",
        title: {
          bn: "৫. সাধারণ ভুল ও এরর হ্যান্ডলিং",
          en: "5. Common Mistakes & Bug Handling",
        },
      },
      {
        id: "practice-tasks-mentor",
        title: {
          bn: "৬. বাস্তব অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice Tasks & AI Mentor Panel",
        },
      },
    ],
  },
  {
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
    sections: [
      {
        id: "ai-tutor-concept",
        title: {
          bn: "১. এআই আসলে কী আমাদের জন্য?",
          en: "1. What is AI for Developers?",
        },
      },
      {
        id: "wrong-vs-right-ai",
        title: {
          bn: "২. এআই এর ভুল ও সঠিক ব্যবহারের উদাহরণ",
          en: "2. Wrong vs Right Way",
        },
      },
      {
        id: "prompt-engineering-asking",
        title: {
          bn: "৩. কীভাবে ভালো প্রশ্ন করবেন?",
          en: "3. How to Ask Good Questions",
        },
      },
      {
        id: "ai-debugging-workflow",
        title: {
          bn: "৪. এআই ডিবাগিং ওয়ার্কফ্লো",
          en: "4. AI Debugging Workflow",
        },
      },
      {
        id: "ai-limitations-mindset",
        title: {
          bn: "৫. এআই এর সীমাবদ্ধতা ও প্রফেশনাল টিপস",
          en: "5. AI Limitations & Pro Tips",
        },
      },
      {
        id: "practice-ai-mentor",
        title: {
          bn: "৬. বাস্তব প্র্যাকটিস ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-5",
    number: 5,
    title: {
      bn: "অধ্যায় ৫: ডেভেলপার মাইন্ডসেট — গভীর চিন্তাপদ্ধতি ও সিস্টেম ডিজাইন",
      en: "Chapter 5: Developer Mindset — Deep Thinking System",
    },
    description: {
      bn: "কোড মুখস্থ না করে কীভাবে প্রফেশনালদের মতো সিস্টেম ডিজাইন করতে হয়, অ্যাবস্ট্রাকশন কী এবং বড় বড় প্রজেক্ট ভাঙকার বাস্তবসম্মত গাইড।",
      en: "Learn how professional software developers think deeply in systems, apply abstraction layers, decompose complex architectures, and plan before coding.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "deep-thinking-vs-shallow",
        title: {
          bn: "১. অগভীর বনাম গভীর চিন্তাপদ্ধতি",
          en: "1. Shallow vs Deep Thinking",
        },
      },
      {
        id: "system-thinking-layers",
        title: {
          bn: "২. সিস্টেমেটিক চিন্তাধারা ও লেয়ারড অ্যাবস্ট্রাকশন",
          en: "2. System Thinking & Layers",
        },
      },
      {
        id: "problem-breaking-rules",
        title: {
          bn: "৩. প্রবলেম ব্রেকিং ওয়ার্কফ্লো",
          en: "3. Problem Breaking Workflow",
        },
      },
      {
        id: "case-study-food-delivery",
        title: {
          bn: "৪. বাস্তব উদাহরণ: ফুড ডেলিভারি অ্যাপ",
          en: "4. Real-World Case Study: Food Delivery App",
        },
      },
      {
        id: "think-before-code-rule",
        title: {
          bn: "৫. কোডিংয়ের সুবর্ণ নিয়ম: পরিকল্পনা",
          en: "5. Think Before You Code",
        },
      },
      {
        id: "practice-mentor-mindset",
        title: {
          bn: "৬. প্র্যাকটিস টাস্ক ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-6",
    number: 6,
    title: {
      bn: "অধ্যায় ৬: কম্পিউটার ফান্ডামেন্টালস — যন্ত্রের ভেতরের গল্প",
      en: "Chapter 6: Computer Fundamentals — Inside the Machine",
    },
    description: {
      bn: "কম্পিউটার কীভাবে ডাটা প্রসেস করে, সিপিইউ, র‍্যাম এবং স্টোরেজের ভূমিকা এবং আপনার কোড কীভাবে হার্ডওয়্যার স্তরে রান করে।",
      en: "Understand how computers process instructions, the roles of CPU, RAM, and Storage, and how software code executes on physical hardware.",
    },
    difficulty: "beginner",
    readingTime: 12,
    sections: [
      {
        id: "what-is-computer",
        title: {
          bn: "১. কম্পিউটার আসলে কী ও কীভাবে কাজ করে?",
          en: "1. What is a Computer & Flow",
        },
      },
      {
        id: "cpu-brain",
        title: {
          bn: "২. সিপিইউ (CPU) — কম্পিউটারের চালিকাশক্তি",
          en: "2. CPU: Central Processing Unit",
        },
      },
      {
        id: "ram-vs-storage",
        title: {
          bn: "৩. র‍্যাম বনাম স্টোরেজ",
          en: "3. RAM vs Storage Memory",
        },
      },
      {
        id: "hardware-software-os",
        title: {
          bn: "৪. হার্ডওয়্যার, সফটওয়্যার ও অপারেটিং সিস্টেম",
          en: "4. Hardware, Software & OS",
        },
      },
      {
        id: "how-code-runs-restaurant",
        title: {
          bn: "৫. কোড রান হওয়ার সিক্রেট ও রেস্টুরেন্ট অ্যানালজি",
          en: "5. How Code Runs & Restaurant Analogy",
        },
      },
      {
        id: "practice-computer-mentor",
        title: {
          bn: "৬. কুইজ, প্র্যাকটিস ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-7",
    number: 7,
    title: {
      bn: "অধ্যায় ৭: কম্পিউটার হার্ডওয়্যার — যন্ত্রাংশের বিস্তারিত ব্যবচ্ছেদ",
      en: "Chapter 7: Computer Hardware — Deep Breakdown",
    },
    description: {
      bn: "সিপিইউ, র‍্যাম, রম, এসএসডি, জিপিউ এবং মাদারবোর্ডের গভীর মনস্তত্ত্ব ও কাজের নিখুঁত প্রবাহ।",
      en: "Explore details of computer hardware architecture including CPU pipelines, RAM volatile workspace, ROM boot instructions, GPU parallel visual shaders, and Motherboard circuitry.",
    },
    difficulty: "beginner",
    readingTime: 12,
    sections: [
      {
        id: "what-is-hardware-deep",
        title: {
          bn: "১. হার্ডওয়্যার পরিচিতি ও সিপিইউ-র ব্যবচ্ছেদ",
          en: "1. Hardware Intro & CPU Deep Dive",
        },
      },
      {
        id: "ram-rom-memory",
        title: {
          bn: "২. র‍্যাম বনাম রম মেমরি",
          en: "2. RAM & ROM Decoded",
        },
      },
      {
        id: "storage-gpu-artist",
        title: {
          bn: "৩. স্টোরেজ ও গ্রাফিক্স প্রসেসর",
          en: "3. SSD vs HDD & GPU Artist",
        },
      },
      {
        id: "motherboard-highway",
        title: {
          bn: "৪. মাদারবোর্ড — যোগাযোগের মহাসড়ক",
          en: "4. Motherboard Highway",
        },
      },
      {
        id: "system-flow-factory",
        title: {
          bn: "৫. ইনপুট/আউটপুট ও ফ্যাক্টরি অ্যানালজি",
          en: "5. System Flow & Factory Analogy",
        },
      },
      {
        id: "practice-hardware-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
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
    sections: [
      {
        id: "what-is-os-need",
        title: {
          bn: "১. অপারেটিং সিস্টেম কী ও কেন প্রয়োজন?",
          en: "1. What is OS & Why Needed",
        },
      },
      {
        id: "os-flow-types",
        title: {
          bn: "২. ওএস-এর প্রকারভেদ ও কাজ করার ফ্লো",
          en: "2. OS Flow & OS Types",
        },
      },
      {
        id: "process-memory-management",
        title: {
          bn: "৩. প্রসেস ও মেমরি ম্যানেজমেন্ট",
          en: "3. Process & Memory Management",
        },
      },
      {
        id: "file-system-ui",
        title: {
          bn: "৪. ফাইল সিস্টেম ও ইউজার ইন্টারফেস",
          en: "4. File System & GUI vs CLI",
        },
      },
      {
        id: "kernel-core-company",
        title: {
          bn: "৫. ওএস কার্নেল পরিচিতি ও কোম্পানি অ্যানালজি",
          en: "5. Kernel Intro & Company Analogy",
        },
      },
      {
        id: "practice-os-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
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
    sections: [
      {
        id: "what-is-file-system",
        title: {
          bn: "১. ফাইল সিস্টেম কী ও কেন প্রয়োজন?",
          en: "1. What is File System & Structure",
        },
      },
      {
        id: "directory-tree-folders",
        title: {
          bn: "২. ফোল্ডার বনাম ফাইল ও ডিরেক্টরি ট্রি",
          en: "2. Files vs Folders & Directory Tree",
        },
      },
      {
        id: "path-absolute-relative",
        title: {
          bn: "৩. পাথ কী? অ্যাবসোলিউট বনাম রিলেটিভ পাথ",
          en: "3. Path: Absolute vs Relative",
        },
      },
      {
        id: "why-matters-programming",
        title: {
          bn: "৪. প্রোগ্রামিংয়ে ফাইল সিস্টেমের গুরুত্ব",
          en: "4. Why it Matters in Coding",
        },
      },
      {
        id: "project-structure-analogy",
        title: {
          bn: "৫. প্রজেক্ট কাঠামো ও লাইব্রেরি অ্যানালজি",
          en: "5. Project Structure & Library Analogy",
        },
      },
      {
        id: "practice-fs-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-10",
    number: 10,
    title: {
      bn: "অধ্যায় ১০: ইন্টারনেট ফান্ডামেন্টালস — বৈশ্বিক নেটওয়ার্কের সহজ পাঠ",
      en: "Chapter 10: Internet Fundamentals (Global Network System)",
    },
    description: {
      bn: "ইন্টারনেট কীভাবে কাজ করে, আইপি অ্যাড্রেস ও ডিএনএস কী এবং ব্রাউজার কীভাবে সার্ভার থেকে ওয়েবসাইট লোড করে।",
      en: "Understand the global computer network, client-server models, data packetization, IP addresses, DNS lookups, and routing.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "what-is-internet-flow",
        title: {
          bn: "১. ইন্টারনেট কী ও কীভাবে কাজ করে?",
          en: "1. What is Internet & Flow",
        },
      },
      {
        id: "client-server-model",
        title: {
          bn: "২. ক্লায়েন্ট এবং সার্ভার মডেল",
          en: "2. Client & Server Model",
        },
      },
      {
        id: "data-packets-routers",
        title: {
          bn: "৩. ডাটা প্যাকেট ও রাউটার",
          en: "3. Data Packets & Routers",
        },
      },
      {
        id: "ip-address-dns",
        title: {
          bn: "৪. আইপি অ্যাড্রেস ও ডিএনএস",
          en: "4. IP Address & DNS",
        },
      },
      {
        id: "open-website-steps",
        title: {
          bn: "৫. ওয়েবসাইট ওপেন করার ক্রমানুসার",
          en: "5. Open Website Sequence",
        },
      },
      {
        id: "practice-network-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-11",
    number: 11,
    title: {
      bn: "অধ্যায় ১১: ব্রাউজার ফান্ডামেন্টালস — কীভাবে ওয়েবসাইট স্ক্রিনে ফুটে ওঠে",
      en: "Chapter 11: Browser Fundamentals (How Websites Render)",
    },
    description: {
      bn: "ব্রাউজার কীভাবে এইচটিএমএল, সিএসএস ও জাভাস্ক্রিপ্ট প্রসেস করে ডম (DOM) ট্রি তৈরি করে এবং ওয়েবসাইট স্ক্রিনে রেন্ডার করে।",
      en: "Learn how browsers fetch web assets, parse HTML into Document Object Models (DOM), compile CSS, execute Javascript scripts, and render pixels.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "what-is-browser-flow",
        title: {
          bn: "১. ব্রাউজার কী ও কাজ করার ধাপসমূহ",
          en: "1. What is a Browser & Flow",
        },
      },
      {
        id: "html-css-js-role",
        title: {
          bn: "২. এইচটিএমএল, সিএসএস ও জাভাস্ক্রিপ্টের ট্রায়ো",
          en: "2. HTML, CSS & JS Roles",
        },
      },
      {
        id: "rendering-process-dom",
        title: {
          bn: "৩. রেন্ডারিং কী ও ডম (DOM) ট্রি",
          en: "3. DOM & Rendering",
        },
      },
      {
        id: "page-load-stages",
        title: {
          bn: "৪. পেজ লোড হওয়ার ধাপে ধাপে ক্রমানুসার",
          en: "4. Page Load Execution Stages",
        },
      },
      {
        id: "browser-engines",
        title: {
          bn: "৫. ব্রাউজার ইঞ্জিন পরিচিতি",
          en: "5. Inside Browser Engines",
        },
      },
      {
        id: "practice-browser-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-12",
    number: 12,
    title: {
      bn: "অধ্যায় ১২: ওয়েবসাইট যেভাবে কাজ করে — ফুল স্ট্যাক আর্কিটেকচার",
      en: "Chapter 12: How Websites Work Internally (System Architecture)",
    },
    description: {
      bn: "ক্লায়েন্ট সাইড ফ্রন্টএন্ড, সার্ভার লজিক ব্যাকএন্ড, এপিআই ব্রিজ এবং ডেটাবেজ কীভাবে একসাথে মিলে একটি রিয়েল অ্যাপ্লিকেশন চালায়।",
      en: "Understand the three-tier web architecture: Frontend clients, Backend server logic, database storage, API communications, and JSON data flows.",
    },
    difficulty: "beginner",
    readingTime: 12,
    sections: [
      {
        id: "what-is-website-three-parts",
        title: {
          bn: "১. ওয়েবসাইট আসলে কী? তিন পিলারের গল্প",
          en: "1. What is a Website & 3 Pillars",
        },
      },
      {
        id: "frontend-vs-backend",
        title: {
          bn: "২. ফ্রন্টএন্ড বনাম ব্যাকএন্ড",
          en: "2. Frontend vs Backend Decoded",
        },
      },
      {
        id: "database-digital-warehouse",
        title: {
          bn: "৩. ডেটাবেজ — তথ্যের স্থায়ী ভাণ্ডার",
          en: "3. Database: Digital Warehouse",
        },
      },
      {
        id: "api-communication-bridge",
        title: {
          bn: "৪. এপিআই — যোগাযোগের রাজপথ",
          en: "4. What is an API?",
        },
      },
      {
        id: "full-system-flow-login",
        title: {
          bn: "৫. পূর্ণাঙ্গ সিস্টেম ফ্লো ও রিয়েল উদাহরণ",
          en: "5. Full System Flow & Login Sequence",
        },
      },
      {
        id: "practice-fullstack-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-13",
    number: 13,
    title: {
      bn: "অধ্যায় ১৩: এইচটিটিপি ও এইচটিটিপিএস — ওয়েব যোগাযোগের প্রোটোকল",
      en: "Chapter 13: HTTP & HTTPS (Web Communication Protocol)",
    },
    description: {
      bn: "ব্রাউজার ও সার্ভার কীভাবে প্রোটোকল মেনে কথা বলে, জিইটি (GET) ও পোস্ট (POST) মেথড কী এবং সিকিউর এনক্রিপশন ও স্ট্যাটাস কোড পরিচিতি।",
      en: "Understand the stateless HyperText Transfer Protocol (HTTP), SSL/TLS encryption (HTTPS), GET vs. POST request methods, and HTTP status codes.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "what-is-http-request",
        title: {
          bn: "১. এইচটিটিপি কী ও রিকোয়েস্ট-রেসপন্স লাইফসাইকেল",
          en: "1. What is HTTP & Request-Response",
        },
      },
      {
        id: "http-methods-get-post",
        title: {
          bn: "২. এইচটিটিপি মেথডসমূহ: জিইটি ও পোস্ট",
          en: "2. HTTP Methods: GET vs POST",
        },
      },
      {
        id: "what-is-https-encryption",
        title: {
          bn: "৩. এইচটিটিপিএস ও এনক্রিপশন লজিক",
          en: "3. What is HTTPS & Encryption",
        },
      },
      {
        id: "http-status-codes",
        title: {
          bn: "৪. এইচটিটিপি স্ট্যাটাস কোড পরিচিতি",
          en: "4. HTTP Status Codes Decoded",
        },
      },
      {
        id: "restaurant-order-analogy",
        title: {
          bn: "৫. রিয়েল লাইফ ফ্লো ও অর্ডার স্লিপ অ্যানালজি",
          en: "5. Web Flow & Ordering Analogy",
        },
      },
      {
        id: "practice-http-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-14",
    number: 14,
    title: {
      bn: "অধ্যায় ১৪: ডিএনএস ও ডোমেন সিস্টেম — যেভাবে ডোমেন নাম আইপিতে রূপান্তরিত হয়",
      en: "Chapter 14: DNS & Domain System (How google.com becomes IP)",
    },
    description: {
      bn: "ডোমেন নাম কী, আইপি ও ডিএনএসের কাজ এবং ব্রাউজার কীভাবে রুট, রিসলভার ও অথোরিটেটিভ সার্ভার পেরিয়ে আইপি খুঁজে বের করে।",
      en: "Learn about domain name hierarchies, Domain Name System (DNS) query flows, Root, TLD, and Authoritative nameservers, and IP address mappings.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "what-is-domain-ip",
        title: {
          bn: "১. ডোমেন নেম বনাম আইপি অ্যাড্রেস",
          en: "1. Domain Name vs IP Address",
        },
      },
      {
        id: "why-need-dns",
        title: {
          bn: "২. ডিএনএস কী ও কেন ডোমেন নেম প্রয়োজন?",
          en: "2. What is DNS & Why Domain Needed",
        },
      },
      {
        id: "dns-lookup-flow",
        title: {
          bn: "৩. ডিএনএস কীভাবে কাজ করে? ধাপে ধাপে ক্রমানুসার",
          en: "3. DNS Lookup Flow Steps",
        },
      },
      {
        id: "types-dns-servers",
        title: {
          bn: "৪. ডিএনএস সার্ভারের প্রকারভেদ ও ডোমেন কাঠামো",
          en: "4. Types of DNS Servers & Domain Suffix",
        },
      },
      {
        id: "phonebook-contact-analogy",
        title: {
          bn: "৫. কন্টাক্ট বুক ও ফোন নম্বর অ্যানালজি",
          en: "5. Phonebook Contact Analogy",
        },
      },
      {
        id: "practice-dns-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-15",
    number: 15,
    title: {
      bn: "অধ্যায় ১৫: হোস্টিং ও সার্ভার — যেখানে ওয়েবসাইটগুলো বেঁচে থাকে",
      en: "Chapter 15: Hosting & Servers (Where Websites Live)",
    },
    description: {
      bn: "সার্ভার কী, হোস্টিং ও ডেপ্লয়মেন্টের সহজ পাঠ এবং ডোমেনের সাথে হোস্টিং ক্যাবিনেট কানেক্ট করার সম্পূর্ণ সিকোয়েন্স।",
      en: "Learn about server architectures, hosting types (Shared, VPS, Dedicated, Cloud), application deployment pipelines, and domain-hosting connections.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "what-is-server-host",
        title: {
          bn: "১. সার্ভার কী ও হোস্টিং পরিচিতি",
          en: "1. What is a Server & Hosting",
        },
      },
      {
        id: "how-website-stored-runs",
        title: {
          bn: "২. সার্ভারে ওয়েবসাইট কীভাবে ফাইল স্টোর করে রান করায়?",
          en: "2. Website Storage & Run Flow",
        },
      },
      {
        id: "types-of-hosting",
        title: {
          bn: "৩. হোস্টিংয়ের প্রকারভেদ: শেয়ার্ড, ভিপিএস বনাম ক্লাউড",
          en: "3. Shared, VPS & Cloud Hosting",
        },
      },
      {
        id: "what-is-deployment",
        title: {
          bn: "৪. ডেপ্লয়মেন্ট কী ও ডোমেন-হোস্টিং কানেকশন",
          en: "4. Deployment & Domain Setup",
        },
      },
      {
        id: "shop-rent-analogy",
        title: {
          bn: "৫. দোকান ভাড়া ও পণ্যের ডিসপ্লে অ্যানালজি",
          en: "5. Shop Rent & Product Analogy",
        },
      },
      {
        id: "practice-hosting-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-16",
    number: 16,
    title: {
      bn: "অধ্যায় ১৬: গিট ও ভার্সন কন্ট্রোল — কোডের টাইম মেশিন",
      en: "Chapter 16: Git & Version Control",
    },
    description: {
      bn: "ভার্সন কন্ট্রোল কী, গিট ও রিপোজিটরি পরিচিতি এবং কমিট, ব্রাঞ্চিং ও গিটহাবের বেসিক টিম ওয়ার্ক ফ্লো।",
      en: "Learn about Version Control Systems (VCS), Git repositories, committing snapshots, branching models, merging codebase states, and GitHub hosting.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "what-is-version-control",
        title: {
          bn: "১. ভার্সন কন্ট্রোল কী ও গিটের পরিচিতি",
          en: "1. What is Version Control & Git",
        },
      },
      {
        id: "why-git-matters",
        title: {
          bn: "২. গিট কেন প্রয়োজন?",
          en: "2. Why Git is Important",
        },
      },
      {
        id: "repo-and-commit",
        title: {
          bn: "৩. রিপোজিটরি এবং কমিট — কোডের স্ন্যাপশট",
          en: "3. Repository & Commit",
        },
      },
      {
        id: "branching-merging-github",
        title: {
          bn: "৪. ব্রাঞ্চিং, মার্জিং ও গিটহাব পরিচিতি",
          en: "4. Branching, Merging & GitHub",
        },
      },
      {
        id: "photo-album-analogy",
        title: {
          bn: "৫. ছবির অ্যালবাম ও গিট ওয়ার্কফ্লো অ্যানালজি",
          en: "5. Photo Album & Workflow Analogy",
        },
      },
      {
        id: "practice-git-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-17",
    number: 17,
    title: {
      bn: "অধ্যায় ১৭: গিটহাব ও টিম কোলাবোরেশন — দলগতভাবে সফটওয়্যার ডেভেলপমেন্টের নিয়ম",
      en: "Chapter 17: GitHub & Collaboration Workflow",
    },
    description: {
      bn: "গিটহাব রেপো শেয়ারিং, ফোর্ক কী, এবং ব্রাঞ্চ ওয়ার্কফ্লো, পুল রিকোয়েস্ট (PR) ও কোড রিভিউর রিয়েল ইন্ডাস্ট্রি স্ট্যান্ডার্ড।",
      en: "Learn about collaborative software development, repository sharing, forking, Pull Requests (PR), code review best practices, and team workflows.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "what-is-github-team",
        title: {
          bn: "১. গিটহাব ও টিম কোলাবোরেশন কেন প্রয়োজন?",
          en: "1. What is GitHub & Teamwork",
        },
      },
      {
        id: "fork-branch-workflow",
        title: {
          bn: "২. ফোর্ক এবং ব্রাঞ্চিং ওয়ার্কফ্লো",
          en: "2. Fork & Feature Branches",
        },
      },
      {
        id: "pull-request-pr",
        title: {
          bn: "৩. পুল রিকোয়েস্ট কী ও কেন গুরুত্বপূর্ণ?",
          en: "3. What is a Pull Request?",
        },
      },
      {
        id: "code-review-conflicts",
        title: {
          bn: "৪. কোড রিভিউ ও মার্জ কনফ্লিক্ট এড়ানো",
          en: "4. Code Review & Merge Conflicts",
        },
      },
      {
        id: "office-project-analogy",
        title: {
          bn: "৫. অফিস প্রজেক্ট ও ফাইল জমা দেওয়ার অ্যানালজি",
          en: "5. Office Project Analogy",
        },
      },
      {
        id: "practice-collab-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
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
    sections: [
      {
        id: "what-is-javascript",
        title: {
          bn: "১. জাভাস্ক্রিপ্ট কী ও কোড কীভাবে রান করে?",
          en: "1. What is JS & How it Runs",
        },
      },
      {
        id: "js-variables-data-types",
        title: {
          bn: "২. ভ্যারিয়েবল এবং ডাটা টাইপ",
          en: "2. Variables & Data Types",
        },
      },
      {
        id: "js-functions",
        title: {
          bn: "৩. ফাংশন — পুনর্ব্যবহারযোগ্য কোড ব্লক",
          en: "3. Functions & Actions",
        },
      },
      {
        id: "js-conditionals-loops",
        title: {
          bn: "৪. কন্ডিশনাল ও লুপস — সিদ্ধান্ত ও পুনরাবৃত্তি",
          en: "4. Conditionals & Loops",
        },
      },
      {
        id: "brain-analogy-workflow",
        title: {
          bn: "৫. ব্রেইনের রূপক ও রিয়েল লজিক ফ্লো",
          en: "5. Logic Brain Analogy",
        },
      },
      {
        id: "practice-js-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-19",
    number: 19,
    title: {
      bn: "অধ্যায় ১৯: ডম ও ইভেন্টস — ব্রাউজার ইন্টারেক্টিভ লেয়ার",
      en: "Chapter 19: DOM & Events (Browser Interaction Layer)",
    },
    description: {
      bn: "ডকুমেন্ট অবজেক্ট মডেল (DOM) কী, কীভাবে এলিমেন্ট সিলেক্ট ও মডিফাই করা হয় এবং ইভেন্ট লিসেনারের সাহায্যে ডাইনামিক ইন্টারেক্টিভ ইউআই গড়ার সহজ পাঠ।",
      en: "Learn about the Document Object Model (DOM) tree, selecting query elements, modifying styles dynamically, handling user events, and building click actions.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "what-is-dom-tree",
        title: {
          bn: "১. ডম কী ও ডম ট্রি কাঠামো",
          en: "1. What is DOM & DOM Tree",
        },
      },
      {
        id: "selecting-elements",
        title: {
          bn: "২. এলিমেন্ট সিলেক্ট করার উপায়",
          en: "2. Selecting DOM Elements",
        },
      },
      {
        id: "modifying-content-style",
        title: {
          bn: "৩. কন্টেন্ট এবং স্টাইল পরিবর্তন করা",
          en: "3. Modifying Content & Styles",
        },
      },
      {
        id: "what-are-events-listeners",
        title: {
          bn: "৪. ইভেন্ট এবং ইভেন্ট লিসেনার",
          en: "4. What are Events & Listeners",
        },
      },
      {
        id: "smart-house-analogy",
        title: {
          bn: "৫. স্মার্ট হাউস ও সুইচবোর্ড অ্যানালজি",
          en: "5. Smart House Analogy",
        },
      },
      {
        id: "practice-dom-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-20",
    number: 20,
    title: {
      bn: "অধ্যায় ২০: এইচটিএমএল ফান্ডামেন্টালস — ওয়েবসাইটের কাঠামো নির্মাণ",
      en: "Chapter 20: HTML Fundamentals (Web Structure Building)",
    },
    description: {
      bn: "এইচটিএমএল কী, ট্যাগ ও এলিমেন্টের কাজ, হেড বনাম বডি এবং সিমেন্টিক ডিক্লেয়ারেশনের মাধ্যমে ওয়েবসাইটের মজবুত স্ট্রাকচার তৈরি।",
      en: "Understand HTML tags, nested elements, page structures, head vs. body compartments, and semantic markup layouts.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "what-is-html-markup",
        title: {
          bn: "১. এইচটিএমএল কী ও কীভাবে কাজ করে?",
          en: "1. What is HTML & Tags",
        },
      },
      {
        id: "basic-page-structure",
        title: {
          bn: "২. বেসিক পেজ স্ট্রাকচার: হেড বনাম বডি",
          en: "2. HTML Document Structure",
        },
      },
      {
        id: "common-html-tags",
        title: {
          bn: "৩. সাধারণ এইচটিএমএল ট্যাগ পরিচিতি",
          en: "3. Common HTML Tags",
        },
      },
      {
        id: "semantic-html-layout",
        title: {
          bn: "৪. সিমেন্টিক এইচটিএমএল ও আধুনিক পেজ লেআউট",
          en: "4. Semantic HTML & Layout",
        },
      },
      {
        id: "house-skeleton-analogy",
        title: {
          bn: "৫. ঘরের কঙ্কাল ও ওয়েবসাইটের কানেকশন অ্যানালজি",
          en: "5. House Skeleton Metaphor",
        },
      },
      {
        id: "practice-html-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-21",
    number: 21,
    title: {
      bn: "অধ্যায় ২১: সিএসএস ফান্ডামেন্টালস — ওয়েবসাইটের রূপসজ্জা",
      en: "Chapter 21: CSS Fundamentals (Styling the Web)",
    },
    description: {
      bn: "সিএসএস কী, কালার ও ফন্টস সেট করার নিয়ম, বক্স মডেলের মার্জিন ও প্যাডিং কনসেপ্ট এবং ফ্লেক্সবক্সের সাহায্যে চমৎকার রেস্পন্সিভ লেআউট গড়ার প্রাথমিক গাইড।",
      en: "Understand CSS syntax, inline/internal/external styling methods, colors, web typography, the box model margins and paddings, display behaviors, and flexbox alignments.",
    },
    difficulty: "beginner",
    readingTime: 12,
    sections: [
      {
        id: "what-is-css-styling",
        title: {
          bn: "১. সিএসএস কী ও কীভাবে কাজ করে?",
          en: "1. What is CSS & How to Inject it",
        },
      },
      {
        id: "colors-fonts-design",
        title: {
          bn: "২. কালার, ফন্ট ও ডিজাইনের বেসিক",
          en: "2. Colors, Fonts & Styles",
        },
      },
      {
        id: "the-box-model",
        title: {
          bn: "৩. সিএসএস বক্স মডেল — মার্জিন ও প্যাডিং",
          en: "3. The Essential Box Model",
        },
      },
      {
        id: "display-flexbox-intro",
        title: {
          bn: "৪. ডিসপ্লে প্রপার্টি এবং ফ্লেক্সবক্সের পরিচিতি",
          en: "4. Display & Flexbox Intro",
        },
      },
      {
        id: "interior-design-analogy",
        title: {
          bn: "৫. ইন্টেরিয়র ডিজাইন ও বক্স মডেলের রূপক",
          en: "5. Interior Design Metaphor",
        },
      },
      {
        id: "practice-css-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-22",
    number: 22,
    title: {
      bn: "অধ্যায় ২২: রেসপন্সিভ ডিজাইন — মোবাইল ফার্স্ট ওয়েব লেআউট",
      en: "Chapter 22: Responsive Design (Mobile First Web)",
    },
    description: {
      bn: "রেসপন্সিভ ডিজাইন কী, মোবাইল-ফার্স্ট অ্যাপ্রোচ, মিডিয়া কোয়েরি এবং ফ্লেক্স ও গ্রিডের সাহায্যে সকল ডিভাইসে খাপ খাইয়ে নেওয়ার লেআউট মেথড।",
      en: "Learn core responsive design principles, mobile-first strategies, media queries, flexbox/grid adaptation, and relative typography scaling units.",
    },
    difficulty: "intermediate",
    readingTime: 10,
    sections: [
      {
        id: "what-is-responsive-design",
        title: {
          bn: "১. রেসপন্সিভ ডিজাইন ও মিডিয়া কোয়েরি",
          en: "1. What is Responsive Design & Media Queries",
        },
      },
      {
        id: "mobile-first-concept",
        title: {
          bn: "২. মোবাইল-ফার্স্ট থিংকিং কেন প্রয়োজন?",
          en: "2. The Mobile-First Approach",
        },
      },
      {
        id: "flexbox-grid-responsive",
        title: {
          bn: "৩. রেসপন্সিভ লেআউটে ফ্লেক্সবক্স ও গ্রিড সিস্টেম",
          en: "3. Flex & Grid Adaptability",
        },
      },
      {
        id: "responsive-units-units",
        title: {
          bn: "৪. রিলেティブ ইউনিট ও লেআউট শিফটিং",
          en: "4. Relative Units: %, rem, vh, vw",
        },
      },
      {
        id: "water-container-analogy",
        title: {
          bn: "৫. পানির পাত্র ও লেআউট রূপান্তর অ্যানালজি",
          en: "5. Water Container Analogy",
        },
      },
      {
        id: "practice-responsive-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-23",
    number: 23,
    title: {
      bn: "অধ্যায় ২৩: টেইলউইন্ড সিএসএস — ইউটিলিটি ফার্স্ট ডিজাইন",
      en: "Chapter 23: Tailwind CSS (Utility First Styling)",
    },
    description: {
      bn: "টেইলউইন্ড সিএসএস কী, ইউটিলিটি-ফার্স্ট কনসেপ্ট, বেসিক স্পেসিফিকেশন ক্লাস এবং রেস্পন্সিভ ও কালার প্রিপারেশন নিয়ে দ্রুত ইউআই গড়ার গাইড।",
      en: "Learn about utility-first CSS frameworks, Tailwind spacing rules, typography, flexbox configurations, breakpoint prefixes, and colors design systems.",
    },
    difficulty: "beginner",
    readingTime: 10,
    sections: [
      {
        id: "what-is-tailwind-css",
        title: {
          bn: "১. টেইলউইন্ড সিএসএস ও ইউটিলিটি-ফার্স্ট ধারণা",
          en: "1. What is Tailwind & Utility-First",
        },
      },
      {
        id: "basic-utility-classes",
        title: {
          bn: "২. বেসিক ইউটিলিটি ক্লাস ও স্পেসিং",
          en: "2. Core Utilities & Spacing",
        },
      },
      {
        id: "tailwind-flex-responsive",
        title: {
          bn: "৩. টেইলউইন্ডে ফ্লেক্সবক্স ও রেস্পন্সিভ ব্রেকপয়েন্ট",
          en: "3. Flexbox & Breakpoints: sm, md, lg",
        },
      },
      {
        id: "tailwind-colors-card",
        title: {
          bn: "৪. কালার সিস্টেম ও কার্ড কম্পোনেন্ট তৈরি",
          en: "4. Colors & Step-by-Step Card",
        },
      },
      {
        id: "lego-blocks-analogy",
        title: {
          bn: "৫. লেগো ব্লক ও ইউআই বিল্ডিংয়ের অ্যানালজি",
          en: "5. LEGO Blocks Metaphor",
        },
      },
      {
        id: "practice-tailwind-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
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
    sections: [
      {
        id: "what-is-react-framework",
        title: {
          bn: "১. রিঅ্যাক্ট কী ও কেন ব্যবহার করা হয়?",
          en: "1. What is React & Component Design",
        },
      },
      {
        id: "react-components-jsx",
        title: {
          bn: "২. রিঅ্যাক্ট কম্পোনেন্ট ও জেএসএক্স",
          en: "2. React Components & JSX",
        },
      },
      {
        id: "react-props-concept",
        title: {
          bn: "৩. প্রপস (Props) — কম্পোনেন্টের ডেটা ট্রান্সফার",
          en: "3. Understanding React Props",
        },
      },
      {
        id: "component-tree-structure",
        title: {
          bn: "৪. কম্পোনেন্ট ট্রি আর্কিটেকচার",
          en: "4. The Component Tree Layout",
        },
      },
      {
        id: "lego-blocks-react-analogy",
        title: {
          bn: "৫. লেগো ব্লক ও রিঅ্যাক্ট রূপক",
          en: "5. LEGO Analogy in React",
        },
      },
      {
        id: "practice-react-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-25",
    number: 25,
    title: {
      bn: "অধ্যায় ২৫: রিঅ্যাক্ট স্টেট ও ইভেন্টস — ডাইনামিক ইউআই",
      en: "Chapter 25: React State & Events (Dynamic UI)",
    },
    description: {
      bn: "রিঅ্যাক্ট স্টেট কী, ইউজ-স্টেট (useState) হুকের পরিচিতি এবং বাটনে বা ইনপুটে ইউজার অ্যাকশন ইভেন্ট হ্যান্ডল করার বাস্তব গাইড।",
      en: "Learn about React state, the useState hook, and capturing user actions using interactive event handlers.",
    },
    difficulty: "beginner",
    readingTime: 12,
    sections: [
      {
        id: "what-is-state-concept",
        title: {
          bn: "১. স্টেট কী ও কেন প্রয়োজন?",
          en: "1. What is State & Why We Need It",
        },
      },
      {
        id: "use-state-hook",
        title: {
          bn: "২. ইউজ-স্টেট হুকের পরিচিতি",
          en: "2. The useState Hook",
        },
      },
      {
        id: "event-handling-react",
        title: {
          bn: "৩. রিঅ্যাক্টে ইভেন্ট হ্যান্ডলিং",
          en: "3. Event Handling in React",
        },
      },
      {
        id: "re-render-lifecycle",
        title: {
          bn: "৪. রি-রেন্ডার লাইফসাইকেল",
          en: "4. The Re-render Lifecycle",
        },
      },
      {
        id: "state-analogy-switch",
        title: {
          bn: "৫. সুইচ ও কাউন্টার অ্যানালজি",
          en: "5. Light Switch & Counter Analogy",
        },
      },
      {
        id: "practice-state-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-27",
    number: 27,
    title: {
      bn: "অধ্যায় ২৭: রিঅ্যাক্ট কম্পোনেন্ট প্যাটার্ন — রিয়েল প্রজেক্ট আর্কিটেকচার",
      en: "Chapter 27: React Component Patterns (Real Project Architecture)",
    },
    description: {
      bn: "কম্পোনেন্ট ডিজাইন প্যাটার্ন, কন্টেইনার বনাম প্রেজেন্টেশনাল প্যাটার্ন, কম্পোজিশন মডেল এবং রিয়েল-ওয়ার্ল্ড প্রজেক্ট ফোল্ডার স্ট্রাকচারের গাইড।",
      en: "Master component design patterns, Container vs. Presentational separation, Composition pattern, and scalable project directory architectures.",
    },
    difficulty: "intermediate",
    readingTime: 15,
    sections: [
      {
        id: "intro-patterns",
        title: {
          bn: "১. কম্পোনেন্ট প্যাটার্ন কী ও কেন গুরুত্বপূর্ণ?",
          en: "1. What are Component Patterns & Why They Matter",
        },
      },
      {
        id: "presentational-container",
        title: {
          bn: "২. প্রেজেন্টেশনাল বনাম কন্টেইনার কম্পোনেন্ট",
          en: "2. Presentational vs. Container Components",
        },
      },
      {
        id: "reusable-composition",
        title: {
          bn: "৩. পুনর্ব্যবহারযোগ্য ডিজাইন ও কম্পোজিশন প্যাটার্ন",
          en: "3. Reusable Design & Composition Pattern",
        },
      },
      {
        id: "prop-drilling-project-structure",
        title: {
          bn: "৪. প্রপ ড্রিলিং সমস্যা ও রিয়েল প্রজেক্ট ফোল্ডার কাঠামো",
          en: "4. Prop Drilling & Real Project Folder Structure",
        },
      },
      {
        id: "analogy-thinking-mistakes",
        title: {
          bn: "৫. ডিজাইন থিংকিং, সাধারণ ভুল এবং লেগো অ্যানালজি",
          en: "5. Design Thinking, Common Mistakes & LEGO Analogy",
        },
      },
      {
        id: "practice-patterns-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-28",
    number: 28,
    title: {
      bn: "অধ্যায় ২৮: নেক্সট জেএস পরিচিতি — রিয়েল ফুলস্ট্যাক রিঅ্যাক্ট যাত্রা",
      en: "Chapter 28: Next.js Introduction (Real Fullstack React Start)",
    },
    description: {
      bn: "নেক্সট জেএস কী, কেন রিঅ্যাক্ট অ্যাপ্লিকেশনকে প্রডাকশন লেভেলে নিতে নেক্সট জেএস ব্যবহার করা হয়, ফাইল-ভিত্তিক রাউটিং এবং সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্টের বেসিক ধারণা।",
      en: "Learn what Next.js is, why it scales React for production web apps, file-based routing, and the basics of Server vs. Client rendering.",
    },
    difficulty: "intermediate",
    readingTime: 12,
    sections: [
      {
        id: "intro-nextjs",
        title: {
          bn: "১. নেক্সট জেএস কী ও কেন শক্তিশালী?",
          en: "1. What is Next.js & Why It's Powerful",
        },
      },
      {
        id: "routing-structure",
        title: {
          bn: "২. ফাইল-ভিত্তিক রাউটিং ও বেসিক অ্যাপ কাঠামো",
          en: "2. File-Based Routing & Basic App Structure",
        },
      },
      {
        id: "server-vs-client",
        title: {
          bn: "৩. সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্ট ধারণা",
          en: "3. Server vs. Client Components Concept",
        },
      },
      {
        id: "industry-production",
        title: {
          bn: "৪. ইন্ডাস্ট্রিতে কেন নেক্সট জেএস ব্যবহৃত হয়?",
          en: "4. Why Next.js is Used in Industry",
        },
      },
      {
        id: "analogy-thinking-mistakes",
        title: {
          bn: "৫. সাধারণ ভুল ও পূর্ণাঙ্গ বাড়ি তৈরির রূপক",
          en: "5. Common Mistakes & Analogy",
        },
      },
      {
        id: "practice-nextjs-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-29",
    number: 29,
    title: {
      bn: "অধ্যায় ২৯: ইউআই কম্পোনেন্ট সিস্টেম — কার্ড ডিজাইন মাস্টারক্লাস",
      en: "Chapter 29: UI Component System (Card Design Masterclass)",
    },
    description: {
      bn: "ইউআই কম্পোনেন্ট সিস্টেম কী, আধুনিক ওয়েব অ্যাপ্লিকেশনে কার্ডের ভূমিকা, হোভার ইফেক্ট ও রেসপন্সিভ গ্রিড লেআউট সিস্টেম গড়ার প্রফেশনাল গাইড।",
      en: "Master UI component systems, the role of card containers, hover micro-animations, and responsive CSS grid layout configurations.",
    },
    difficulty: "intermediate",
    readingTime: 12,
    sections: [
      {
        id: "intro-ui-system",
        title: {
          bn: "১. ইউআই কম্পোনেন্ট সিস্টেম ও কার্ডের ধারণা",
          en: "1. UI Component System & The Card",
        },
      },
      {
        id: "card-structure-tailwind",
        title: {
          bn: "২. কার্ডের কাঠামো ও টেইলউইন্ড উদাহরণ",
          en: "2. Card Structure & Tailwind Example",
        },
      },
      {
        id: "hover-grid-system",
        title: {
          bn: "৩. হোভার ইম্প্যাক্ট ও রেসপন্সিভ গ্রিড লেআউট",
          en: "3. Hover Animations & Grid Layout System",
        },
      },
      {
        id: "saas-ui-design-thinking",
        title: {
          bn: "৪. রিয়েল SaaS ইউআই ও ডিজাইন প্রিন্সিপালস",
          en: "4. Real SaaS UI & Design Principles",
        },
      },
      {
        id: "mistakes-analogy",
        title: {
          bn: "৫. সাধারণ ভুল ও শপের তাকের রূপক",
          en: "5. Common Mistakes & Analogy",
        },
      },
      {
        id: "practice-ui-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
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
    sections: [
      {
        id: "project-overview",
        title: {
          bn: "১. প্রজেক্ট পরিচিতি ও ফোল্ডার কাঠামো",
          en: "1. Project Overview & Folder Structure",
        },
      },
      {
        id: "layout-navbar",
        title: {
          bn: "২. লেআউট সিস্টেম ও নেভিগেশন বার",
          en: "2. Layout System & Navbar Component",
        },
      },
      {
        id: "hero-card-integration",
        title: {
          bn: "৩. হিরো সেকশন ও কার্ড সিস্টেম ইন্টিগ্রেশন",
          en: "3. Hero Section & Card System Integration",
        },
      },
      {
        id: "responsive-communication",
        title: {
          bn: "৪. রেসপন্সিভ লেআউট ও কম্পোনেন্ট কমিউনিকেশন",
          en: "4. Responsive Design & Component Communication",
        },
      },
      {
        id: "mistakes-analogy",
        title: {
          bn: "৫. সাধারণ ভুল ও বিল্ডিং সিস্টেমের রূপক",
          en: "5. Common Mistakes & Analogy",
        },
      },
      {
        id: "practice-build-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-31",
    number: 31,
    title: {
      bn: "অধ্যায় ৩১: ব্যাকএন্ড পরিচিতি — নোড জেএস ও এপিআই-এর প্রাথমিক পাঠ",
      en: "Chapter 31: Backend Basics (Node.js & API Introduction)",
    },
    description: {
      bn: "ব্যাকএন্ড কী, নোড জেএস-এর কাজ করার ধরণ, এপিআই (API) এবং ফ্রন্টএন্ড বনাম ব্যাকএন্ডের রিকোয়েস্ট-রেসপন্স ফ্লো-র গাইড।",
      en: "Learn what backend is, Node.js architecture, APIs as bridges, and the Request-Response communication model.",
    },
    difficulty: "beginner",
    readingTime: 12,
    sections: [
      {
        id: "intro-backend",
        title: {
          bn: "১. ব্যাকএন্ড ও নোড জেএস এর ধারণা",
          en: "1. What is Backend & What is Node.js",
        },
      },
      {
        id: "api-concept-request",
        title: {
          bn: "২. এপিআই কী ও রিকোয়েস্ট যেভাবে কাজ করে",
          en: "2. What is an API & How Requests Work",
        },
      },
      {
        id: "simple-server-express",
        title: {
          bn: "৩. এক্সপ্রেস সার্ভারের সহজ কোড উদাহরণ",
          en: "3. Simple Express Server Example",
        },
      },
      {
        id: "frontend-backend-bridge",
        title: {
          bn: "৪. ফ্রন্টএন্ড ও ব্যাকএন্ড সংযোগ ও গুরুত্ব",
          en: "4. Frontend + Backend Connection & Importance",
        },
      },
      {
        id: "mistakes-analogy",
        title: {
          bn: "৫. সাধারণ ভুল ও রেস্টুরেন্ট কিচেনের রূপক",
          en: "5. Common Mistakes & Analogy",
        },
      },
      {
        id: "practice-backend-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-32",
    number: 32,
    title: {
      bn: "অধ্যায় ৩২: এক্সপ্রেস ও রেস্ট এপিআই — বাস্তব ব্যাকএন্ড নির্মাণ",
      en: "Chapter 32: Express.js & REST API (Real Backend Building)",
    },
    description: {
      bn: "এক্সপ্রেস জেএস ফ্রেমওয়ার্ক ব্যবহার করে রেস্ট এপিআই (REST API) ডিজাইন, রাউটিং সিস্টেম, ক্রাড (CRUD) অপারেশন এবং রিকোয়েস্ট পার্স করার বাস্তব গাইড।",
      en: "Master REST API design rules, routing systems, CRUD operations, and request parsing using Express.js.",
    },
    difficulty: "intermediate",
    readingTime: 12,
    sections: [
      {
        id: "intro-express-rest",
        title: {
          bn: "১. এক্সপ্রেস ও রেস্ট এপিআই এর ধারণা",
          en: "1. What is Express & What is REST API",
        },
      },
      {
        id: "http-methods-routes",
        title: {
          bn: "২. এইচটিটিপি মেথড ও রাউটিং সিস্টেম",
          en: "2. HTTP Methods & Routing System",
        },
      },
      {
        id: "crud-operations",
        title: {
          bn: "৩. ক্রাড অপারেশন ও বাস্তব এপিআই উদাহরণ",
          en: "3. CRUD Operations & Real API Examples",
        },
      },
      {
        id: "request-response-express",
        title: {
          bn: "৪. বেসিক এক্সপ্রেস সার্ভার ও রিকোয়েস্ট-রেসপন্স",
          en: "4. Basic Express Server, Request & Response",
        },
      },
      {
        id: "mistakes-analogy",
        title: {
          bn: "৫. সাধারণ ভুল ও রেস্টুরেন্ট ম্যানেজার রূপক",
          en: "5. Common Mistakes & Analogy",
        },
      },
      {
        id: "practice-express-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-33",
    number: 33,
    title: {
      bn: "অধ্যায় ৩৩: মঙ্গোডিবি ও ডেটাবেজ পরিচিতি — ডেটা স্টোরেজ ও নোএসকিউএল এর প্রাথমিক পাঠ",
      en: "Chapter 33: MongoDB & Database Basics (Data Storage Fundamentals)",
    },
    description: {
      bn: "ডেটাবেজ কী ও এর প্রয়োজনীয়তা, নোএসকিউএল (NoSQL) ও মঙ্গোডিবি কালেকশন ও ডকুমেন্ট কাঠামো এবং ক্লায়েন্ট-সার্ভার ডেটা ফ্লোর বিবরণ।",
      en: "Explore database persistence, NoSQL structures, MongoDB collections and documents models, and client-server backend data flows.",
    },
    difficulty: "beginner",
    readingTime: 12,
    sections: [
      {
        id: "intro-database",
        title: {
          bn: "১. ডেটাবেজ পরিচিতি ও এর প্রয়োজনীয়তা",
          en: "1. What is a Database & Why is it Needed",
        },
      },
      {
        id: "what-is-mongodb",
        title: {
          bn: "২. মঙ্গোডিবি পরিচিতি ও জনপ্রিয়তার কারণ",
          en: "2. What is MongoDB & Why is it Popular",
        },
      },
      {
        id: "collections-documents",
        title: {
          bn: "৩. কালেকশনস ও ডকুমেন্টস এর ধারণা",
          en: "3. Collections & Documents",
        },
      },
      {
        id: "backend-database-flow",
        title: {
          bn: "৪. ব্যাকএন্ড ও ডেটাবেজের তথ্যপ্রবাহ",
          en: "4. Backend & Database Data Flow",
        },
      },
      {
        id: "mistakes-analogy",
        title: {
          bn: "৫. সাধারণ ভুল ও লাইব্রেরির রূপক",
          en: "5. Common Mistakes & Analogy",
        },
      },
      {
        id: "practice-database-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-34",
    number: 34,
    title: {
      bn: "অধ্যায় ৩৪: এক্সপ্রেস ও মঙ্গোডিবি ইন্টিগ্রেশন — ডেটাবেজ সংযুক্ত ক্রাড এপিআই",
      en: "Chapter 34: MongoDB & Express Integration (Full CRUD System)",
    },
    description: {
      bn: "এক্সপ্রেস এপিআই সার্ভারকে মঙ্গুজ (Mongoose) এর মাধ্যমে মঙ্গোডিবি ডেটাবেজে সংযুক্ত করে সম্পূর্ণ অ্যাসিনক্রোনাস ক্রাড (CRUD) ব্যাকএন্ড প্রজেক্ট তৈরি করার গাইড।",
      en: "Connect Express.js APIs to MongoDB using Mongoose, creating a fully asynchronous data-driven CRUD backend application.",
    },
    difficulty: "intermediate",
    readingTime: 15,
    sections: [
      {
        id: "intro-crud-system",
        title: {
          bn: "১. সিস্টেম পরিচিতি ও মঙ্গোডিবি সংযোগ",
          en: "1. System Overview & Connecting MongoDB",
        },
      },
      {
        id: "data-models",
        title: {
          bn: "২. মঙ্গুজ ডাটা মডেল ও স্কিমা",
          en: "2. Mongoose Data Models & Schemas",
        },
      },
      {
        id: "crud-operations-mongodb",
        title: {
          bn: "৩. ডেটাবেজে ক্রাড (CRUD) অপারেশন",
          en: "3. CRUD Operations in MongoDB",
        },
      },
      {
        id: "real-project-crud",
        title: {
          bn: "৪. বাস্তব প্রজেক্টের এপিআই ও এর শক্তি",
          en: "4. Real Project Example & Power",
        },
      },
      {
        id: "mistakes-analogy",
        title: {
          bn: "৫. সাধারণ ভুল ও শপ ম্যানেজমেন্টের রূপক",
          en: "5. Common Mistakes & Analogy",
        },
      },
      {
        id: "practice-crud-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-35",
    number: 35,
    title: {
      bn: "অধ্যায় ৩৫: অথেন্টিকেশন সিস্টেম — সাইনআপ, লগইন ও জেডাব্লিউটি (JWT)",
      en: "Chapter 35: Authentication System (Login / Register + JWT)",
    },
    description: {
      bn: "পাসওয়ার্ড সিকিউরিটি হ্যাশিং (bcrypt), জেডাব্লিউটি (JWT) টোকেন চক্র, অ্যাক্সেস ও রিফ্রেশ টোকেন, কুকিজ এবং ও-অথ (OAuth) সহ মডার্ন অথেন্টিকেশন ফ্রেমওয়ার্কের মাস্টারক্লাস।",
      en: "Master secure user sessions, bcrypt password hashing, JWT token cycles (Access/Refresh), HTTP-only cookies, and OAuth via NextAuth/Better Auth.",
    },
    difficulty: "advanced",
    readingTime: 18,
    sections: [
      {
        id: "intro-auth-jwt",
        title: {
          bn: "১. অথেন্টিকেশন ও জেডাব্লিউটি (JWT) এর ধারণা",
          en: "1. What is Authentication & What is JWT",
        },
      },
      {
        id: "secure-bcrypt-cookies",
        title: {
          bn: "২. পাসওয়ার্ড হ্যাশিং ও সিকিউর কুকিজ",
          en: "2. Bcrypt Hashing & Secure Cookies",
        },
      },
      {
        id: "jwt-tokens-protected-routes",
        title: {
          bn: "৩. অ্যাক্সেস/রিফ্রেশ টোকেন ও প্রটেক্টেড রাউটস",
          en: "3. Access/Refresh Tokens & Protected Routes",
        },
      },
      {
        id: "modern-auth-frameworks",
        title: {
          bn: "৪. মডার্ন অথেন্টিকেশন ফ্রেমওয়ার্ক ও ও-অথ",
          en: "4. Modern Auth Frameworks & OAuth",
        },
      },
      {
        id: "mistakes-analogies",
        title: {
          bn: "৫. সাধারণ ভুল ও নিরাপত্তা সিস্টেমের রূপক",
          en: "5. Common Mistakes & Analogies",
        },
      },
      {
        id: "practice-auth-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-37",
    number: 37,
    title: {
      bn: "অধ্যায় ৩৭: ফুলস্ট্যাক ইন্টিগ্রেশন — একটি পূর্ণাঙ্গ প্রডাকশন সিস্টেম",
      en: "Chapter 37: Fullstack Integration (Complete System)",
    },
    description: {
      bn: "ফ্রন্টএন্ড (Next.js), ব্যাকএন্ড (Express), ডাটাবেজ (MongoDB) এবং অথেনটিকেশন (JWT) একসাথে যুক্ত করে একটি পূর্ণাঙ্গ সিস্টেম গড়ে তোলার প্রফেশনাল গাইড।",
      en: "Integrate frontend (Next.js), backend (Express), database (MongoDB), and auth layers (JWT/OAuth) to build a unified full-stack SaaS application.",
    },
    difficulty: "advanced",
    readingTime: 15,
    sections: [
      {
        id: "fullstack-architecture",
        title: {
          bn: "১. ফুলস্ট্যাক আর্কিটেকচার ও প্রজেক্ট কাঠামো",
          en: "1. Fullstack Architecture & Project Structure",
        },
      },
      {
        id: "end-to-end-data-flow",
        title: {
          bn: "২. এন্ড-টু-এন্ড ডাটা ফ্লো ও ফ্রন্টএন্ড সংযোগ",
          en: "2. End-to-End Data Flow & Frontend Integration",
        },
      },
      {
        id: "system-authentication",
        title: {
          bn: "৩. সিস্টেম অথেন্টিকেশন ও প্রটেক্টেড রাউটস",
          en: "3. System Authentication & Protected Routes",
        },
      },
      {
        id: "deployment-readiness",
        title: {
          bn: "৪. প্রডাকশন রেডি মাইন্ডসেট ও ডেপ্লয়মেন্ট",
          en: "4. Production Readiness & Deployment Mindset",
        },
      },
      {
        id: "mistakes-analogy",
        title: {
          bn: "৫. সাধারণ ভুল ও হাসপাতালের রূপক",
          en: "5. Common Mistakes & Analogies",
        },
      },
      {
        id: "practice-fullstack-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-a1",
    number: 38, // Mapping to Chapter 38 dynamically
    title: {
      bn: "অধ্যায় এ১: অ্যাডভান্সড ব্যাকএন্ড আর্কিটেকচার — প্রডাকশন কাঠামো",
      en: "Chapter A1: Advanced Backend Architecture (Production Structure)",
    },
    description: {
      bn: "একটি প্রফেশনাল কোম্পানির মতো ব্যাকএন্ড প্রজেক্ট স্ট্রাকচার করা, রাউট-কন্ট্রোলার-সার্ভিস ডিজাইন প্যাটার্ন এবং ক্লিন আর্কিটেকচার শেখার বাস্তব গাইড।",
      en: "Learn professional backend structuring, separation of concerns, and the Route-Controller-Service pattern used by tech companies.",
    },
    difficulty: "intermediate",
    readingTime: 12,
    sections: [
      {
        id: "why-structure-matters",
        title: {
          bn: "১. প্রজেক্ট কাঠামোর গুরুত্ব ও ক্লিন আর্কিটেকচার",
          en: "1. Why Structure Matters & Clean Architecture",
        },
      },
      {
        id: "routes-controllers-services",
        title: {
          bn: "২. রাউট, কন্ট্রোলার ও সার্ভিস লেয়ার",
          en: "2. Routes, Controllers & Services",
        },
      },
      {
        id: "middleware-system",
        title: {
          bn: "৩. মিডলওয়্যার সিস্টেম ও রিকোয়েস্ট ফিল্টার",
          en: "3. Middleware System & Request Filters",
        },
      },
      {
        id: "production-folder-structure",
        title: {
          bn: "৪. রিয়েল প্রজেক্টের ফোল্ডার স্ট্রাকচার ও তথ্যপ্রবাহ",
          en: "4. Real Folder Structure & Request Flow",
        },
      },
      {
        id: "factory-analogy-mistakes",
        title: {
          bn: "৫. কারখানার রূপক ও সাধারণ ভুলসমূহ",
          en: "5. Common Mistakes & Factory Analogy",
        },
      },
      {
        id: "practice-scalable-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-b1",
    number: 39, // Mapping to Chapter 39 dynamically
    title: {
      bn: "অধ্যায় বি১: নেক্সটঅথ ও মডার্ন অথেন্টিকেশন — ও-অথ ও সেশন পরিচিতি",
      en: "Chapter B1: NextAuth / Better Auth (Modern Authentication System)",
    },
    description: {
      bn: "নিজে কোডিং না করে প্রফেশনাল কোম্পানির মতো নেক্সটঅথ (NextAuth.js) ও ও-অথ (OAuth) সোশ্যাল লগইন এবং সেশন-ভিত্তিক নিরাপত্তা তৈরির বাস্তব গাইড।",
      en: "Integrate modern production auth frameworks like Auth.js/NextAuth, configuring Google/GitHub OAuth logins and managing session states.",
    },
    difficulty: "intermediate",
    readingTime: 12,
    sections: [
      {
        id: "intro-modern-auth",
        title: {
          bn: "১. মডার্ন অথেন্টিকেশন ও প্রডাকশন ইন্টিগ্রেশন",
          en: "1. What is Modern Auth & Why Industry Uses This",
        },
      },
      {
        id: "sessions-oauth",
        title: {
          bn: "২. সেশন-বেসড অথেনটিকেশন ও ও-অথ",
          en: "2. Session-Based Auth & OAuth Systems",
        },
      },
      {
        id: "nextauth-flow-protected",
        title: {
          bn: "৩. নেক্সটঅথ ফ্লো ও সুরক্ষিত রাউটস",
          en: "3. NextAuth Flow & Protected Routes",
        },
      },
      {
        id: "auth-power-limitations",
        title: {
          bn: "৪. নেক্সটঅথের শক্তি ও সীমাবদ্ধতা",
          en: "4. Why NextAuth is Powerful & Limitations",
        },
      },
      {
        id: "vip-club-metaphor",
        title: {
          bn: "৫. ভিআইপি ক্লাব রূপক ও সাধারণ ভুলসমূহ",
          en: "5. Common Mistakes & VIP Club Analogy",
        },
      },
      {
        id: "practice-auth-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
  {
    id: "chapter-b2",
    number: 40,
    title: {
      bn: "অধ্যায় বি২: মডার্ন অথেনটিকেশন ও বুকিং সিস্টেম ইন্টিগ্রেশন",
      en: "Chapter B2: Modern Auth & Booking System Integration",
    },
    description: {
      bn: "বেটার অথ (Better Auth), এক্সপ্রেস ও মঙ্গোডিবি ব্যবহার করে একটি সম্পূর্ণ নিরাপদ রুম/ইভেন্ট বুকিং সিস্টেম তৈরির বাস্তব গাইড।",
      en: "Learn to build a secure event/room booking system using Better Auth, Next.js JSX, MongoDB, and Node.js + Express.js.",
    },
    difficulty: "advanced",
    readingTime: 15,
    sections: [
      {
        id: "better-auth-intro",
        title: {
          bn: "১. মডার্ন অথেনটিকেশন ও বেটার অথ পরিচিতি",
          en: "1. Introduction to Better Auth & Modern Setup",
        },
      },
      {
        id: "booking-schema",
        title: {
          bn: "২. বুকিং সিস্টেম ডেটাবেজ স্কিমা",
          en: "2. Booking Database Schemas & MongoDB",
        },
      },
      {
        id: "backend-booking-endpoints",
        title: {
          bn: "৩. এক্সপ্রেস বুকিং ক্রাড এপিআই",
          en: "3. Express Booking CRUD Endpoint APIs",
        },
      },
      {
        id: "frontend-booking-ui",
        title: {
          bn: "৪. ফ্রন্টএন্ড বুকিং ইন্টারফেস ও ডাইনামিক ইউআই",
          en: "4. Next.js JSX Booking Viewport & UI",
        },
      },
      {
        id: "auth-booking-integration",
        title: {
          bn: "৫. সেশন ও সিকিউর এপিআই ইন্টিগ্রেশন",
          en: "5. Enforcing Security & Session Integration",
        },
      },
      {
        id: "practice-booking-mentor",
        title: {
          bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল",
          en: "6. Practice & AI Mentor Box",
        },
      },
    ],
  },
];























