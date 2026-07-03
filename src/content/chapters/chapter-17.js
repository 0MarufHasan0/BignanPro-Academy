export const chapter17Content = {
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
  objectives: [
    {
      bn: "গিটহাব কীভাবে টিমওয়ার্ক সহজ করে এবং কোডের কনফ্লিক্ট এড়ায় তা জানা।",
      en: "Understand how GitHub simplifies teamwork and avoids codebase conflicts.",
    },
    {
      bn: "ফোর্ক (Fork) ও কাস্টম ব্রাঞ্চ (Feature Branch) এর কাজ করার আর্কিটেকচার শেখা।",
      en: "Master the mechanics of forking repositories and managing feature branches.",
    },
    {
      bn: "পুল রিকোয়েস্ট (PR - Pull Request) কীভাবে ওপেন এবং রিভউ করতে হয় তা জানা।",
      en: "Learn how to open, review, and merge Pull Requests.",
    },
    {
      bn: "পেশাদার কোড রিভিউ (Code Review) প্রক্রিয়ার নিয়ম ও গুরুত্ব আত্মস্থ করা।",
      en: "Grasp the value and conventions of professional code reviews.",
    },
  ],
  sections: [
    {
      id: "what-is-github-team",
      title: {
        bn: "১. গিটহাব ও টিম কোলাবোরেশন কেন প্রয়োজন? (What is GitHub & Teamwork)",
        en: "1. What is GitHub & Teamwork",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
গিট আমাদের লোকাল ল্যাপটপের কাজের ফাইল সেভ রাখে। কিন্তু যখন কোনো কোম্পানিতে ৫ বা ৫০ জন ইঞ্জিনিয়ার একই প্রজেক্টে (যেমন বিকাশ বা উবারের অ্যাপ) একসাথে কোড লেখেন, তখন তারা কীভাবে কাজ করেন? তারা কি পেনড্রাইভে কোড এক্সচেঞ্জ করেন? না, তারা ক্লাউডে একটি সেন্ট্রাল হাব ব্যবহার করে কোড সিঙ্ক করেন। এই বৈশ্বিক কোলাবোরেশন হাবের নামই হলো **GitHub (গিটহাব)**।

## Why should I learn this? (কেন শিখবো?)
সফটওয়্যার ইন্ডাস্ট্রি এককভাবে কাজ করার জগত নয়। এটি একটি টিম গেম। আপনি যখন কোম্পানির প্রজেক্টে কাজ করবেন, আপনাকে প্রতিদিন জুম কল বা স্ল্যাকে বসে পুল রিকোয়েস্ট (PR) এর মাধ্যমে কোড সাবমিট ও রিভিউ করতে হবে। এই ফ্লো না জানলে টিমে কো-অর্ডিনেট করা অসম্ভব।

## What is GitHub for Teams? (টিমের চোখে গিটহাব)
সহজ কথায়: **গিটহাব হলো কোডের ফেসবুক এবং অনলাইন স্টোরেজ। এটি টিমকে একটি কমন অনলাইন ডিরেক্টরি (Shared Repository) দেয় যেখানে সবাই যার যার ব্রাঞ্চ থেকে কোড পুশ করে একত্রিত করতে পারে।**

## Why Teams need GitHub (কেন গিটহাব জরুরি)
*   **সেন্ট্রাল কোডবেস (Central Codebase)**: প্রজেক্টের লেটেস্ট কোড সর্বদা মেঘে বা ক্লাউডে লাইভ সেভ থাকে।
*   **কোড চেক ও রিভিউ (Code Guard)**: জুনিয়ররা কোনো কোড সরাসরি লাইভ সাইটে আপলোড করতে পারেন না। সিনিয়াররা কোড এপ্রুভ বা রিভিউ করলেই তবে তা লাইভ মেইন ব্রাঞ্চে মার্জ হয়।`,
        en: `## Introduction
Programming in the software industry is a team sport. Collaborating on complex applications requires central cloud repositories to sync code updates securely.

## What is GitHub?
A central cloud hosting platform for Git repositories. It provides collaboration tools like issue tracking, Pull Requests (PRs), and code reviews.

## Why Teams Need GitHub
*   **Shared Source of Truth**: The latest stable build is hosted in one central location.
*   **Access Control**: Prevents junior developers or external contributors from introducing bugs directly into the production code.`,
      },
    },
    {
      id: "fork-branch-workflow",
      title: {
        bn: "২. ফোর্ক এবং ব্রাঞ্চিং ওয়ার্কফ্লো (Fork & Feature Branches)",
        en: "2. Fork & Feature Branches",
      },
      content: {
        bn: `## What is a Fork? (ফোর্ক কী?)
**ফোর্ক (Fork)** হলো অন্য কারো পাবলিক গিটহাব রিপোজিটরিকে এক ক্লিকে হুবহু কপি করে নিজের ব্যক্তিগত গিটহাব অ্যাকাউন্টে নিয়ে আসা।
*   ওপেন সোর্স কন্ট্রিবিউট করার সময় বা অন্যের প্রজেক্ট নিয়ে কাস্টমাইজ করার সময় ফোর্ক ব্যবহার করা হয়। ফোর্ক করা প্রজেক্টে আপনার ইচ্ছেমতো কোড এডিট করলেও মূল মালিকের প্রজেক্টের কোনো ক্ষতি হবে না।

---
## The Feature Branch Workflow (ফিচার ব্রাঞ্চ ফ্লো)
পেশাদার টিমে কেউ সরাসরি \`main\` বা \`master\` ব্রাঞ্চে কাজ করেন না। তারা একেকটি কাজের বা ফিচারের জন্য আলাদা আলাদা নামকরণ করে ব্রাঞ্চ তৈরি করেন:
*   \`feature/login-validation\`: লগইন ফর্মের কোডের জন্য।
*   \`feature/shopping-cart\`: শপিং কার্ট প্রসেসের জন্য।
*   \`bugfix/navbar-overlap\`: নেভিগেশন বারের বাগ ঠিক করার জন্য।

এটি ডেভেলপারদের কোডের ওভারল্যাপিং বা দ্বন্দ্ব এড়াতে সাহায্য করে।`,
        en: `## What is a Fork?
Creating a personal copy of another developer's public repository under your own GitHub account. Perfect for contributing to Open Source projects.

## The Feature Branch Workflow
Teams enforce branching rules. Developers create isolated branches representing specific features or bug fixes:
*   \`feature/login-form\`
*   \`feature/product-checkout\`
*   \`bugfix/header-alignment\`
This workflow prevents team members from rewriting the same code lines.`,
      },
    },
    {
      id: "pull-request-pr",
      title: {
        bn: "৩. পুল রিকোয়েস্ট কী ও কেন গুরুত্বপূর্ণ? (What is a Pull Request?)",
        en: "3. What is a Pull Request?",
      },
      content: {
        bn: `## What is a Pull Request (PR)? (পুল রিকোয়েস্ট কী?)
**পুল রিকোয়েস্ট (Pull Request / PR)** হলো গিটহাবের সবচেয়ে গুরুত্বপূর্ণ টিম ফিচার।

*   **সহজ সংজ্ঞা**: আপনি যখন ফিচার ব্রাঞ্চে কোনো কোড কমপ্লিট করে গিটহাবে পুশ করেন, তখন টিমের লিডারের কাছে আপনার কোডটি মূল প্রজেক্টে মার্জ বা জোড়া লাগানোর জন্য যে অফিসিয়াল রিকোয়েস্ট পাঠান—তাকেই **পুল রিকোয়েস্ট (PR)** বলে।

## The 5-Step PR Workflow (পিআর এর ৫টি ধাপ)
১. **ব্রাঞ্চ পুশ (Push)**: লোকাল কোড ব্রাঞ্চটি গিটহাবে পুশ করা।
২. **পিআর তৈরি (Open PR)**: গিটহাবে গিয়ে 'New Pull Request' বাটনে ট্যাপ করে একটি বিবরণী লেখা (যেমন: *"আমি কার্ড ডিজাইন এডিট করেছি"*)।
৩. **রিভিউ বা পরীক্ষা (Code Review)**: টিমের অন্যান্য কোডাররা আপনার কোড চেক করে ফিডব্যাক দেবেন।
４. **বাগ ফিক্স (Adjustments)**: রিভিউতে কোনো ভুল বের হলে তা পুনরায় ফিক্স করে পুশ করা।
৫. **মার্জ (Merge)**: লিডার এপ্রুভ করলে কোডটি মূল \`main\` বা প্রোডাকশন ডিরেক্টরিতে মার্জ হয়ে লাইভ হয়ে যাবে!`,
        en: `## Pull Request (PR)
A Pull Request (PR) is a proposal to merge a set of changes from your branch into another branch (usually \`main\`).

## The PR Lifecycle:
1. Push your local feature branch to GitHub.
2. Open a Pull Request on GitHub detailing your changes.
3. Teammates inspect the code diffs during code reviews.
4. Push additional commits to address feedback if needed.
5. The repository maintainer approves and merges the PR.`,
      },
    },
    {
      id: "code-review-conflicts",
      title: {
        bn: "৪. কোড রিভিউ ও মার্জ কনফ্লিক্ট এড়ানো (Code Review & Merge Conflicts)",
        en: "4. Code Review & Merge Conflicts",
      },
      content: {
        bn: `## Code Review: Learn & Share (কোড রিভিউ কী?)
**কোড রিভিউ (Code Review)** হলো টিমের সিনিয়ার বা সমমনা ডেভেলপারদের মাধ্যমে আপনার লেখা কোড সূক্ষ্মভাবে পরীক্ষা করা।
*   **কেন করা হয়**: কোডের পারফরম্যান্স ঠিক আছে কিনা, কোনো সিকিউরিটি বাগ আছে কিনা এবং টিমের কোডিং স্ট্যান্ডার্ড বজায় রাখা হয়েছে কিনা তা নিশ্চিত করার জন্য।
*   এটি জুনিয়রদের নতুন বেস্ট প্র্যাকটিস শিখতে সাহায্য করে।

---
## Resolving Team Merge Conflicts (টিম কনফ্লিক্ট এড়ানো)
যখন আপনার সতীর্থ কোনো ফাইলে কাজ করছেন এবং আপনিও একই ফাইলে কাজ করছেন, মার্জ করার সময় কনফ্লিক্ট তৈরি হতে পারে। 
*   **টিপস**: মার্জ কনফ্লিক্ট এড়ানোর সেরা প্রফেশনাল উপায় হলো কাজ শুরুর আগে এবং কাজ চলাকালীন সময়ে প্রতিদিন সকালে একবার \`git pull origin main\` কমান্ড দিয়ে টিমের আপডেট করা লেটেস্ট কোড নিজের লোকাল কম্পিউটারে নামিয়ে নিয়ে সিঙ্ক করে রাখা।`,
        en: `## Code Review
A quality assurance step where team members inspect proposed code changes. Reviews focus on optimization, bug prevention, security vulnerabilities, and naming conventions.

## Mitigating Team Merge Conflicts
To minimize merge conflicts, frequently execute \`git pull origin main\` to fetch and merge your team's latest changes into your local branch before committing.`,
      },
    },
    {
      id: "office-project-analogy",
      title: {
        bn: "৫. অফিস প্রজেক্ট ও ফাইল জমা দেওয়ার অ্যানালজি (Office Project Analogy)",
        en: "5. Office Project Analogy",
      },
      content: {
        bn: `## The Office Task Metaphor (অফিস টাস্ক রূপক)
গিটহাব কোলাবোরেশন ও পিআর ওয়ার্কফ্লোকে একটি প্রফেশনাল অফিস কোলাবোরেশন টিমের সাথে মিলিয়ে নিন:
*   **অফিস প্রজেক্ট ফাইল ক্যাবিনেট**: গিটহাব ক্লাউড রিপোজিটরি (Cloud Repository)।
*   **মূল ফাইল ফাইল কপি (Master File)**: মেইন ব্রাঞ্চ (\`main\` Branch)।
*   **ফাইল ফটোকপি করে ডেস্কে নিয়ে আসা**: ফোর্ক (Fork - নিজের ডেস্কে কপি নিয়ে ট্রায়াল দেওয়া)।
*   **কাজের জন্য একটি আলাদা খসড়া আর্ট পেপার নেওয়া**: ফিচার ব্রাঞ্চ (Feature Branch)।
*   **ম্যানেজারের টেবিলে কাজ জমা দিয়ে সাইন চাওয়া**: পুল রিকোয়েস্ট (Pull Request - যেখানে আপনি বলেন *"স্যার, আমার ফাইলটি চেক করে মূল ফোল্ডারে রেখে দিন"*)।
*   **ম্যানেজারের কলম দিয়ে ফাইল চেক করা ও ফিডব্যাক দেওয়া**: কোড রিভিউ (Code Review - যেখানে বস বলেন *"এই লাইনটি কেটে রি-রাইট করো"*।)।

---
## The Complete Developer Team Pipeline (বাস্তব টিম প্রসেস)
\`\`\`
Developer Workspace ➔ git branch ➔ code write ➔ git push ➔ GitHub Open PR ➔ Code Review Approved ➔ Merge to main ➔ Live Build
\`\`\``,
        en: `## Metaphor
*   **Shared Office Filing Cabinet**: Cloud GitHub Repository.
*   **Master Document Template**: Main Branch.
*   **Xeroxing Template to Your Desk**: Forking.
*   **Drafting Revisions on Sticky Note**: Feature Branching.
*   **Submitting Sticky Note to Manager**: Pull Request.
*   **Manager Editing and Approving**: Code Review & Merging.`,
      },
      codeBlock: {
        fileName: "github_workflow.js",
        language: "javascript",
        code: `// গিটহাব পুল রিকোয়েস্ট ও এপ্রুভাল পাইপলাইন
class PullRequest {
  constructor(branchName, author) {
    this.branch = branchName;
    this.author = author;
    this.reviews = [];
    this.isMerged = false;
  }

  // ১. সতীর্থ দ্বারা রিভিউ এপ্রুভাল
  addReview(reviewer, approved) {
    this.reviews.push({ reviewer, approved });
    console.log(\`💬 Review: \${reviewer} এপ্রুভ করেছেন: \${approved ? "✅ হ্যাঁ" : "❌ না"}\`);
  }

  // ২. মেইন ব্রাঞ্চে মার্জ প্রসেস
  mergeToMain() {
    const isApprovedByAll = this.reviews.every(rev => rev.approved);
    
    if (isApprovedByAll && this.reviews.length > 0) {
      this.isMerged = true;
      console.log(\`🚀 GitHub: PR [\${this.branch}] সফলভাবে main ব্রাঞ্চে মার্জ করা হয়েছে!\`);
    } else {
      console.log("❌ এরর: মার্জ রিজেক্ট করা হয়েছে! রিভিউ এপ্রুভাল প্রয়োজন।");
    }
  }
}

const loginPr = new PullRequest("feature/login-validation", "Tasnim");
loginPr.addReview("Amiya (Senior)", true);
loginPr.addReview("Nabil (Lead)", true);
loginPr.mergeToMain();`,
        explanations: [
          {
            line: 10,
            text: {
              bn: "টিম মেম্বাররা কোড ডিআইএফএফ চেক করে এপ্রুভাল দিলে তা রিভিউ ট্র্যাকিং অ্যারেতে সেভ হয়।",
              en: "Pushing teammate review outcomes into the PR tracking array database.",
            },
          },
          {
            line: 17,
            text: {
              bn: "যদি সকল রিভিউ এপ্রুভড হয়, তবে গিটহাব স্বয়ংক্রিয়ভাবে ফিচারটিকে মেইন প্রোডাকশন ব্রাঞ্চে মার্জ করে দেয়।",
              en: "Merging the branch state to production main branch if all reviewers approved.",
            },
          },
        ],
      },
    },
    {
      id: "practice-collab-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার গিটহাব টিম কোলাবোরেশন ও কোড রিভিউ প্রক্রিয়ার ধারণা পরিষ্কার করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your team workflow concepts before jumping into coding logic in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "টিম ওয়ার্কফ্লো বুঝলে আপনি খুব সহজে ওপেন সোর্স প্রজেক্টে বা হ্যাকাথনে অংশ নিয়ে অন্যদের সাথে কোলাবোরেটিভ সফটওয়্যার তৈরি করতে পারবেন।",
          en: "Understanding PR lifecycles allows you to collaborate globally, contributing patches to massive open source libraries.",
        },
        whyWorks: {
          bn: "গিটহাব পুল রিকোয়েস্ট তৈরি করার সময় পেছনের ওএস লাইব্রেরি মূলত সোর্স ব্রাঞ্চ এবং টার্গেট ব্রাঞ্চের গিট কমিট ডিআইএফএফ কম্পেয়ার করে।",
          en: "GitHub evaluates differences using git diff comparison libraries between source and target commits hashes.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা পিআর মার্জ করার আগে সর্বদা অটোমেটিক বিল্ড এবং টেস্ট স্ক্রিপ্ট (CI - Continuous Integration) সাকসেস হয়েছে কিনা চেক করেন।",
          en: "Seniors require passing automated unit tests (CI pipelines) before merging PRs into production main lines.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো বড় কোনো পিআর (১০০০ লাইনের চেঞ্জ) একবারে ওপেন করা। পিআর সর্বদা ছোট (১০০-২০০ লাইনের চেঞ্জ) রাখা উচিত যাতে রিভিউ করতে সহজ হয়।",
          en: "Keep Pull Requests small and atomic (under 200 lines). Giant PRs are difficult and slow to review.",
        },
        debugging: {
          bn: "কোড রিভিউতে সিনিয়াররা কমেন্ট আউট বা ইম্প্রুভমেন্ট দিলে তা রিজেক্ট মনে না করে নিজের লোকাল ব্রাঞ্চে কোড এডিট করে পুনরায় পুশ করলেই পিআর আপডেট হয়ে যায়।",
          en: "Don't close PRs to fix code review bugs. Push fresh commits to the same branch; GitHub updates the open PR automatically.",
        },
        performance: {
          bn: "কোডবেস হালকা রাখতে গিটহাবের সিআর (Code Owners) ফিচার ব্যবহার করে প্রজেক্টের নির্দিষ্ট ডিরেক্টরির জন্য স্পেসিফিক রিভিউয়ার লক করে রাখুন।",
          en: "Set up CODEOWNERS files to automatically assign designated code experts to review specific subdirectories.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "cb-q1",
      question: {
        bn: "গিটহাবের ক্ষেত্রে রিপোজিটরি ফোর্ক (Fork) করার সুবিধা ও অর্থ কী?",
        en: "What is the purpose of Forking a repository on GitHub?",
      },
      options: [
        {
          bn: "প্রজেক্টের ফাইল পার্মানেন্ট ডিলিট করা",
          en: "Delete repository files permanently",
        },
        {
          bn: "অন্য কোনো ডেভেলপারের পাবলিক রিপোজিটরিকে হুবহু কপি করে নিজের গিটহাব অ্যাকাউন্টে কাস্টম কাজের জন্য নিয়ে আসা",
          en: "Copy another developer's public repository under your own account for safe customization",
        },
        { bn: "কোডের ফাইল সাইজ কমানো", en: "Reduce code script storage size" },
        {
          bn: "কম্পিউটার অফলাইনে শাটডাউন দেওয়া",
          en: "Shutdown computer offline",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ফোর্ক করার অর্থ হলো অন্যের প্রজেক্ট নিজের প্রোফাইলে ক্লোন করা যাতে মূল প্রজেক্ট চেঞ্জ না করে ডেভেলপ করা যায়।",
        en: "Forking provides a sandbox copy of open-source directories for you to work on independently.",
      },
    },
    {
      id: "cb-q2",
      question: {
        bn: "পুল রিকোয়েস্ট (Pull Request / PR) এর প্রধান উদ্দেশ্য কী?",
        en: "What is the primary objective of a Pull Request?",
      },
      options: [
        {
          bn: "ইন্টারনেট কানেকশন স্পিড দ্বিগুণ করা",
          en: "Double internet bandwidth speed",
        },
        {
          bn: "নিজের ফিচার ব্রাঞ্চের কোড মূল বা মেইন প্রজেক্টে মার্জ করার জন্য রক্ষণাবেক্ষণকারীর কাছে অফিসিয়াল রিকোয়েস্ট পাঠানো",
          en: "Formally request the repository maintainer to merge changes from your branch into main",
        },
        { bn: "সবাইকে মেইল করা", en: "Email all organization members" },
        {
          bn: "প্রজেক্টের পাসওয়ার্ড ডিলিট করা",
          en: "Delete database credentials",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "পুল রিকোয়েস্ট হলো কোড মার্জ করার জন্য অফিশিয়াল গেটওয়ে বা ম্যানেজার এপ্রুভাল টাস্ক সাবমিশন।",
        en: "PRs prompt maintainers to review code modifications before merging them to core branches.",
      },
    },
    {
      id: "cb-q3",
      question: {
        bn: "টিম ডেভেলপমেন্টে কোড রিভিউ (Code Review) প্রক্রিয়ার মূল কাজ কী?",
        en: "What happens during a Code Review?",
      },
      options: [
        {
          bn: "শুধুমাত্র কোডের ফন্ট সাইজ বড় করা",
          en: "Increase text editor font sizes only",
        },
        {
          bn: "সতীর্থদের দ্বারা প্রস্তাবিত কোডের বাগ, পারফরম্যান্স ও সিকিউরিটি ভ্যালিডেশন চেক করা",
          en: "Inspect code changes for potential bugs, security issues, and style conventions",
        },
        {
          bn: "সার্ভার স্পিড পরিমাপ করা",
          en: "Measure server speeds directly",
        },
        {
          bn: "এইচটিএমএল ফাইল রি-রাইট করা",
          en: "Rewrite HTML files automatically",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কোড রিভিউ হলো সতীর্থদের দ্বারা কোডের মান চেক করা যাতে প্রজেক্টের কোড স্ট্যান্ডার্ড বজায় থাকে ও বাগ এড়ানো যায়।",
        en: "Teammates read the PR diff lines, suggesting optimizations or bugs fixes before deployment.",
      },
    },
    {
      id: "cb-q4",
      question: {
        bn: "পেশাদার সফটওয়্যার ডেভেলপমেন্ট টিমে 'ফিচার ব্রাঞ্চ' (Feature Branch) এর কাজ কী?",
        en: "What is the role of Feature Branches in software teams?",
      },
      options: [
        {
          bn: "সার্ভার কানেকশন অফ করা",
          en: "Turn off server instances connection",
        },
        {
          bn: "প্রতিটি পৃথক টাস্ক বা কাস্টম ফিচারের কাজ আলাদা ব্রাঞ্চে করা যাতে মূল মেইন কোডে বাগ না আসে",
          en: "Perform specific tasks or features on dedicated branches to avoid breaking the main code",
        },
        {
          bn: "প্রজেক্ট ফোল্ডার ডিলিট করা",
          en: "Delete working workspace folders",
        },
        { bn: "উইন্ডোজ ক্যাশে ক্লিয়ার করা", en: "Clear Windows OS caches" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ফিচার ব্রাঞ্চ প্রতিটি কাজের জন্য আলাদা ট্র্যাকিং এরিয়া দেয় যাতে একই সাথে অনেকে কোড এডিট করতে পারেন।",
        en: "Feature branches partition workloads, isolating experimental features from production branches.",
      },
    },
    {
      id: "cb-q5",
      question: {
        bn: "টিমে মার্জ কনফ্লিক্ট (Merge Conflict) এড়ানোর সবচেয়ে সহজ পেশাদার গিট প্র্যাকটিস কোনটি?",
        en: "What is the best daily git practice to minimize Merge Conflicts in team environments?",
      },
      options: [
        { bn: "সারাদিন কমিট না করা", en: "Never make git commits" },
        {
          bn: "কাজ শুরুর আগে ও কাজ চলাকালীন সময়ে নিয়মিত 'git pull origin main' দিয়ে কোড সিঙ্ক রাখা",
          en: "Sync frequently with 'git pull origin main' to pull down recent team updates",
        },
        {
          bn: "শুধুমাত্র লোকাল হোস্টে কাজ করা",
          en: "Run files strictly on localhost",
        },
        {
          bn: "গিটহাব অ্যাকাউন্ট ডিঅ্যাক্টিভেট করা",
          en: "Deactivate GitHub accounts profile",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "নিয়মিত মূল ব্রাঞ্চের আপডেট লোকাল ফোল্ডারে পুল করে মার্জ করে নিলে কোডের কনফ্লিক্ট সহজে সমাধান হয়ে যায়।",
        en: "Frequent pulling ensures local codebases don't drift too far from the team's remote main repository.",
      },
    },
  ],
  practice: [
    {
      bn: "গিটহাবে আপনি অন্যের কোডে একটি বাগ বা এরর পেলেন। সেটি ফিক্স করে তার মূল প্রজেক্টে অবদান রাখতে ফোর্ক ও পিআর ফ্লো কীভাবে কাজ করবে? লিখুন।",
      en: "Describe the Fork-and-PR sequence to contribute a bugfix to an open source project.",
    },
    {
      bn: "কোড রিভিউ করার সময় ৩টি বিষয় যা একজন রিভিউয়ারের অবশ্যই চেক করা উচিত তা ডেক্লারেটিভ ভাবে লিখুন।",
      en: "List 3 items reviewers look for when auditing teammate code commits.",
    },
    {
      bn: "ওপেন পুল রিকোয়েস্ট ক্লোজ না করেই কীভাবে আগের পিআর-এ নতুন এডিটের বাগ ফিক্স পুশ করা যায়? পদ্ধতিটি লিখুন।",
      en: "Explain how to push updates to an open PR without closing and recreating it.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি গিটহাব পুল রিকোয়েস্ট (PR) লাইফসাইকেল কনফিগারেশন",
      en: "GitHub Pull Request (PR) Lifecycle Design",
    },
    description: {
      bn: "একটি ফিচার ব্রাঞ্চ তৈরি, গিটহাবে পুশ, পিআর ওপেন ও সিনিয়ারদের রিভিউ এপ্রুভাল নিয়ে মার্জ করার সম্পূর্ণ প্রসেস অবজেক্ট তৈরি করে সাবমিট করুন।",
      en: "Model a Pull Request pipeline inside a JS configuration object representing the review-and-merge flow.",
    },
    starterCode: `// GitHub Pull Request Pipeline Schema
const githubPrPipeline = {
  prTitle: "feat: add user profile dashboard",
  sourceBranch: "feature/profile-dashboard",
  targetBranch: "main",
  reviewerApprovals: [
    // রিভিউয়ারদের রিভিউ এপ্রুভাল ট্র্যাকিং লিস্ট
  ],
  isMergeBlockedByConflicts: false,
  mergeActionComplete: false
};`,
    solution: {
      code: `// GitHub Pull Request Pipeline Approved
const githubPrPipeline = {
  prTitle: "feat: add user profile dashboard",
  sourceBranch: "feature/profile-dashboard",
  targetBranch: "main",
  reviewerApprovals: [
    { reviewer: "amiya_back", status: "APPROVED" },
    { reviewer: "nabil_lead", status: "APPROVED" }
  ],
  isMergeBlockedByConflicts: false,
  mergeActionComplete: true
};`,
      explanation: {
        bn: "অসাধারণ টিম ওয়ার্কফ্লো! পিআর ক্রিয়েট থেকে একাধিক সিনিয়ার এপ্রুভাল নিয়ে মার্জিং সম্পূর্ণ করার পুরো ফ্লোটি লজিক্যালি শতভাগ সঠিক হয়েছে।",
        en: "Structuring pull request states models how developers automate checks before code release.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "পুল রিকোয়েস্ট (Pull Request) বলতে কী বোঝায় এবং সফটওয়্যার কোয়ালিটি কন্ট্রোলে এটি কেন সবচেয়ে বড় গার্ড বা রক্ষাকবচ?",
        en: "What is a Pull Request and why is it crucial for codebase quality control?",
      },
      answer: {
        bn: "পুল রিকোয়েস্ট হলো ডেভেলপারের তৈরি করা ব্রাঞ্চ কোড মূল কোডবেসে যোগ করার জন্য অন্যান্য সতীর্থ ও মেইনটেইনারের কাছে পাঠানো একটি অফিশিয়াল প্রপোজাল। এটি সবচেয়ে বড় রক্ষাকবচ কারণ এটি কোডের ডাইরেক্ট মার্জ বন্ধ করে দেয়। পিআর ওপেন হলে সতীর্থরা চেঞ্জ করা লাইনের ডিআইএফএফ (diff) দেখে বাগ বের করতে পারেন, সিকিউরিটি ইস্যু ধরতে পারেন এবং স্বয়ংক্রিয় সিআই পাইপলাইন (GitHub Actions) কোড রান করে টেস্ট কেস সাকসেসফুল কিনা তা দেখে। এই গেটওয়ে থাকার কারণে কোনো ভাঙা কোড বা বাগ সরাসরি প্রোডাকশন সার্ভারে চলে গিয়ে অ্যাপ্লিকেশন ক্র্যাশ করাতে পারে না।",
        en: "A Pull Request (PR) is a formal proposal requesting to merge branch updates into main repositories. It acts as the ultimate quality controller by preventing developers from writing directly to production branches. Maintainers inspect code modifications line-by-line, locating issues before compilation. Automated verification steps run tests in parallel, blocking merges if unit assertions fail.",
      },
    },
    {
      question: {
        bn: "টিমে কাজ করার সময় গিটহাব ব্রাঞ্চিং স্ট্র্যাটেজি (যেমন: Git Flow) ব্যবহার করা কেন গুরুত্বপূর্ণ?",
        en: "Why is adopting a branching strategy (like Git Flow) important for developer teams?",
      },
      answer: {
        bn: "যখন বড় প্রজেক্টে একই সাথে ১০ জন ডেভেলপার কোড লেখেন, তখন সঠিক ব্রাঞ্চিং স্ট্র্যাটেজি (যেমন Git Flow বা Trunk-based Development) না থাকলে কে কোন ফিচার কখন মার্জ করছেন তার কোনো সমন্বয় থাকবে না। ব্রাঞ্চিং স্ট্র্যাটেজি নিয়ম ঠিক করে দেয়: \`main\` বা \`production\` ব্রাঞ্চ সর্বদা সম্পূর্ণ বাগ-মুক্ত রিলিজ কোড রাখবে; \`develop\` ব্রাঞ্চে নতুন সব ফিচার একত্রিত হবে; আর ডেভেলপাররা যার যার ফোল্ডার ব্রাঞ্চ তৈরি করে ফিচার প্রসেস করবেন। এটি করার ফলে রিলিজ ম্যানেজমেন্ট সহজ হয়, কাজ আলাদা থাকে এবং লাইভ প্রজেক্টের স্ট্যাবিলিটি অক্ষুণ্ণ থাকে।",
        en: "Without branching conventions, multi-developer codebases suffer chaotic state drifts. Branching strategies (like Git Flow) establish structures: \`main\` is locked, holding stable production codes; \`develop\` hosts integrated features; developers write logic on scoped feature branches. This maintains stability, facilitates release management, and isolates features during updates.",
      },
    },
  ],
};
