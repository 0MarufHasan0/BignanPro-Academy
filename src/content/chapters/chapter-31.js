export const chapter31Content = {
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
  objectives: [
    {
      bn: "ব্যাকএন্ড (Backend) সিস্টেমের ধারণা এবং এর বাস্তব গুরুত্ব ব্যাখ্যা করা।",
      en: "Explain the concept of backend systems and their real-world significance.",
    },
    {
      bn: "নোড জেএস (Node.js) কী এবং এটি কীভাবে সার্ভার সাইডে জাভাস্ক্রিপ্ট রান করায় তা বোঝা।",
      en: "Understand what Node.js is and how it executes JavaScript on the server side.",
    },
    {
      bn: "এপিআই (API) কীভাবে ফ্রন্টএন্ড এবং ব্যাকএন্ডের মধ্যে সংযোগ সেতু হিসেবে কাজ করে তা জানা।",
      en: "Learn how APIs act as bridges of communication between frontend and backend systems.",
    },
    {
      bn: "এইচটিটিপি রিকোয়েস্ট-রেসপন্স (Request-Response) চক্রের ফ্লো চার্ট ডিকোড করা।",
      en: "Decode the step-by-step HTTP Request-Response communication cycle.",
    },
  ],
  sections: [
    {
      id: "intro-backend",
      title: {
        bn: "১. ব্যাকএন্ড ও নোড জেএস এর ধারণা (What is Backend & What is Node.js)",
        en: "1. What is Backend & What is Node.js",
      },
      content: {
        bn: `## What is Backend? (ব্যাকএন্ড কী?)
আমরা যখন কোনো ব্রাউজারে ফেসবুক বা ইউটিউব দেখি, তখন স্ক্রিনে যে বাটন, ছবি বা ডিজাইন আমরা দেখতে পাই এবং যেটির সাথে সরাসরি ইন্টারঅ্যাক্ট করি—তাকে বলা হয় **Frontend (ফ্রন্টএন্ড)**।

কিন্তু আমরা যখন লগইন করি, পোস্ট শেয়ার করি কিংবা পেমেন্ট করি, তখন ব্যাকগ্রাউন্ডে ডাটা প্রসেস করা, পাসওয়ার্ড ভেরিফাই করা এবং ডেটাবেজে ফাইল সেভ করার যে বিশাল ও অদৃশ্য জগতটি কাজ করে, তাকে বলা হয় **Backend (ব্যাকএন্ড)**।
*   **প্রধান কাজসমূহ**:
    - **Data Processing**: জটিল লজিক ও হিসাব-নিকাশ।
    - **Authentication**: লগইন ও সিকিউরিটি পাসওয়ার্ড ভেরিফিকেশন।
    - **Database Operations**: ডেটাবেজে চিরতরে তথ্য সংরক্ষণ বা মুছে ফেলা।

---

## What is Node.js? (নোড জেএস কী?)
অতীতে জাভাস্ক্রিপ্ট কেবল ব্রাউজারের ভেতর (ফ্রন্টএন্ডে) রান করার জন্য সীমাবদ্ধ ছিল। কিন্তু ২০০৯ সালে রায়ান ডাল নামের একজন প্রোগ্রামার ব্রাউজারের বাইরে সরাসরি কম্পিউটারে জাভাস্ক্রিপ্ট রান করানোর জন্য তৈরি করেন **Node.js (নোড জেএস)**।
*   **সহজ সংজ্ঞা**: নোড জেএস হলো একটি **জাভাস্ক্রিপ্ট রানটাইম এনভায়রনমেন্ট (JavaScript Runtime Environment)**।
*   **এর গুরুত্ব**: নোড জেএস আসার পর থেকে আমরা একই জাভাস্ক্রিপ্ট ভাষা ব্যবহার করে ফ্রন্টএন্ড ডিজাইনের পাশাপাশি সার্ভারের ব্যাকএন্ড কোডও লিখতে পারি।`,
        en: `## What is Backend?
When you browse Facebook, YouTube, or Amazon, the visual interface you interact with (buttons, grids, color panels) is called the **Frontend**.

However, when you write passwords, transfer payments, or search databases, a massive engine works behind the scenes to process logic and save profiles. This invisible part is the **Backend**.
*   **Core Responsibilities**:
    - **Data Processing**: Complex operations and calculations.
    - **Authentication**: Verifying passwords and managing secure logins.
    - **Database Operations**: Reading and writing data to database engines.

---

## What is Node.js?
Historically, JavaScript was locked inside web browsers. In 2009, Ryan Dahl extracted Google Chrome's V8 engine to run JavaScript directly on local machines, creating **Node.js**.
*   **Definition**: Node.js is an open-source, cross-platform **JavaScript runtime environment**.
*   **Impact**: It allows developers to write scalable server-side backend logic using the exact same JavaScript language they use for frontend scripting.`,
      },
    },
    {
      id: "api-concept-request",
      title: {
        bn: "২. এপিআই কী ও রিকোয়েস্ট যেভাবে কাজ করে (What is API & How Requests Work)",
        en: "2. What is an API & How Requests Work",
      },
      content: {
        bn: `## What is an API? (এপিআই কী?)
ফ্রন্টএন্ড এবং ব্যাকএন্ড একে অপরের সাথে কথা বলার জন্য একটি যোগাযোগের রাজপথ ব্যবহার করে। এই পথকেই বলা হয় **API (Application Programming Interface)**।
*   **সহজ রূপক**: এপিআই হলো একটি ডিজিটাল দরজার মতো। ফ্রন্টএন্ড যখন ব্যাকএন্ড থেকে কোনো ইউজার লিস্ট বা ডাটা চায়, তখন সে এই নির্দিষ্ট এপিআই দরজায় নক করে।

---

## How Request-Response Works (রিকোয়েস্ট-রেসপন্স চক্র)
ক্লায়েন্ট (ব্রাউজার) এবং সার্ভার (ব্যাকএন্ড)-এর যোগাযোগের মূল ভিত্তি হলো **Request-Response Cycle**:

1.  **Request (অনুরোধ)**: ফ্রন্টএন্ড সার্ভারকে বলে: *"আমাকে আইডি ১২৩ এর ইউজারের নাম দাও।"* (এটি হলো রিকোয়েস্ট)।
2.  **Receive (গ্রহণ)**: ব্যাকএন্ড সার্ভার এপিআই দরজার মাধ্যমে রিকোয়েস্টটি গ্রহণ করে।
3.  **Process (প্রসেস)**: ব্যাকএন্ড চেক করে ইউজারটি ভ্যালিড কিনা এবং ডেটাবেজ থেকে তথ্যটি রিড করে।
4.  **Response (রেসপন্স)**: ব্যাকএন্ড ডাটাটি গুছিয়ে ফ্রন্টএন্ডে পাঠিয়ে দেয়: *"এই নাও ইউজার তানভীরের তথ্য।"* (এটি হলো রেসপন্স)।

---

## Visual Communication Flow (যোগাযোগ প্রবাহ)
\`\`\`
┌──────────────┐                  ┌──────────────┐
│   Frontend   │ ─── Request ───> │   Backend    │
│  (Browser)   │ <─── Response ── │   (Server)   │
└──────────────┘                  └──────────────┘
\`\`\``,
        en: `## What is an API?
Frontend clients and backend servers need a structured channel to communicate. This bridge is called an **API (Application Programming Interface)**.
*   **Concept**: An API acts as a digital counter. The frontend knocks on this counter to request user profiles, fetch posts, or submit orders.

---

## How Request-Response Works
Web communication revolves around the **Request-Response Cycle**:

1.  **Request**: The frontend (Client) sends a structured message: *"Give me the info for User 123."*
2.  **Processing**: The backend (Server) intercepts this request, runs validation checks, and queries the database.
3.  **Response**: The backend packages the results (usually as JSON) and sends it back: *"Here is Tanvir's profile data."*

---

## Visual Communication Flow
\`\`\`
┌──────────────┐                  ┌──────────────┐
│   Client     │ ─── HTTP GET ──> │    Server    │
│  (Frontend)  │ <── JSON Data ── │  (Express)   │
└──────────────┘                  └──────────────┘
\`\`\``,
      },
    },
    {
      id: "simple-server-express",
      title: {
        bn: "৩. এক্সপ্রেস সার্ভারের সহজ কোড উদাহরণ (Simple Express Server Example)",
        en: "3. Simple Express Server Example",
      },
      content: {
        bn: `## Express.js Intro (এক্সপ্রেস জেএস পরিচিতি)
নোড জেএস-এ র কোড লিখে সার্ভার তৈরি করা অনেক জটিল। তাই নোড জেএস-এর ওপর ভিত্তি করে তৈরি করা হয়েছে বিশ্বের সবচেয়ে জনপ্রিয় ও লাইটওয়েট ব্যাকএন্ড ফ্রেমওয়ার্ক **Express.js (এক্সপ্রেস জেএস)**।

এটি ব্যবহার করে আমরা খুব সহজে মাত্র কয়েক লাইন কোডে একটি সার্ভার চালু করে এপিআই রুট তৈরি করতে পারি।

---

## Simple Server Code (সার্ভারের সহজ উদাহরণ)
নিচে এক্সপ্রেস জেএস দিয়ে তৈরি একটি সিম্পল নোড সার্ভারের কোড দেখানো হলো:

\`\`\`javascript
const express = require('express');
const app = express();
const PORT = 5000;

// ১. এপিআই রাউট বা দরজা ডিফাইন করা
app.get('/api', (req, res) => {
  res.send("Hello Backend! বিজ্ঞানপ্রো একাডেমির ব্যাকএন্ডে স্বাগতম।");
});

// ২. সার্ভার রান করা
app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
\`\`\`

### কোড মেকানিজম বিশ্লেষণ:
*   \`app.get('/api')\`: এটি সার্ভারের একটি এপিআই গেটওয়ে বা রুট তৈরি করে। ব্রাউজার থেকে কেউ \`/api\` পাথে রিকোয়েস্ট পাঠালে এই ফাংশনটি ট্রিগার হবে।
*   \`res.send(...)\`: এটি হলো সার্ভারের রেসপন্স। এটি ব্রাউজার স্ক্রিনে টেক্সট ডেটাটি প্রিন্ট করে।
*   \`app.listen(5000)\`: এটি পোর্ট ৫০০০-এ সার্ভারটিকে ২৪ ঘণ্টা চালু রাখার জন্য লিসেন করতে থাকে।`,
        en: `## Express.js Intro
Writing raw Node.js script to parse routes and headers is repetitive. To simplify backend development, the industry uses **Express.js**, a minimalist web framework for Node.js.

It lets us spawn a running server and define API routes in just a few lines of code.

---

## Simple Server Code
Here is a basic HTTP server using Express.js:

\`\`\`javascript
const express = require('express');
const app = express();
const PORT = 5000;

// 1. Register an API GET endpoint
app.get('/api', (req, res) => {
  res.send("Hello Backend! Welcome to BignanPro Server.");
});

// 2. Start the HTTP listener
app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
\`\`\`

### Code Breakdown:
*   \`app.get('/api')\`: Defines a GET route at the \`/api\` path. When a client requests this endpoint, the callback function is triggered.
*   \`res.send(...)\`: Prepares and dispatches the HTTP response payload back to the client.
*   \`app.listen(5000)\`: Binds the server process to port 5000, listening for incoming network requests.`,
      },
    },
    {
      id: "frontend-backend-bridge",
      title: {
        bn: "৪. ফ্রন্টএন্ড ও ব্যাকএন্ড সংযোগ ও গুরুত্ব (Frontend + Backend Bridge & Importance)",
        en: "4. Frontend + Backend Connection & Importance",
      },
      content: {
        bn: `## Connecting Frontend to API (ফ্রন্টএন্ড ও ব্যাকএন্ড সংযোগ)
ফ্রন্টএন্ড যখন আমাদের এক্সপ্রেস সার্ভার থেকে ডেটা রিড করতে চায়, তখন আমরা জাভাস্ক্রিপ্টের বিল্ট-ইন **\`fetch()\`** ফাংশনটি ব্যবহার করি:

\`\`\`javascript
// ফ্রন্টএন্ড রিঅ্যাক্ট কোড
fetch('http://localhost:5000/api')
  .then(response => response.text())
  .then(data => {
    console.log(data); // আউটপুট: "Hello Backend! বিজ্ঞানপ্রো একাডেমির ব্যাকএন্ডে স্বাগতম।"
  });
\`\`\`

---

## Why Backend is Vital (ব্যাকএন্ড কেন অপরিহার্য?)
অনেকে ভাবতে পারেন, আমরা তো ফ্রন্টএন্ডেই সব ইউআই ডিজাইন করে ফেলতে পারি, তাহলে ব্যাকএন্ডের কী দরকার?

১.  **Security (নিরাপত্তা)**: ডাটাবেজের ইউজারনেম-পাসওয়ার্ড কিংবা পেমেন্ট গেটওয়ের সিক্রেট কী ফ্রন্টএন্ডে রাখলে হ্যাকাররা সহজে ব্রাউজারের ইনস্পেক্ট এলিমেন্ট থেকে তা চুরি করতে পারবে। ব্যাকএন্ডে এই সিক্রেট ফাইলগুলো নিরাপদ থাকে।
2.  **Data Storage (তথ্য সংরক্ষণ)**: ফ্রন্টএন্ডের লোকাল স্টোরেজ সাময়িক এবং ব্রাউজার ডেটা ক্লিয়ার করলে তা মুছে যায়। ব্যাকএন্ড এই ডাটাবেজে স্থায়ীভাবে সেভ করে।
3.  **Complex Logic**: ভারী হিসাব-নিকাশ মোবাইলের ব্রাউজারে চালালে ফোন গরম বা হ্যাং হতে পারে। ব্যাকএন্ড সার্ভারের শক্তিশালী সিপিইউতে এই প্রসেসিং করা হয়।`,
        en: `## Connecting Frontend to API
To fetch data from our Express server, the frontend React component executes a network call using the native browser **\`fetch()\`** API:

\`\`\`javascript
// Frontend React/JS fetch request
fetch('http://localhost:5000/api')
  .then(response => response.text())
  .then(data => {
    console.log(data); // Output: "Hello Backend! Welcome to BignanPro Server."
  });
\`\`\``,
      },
    },
    {
      id: "mistakes-analogy",
      title: {
        bn: "৫. সাধারণ ভুল ও রেস্টুরেন্ট কিচেনের রূপক (Common Mistakes & Analogy)",
        en: "5. Common Mistakes & Restaurant Analogy",
      },
      content: {
        bn: `## Common Mistakes (সাধারণ ভুলসমূহ)
*   **ফ্রন্টএন্ডকে সম্পূর্ণ অ্যাপ ভাবা**: নতুনদের বড় ভুল হলো মনে করা ফ্রন্টএন্ড ডিজাইনই একটি পূর্ণাঙ্গ অ্যাপ। ডাটাবেজ ও ব্যাকএন্ড লজিক ছাড়া অ্যাপ কেবল একটি খেলনা ডিজাইন।
*   **CORS Error এড়ানো**: ফ্রন্টএন্ড পোর্ট (৩০০০) এবং ব্যাকএন্ড পোর্ট (৫০০০0) আলাদা হওয়ার কারণে ব্রাউজার ডাটা ব্লক করে দেয় (একে CORS এরর বলে)। এটি এড়াতে ব্যাকএন্ডে \`cors\` প্যাকেজ ইম্পোর্ট করতে হয়।
*   **টার্মিনাল মিক্সআপ**: এক্সপ্রেস সার্ভারের \`console.log\` ব্রাউজার কনসোলে প্রিন্ট হয় না, এটি কেবল আপনার নোড রানটাইম বা ভিএস কোড টার্মিনালে প্রিন্ট হয়।

---

## The Restaurant Analogy (রেস্টুরেন্ট কিচেনের রূপক)
ব্যাকএন্ড আর্কিটেকচারকে একটি সুন্দর ডাইনিং রেস্টুরেন্টের সাথে মিলিয়ে নিন:
*   **মেনু কার্ড ও বসার টেবিল (The Frontend)**: রেস্টুরেন্টের সাজানো টেবিল ও কাস্টমার যেখানে বসে খাবার অর্ডার করেন। এটি চমৎকার ডিজাইনে সাজানো থাকে।
*   **রেস্টুরেন্টের কিচেন (The Backend)**: যেখানে আসল রান্নার কাজ, ওভেনের হিট এবং রেসিপির লজিক কাজ করে। এটি কাস্টমারের চোখের আড়ালে বা ব্যাকগ্রাউন্ডে থাকে।
*   **ওয়েটার (The API)**: আপনি টেবিলে বসে অর্ডার দিলে ওয়েটার সেই তথ্য কিচেনে নিয়ে যায় (Request), এবং বাবুর্চি রান্না শেষ করলে ওয়েটার খাবারটি আপনার প্লেটে এনে দেয় (Response)। ওয়েটার ছাড়া কিচেন ও ডাইনিংয়ের যোগাযোগ অসম্ভব!`,
        en: `## Common Mistakes
*   **The Frontend-Only Illusion**: Thinking frontend wireframes represent complete apps. Without databases and servers, UIs are just static shells.
*   **Ignoring CORS Errors**: Accessing a backend on port 5000 from a frontend on port 3000 triggers Cross-Origin Resource Sharing (CORS) blocks. We resolve this by configuring CORS middleware in Express.
*   **Console Logging Confusion**: Forgetting that server \`console.log()\` prints to the Node terminal, not the browser console.

---

## The Restaurant Analogy
Think of full-stack web applications as a dining restaurant:
*   **The Dining Room & Menu (The Frontend)**: The styled room where guests sit and read the menu card. It is visual, clean, and interactive.
*   **The Kitchen (The Backend)**: The hot kitchen in the back where chefs cook recipes and manage inventory. It is hidden from the guests.
*   **The Waiter (The API)**: Carries your order from table to kitchen (Request) and delivers the cooked meal to your table (Response).`,
      },
      codeBlock: {
        fileName: "server.js",
        language: "javascript",
        code: `const express = require('express');
const cors = require('cors'); // CORS এরর এড়ানোর প্যাকেজ
const app = express();
const PORT = 5000;

// ১. মিডলওয়্যার কনফিগারেশন
app.use(cors()); // সকল ক্লায়েন্ট রিকোয়েস্ট অ্যাক্সেস এলাউ করা
app.use(express.json()); // JSON ডাটা পার্স করার ক্ষমতা দেওয়া

// ২. ডাটাবেজ মক এপিআই রুট
const users = [
  { id: 1, name: "Munir Ahmed", email: "munir@gmail.com" },
  { id: 2, name: "Sadia Islam", email: "sadia@gmail.com" }
];

app.get('/api/users', (req, res) => {
  // ৩. রেসপন্স হিসেবে JSON ডাটা পাঠানো
  res.json(users);
});

// ৪. সার্ভার পোর্ট লিসেনার
app.listen(PORT, () => {
  console.log(\`Express Server is listening on port \${PORT}\`);
});`,
        explanations: [
          {
            line: 7,
            text: {
              bn: "app.use(cors()) ব্রাউজার সিকিউরিটি প্রোটোকল মেনে অন্য পোর্ট থেকে ডেটা ফেচ করার পারমিশন দেয়।",
              en: "app.use(cors()) injects middleware headers to allow cross-origin browser requests.",
            },
          },
          {
            line: 16,
            text: {
              bn: "/api/users পাথে গেট রিকোয়েস্ট পাঠালে সার্ভার মক ইউজার লিস্ট ডাটাটি রিটার্ন করবে।",
              en: "Registers a GET endpoint at /api/users mapping the dynamic users array.",
            },
          },
          {
            line: 18,
            text: {
              bn: "res.json() জাভাস্ক্রিপ্ট অবজেক্টকে স্ট্যান্ডার্ড JSON স্ট্রিংয়ে কনভার্ট করে রেসপন্স হিসেবে পাঠায়।",
              en: "res.json() serializes JS objects arrays into standardized JSON data packets.",
            },
          },
        ],
      },
    },
    {
      id: "practice-backend-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন সম্পন্ন করুন। এটি আপনার ফুলস্ট্যাক ক্যারিয়ারের ব্যাকএন্ড ফাউন্ডেশনকে মজবুত করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your HTTP models and Express route concepts before coding complex REST APIs and databases in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "ব্যাকএন্ড মূলত ডাটা প্রসেস ও ফাইল সিকিউরিটি নিশ্চিত করতে ফ্রন্টএন্ডের ব্যাকগ্রাউন্ড ইঞ্জিন হিসেবে থাকে।",
          en: "Backend systems exist to secure sensitive logic and store persistent data outside client controls.",
        },
        whyWorks: {
          bn: "এটি অপারেটিং সিস্টেম ও নেটওয়ার্ক প্রোটোকলের সাহায্যে পোর্ট লিসেন করে ক্লায়েন্টের ডেটা গেটওয়ে চেক করে।",
          en: "Node.js runs server-side JavaScript using Google's V8 engine, executing async I/O.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা এপিআই তৈরি করার সময় স্ট্যাটাস কোড (যেমন ২০০, ৪0৪, ৫০০) নিখুঁতভাবে রিটার্ন করে ফ্রন্টএন্ডকে এরর বুঝতে হেল্প করেন।",
          en: "Seniors design APIs with semantic HTTP status codes (200 OK, 404 Not Found, 500 Server Error).",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো এপিআই কী বা পাসওয়ার্ড ফ্রন্টএন্ড ফাইলে ডিরেক্ট লিখে দেওয়া, যা প্রজেক্টের সিকিউরিটি জিরো করে ফেলে।",
          en: "Never leak environment variables or database keys inside client-side React code blocks.",
        },
        debugging: {
          bn: "সার্ভার রেসপন্স চেক করতে ব্রাউজার ছাড়াও 'Postman' বা ভিএস কোডের 'REST Client' টুল দিয়ে এপিআই টেস্ট করুন।",
          en: "Use Postman or Curl commands to test API endpoints independently of your frontend visual code.",
        },
        performance: {
          bn: "এক্সপ্রেসের মিডলওয়্যারগুলো লাইটওয়েট রাখতে হবে যেন রিকোয়েস্ট আসার সাথে সাথে প্রসেসিং ফাস্ট সম্পন্ন হয়।",
          en: "Enforce JSON gzip compression and use minimal express middlewares to optimize server response cycles.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "back-q1",
      question: {
        bn: "ওয়েব ডেভেলপমেন্টের ক্ষেত্রে ব্যাকএন্ড (Backend) বলতে কী বোঝায়?",
        en: "What does Backend mean in web development?",
      },
      options: [
        {
          bn: "ওয়েবসাইটের পিছনের ব্যাকগ্রাউন্ড ছবি সেট করা",
          en: "Setting background images on web pages",
        },
        {
          bn: "সার্ভারে ডাটা প্রসেস, অথেন্টিকেশন ও ডাটাবেজ অপারেশন সামলানো (অদৃশ্য অংশ)",
          en: "Handling data processing, authentication, and database operations on the server side (invisible part)",
        },
        { bn: "সিএসএস ক্লাস ডিলিট করা", en: "Deleting CSS class definitions" },
        {
          bn: "মাউস হোভার এনিমেশন চালানো",
          en: "Executing mouse hover animations",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ব্যাকএন্ড হলো ওয়েবসাইটের অদৃশ্য ইঞ্জিন যা ডাটা প্রসেস, লগইন সিকিউরিটি ও ডাটাবেজ স্টোরেজ কন্ট্রোল করে।",
        en: "Backend defines server-side computations, database connections, and business logic.",
      },
    },
    {
      id: "back-q2",
      question: {
        bn: "নোড জেএস (Node.js) এর প্রধান কাজ বা সুবিধা কী?",
        en: "What is the primary function of Node.js?",
      },
      options: [
        {
          bn: "জাভাস্ক্রিপ্টকে ব্রাউজারের বাইরে সরাসরি কম্পিউটারে বা সার্ভারে রান করানো",
          en: "Executing JavaScript directly on machines or servers outside the web browser",
        },
        {
          bn: "এইচটিএমএল ফাইল কমপ্রেস করা",
          en: "Compressing raw HTML templates",
        },
        {
          bn: "সিএসএস গ্রিড লেআউট ডিজাইন করা",
          en: "Designing CSS Grid alignments",
        },
        {
          bn: "ডাটাবেজ পাসওয়ার্ড পরিবর্তন করা",
          en: "Altering database credentials",
        },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "নোড জেএস ব্রাউজারের বাইরে লোকাল কম্পিউটারে জাভাস্ক্রিপ্ট রান করানোর সুবিধা দিয়ে একে সার্ভার সাইড ভাষায় রূপান্তর করেছে।",
        en: "Node.js is a runtime environment that runs JavaScript code server-side.",
      },
    },
    {
      id: "back-q3",
      question: {
        bn: "এপিআই (API) এর মূল কাজ কোনটি?",
        en: "What is the primary role of an API?",
      },
      options: [
        { bn: "ইউজার ইন্টারফেস ডিজাইন করা", en: "Styling user interfaces" },
        {
          bn: "ফ্রন্টএন্ড এবং ব্যাকএন্ডের মধ্যে সংযোগ সেতু হিসেবে কাজ করে ডাটা আদান-প্রদান করা",
          en: "Acting as a communication bridge between frontend and backend to exchange data",
        },
        {
          bn: "সার্ভার অফ করে দেওয়া",
          en: "Shutting down the server processes",
        },
        { bn: "কোড কমিট করা", en: "Committing code changes" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "API (Application Programming Interface) ক্লায়েন্ট এবং সার্ভারের মধ্যে ডাটা আদান-প্রদানের ডিজিটাল কাউন্টার হিসেবে কাজ করে।",
        en: "APIs act as bridges, allowing client apps to query server resources.",
      },
    },
    {
      id: "back-q4",
      question: {
        bn: "এক্সপ্রেস জেএস (Express.js) এর ভূমিকা কী?",
        en: "What is the role of Express.js?",
      },
      options: [
        {
          bn: "এটি নোড জেএস-এর জন্য একটি হালকা ও জনপ্রিয় ব্যাকএন্ড ওয়েব ফ্রেমওয়ার্ক",
          en: "It is a minimalist and popular backend web framework built for Node.js",
        },
        {
          bn: "এটি একটি ডাটাবেজ কোয়েরি সফটওয়্যার",
          en: "It is a database query editor",
        },
        { bn: "এটি ইমেজ এডিটর টুলস", en: "It is an image editor tool" },
        {
          bn: "এটি ব্রাউজার এক্সটেনশন",
          en: "It is a browser extension utility",
        },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "এক্সপ্রেস হলো নোড জেএস-এর ফ্রেমওয়ার্ক যা দিয়ে অতি সহজে নেটওয়ার্ক রাউটিং ও সার্ভার ম্যানেজমেন্ট করা যায়।",
        en: "Express simplifies routing, middlewares, and HTTP server setup in Node.js.",
      },
    },
    {
      id: "back-q5",
      question: {
        bn: "রিকোয়েস্ট-রেসপন্স চক্রে (Request-Response Cycle) 'Response' কে পাঠায়?",
        en: "Who sends the 'Response' in the Request-Response cycle?",
      },
      options: [
        { bn: "ব্রাউজার বা ক্লায়েন্ট", en: "The browser or client" },
        { bn: "সার্ভার বা ব্যাকএন্ড", en: "The server or backend" },
        { bn: "ইন্টারনেট কেবল", en: "The internet cable provider" },
        { bn: "ফিজমা ডিজাইন ফাইল", en: "The Figma design file asset" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ক্লায়েন্ট (ব্রাউজার) সার্ভারকে Request পাঠায়, এবং সার্ভার সেই রিকোয়েস্ট প্রসেস করে Response পাঠায়।",
        en: "Servers process incoming requests and respond back with the appropriate data payloads.",
      },
    },
  ],
  practice: [
    {
      bn: "১. এক্সপ্রেস সার্ভারে একটি '/api/products' গেট (GET) রাউট তৈরি করার বেসিক জাভাস্ক্রিপ্ট সিনট্যাক্সটি লিখুন।",
      en: "1. Write the Express.js syntax to register a GET endpoint at the path '/api/products'.",
    },
    {
      bn: "২. রেস্টুরেন্ট অ্যানালজিতে ওয়েটার (Waiter) কীভাবে এপিআই (API) এর দায়িত্বের সাথে হুবহু মিলে যায় তা সংক্ষেপে ব্যাখ্যা করুন।",
      en: "2. In 2 sentences, explain how the Waiter metaphor fits the role of an API in client-server communications.",
    },
    {
      bn: "৩. এক্সপ্রেস সার্ভারে app.use(cors()) মিডলওয়্যারটি ইম্পোর্ট বা ইউজ না করলে ব্রাউজার কনসোলে কী এরর দেখা দেবে?",
      en: "3. Identify the browser error logged when fetching from an Express server lacking CORS configurations.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি ইউজার রেজিস্টার এপিআই এর রিকোয়েস্ট-রেসপন্স সিকোয়েন্স",
      en: "User Login Request-Response Sequence Diagram",
    },
    description: {
      bn: "একজন ব্যবহারকারী যখন ওয়েবসাইটে লগইন ফর্মে তার ইমেইল ও পাসওয়ার্ড লিখে 'লগইন' বাটনে ক্লিক করেন, তখন ক্লায়েন্ট, এপিআই, ব্যাকএন্ড সার্ভার এবং ডাটাবেজের মধ্যে কী কী ক্রমানুসার ঘটে তা ধাপে ধাপে বুঝিয়ে লিখুন। একই সাথে এক্সপ্রেসের একটি মক সার্ভার ফাইল তৈরি করুন যা পোর্ট ৫০০০ এ চালু থাকবে।",
      en: "Describe the step-by-step Request-Response sequences when a user submits a login form (email/password). Include a complete Node.js/Express mock server file listening on port 5000 that returns a success message.",
    },
    starterCode: `// Mock Login Express Server
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// ১. লগইন এপিআই গেটওয়ে (POST বা GET মক রাউট)

`,
    solution: {
      code: `// Mock Login Express Server Solution
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // JSON বডি রীড করার মিডলওয়্যার

// ১. মক লগইন এপিআই রুট
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  // মক লগইন ভ্যালিডেশন
  if (email === "user@gmail.com" && password === "123456") {
    res.json({ success: true, message: "লগইন সফল হয়েছে!", token: "mock-jwt-token" });
  } else {
    res.status(401).json({ success: false, message: "ভুল ইমেল বা পাসওয়ার্ড!" });
  }
});

// ২. সার্ভার রান করা
app.listen(PORT, () => {
  console.log(\`Mock Server is listening on port \${PORT}\`);
});

// ==========================================
// REQUEST-RESPONSE LOGIN FLOW SEQUENCES:
// ==========================================
// ১. Request: ইউজার লগইন বাটনে ক্লিক করলে ব্রাউজার (Client) ইমেল ও পাসওয়ার্ড নিয়ে '/api/login' এপিআই-এ রিকোয়েস্ট পাঠায়।
// ২. Intercept: ব্যাকএন্ড এক্সপ্রেস সার্ভার রিকোয়েস্টটি রিসিভ করে এবং req.body থেকে ডাটা এক্সট্র্যাক্ট করে।
// ৩. DB Check: সার্ভার মক ডাটাবেজ চেক করে দেখে ইমেলের সাথে পাসওয়ার্ড মিলছে কিনা।
// ৪. Response: মিল থাকলে সার্ভার success: true রেসপন্স ব্রাউজারে পাঠায়, অন্যথায় এরর কোড (401) রিটার্ন করে।`,
      explanation: {
        bn: "চমৎকার লগইন ফ্লো ও এক্সপ্রেস মক এপিআই সার্ভার! req.body রিড করার মিডলওয়্যার এবং রেসপন্স স্ট্যাটাস কোড (401) হ্যান্ডলিং শতভাগ ইন্ডাস্ট্রি স্ট্যান্ডার্ড হয়েছে।",
        en: "Perfect API mapping! Validating request bodies and sending semantic status codes (401 Unauthorized) shows solid backend foundation.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "নোড জেএস (Node.js) এবং এক্সপ্রেস জেএস (Express.js) এর মধ্যে মূল পার্থক্য কী?",
        en: "What is the key difference between Node.js and Express.js?",
      },
      answer: {
        bn: "নোড জেএস এবং এক্সপ্রেস জেএসের মধ্যে মূল পার্থক্য হলো:\n১. রানটাইম বনাম ফ্রেমওয়ার্ক: নোড জেএস হলো একটি জাভাস্ক্রিপ্ট রানটাইম এনভায়রনমেন্ট, যা জাভাস্ক্রিপ্ট কোড ব্রাউজারের বাইরে পিসিতে রান করায়। এক্সপ্রেস জেএস হলো নোড জেএসের ওপর ভিত্তি করে তৈরি করা একটি ওয়েব অ্যাপ্লিকেশন ফ্রেমওয়ার্ক।\n২. লেভেল অফ অ্যাবস্ট্রাকশন: নোড জেএস সরাসরি অপারেটিং সিস্টেম স্তরে কাজ করে (যেমন ফাইল সিস্টেম রিড)। এক্সপ্রেস জেএস তার ওপরে একটি লেয়ার তৈরি করে রিকোয়েস্ট রাউটিং, মিডলওয়্যার এবং রেসপন্স হ্যান্ডলিংয়ের কাজগুলো অনেক সহজ ও সংক্ষিপ্ত করে দেয়।\n৩. রূপক: নোড জেএস যদি একটি গাড়ির ইঞ্জিন (Engine) হয়, তবে এক্সপ্রেস জেএস হলো সেই ইঞ্জিনের ওপর ফিট করা সম্পূর্ণ রেডিমেড গাড়ি (Car Body)। ইঞ্জিন ছাড়া গাড়ি চলবে না, আবার রেডি বডি ছাড়া কেবল ইঞ্জিন ড্রাইভ করা কঠিন।",
        en: "The primary difference lies in runtime vs. framework abstraction:\n1. Runtime vs. Framework: Node.js is a JavaScript runtime environment that lets you run JS code server-side. Express.js is a minimalist web application framework built on top of Node.js.\n2. Abstraction Layer: Node.js provides low-level APIs (like filesystem I/O and direct TCP sockets). Express.js abstracts these operations, providing clean interfaces for routing, middleware pipelines, and HTTP response handling.\n3. Metaphor: Node.js is the engine of a car. Express.js is the car chassis and steering assembly built around that engine, making it ready to drive.",
      },
    },
    {
      question: {
        bn: "ওয়েব অ্যাপ্লিকেশনে ডাটাবেজ (Database) সরাসরি ব্রাউজার বা ফ্রন্টএন্ড থেকে কানেক্ট না করে কেন এপিআই ও ব্যাকএন্ড সার্ভারের মাধ্যমে কানেক্ট করা হয়?",
        en: "Why connect databases through backend servers instead of connecting them directly from the client browser?",
      },
      answer: {
        bn: "ডাটাবেজ সরাসরি ফ্রন্টএন্ড থেকে কানেক্ট না করার ৩টি প্রধান কারণ সিকিউরিটি ও আর্কিটেকচারাল কন্ট্রোল:\n১. ক্রেডেনশিয়াল লিক (Credential Leaks): ডাটাবেজে কানেক্ট করতে হলে সিক্রেট ইউজারনেম ও পাসওয়ার্ড লাগে। ফ্রন্টএন্ডে এই ক্রেডেনশিয়াল রাখলে হ্যাকাররা সোর্স কোড থেকে তা চুরি করে ডাটাবেজ হ্যাক করে ফেলবে। ব্যাকএন্ডে এই পাসওয়ার্ড নিরাপদে গোপন থাকে।\n২. ডেটা এক্সেস কন্ট্রোল (Access Control): ডাটাবেজ সরাসরি ব্রাউজার থেকে রিড করলে যেকোনো ইউজার কুয়েরি লিখে অন্যের পার্সোনাল ডাটা চুরি বা ডিলিট করতে পারতো। ব্যাকএন্ড সার্ভার মিডলওয়্যার হিসেবে কাজ করে চেক করে যে নির্দিষ্ট ইউজারের ওই ডাটা ডিলিট করার অধিকার আছে কিনা।\n৩. বিজনেস লজিক ভ্যালিডেশন (Business Logic): কোনো অর্ডার প্রসেস করার সময় পর্যাপ্ত স্টক আছে কিনা তা চেক করা ফ্রন্টএন্ডে করা যায় না, কারণ অন্য ইউজার একই সময় কিনতে পারে। ব্যাকএন্ড ডাটাবেজের কনকারেন্সি এবং লজিক্যাল ভ্যালিডেশন নিখুঁতভাবে রক্ষা করে।",
        en: "Connecting databases directly to client browsers violates security and data integrity principles due to three concerns:\n1. Credential Exposure: Database connection strings contain sensitive usernames and passwords. Shipping these in client bundle files exposes them to anyone using inspect tools, leading to database compromise.\n2. Access Control: A client-to-database connection permits any query to run. Backend servers act as guardians, validating authorization headers to ensure a user queries only their own data resources.\n3. Business Logic Enforcement: Backends enforce schema validations and inventory checks server-side, preventing malicious data alterations that bypass frontend validations.",
      },
    },
  ],
};
