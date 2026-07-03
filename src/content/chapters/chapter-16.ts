import { Chapter } from "@/types";

export const chapter16Content: Chapter = {
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
  objectives: [
    {
      bn: "ভার্সন কন্ট্রোল কী এবং এটি কীভাবে কোডের পরিবর্তনের ইতিহাস সেভ রাখে তা জানা।",
      en: "Grasp how Version Control Systems track code history.",
    },
    {
      bn: "গিট (Git) এবং রিপোজিটরি (Repository) এর কাজের কাঠামো বোঝা।",
      en: "Understand Git directory initializations and repositories.",
    },
    {
      bn: "কমিট (Commit) কী এবং এটি কীভাবে কোডের জন্য টাইম মেশিনের স্ন্যাপশট হিসেবে কাজ করে তা শেখা।",
      en: "Learn to use commits as visual checkpoint snapshots in code history timelines.",
    },
    {
      bn: "ব্রাঞ্চিং (Branching), মার্জিং (Merging) ও গিটহাব (GitHub) এর বেসিক ধারণা পাওয়া।",
      en: "Comprehend branching, merging, and GitHub cloud repositories.",
    },
  ],
  sections: [
    {
      id: "what-is-version-control",
      title: {
        bn: "১. ভার্সন কন্ট্রোল কী ও গিটের পরিচিতি (What is Version Control & Git)",
        en: "1. What is Version Control & Git",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা যখন কোনো প্রজেক্ট তৈরি করি, তখন কোড চেঞ্জ করার পর প্রায়ই ভুল হয়ে যায় এবং প্রজেক্ট ক্র্যাশ করে। তখন আমাদের মনে হয়: *"যদি ৫ মিনিট আগের কোডে ফেরত যেতে পারতাম!"* অথবা আমরা ফাইলের নাম দিই \`index_v1.html\`, \`index_v2_final.html\` ইত্যাদি। ডেভেলপাররা এই ম্যানুয়াল ঝামেলা এড়াতে এক ধরণের বিশেষ সফটওয়্যার টুল ব্যবহার করেন। এর নাম হলো **ভার্সন কন্ট্রোল সিস্টেম (Version Control System - VCS)**।

## Why should I learn this? (কেন শিখবো?)
পেশাদার সফটওয়্যার ডেভেলপমেন্টে গিট ছাড়া একটি দিনও কল্পনা করা যায় না। আপনি যখন কোনো জবে বা ইন্টার্নশিপে জয়েন করবেন, আপনাকে গিটের কমান্ড ব্যবহার করে টিমের অন্য হাজারো ডেভেলপারের সাথে একই সাথে একই কোডবেসে কাজ করতে হবে।

## What is Version Control? (ভার্সন কন্ট্রোল কী?)
সহজ কথায়: **ভার্সন কন্ট্রোল হলো এমন একটি সিস্টেম যা সময়ের সাথে সাথে আপনার কোড ফাইলের প্রতিটি ছোট-বড় পরিবর্তনের ইতিহাস বা হিস্টোরি ট্র্যাক করে সেভ রাখে।**

## What is Git? (গিট কী?)
**গিট (Git)** হলো পৃথিবীর সবচেয়ে জনপ্রিয় ডিস্ট্রিবিউটেড ভার্সন কন্ট্রোল সফটওয়্যার যা ২০০৫ সালে লিনাক্স ওএসের স্রষ্টা লিনুস তরভালদস (Linus Torvalds) তৈরি করেছিলেন। গিট সম্পূর্ণ লোকাল কম্পিউটারে রান করে এবং আপনার ডিরেক্টরির ফাইলের প্রতিটি লাইনের পরিবর্তন মনিটর করে।`,
        en: `## Introduction
Manual file versioning leads to lost histories and corrupt file maps. Version control tools solve these issues by tracking directories programmatically.

## What is Version Control?
A software system that records shifts made to files over time, enabling developers to recall specific versions later.

## What is Git?
Git is a distributed open-source version control command utility running locally on user terminals, created by Linus Torvalds in 2005.`,
      },
    },
    {
      id: "why-git-matters",
      title: {
        bn: "২. গিট কেন প্রয়োজন? (Why Git is Important)",
        en: "2. Why Git is Important",
      },
      content: {
        bn: `## Why Git is Important (গিটের গুরুত্ব)
গিট ব্যবহার না করলে আমাদের কী কী বড় সমস্যার সম্মুখীন হতে হতো তা দেখে নিই:

*   **কোড হারিয়ে যাওয়ার ভয়**: ভুল করে কোনো ফাইল ডিলিট বা এডিট করলে আগের কোড চিরতরে হারিয়ে যায়। গিটে এক ক্লিকে আগের যেকোনো অবস্থায় ফেরত যাওয়া যায়।
*   **ইতিহাস বা হিস্টোরির অভাব**: ১ বছর আগে কোডে কী চেঞ্জ করা হয়েছিল এবং কেন করা হয়েছিল, তার কোনো রেকর্ড থাকে না। গিট প্রতিটি কাজের মেসেজ ডায়েরির মতো সেভ রাখে।
*   **টিম ওয়ার্ক বা কোলাবোরেশন অসম্ভব**: একই ফাইলে ২ জন ডেভেলপার কাজ করতে গেলে একজনের কোড অন্যজনের কোড মুছে দিতে পারে। গিট স্বয়ংক্রিয়ভাবে দুজনের কোড মার্জ বা একত্রিত করতে সাহায্য করে।

---
## Git Capabilities (গিটের চমৎকার ক্ষমতা)
১. **টাইম ট্রাভেল (Time Travel)**: আপনি গত সপ্তাহে বা ১ বছর আগের যেকোনো কোডের অবস্থায় নিমেষেই সুইচ করতে পারবেন।
২. **নিরাপদ এক্সপেরিমেন্ট (Experiments)**: মূল কোড নষ্ট না করে নতুন কোনো কাস্টম ফিচার বানানোর ট্রায়াল দেওয়া যায়।
৩. **ব্যাকআপ (Backup)**: ইন্টারনেটে কোডের ফুল কপি ব্যাকআপ রাখা যায়।`,
        en: `## Why Git is Essential
*   **Risk Prevention**: Restores deleted directory files instantly.
*   **Tracked History**: Records change-logs detailing who edited which line and why.
*   **Team Collaboration**: Permits multiple engineers to write logic on the same files simultaneously without overwriting teammate lines.`,
      },
    },
    {
      id: "repo-and-commit",
      title: {
        bn: "৩. রিপোজিটরি এবং কমিট — কোডের স্ন্যাপশট (Repository & Commit)",
        en: "3. Repository & Commit",
      },
      content: {
        bn: `## What is a Repository? (রিপোজটরি বা রেপো কী?)
**রিপোজটরি (Repository / Repo)** হলো আপনার প্রজেক্টের সেই মূল ফোল্ডারটি যা গিট ট্র্যাক করছে।
*   আপনি যখন কোনো সাধারণ ফোল্ডারে গিট সচল করেন (কমান্ড: \`git init\`), তখন গিট সেই ফোল্ডারের ভেতরে একটি গোপন \`.git\` নামক ফোল্ডার তৈরি করে পুরো রিপোজিটরির ইতিহাস সেভ রাখা শুরু করে।

---
## The Commit: A Code Snapshot (কমিট কী?)
**কমিট (Commit)** হলো গিটের সবচেয়ে গুরুত্বপূর্ণ কাজ। 
*   **সহজ সংজ্ঞা**: কমিট হলো আপনার কোড প্রজেক্টের একটি নির্দিষ্ট মুহূর্তের স্ন্যাপশট (Snapshot) বা ছবি সেভ করে রাখা।
*   **কাজের নিয়ম**: আপনি যখন কোডে নতুন ২ লাইনের বাটন অ্যাড করলেন, আপনি গিটকে কমান্ড দিলেন: \`git commit -m "Add signup button"\`। গিট তখন আপনার প্রজেক্টের ওই মুহূর্তের চেকপয়েন্ট লক করে রাখবে।

## Commit Metaphor (গেম সেভ করার মতো)
কমিট করাকে ভাবুন কোনো অ্যাডভেঞ্চার ভিডিও গেম খেলার সময় গেম 'Save Checkpoint' করার মতো। আপনি যখন খেলায় কোনো কঠিন বসের সামনে পৌঁছান, আপনি গেম সেভ করেন। বসের হাতে মারা গেলে আপনি কিন্তু খেলা একদম শুরু থেকে শুরু করেন না, আপনি আপনার সেভ করা চেকপয়েন্ট (Commit) থেকেই রি-স্টার্ট করতে পারেন!`,
        en: `## What is a Repository?
A workspace folder monitored by Git. Activating it generates a hidden \`.git\` folder containing config databases.

## What is a Commit?
A snapshot checkpoint registering the exact states of files in the repository.

## Metaphor
Saving checkpoints in a video game. If a code experiment crashes the build, you don't start from scratch; you rollback to the last saved commit checkpoint.`,
      },
    },
    {
      id: "branching-merging-github",
      title: {
        bn: "৪. ব্রাঞ্চিং, মার্জিং ও গিটহাব পরিচিতি (Branching, Merging & GitHub)",
        en: "4. Branching, Merging & GitHub",
      },
      content: {
        bn: `## Branching: Parallel Worlds (ব্রাঞ্চিং কী?)
**ব্রাঞ্চিং (Branching)** হলো মূল কোডবেস থেকে একটি সমান্তরাল কপি বা শাখা তৈরি করা।
*   ডিফল্টভাবে গিট আপনার মূল কোডকে \`main\` বা \`master\` ব্রাঞ্চে রাখে।
*   ধরে নিন আপনি প্রজেক্টে একটি ডার্ক মোড ফিচার টেস্ট করতে চান। আপনি মূল কোড নষ্ট না করে \`dark-mode\` নামে নতুন একটি ব্রাঞ্চ বা শাখা তৈরি করলেন। এখানে আপনার ডার্ক মোডের কোড এডিট করলেও আপনার মূল \`main\` সাইটে কোনো এরর আসবে না।

---
## Merging: Combining Worlds (মার্জিং কী?)
ফিচারটি তৈরি করা শেষ হলে এবং কোনো বাগ বা এরর না থাকলে, আপনি সেই নতুন শাখাটিকে টেনে মূল শাখার সাথে জোড়া লাগিয়ে দিতে পারেন। এই জোড়া লাগানোর নামই হলো **মার্জিং (Merging)**।

---
## Git vs GitHub: The Cloud (গিট বনাম গিটহাব)
বিগিনারদের সবচেয়ে বড় ভুল হলো গিট এবং গিটহাবকে এক জিনিস ভাবা।
*   **গিট (Git)**: এটি হলো আপনার লোকাল কম্পিউটারে রান করা ভার্সন কন্ট্রোল সফটওয়্যার বা ইঞ্জিন। এর জন্য ইন্টারনেটের প্রয়োজন হয় না।
*   **গিটহাব (GitHub)**: এটি হলো একটি ক্লাউড বা অনলাইন প্ল্যাটফর্ম যেখানে ডেভেলপাররা তাদের তৈরি করা লোকাল গিট রিপোজিটরি ব্যাকআপ ও সংরক্ষণের জন্য আপলোড (Push) করে রাখেন। এটি হলো কোডের ফেসবুক!`,
        en: `## Branching
Creating an isolated development line branching from the \`main\` branch. E.g., working on a experimental dark-mode branch without breaking stable production codes.

## Merging
Re-integrating branch updates back into the target parent branch.

## Git vs. GitHub
*   **Git**: The local version control software engine running on your laptop without requiring internet connectivity.
*   **GitHub**: A cloud hosting service hosting git repositories online, facilitating collaboration and codebase shares.`,
      },
    },
    {
      id: "photo-album-analogy",
      title: {
        bn: "৫. ছবির অ্যালবাম ও গিট ওয়ার্কফ্লো অ্যানালজি (Photo Album & Workflow Analogy)",
        en: "5. Photo Album & Workflow Analogy",
      },
      content: {
        bn: `## The Photo Album Metaphor (ছবির অ্যালবাম রূপক)
সম্পূর্ণ গিট লাইফসাইকেলকে একটি ফ্যামিলি ছবির অ্যালবামের সাথে মিলিয়ে নিন:
*   **ফটো অ্যালবাম (Photo Album)**: প্রজেক্ট রিপোজিটরি (Repository)।
*   **ফটো বা স্ন্যাপশট (Photo)**: কমিট (Commit - যা অ্যালবাম ফাইলে ছবির মতো চেকপয়েন্ট লক করে রাখে)।
*   **ক্যাপশন বা লেবেল**: কমিট মেসেজ (Commit Message - ছবিতে যেমন লিখে রাখেন *"রাঙ্গামাটি ট্যুর ২০১৬",* গিটেও লেখেন *"Fixed login bug"*)।
*   **কাস্টম কার্ডবোর্ড আর্ট পেপার**: ব্রাঞ্চ (Branch - যেখানে মূল পাতা নষ্ট না করে আলাদা পাতায় নতুন নকশা ট্রাই করেন)।
*   **নকশার পাতাটি আঠা দিয়ে অ্যালবামে লাগানো**: মার্জিং (Merging)।

---
## The Professional Git Workflow (বাস্তব গিট ফ্লো)
১. **গিট ইনিট (\`git init\`)**: প্রজেক্ট ফোল্ডারে গিট ট্র্যাকিং স্টার্ট করা।
২. **গিট অ্যাড (\`git add\`)**: ফাইলগুলোকে কমিট করার জন্য স্টেজিং লাইনে দাঁড়ানো (Staging Area)।
৩. **গিট কমিট (\`git commit\`)**: স্ন্যাপশট চেকপয়েন্ট সেভ করা।
৪. **গিট পুশ (\`git push\`)**: লোকাল কমিটগুলো গিটহ্যাব ক্লাউডে আপলোড করা।`,
        en: `## Metaphor
*   **Photo Album**: Project Repository.
*   **Physical Photo Checkpoint**: Commit.
*   **Photo Caption**: Commit Message (e.g., "Adjust layout offsets").
*   **Scrapbook Page Add-on**: Branch.
*   **Gluing Page back to Main Album**: Merging.

## The Git Flow Command Sequence:
1. \`git init\`: Starts local tracking.
2. \`git add <file>\`: Stages modified files to the Staging area.
3. \`git commit -m "Message"\`: Creates a history snapshot checkpoint.
4. \`git push\`: Uploads local commits to remote GitHub clouds.`,
      },
      codeBlock: {
        fileName: "git_simulation.js",
        language: "javascript",
        code: `// গিট ভার্সন ট্র্যাকিং ও কমিট হিস্টোরি সিমুলেটর
class GitRepository {
  constructor() {
    this.commits = [];
    this.stagingArea = {};
  }

  // ১. ফাইল স্টেজিং লাইনে দাঁড় করানো
  stageFile(fileName, content) {
    this.stagingArea[fileName] = content;
    console.log(\`➕ Staged: "\${fileName}" স্টেজিং লাইনে যোগ হয়েছে।\`);
  }

  // ২. কমিট স্ন্যাপশট সেভ করা
  createCommit(message) {
    const commitId = "c-" + Math.floor(Math.random() * 9000 + 1000);
    const snapshot = { ...this.stagingArea };
    
    this.commits.push({ id: commitId, msg: message, files: snapshot });
    console.log(\`💾 Commit Success: [\${commitId}] - "\${message}" সেভ হয়েছে!\`);
    return commitId;
  }
}

const myRepo = new GitRepository();
myRepo.stageFile("index.html", "<h1>Hello World</h1>");
myRepo.stageFile("style.css", "h1 { color: red; }");
myRepo.createCommit("Init project layout");`,
        explanations: [
          {
            line: 9,
            text: {
              bn: "ফাইল মডিফাই করার পর সরাসরি কমিট না করে স্টেজিং এরিয়াতে (Staging Area) জমা করা।",
              en: "Staging files to define what gets packaged into the next commit snapshot.",
            },
          },
          {
            line: 14,
            text: {
              bn: "স্টেজিংয়ের ফাইলগুলো কপি করে একটি ডিক্লেয়ারেতির হিস্টোরি কমিট চেইনে লক করা।",
              en: "Creating a snapshot entry and appending it to the commit ledger log.",
            },
          },
        ],
      },
    },
    {
      id: "practice-git-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার গিট ডাইরেক্টরি নেভিগেশন এবং ব্রাঞ্চ ট্র্যাকিংয়ের ধারণা পরিষ্কার করবে।`,
        en: `## Reflection & Lab Tasks
Assess your git workflow commands before learning GitHub Pull Request team collaboration loops in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "গিটের ব্রাঞ্চিং লজিক জানলে আপনি মূল ওয়েবসাইট সচল রেখেই গিটহাবে নতুন ফিচারের ডেভেলপমেন্ট করতে পারবেন।",
          en: "Mastering branching logic ensures you write test codes in parallel environments without risking main deployment stability.",
        },
        whyWorks: {
          bn: "গিট মূলত ডিরেক্টরির ফাইলগুলোর ডিফারেন্স বা ডিআইএফএফ (diff) ক্যালকুলেট করে মেমরি লাইনে চেঞ্জ ট্র্যাক করে।",
          en: "Git calculates file delta differences (diffs) instead of copying entire files, keeping directory sizes compact.",
        },
        professionalThinking: {
          bn: "সিনিয়র ডেভেলপাররা কমিট মেসেজ লেখার সময় 'Conventional Commits' স্ট্যান্ডার্ড (যেমন: 'feat: add login page' বা 'fix: resolve button lag') অনুসরণ করেন।",
          en: "Seniors adopt Semantic Commits standards (e.g., 'feat:', 'fix:') to automate project changelogs.",
        },
        mistakes: {
          bn: "বিগিনারদের ভুল হলো ল্যাপটপের সব ফাইল একসাথে কমিট করা। নোড মডিউল বা ভারী লাইব্রেরি ফোল্ডার ইগনোর করতে '.gitignore' ফাইল তৈরি করতে হয়।",
          en: "Never commit vendor dependency directories (e.g., node_modules). Declare exclusions inside a '.gitignore' file.",
        },
        debugging: {
          bn: "কোড ভুল ট্র্যাকে চলে গেলে বা আগের কমিটে ফিরতে টার্মিনালে 'git checkout <commit-id>' বা 'git revert' কমান্ড ব্যবহার করুন।",
          en: "If a release crashes, execute 'git revert <commit-hash>' to roll back alterations while preserving history logs.",
        },
        performance: {
          bn: "গিট রিপোজিটরি হালকা রাখতে প্রজেক্টে ভারী ইমেজ বা ভিডিও ফাইল সরাসরি গিটে কমিট না করে সিডিএন বা ক্লাউড হোস্টে রাখুন।",
          en: "Keep repository sizes lean. Host heavy media binaries in cloud stores rather than tracking them inside git index files.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "gt-q1",
      question: {
        bn: "গিট (Git) এবং গিটহাব (GitHub) এর মধ্যে মূল তফাৎ কোনটি?",
        en: "What is the primary difference between Git and GitHub?",
      },
      options: [
        { bn: "গিট একটি ওয়েবসাইট এবং গিটহাব একটি কিবোর্ড শর্টকাট", en: "Git is a website, whereas GitHub is a keyboard shortcut" },
        { bn: "গিট হলো লোকাল কম্পিউটারের ভার্সন কন্ট্রোল ইঞ্জিন এবং গিটহাব হলো ইন্টারনেটে রেপো হোস্ট করার ক্লাউড প্ল্যাটফর্ম", en: "Git is the local version control software engine, whereas GitHub is the cloud platform hosting repositories online" },
        { bn: "কোনো পার্থক্য নেই", en: "There is no difference" },
        { bn: "গিটহাব দিয়ে কোড এডিট করা যায় না", en: "GitHub cannot host repositories files" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "গিট হলো লোকাল সফটওয়্যার যা অফলাইনে কোড ট্র্যাক করে এবং গিটহাব হলো ডিস্ট্রিবিউটেড রিমোট গিট হোস্টিং সার্ভিস।",
        en: "Git manages local indexes offline; GitHub stores copies online to enable team collaborations.",
      },
    },
    {
      id: "gt-q2",
      question: {
        bn: "গিটের ক্ষেত্রে কমিট (Commit) করার অর্থ কী?",
        en: "What does making a commit in Git represent?",
      },
      options: [
        { bn: "ফাইলগুলো পার্মানেন্ট ডিলিট করা", en: "Delete files permanently" },
        { bn: "প্রজেক্টের নির্দিষ্ট মুহূর্তের কোডের স্ন্যাপশট বা চেকপয়েন্ট স্থায়ীভাবে সেভ রাখা", en: "Save a snapshot checkpoint of the project workspace state permanently" },
        { bn: "সার্ভারে ফাইল আপলোড করা", en: "Upload files to web hosting servers" },
        { bn: "ব্রাউজার স্ক্রিন লক করা", en: "Lock browser layout display" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কমিট হলো গেম সেভ করার মতো প্রজেক্ট ফোল্ডারের বর্তমান অবস্থার একটি ইউনিক আইডি স্ন্যাপশট লক করা।",
        en: "Commits save snapshot logs, allowing developers to inspect or restore directory states.",
      },
    },
    {
      id: "gt-q3",
      question: {
        bn: "মূল কোড বা মেইন ব্রাঞ্চের কোনো ক্ষতি না করে নতুন এক্সপেরিমেন্ট করার জন্য গিটে কোনটি ব্যবহার করা হয়?",
        en: "Which Git feature isolates experimental features from the main code branch?",
      },
      options: [
        { bn: "Repository Delete", en: "Repository Delete" },
        { bn: "Branching (ব্রাঞ্চ তৈরি করা)", en: "Branching (Creating a branch)" },
        { bn: "Local Host Page", en: "Local Host Page" },
        { bn: "BIOS Boot Up", en: "BIOS Boot Up" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ব্রাঞ্চিং মূল ট্র্যাকিং পাথ বা main ব্রাঞ্চের সমান্তরাল আলাদা শাখা তৈরি করে কাজ করার সুবিধা দেয়।",
        en: "Branching isolates edits to protect production lines from unstable feature codes.",
      },
    },
    {
      id: "gt-q4",
      question: {
        bn: "ফাইল কমিট করার পূর্বে কোন স্টেজে বা ডিরেক্টরিতে রাখতে 'git add' কমান্ড ব্যবহার করা হয়?",
        en: "Which intermediate area holds modified files before they are committed?",
      },
      options: [
        { bn: "Cloud Hosting Area", en: "Cloud Hosting Area" },
        { bn: "Staging Area (স্টেজিং এরিয়া)", en: "Staging Area" },
        { bn: "BIOS Program", en: "BIOS Program" },
        { bn: "Database Storage", en: "Database Storage" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "স্টেজিং এরিয়া হলো একটি ইন্টারমিডিয়েট ওয়েটিং জোন যেখানে ফাইলগুলো কমিট স্ন্যাপশটের জন্য লিস্ট আপ করা হয়।",
        en: "The Staging area determines which modified files are packaged into the next commit snapshot.",
      },
    },
    {
      id: "gt-q5",
      question: {
        bn: "গিটে ব্রাঞ্চ বা শাখার কাজ সম্পন্ন হওয়ার পর তা মূল কোডের সাথে যুক্ত করার প্রোসেসকে কী বলে?",
        en: "What is the process of integrating branch updates back to the parent branch called?",
      },
      options: [
        { bn: "Branching", en: "Branching" },
        { bn: "Merging (মার্জিং)", en: "Merging" },
        { bn: "Deployment", en: "Deployment" },
        { bn: "DNS Propagation", en: "DNS Propagation" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "মার্জিং হলো পৃথক দুটি ব্রাঞ্চের ডিআইএফএফ ফাইল চেঞ্জ একত্রিত করে সিঙ্ক করে ফেলা।",
        en: "Merging integrates target branch modifications, consolidating delta differences into parent branches.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার প্রজেক্টের 'node_modules' এর মতো ভারী ফোল্ডারগুলো গিটের ট্র্যাকিং থেকে বাদ দিতে কোন বিশেষ ফাইলে লিখতে হয়? সংক্ষেপে লিখুন।",
      en: "Declare the name of the file used to exclude specific node directories from git tracking.",
    },
    {
      bn: "ভিডিও গেম সেভ করার রূপক ব্যবহার করে প্রজেক্টে 'git commit' এর গুরুত্ব ৩টি বাক্যে বুঝিয়ে লিখুন।",
      en: "Explain the importance of 'git commit' using game checkpoints metaphors.",
    },
    {
      bn: "টিম ডেভেলপমেন্টে ব্রাঞ্চিং কনসেপ্ট ব্যবহার না করলে কী মারাত্মক সমস্যা হতে পারে? নিজের ভাষায় ব্যাখ্যা করুন।",
      en: "Describe what code conflicts happen if multiple developers write codes without branching.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি প্রজেক্ট ভার্সন হিস্টোরি ও কমিট লগ কনফিগারেশন",
      en: "Project Commit History & Version Log Design",
    },
    description: {
      bn: "একটি প্রজেক্টের ইনিশিয়াল লেআউট তৈরি, ডার্ক মোড ফিচার ব্রাঞ্চিং ও সবশেষে কোড মার্জিংয়ের ৩টি কমিট স্ন্যাপশট ফ্লো অবজেক্ট তৈরি করে সাবমিট করুন।",
      en: "Model the commit logs of a feature lifecycle, defining hashes, commit messages, and branch names in a JS object.",
    },
    starterCode: `// Git Version History Timeline Schema
const gitVersionTimeline = {
  repositoryName: "my-react-dashboard",
  activeBranch: "main",
  commitHistory: [
    // প্রজেক্টের ধারাবাহিক ৩টি কমিটের হিস্টোরি ডেটা
  ],
  isMergeSuccessful: false
};`,
    solution: {
      code: `// Git Version History Timeline Completed
const gitVersionTimeline = {
  repositoryName: "my-react-dashboard",
  activeBranch: "main",
  commitHistory: [
    { hash: "c-1082", branch: "main", message: "feat: initialize dashboard core layout" },
    { hash: "c-2095", branch: "feature/dark-mode", message: "feat: add dark theme CSS properties" },
    { hash: "c-3104", branch: "main", message: "merge: integrate dark-mode feature branch" }
  ],
  isMergeSuccessful: true
};`,
      explanation: {
        bn: "চমৎকার ডিজাইন! ব্রাঞ্চ ফিচার থেকে সোর্স ম্যাপ ট্র্যাক করা ও মার্জিংয়ের স্ন্যাপশট ক্রমানুসারে সাজানোর পুরো ফ্লো অবজেক্টটি লজিক্যালি সম্পূর্ণ সঠিক হয়েছে।",
        en: "Structuring version timelines logs how teams track codebase iterations across feature lifecycles.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "স্টেজিং এরিয়া (Staging Area) কী এবং গিট কেন কোড সরাসরি কমিট না করে প্রথমে ফাইল স্টেজিংয়ে যুক্ত করতে বাধ্য করে?",
        en: "What is the Staging Area and why does Git require staging modified files before committing?",
      },
      answer: {
        bn: "স্টেজিং এরিয়া (বা Index) হলো কমিট করার আগের একটি প্রস্তুতকারী ট্রানজিশনাল ওয়েটিং এরিয়া। ধরুন আপনি আপনার প্রজেক্টের ৩টি ফাইলে কোড চেঞ্জ করেছেন (যেমন: index.html, style.css, script.js)। কিন্তু আপনি চান কেবল HTML ও CSS এর চেঞ্জগুলো একসাথে সেভ করতে, আর JS এর এক্সপেরিমেন্টটি পরে সেভ করতে। স্টেজিং এরিয়া না থাকলে আপনাকে সব চেঞ্জ একসাথে কমিট করতে হতো। গিটে আপনি \`git add index.html style.css\` দিয়ে কেবল দুটি ফাইল স্টেজিংয়ে তুললেন এবং কমিট করলেন। এটি ডেভেলপারকে কোন কোন ফাইলের চেঞ্জ কমিটে যাবে তা সূক্ষ্মভাবে বেছে নেওয়ার স্বাধীনতা দেয়।",
        en: "The Staging Area acts as a buffer layer between local working directories and commit history ledgers. If you alter 3 files but wish to bundle only 2 files into the next logical commit, staging allows you to selectively queue them using 'git add'. Without it, commits would capture all local modifications, cluttering repository history logs with incomplete updates.",
      },
    },
    {
      question: {
        bn: "গিট মার্জ করার সময় 'মার্জ কনф্লিক্ট' (Merge Conflict) কেন ঘটে এবং এটি কীভাবে সমাধান করতে হয়?",
        en: "Why do 'Merge Conflicts' occur in Git and how can developers resolve them?",
      },
      answer: {
        bn: "মার্জ কনফ্লিক্ট ঘটে যখন দুজন ডেভেলপার একই ফাইলের একই লাইনের কোড আলাদা আলাদা পরিবর্তন করেন এবং মার্জ করার চেষ্টা করেন। গিট তখন বুঝতে পারে না কোন ডেভেলপারের কোডটি রাখা উচিত এবং কোন কোডটি মুছে ফেলা উচিত। গিট তখন মার্জ প্রসেস পজ করে ফাইলে বিশেষ মার্কার চিহ্ন (যেমন: <<<<<<< HEAD এবং >>>>>>>) দিয়ে কনফ্লিক্ট অংশটি চিহ্নিত করে দেয়। ডেভেলপারকে তখন ফাইলটি এডিটর দিয়ে ওপেন করে টিমের সাথে আলোচনা করে অপ্রয়োজনীয় অংশটি কেটে সঠিক কোডটি রাখতে হয়, মার্কারগুলো মুছে ফাইলটি সেভ করতে হয় এবং পুনরায় \`git add\` ও \`git commit\` করে মার্জ সম্পূর্ণ করতে হয়।",
        en: "Merge Conflicts occur when concurrent branches modify the same line of code in the same file. Git halts the merge, writing conflict markers (<<<<<<<, =======, >>>>>>>) around the conflicting blocks. To resolve it, developers inspect the files, consult teammates to choose the correct logic lines, delete the conflict markers, save the files, and execute a fresh stage and commit cycle.",
      },
    },
  ],
};
