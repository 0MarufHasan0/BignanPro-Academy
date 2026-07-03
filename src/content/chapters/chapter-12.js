export const chapter12Content = {
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
  objectives: [
    {
      bn: "একটি আধুনিক ওয়েবসাইটের ৩টি প্রধান পিলার (Frontend, Backend, Database) সম্পর্কে স্পষ্ট ধারণা পাওয়া।",
      en: "Identify the 3 pillars of web architectures: Frontend, Backend, and Database.",
    },
    {
      bn: "এপিআই (API) কীভাবে ফ্রন্টএন্ড ও ব্যাকএন্ডের মধ্যে ডাটা আনা-নেওয়ার যোগাযোগের সেতু হিসেবে কাজ করে তা বোঝা।",
      en: "Comprehend how APIs function as communication pipelines between clients and servers.",
    },
    {
      bn: "লগইন সিস্টেমের বাস্তব ফ্লো ব্যবহার করে ইউজার রিকোয়েস্ট থেকে শুরু করে ডেটাবেজ চেক করার পুরো প্রবাহ জানা।",
      en: "Trace the request-response lifecycle from input variables up to database schema lookups.",
    },
    {
      bn: "রেস্টুরেন্ট রূপক ব্যবহার করে সম্পূর্ণ ওয়েব আর্কিটেকচারকে সহজভাবে ভিজ্যুয়ালাইজ করতে শেখা।",
      en: "Visualize entire web systems using restaurant kitchen, waiter, and warehouse metaphors.",
    },
  ],
  sections: [
    {
      id: "what-is-website-three-parts",
      title: {
        bn: "১. ওয়েবসাইট আসলে কী? তিন পিলারের গল্প (What is a Website & 3 Pillars)",
        en: "1. What is a Website & 3 Pillars",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা যখন কোনো ব্রাউজারে সাইট ওপেন করি, তখন আমাদের কাছে কেবল পেজের ছবি ও লেখা ভেসে ওঠে। কিন্তু এর পেছনে আসলে কী ঘটছে? একটি ওয়েবসাইট কি কেবল কয়েকটি ইন্টারলিঙ্কড ডিজাইনের পেজ? না, একটি আধুনিক ওয়েব অ্যাপ্লিকেশন হলো মূলত একটি সুসংগঠিত থ্রি-টিয়ার (Three-tier) সিস্টেম।

## Why should I learn this? (কেন শিখবো?)
আপনি যদি একজন ফুল স্ট্যাক ডেভেলপার হতে চান, তবে আপনাকে বুঝতে হবে কীভাবে কোড ও ডেটাবেজ একে অপরের সাথে কথা বলে। এই জ্ঞান ছাড়া প্রজেক্ট তৈরি করা অন্ধের মতো দেয়াল হাতড়ানোর সমান।

## What is a Website Really? (ওয়েবসাইট আসলে কী?)
সহজ কথায়: **একটি আধুনিক ওয়েবসাইট হলো তিনটি ভিন্ন কিন্তু পরস্পর সংযুক্ত মেকানিজমের সমষ্টি:**
১. **ফ্রন্টএন্ড (Frontend)**: যা ইউজার দেখতে ও স্পর্শ করতে পারেন। (ক্লায়েন্ট পার্ট)
২. **ব্যাকএন্ড (Backend)**: পেছনের অদৃশ্য লজিক ইঞ্জিন যা সার্ভারে রান করে। (সার্ভার পার্ট)
৩. **ডেটাবেজ (Database)**: যেখানে সমস্ত ইউজার, কমেন্ট ও প্রজেক্টের ডাটা স্থায়ীভাবে সেভ থাকে।

এই ৩টি পিলার যখন মাদারবোর্ড বা ইন্টারনেটের ক্যাবল দিয়ে একে অপরের সাথে তথ্য আদান-প্রদান করে, তখনই একটি ওয়েবসাইট লাইভ বা সচল হয়।`,
        en: `## Introduction
A web app is not just a static webpage, but an orchestra of structural layers coordinating over network protocols.

## What is a Website?
A modern web application utilizes a three-tier system:
1. **Presentation Layer (Frontend)**: Runs in the client browser.
2. **Application Layer (Backend)**: Executes logic and routes requests on servers.
3. **Data Layer (Database)**: Stores information structures permanently.`,
      },
    },
    {
      id: "frontend-vs-backend",
      title: {
        bn: "২. ফ্রন্টএন্ড বনাম ব্যাকএন্ড (Frontend vs Backend Decoded)",
        en: "2. Frontend vs Backend Decoded",
      },
      content: {
        bn: `## Presentation vs Logic (দেখা বনাম চিন্তা)
আসুন আমরা ফ্রন্টএন্ড ও ব্যাকএন্ডের মধ্যকার মূল তফাৎটি ডিকোড করে নিই।

---
## Core Differences Table (প্রধান পার্থক্যসমূহ)
| বৈশিষ্ট্য (Features) | ফ্রন্টএন্ড (Frontend) | ব্যাকএন্ড (Backend) |
| :--- | :--- | :--- |
| **কাজের অবস্থান** | ইউজারের ডিভাইসে (Chrome/Safari ব্রাউজারে) রান করে | সুদূর রিমোট হোস্টিং বা ক্লাউড সার্ভারে রান করে |
| **ব্যবহৃত ল্যাঙ্গুয়েজ** | HTML, CSS, JavaScript | Node.js (Express), Python, PHP, Ruby |
| **মূল ভূমিকা** | স্ক্রিনের ডিজাইন, বাটন তৈরি ও অ্যানিমেশন প্রোভাইড করা | নিরাপত্তা নিশ্চিত করা, জটিল ক্যালকুলেশন ও বিজনেস লজিক হ্যান্ডেল করা |
| **অ্যানালজি** | দোকানের সামনের ডিসপ্লে এরিয়া (Shop Front) | দোকানের পেছনের ম্যানেজমেন্ট বা এডমিন অফিস |

## The Frontend Layer (ফ্রন্টএন্ড)
ফ্রন্টএন্ডের কাজ হলো ইউজারকে চমৎকার ইউজার এক্সপেরিয়েন্স (UX) দেওয়া। আপনার বাটন দেখতে কেমন হবে, ক্লিক করলে পেজ কত স্মুথলি স্ক্রোল করবে—সবই ফ্রন্টএন্ড।

## The Backend Layer (ব্যাকএন্ড)
ব্যাকএন্ডের কাজ হলো আসল শক্তি সরবরাহ করা। যখন আপনি কোনো পাসওয়ার্ড লেখেন, ফ্রন্টএন্ড সেটি চেক করতে পারে না। ফ্রন্টএন্ড পাসওয়ার্ডটি ব্যাকএন্ডের কাছে পাঠিয়ে দেয়। ব্যাকএন্ড চেক করে সিদ্ধান্ত নেয় ইউজারকে ঢুকতে দেওয়া হবে কিনা।`,
        en: `## Presentation vs. Application
*   **Frontend**: Executes in client spaces. Renders visual shapes using HTML structures, CSS styling rules, and JS interactive variables (Shop front).
*   **Backend**: Executes in secure server spaces. Validates credentials, queries databases, and manages computation workloads (Kitchen).`,
      },
    },
    {
      id: "database-digital-warehouse",
      title: {
        bn: "৩. ডেটাবেজ — তথ্যের স্থায়ী ভাণ্ডার (Database: Digital Warehouse)",
        en: "3. Database: Digital Warehouse",
      },
      content: {
        bn: `## The Memory: Database (ডেটাবেজ কী?)
একটি অ্যাপ্লিকেশন বন্ধ করলে বা কম্পিউটার শাটডাউন দিলে সমস্ত মেমরি ভ্যারিয়েবল ডিলিট হয়ে যায়। কিন্তু ফেসবুক রিফ্রেশ দিলে আপনার আগের পোস্ট বা ইমেইল আইডি কীভাবে আগের মতোই ফেরত আসে?

উত্তর হলো: **ডেটাবেজ (Database)**।
*   **সংজ্ঞা**: ডেটাবেজ হলো একটি বিশেষ সফটওয়্যার যা বড় আকারের ডাটা বা তথ্যকে অত্যন্ত গোছানোভাবে স্থায়ীভাবে হার্ডডিস্কে স্টোর করে রাখে এবং খুব দ্রুত তা সার্চ করে ফিরিয়ে দিতে পারে।
*   **উদাহরণ**: MongoDB, PostgreSQL, MySQL।
*   **রিয়েল লাইফ অ্যানালজি**: একটি বিশাল ডিজিটাল গুদাম বা ওয়ারহাউজ (Warehouse)।

গুদামে যেমন চালের বস্তা বা ক্যাটাগরি অনুযায়ী মালপত্র তাক দিয়ে সাজানো থাকে, ডেটাবেজেও তেমনি ইউজার টেবিল, প্রোডাক্ট টেবিল ও কমেন্ট টেবিল আলাদা আলাদা বক্সে সাজানো থাকে।`,
        en: `## Database Layer
Non-volatile software engines (MongoDB, PostgreSQL) that organize index data streams.

## Metaphor
The archives warehouse. Information is divided into distinct shelves (Users table, Products table) to resolve queries fast.`,
      },
    },
    {
      id: "api-communication-bridge",
      title: {
        bn: "৪. এআই — যোগাযোগের রাজপথ (What is an API?)",
        en: "4. What is an API?",
      },
      content: {
        bn: `## API: The Communication Highway (যোগাযোগের সেতু)
ফ্রন্টএন্ড থাকে ইউজারের ল্যাপটপে এবং ব্যাকএন্ড থাকে আমেরিকার কোনো সার্ভারে। এরা একে অপরের সাথে কীভাবে যোগাযোগ করে? 

যোগাযোগের এই ডিজিটাল সেতুর নাম হলো **API (Application Programming Interface)**।
*   **কাজ**: এপিআই হলো মূলত একটি নিয়ম বা লিঙ্কের সেট যার মাধ্যমে ফ্রন্টএন্ড ও ব্যাকএন্ড নিজেদের মধ্যে ডাটা আদান-প্রদান করতে পারে।
*   **ডাটা ফরম্যাট**: এপিআই সাধারণত ডাটা আদান-প্রদানের জন্য **JSON (JavaScript Object Notation)** ফরম্যাট ব্যবহার করে যা লাইটওয়েট এবং মানুষ ও কম্পিউটার উভয়ের জন্যই সহজে রিড করা সম্ভব।

## The API Flow Example (এপিআই ফ্লো)
\`\`\`
Frontend App ➔ [API Request / JSON] ➔ Server Backend ➔ Database Query ➔ [API Response / JSON] ➔ UI Render
\`\`\``,
        en: `## What is an API?
An API is the programmatic contract defining how frontend clients communicate with backend servers.

## Data Exchange Format: JSON
Data payloads transit using JSON (JavaScript Object Notation), a lightweight key-value string format readable by both engines and humans.`,
      },
    },
    {
      id: "full-system-flow-login",
      title: {
        bn: "৫. পূর্ণাঙ্গ সিস্টেম ফ্লো ও রিয়েল উদাহরণ (Full System Flow & Login Sequence)",
        en: "5. Full System Flow & Login Sequence",
      },
      content: {
        bn: `## Real World Sequence: User Login (লগইন সিস্টেম যেভাবে কাজ করে)
আসুন আমরা যখন জিমেইল বা ফেসবুকে ইমেইল এবং পাসওয়ার্ড লিখে 'Login' বাটনে চাপ দিই, তখন সম্পূর্ণ আর্কিটেকচারাল ফ্লো কীভাবে রান করে তা ধাপে ধাপে দেখে নিই:

১. **ইউজার ইনপুট (Client UI)**: ইউজার ইনপুট বক্সে ইমেইল ও পাসওয়ার্ড লিখে বাটনে ট্যাপ করলেন।
২. **রিকোয়েস্ট রেডি (JSON Payload)**: ফ্রন্টএন্ড ডাটা দুটি নিয়ে একটি JSON অবজেক্ট তৈরি করে এপিআই কল করার রিকোয়েস্ট রেডি করে।
৩. **ইন্টারনেট দিয়ে ট্রান্সফার (HTTP Request)**: রিকোয়েস্ট ডাটা প্যাকেট আকারে ইন্টারনেট রাউটার হয়ে ব্যাকএন্ড সার্ভারে পৌঁছায়।
４. **সিকিউরিটি ও ভ্যালিডেশন (Backend Logic)**: ব্যাকএন্ড চেক করে দেখে ইমেইল ফরমেট ঠিক আছে কিনা। এরপর পাসওয়ার্ড হ্যাশ (Hash) করে এনক্রিপ্ট করে ফেলে।
৫. **ডাটাবেজ কুয়েরি (Database Check)**: ব্যাকএন্ড ডেটাবেজ গুদামে নক করে বলে: *"এই ইমেইলের ইউজারের পাসওয়ার্ড কী মিলছে?"*
৬. **ফলাফল ফেরত (Database Response)**: ডেটাবেজ চেক করে পাসওয়ার্ড সঠিক পেলে ব্যাকএন্ডকে কনফার্ম করে।
৭. **ইউজার ইন্টারফেস আপডেট (UI Render)**: ব্যাকএন্ড 'Success' রেসপন্স দিলে ফ্রন্টএন্ড স্ক্রিন পরিবর্তন করে ইউজারকে প্রোফাইল ড্যাশবোর্ডে স্বাগত জানায়!

---
## The Complete Restaurant Analogy (সম্পূর্ণ রেস্টুরেন্ট রূপক)
ফুল স্ট্যাক ওয়েব আর্কিটেকচারকে নিচের চমৎকার রেস্টুরেন্ট ডাইনিংয়ের সাথে মিলিয়ে নিন:
*   **গ্রাহক (Customer)**: ইউজার বা ক্লায়েন্ট।
*   **মেনু বুক (Menu Card)**: ফ্রন্টএন্ড (Frontend - যেখানে কাস্টমার কেবল খাবারের ছবি দেখে সিলেক্ট করতে পারেন)।
*   **ওয়েটার (Waiter)**: এপিআই (API - যিনি গ্রাহকের অর্ডার নিয়ে রান্নাঘরে যান এবং রান্নাঘর থেকে প্রস্তুত খাবার এনে গ্রাহককে দেন)।
*   **রান্নাঘর (Kitchen)**: ব্যাকএন্ড (Backend - যেখানে বাবুর্চি অদৃশ্য অবস্থায় খাবার রান্না বা প্রসেস করছেন)।
*   **কোল্ড স্টোরেজ / কোল্ড ফ্রিজ**: ডেটাবেজ (Database - যেখানে র মেটেরিয়াল বা চাল ডাল স্থায়ীভাবে সেভ থাকে)।`,
        en: `## End-to-End Sequence: User Authentication
1. User inputs login keys, taps 'Submit'.
2. Client wraps properties into a JSON object payload.
3. TCP network routes HTTP POST request to API endpoint.
4. Server parses JSON payload, encrypting passwords.
5. Server queries the database collection for matches.
6. DB returns matched document schema results.
7. Server responds with validation confirmations.
8. Client processes responses and renders home pages.`,
      },
      codeBlock: {
        fileName: "fullstack_flow.js",
        language: "javascript",
        code: `// ফুল স্ট্যাক ডেটা ফ্লোর লজিক্যাল ডেমো
const mockDatabase = [
  { userId: 1, email: "tasnim@bignanpro.com", hashPassword: "secret-hashed-1" }
];

// ১. এপিআই রাউটার লিসেনার (Backend Endpoint)
function handleApiLoginRequest(jsonRequest) {
  console.log("📡 API Bridge: রিকোয়েস্ট রিসিভ করা হয়েছে...");
  const parsedData = JSON.parse(jsonRequest);
  
  console.log("⚙️ Backend Processor: ডেটাবেজ কুয়েরি চালানো হচ্ছে...");
  // ২. ডেটাবেজ রিড কুয়েরি
  const userRecord = mockDatabase.find(user => user.email === parsedData.email);
  
  if (userRecord && userRecord.hashPassword === "secret-hashed-1") {
    return JSON.stringify({ success: true, message: "লগইন সফল!", token: "JWT-Token-XYZ" });
  } else {
    return JSON.stringify({ success: false, message: "ভুল পাসওয়ার্ড!" });
  }
}

const clientPayload = JSON.stringify({ email: "tasnim@bignanpro.com", pass: "secret-hashed-1" });
const serverResponse = handleApiLoginRequest(clientPayload);
console.log("🚀 Client Monitor Screen: ", JSON.parse(serverResponse));`,
        explanations: [
          {
            line: 7,
            text: {
              bn: "এপিআই ব্রিজ ফ্রন্টএন্ড থেকে আসা স্ট্রিং ফাইলটিকে জাভাস্ক্রিপ্ট অবজেক্টে পার্স করে নেয়।",
              en: "API endpoint parsing incoming string request into JSON object.",
            },
          },
          {
            line: 11,
            text: {
              bn: "ব্যাকএন্ড প্রসেসর মেমরি ডেটাবেজ থেকে ব্যবহারকারীর ইমেইল এড্রেসের রেকর্ডটি সার্চ করে মেলায়।",
              en: "Performing lookup query in database database array.",
            },
          },
        ],
      },
    },
    {
      id: "practice-fullstack-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার ফুল স্ট্যাক আর্কিটেকচারাল ফ্লো এবং ডাটা বাফার ফ্লোর ধারণা স্পষ্ট করবে।`,
        en: `## Reflection & Lab Tasks
Assess your three-tier logic architecture concepts before coding functional server APIs in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "ফুল স্ট্যাক ডাটা ফ্লো জানা থাকলে আপনি খুব সহজে বুঝতে পারবেন কেন নেটওয়ার্ক এরর হয় এবং কীভাবে ডেটাবেজ কুয়েরি অপ্টিমাইজ করতে হয়।",
          en: "Understanding end-to-end pipelines allows you to locate bottlenecks across network steps, APIs, or database queries.",
        },
        whyWorks: {
          bn: "এপিআই ও ক্লায়েন্ট কমিউনিকেশন মূলত স্ট্যান্ডার্ড প্রোটোকল মেনে পোর্ট ও সকেট আর্কিটেকচারের ওপর কাজ করে।",
          en: "APIs coordinate using stateless application layers (like HTTP/HTTPS) passing text files over sockets.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা ফ্রন্টএন্ড ভ্যালিডেশন এবং ব্যাকএন্ড ভ্যালিডেশন উভয়ই করেন যাতে হ্যাকাররা এপিআই রিকোয়েস্ট বাইপাস করতে না পারে।",
          en: "Seniors execute sanitizations on both frontend and backend to secure application interfaces.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো সরাসরি ফ্রন্টএন্ডে ডেটাবেজের পাসওয়ার্ড বা সিক্রেট কোড লিখে রাখা। সিক্রেট কী সর্বদা সিকিউর এনভায়রনমেন্ট ফাইলে রাখতে হয়।",
          en: "Never save database credential variables in client codes. Client codes are visible to hackers.",
        },
        debugging: {
          bn: "কানেকশন লস হলে ব্রাউজার ডেভটুলসের 'Network' ট্যাব চেক করে এপিআই রিকোয়েস্টের স্ট্যাটাস কোড (যেমন: 404, 500) ডিবাগ করুন।",
          en: "DevTools Network logs reveal response status codes. E.g., 4xx indicating client faults, 5xx indicating server outages.",
        },
        performance: {
          bn: "ডেটাবেজের ফ্রিকোয়েন্ট ক্যোয়ারী কমাতে উচ্চ ফ্রিকোয়েন্সির ডাটা মেমরি ক্যাশ ডেটাবেজ যেমন রেডিস (Redis) এ জমা রাখুন।",
          en: "Cache transient states in high-speed RAM database indexes to protect core persistent disks from query congestion.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "wa-q1",
      question: {
        bn: "একটি ওয়েবসাইটের প্রধান ৩টি পিলারের সমন্বিত কাঠামো কোনটি?",
        en: "What are the 3 core pillars of a web application?",
      },
      options: [
        {
          bn: "গুগল ক্রোম, ভিএস কোড ও কিবোর্ড",
          en: "Chrome browser, VS Code, and keyboard",
        },
        {
          bn: "ফ্রন্টএন্ড, ব্যাকএন্ড এবং ডেটাবেজ (Frontend, Backend & Database)",
          en: "Frontend, Backend, and Database",
        },
        {
          bn: "উইন্ডোজ, অ্যান্ড্রয়েড ও সাবমেরিন তার",
          en: "Windows OS, Android OS, and undersea cables",
        },
        {
          bn: "এইচটিএমএল, সিএসএস ও টাইপরাইটার",
          en: "HTML structure, CSS style, and typewriter",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ওয়েব আর্কিটেকচার ফ্রন্টএন্ড (ভিউ), ব্যাকএন্ড (লজিক) এবং ডেটাবেজ (স্টোরেজ) এর সংযোগে কাজ করে।",
        en: "Web applications are organized as three distinct layers: client display, server, and data store.",
      },
    },
    {
      id: "wa-q2",
      question: {
        bn: "কাজের রেস্টুরেন্ট ওয়েটার রূপক অনুযায়ী, এপিআই (API) এর প্রধান দায়িত্ব কোনটি?",
        en: "In the restaurant metaphor, what does the waiter represent?",
      },
      options: [
        { bn: "খাবারের ডিশ পরিষ্কার করা", en: "Clean kitchen countertops" },
        {
          bn: "ফ্রন্টএন্ড ও ব্যাকএন্ডের মধ্যে রিকোয়েস্ট ও রেসপন্স ডাটা আদান-প্রদান করা",
          en: "Transmit request payloads and response packets between client and server layers",
        },
        {
          bn: "বাবুর্চির হয়ে রান্নার রেসিপি কাটা",
          en: "Prepare raw ingredients for chef",
        },
        { bn: "মেনু কার্ড ডিজাইন করা", en: "Design the printed menu card" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এপিআই হলো সেই ডিজিটাল ওয়েটার যে ক্লায়েন্টের রিকোয়েস্ট সার্ভারে নিয়ে যায় ও রেসপন্স ডেটা ফেরত এনে দেয়।",
        en: "APIs package and carry parameters from client screens down to server endpoints.",
      },
    },
    {
      id: "wa-q3",
      question: {
        bn: "ডাটাবেজ (Database) সফটওয়্যারের মূল কাজ কী?",
        en: "What is the primary function of a database?",
      },
      options: [
        {
          bn: "বাটনগুলোতে সুন্দর অ্যানিমেশন লোড করা",
          en: "Load CSS animations to buttons",
        },
        {
          bn: "বড় আকারের ডাটা স্থায়ীভাবে স্টোর করা ও কুয়েরি অনুযায়ী দ্রুত ফাইল খুঁজে দেওয়া",
          en: "Archive large collections of records permanently, allowing fast query retrievals",
        },
        {
          bn: "কম্পিউটারের ওএস ফাইল রিফ্রেশ করা",
          en: "Refresh operating system processes",
        },
        {
          bn: "সার্ভার স্পিড কমানো",
          en: "Slow down internet packets transmission",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডেটাবেজ হলো ডিজিটাল সিকিউর গুদাম যা সমস্ত ইনফরমেশন রিলেশনাল টেবিলে সেভ রাখে।",
        en: "Databases serialize and write application states into index-safe storage tables.",
      },
    },
    {
      id: "wa-q4",
      question: {
        bn: "ফ্রন্টএন্ড ও ব্যাকএন্ডের মধ্যে ডাটা আদান-প্রদানের জন্য বর্তমানে কোন লাইটওয়েট টেক্সট ফরম্যাটটি সবচেয়ে জনপ্রিয়?",
        en: "What is the most popular data exchange format used in modern APIs?",
      },
      options: [
        { bn: "HTML Code", en: "Raw HTML Code" },
        {
          bn: "JSON (JavaScript Object Notation)",
          en: "JSON (JavaScript Object Notation)",
        },
        { bn: "EXE Binary File", en: "EXE Binary File" },
        { bn: "BIOS Firmware", en: "BIOS Firmware" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "জেসন (JSON) হলো একটি রিডেবল লাইটওয়েট টেক্সট ফরম্যাট যা এপিআই ডেটা হিসেবে ট্রান্সফার করতে ব্যবহৃত হয়।",
        en: "JSON represents data as key-value pairs, making it network-portable and language-agnostic.",
      },
    },
    {
      id: "wa-q5",
      question: {
        bn: "লগইন প্রসেসে ফ্রন্টএন্ড বাটনে ক্লিক করার পর ডাটা ফ্লোর সঠিক ক্রমানুসার কোনটি?",
        en: "What is the correct sequence of events when submit button is clicked on login?",
      },
      options: [
        {
          bn: "ইউজার ➔ ডাটাবেজ ➔ ওএস ➔ স্ক্রিন",
          en: "User ➔ Database ➔ OS ➔ Screen",
        },
        {
          bn: "বাটন ক্লিক ➔ এপিআই রিকোয়েস্ট ➔ ব্যাকএন্ড ভ্যালিডেশন ➔ ডেটাবেজ কুয়েরি ➔ রেসপন্স ➔ স্ক্রিন রেন্ডার",
          en: "Button click ➔ API request ➔ Backend validation ➔ DB Query ➔ Server Response ➔ Screen Render",
        },
        {
          bn: "ডাটাবেজ রিফ্রেশ ➔ বাটন ক্লিক ➔ এরর",
          en: "DB Refresh ➔ Button click ➔ Error",
        },
        {
          bn: "সার্ভার ডাউন ➔ কম্পাইলার রান",
          en: "Server down ➔ Compiler run",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "লগইন প্রসেস বাটন ক্লিক দিয়ে শুরু হয়ে এপিআই, ব্যাকএন্ড ও ডেটাবেজ চেক করে শেষে ক্লায়েন্ট স্ক্রিন রেন্ডার করার লুপ সম্পূর্ণ করে।",
        en: "Authentication transits from client event to network payload, server routing, database lookup, and screen render updates.",
      },
    },
  ],
  practice: [
    {
      bn: "ফেসবুকে যখন আপনি কাউকে কমেন্ট করেন, তখন ক্লায়েন্ট-সার্ভার ও ডেটাবেজের মেলবন্ধন কীভাবে কাজ করে? নিজের ভাষায় লিখুন।",
      en: "Decompose client, server, and database interactions when posting a comment on Facebook.",
    },
    {
      bn: "একটি ইকমার্স প্রোডাক্ট কার্ডে যখন আপনি 'Add to Cart' বাটনে ক্লিক করেন, এপিআই রিকোয়েস্টে কী কী জেসন (JSON) ডাটা পাঠানো প্রয়োজন হতে পারে? লিখুন।",
      en: "Draft the JSON payload structure required when adding an item to a shopping cart API.",
    },
    {
      bn: "ফ্রন্টএন্ড ডেভেলপারদের ডেটাবেজের ডাইরেক্ট অ্যাক্সেস সিকিউরিটি কারণে কেন দেওয়া উচিত নয়? ব্যাখ্যা করুন।",
      en: "Explain why clients should never have direct access to database servers.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি সোশ্যাল মিডিয়া লাইক বাটনের এন্ড-টু-এন্ড ডেটা ফ্লো",
      en: "End-to-End Data Flow of a Social Media Like Button",
    },
    description: {
      bn: "ইউজার যখন কোনো পোস্টে লাইক বাটনে ক্লিক করেন, তখন ক্লায়েন্ট থেকে সার্ভার হয়ে ডেটাবেজে লাইক কাউন্ট আপডেট হওয়ার পুরো ফ্লো অবজেক্ট ডিক্লেয়ার করে সাবমিট করুন।",
      en: "Model the full stack data transactions triggered by clicking a 'Like' button, representing the JSON formats.",
    },
    starterCode: `// Like Button Full Stack Sequence Schema
const likeButtonDataPipeline = {
  actionName: "Post Like",
  postId: "POST-7892",
  apiEndpoint: "/api/posts/like",
  clientJsonPayload: {
    // ফ্রন্টএন্ড থেকে সার্ভারে কী কী ডাটা যাবে
  },
  databaseUpdateQuery: "ডেটাবেজ টেবিলে কী চেঞ্জ হবে?",
  uiUpdateResponse: {
    // সার্ভার থেকে কী রেসপন্স কোড ও ডাটা আসবে
  }
};`,
    solution: {
      code: `// Like Button Pipeline Processed
const likeButtonDataPipeline = {
  actionName: "পোস্ট লাইক ক্লিক",
  postId: "POST-7892",
  apiEndpoint: "/api/posts/like",
  clientJsonPayload: {
    userId: 402,
    postId: "POST-7892",
    action: "LIKE"
  },
  databaseUpdateQuery: "posts কালেকশনের POST-7892 ডকুমেন্টের likes কাউন্টার ১ বাড়ানো।",
  uiUpdateResponse: {
    success: true,
    totalLikes: 257,
    hasLiked: true
  }
};`,
      explanation: {
        bn: "অসাধারণ আর্কিটেকচার! জেসন ইনপুট পাঠানো থেকে ডেটাবেজ কাউন্টার আপডেট ও রেন্ডারিং রেসপন্সের পুরো প্রসেস ফ্লোটি লজিক্যালি সম্পূর্ণ নির্ভুল হয়েছে।",
        en: "Structuring data exchanges models how full stack interfaces synchronize states across remote databases.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "ফ্রন্টএন্ড ভ্যালিডেশন (Frontend Validation) থাকা সত্ত্বেও কেন ব্যাকএন্ড ভ্যালিডেশন (Backend Validation) করা বাধ্যতামূলক?",
        en: "Why is Backend Validation mandatory even when Frontend Validation is active?",
      },
      answer: {
        bn: "ফ্রন্টএন্ড কোড ব্রাউজারে রান করে এবং যেকোনো বুদ্ধিমান ইউজার বা হ্যাকার ব্রাউজারের ডেভেলপার টুলস দিয়ে ফ্রন্টএন্ডের সমস্ত রুল বা কন্ডিশন সহজেই ডিসেবল করে দিতে পারেন। এছাড়া হ্যাকাররা সরাসরি ব্রাউজার ছাড়াই কার্ল (curl) বা পোস্টম্যান (Postman) এর মতো স্ক্রিপ্ট দিয়ে সরাসরি ব্যাকএন্ড এপিআই-তে ভুল বা ক্ষতিকর ডাটা সাবমিট করতে পারেন। ব্যাকএন্ড সার্ভার হলো শেষ রক্ষাকবচ যা প্রতিটি ডাটা পুনরায় নিখুঁতভাবে চেক করে তবেই ডেটাবেজে সেভ করে, যা ডেটাবেজের সুরক্ষা ও প্রজেক্টের নিরাপত্তা নিশ্চিত করে।",
        en: "Client-side validation is easily bypassed since code execution is fully visible and editable in browser developer consoles. Attackers can bypass browser layouts entirely, sending raw malicious scripts (e.g., SQL injections) directly to API endpoints. Backend validation is the ultimate security layer ensuring data integrity before committing entries to disk.",
      },
    },
    {
      question: {
        bn: "এপিআই (API) এর ক্ষেত্রে জেসন (JSON) ডাটা ফরম্যাট ব্যবহারের মূল সুবিধাসমূহ কী কী?",
        en: "What are the core benefits of using JSON for API data transmissions?",
      },
      answer: {
        bn: "১. জেসন সম্পূর্ণ লাইটওয়েট টেক্সট ফাইল, ফলে ইন্টারনেটে এটি পাঠাতে ব্যান্ডউইথ বা ডাটা খুব কম খরচ হয়।\n২. এটি ডাবল কোট কী-ভ্যালু পেয়ার (যেমন: 'key': 'value') স্টাইলে লেখা হয় যা মানুষ খুব সহজে পড়তে ও বুঝতে পারে।\n৩. জেসন ল্যাঙ্গুয়েজ-ইন্ডিপেন্ডেন্ট বা স্বাধীন। এর অর্থ হলো জাভাস্ক্রিপ্ট দিয়ে তৈরি জেসন রিকোয়েস্টকে ব্যাকএন্ডের জাভা, পাইথন বা পিএইচপি খুব সহজে তাদের নিজস্ব অবজেক্টে রূপান্তর করে নিতে পারে। এটি ক্রস-প্লাটফর্ম ডেটা ট্রান্সফার অনেক সহজ করে দেয়।",
        en: "1. JSON is a minimal text representation, minimizing packet sizes and network latencies over TCP channels.\n2. Highly readable key-value maps facilitate debugging and troubleshooting.\n3. JSON is language-independent. A JSON string emitted by a JavaScript browser can be parsed natively by Python, Java, or PHP backend microservices.",
      },
    },
  ],
};
