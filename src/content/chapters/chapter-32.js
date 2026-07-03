export const chapter32Content = {
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
  objectives: [
    {
      bn: "এক্সপ্রেস জেএস-এর রাউটিং সিস্টেমের ব্যবহার এবং গুরুত্ব ব্যাখ্যা করা।",
      en: "Explain the implementation and benefits of the Express.js routing system.",
    },
    {
      bn: "রেস্ট এপিআই (REST API) ডিজাইনের নিয়মাবলী এবং আর্কিটেকচারাল স্টাইল রপ্ত করা।",
      en: "Understand REST API architectural guidelines and standard API structures.",
    },
    {
      bn: "HTTP মেথডসমূহ (GET, POST, PUT, DELETE) ব্যবহার করে ক্রাড (CRUD) অপারেশন তৈরি করা।",
      en: "Build full CRUD operations using HTTP methods (GET, POST, PUT, DELETE).",
    },
    {
      bn: "রিকোয়েস্ট অবজেক্ট (\`req.params\`, \`req.query\`, \`req.body\`) থেকে ডেটা রিড ও প্রসেস করা।",
      en: "Extract and process client data using request objects (params, query, body).",
    },
  ],
  sections: [
    {
      id: "intro-express-rest",
      title: {
        bn: "১. এক্সপ্রেস ও রেস্ট এপিআই এর ধারণা (What is Express & What is REST API)",
        en: "1. What is Express & What is REST API",
      },
      content: {
        bn: `## What is Express.js? (এক্সপ্রেস জেএস কী?)
**Express.js** হলো নোড জেএস (Node.js) এর জন্য সবচেয়ে জনপ্রিয়, দ্রুত এবং মিনিমালিস্ট ওয়েব ফ্রেমওয়ার্ক। 

র নোড কোড ব্যবহার করে রাউটিং বা এপিআই তৈরি করা কঠিন। এক্সপ্রেস জেএস আমাদের কাজকে একদম সহজ করে দেয়। এটি রিকোয়েস্ট এবং রেসপন্স হ্যান্ডেল করতে সাহায্য করে।

---

## What is REST API? (রেস্ট এপিআই কী?)
**REST** এর পূর্ণরূপ হলো **Representational State Transfer**। এটি কোনো ল্যাঙ্গুয়েজ বা টুলস নয়, এটি হলো এপিআই ডিজাইন করার এক সেট স্ট্যান্ডার্ড নিয়ম বা স্টাইল।
*   **রুলস বা নীতিসমূহ**:
    - **Resource-Based URLs**: ইউআরএল সবসময় নাউন বা বস্তুবাচক হবে, ভার্ব হবে না (যেমন: \`/api/products\` সঠিক, কিন্তু \`/api/getProducts\` সঠিক নয়)।
    - **Stateless Communication**: সার্ভার কোনো ক্লায়েন্ট সেশন মনে রাখবে না। প্রতিটি রিকোয়েস্টে তার প্রয়োজনীয় সমস্ত তথ্য থাকতে হবে।
    - **Standard HTTP Methods**: রিসোর্স অ্যাক্সেস করতে স্ট্যান্ডার্ড এইচটিটিপি ভার্ব ব্যবহার করতে হবে।`,
        en: `## What is Express.js?
**Express.js** is a minimalist, fast, and unopinionated web framework built on top of Node.js.

While raw Node.js script requires heavy boilerplate parsing, Express handles connection details behind the scenes, allowing you to focus purely on business logic.

---

## What is REST API?
**REST** stands for **Representational State Transfer**. It is not a database engine or a protocol, but a set of architectural rules for building predictable, scalable web APIs.
*   **Core Concepts**:
    - **Resource-Based Routes**: Paths should be nouns rather than actions (use \`/api/products\` instead of \`/api/getProducts\`).
    - **Statelessness**: Every client request must contain all data headers required to satisfy the logic. The server does not preserve transaction histories.
    - **Standardized Verbs**: Use predefined HTTP methods to represent operations.`,
      },
    },
    {
      id: "http-methods-routes",
      title: {
        bn: "২. এইচটিটিপি মেথড ও রাউটিং সিস্টেম (HTTP Methods & Routing System)",
        en: "2. HTTP Methods & Routing System",
      },
      content: {
        bn: `## HTTP Methods (এইচটিটিপি মেথডসমূহ)
রেস্ট এপিআই তৈরিতে আমরা নির্দিষ্ট কাজের জন্য ৪টি প্রধান HTTP মেথড ব্যবহার করি:
1.  **GET (Read)**: সার্ভার থেকে ডাটা রিড বা পড়ার জন্য (যেমন: প্রোডাক্টের তালিকা দেখা)।
2.  **POST (Create)**: সার্ভারে নতুন ডাটা তৈরি বা যোগ করার জন্য (যেমন: নতুন প্রোডাক্ট রেজিস্টার করা)।
3.  **PUT (Update)**: আগের কোনো ডাটা এডিট বা আপডেট করার জন্য (যেমন: প্রোডাক্টের দাম পরিবর্তন করা)।
4.  **DELETE (Remove)**: সার্ভার থেকে কোনো ডাটা ডিলিট বা মুছে ফেলার জন্য (যেমন: কোনো ইউজার ডিলিট করা)।

---

## Express Routing System (রাউটিং সিস্টেম)
এক্সপ্রেসে আমরা নির্দিষ্ট মেথড ব্যবহার করে রাউট ডিফাইন করি:
\`\`\`javascript
// ১. ইউজার রিড রাউট
app.get('/users', (req, res) => {
  res.send("Get Users list");
});

// ২. ইউজার তৈরি রাউট
app.post('/users', (req, res) => {
  res.send("Create new user");
});
\`\`\`
*ক্লু: একই ইউআরএল (\`/users\`) কিন্তু ভিন্ন ভিন্ন HTTP মেথড (GET বনাম POST) দিয়ে আমরা দুই ধরনের কাজ সম্পন্ন করতে পারছি!*`,
        en: `## HTTP Methods
REST APIs use HTTP verbs to define actions:
1.  **GET**: Fetching resource records from the server database (Read operations).
2.  **POST**: Injecting new records onto the database (Create operations).
3.  **PUT**: Modifying existing records (Update operations).
4.  **DELETE**: Purging records from database blocks (Delete operations).

---

## Express Routing System
Express registers routing pathways using dedicated methods matching HTTP verbs:
\`\`\`javascript
// GET Endpoint
app.get('/users', (req, res) => {
  res.send("Fetch users index");
});

// POST Endpoint
app.post('/users', (req, res) => {
  res.send("Insert user profile");
});
\`\`\``,
      },
    },
    {
      id: "crud-operations",
      title: {
        bn: "৩. ক্রাড অপারেশন ও বাস্তব এপিআই উদাহরণ (CRUD & Real API Examples)",
        en: "3. CRUD Operations & Real API Examples",
      },
      content: {
        bn: `## What is CRUD? (ক্রাড কী?)
সফটওয়্যার ডেভেলপমেন্টের মূল চালিকাশক্তি হলো **CRUD** অপারেশন:
*   **C**reate (তৈরি করা) ➡️ **POST** মেথড।
*   **R**ead (পড়া) ➡️ **GET** মেথড।
*   **U**pdate (আপডেট করা) ➡️ **PUT** মেথড।
*   **D**elete (মুছে ফেলা) ➡️ **DELETE** মেথড।

যেকোনো ফেসবুক পোস্ট, ওয়াটসঅ্যাপ মেসেজ বা ই-কমার্স অর্ডার এই ৪টি অপারেশনের ভেতরেই পরিচালিত হয়।

---

## Real API Resource Examples (বাস্তব এপিআই ইউআরএল ডিজাইন)
একটি প্রফেশনাল ই-কমার্স প্রোডাক্ট রিসোর্সের স্ট্যান্ডার্ড রেস্টফুল পাথগুলো নিচে দেওয়া হলো:

*   **GET** \`/api/products\` ➡️ সব প্রোডাক্টের তালিকা দেখা।
*   **GET** \`/api/products/:id\` ➡️ নির্দিষ্ট একটি আইডি-র প্রোডাক্টের বিস্তারিত দেখা।
*   **POST** \`/api/products\` ➡️ নতুন প্রোডাক্ট যোগ করা।
*   **PUT** \`/api/products/:id\` ➡️ নির্দিষ্ট আইডি-র প্রোডাক্ট এডিট করা।
*   **DELETE** \`/api/products/:id\` ➡️ নির্দিষ্ট প্রোডাক্ট ডিলিট করা।`,
        en: `## What is CRUD?
Every transactional web platform operates on **CRUD** cycles:
*   **C**reate ➡️ Maps to HTTP **POST**.
*   **R**ead ➡️ Maps to HTTP **GET**.
*   **U**pdate ➡️ Maps to HTTP **PUT**.
*   **D**elete ➡️ Maps to HTTP **DELETE**.

Whether posting an Instagram photo or removing a tweet, you trigger one of these database cycles.

---

## Real API Resource Examples
Here is how professional e-commerce product endpoints are standardly structured:
*   **GET** \`/api/products\`: Fetches all products.
*   **GET** \`/api/products/:id\`: Fetches details of a single product matching the ID parameter.
*   **POST** \`/api/products\`: Inserts a new product listing.
*   **PUT** \`/api/products/:id\`: Updates product attributes.
*   **DELETE** \`/api/products/:id\`: Purges a product from catalogs.`,
      },
    },
    {
      id: "request-response-express",
      title: {
        bn: "৪. বেসিক এক্সপ্রেস সার্ভার ও রিকোয়েস্ট-রেসপন্স (Basic Server, Request & Response)",
        en: "4. Basic Express Server, Request & Response",
      },
      content: {
        bn: `## Basic Express Setup (বেসিক এক্সপ্রেস সার্ভার)
একটি এক্সপ্রেস ব্যাকএন্ড রেডি করতে প্রথমে পোর্ট ম্যাপ করে সার্ভার লিসেনার তৈরি করতে হয়। 

রিকোয়েস্ট অবজেক্ট (\`req\`) এবং রেসপন্স অবজেক্ট (\`res\`) হলো ব্যাকএন্ডের দুই প্রধান হাতিয়ার:
*   **req.params**: ইউআরএল-এর ডাইনামিক আইডি পড়তে (যেমন: \`/users/:id\` পাথের জন্য \`req.params.id\`)।
*   **req.query**: ইউআরএল সার্চ ফিল্টার পড়তে (যেমন: \`/products?category=watch\` পাথের জন্য \`req.query.category\`)।
*   **req.body**: ক্লায়েন্ট থেকে আসা বডি কন্টেন্ট পড়তে (যেমন: লগইন ফর্মের ইমেইল ও পাসওয়ার্ড)।

---

## Basic Server Code Template (সার্ভার কাঠামো)
\`\`\`javascript
const express = require('express');
const app = express();
app.use(express.json()); // body parsing middleware

// ডাটা গেট ও আইডি রিডিং
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: \`User ID: \${userId} fetching request received\` });
});

app.listen(5000, () => {
  console.log("Express API Server is running on port 5000");
});
\`\`\``,
        en: `## Basic Express Setup
To construct an Express server, we declare a port listener and register route handler callbacks.

Our API logic depends on the Request (\`req\`) and Response (\`res\`) parameters:
*   **req.params**: Extracted dynamic URL parameters (e.g. \`req.params.id\` from path \`/users/:id\`).
*   **req.query**: Parsed URL query strings (e.g. \`req.query.sort\` from search filter path \`/products?sort=asc\`).
*   **req.body**: Read JSON data payloads transmitted by the client.

---

## Basic Server Code Template
\`\`\`javascript
const express = require('express');
const app = express();
app.use(express.json()); // Parses incoming JSON payloads

app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: \`Fetched details for User: \${userId}\` });
});

app.listen(5000, () => {
  console.log("Express API Server is running on port 5000");
});
\`\`\``,
      },
    },
    {
      id: "mistakes-analogy",
      title: {
        bn: "৫. সাধারণ ভুল ও রেস্টুরেন্ট ম্যানেজার রূপক (Common Mistakes & Analogy)",
        en: "5. Common Mistakes & Restaurant Manager Analogy",
      },
      content: {
        bn: `## Common Mistakes (সাধারণ ভুলসমূহ)
*   **Mixing UI in Backend (এইচটিএমএল পাঠানো)**: এপিআই সার্ভার থেকে এইচটিএমএল বা ভিজ্যুয়াল কোড রেন্ডার করার চেষ্টা করা। এপিআই ব্যাকএন্ড সার্ভার কেবল বিশুদ্ধ ডেটা (JSON) রিটার্ন করবে, ভিউ তৈরি করবে রিঅ্যাক্ট।
*   **Wrong HTTP Verbs (ভুল মেথড ব্যবহার)**: ইউজার তৈরি করতে POST এর বদলে GET মেথড ব্যবহার করা। এটি ডাটাবেজের সিকিউরিটি নষ্ট করে।
*   **No express.json() (বডি আনডিফাইন্ড)**: বডি থেকে ডাটা রিড করতে গিয়ে \`req.body\` আনডিফাইন্ড পাওয়া। এটি সমাধানের জন্য ফাইলের শুরুতে অবশ্যই \`app.use(express.json())\` ডিক্লেয়ার করতে হবে।

---

## The Restaurant System Manager Analogy (সিস্টেম ম্যানেজারের রূপক)
এক্সপ্রেস রাউটারকে একটি রেস্টুরেন্টের প্রফেশনাল সিস্টেম ম্যানেজারের সাথে মিলিয়ে নিন:
*   **এক্সপ্রেস (The Restaurant Manager)**: সম্পূর্ণ অর্ডারিং সিস্টেম নিয়ন্ত্রণকারী ব্যবস্থাপক।
*   **রাউটস (The Menu Items)**: কাস্টমার যে খাবারগুলো অর্ডার করতে পারেন। যেমন- বার্গার, পিজ্জা বা পাস্তা (আমাদের \`/api/burger\`, \`/api/pizza\`)।
*   **রিকোয়েস্ট (The Customer Order)**: গ্রাহক কোন আইটেমটি অর্ডার দিচ্ছেন তার চিরকুট (আমাদের Request)।
*   **রেসপন্স (The Food Delivery)**: কিচেন থেকে খাবার রান্না হয়ে যখন গ্রাহকের প্লেটে চলে আসে (আমাদের Response)। ভুল অর্ডার দিলে ম্যানেজার এরর মেসেজ ('আউট অফ স্টক') প্লেটে রিটার্ন করে!`,
        en: `## Common Mistakes
*   **Returning HTML instead of JSON**: APIs should only return structured JSON payloads, allowing frontend frameworks (React/Next) to render the visuals.
*   **Mismatching HTTP Verbs**: Using GET requests to submit passwords or modify database records, which exposes parameters in browser histories.
*   **Omitting JSON Parsers**: Reading \`req.body\` and getting \`undefined\`. Always register \`app.use(express.json())\` at the top of your script.

---

## The Restaurant System Manager Analogy
*   **Express (The Restaurant Manager)**: Coordinates order entries, distributes workloads to chefs, and schedules service flows.
*   **Routes (The Menu Items)**: Specific offerings customers can order (GET \`/burger\`, POST \`/burger\`).
*   **Request (The Customer Order)**: The ticket outlining custom cooking details (no onions, extra cheese).
*   **Response (The Food Delivery)**: Delivering the ordered plate to the guest's table, or returning a 'Sold Out' status code.`,
      },
      codeBlock: {
        fileName: "productServer.js",
        language: "javascript",
        code: `const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // JSON parsing middleware

// মক ডাটাবেজ
let products = [
  { id: 1, name: "ল্যাপটপ", price: 55000 },
  { id: 2, name: "মাউস", price: 1200 }
];

// ১. READ - সকল প্রোডাক্ট দেখা (GET)
app.get('/api/products', (req, res) => {
  res.json(products);
});

// ২. CREATE - নতুন প্রোডাক্ট যোগ করা (POST)
app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  
  if (!name || !price) {
    return res.status(400).json({ error: "নাম এবং দাম দুটিই দিতে হবে!" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price: Number(price)
  };

  products.push(newProduct);
  res.status(201).json(newProduct); // 201: Created status
});

// ৩. UPDATE - প্রোডাক্ট আপডেট করা (PUT)
app.put('/api/products/:id', (req, res) => {
  const productId = Number(req.params.id);
  const { name, price } = req.body;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "প্রোডাক্টটি পাওয়া যায়নি!" });
  }

  if (name) product.name = name;
  if (price) product.price = Number(price);

  res.json(product);
});

// ৪. DELETE - প্রোডাক্ট মুছে ফেলা (DELETE)
app.delete('/api/products/:id', (req, res) => {
  const productId = Number(req.params.id);
  const initialLength = products.length;

  products = products.filter(p => p.id !== productId);

  if (products.length === initialLength) {
    return res.status(404).json({ error: "প্রোডাক্টটি পাওয়া যায়নি!" });
  }

  res.json({ message: "প্রোডাক্ট সফলভাবে মুছে ফেলা হয়েছে।" });
});

app.listen(PORT, () => {
  console.log(\`Express CRUD Server is running on port \${PORT}\`);
});`,
        explanations: [
          {
            line: 20,
            text: {
              bn: "POST মেথডের মাধ্যমে req.body থেকে নতুন প্রোডাক্টের নাম ও দাম রিড করা হচ্ছে এবং ডাটাবেজ অবজেক্টে পুশ করা হচ্ছে।",
              en: "POST endpoint reads request body parameters and pushes a new object to the catalog array.",
            },
          },
          {
            line: 38,
            text: {
              bn: "req.params.id ডাইনামিক রাউট ভ্যারিয়েবল রিড করে নির্দিষ্ট প্রোডাক্টটি খুঁজে বের করে এর তথ্য আপডেট করা হচ্ছে।",
              en: "PUT endpoint extracts the target product ID from req.params to update specific attributes.",
            },
          },
          {
            line: 55,
            text: {
              bn: "DELETE মেথডের মাধ্যমে নির্দিষ্ট আইডি বাদে বাকি প্রোডাক্টগুলোকে ফিল্টার আউট করে মূল ডিলিট অপারেশন চালানো হয়েছে।",
              en: "DELETE endpoint filters out products matching the URL ID parameter to complete deletion.",
            },
          },
        ],
      },
    },
    {
      id: "practice-express-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও ক্রাড অপারেশন অনুশীলনটি সম্পন্ন করুন। এটি আপনার ব্যাকএন্ড এপিআই বিল্ডিং নলেজকে নেক্সট লেভেলে নিয়ে যাবে।`,
        en: `## Reflection & Lab Tasks
Solidify your REST architectures and HTTP verbs concepts before configuring MongoDB databases in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "এক্সপ্রেস মূলত নোড জেএস-এর লো-লেভেল রিকোয়েস্টগুলোকে অবজেক্ট মডেলে রুপান্তর করে কোডিং সহজ করতে সাহায্য করে।",
          en: "Express abstracts Node's low-level TCP/HTTP structures into clean, parameter-rich request/response handlers.",
        },
        whyWorks: {
          bn: "এটি রিকোয়েস্ট লাইফসাইকেল মিডলওয়্যার পাইপলাইনের মাধ্যমে সিকোয়েনশিয়ালি এপিআই গেটওয়ে প্রসেস রান করায়।",
          en: "Express routes requests through middleware pipelines, checking headers and formatting JSON payloads.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা এপিআই রুট সবসময় সংস্করণ মেনে (যেমন: \`/api/v1/products\`) ডিজাইন করেন যেন পরবর্তীতে ব্রেকিং চেঞ্জ এড়ানো যায়।",
          en: "Professionals version API routing structures (e.g. `/api/v1/products`) to prevent breaking changes on legacy code.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় এপিআই ভুল হলো ট্রাই-ক্যাচ (try-catch) ব্লক ব্যবহার না করা। ব্যাকএন্ড ক্র্যাশ করলে পুরো সাইট বন্ধ হয়ে যেতে পারে।",
          en: "Failing to wrap API callbacks in try-catch loops. Unhandled runtime exceptions crash the entire node server.",
        },
        debugging: {
          bn: "পোস্ট রিকোয়েস্টে বডি রিড করতে না পারলে আপনার এপিআই রিকোয়েস্টে 'Content-Type: application/json' হেডার এন্ট্রি দিন।",
          en: "Ensure your HTTP client sends 'Content-Type: application/json' headers when posting request bodies.",
        },
        performance: {
          bn: "ডাটাবেজ ফিল্টারিং অপারেশনের সময় ইনডেক্সিং এবং পেজিনেশন (pagination) মেকানিজম ফলো করুন।",
          en: "Implement API pagination (e.g., limits and page queries) to avoid fetching huge database records at once.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "api-q1",
      question: {
        bn: "এক্সপ্রেস জেএস (Express.js) ব্যবহারের প্রধান উদ্দেশ্য কী?",
        en: "What is the primary benefit of using Express.js?",
      },
      options: [
        { bn: "ডিজাইন সিস্টেম তৈরি করা", en: "Building visual design systems" },
        {
          bn: "নোড জেএস-এ অতি সহজে রাউটিং এবং ব্যাকএন্ড এপিআই সার্ভার তৈরি করা",
          en: "Simplifying routing and backend API server development in Node.js",
        },
        {
          bn: "ব্রাউজারে ফন্ট চেঞ্জ করা",
          en: "Modifying browser fonts style sheets",
        },
        {
          bn: "সার্ভারে ইমেজ ফাইল ক্রপ করা",
          en: "Cropping server image assets",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এক্সপ্রেস নোড জেএসের ওপরে একটি সহজ অ্যাবস্ট্রাকশন লেয়ার প্রদান করে যা দিয়ে খুব সহজে রাউটিং এবং HTTP সার্ভার চালানো যায়।",
        en: "Express provides simple APIs to handle HTTP routers and server-side responses.",
      },
    },
    {
      id: "api-q2",
      question: {
        bn: "রেস্ট এপিআই (REST API) নিয়মানুযায়ী নিচের কোন ইউআরএল (URL) কাঠামোটি সঠিক বা স্ট্যান্ডার্ড?",
        en: "Which URL configuration represents a standard REST API pattern?",
      },
      options: [
        { bn: "/api/getProducts", en: "/api/getProducts" },
        { bn: "/api/products", en: "/api/products" },
        { bn: "/api/products/delete/all", en: "/api/products/delete/all" },
        { bn: "/api/action/addProduct", en: "/api/action/addProduct" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রেস্ট এপিআই গাইডলাইন অনুযায়ী ইউআরএল সবসময় নাউন বা বস্তুবাচক (\`/api/products\`) হবে এবং কোনো অ্যাকশন বা ভার্ব থাকবে না।",
        en: "REST routes address resources using nouns rather than action verbs.",
      },
    },
    {
      id: "api-q3",
      question: {
        bn: "সার্ভারে একটি নতুন তথ্য বা রেকর্ড যোগ করার জন্য কোন HTTP মেথডটি ব্যবহার করা উচিত?",
        en: "Which HTTP method should be triggered to create a new resource record?",
      },
      options: [
        { bn: "GET", en: "GET" },
        { bn: "POST", en: "POST" },
        { bn: "PUT", en: "PUT" },
        { bn: "DELETE", en: "DELETE" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "POST মেথডের মাধ্যমে ক্লায়েন্ট থেকে সার্ভারে নতুন ডাটা বডি রিকোয়েস্ট পাঠানো হয় যা ডাটাবেজে রেকর্ড ক্রিয়েট করে।",
        en: "POST requests submit payloads to insert new entries into database models.",
      },
    },
    {
      id: "api-q4",
      question: {
        bn: "এক্সপ্রেস ডাইনামিক রাউট \`/api/users/:id\`-এর আইডি ভ্যালুটি সার্ভারে রিড করার সঠিক পদ্ধতি কোনটি?",
        en: "How do you access the dynamic variable from the route path '/api/users/:id' in Express?",
      },
      options: [
        { bn: "req.body.id", en: "req.body.id" },
        { bn: "req.params.id", en: "req.params.id" },
        { bn: "req.query.id", en: "req.query.id" },
        { bn: "req.id", en: "req.id" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ইউআরএল-এর কোলোন বিশিষ্ট ডাইনামিক প্যারামিটার রিড করতে এক্সপ্রেসে \`req.params\` ব্যবহার করা হয়।",
        en: "Dynamic path parameters are mapped onto the `req.params` object.",
      },
    },
    {
      id: "api-q5",
      question: {
        bn: "CRUD অপারেশনের 'U' এবং 'D' যথাক্রমে কোন দুটি HTTP মেথডকে নির্দেশ করে?",
        en: "Which HTTP methods represent the 'U' and 'D' actions in CRUD cycles?",
      },
      options: [
        { bn: "GET এবং POST", en: "GET and POST" },
        { bn: "PUT এবং DELETE", en: "PUT and DELETE" },
        { bn: "POST এবং PUT", en: "POST and PUT" },
        { bn: "DELETE এবং GET", en: "DELETE and GET" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "CRUD চক্রের U (Update) সম্পন্ন করতে PUT মেথড এবং D (Delete) সম্পন্ন করতে DELETE মেথড ব্যবহৃত হয়।",
        en: "Update operations use PUT requests, while Delete operations trigger DELETE requests.",
      },
    },
  ],
  practice: [
    {
      bn: "১. এক্সপ্রেসে রিকোয়েস্ট অবজেক্টের req.params এবং req.query এর মধ্যে মূল পার্থক্য কী?",
      en: "1. Contrast the core differences between req.params and req.query configurations in Express routes.",
    },
    {
      bn: "২. কেন এপিআই ক্রাড অপারেশনে পোস্ট এডিটিং এর জন্য PUT এবং পোস্ট তৈরির জন্য POST মেথড পৃথক করা জরুরি?",
      en: "2. Argue why separating PUT and POST endpoints is essential for building idempotent REST APIs.",
    },
    {
      bn: "৩. কোনো রাউটে req.body ব্যবহার করে ডাটা পার্স করতে গেলে শুরুতে কোন মিডলওয়্যারটি সক্রিয় করতে হয় তা লিখুন।",
      en: "3. Identify the middleware function that must be mounted in Express to parse incoming JSON request bodies.",
    },
  ],
  assignment: {
    title: {
      bn: "শপিং কার্ট ক্রাড (CRUD) এপিআই রাউটার",
      en: "Shopping Cart CRUD API Router Setup",
    },
    description: {
      bn: "এক্সপ্রেস জেএস ব্যবহার করে একটি মিনি শপিং কার্ট এপিআই রাউটার ডিজাইন করুন। কার্টে থাকা আইটেমের তালিকা রিড করার জন্য একটি GET রাউট, আইটেম যোগ করার জন্য POST রাউট এবং আইটেম রিমুভ করার জন্য একটি DELETE রাউট ইমপ্লিমেন্ট করুন।",
      en: "Implement a database-less Express routing system for a shopping cart catalog. Configure a GET route to read cart items, a POST route to add products, and a DELETE route to remove items matching dynamic product IDs.",
    },
    starterCode: `// Shopping Cart CRUD Router
const express = require('express');
const app = express();
app.use(express.json());

// কার্ট আইটেম কালেকশন
let cart = [
  { productId: 101, name: "জাভাস্ক্রিপ্ট বই", quantity: 1 }
];

// ১. GET - কার্টের সব আইটেম দেখা

// ২. POST - কার্টে আইটেম যোগ করা

// ৩. DELETE - কার্ট থেকে আইটেম ডিলিট করা
`,
    solution: {
      code: `// Shopping Cart CRUD Router Solution
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let cart = [
  { productId: 101, name: "জাভাস্ক্রিপ্ট বই", quantity: 1 }
];

// ১. GET - কার্টের সব আইটেম দেখা
app.get('/api/cart', (req, res) => {
  res.json(cart);
});

// ২. POST - কার্টে আইটেম যোগ করা
app.post('/api/cart', (req, res) => {
  const { productId, name, quantity } = req.body;

  if (!productId || !name || !quantity) {
    return res.status(400).json({ error: "প্রোডাক্ট আইডি, নাম ও পরিমাণ দিতে হবে!" });
  }

  const existingItem = cart.find(item => item.productId === Number(productId));

  if (existingItem) {
    existingItem.quantity += Number(quantity);
    return res.json(existingItem);
  }

  const newItem = {
    productId: Number(productId),
    name,
    quantity: Number(quantity)
  };

  cart.push(newItem);
  res.status(201).json(newItem);
});

// ৩. DELETE - কার্ট থেকে নির্দিষ্ট আইটেম ডিলিট করা
app.delete('/api/cart/:id', (req, res) => {
  const productId = Number(req.params.id);
  const initialLength = cart.length;

  cart = cart.filter(item => item.productId !== productId);

  if (cart.length === initialLength) {
    return res.status(404).json({ error: "কার্টে এই প্রোডাক্টটি পাওয়া যায়নি!" });
  }

  res.json({ message: "কার্ট থেকে প্রোডাক্টটি সফলভাবে রিমুভ করা হয়েছে।" });
});

app.listen(PORT, () => {
  console.log(\`Shopping Cart Server is listening on port \${PORT}\`);
});`,
      explanation: {
        bn: "চমৎকার কোড ইমপ্লিমেন্টেশন! কার্টে ডুপ্লিকেট এন্ট্রি হ্যান্ডলিং ও পরিমাণ কোয়ান্টিটি আপডেট লজিক এবং ডিলিট ফিল্টারিং শতভাগ নিখুঁত হয়েছে।",
        en: "Exceptional CRUD handling! Detecting pre-existing cart IDs to increment quantities before pushing matches professional standards.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "রেস্ট এপিআই (REST API) এর মূল কনস্ট্রেইন্ট বা নীতিমালাগুলো সংক্ষেপে ব্যাখ্যা করুন।",
        en: "What are the core constraints of REST API architecture?",
      },
      answer: {
        bn: "রেস্ট এপিআই মূলত ৫টি প্রধান নিয়মের ওপর ভিত্তি করে কাজ করে:\n১. ক্লায়েন্ট-সার্ভার আর্কিটেকচার (Client-Server): ফ্রন্টএন্ড এবং ব্যাকএন্ড থাকবে সম্পূর্ণ স্বাধীন ও পৃথক। ক্লায়েন্ট ভিউ দেখাবে এবং সার্ভার ডাটা প্রসেস করবে।\n২. স্টেটলেসনেস (Stateless): প্রতিটি রিকোয়েস্টে তার প্রয়োজনীয় সমস্ত ডাটা হেডার বা টোকেন আকারে পাঠাতে হবে। সার্ভার কোনো পূর্ববর্তী রিকোয়েস্টের স্মৃতি ধারণ করবে না।\n৩. ক্যাশেবিলিটি (Cacheable): সার্ভারের রেসপন্স ক্যাশে রাখার ব্যবস্থা থাকতে হবে যেন একই ডাটা বারবার সার্ভার থেকে লোড না করে ব্রাউজার থেকেই দ্রুত লোড করা যায়।\n৪. ইউনিফর্ম ইন্টারফেস (Uniform Interface): এপিআই পাথ ডিক্লেয়ার করার নিয়ম সবার জন্য সমান থাকবে (যেমন: নাউন ও স্ট্যান্ডার্ড এইচটিটিপি ভার্ব ব্যবহার)।\n৫. লেয়ার্ড সিস্টেম (Layered System): ক্লায়েন্ট জানতে পারবে না সে সরাসরি ডেটাবেজ সার্ভারের সাথে কথা বলছে নাকি মাঝখানের কোনো লোড ব্যালেন্সার বা সিকিউরিটি লেয়ারের সাথে কথা বলছে।",
        en: "REST APIs conform to five primary architectural constraints:\n1. Client-Server Separation: Decouples the client applications from server storage layers, enabling independent UI changes and scaling.\n2. Statelessness: The server processes every request in isolation. Clients provide authorization keys and parameter contexts on every transaction.\n3. Cacheability: Response structures define cache parameters. Clients reuse resources to avoid repeating network requests.\n4. Uniform Interface: Identifies resource addresses systematically (GET /users), employing HTTP status codes for predictable interface behavior.\n5. Layered Architecture: Enhances system scalability by routing transactions through middleware layers, reverse proxies, and auth servers transparently.",
      },
    },
    {
      question: {
        bn: "এক্সপ্রেস জেএস রাউটে \`req.params\`, \`req.query\` এবং \`req.body\` এর মধ্যে মূল পার্থক্য এবং ব্যবহারের ক্ষেত্রগুলো কী কী?",
        en: "Contrast the differences and ideal use cases for req.params, req.query, and req.body in Express.",
      },
      answer: {
        bn: "এক্সপ্রেসে ক্লায়েন্টের ডাটা রিসিভ করার এই ৩টি ইনপুট মেথডের পার্থক্য নিম্নরূপ:\n১. \`req.params\` (পাথ ভ্যারিয়েবল): এটি ডাইনামিক রাউট মেম্বার রিড করে যা ইউআরএল-এর মাঝেই ডিফাইন থাকে (যেমন: \`/users/:id\` পাথে \`req.params.id\`)। এটি মূলত নির্দিষ্ট কোনো রিসোর্সকে ইউনিক আইডি দিয়ে চিহ্নিত করতে ব্যবহৃত হয়।\n২. \`req.query\` (সার্চ কুয়েরি): এটি ইউআরএল-এর শেষে প্রশ্নবোধক চিহ্নের (?) পরে কী-ভ্যালু জোড়ায় আসে (যেমন: \`/products?sort=price&limit=10\` পাথে \`req.query.sort\`)। এটি ডাটা ফিল্টারিং, সার্চিং বা পেজিনেশনের কাজে ব্যবহৃত হয়।\n৩. \`req.body\` (রিকোয়েস্ট বডি): এটি ইউআরএল-এ দৃশ্যমান থাকে না, রিকোয়েস্টের ভেতর সুরক্ষিত বডি আকারে আসে (সাধারণত JSON ফরম্যাটে)। এটি মূলত ফর্ম সাবমিশন, রেজিস্ট্রেশন বা ভারী তথ্য সার্ভারে পাঠাতে ব্যবহৃত হয়।",
        en: "Express routes read input data from three distinct request namespaces:\n1. `req.params`: Used for path segments identified by colons in routes definitions (e.g. dynamic ID values `/users/:id`). Ideal for retrieving single records.\n2. `req.query`: Used to extract key-value filters appended to URL paths after question marks (e.g. `/products?sort=desc`). Ideal for sorting, pagination, and queries.\n3. `req.body`: Holds user data payloads submitted within HTTP request body streams. Access requires JSON parser middlewares. Ideal for authentication credentials or rich forms.",
      },
    },
  ],
};
