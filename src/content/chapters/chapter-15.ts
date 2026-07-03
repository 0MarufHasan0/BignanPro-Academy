import { Chapter } from "@/types";

export const chapter15Content: Chapter = {
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
  objectives: [
    {
      bn: "সার্ভারকে কোনো কাল্পনিক কুয়াশা না ভেবে এটি যে ২৪/৭ অন থাকা শক্তিশালী কম্পিউটার তা চেনা।",
      en: "Demystify servers as high-performance computers running 24/7.",
    },
    {
      bn: "হোস্টিংয়ের অর্থ এবং এটি কীভাবে ওয়েবসাইটকে ইন্টারনেটে স্পেস ভাড়া দেয় তা বোঝা।",
      en: "Understand hosting as renting partition space on remote internet-connected servers.",
    },
    {
      bn: "শেয়ার্ড, ভিপিএস (VPS) এবং ক্লাউড হোস্টিংয়ের মূল পার্থক্য ছক দিয়ে চেনা।",
      en: "Compare Shared, VPS, and Cloud hosting configurations.",
    },
    {
      bn: "লোকাল কম্পিউটার থেকে কোড সার্ভারে আপলোড বা ডেপ্লয় (Deploy) করার বেসিক প্রসেস শেখা।",
      en: "Grasp web application deployment pipelines to put code online.",
    },
  ],
  sections: [
    {
      id: "what-is-server-host",
      title: {
        bn: "১. সার্ভার কী ও হোস্টিং পরিচিতি (What is a Server & Hosting)",
        en: "1. What is a Server & Hosting",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা যখন ভিএস কোডে একটি সুন্দর পোর্টফোলিও ওয়েবসাইট ডিজাইন করি, সেটি কেবল আমাদের নিজেদের ল্যাপটপেই দেখা যায়। কিন্তু অন্য কেউ আমাদের কম্পিউটারে পেনড্রাইভ না ঢুকিয়ে সরাসরি ইন্টারনেট দিয়ে এই ওয়েবসাইট কীভাবে দেখবে? এর জন্য ওয়েবসাইটটিকে ইন্টারনেটে সর্বদা সচল রাখা কোনো কম্পিউটারে জমা রাখতে হবে। এই সিস্টেমের নামই হলো **হোস্টিং ও সার্ভার (Hosting & Servers)**।

## Why should I learn this? (কেন শিখবো?)
একজন ডেভেলপার হিসেবে কোড লেখা শেষ হলে তা ইন্টারনেটে রিলিজ বা ডেপ্লয় করতে হয়। হোস্টিং ও ক্লাউড সিস্টেমের ধারণা থাকলে আপনি খুব সহজে আপনার প্রজেক্ট ভার্সেল (Vercel), নেটলিফাই (Netlify) বা হিরোকু (Heroku) তে ফ্রিতে পাবলিশ করে বন্ধুদের দেখাতে পারবেন।

## What is a Server? (সার্ভার কী?)
সহজ কথায়: **সার্ভার হলো এমন একটি অত্যন্ত শক্তিশালী সাধারণ কম্পিউটার যা কোনো শাটডাউন ছাড়াই বছরের ৩৬৫ দিন, ২৪ ঘণ্টা অন থাকে এবং উচ্চ গতির ইন্টারনেটের সাথে যুক্ত থাকে।**

সার্ভারও আপনার ল্যাপটপের মতোই—এতে সিপিইউ (CPU), র‍্যাম (RAM), মাদারবোর্ড এবং ফাইল সেভ করার হার্ডডিস্ক থাকে। তবে এটি দেখতে মনিটর ছাড়া লোহা বা মেটালের বক্সের মতো হয় যা বড় ডেটা সেন্টারে (Data Center) এসি রুমে রাখা থাকে।

---
## What is Hosting? (হোস্টিং কী?)
**হোস্টিং (Hosting)** হলো সেই ২৪/৭ সচল সার্ভারের হার্ডডিস্ক বা স্টোরেজে আপনার ওয়েবসাইটের ফাইল সেভ রাখার জন্য নির্দিষ্ট জায়গা ভাড়া নেওয়া।
*   **রূপক**: আপনি যেমন জিমেইল ড্রাইভে আপনার ছবি রাখার স্পেস পান, তেমনি আপনার কোড ফাইল ও ইমেজ রাখার জন্য সার্ভারের স্টোরেজ স্পেস ভাড়া নেওয়াই হলো হোস্টিং।`,
        en: `## Introduction
Local apps run strictly inside local device sandboxes. To share applications globally, you must host files on internet-accessible storage nodes.

## What is a Server?
A dedicated computer designed to process requests and deliver data to other clients over local networks or the internet, running 24/7/365 without shutdown.

## What is Hosting?
Renting partition space on a remote server's hard drive to store project files (HTML, CSS, JS, images).`,
      },
    },
    {
      id: "how-website-stored-runs",
      title: {
        bn: "২. সার্ভারে ওয়েবসাইট কীভাবে ফাইল স্টোর করে রান করায়? (Website Storage & Run Flow)",
        en: "2. Website Storage & Run Flow",
      },
      content: {
        bn: `## How a Website is Stored (সার্ভারে যা থাকে)
আপনার কেনা হোস্টিং স্পেসের ফোল্ডারের ভেতরে আপনার ওয়েবসাইটের সমস্ত প্রয়োজনীয় ডাটা জমা থাকে:
১. **ফ্রন্টএন্ড ফাইল**: HTML, CSS, JavaScript এবং লোগো ও ইমেজ ফাইল।
২. **ব্যাকএন্ড স্ক্রিপ্ট**: Node.js, Python বা PHP এর স্ক্রিপ্ট ফাইল যা রান হতে প্রস্তুত থাকে।
৩. **ডেটাবেজ ডাটা**: ব্যবহারকারীদের ইউজারনেম, কমেন্ট ও মেসেজের রেকর্ড ফাইল।

---
## How a Server Works (সার্ভার প্রসেস ফ্লো)
যখন বিশ্বজুড়ে কোনো ইউজার আপনার ডোমেন ভিজিট করে, সার্ভার ব্যাকগ্রাউন্ডে নিচের সিকোয়েন্সে কাজ করে:

১. **অনুরোধ গ্রহণ (HTTP Request)**: সার্ভারে থাকা নেটওয়ার্ক কার্ড ইউজারের ব্রাউজার থেকে পাঠানো এইচটিএমএল বা ডাটার রিকোয়েস্ট ক্যাচ করে।
২. **ফাইল প্রসেসিং (CPU/RAM Execution)**: প্রসেসর ও র‍্যাম কোডের স্ক্রিপ্ট ফাইল প্রসেস করে ও ডেটাবেজ ফাইল কুয়েরি করে।
৩. **উত্তর পাঠানো (HTTP Response)**: সার্ভার ফাইলগুলোকে ডাটা প্যাকেট বানিয়ে ক্যাবলের মধ্য দিয়ে ইউজারের ব্রাউজারে ফেরত পাঠায়।`,
        en: `## Hosted Web Components
*   **Frontend Assets**: HTML structures, CSS style configurations, JS files, and images.
*   **Backend Scripts**: Active server-side engines (e.g., Express Node.js instances).
*   **Database Persistent files**: Relational tables or collections.

## Server Processing Cycle:
1. Receives incoming TCP/IP HTTP request packets.
2. RAM buffers instructions; CPU executes script calculations.
3. Network interface cards output HTTP response packets back to the client.`,
      },
    },
    {
      id: "types-of-hosting",
      title: {
        bn: "৩. হোস্টিংয়ের প্রকারভেদ: শেয়ার্ড, ভিপিএস বনাম ক্লাউড (Shared, VPS & Cloud Hosting)",
        en: "3. Shared, VPS & Cloud Hosting",
      },
      content: {
        bn: `## Types of Hosting (হোস্টিংয়ের ৪টি ধরণ)
ওয়েবসাইটের ট্রাফিক এবং বাজেটের ওপর ভিত্তি করে হোস্টিংকে প্রধানত ৪টি ক্যাটাগরিতে ভাগ করা হয়:

১. **শেয়ার্ড হোস্টিং (Shared Hosting)**:
   *   **লজিক**: একটি বড় শক্তিশালী কম্পিউটারের সিপিইউ, র‍্যাম ও স্টোরেজ একবারে ১০০টি ছোট ওয়েবসাইটের মালিকদের মাঝে ভাগ করে দেওয়া হয়।
   *   **সুবিধা**: অত্যন্ত কম খরচ (বিগিনারদের ব্লগের জন্য সেরা)।
   *   **অসুবিধা**: অন্য কারো সাইটে ট্রাফিক জ্যাম বা ভাইরাস এলে আপনার সাইটও স্লো বা ক্র্যাশ হতে পারে।
২. **ভিপিএস (Virtual Private Server - VPS)**:
   *   **লজিক**: ভার্চুয়ালাইজেশন সফটওয়্যার ব্যবহার করে একটি সার্ভারকে ফিজিক্যালি ভাগ না করে মেমরি ও সিপিইউ লেভেলে একেকটি ডেডিকেটেড ভার্চুয়াল কম্পিউটারে রূপ দেওয়া হয়।
   *   **সুবিধা**: আপনার স্পেস অন্য কেউ ডিস্টার্ব করতে পারবে না (মাঝারি প্রজেক্টের জন্য সেরা)।
   *   **অসুবিধা**: লিনাক্স কমান্ড ও মেইনটেনেন্স নিজেকে করতে হয়।
৩. **ডেডিকেটেড হোস্টিং (Dedicated Hosting)**:
   *   **লজিক**: পুরো একটি আস্ত ফিজিক্যাল কম্পিউটার কেবল আপনার ১টি ওয়েবসাইটের জন্য ভাড়া দেওয়া হয়।
   *   **সুবিধা**: সর্বোচ্চ সিকিউরিটি ও সুপার স্পিড।
   *   **অসুবিধা**: অত্যধিক খরচ (বড় ব্যাংক বা কর্পোরেট সার্ভারের জন্য)।
৪. **ক্লাউড হোস্টিং (Cloud Hosting)**:
   *   **লজিক**: একটি ফিজিক্যাল কম্পিউটারের বদলে বিশ্বজুড়ে ছড়িয়ে থাকা শত শত ইন্টারলিঙ্কড কম্পিউটার একসাথে কাজ করে।
   *   **সুবিধা**: কোনো সার্ভার নষ্ট হলেও অন্য সার্ভার পেজ লাইভ রাখে এবং ট্রাফিক বাড়লে অটোমেটিক মেমরি স্কেল আপ করা যায়।
   *   **উদাহরণ**: AWS (Amazon Web Services), Google Cloud Platform (GCP), Microsoft Azure।`,
        en: `## Hosting Classifications
*   **Shared Hosting**: Multiple sites partition resource limits of one server drive. Cost-effective but vulnerable to traffic spikes of neighboring sites (Shared apartment).
*   **VPS (Virtual Private Server)**: A single physical host split virtually into distinct root systems. Dedicated memory limits (Condo unit).
*   **Dedicated Hosting**: Entire hardware stack leased to one client (Private mansion).
*   **Cloud Hosting**: Cluster of interconnected virtual machines balancing compute workloads (Global grid networks). E.g., AWS, GCP, Azure.`,
      },
    },
    {
      id: "what-is-deployment",
      title: {
        bn: "৪. ডেপ্লয়মেন্ট কী ও ডোমেন-হোস্টিং কানেকশন (Deployment & Domain Setup)",
        en: "4. Deployment & Domain Setup",
      },
      content: {
        bn: `## What is Deployment? (ডেপ্লয়মেন্ট কী?)
ডেভেলপারের লোকাল ল্যাপটপ থেকে সম্পূর্ণ প্রজেক্ট বা সোর্স কোড সার্ভারের লাইভ হোস্টিং ডিরেক্টরিতে স্থানান্তর করে ওয়েবসাইটকে পাবলিকলি লাইভ করার প্রক্রিয়াকে **ডেপ্লয়মেন্ট (Deployment)** বলা হয়।

**ডেপ্লয়মেন্টের ৩টি সাধারণ ধাপ:**
১. লোকাল কম্পিউটারে কোড লিখে রেডি করা।
২. গিটহ্যাব (GitHub) বা ফাইল ট্রান্সফার প্রোটোকল (FTP) দিয়ে কোড হোস্টিংয়ে আপলোড করা।
৩. সার্ভারে স্টার্ট কমান্ড রান করে প্রজেক্ট লাইভ করা।

---
## Connecting Domain and Hosting (ডোমেন-হোস্টিং সংযোগ)
ডোমেন এবং হোস্টিং সম্পূর্ণ আলাদা কোম্পানি থেকে ক্রয় করলেও তাদের কানেক্ট করা খুবই সহজ:
*   **ডোমেন হলো সাইন বোর্ড (Address)** এবং **হোস্টিং হলো আসল বাড়ি (Server)**।
*   আপনি যখন হোস্টিং কিনবেন, হোস্টিং কোম্পানি আপনাকে ২টি নেমসার্ভার রেকর্ড (যেমন: \`ns1.bluehost.com\` ও \`ns2.bluehost.com\`) দেবে।
*   আপনি আপনার ডোমেন প্যানেলে ঢুকে নেমসার্ভার বক্সে এই দুটি মান সেভ করে দেবেন।
*   ডিএনএস সার্ভার ডোমেন নেমকে হোস্টিংয়ের সার্ভার আইপির সাথে লিঙ্ক করে প্রপাগেশন সম্পন্ন করবে ও সাইট লাইভ হবে!`,
        en: `## What is Web Deployment?
The process of transferring source files from developer laptops to production servers, making applications globally live.

## Connecting Domain to Hosting
*   Hosting provides numeric Nameservers (e.g., \`ns1.hostgator.com\`).
*   Domain configuration panels route records to point to these Nameservers.
*   DNS maps domain requests directly to the hosting server's public IP address.`,
      },
    },
    {
      id: "shop-rent-analogy",
      title: {
        bn: "৫. দোকান ভাড়া ও পণ্যের ডিসপ্লে অ্যানালজি (Shop Rent & Product Analogy)",
        en: "5. Shop Rent & Product Analogy",
      },
      content: {
        bn: `## The Complete Shopping Mall Metaphor (দোকান ভাড়া রূপক)
সম্পূর্ণ ডোমেন, হোস্টিং, সার্ভার ও ডেপ্লয়মেন্ট সিস্টেমকে একটি রিয়েল শপিং মল বিজনেস সিস্টেমের সাথে মিলিয়ে নিন:
*   **শপিং মল মার্কেট বিল্ডিং**: ইন্টারনেট সার্ভার ডাটা সেন্টার (Server Data Center)।
*   **মার্কেটের ফাঁকা দোকান স্পেস**: হোস্টিং (Hosting - যেখানে আপনি প্রতি মাসে মল কর্তৃপক্ষকে ভাড়া দিয়ে স্পেস ব্যবহার করেন)।
*   **দোকানের নামফলক / সাইন বোর্ড (Shop Name)**: ডোমেন নেম (Domain Name - কাস্টমার যেটি দেখে আপনার দোকানে ঢোকেন)।
*   **দোকানের ভেতরের জামাকাপড় ও মালপত্র**: ওয়েবসাইটের সোর্স ফাইল (HTML/CSS/JS কোড ফাইল)।
*   **দোকান সাজিয়ে নতুন মালপত্র বিক্রির জন্য ওপেন করা**: ডেপ্লয়মেন্ট (Deployment - জামাকাপড় র‍্যাকে সাজানো যাতে ক্রেতারা কিনতে পারেন!)।`,
        en: `## Metaphor
*   **Mall Building**: Server Data Center.
*   **Rented Retail Space**: Web Hosting (rented space on storage partitions).
*   **Store Signboard**: Domain name (leads users to your specific space).
*   **Inventory Products**: HTML/CSS/JS files inside directories.
*   **Arranging and Opening the Store**: Web Deployment.`,
      },
      codeBlock: {
        fileName: "server_deploy.js",
        language: "javascript",
        code: `// ডেপ্লয়মেন্ট পাইপলাইন ও সার্ভিস কনফিগারেশন সিমুলেটর
const localWorkspace = {
  projectFiles: ["index.html", "style.css", "server.js"],
  gitBranch: "main"
};

const cloudHostingServer = {
  serverIp: "13.233.102.14",
  nameservers: ["ns1.cloudhost.com", "ns2.cloudhost.com"],
  activeFiles: [],
  isAppRunning: false
};

function executeDeployPipeline(localPath, serverNode) {
  console.log("✈️ Deployment: গিটহাব অ্যাকশন পাইপলাইন ট্রিগার হয়েছে...");
  console.log("📤 Transferring files to Cloud VPS Server IP: " + serverNode.serverIp);
  
  // ফাইল কপি করা
  serverNode.activeFiles = [...localPath.projectFiles];
  
  // নোড প্রসেস সচল করা
  serverNode.isAppRunning = true;
  console.log("⚡ VPS Node Server: এপ্লিকেশন সার্ভার রান করা হয়েছে!");
  console.log("✅ Deployment Success: ওয়েবসাইটটি এখন লাইভ আছে!");
}

executeDeployPipeline(localWorkspace, cloudHostingServer);`,
        explanations: [
          {
            line: 15,
            text: {
              bn: "ডেপ্লয়মেন্ট স্ক্রিপ্ট লোকাল কোডবেস ডিরেক্টরি থেকে ফাইল ক্লোন করে ক্লাউড হোস্টিং হোস্টে আপলোড করে।",
              en: "Cloning source files from local workspace path and uploading to cloud host space.",
            },
          },
          {
            line: 18,
            text: {
              bn: "সার্ভারে এন্ট্রি স্ক্রিপ্ট (যেমন server.js) ট্রিগার করে পোর্ট লিসেনার সার্ভিস অন করা।",
              en: "Spawning process thread on server VM to listen to port requests.",
            },
          },
        ],
      },
    },
    {
      id: "practice-hosting-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার ডোমেন-হোস্টিং প্রপাগেশন এবং ডেপ্লয়মেন্ট লুপের ধারণা স্পষ্ট করবে।`,
        en: `## Reflection & Lab Tasks
Assess your hosting configurations before learning version control code tracking with Git in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "সার্ভারের আর্কিটেকচার বুঝলে আপনি ভার্সেল বা ক্লাউডফ্লেয়ার টার্গেট করে খুব সহজে মাত্র ১ ক্লিকে আপনার সাইট গ্লোবালি হোস্ট করতে পারবেন।",
          en: "Knowing hosting options allows you to choose serverless configurations, avoiding server runtime setup costs.",
        },
        whyWorks: {
          bn: "ভার্চুয়ালাইজেশন (যেমন Hyper-V বা Docker) একটি একক হার্ডওয়্যার প্ল্যাটফর্মে একাধিক ওএস কার্নেল আইসোলেট করে ভিপিএস তৈরি করে।",
          en: "Hypervisors run virtual machines on top of bare metal configurations, partitioning physical CPU cores.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা লোকাল উইন্ডোজ এনভায়রনমেন্ট থেকে সরাসরি সার্ভারে ফাইল না পাঠিয়ে গিটহাব ট্রিকার দিয়ে সিআই/সিডি (CI/CD) অটোমেটিক ডেপ্লয়মেন্ট সেটআপ করেন।",
          en: "Seniors implement CI/CD pipelines (GitHub Actions) to automate deploy builds upon pushing git commits.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো লোকাল ফাইলের পাথ (যেমন: C:\\Users\\project\\photo.jpg) কোডে রেখে দেওয়া। হোস্টিং সার্ভারে এই পাথ থাকবে না ও সাইটের ছবি ভাঙা দেখাবে।",
          en: "Avoid hardcoding local Windows paths (C:\\Users\\) in HTML files. Servers use UNIX path structures.",
        },
        debugging: {
          bn: "ডেপ্লয়মেন্টের পর সাইট না চললে ক্লাউড কন্ট্রোল প্যানেলে ঢুকে ডকার বা পিএম২ (pm2) এর এরর লগ (Error Logs) রিড করুন।",
          en: "Trace server console logs using SSH terminal commands (like 'pm2 logs') to identify boot crashes.",
        },
        performance: {
          bn: "সার্ভারের উপর ওভারলোড কমাতে কন্টেন্ট কম্প্রেশন বা জিজিপ (Gzip) ফাইল সেটিংস এনাবেল করে দিন।",
          en: "Enable Gzip compression inside server headers to shrink resource transits, improving load speeds.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "hs-q1",
      question: {
        bn: "সার্ভার (Server) বলতে ফিজিক্যালি মূলত কী বোঝায়?",
        en: "What physically is a server?",
      },
      options: [
        { bn: "একটি শুধুমাত্র তারবিহীন সফটওয়্যার প্রোগ্রাম", en: "A software program with no hardware base" },
        { bn: "মনিটরহীন ২৪ ঘণ্টা সচল থাকা ইন্টারনেটে যুক্ত একটি শক্তিশালী কম্পিউটার", en: "A powerful computer with no monitor, running 24/7 connected to the internet" },
        { bn: "গুগল ড্রাইভ অ্যাপ", en: "Google Drive mobile app" },
        { bn: "একটি মাউস প্যানেল", en: "A mouse panel" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সার্ভার হলো স্পেশাল শক্তিশালী সিপিইউ ক্যাবিনেট যা ডাটা সেন্টারে ইন্টারনেট লাইনে চব্বিশ ঘণ্টা সচল থাকে।",
        en: "Servers are standard computers optimized to run resource-heavy server software configurations.",
      },
    },
    {
      id: "hs-q2",
      question: {
        bn: "শেয়ার্ড হোস্টিং (Shared Hosting) এর মূল সীমাবদ্ধতা কোনটি?",
        en: "What is the primary drawback of Shared Hosting?",
      },
      options: [
        { bn: "এতে কোনো ডোমেন কানেক্ট করা যায় না", en: "Domains cannot be linked" },
        { bn: "কম্পিউটারের সিপিইউ-র্যাম অন্যান্য ১০০টি সাইটের সাথে ভাগাভাগি হওয়ায় সাইট স্লো হওয়ার রিস্ক থাকে", en: "CPU and RAM resources are shared with hundreds of sites, risking slow speeds" },
        { bn: "ভাড়া অনেক বেশি", en: "Extremely expensive renting cost" },
        { bn: "ফাইল সেভ করা যায় না", en: "Files cannot be saved" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "শেয়ার্ড হোস্টিংয়ে একই সার্ভারের প্রসেসর শেয়ার করায় অন্যান্য ওয়েবসাইটের ট্রাফিক স্পাইক আপনার সাইটকে ধীর করে দিতে পারে।",
        en: "Shared plans pack multiple configurations on one hardware node, causing resource competition.",
      },
    },
    {
      id: "hs-q3",
      question: {
        bn: "লোকাল ল্যাপটপের কোড ফাইল হোস্টিং সার্ভারে আপলোড করে লাইভ করার প্রোসেসকে কী বলে?",
        en: "What is the process of uploading local code files to production servers called?",
      },
      options: [
        { bn: "কম্পাইলেশন", en: "Compilation" },
        { bn: "ডেপ্লয়মেন্ট (Deployment)", en: "Deployment" },
        { bn: "BIOS বুটিং", en: "BIOS Booting" },
        { bn: "মেমরি পেজিং", en: "Memory Paging" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডেপ্লয়মেন্ট মানে লোকাল ফোল্ডারের ফাইল রিমোট সার্ভার ক্যাবিনেটের লাইভ ফোল্ডারে পুশ করা।",
        en: "Deployment copies and builds project artifacts in the target environment hosting space.",
      },
    },
    {
      id: "hs-q4",
      question: {
        bn: "ডোমেন নামের সাথে হোস্টিং স্পেস কানেক্ট করার জন্য কোন রেকর্ডটি ডোমেন প্যানেলে যুক্ত করতে হয়?",
        en: "Which record connects a domain name to a hosting space?",
      },
      options: [
        { bn: "ফাইল ইনডেক্স", en: "File Index" },
        { bn: "নেমসার্ভার রেকর্ড (Nameservers / NS Records)", en: "Nameservers / NS Records" },
        { bn: "কপিরাইট লাইসেন্স", en: "Copyright License" },
        { bn: "র‍্যাম ভেরিয়েবল", en: "RAM Variable" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "নেমসার্ভার রেকর্ড (যেমন ns1.host.com) ডোমেনকে নির্দেশ করে তার ফাইল হোস্ট করার সঠিক ডেটা সার্ভার কোনটি।",
        en: "Nameservers (NS records) delegate DNS authority to point requests to target hosting directories.",
      },
    },
    {
      id: "hs-q5",
      question: {
        bn: "AWS বা Google Cloud এর মতো ক্লাউড হোস্টিংয়ের মূল চমৎকার সুবিধা কোনটি?",
        en: "What is a major advantage of Cloud Hosting platforms like AWS or GCP?",
      },
      options: [
        { bn: "এগুলো সম্পূর্ণ ফ্রিতে পাওয়া যায়", en: "They are always free of cost" },
        { bn: "ট্রাফিকের চাহিদা অনুযায়ী সিপিইউ ও র্যাম অটোমেটিক বাড়ানো বা স্কেল (Scale) করা যায়", en: "Compute resources can scale up dynamically in response to traffic changes" },
        { bn: "এতে কোনো কোড লিখতে হয় না", en: "No code writing is required" },
        { bn: "ইন্টারনেটের স্পিড বাড়ানো বন্ধ করা যায়", en: "Stop internet speeds from shifting" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ক্লাউড হোস্টিং ডাইনামিক রিসোর্স স্কেলিং সাপোর্ট করে, ট্রাফিক বাড়লে সার্ভার নিজের সিপিইউ ও র‍্যাম অটোমেটিক বাড়িয়ে নেয়।",
        en: "Cloud platforms pool physical hardware, allowing virtual instances to scale up dynamically.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার নিজের কম্পিউটারে তৈরি করা 'index.html' ফাইলটি লোকাল হোস্ট এবং ডাব্লিউডাব্লিউডাব্লিউ (WWW) হোস্টিংয়ের মধ্যে অ্যাক্সেস পার্থক্যের বিবরণ দিন।",
      en: "Contrast accessibility of index.html running on localhost vs. hosted on public WWW servers.",
    },
    {
      bn: "শপিং মলের দোকান ভাড়ার অ্যানালজি ব্যবহার করে ডোমেন এবং হোস্টিং কীভাবে আলাদা কোম্পানি হলেও একসাথে কাজ করে তা বুঝিয়ে লিখুন।",
      en: "Describe domain-hosting sync using the shopping mall rentals metaphor.",
    },
    {
      bn: "ভিপিএস (VPS) হোস্টিং এবং শেয়ার্ড হোস্টিংয়ের সিকিউরিটি কাঠামোর তুলনামূলক সুবিধা নিজের ভাষায় লিখুন।",
      en: "Analyze the security insulation difference between VPS instances and Shared plans.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি ক্লাউড ভিপিএস ডেপ্লয়মেন্ট ও নেমসার্ভার কনফিগারেশন",
      en: "Cloud VPS Deployment & Nameserver Mapping Schema",
    },
    description: {
      bn: "আপনার লোকাল পোর্টফোলিও প্রজেক্টটি লিনাক্স ক্লাউড সার্ভারে ডেপ্লয় করে ডোমেনকে নেমসার্ভার দিয়ে কানেক্ট করার জন্য একটি কনফিগারেশন অবজেক্ট তৈরি করে সাবমিট করুন।",
      en: "Model a deployment and domain setup flow inside a JS object, defining local files, VPS IP, nameservers, and application boot commands.",
    },
    starterCode: `// Cloud VPS Deploy Pipeline Config
const vpsDeployPipeline = {
  domainPurchased: "tasnimcode.com",
  hostingProvider: "DigitalOcean VPS",
  serverIPAddress: "159.203.112.44",
  localAssetsToUpload: [
    // আপলোড করার ফাইল
  ],
  nameserversToSetInDomainPanel: [
    // ডোমেন প্যানেলে সেট করার নেমসার্ভার রেকর্ডস
  ],
  serverBootCommand: "সার্ভারে কোড চালু করার লিনাক্স কমান্ড",
  deploymentStatus: "pending"
};`,
    solution: {
      code: `// Cloud VPS Deploy Pipeline Active
const vpsDeployPipeline = {
  domainPurchased: "tasnimcode.com",
  hostingProvider: "DigitalOcean VPS",
  serverIPAddress: "159.203.112.44",
  localAssetsToUpload: ["index.html", "global.css", "main.js", "profile.jpg"],
  nameserversToSetInDomainPanel: ["ns1.digitalocean.com", "ns2.digitalocean.com"],
  serverBootCommand: "node main.js",
  deploymentStatus: "success"
};`,
      explanation: {
        bn: "চমৎকার ডিজাইন! লিনাক্স ভিপিএস ডিরেক্টরি সেট করা, নেমসার্ভার দিয়ে ডোমেন কানেক্ট করা ও সার্ভার নোড প্রসেস সচল করার পুরো ফ্লোটি শতভাগ সঠিক হয়েছে।",
        en: "Structuring deployment configurations models how developers configure remote server instances to serve files globally.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "শেয়ার্ড হোস্টিং এবং ভিপিএস (VPS) হোস্টিং এর কাজের গঠনগত ও পারফরম্যান্স পার্থক্য কী?",
        en: "What is the structural and performance difference between Shared and VPS hosting?",
      },
      answer: {
        bn: "১. **শেয়ার্ড হোস্টিং**: একটি ওএস কার্নেলের ওপর ফাইল ও কোড রান করে এবং র্যাম ও সিপিইউ সবার জন্য কমন থাকে। যদি অন্য একটি ওয়েবসাইট ভারী লুপ বা ডাটাবেজ প্রসেস রান করায়, তবে আপনার ওয়েবসাইট রিসোর্স না পেয়ে স্লো হয়ে যাবে।\n২. **ভিপিএস হোস্টিং (VPS)**: হাইপারভাইজার সফটওয়্যার ব্যবহার করে একই ফিজিক্যাল কম্পিউটারের ভেতরে আলাদা ওএস কার্নেল আইসোলেট করা হয়। আপনার জন্য বরাদ্দকৃত ১ জিবি র্যাম বা ১ কোর সিপিইউ সর্বদা আপনারই থাকবে এবং অন্য কোনো সাইটের ডাটা ওভারলোড আপনার পারফরম্যান্সের ওপর কোনো বিরূপ প্রভাব ফেলবে না, যা সর্বোচ্চ স্ট্যাবিলিটি দেয়।",
        en: "1. **Shared Hosting**: Multiple configurations execute within the same OS environment, competing for CPU time slices and RAM buffers. A memory leak on a neighbor's script degrades performance for all sites on that machine.\n2. **VPS Hosting**: Utilizes virtualization layers (hypervisors) to assign dedicated CPU cores and RAM segments to isolated OS instances. Resource allocations are fixed, guaranteeing performance insulation from adjacent virtual private servers.",
      },
    },
    {
      question: {
        bn: "ভার্সেল (Vercel) বা নেটলিফাই (Netlify) এর মতো মডার্ন সার্ভারলেস (Serverless) প্ল্যাটফর্মগুলোর সাথে ট্র্যাডিশনাল ভিপিএস (VPS) সার্ভারের পার্থক্য কী?",
        en: "What is the difference between Vercel/Netlify serverless deployments and traditional VPS configurations?",
      },
      answer: {
        bn: "১. **ভিপিএস (VPS)**: আপনাকে নিজের মতো করে লিনাক্স ওএস ম্যানেজ করতে হয়, নোড বা ডাটাবেজ সফটওয়্যার ইন্সটল ও আপডেট করতে হয় এবং সিকিউরিটি ফায়ারওয়াল ম্যানুয়ালি কনফিগার করতে হয়। এটি অনেক টেকনিক্যাল ও সময়সাপেক্ষ।\n২. **সার্ভারলেস (Vercel/Netlify)**: আপনাকে কোনো ওএস বা ব্যাকএন্ড ম্যানেজ করতে হবে না। আপনি কেবল আপনার ফ্রন্টএন্ড কোড আপলোড করবেন এবং প্ল্যাটফর্ম স্বয়ংক্রিয়ভাবে গ্লোবাল সিডিএন ও হোস্টিং ডিস্ট্রিবিউট করে দেবে। আপনার ট্রাফিকের সাইজ অনুযায়ী এরা ব্যাকগ্রাউন্ডে নিজেরা অটোমেটিক্যালি সার্ভার ইনস্ট্যান্স ম্যানেজ করে, যাকে সার্ভারলেস ক্লাউড আর্কিটেকচার বলে।",
        en: "1. **VPS**: Requires manual OS setups, system installations (e.g., Node.js), firewall rules, and runtime updates. Gives maximum control but high maintenance overhead.\n2. **Serverless Platforms**: Abstracts server hardware entirely. The developer pushes raw static code; Vercel compiles and distributes static files to global edge networks instantly. Scaling, security updates, and route mappings are managed automatically by the host platform.",
      },
    },
  ],
};
