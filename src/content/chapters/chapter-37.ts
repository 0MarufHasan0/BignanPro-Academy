import { Chapter } from "@/types";

export const chapter37Content: Chapter = {
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
  objectives: [
    {
      bn: "সম্পূর্ণ ফুলস্ট্যাক আর্কিটেকচারের সকল স্তরের সংযোগ ও ইন্টিগ্রেশন সম্পন্ন করা।",
      en: "Synthesize all layers of a full-stack architecture into a unified workflow.",
    },
    {
      bn: "ফ্রন্টএন্ড থেকে লোডিং স্টেট ও এরর হ্যান্ডলিং সহ অ্যাসিনক্রোনাস ডেটা ফেচিং নিশ্চিত করা।",
      en: "Configure frontend async fetch queries with loading indicators and error handle logic.",
    },
    {
      bn: "প্রটেক্টেড এপিআই এবং সেশন ভ্যালিডেশনের মাধ্যমে সাইটের নিরাপত্তা বৃদ্ধি করা।",
      en: "Protect private resources using secure tokens validation and routing middlewares.",
    },
    {
      bn: "প্রোডাকশন-লেভেলের ফোল্ডার স্ট্রাকচার এবং ডেপ্লয়মেন্টের নিয়মাবলি বোঝা।",
      en: "Structure full-stack directory layouts matching professional scale guidelines.",
    },
  ],
  sections: [
    {
      id: "fullstack-architecture",
      title: {
        bn: "১. ফুলস্ট্যাক আর্কিটেকচার ও প্রজেক্ট কাঠামো (Fullstack Architecture & Structure)",
        en: "1. Fullstack Architecture & Project Structure",
      },
      content: {
        bn: `## Fullstack Architecture (ফুলস্ট্যাক আর্কিটেকচার)
একটি প্রফেশনাল ওয়েব অ্যাপ্লিকেশন মূলত ৪টি প্রধান স্তম্ভের সমন্বয়ে গড়ে ওঠে:

1.  **Frontend (Next.js UI)**: ব্যবহারকারীর ব্রাউজার যেখানে বাটন, ইনপুট এবং ভিজ্যুয়াল ড্যাশবোর্ড রেন্ডার হয়।
2.  **Backend (Express API)**: সার্ভার-সাইড ইঞ্জিন যা লজিক প্রসেস ও সিকিউরিটি ফিল্টারিং হ্যান্ডেল করে।
3.  **Database (MongoDB)**: যেখানে ইউজারের তথ্য ও ফাইল পার্মানেন্টলি সংরক্ষিত থাকে।
4.  **Auth (JWT / Better Auth)**: সেশন এবং আইডি প্রটেকশন ভেরিফিকেশন ব্যবস্থা।

---

## Directory Structure (ডিরেক্টরি কাঠামো)
ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্টে ফ্রন্টএন্ড এবং ব্যাকএন্ড কোডকে আলাদা রিপোজিটরি অথবা মডিউল ফোল্ডারে ভাগ করে সাজানো হয়:

\`\`\`text
my-fullstack-app/
├── frontend/                # Next.js (App Router)
│   ├── app/
│   │   ├── dashboard/page.js # ড্যাশবোর্ড পেজ ভিউ
│   │   └── layout.js
│   └── components/
└── backend/                 # Express.js Server
    ├── models/              # Mongoose Schemas (User.js, Course.js)
    ├── controllers/         # Route Logic handlers (authController.js)
    ├── routes/              # API endpoints (api.js)
    ├── middleware/          # Security filters (authMiddleware.js)
    └── server.js            # Entry entry server.js listener
\`\`\`

এই পরিচ্ছন্ন ডিরেক্টরি কাঠামো আমাদের 'Separation of Concerns' বা দায়িত্বের বিভাজন নিশ্চিত করে, ফলে প্রজেক্ট সহজে স্কেল করা যায়।`,
        en: `## Fullstack Architecture
A professional web application is anchored by four modular system layers:
1.  **Frontend (Next.js UI)**: The client viewport rendering graphics, form fields, and widgets.
2.  **Backend (Express API)**: The server controller executing schema validations and credentials checks.
3.  **Database (MongoDB)**: The non-volatile disk layer containing collection documents.
4.  **Auth (JWT / NextAuth)**: The guard issuing and verifying active session tokens.

---

## Directory Structure
Production architectures isolate client interface files from server business models:

\`\`\`text
my-fullstack-app/
├── frontend/                # Next.js (Client UI)
│   ├── app/
│   │   ├── dashboard/page.js # Dashboard panel viewport
│   │   └── layout.js
│   └── components/
└── backend/                 # Express Server (Server engine)
    ├── models/              # Mongoose Models (User.js)
    ├── controllers/         # Logic handlers
    ├── routes/              # Express API Route mappings
    ├── middleware/          # JWT Verification layers
    └── server.js            # Node listener entry
\`\`\`

This clean isolation guarantees "Separation of Concerns", preventing client code updates from breaking server calculations.`,
      },
    },
    {
      id: "end-to-end-data-flow",
      title: {
        bn: "২. এন্ড-টু-এন্ড ডাটা ফ্লো ও ফ্রন্টএন্ড সংযোগ (End-to-End Data Flow & Integration)",
        en: "2. End-to-End Data Flow & Frontend Integration",
      },
      content: {
        bn: `## End-to-End Data Flow (পূর্ণাঙ্গ তথ্যপ্রবাহ)
ফুলস্ট্যাক সিস্টেমে তথ্য এক স্থান থেকে অন্য স্থানে চক্রাকারে ঘোরে:
\`\`\`
User Action ➡️ UI Fetch ➡️ HTTP Request ➡️ API Route ➡️ DB Query ➡️ DB Document ➡️ JSON Response ➡️ React State Update ➡️ UI Rerendering
\`\`\`

---

## Integrating Frontend Fetches (ফ্রন্টএন্ড ডাটা ফেচিং)
রিঅ্যাক্ট ফ্রন্টএন্ড থেকে ব্যাকএন্ড এপিআই কল করার সময় ৩টি বিষয় সর্বদা হ্যান্ডেল করতে হবে:
1.  **Loading State**: নেটওয়ার্ক রিকোয়েস্ট শেষ হওয়ার আগ পর্যন্ত একটি স্পিনার বা কঙ্কাল উইজেট দেখানো।
2.  **Error Handling**: সার্ভার ডাউন বা ইন্টারনেট না থাকলে এরর মেসেজ স্ক্রিনে প্রিন্ট করা।
3.  **Data Render**: ডাটা লোড হওয়ার পর স্টেট ভ্যারিয়েবলে স্টোর করে স্ক্রিনে ম্যাপ করা।

\`\`\`javascript
// রিঅ্যাক্ট ডাটা ফেচিং লজিক
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  fetch('http://localhost:5000/api/courses')
    .then(res => res.json())
    .then(courses => {
      setData(courses);
      setLoading(false);
    })
    .catch(err => {
      setError("ডেটা লোড করতে ব্যর্থ!");
      setLoading(false);
    });
}, []);
\`\`\``,
        en: `## End-to-End Data Flow
Information flows in a continuous cycle across boundaries:
\`\`\`
User Action ➡️ UI Fetch ➡️ HTTP Request ➡️ API Route ➡️ DB Query ➡️ DB Document ➡️ JSON Response ➡️ React State Update ➡️ UI Rerendering
\`\`\`

---

## Integrating Frontend Fetches
When querying server APIs from React wrappers, manage three distinct network lifecycle states:
1.  **Loading States**: Show skeleton grids while requests are in transit to avoid layout shifts.
2.  **Error Envelopes**: Catch rejected promises to output clean alerts on viewports.
3.  **Success Rendering**: Commit resolved JSON arrays to React state loops.

\`\`\`javascript
// React Async Fetch Pattern
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  fetch('http://localhost:5000/api/courses')
    .then(res => res.json())
    .then(courses => {
      setData(courses);
      setLoading(false);
    })
    .catch(err => {
      setError("Failed to fetch courses catalog.");
      setLoading(false);
    });
}, []);
\`\`\``,
      },
    },
    {
      id: "system-authentication",
      title: {
        bn: "৩. সিস্টেম অথেন্টিকেশন ও প্রটেক্টেড রাউটস (System Auth & Protected Routes)",
        en: "3. System Authentication & Protected Routes",
      },
      content: {
        bn: `## Auth Flow in Composed Systems (সিস্টেম অথেন্টিকেশন)
ফুলস্ট্যাক সিকিউরিটি সিস্টেম মূলত সেশন ভ্যালিডেশনের মাধ্যমে পরিচালিত হয়:
1.  **লগইন ও টোকেন গ্রহণ**: ব্যবহারকারী তার ইমেল ও পাসওয়ার্ড দিয়ে লগইন করলে সার্ভার তাকে একটি সাইনড JWT টোকেন দেয়।
2.  **টোকেন স্টোরেজ**: ক্লায়েন্ট টোকেনটি মেমরিতে অথবা সিকিউর কুকিজে সেভ রাখে।
3.  **অনুরোধ যাচাই**: এর পর ইউজার যেকোনো এপিআই কল (যেমন: প্রফাইল আপডেট) করার সময় রিকোয়েস্ট হেডারে টোকেনটি পাঠায়: 'Authorization: Bearer <token>'।
4.  **মিডলওয়্যার ফিল্টারিং**: ব্যাকএন্ড সার্ভার মিডলওয়্যার দিয়ে টোকেন ডিকোড করে যদি দেখে টোকেন ভ্যালিড ও সেশন সতেজ, কেবল তবেই ডেটাবেজ এক্সেস করার অনুমতি দেয়।

---

## Protected Pages (সুরক্ষিত পেজসমূহ)
লগইন ছাড়া কোনো ব্যবহারকারী ড্যাশবোর্ড বা সেটিংসের মতো প্রটেক্টেড পেজে প্রবেশ করতে চাইলে ফ্রন্টএন্ড রাউটার তাকে রিডাইরেক্ট করে লগইন পেজে পাঠিয়ে দেয়। এটি ক্লায়েন্ট এবং সার্ভার উভয় স্থানেই হ্যান্ডেল করা বাধ্যতামূলক।`,
        en: `## Auth Flow in Composed Systems
Authentication bridges the frontend view state with database security policies:
1.  **Credential Submission**: The client posts login forms. The server hashes inputs, validates MongoDB logs, and issues signed JWT keys.
2.  **Token Storing**: The browser caches keys or writes them directly to secure HTTP-only cookies.
3.  **Auth Headers**: Future API requests (e.g. updating profile details) append keys in headers: 'Authorization: Bearer <token>'.
4.  **Server Decrypt**: The Express router passes requests through verify middleware, resolving queries only if signatures verify.

---

## Protected Pages
If an unauthenticated browser attempts to load private panels (like '/dashboard'), frontend router guards intercept the transition, redirecting the user back to '/login' immediately.`,
      },
    },
    {
      id: "deployment-readiness",
      title: {
        bn: "৪. প্রডাকশন রেডি মাইন্ডসেট ও ডেপ্লয়মেন্ট (Production & Deployment Mindset)",
        en: "4. Production Readiness & Deployment Mindset",
      },
      content: {
        bn: `## Production Readiness (প্রোডাকশন চেকলিস্ট)
কোড লোকালহোস্টে রান করার পর সেটিকে ইন্টারনেটে ডেপ্লয় করার পূর্বে ৩টি মূল কাজ করতে হবে:

১.  **Environment Variables (.env)**: ডাটাবেজের গোপন লিংক (\`MONGO_URI\`) এবং জেডাব্লিউটি সিক্রেট কি (\`JWT_SECRET\`) কখনই সোর্স কোডে রাখা যাবে না। এগুলো সার্ভারের সিক্রেট এনভায়রনমেন্ট ফাইলে রাখতে হবে।
২.  **CORS Configuration**: ফ্রন্টএন্ড ও ব্যাকএন্ড আলাদা সার্ভারে ডেপ্লয় হবে (যেমন: ফ্রন্টএন্ড Vercel-এ এবং ব্যাকএন্ড Render-এ)। এক্সপ্রেস সার্ভারে নির্দিষ্ট অরিজিন সেট করে CORS প্রটেকশন অন রাখতে হবে।
৩.  **Global Error Catchers**: এক্সপ্রেস সার্ভারে আনহ্যান্ডেলড রিজেকশন বা এরর হ্যান্ডলার ডিক্লেয়ার করা আবশ্যক যেন সার্ভার হুট করে ডাউন না হয়।

---

## Basic Deployment Architecture (ডেপ্লয়মেন্ট সিস্টেম)
*   **Frontend**: Next.js অ্যাপ্লিকেশনটি আমরা দ্রুতগতির গ্লোবাল সিডিএন নেটওয়ার্ক **Vercel**-এ ডেপ্লয় করি।
*   **Backend Server**: এক্সপ্রেস ব্যাকএন্ড সার্ভারটি আমরা **Render** বা **Heroku**-এর মতো ক্লাউড হোস্টে রান করাই।
*   **Database Host**: মঙ্গোডিবি ক্লাউড ডাটাবেজ সার্ভিস **MongoDB Atlas**-এ হোস্টিং করা হয়।`,
        en: `## Production Readiness
Before shipping local projects to live web hosting, complete three security configurations:
1.  **Environment Setup (.env)**: Extract all secret keys (JWT passwords, Mongo credentials) into server environment files. Never commit environment variables to GitHub repositories.
2.  **CORS Mapping**: Set strict origin parameters. If the client runs on Vercel and the backend server runs on Render, configure Express CORS middleware to permit requests only from the client's URL.
3.  **Centralized Error Handling**: Implement global Express error catches to respond with semantic error formats and prevent unexpected server crashes.

---

## Basic Deployment Architecture
*   **Frontend Hosting**: Next.js builds compile into static assets deployed globally on **Vercel**.
*   **Backend Hosting**: Express servers run on cloud application containers like **Render**, **Railway**, or AWS.
*   **Database Cloud**: The MongoDB engine is hosted on managed database services like **MongoDB Atlas**.`,
      },
    },
    {
      id: "mistakes-analogy",
      title: {
        bn: "৫. সাধারণ ভুল ও হাসপাতালের রূপক (Common Mistakes & Metaphors)",
        en: "5. Common Mistakes & Analogies",
      },
      content: {
        bn: `## Common Mistakes (সাধারণ ভুলসমূহ)
*   **ডাটাবেজ পাসওয়ার্ড গিটহাবে পুশ করা**: \`.env\` ফাইল গিটইগনোর (\`.gitignore\`)-এ যুক্ত না করে গিটহাবে আপলোড করে দেওয়া। এতে ডাটাবেজ সাথে সাথে হ্যাক হতে পারে।
*   **এরর হ্যান্ডলিং না রাখা**: ফ্রন্টএন্ডে ফেচ কলের ক্যাচ ব্লকে \`catch(err)\` না রেখে এরর ফিল্টার ফাঁকা রাখা। ব্যাকএন্ড ক্র্যাশ করলে ইউজার স্ক্রিন অনির্দিষ্টকালের জন্য ঝুলে থাকে, লোডিং স্পিনার থামে না।
*   **সিঙ্গেল ফোল্ডার জগাখিচুড়ি**: ফ্রন্টএন্ড ও ব্যাকএন্ডের কোড ফাইল একই ডিরেক্টরিতে গুলিয়ে ফেলা। দায়িত্বের বিভাজন পরিষ্কার রাখুন।

---

## The Hospital Analogy (হাসপাতালের রূপক)
একটি সম্পূর্ণ ফুলস্ট্যাক প্রডাকশন সিস্টেমকে একটি সুশৃঙ্খল আধুনিক হাসপাতালের সিস্টেমের সাথে মিলিয়ে নিন:
*   **রিসেপশন কাউন্টার ও টিকিট বুকিং (The Frontend)**: হাসপাতালের সামনের বুথ যেখানে রোগীরা বসেন, ফর্ম ফিলাপ করেন ও টিকিট কাটেন। এটি দৃশ্যমান ও আকর্ষণীয় (আমাদের Next.js UI)।
*   **আইডি ভেরিফিকেশন গার্ড (Authentication)**: ভেতরের রুমে ঢোকার আগে গার্ড যেমন টিকিট ও রোগীর আইডি কার্ড ভেরিফাই করে (আমাদের JWT/Better Auth)।
*   **ডাক্তার বা কনসালটেন্ট (The Backend Server)**: ওষুধি লজিক বিশ্লেষণকারী আসল ডাক্তার, যিনি রোগীর সমস্যা শুনে ব্যবস্থাপত্র তৈরি করেন (আমাদের Express API)।
*   **মেডিকেল রেকর্ডস ও ড্রয়ার (The Database)**: হাসপাতালের পেছনের ফাইল কেবিনেট যেখানে সব রোগীর আগের হিস্টোরি ও ফাইল লক করা থাকে (আমাদের MongoDB)। ডাক্তার নিজে ফাইলের ড্রয়ারে যান না, পিয়ন ফাইল এনে দেয় (মঙ্গুজ ওআরএম)।`,
        en: `## Common Mistakes
*   **Committing secrets to Git**: Neglecting to add '.env' to '.gitignore'. Hijackers run bots scanning repositories for exposed database connections.
*   **Swallowing exceptions**: Leaving empty '.catch()' blocks in React query hooks. If servers crash, user pages freeze on infinite loader cycles.
*   **Tangled Directories**: Mixing Express server routers and Next.js view hooks inside a single, disorganized directory. Keep a clean separation between folders.

---

## The Hospital Metaphor
*   **Reception Counter (The Frontend)**: The clean front desk lobby where visitors fill out appointment forms. It is visual, organized, and public.
*   **Security Guard (Authentication)**: The entrance security officer checking passports and visitor badges before letting anyone pass to private rooms.
*   **Medical Doctor (The Backend Server)**: The specialist analyzing diagnostic reports, enforcing medical checks, and writing prescriptions in private rooms.
*   **Record Cabinets (The Database)**: The secure storage room containing patient files (MongoDB). The doctor requests files via record clerks (Mongoose ODM).`,
      },
      codeBlock: {
        fileName: "frontend/Dashboard.jsx",
        language: "jsx",
        code: `import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // ১. লোকালস্টোরেজ বা কুকি থেকে টোকেন নেওয়া
    const token = localStorage.getItem('userToken');

    if (!token) {
      setError("অনুমতি নেই! অনুগ্রহ করে লগইন করুন।");
      setLoading(false);
      return;
    }

    // ২. প্রটেক্টেড এপিআই ফেচ রিকোয়েস্ট (হেডারে টোকেন সহ)
    fetch('http://localhost:5000/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${token}\` // Bearer ফরম্যাটে টোকেন পাস করা
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("টোকেন ইনভ্যালিড বা এক্সপায়ার হয়েছে!");
        }
        return res.json();
      })
      .then(data => {
        setProfile(data.user);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6 text-slate-500 text-sm">লোড হচ্ছে...</div>;
  if (error) return <div className="p-6 text-red-500 text-sm font-semibold">{error}</div>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm mt-10">
      <h2 className="text-xl font-bold text-slate-800">ইউজার ড্যাশবোর্ড</h2>
      <div className="mt-4 pt-4 border-t border-slate-50">
        <p className="text-sm text-slate-500">ইমেল অ্যাড্রেস:</p>
        <p className="text-base font-semibold text-slate-800">{profile?.email}</p>
        <span className="mt-4 inline-block bg-indigo-50 text-indigo-600 text-xs font-bold px-2.5 py-1 rounded-md">
          প্রিমিয়াম মেম্বার
        </span>
      </div>
    </div>
  );
}`,
        explanations: [
          {
            line: 10,
            text: {
              bn: "localStorage.getItem('userToken') ফ্রন্টএন্ডে পূর্বে স্টোর করে রাখা লগইন টোকেনটি রিড করে।",
              en: "Reads the active session JWT token from local client storage.",
            },
          },
          {
            line: 21,
            text: {
              bn: "headers: { 'Authorization': `Bearer ${token}` } রিকোয়েস্টের সাথে টোকেনটি ব্যাকএন্ড এপিআই মিডলওয়্যারে পাঠায়।",
              en: "Attaches the token to the HTTP Authorization header in the standard Bearer scheme.",
            },
          },
          {
            line: 24,
            text: {
              bn: "res.ok চেক করে যদি রেসপন্স স্ট্যাটাস কোড ২০০ না হয়ে ৪০১ বা ৪MD হয়, তবে ক্যাচ ব্লকে এরর ফ্লো থ্রো করে।",
              en: "Validates the HTTP response status. If the server rejects the token, it throws an error to the catch block.",
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
নিচের কুইজ ও প্রজেক্ট আর্কিটেকচার অনুশীলনটি সম্পন্ন করুন। এটি আপনার ফুলস্ট্যাক ক্যারিয়ার প্রস্তুতি যাচাই করতে সাহায্য করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your full-stack system concepts before configuring live host environments and CI/CD deployment pipelines.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "ফুলস্ট্যাক ইন্টিগ্রেশন মূলত ফ্রন্টএন্ড ইন্টারফেস ও ব্যাকএন্ড সিকিউরিটিকে একীভূত করে একটি রিয়েল অ্যাপ্লিকেশন সলিউশন তৈরি করে।",
          en: "Full-stack integration maps interface logic to secure database records, yielding production software.",
        },
        whyWorks: {
          bn: "এটি এইচটিটিপি নেটওয়ার্কিং রিকোয়েস্ট প্রোটোকলের সমন্বয়ে এপিআই চ্যানেল ম্যাপ করে ডাটা এক্সচেঞ্জ কনভার্ট করে।",
          en: "It binds separate network processes using standardized JSON payloads over HTTP channels.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা এপিআই কল করার সময় গ্লোবাল কনফিগারেশনে রুট পাথ বা 'Base URL' এক জায়গায় কনফিগার করে রাখেন যেন পরবর্তীতে ডোমেইন চেঞ্জ সহজ হয়।",
          en: "Seniors declare API Base URLs in centralized configuration files to simplify swapping staging and production environments.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় ফুলস্ট্যাক ভুল হলো প্রডাকশন বিল্ড করার সময় লোকালহোস্টের হার্ডকোডেড লিংক (\`localhost:5000\`) ফ্রন্টএন্ড কোডে রেখে দেওয়া।",
          en: "Leaving localhost hardcoded in frontend files on production. Set server URLs dynamically using environment keys.",
        },
        debugging: {
          bn: "ব্রাউজার ডাটা ব্লক করলে ক্রোম ইন্সপেক্টরের 'Network' ট্যাব অন করে এপিআই রেসপন্সের 'CORS headers' এন্ট্রি চেক করুন।",
          en: "If network requests fail, inspect browser devtools 'Network' tabs to review CORS headers and cookies flags.",
        },
        performance: {
          bn: "ফ্রন্টএন্ড পেজ ফাস্ট রাখতে ডাটাবেজের রিলেশন ম্যাপ ও ভারী এপিআই ডাটা প্রসেসিং এক্সপ্রেসেই ব্যাকগ্রাউন্ডে সমাধান করে ফেলুন।",
          en: "Minimize API response size by returning only the fields required for the UI, keeping mobile load times fast.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "int-sys-q1",
      question: {
        bn: "একটি আধুনিক ফুলস্ট্যাক অ্যাপ্লিকেশনের প্রধান ৪টি মূল স্তর কী কী?",
        en: "What are the four core layers of a modern full-stack web application?",
      },
      options: [
        { bn: "HTML, CSS, JS, Vscode", en: "HTML, CSS, JS, VS Code editor" },
        { bn: "Frontend UI, Backend API, Database, Authentication", en: "Frontend UI, Backend API, Database, and Authentication" },
        { bn: "Git, GitHub, Vercel, Node", en: "Git, GitHub, Vercel, and Node" },
        { bn: "Figma, Node, CSS, RAM", en: "Figma, Node, CSS, and RAM" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "আধুনিক ওয়েব অ্যাপ্লিকেশনে ইউজার ইন্টারফেস (Next.js), সার্ভার লজিক (Express), ডেটা স্টোরেজ (MongoDB) এবং নিরাপত্তা (JWT/Auth) এর কম্বিনেশন থাকে।",
        en: "Full-stack apps require UIs, server endpoints, persistent storage engines, and user authentication.",
      },
    },
    {
      id: "int-sys-q2",
      question: {
        bn: "লগইন করা ব্যবহারকারীদের জন্য সুরক্ষিত এপিআই (যেমন /api/profile) অ্যাক্সেস সিকিউর করার সঠিক মেকানিজম কোনটি?",
        en: "How do we authorize access to private API resources (e.g. /api/profile)?",
      },
      options: [
        { bn: "পাসওয়ার্ড সরাসরি ইউআরএল লিংকে পাঠানো", en: "Sending raw password strings directly in URL link parameters" },
        { bn: "অনুরোধের HTTP Authorization হেডার Bearer টোকেন ভেরিফাই করা", en: "Verifying a signed JWT Bearer Token in the HTTP Authorization header using server middlewares" },
        { bn: "সার্ভারের ফাইল ডিলিট করে দেওয়া", en: "Removing server files database collections" },
        { bn: "ডাটাবেজ পাসওয়ার্ড চেঞ্জ করা", en: "Altering database credentials" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সুরক্ষিত রাউটগুলোতে ক্লায়েন্ট হেডারের Bearer টোকেন চেক করে এক্সপ্রেস মিডলওয়্যার যদি প্রমাণ পায় টোকেন ভ্যালিড, তবেই ডাটা রিটার্ন করে।",
        en: "Middlewares intercept requests, verifying signed JWT Bearer keys before resolving database operations.",
      },
    },
    {
      id: "int-sys-q3",
      question: {
        bn: "লকালহোস্ট কোড ইন্টারনেটে ডেপ্লয় করার পূর্বে গোপন পাসওয়ার্ড ও ডাটাবেজ লিংক (.env) সোর্স কোড থেকে সরানোর কারণ কী?",
        en: "Why must secrets (database keys, JWT secrets) be extracted to environment variables (.env) before deployment?",
      },
      options: [
        { bn: "এতে কোডের ফন্ট সাইজ বাড়ে", en: "It scales up UI text sizes" },
        { bn: "গোপন ক্রেডেনশিয়াল যেন গিটহাবে লিক না হয় এবং সিকিউর থাকে", en: "To prevent exposing credentials in public Git repositories, protecting databases from hijacking" },
        { bn: "সার্ভারের র‍্যাম ফ্রি করতে", en: "To clear backend CPU memory leaks" },
        { bn: "ইউআই ডিজাইন পরিবর্তন করতে", en: "To change layout colors styles" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডাটাবেজ সিক্রেট কি সোর্স কোডে লিখে গিটহাবে পুশ করলে হ্যাকাররা বট দিয়ে তা স্ক্যান করে ডাটাবেজ ডিলিট বা হাইজ্যাক করে ফেলতে পারে।",
        en: "Centralizing keys in environment variables keeps credentials out of version control systems.",
      },
    },
    {
      id: "int-sys-q4",
      question: {
        bn: "ফ্রন্টএন্ড এবং ব্যাকএন্ড ভিন্ন হোস্টিং ডোমেইনে চললে ব্রাউজারের ডাটা ব্লকিং এরর বা CORS এড়াতে এক্সপ্রেস ব্যাকএন্ডে কী করতে হয়?",
        en: "How does the Express server permit requests from client apps hosted on a different domain (CORS)?",
      },
      options: [
        { bn: "ডাটাবেজ কানেকশন অফ করে দেওয়া", en: "Closing database client sessions" },
        { bn: "ব্যাকএন্ডে cors() মিডলওয়্যার কনফিগার করে ক্লায়েন্ট ডোমেন অরিজিন অ্যালাউ করা", en: "Mounting the cors middleware configured to allow the client domain origin" },
        { bn: "এইচটিএমএল ফাইল ডিলিট করা", en: "Deleting frontend HTML files" },
        { bn: "আইডি ভেরিফিকেশন বাদ দেওয়া", en: "Bypassing JWT verification checks" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "CORS (Cross-Origin Resource Sharing) সিকিউরিটির কারণে ব্রাউজার ডাটা ব্লক করে। এক্সপ্রেস সার্ভারে cors মিডলওয়্যার দিয়ে ক্লায়েন্ট অরিজিন অ্যালাউ করতে হয়।",
        en: "The cors middleware injects headers allowing clients from specified domains to query the API.",
      },
    },
    {
      id: "int-sys-q5",
      question: {
        bn: "হাসপাতাল রূপকে হাসপাতালের ডাক্তার (Doctor) এবং পিওন (Clerk) যথাক্রমে কোন কোন স্তরের সাথে মিলে যায়?",
        en: "In the Hospital metaphor, the Doctor and the Record Clerk correspond to which full-stack components?",
      },
      options: [
        { bn: "ডিজাইন এবং বাটন", en: "Design styles and Button actions" },
        { bn: "এক্সপ্রেস সার্ভার (Backend) এবং মঙ্গুজ ওআরএম (Mongoose ODM)", en: "Express Server (Backend) and Mongoose ODM" },
        { bn: "লোকাল স্টোরেজ এবং সেশন টোকেন", en: "LocalStorage files and Session tokens" },
        { bn: "Vercel হোস্টিং এবং গিটহাব রেপো", en: "Vercel host and GitHub repositories" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডাক্তার হলো ব্যাকএন্ড সার্ভার (যিনি লজিক বোঝেন) এবং পিওন হলো মঙ্গুজ ওআরএম (যিনি ডেটাবেজ ক্যাবিনেট থেকে ফাইল আনেন)।",
        en: "The Doctor represents backend servers (logic), while the Clerk represents Mongoose (fetching database files).",
      },
    },
  ],
  practice: [
    {
      bn: "১. রিয়েল প্রোজেক্টে এপিআই ফেচ করার সময় কেন ফ্রন্টএন্ডে একটি 'Loading State' এবং 'Error Alert' রাখা অত্যন্ত জরুরি?",
      en: "1. Detail the UX necessity of handling Loading and Error states in React query hooks.",
    },
    {
      bn: "২. কেন ডেপ্লয়মেন্টে গিটইগনোর (.gitignore) ফাইলে \`.env\` ফাইলটি যোগ করা বাধ্যতামূলক?",
      en: "2. Argue why adding the .env file to the .gitignore configurations list is a mandatory security rule.",
    },
    {
      bn: "৩. ক্লায়েন্ট ড্যাশবোর্ডে লগইন ভেরিফাই করার জন্য এক্সপ্রেস মিডলওয়্যার \`Authorization: Bearer <token>\` হেডার কীভাবে ডিকোড করে?",
      en: "3. Trace how Express auth middleware extracts and decodes signed JWT Bearer tokens from incoming headers.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি পূর্ণাঙ্গ ফুলস্ট্যাক লার্নিং প্ল্যাটফর্ম আর্কিটেকচার ডিজাইন",
      en: "Full-Stack SaaS Platform Architecture Plan",
    },
    description: {
      bn: "বিজ্ঞানপ্রো একাডেমির মতো একটি প্রফেশনাল লার্নিং ড্যাশবোর্ডের ফুলস্ট্যাক প্রজেক্ট ডিজাইন করুন। ফ্রন্টএন্ড ড্যাশবোর্ড পেজের জন্য একটি রিঅ্যাক্ট কম্পোনেন্ট (\`Dashboard.jsx\`) লিখুন যা হেডারে Bearer টোকেন পাঠিয়ে সার্ভারের প্রটেক্টেড এপিআই (\`/api/profile\`) থেকে ডাটা ফেচ করে ইমেইল প্রদর্শন করবে। একই সাথে এক্সপ্রেসের গ্লোবাল CORS মিডলওয়্যার সংযোগ কোডটিও লিখুন।",
      en: "Design the integration logic for a full-stack SaaS platform. Write a React dashboard component fetching profile email data from a protected Express route (`/api/profile`) by sending Bearer authorization keys, and write the Express configuration mounting the cors middleware.",
    },
    starterCode: `// Fullstack Integration Schema
// ১. BACKEND: Express CORS configuration

// ২. FRONTEND: React Dashboard component fetching with Bearer JWT
`,
    solution: {
      code: `// Fullstack Integration Solution
// ==========================================
// ১. BACKEND: Express server (cors & json configuration)
// ==========================================
const express = require('express');
const cors = require('cors');
const app = express();

// এলাউড ডোমেন লিস্ট (Vercel Client URL)
const allowedOrigins = ['https://bignanpro-academy.vercel.app'];

app.use(cors({
  origin: function(origin, callback) {
    // লোকালহোস্ট এবং প্রডাকশন ডোমেন উভয়ই অ্যালাউ করা
    if(!origin || allowedOrigins.indexOf(origin) !== -1 || origin.startsWith('http://localhost')) {
      callback(null, true);
    } else {
      callback(new Error('CORS Policy Block: Origin not allowed!'));
    }
  },
  credentials: true
}));

app.use(express.json());

// ==========================================
// ২. FRONTEND: React Dashboard Component (fetch with Bearer Token)
// ==========================================
import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('userToken');

    if (!token) {
      setError("Please login first.");
      setLoading(false);
      return;
    }

    fetch('https://bignanpro-api.render.com/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${token}\`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Authorization failed. Expired token.");
        }
        return res.json();
      })
      .then(data => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6 text-slate-500 text-center">Loading session...</div>;
  if (error) return <div className="p-6 text-red-500 text-center font-bold">{error}</div>;

  return (
    <div className="p-8 max-w-md mx-auto bg-white border border-slate-100 rounded-2xl shadow-sm mt-10">
      <h2 className="text-xl font-bold text-slate-800">Welcome back, {user?.name}!</h2>
      <p className="text-sm text-slate-500 mt-2">Email: {user?.email}</p>
    </div>
  );
}`,
      explanation: {
        bn: "অসাধারণ আর্কিটেকচার সলিউশন! ডাইনামিক অরিজিন চেকিং সহ ব্যাকএন্ড CORS সেটিংস এবং ফ্রন্টএন্ডের Bearer টোকেন ফেচিং লাইফসাইকেল কন্ট্রোল শতভাগ প্রফেশনাল হয়েছে।",
        en: "Flawless full-stack integration! Implementing dynamic CORS origin checks alongside client Bearer token fetches handles production concerns perfectly.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "CORS (Cross-Origin Resource Sharing) বলতে কী বোঝায় এবং প্রোডাকশন অ্যাপ্লিকেশনে ওয়াইল্ডকার্ড ('*') ব্যবহার না করে নির্দিষ্ট ক্লায়েন্ট অরিজিন ডোমেইন সেট করা কেন আবশ্যক?",
        en: "What is CORS, and why is restricting allowed origins to specific domains (avoiding '*') a mandatory rule in production?",
      },
      answer: {
        bn: "CORS এবং প্রোডাকশন নিরাপত্তার নিয়মাবলী নিচে দেওয়া হলো:\n১. CORS (ক্রস-অরিজিন রিসোর্স শেয়ারিং): এটি একটি ব্রাউজার সিকিউরিটি মেকানিজম যা এক ডোমেইন থেকে অন্য ডোমেইনে রিসোর্স ফেচ করার রিকোয়েস্ট ব্লক করে দেয়। ব্যাকএন্ড এক্সপ্রেস সার্ভার যদি অ্যাক্সেস হেডার কনফিগার না করে, ব্রাউজার ডাটা পাস হতে দেবে না।\n২. ওয়াইল্ডকার্ড অরিজিন ('*'): অরিজিন স্টার \`'*'\` সেট করলে এর অর্থ হলো পৃথিবীর যেকোনো ওয়েবসাইট বা হ্যাকার ডোমেইন আপনার এপিআই ডাইরেক্ট ফেচ করতে পারবে।\n৩. ওয়াইল্ডকার্ডের ঝুঁকি ও অরিজিন প্রটেকশন: প্রোডাকশনে স্টার দিলে ক্রোম ব্রাউজার কুকি এবং ক্রেডেনশিয়াল ডেটা আদান-প্রদান করতে দেয় না (credentials: true ব্লকিং)। এছাড়া হ্যাকাররা সহজেই সিএসআরএফ (CSRF) অ্যাটাক করে ইউজারের সেশন ডেটা লিক করতে পারে। তাই প্রোডাকশনে ব্যাকএন্ডের CORS সেটিংসে শুধুমাত্র আমাদের নিজস্ব ফ্রন্টএন্ড ডোমেইন (যেমন: \`https://my-app.vercel.app\`) হার্ডলক করে রাখতে হবে।",
        en: "CORS is a browser-enforced security mechanism restricting scripts running on one origin from querying APIs on another:\n1. Origin Restriction: Setting allowed origins to wildcard `*` permits any third-party script to query endpoints, expanding vectors for security leaks.\n2. Credentials block: Browsers block sending cookies and authentication headers if the server's Access-Control-Allow-Origin header is set to `*`. Authenticated requests require specifying a exact domain.\n3. CSRF Vulnerability: Specifying exact domains (e.g. `https://my-app.vercel.app`) prevents malicious domains from dispatching queries on behalf of users, sealing session hijacking vulnerabilities."
      },
    },
    {
      question: {
        bn: "CSRF (Cross-Site Request Forgery) আক্রমণ বলতে কী বোঝায় এবং কুকিজ ব্যবহার করার সময় কীভাবে এই আক্রমণ প্রতিরোধ করা যায়?",
        en: "What is a CSRF (Cross-Site Request Forgery) attack, and how do we defend cookies against it?",
      },
      answer: {
        bn: "CSRF আক্রমণ এবং কুকি সুরক্ষার গাইডলাইনসমূহ নিচে ব্যাখ্যা করা হলো:\n১. CSRF আক্রমণ: যখন একজন ইউজার একটি সাইটে লগইন করা অবস্থায় কোনো ক্ষতিকর সাইট ভিজিট করেন, তখন হ্যাকারের সাইট থেকে ব্যাকগ্রাউন্ডে আমাদের সাইটের এপিআইতে রিকোয়েস্ট পাঠানো হয়। ব্রাউজার অটোমেটিক্যালি সেশন কুকিটি রিকোয়েস্টের সাথে পাঠিয়ে দেয় (যেহেতু কুকি সাইট ভিত্তিক)। এর ফলে ইউজারের অজান্তেই তার অ্যাকাউন্ট থেকে কোনো ডাটা ডিলিট বা পেমেন্ট ট্রান্সফার হয়ে যেতে পারে।\n২. SameSite কুকি এট্রিবিউট: CSRF ঠেকানোর সবচেয়ে আধুনিক ও প্রফেশনাল সমাধান হলো কুকি সেভ করার সময় \`SameSite=Strict\` বা \`SameSite=Lax\` সেট করা। এটি ব্রাউজারকে নির্দেশ দেয় যে ক্রস-সাইট (অন্য কোনো সাইট) থেকে রিকোয়েস্ট এলে এই কুকি পাঠানো যাবে না।\n৩. Secure ও httpOnly ফ্ল্যাগ: কুকি সেভ করার সময় \`Secure=true\` (শুধুমাত্র HTTPS-এ টোকেন পাঠানো) এবং \`httpOnly=true\` (জাভাস্ক্রিপ্ট অ্যাক্সেস ব্লক) সেট করলে কুকি ভিত্তিক সেশন ডাইরেক্ট সুরক্ষিত হয়ে যায়।",
        en: "CSRF exploits the browser's default behavior of automatically attaching cookies to requests targeting origin domains:\n1. The CSRF Vector: If a user is logged in to a banking app, and loads a malicious site in another tab, a hidden form submit on the malicious site can query bank endpoints. The browser appends the bank session cookie automatically, authorizing the query.\n2. SameSite Cookie Attribute: Setting cookie flags to `SameSite=Strict` or `SameSite=Lax` instructs browsers to suppress cookies on cross-origin requests, neutralizing CSRF attacks.\n3. Triple Shield: Combining `SameSite=Strict`, `httpOnly=true` (blocking script reads), and `Secure=true` (requiring HTTPS encryption) renders cookie-based sessions robust against common web attacks."
      },
    },
  ],
};
