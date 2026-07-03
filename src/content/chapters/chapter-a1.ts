import { Chapter } from "@/types";

export const chapterA1Content: Chapter = {
  id: "chapter-a1",
  number: 36, // Using 36 in sequential flow or custom index mapping
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
  objectives: [
    {
      bn: "কোম্পানি লেভেলে ব্যবহৃত রাউট, কন্ট্রোলার এবং সার্ভিস লেয়ারের পৃথক কাজ ও দায়িত্ব ব্যাখ্যা করা।",
      en: "Distinguish between the Route, Controller, and Service layer responsibilities in web APIs.",
    },
    {
      bn: "প্রজেক্টের 'Separation of Concerns' বা দায়িত্বের বিভাজন নিশ্চিত করে কোডের স্থায়িত্ব ও স্কেলারবিলিটি বাড়ানো।",
      en: "Implement Separation of Concerns to scale enterprise backend codebases.",
    },
    {
      bn: "এক্সপ্রেস মিডলওয়্যার সিস্টেম ডিজাইন করে রিকোয়েস্ট ফিল্টারিং ও এরর হ্যান্ডলিং ইমপ্লিমেন্ট করা।",
      en: "Design Express middleware pipelines to intercept and validate network requests.",
    },
    {
      bn: "বাস্তব কারখানার রূপকের সাথে ক্লিন ব্যাকএন্ড আর্কিটেকচার তথ্যপ্রবাহের সামঞ্জস্য স্থাপন করা।",
      en: "Map real-world factory workflows to layered clean architecture request cycles.",
    },
  ],
  sections: [
    {
      id: "why-structure-matters",
      title: {
        bn: "১. প্রজেক্ট কাঠামোর গুরুত্ব ও ক্লিন আর্কিটেকচার (Why Structure Matters & Clean Architecture)",
        en: "1. Why Structure Matters & Clean Architecture",
      },
      content: {
        bn: `## Why Structure Matters (প্রজেক্ট কাঠামোর গুরুত্ব)
নতুন ডেভেলপাররা সাধারণত তাদের ব্যাকএন্ডের সমস্ত রাউটিং, লজিক এবং ডেটাবেজ কুয়েরি একটি সিঙ্গেল ফাইলে (যেমন: 'server.js') জগাখিচুড়ি করে লিখে ফেলেন। 

ছোট প্রজেক্টের জন্য এটি কাজ করলেও বড় স্কেলে এটি মারাত্মক সমস্যা তৈরি করে:
*   **ডিপেন্ডেন্সি গোলমাল (Tight Coupling)**: কোনো একটি কোড পরিবর্তন করলে অন্য অংশ না বুঝেই ভেঙে পড়ে।
*   **ডিবাগিং অসম্ভব**: কোডের সাইজ বাড়ার সাথে সাথে এরর কোথা থেকে আসছে তা খুঁজে পাওয়া কঠিন হয়ে যায়।
*   **রিউজেবিলিটি জিরো**: একই ডেটা প্রসেসিং লজিক বারবার বিভিন্ন রাউটে কপি-পেস্ট করতে হয়।

---

## Clean Architecture Layers (ক্লিন আর্কিটেকচারের স্তরসমূহ)
প্রফেশনাল সফটওয়্যার ডেভেলপমেন্টে আমরা কোডকে ৪টি মূল স্তরে বিভক্ত করে ফেলি। ডাটাফ্লোর ক্রমানুযায়ী স্তরগুলো নিচে দেখানো হলো:

\`\`\`
Client Request ──> [ Routes ] ──> [ Controllers ] ──> [ Services ] ──> [ Database (Models) ]
\`\`\`

এই স্তরীভূত কাঠামোর সুবিধা হলো, এক স্তরের কোড অন্য স্তরের ইন্টারনাল লজিক নিয়ে মাথা ঘামায় না। একে বলা হয় **Separation of Concerns (দায়িত্বের বিভাজন)**।`,
        en: `## Why Structure Matters
Beginners often clutter route configs, database connections, and business logic into a single monolithic script (e.g. 'server.js'). 

While convenient for prototyping, this setup fails at scale:
*   **Tight Coupling**: Changing database attributes breaks router validation checkers.
*   **Debugging Nightmare**: Locating logic exceptions becomes difficult as code lines grow.
*   **Code Duplication**: Fetch logic gets copy-pasted across different endpoints.

---

## Clean Architecture Layers
Enterprise-grade software relies on layering boundaries. The client requests traverse a strict sequence:
\`\`\`
Client Request ──> [ Routes ] ──> [ Controllers ] ──> [ Services ] ──> [ Database (Models) ]
\`\`\`

By dividing the application into isolated tiers, we achieve **Separation of Concerns**, ensuring each module has a single, testable responsibility.`,
      },
    },
    {
      id: "routes-controllers-services",
      title: {
        bn: "২. রাউট, কন্ট্রোলার ও সার্ভিস লেয়ার (Routes, Controllers & Services)",
        en: "2. Routes, Controllers & Services",
      },
      content: {
        bn: `## Layer Responsibilities (প্রতিটি স্তরের দায়িত্ব)

### ১. Route Layer (রাউট স্তর):
*   **প্রধান কাজ**: এপিআই-এর এন্ডপয়েন্ট বা ইউআরএল পাথ ডিক্লেয়ার করা।
*   **নিয়ম**: এই স্তরে কোনো ডাটা প্রসেসিং বা ডেটাবেজ কোয়েরি করা যাবে না। রাউট ফাইল শুধু দেখবে কোন ইউআরএল-এ রিকোয়েস্ট এসেছে এবং সেটি কোন কন্ট্রোলারে পাঠাতে হবে।
*   *উদাহরণ*: \`/api/users\` রাউটে রিকোয়েস্ট এলে তা \`userController.getUser\`-এ রিডাইরেক্ট হবে।

### ২. Controller Layer (কন্ট্রোলার স্তর):
*   **প্রধান কাজ**: ক্লায়েন্টের রিকোয়েস্ট অবজেক্ট (\`req\`) রিসিভ করা এবং রেসপন্স অবজেক্ট (\`res\`) ক্লায়েন্টে রিটার্ন করা।
*   **নিয়ম**: কন্ট্রোলার নিজে ডাটা প্রসেস বা কুয়েরি করে না। সে শুধু ইনপুট ডাটা রিসিভ করে সার্ভিস লেয়ারকে দেয় এবং সার্ভিস থেকে আসা রেজাল্ট রেসপন্স আকারে রিটার্ন করে।

### ৩. Service Layer (সার্ভিস স্তর):
*   **প্রধান কাজ**: ব্যবসার মূল লজিক (Business Logic), গাণিতিক হিসাব-নিকাশ এবং ডেটা প্রসেসিং করা।
*   **নিয়ম**: সার্ভিস লেয়ার জানে না রিকোয়েস্টটি কোথা থেকে এসেছে (এইচটিটিপি না কি অন্য কোনো প্রোটোকল)। সে শুধু ইনপুট প্রসেস করে মঙ্গুজ বা ডাটাবেজ মডেল কল করে।

### ৪. Database / Model Layer (ডাটাবেজ স্তর):
*   **প্রধান কাজ**: মঙ্গোডিবির কালেকশন স্কিমা এবং ডাটাবেজ কুয়েরি অ্যাকশন চালানো।`,
        en: `## Layer Responsibilities

### 1. Route Layer
*   **Role**: Defines the URL entry endpoints of your API.
*   **Rule**: Never write business logic or database queries here. Routes only parse incoming paths and forward them to controllers.
*   *Example*: Mapping GET requests on '/api/users' directly to the 'userController.getUser' method.

### 2. Controller Layer
*   **Role**: Orchestrates the HTTP lifecycle. It parses incoming request inputs ('req.body', 'req.params') and returns JSON responses ('res.json()').
*   **Rule**: Controllers never execute business logic. They act as traffic directors, invoking Services and mapping the return values to HTTP statuses.

### 3. Service Layer
*   **Role**: The brain of the application. It houses business logic, calculates pricing, handles cryptography, and processes datasets.
*   **Rule**: Services remain HTTP-agnostic. They receive pure parameters and return objects, making them reusable and testable.

### 4. Database / Model Layer
*   **Role**: Defines the Mongoose schemas and coordinates directly with MongoDB collections.`,
      },
    },
    {
      id: "middleware-system",
      title: {
        bn: "৩. মিডলওয়্যার সিস্টেম ও রিকোয়েস্ট ফিল্টার (Middleware System & Filters)",
        en: "3. Middleware System & Request Filters",
      },
      content: {
        bn: `## What is Middleware? (মিডলওয়্যার কী?)
মিডলওয়্যার হলো এমন কিছু ইন্টারসেপ্টর ফাংশন যা এক্সপ্রেস রাউটে রিকোয়েস্ট পৌঁছানোর পূর্বে মাঝখানে বসে রিকোয়েস্ট ফিল্টার বা মডিফাই করে।

প্রোডাকশন গ্রেড আর্কিটেকচারে ৩টি প্রধাণ মিডলওয়্যার ব্যবহৃত হয়:
*   **Authentication Check (নিরাপত্তা)**: রিকোয়েস্ট হেডারে টোকেন আছে কিনা চেক করা এবং ইনভ্যালিড টোকেন হলে আগেই রিকোয়েস্ট রিজেক্ট করা।
*   **Request Logger (লগিং)**: প্রতিটি রিকোয়েস্ট কোন পোর্ট থেকে এসেছে এবং কোন রাউট হিট করেছে তার লগ জেনারেট করা।
*   **Global Error Handler (এরর ক্যাচার)**: অ্যাপ্লিকেশনের যেকোনো স্থানে এরর ক্র্যাশ হলে তা ট্র্যাপ করে ব্যবহারকারীকে সুন্দর ফরম্যাটেড মেসেজ দেওয়া।

---

## Visualizing Middleware Pipeline (মিডলওয়্যার পাইপলাইন)
\`\`\`
Client Request ──> [ Logger ] ──> [ Auth Guard ] ──> [ Controller ] ──> Response
\`\`\`
*ক্লু: প্রতিটি মিডলওয়্যার এক্সিকিউশন শেষে অবশ্যই \`next()\` ফাংশনটি কল করতে হবে, নয়তো রিকোয়েস্ট মাঝখানেই আটকে থাকবে এবং ক্লায়েন্ট পেজ ঝুলে থাকবে!*`,
        en: `## What is Middleware?
Middleware functions act as requests interceptors positioned between the initial HTTP socket connection and the final controller execution.

A production-grade application runs three fundamental middlewares:
*   **Auth Guard**: Intercepts authorization headers to reject unauthenticated requests.
*   **Request Loggers**: Logs diagnostic data (HTTP method, path, response times) for system monitoring.
*   **Global Error Middleware**: Catch-all function located at the end of the Express router chain to handle failed operations.

---

## Visualizing Middleware Pipeline
\`\`\`
Client Request ──> [ Logger ] ──> [ Auth Guard ] ──> [ Controller ] ──> Response
\`\`\`
*Tip: Always invoke the 'next()' function at the end of your middleware execution blocks, otherwise the HTTP request hangs indefinitely.*`,
      },
    },
    {
      id: "production-folder-structure",
      title: {
        bn: "৪. রিয়েল প্রজেক্টের ফোল্ডার স্ট্রাকচার ও তথ্যপ্রবাহ (Real Folder Structure & Flow)",
        en: "4. Real Folder Structure & Request Flow",
      },
      content: {
        bn: `## Production Folder Structure (ফোল্ডার স্ট্রাকচার)
একটি প্রফেশনাল এক্সপ্রেস এপিআই প্রজেক্টের ফোল্ডার স্ট্রাকচার নিচের লেআউট অনুসরণ করে:

\`\`\`text
backend-project/
├── config/                  # ডেটাবেজ ও এনভায়রনমেন্ট কনফিগারেশন (db.js)
├── routes/                  # এপিআই ইউআরএল এন্ট্রি পয়েন্ট (userRoutes.js)
├── controllers/             # রিকোয়েস্ট-রেসপন্স হ্যান্ডলার (userController.js)
├── services/                # বিজনেস লজিক ও ডেটাবেজ কোয়েরি (userService.js)
├── models/                  # মঙ্গোডিবি স্কিমা মডেল (User.js)
├── middleware/              # লগ ও সিকিউরিটি ফিল্টার (authMiddleware.js)
├── .env                     # সিক্রেট ভ্যারিয়েবল ফাইল
├── package.json             # ডিপেন্ডেন্সি রুলস বুক
└── server.js                # এক্সপ্রেস সার্ভার লিসেনার স্টার্টার
\`\`\`

---

## Complete Request Flow (তথ্যপ্রবাহের চক্র)
ব্যবহারকারী যখন একটি বাটন ক্লিক করে, তখন ব্যাকএন্ডে কীভাবে তথ্য আদান-প্রদান হয় তার সিকোয়েন্স:
1.  **Client (React)**: এপিআই রিকোয়েস্ট পাঠায়।
2.  **Routes (Express)**: এন্ডপয়েন্ট ম্যাচ করে কন্ট্রোলারে পাঠায়।
3.  **Controllers**: রিকোয়েস্ট বডি বা আইডি ক্যাচ করে সার্ভিসে পাঠায়।
4.  **Services**: ডাটা প্রসেস করে মডেলে সার্চ কোয়েরি পাঠায়।
5.  **Models (MongoDB)**: ডেটাবেজ থেকে ডাটা রিটার্ন করে।
6.  **Services**: ডাটা ফরম্যাট বা ক্যালকুলেট করে কন্ট্রোলারে পাঠায়।
7.  **Controllers**: ক্লায়েন্টে JSON রেসপন্স পাঠিয়ে দেয়।`,
        en: `## Production Folder Structure
A scalable Express API repository uses the following directory organization:

\`\`\`text
backend-project/
├── config/                  # Configuration & connection scripts (db.js)
├── routes/                  # API endpoints maps (userRoutes.js)
├── controllers/             # HTTP handlers (userController.js)
├── services/                # Core business logic (userService.js)
├── models/                  # Database schema models (User.js)
├── middleware/              # Logging, CORS, Auth guards (auth.js)
├── .env                     # Hidden secrets & API tokens
├── package.json             # NPM dependencies list
└── server.js                # App entrypoint (initializes Express listener)
\`\`\`

---

## Complete Request Flow
Here is the sequence representing data processing:
1.  **Client (React)**: Dispatches a fetch query.
2.  **Routes**: Intercepts paths and redirects requests.
3.  **Controllers**: Extracts client parameters and forwards them to services.
4.  **Services**: Applies calculation rules and queries models.
5.  **Models (MongoDB)**: Executes reads/writes on disks.
6.  **Services**: Filters database results and returns them.
7.  **Controllers**: Serializes JSON responses and terminates HTTP sessions.`,
      },
    },
    {
      id: "factory-analogy-mistakes",
      title: {
        bn: "৫. কারখানার রূপক ও সাধারণ ভুলসমূহ (Factory Analogy & Common Mistakes)",
        en: "5. Common Mistakes & Factory Analogy",
      },
      content: {
        bn: `## Common Mistakes (সাধারণ ভুলসমূহ)
*   **রাউটে লজিক লেখা**: এক্সপ্রেস রাউট ফাইলের ভেতর সরাসরি ডাটাবেজ কুয়েরি বা ভ্যালিডেশন কোড লিখে ফেলা। এতে রাউট ফাইল স্কেল বা রি-ইউজ করা যায় না।
*   **দায়িত্বের গোলমাল**: কন্ট্রোলারের ভেতরেই ডাটা প্রসেসিং এবং পাসওয়ার্ড হ্যাশিং এর লজিক রাখা। এটি সার্ভিস লেয়ারের দায়িত্ব।
*   **এরর গিলে ফেলা (Ignoring Errors)**: সার্ভিসের ভেতর ট্রাই-ক্যাচ ব্লক ব্যবহার না করা। এর ফলে ডাটাবেজ অফ হলে পুরো এক্সপ্রেস সার্ভার ক্র্যাশ করে শাটডাউন হয়ে যায়।

---

## The Factory Analogy (কারখানার রূপক)
ক্লিন আর্কিটেকচার প্যাটার্নকে একটি খেলনা উৎপাদনকারী কারখানার সাথে মিলিয়ে নিন:
*   **কারখানার গেট (Routes)**: কাস্টমার যেখানে এসে অর্ডার বুকিং করে। সিকিউরিটি গার্ড প্রথমে গেটে চেক করে দেখে কাস্টমারের টোকেন সঠিক আছে কিনা (মিডলওয়্যার)।
*   **ম্যানেজার (Controller)**: অর্ডার ফর্ম রিসিভ করে সুপারভাইজারকে দিয়ে কাজ বুঝিয়ে দেয়। ম্যানেজার নিজে খেলনা বানান না, কাস্টমারকে অর্ডার হ্যান্ডওভার করে রসিদ বুঝিয়ে দেন।
*   **দক্ষ শ্রমিক (Service)**: খেলনা তৈরির আসল কর্মী। সে অর্ডার ফরম নিয়ে তুলা, প্লাস্টিক প্রসেস করে এবং মূল খেলনা অ্যাসেম্বল করে। শ্রমিক জানে না খেলনাটি কে অর্ডার করেছে।
*   **স্টোররুম (Database/Model)**: খেলনা বানানোর কাঁচামাল যেখানে কার্টনে কার্টনে সাজানো থাকে এবং ফিনিশড খেলনা বক্সে সেভ করে রাখা হয়।`,
        en: `## Common Mistakes
*   **Logic inside Route files**: Executing database calls directly inside router callbacks, violating separations rules.
*   **Bloated Controllers**: Writing crypto algorithms or hashing functions inside controllers. This belongs in isolated services.
*   **Ignoring Exceptions**: Leaving async queries unprotected by try-catch blocks. Database drops will crash the Node process.

---

## The Factory Analogy
A layered clean architecture mimics a production factory:
*   **Security Gate (Routes & Middleware)**: The entrance checkpoint. Security guards verify credentials (middleware) before admitting customers.
*   **The Store Manager (Controller)**: Receives customers' invoices, validates items formats, and hands tasks to technicians. The manager does not build items.
*   **The Assembler Technician (Service)**: The factory floor worker processing calculations, formatting structures, and stitching materials.
*   **The Raw Warehouse Crate (Database/Model)**: The shelves storing wood logs and plastic pellets (MongoDB collections).`,
      },
      codeBlock: {
        fileName: "backend/userApp.js",
        language: "javascript",
        code: `// =========================================================
// ১. SERVICE LAYER (userService.js) - মূল ব্যবসায়িক লজিক
// =========================================================
const User = require('./models/User'); // মঙ্গুজ স্কিমা মডেল

class UserService {
  async createUser(userData) {
    // ইমেল ইতিমধ্যে ব্যবহৃত হয়েছে কিনা চেক করা
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("ইমেইলটি ইতিমধ্যে ব্যবহৃত হয়েছে!");
    }
    
    // ডাটাবেজে ইউজার সেভ করা
    const newUser = new User(userData);
    return await newUser.save();
  }
}
module.exports = new UserService();

// =========================================================
// ২. CONTROLLER LAYER (userController.js) - রিকোয়েস্ট হ্যান্ডলিং
// =========================================================
const userService = require('./services/userService');

class UserController {
  async registerUser(req, res) {
    try {
      // রিকোয়েস্ট ডেটা ক্যাচ করে সার্ভিস লেয়ারে পাঠানো
      const newUser = await userService.createUser(req.body);
      
      // সফলতার রেসপন্স পাঠানো
      res.status(201).json(newUser);
    } catch (err) {
      // এরর রেসপন্স পাঠানো
      res.status(400).json({ error: err.message });
    }
  }
}
module.exports = new UserController();

// =========================================================
// ৩. ROUTE LAYER (userRoutes.js) - এন্ডপয়েন্ট ডিক্লারেশন
// =========================================================
const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// এন্ডপয়েন্ট রাউট ম্যাপিং
router.post('/api/users', userController.registerUser);

module.exports = router;`,
        explanations: [
          {
            line: 7,
            text: {
              bn: "সার্ভিস লেয়ার সরাসরি ডেটাবেজ মডেল (User) নিয়ে কাজ করে, কিন্তু জানে না এইচটিটিপি রিকোয়েস্ট কি।",
              en: "The Service handles business rules and Mongoose queries, keeping logic HTTP-agnostic.",
            },
          },
          {
            line: 28,
            text: {
              bn: "কন্ট্রোলার লেয়ার রিকোয়েস্ট ও রেসপন্স এক্সচেঞ্জ হ্যান্ডেল করে এবং সার্ভিস থেকে আসা ডাটা JSON করে রিটার্ন করে।",
              en: "The Controller parses request payloads, passes variables to services, and manages HTTP response statuses.",
            },
          },
          {
            line: 46,
            text: {
              bn: "রাউট ফাইলটি সম্পূর্ণ পরিষ্কার, এটি শুধু এন্ডপয়েন্ট পাথটি কন্ট্রোলারের ফাংশনের সাথে ম্যাপ করে দেয়।",
              en: "The Router maps request paths and verbs to corresponding controller action callbacks.",
            },
          },
        ],
      },
    },
    {
      id: "practice-scalable-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও প্রজেক্ট কাঠামো প্র্যাকটিস সম্পন্ন করুন। এটি আপনাকে ইন্ডাস্ট্রি-লেভেলের প্রফেশনাল সফটওয়্যার আর্কিটেকচার রপ্ত করতে সাহায্য করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your clean coding patterns before studying production login configurations and OAuth strategies in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "রাউট, কন্ট্রোলার ও সার্ভিস আলাদা করার ফলে আমরা কোডকে সহজে ইউনিট টেস্ট (Unit Test) করতে পারি।",
          en: "Separating layers permits testing business logic in services without mocking Express HTTP request parameters.",
        },
        whyWorks: {
          bn: "এটি জাভাস্ক্রিপ্ট মডিউল ইমপোর্ট-এক্সপোর্ট ডিক্লেয়ারেশন ব্যবহার করে কোডকে সম্পূর্ণ ডিকাপল্ড বা আলাদা রাখতে সাহায্য করে।",
          en: "It relies on JavaScript ES6 module imports to enforce architectural boundaries across files.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা কখনো কন্ট্রোলারে বিজনেস লজিক রাখেন না, এমনকি ডাটাবেজের সরাসরি কুয়েরি লজিকগুলোও সার্ভিসে হাইড করে রাখেন।",
          en: "Seniors treat controllers as thin wrappers, leaving all calculations and data processing to dedicated services.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় ডিজাইন ভুল হলো সার্ভিস ফাইলের ভেতর এক্সপ্রেসের \`res.json()\` বা \`res.status()\` মেথড ব্যবহার করা। এটি করলে আর্কিটেকচারাল বাউন্ডারি ভেঙে যায়।",
          en: "Calling Express response objects ('res') inside service layers. Services must only return pure JavaScript variables or promises.",
        },
        debugging: {
          bn: "অ্যাপের এরর ডিবাগ করতে নোড এক্সপ্রেস এপিআই-তে সর্বদা একটি কাস্টম গ্লোবাল এরর মিডলওয়্যার ডিক্লেয়ার করে ডাটা ক্যাচ করুন।",
          en: "Declare a global express error handler middleware to intercept and print system exceptions uniformly.",
        },
        performance: {
          bn: "ডাটাবেজ কুয়েরি ফাস্ট রাখতে সার্ভিস লেয়ারে ভারী লজিকগুলো রান করার সময় মঙ্গুজের ডাটা অবজেক্ট লুপ অপ্টিমাইজড করে কুয়েরি লিমিট করুন।",
          en: "Keep services responsive by pushing compute-heavy filtering tasks down to database indexing operations.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "arc-q1",
      question: {
        bn: "ক্লিন ব্যাকএন্ড আর্কিটেকচারে সার্ভিস লেয়ার (Service Layer)-এর মূল দায়িত্ব কোনটি?",
        en: "What is the primary responsibility of the Service Layer in clean architecture?",
      },
      options: [
        { bn: "এইচটিটিপি রেসপন্স JSON ফরম্যাটে পাঠানো", en: "Formatting HTTP JSON response streams" },
        { bn: "ব্যবসার মূল লজিক (Business Logic), ডেটা প্রসেসিং ও কুয়েরি লজিক হ্যান্ডেল করা", en: "Handling core business logic, calculations, and data processing operations" },
        { bn: "সিএসএস এনিমেশন ফাইল তৈরি করা", en: "Generating client CSS animations sheets" },
        { bn: "সার্ভার পোর্ট বন্ধ করা", en: "Stopping CPU server listeners socket ports" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সার্ভিস লেয়ার হলো অ্যাপ্লিকেশনের মস্তিষ্ক যেখানে ডেটাবেজ কুয়েরি প্রসেসিং ও ব্যবসার মূল লজিক সংরক্ষিত থাকে।",
        en: "Services process business rules, calculations, and fetch logic agnostic of HTTP protocols.",
      },
    },
    {
      id: "arc-q2",
      question: {
        bn: "কন্ট্রোলার লেয়ার (Controller Layer)-এর প্রধান কাজ কোনটি?",
        en: "What is the primary role of the Controller Layer?",
      },
      options: [
        { bn: "সরাসরি এক্সপ্রেস রাউট পাথ ডিক্লেয়ার করা", en: "Declaring URL routes endpoints directly" },
        { bn: "ক্লায়েন্টের রিকোয়েস্ট (req) গ্রহণ করা এবং রেসপন্স (res) রিটার্ন করা", en: "Receiving HTTP request objects (req) and returning response streams (res)" },
        { bn: "ডাটাবেজ সার্ভার রিস্টার্ট করা", en: "Restarting database engine instances" },
        { bn: "গিট ইগনোর ফাইল জেনারেট করা", en: "Generating version control gitignore strings" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কন্ট্রোলার রিকোয়েস্ট হ্যান্ডেল করার ট্রাফিক ম্যানেজার হিসেবে কাজ করে। সে ডাটা ক্যাচ করে সার্ভিসে পাঠায় এবং ক্লায়েন্টে রেসপন্স দেয়।",
        en: "Controllers manage the request/response cycle, forwarding variables to service classes.",
      },
    },
    {
      id: "arc-q3",
      question: {
        bn: "এক্সপ্রেস রাউট (Route) ফাইলের ভেতরে সরাসরি ডেটাবেজ কোয়েরি কোড লেখা এড়ানো উচিত কেন?",
        en: "Why should we avoid writing database query scripts inside Express Route files?",
      },
      options: [
        { bn: "এটি কোডের ভলিউম কমিয়ে দেয়", en: "It reduces overall codebase volumes" },
        { bn: "কোডের দায়িত্বের বিভাজন পরিষ্কার রাখতে এবং কোডকে সহজে স্কেল ও রিউজেবল করার জন্য", en: "To maintain Separation of Concerns, ensuring code is reusable, clean, and scaled easily" },
        { bn: "এটি করলে সার্ভার মেমরি ডিলিট হয়", en: "It wipes local server CPU memory slots" },
        { bn: "এটি সিএসএস ক্লাস রিমুভ করে", en: "It strips style classes configurations" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রাউট ফাইলের দায়িত্ব শুধু এন্ডপয়েন্ট ম্যাপ করা। এখানে কোয়েরি লিখলে কোড জগাখিচুড়ি হয়ে যায় এবং অন্য জায়গায় রি-ইউজ করা যায় না।",
        en: "Routers should only define URL entries. Mixing database scripts breaks codebase modularity.",
      },
    },
    {
      id: "arc-q4",
      question: {
        bn: "এক্সপ্রেস মিডলওয়্যার (Middleware)-এর ক্ষেত্রে প্রতিটি ফাংশনের শেষে \`next()\` কল করার গুরুত্ব কী?",
        en: "Why is calling the 'next()' function at the end of an Express middleware mandatory?",
      },
      options: [
        { bn: "সার্ভার অবিলম্বে শাটডাউন করতে", en: "To shut down the node app listener instantly" },
        { bn: "পরবর্তী মিডলওয়্যার বা কন্ট্রোলার ফাংশনে রিকোয়েস্ট প্রসেস করতে", en: "To forward request execution to the next middleware or controller callback" },
        { bn: "ডাটাবেজের সমস্ত টেবিল ডিলিট করতে", en: "To delete all tables database records" },
        { bn: "এটি জাভাস্ক্রিপ্ট ক্যাশ রিলোড করে", en: "It refreshes JavaScript browser caches" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "next() কল না করলে এক্সপ্রেস রিকোয়েস্ট প্রসেসিং মাঝপথে আটকে রাখবে এবং ক্লায়েন্ট ড্যাশবোর্ড দীর্ঘক্ষণ লোড হতে থাকবে।",
        en: "Omitting next() halts Express execution, causing client requests to freeze on page mounts.",
      },
    },
    {
      id: "arc-q5",
      question: {
        bn: "ফ্যাক্টরি কারখানার রূপকে কারখানার খেলনা বানানোর মূল দক্ষ কারিগর বা শ্রমিক (Worker) নিচের কোন স্তরের সাথে মিলে যায়?",
        en: "In the Factory Metaphor, the assembler technician worker represents which architecture layer?",
      },
      options: [
        { bn: "রাউট স্তর (Route Layer)", en: "Route Layer" },
        { bn: "কন্ট্রোলার স্তর (Controller Layer)", en: "Controller Layer" },
        { bn: "সার্ভিস স্তর (Service Layer)", en: "Service Layer" },
        { bn: "ডাটাবেজ স্তর (Model Layer)", en: "Database/Model Layer" },
      ],
      correctAnswerIndex: 2,
      explanation: {
        bn: "শ্রমিক হলো সার্ভিস লেয়ার যে খেলনা অ্যাসেম্বল বা ডাটা প্রসেস করে। সে জানে না কোন কাস্টমার অর্ডারটি করেছে।",
        en: "Services act as factory floor technicians, processing business logic without needing HTTP context.",
      },
    },
  ],
  practice: [
    {
      bn: "১. ক্লিন ব্যাকএন্ড প্রজেক্ট স্ট্রাকচারে সার্ভিস ফাইলের ভেতর কেন এক্সপ্রেসের \`res\` অবজেক্ট ব্যবহার করা মারাত্মক ডিজাইন এরর?",
      en: "1. Argue why returning HTTP response parameters ('res') from service layer methods violates architectural boundaries.",
    },
    {
      bn: "২. কীভাবে এক্সপ্রেসের গ্লোবাল এরর মিডলওয়্যার এপিআই ট্রানজ্যাকশনে এরর ডিটেকশন সহজ করে?",
      en: "2. Outline the benefits of mounting a centralized Express error handling middleware.",
    },
    {
      bn: "৩. একটি বিশাল ই-কমার্স এপিআই প্রজেক্টে কন্ট্রোলার লেয়ার ডিকাপল করার ৩টি প্রধান সুবিধা লিখুন।",
      en: "3. Detail three production advantages of decoupling controller layouts from router functions.",
    },
  ],
  assignment: {
    title: {
      bn: "রাউট-কন্ট্রোলার-সার্ভিস রিফ্যাক্টরিং প্রজেক্ট",
      en: "Express Route-Controller-Service Architectural Refactor",
    },
    description: {
      bn: "নিচে দেওয়া জগাখিচুড়ি এক্সপ্রেস কোডটিকে একটি প্রফেশনাল কোম্পানির স্ট্যান্ডার্ড অনুযায়ী ৩টি আলাদা ফাইলে (Route, Controller এবং Service লেয়ার) রিফ্যাক্টর করে সুন্দরভাবে স্ট্রাকচার করুন।",
      en: "Refactor the monolithic Express route handler shown below. Separate the logic into three distinct layers conforming to enterprise standards: Route Layer (url configuration), Controller Layer (http boundaries), and Service Layer (db transactions).",
    },
    starterCode: `// Bloated monolithic route - Refactor this!
const express = require('express');
const router = express.Router();
const User = require('./models/User');

// জগাখিচুড়ি রাউট (একাই রাউট, লজিক ও কুয়েরি করছে)
router.post('/api/users', async (req, res) => {
  try {
    const { email } = req.body;
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "ইমেইল ইতিমধ্যে ব্যবহৃত হয়েছে!" });
    }
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
`,
    solution: {
      code: `// Refactored Solution (layered Clean Architecture)
// =========================================================
// ১. SERVICE LAYER: services/userService.js
// =========================================================
const User = require('../models/User');

class UserService {
  async registerNewUser(userData) {
    const existing = await User.findOne({ email: userData.email });
    if (existing) {
      throw new Error("ইমেইল ইতিমধ্যে ব্যবহৃত হয়েছে!");
    }
    const user = new User(userData);
    return await user.save();
  }
}
module.exports = new UserService();

// =========================================================
// ২. CONTROLLER LAYER: controllers/userController.js
// =========================================================
const userService = require('../services/userService');

class UserController {
  async signUp(req, res) {
    try {
      const newUser = await userService.registerNewUser(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      // ৪00 Bad Request status code
      res.status(400).json({ error: err.message });
    }
  }
}
module.exports = new UserController();

// =========================================================
// ৩. ROUTE LAYER: routes/userRoutes.js
// =========================================================
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/api/users', userController.signUp);

module.exports = router;`,
      explanation: {
        bn: "অসাধারণ রিফ্যাক্টরিং! রাউট, কন্ট্রোলার এবং সার্ভিস লেয়ার আলাদা করার ফলে ব্যাকএন্ড কোডটি শতভাগ পরিচ্ছন্ন ও প্রোডাকশন-রেডি হয়েছে।",
        en: "Perfect decoupling! Splitting bloated router files into distinct route registers, HTTP controllers, and data-access services matches company-level clean code rules.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "সফটওয়্যার আর্কিটেকচারের ক্ষেত্রে 'Fat Model, Skinny Controller' প্যাটার্ন বলতে কী বোঝায় এবং এটি স্কেলেবল প্রজেক্ট ডিজাইনে কেন গুরুত্বপূর্ণ?",
        en: "Explain the 'Fat Model, Skinny Controller' (or 'Thin Controller') pattern and why it is critical for scalable project design.",
      },
      answer: {
        bn: "ক্লিন আর্কিটেকচারে ডিকাপলিং প্যাটার্ন এবং এর প্রডাকশন গুরুত্ব নিচে দেওয়া হলো:\n১. Skinny Controller (পাতলা কন্ট্রোলার): কন্ট্রোলারের দায়িত্ব অত্যন্ত সীমিত হওয়া উচিত। সে শুধু ক্লায়েন্ট রিকোয়েস্ট ইনপুট রিসিভ করবে এবং সার্ভিস বা মডেল লেয়ারকে দিয়ে রেসপন্স রিটার্ন করবে। কন্ট্রোলারে কোনো ব্যবসায়িক হিসাব-নিকাশ বা লজিক থাকতে পারবে না।\n২. Fat Model/Service (ভারী সার্ভিস): অ্যাপ্লিকেশনের সমস্ত গাণিতিক লজিক, পাসওয়ার্ড চেক, সেশন ফিল্টারিং এবং ডেটাবেজ ট্রানজ্যাকশনগুলো সার্ভিস ও মডেলে সংরক্ষিত থাকবে।\n৩. স্কেলেবিলিটির সুবিধা: এই প্যাটার্ন ব্যবহারের ফলে এপিআই প্রোটোকল পরিবর্তন করা সহজ হয় (যেমন: এক্সপ্রেসের বদলে যদি আমরা GraphQL বা gRPC আর্কিটেকচার ব্যবহার করতে চাই, তবে মূল সার্ভিস কোড চেঞ্জ না করেই শুধু পাতলা কন্ট্রোলার বদলালেই হবে)। এছাড়া ডিকাপল্ড কোডে ইউনিট টেস্টিং করা শতভাগ সহজ হয়।",
        en: "The design rule encourages keeping controller contexts narrow while pushing computation down to services or model filters:\n1. Thin Controllers: A controller should focus strictly on HTTP mechanisms. It receives inputs, invokes services, maps variables, and handles headers. It contains zero business logic.\n2. Rich Services/Models: Contain data calculation pipelines, transactional rules, and model validations. They remain independent of HTTP req/res frameworks.\n3. Modular Benefits: Prevents vendor-lock. If your team migrates from Express to Koa, Fastify, or GraphQL, the entire core service layer remains untouched; you only rewrite thin controller wrappers. It also facilitates running automated unit tests on pure services."
      },
    },
    {
      question: {
        bn: "ক্লিন আর্কিটেকচার (Clean Architecture) অনুসরণের ফলে কোড রক্ষণাবেক্ষণ (Maintenance) এবং সোর্স কোড টেস্টিং (Testing)-এর ক্ষেত্রে কী কী ইন্ডাস্ট্রি বেনিফিট পাওয়া যায়?",
        en: "What are the industry benefits of adopting Clean Architecture in terms of software maintenance and source code testing?",
      },
      answer: {
        bn: "ক্লিন আর্কিটেকচার ব্যবহারের মাধ্যমে সফটওয়্যার মেইনটেন্যান্স ও টেস্টিংয়ে যে সকল ইন্ডাস্ট্রি বেনিফিট পাওয়া যায়:\n১. সহজ রক্ষণাবেক্ষণ (Low Maintenance Cost): কোডের কোনো অংশে বাগ দেখা দিলে (যেমন: ইউজার ক্রিয়েশনে এরর) আমরা সরাসরি \`userService.js\` ফাইলে চলে যেতে পারি। অন্যান্য রাউট বা মিডলওয়্যার ফাইলগুলোতে হাত দিতে হয় না। ফলে ডেভলপমেন্ট ধীর গতির কোড ক্র্যাশ থেকে রক্ষা পায়।\n২. মকিং ছাড়া টেস্টিং (Testability without Mocking): যেহেতু সার্ভিস লেয়ার এক্সপ্রেস অবজেক্ট (\`req\`, \`res\`) মুক্ত, তাই টেস্টিং ফ্রেমওয়ার্ক (যেমন: Jest, Mocha) দিয়ে সরাসরি সার্ভিস ক্লাস টেস্ট করা যায়। এর জন্য ভুয়া এক্সপ্রেস রিকোয়েস্ট মক করার জটিলতা পোহাতে হয় না।\n৩. ডেভেলপার অনবোর্ডিং (Developer Onboarding): বড় টিমগুলোতে নতুন ডেভেলপাররা ডিরেক্টরি দেখেই সহজে বুঝে ফেলেন কোডের কোন লেয়ার কী কাজ করছে। ফলে টিমের প্রোডাক্টিভিটি দ্বিগুণ হয়ে যায়।",
        en: "Clean architecture increases development velocity and shields systems from regressions:\n1. Targeted Maintenance: When bugs occur (e.g. discount calculations fail), engineers debug services directly without scanning middleware or route handlers, reducing unintended code breaks.\n2. Lightweight Mock-free Unit Tests: Because services deal with pure parameters and data arrays rather than Express framework parameters, you can test methods using Jest/Mocha without mocking HTTP request payloads.\n3. Faster Developer Onboarding: Standardized route-controller-service separations allow newly joined developers to understand data pathways instantly, decreasing code churn and accelerating feature releases."
      },
    },
  ],
};
