export const chapter34Content = {
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
  objectives: [
    {
      bn: "মঙ্গুজ (Mongoose) লাইব্রেরি ব্যবহার করে এক্সপ্রেস সার্ভার থেকে মঙ্গোডিবি সংযোগ সফলভাবে তৈরি করা।",
      en: "Establish MongoDB database connections from Express.js using the Mongoose ODM.",
    },
    {
      bn: "মঙ্গুজ স্কিমা (Schema) এবং মডেল (Model) তৈরির মাধ্যমে ইনপুট ডেটা ভ্যালিডেশন নিশ্চিত করা।",
      en: "Define Mongoose Schemas and Models to enforce structural validations on data entries.",
    },
    {
      bn: "অ্যাসিনক্রোনাস জাভাস্ক্রিপ্ট (async/await) ব্যবহার করে ডেটাবেজের সাথে যোগাযোগ পরিচালনা করা।",
      en: "Manage asynchronous server-side operations utilizing JavaScript async/await patterns.",
    },
    {
      bn: "ডেটাবেজ মডেলে সম্পূর্ণ ক্রাড (CREATE, READ, UPDATE, DELETE) এপিআই গেটওয়ে বিল্ড করা।",
      en: "Build full CRUD REST API endpoints tied to database schemas.",
    },
  ],
  sections: [
    {
      id: "intro-crud-system",
      title: {
        bn: "১. সিস্টেম পরিচিতি ও মঙ্গোডিবি সংযোগ (System Overview & Connecting MongoDB)",
        en: "1. System Overview & Connecting MongoDB",
      },
      content: {
        bn: `## Full System Overview (পূর্ণাঙ্গ সিস্টেম প্রবাহ)
বাস্তব প্রোডাকশন অ্যাপ্লিকেশনগুলোতে ফ্রন্টএন্ড ক্লায়েন্ট সরাসরি ডেটাবেজের সাথে কানেক্ট হতে পারে না। যোগাযোগের সঠিক সিকোয়েন্স ফ্লো হলো:
\`\`\`
Frontend (React) ─── API HTTP Request ───> Backend (Express) ─── Database Query ───> MongoDB
Frontend (React) <─── JSON Data Response ─── Backend (Express) <─── BSON Document ─── MongoDB
\`\`\`

---

## Connecting Express to MongoDB via Mongoose (মঙ্গোডিবি সংযোগ)
ডেটাবেজের সাথে কোয়েরি চালানো সহজ করতে নোড জেএস-এ আমরা একটি ওডিএম (Object Data Modeling) লাইব্রেরি ব্যবহার করি যার নাম **Mongoose (মঙ্গুজ)**।

সার্ভার ফাইলের শুরুতে কানেকশন সেটআপ করার কোড স্ট্রাকচার:

\`\`\`javascript
const mongoose = require('mongoose');

// এক্সপ্রেস ও মঙ্গোডিবি সংযোগ স্থাপন
mongoose.connect('mongodb://localhost:27017/bignanpro_db')
  .then(() => console.log("MongoDB Database successfully connected!"))
  .catch((err) => console.error("Database connection failure:", err));
\`\`\`
*ক্লু: \`connect\` ফাংশনটি একটি প্রমিজ (Promise) রিটার্ন করে, তাই এটি কানেক্ট হতে না পারলে আমরা ক্যাচ ব্লকে এরর দেখতে পারি।*`,
        en: `## Full System Overview
In professional architectures, client browsers are blocked from directly querying databases. Data flows through a secure proxy layer:
\`\`\`
Frontend (React) ─── API HTTP Request ───> Backend (Express) ─── Database Query ───> MongoDB
Frontend (React) <─── JSON Data Response ─── Backend (Express) <─── BSON Document ─── MongoDB
\`\`\`

---

## Connecting MongoDB via Mongoose
To query MongoDB efficiently in Node.js, we use **Mongoose**, an Object Data Modeling (ODM) library that manages connection sockets and data translations.

Here is the connection setup script:

\`\`\`javascript
const mongoose = require('mongoose');

// Connect to MongoDB local instance
mongoose.connect('mongodb://localhost:27017/bignanpro_db')
  .then(() => console.log("MongoDB Database successfully connected!"))
  .catch((err) => console.error("Database connection failure:", err));
\`\`\``,
      },
    },
    {
      id: "data-models",
      title: {
        bn: "২. মঙ্গুজ ডাটা মডেল ও স্কিমা (Mongoose Data Models & Schemas)",
        en: "2. Mongoose Data Models & Schemas",
      },
      content: {
        bn: `## What is a Schema & Model? (স্কিমা ও মডেল কী?)
মঙ্গোডিবি নোএসএসকিউএল হওয়ায় এর নিজস্ব কোনো ডেটা রেস্ট্রিকশন বা কলাম নিয়ম থাকে না। কিন্তু আমাদের অ্যাপ্লিকেশনে যেন ভুল টাইপের ডাটা না ঢোকে, তার জন্য মঙ্গুজ ২টি টুলস ব্যবহার করে:

1.  **Schema (স্কিমা)**: এটি হলো ডেটার ব্লুপ্রিন্ট বা কঙ্কাল। যেমন: ইউজারের নাম অবশ্যই টেক্সট (\`String\`) হবে এবং ইমেইল ইউনিক হতে হবে।
2.  **Model (মডেল)**: স্কিমার ওপর ভিত্তি করে তৈরি করা একটি রিঅ্যাক্টিভ ক্লাস বা ইন্টারফেস, যার মাধ্যমে আমরা ডেটাবেজে কুয়েরি (Insert, Find, Delete) চালাই।

---

## Designing a Schema (স্কিমা ডিজাইন করার উদাহরণ)
\`\`\`javascript
const mongoose = require('mongoose');

// প্রোডাক্ট স্কিমা তৈরি
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, default: "Electronics" },
  createdAt: { type: Date, default: Date.now }
});

// স্কিমা থেকে মডেল ক্লাস তৈরি
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
\`\`\`
*ক্লু: \`required: true\` ব্যবহার করার ফলে কেউ যদি নাম ছাড়া প্রোডাক্ট সেভ করতে চায়, তবে মঙ্গুজ ডেটাবেজ কুয়েরি ব্লক করে এরর রিটার্ন করবে!*`,
        en: `## What is a Schema & Model?
Because MongoDB is schemaless, it accepts any document field shape. To prevent corrupt data from breaking our servers, Mongoose implements two validator structures:
1.  **Schema**: The skeleton blueprint defining allowed fields, keys types, and constraint validators.
2.  **Model**: A constructor class compiled from the Schema, containing helper methods to execute database actions.

---

## Designing a Schema
\`\`\`javascript
const mongoose = require('mongoose');

// Product Schema Definition
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, default: "Electronics" },
  createdAt: { type: Date, default: Date.now }
});

// Compile Schema into a Model Class
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
\`\`\``,
      },
    },
    {
      id: "crud-operations-mongodb",
      title: {
        bn: "৩. ডেটাবেজে ক্রাড (CRUD) অপারেশন (CRUD Operations in MongoDB)",
        en: "3. CRUD Operations in MongoDB",
      },
      content: {
        bn: `## Full CRUD Mapping (ক্রাড ম্যাপিং)
মঙ্গুজ ব্যবহার করে এক্সপ্রেস রাউটারগুলোতে অ্যাসিনক্রোনাস এপিআই রেন্ডারিং করার নিয়মাবলি নিচে দেখানো হলো:

### ১. Create (ডাটা তৈরি - POST):
\`\`\`javascript
app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save(); // ডেটাবেজে সেভ করা
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
\`\`\`

### ২. Read (ডাটা পড়া - GET):
\`\`\`javascript
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find(); // সকল প্রোডাক্ট রিড করা
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
\`\`\`

### ৩. Update (ডাটা আপডেট - PUT):
\`\`\`javascript
app.put('/api/products/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
\`\`\`

### ৪. Delete (ডাটা মুছে ফেলা - DELETE):
\`\`\`javascript
app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "প্রোডাক্ট সফলভাবে ডিলিট করা হয়েছে।" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
\`\`\``,
        en: `## Full CRUD Mapping
Here is the code blueprint for integrating Mongoose models inside Express async/await handler closures:

### 1. Create (POST)
\`\`\`javascript
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save(); // Saves document to MongoDB
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
\`\`\`

### 2. Read (GET)
\`\`\`javascript
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find(); // Returns all documents
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
\`\`\`

### 3. Update (PUT)
\`\`\`javascript
app.put('/api/products/:id', async (req, res) => {
  try {
    // { new: true } returns the modified document instead of original
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
\`\`\`

### 4. Delete (DELETE)
\`\`\`javascript
app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
\`\`\``,
      },
    },
    {
      id: "real-project-crud",
      title: {
        bn: "৪. বাস্তব প্রজেক্টের এপিআই ও এর শক্তি (Real Project Example & Power)",
        en: "4. Real Project Example & Power",
      },
      content: {
        bn: `## Real API Data Handling (বাস্তব এপিআই ডেটা হ্যান্ডলিং)
একটি বাস্তব ড্যাশবোর্ড বা ই-কমার্স সাইটে ব্যাকএন্ডে হাজার হাজার ডেটা অনবরত আসা-যাওয়া করে। 

লোকাল অ্যারে ভ্যারিয়েবলের ডেটার চেয়ে এটি শতভাগ শক্তিশালী কারণ:
*   **Persistent Storage**: মঙ্গোডিবি সার্ভার এবং ডাটাবেজ ফোল্ডারে তথ্য স্থায়ী থাকে। এক্সপ্রেস সার্ভার বন্ধ হয়ে গেলেও ডেটা কোনোভাবেই নষ্ট হয় না।
*   **Security & Integrity**: ডেটাবেজ কেবল স্কিমা অনুযায়ী ভ্যালিড ডেটা প্রবেশ করতে দেয়, যার ফলে হ্যাকাররা মেলিসিয়াস স্ক্রিপ্ট পুশ করতে পারে না।
*   **Dynamic UI sync**: ডেটাবেজে ডাটা চেঞ্জ হওয়ার সাথে সাথে ফ্রন্টএন্ডে রিঅ্যাক্ট স্টেট লুপের মাধ্যমে ড্যাশবোর্ড আপডেট দেখায়। এটিই হলো রিয়েল-ওয়ার্ল্ড সফটওয়্যারের ব্যাকবোন।`,
        en: `## Real API Data Handling
Modern web applications process continuous streams of client interactions.

Tying endpoints to MongoDB provides production-level benefits:
*   **Permanent Persistence**: Database tables write changes to disk files, surviving server host failures.
*   **Type Safety**: Mongoose intercepts malformed properties before they reach database indexes.
*   **Dynamic Sync**: Because frontend views query server endpoints on mount, UIs align instantly with database states.`,
      },
    },
    {
      id: "mistakes-analogy",
      title: {
        bn: "৫. সাধারণ ভুল ও শপ ম্যানেজমেন্টের রূপক (Common Mistakes & Analogy)",
        en: "5. Common Mistakes & Shop Management Analogy",
      },
      content: {
        bn: `## Common Mistakes (সাধারণ ভুলসমূহ)
*   **Forgetting Database Connection**: সার্ভার চালু করার আগে এক্সপ্রেস কোডে ডাটাবেজ কানেক্ট না করা। এর ফলে এপিআই কল করলেই সার্ভার দীর্ঘক্ষণ বা অনির্দিষ্টকালের জন্য লোডিং দেখায় বা ক্র্যাশ করে।
*   **Ignoring async/await**: মঙ্গুজের কুয়েরি অপারেশনগুলো ডেটাবেজে গিয়ে ফাইল রিড করতে সময় নেয়। তাই এগুলোতে \`await\` না লিখলে ডেটা খালি (Promise Pending) থেকে যায়।
*   **try-catch ব্লক না রাখা**: ডাটাবেজে এরর হতে পারে (যেমন: ডুপ্লিকেট ইমেইল বা ইনভ্যালিড আইডি)। ক্যাচ ব্লক না থাকলে সার্ভার সাথে সাথে বন্ধ হয়ে যাবে।

---

## The Shop Management Analogy (শপ ম্যানেজমেন্টের রূপক)
এক্সপ্রেস, মঙ্গুজ এবং মঙ্গোডিবির সম্পর্কটিকে একটি বড় ডিপার্টমেন্টাল স্টোরের সাথে মিলিয়ে নিন:
*   **ক্যাশিয়ার কাউন্টার (Express)**: গ্রাহক যেখানে এসে বিল পরিশোধ করেন বা আইটেম চান। ক্যাশিয়ার নিজে বই বা স্টকে হাত দেন না, সে শুধু রসিদ চেক করেন।
*   **ইনভেন্টরি রুম বা ব্যাক স্টোর (MongoDB)**: যেখানে শত শত কার্টন বা আলমারিতে প্রোডাক্ট সাজানো থাকে।
*   **স্টোর ম্যানেজার (Mongoose)**: ক্যাশিয়ার যখন বলে প্রোডাক্ট 'ল্যাপটপ' দিন, স্টোর ম্যানেজার রুলস চেক করে প্রোডাক্টটি আলমারি থেকে বের করে আনে। ম্যানেজার ক্যাশিয়ার এবং ব্যাক স্টোরের মধ্যে যোগসূত্র তৈরি করে এবং কোনো প্রোডাক্টের মেয়াদ শেষ বা ইনভ্যালিড হলে আগেই বিল ক্যান্সেল করে দেয়!`,
        en: `## Common Mistakes
*   **Forgetting to initialize connections**: Launching Express listeners without invoking Mongoose connections. Incoming requests hang indefinitely, waiting for database socket responses.
*   **Omitting async/await keywords**: Database reads are non-blocking network calls. Forgetting the \`await\` keyword assigns a \`Promise <Pending>\` to your response payload.
*   **Omitting try-catch blocks**: If Mongoose validation fails or a duplicate key index is inserted, Express crashes instantly without error handling blocks.

---

## The Shop Management Metaphor
*   **Cashier Counter (Express)**: The store entry point handling client interactions and printing billing orders. The cashier does not search warehouse crates directly.
*   **Storage Room (MongoDB)**: The locked warehouse storage yard holding the physical crates.
*   **Store Manager (Mongoose)**: The manager mapping inventory rules, ensuring empty cartons are not shipped, fetching crates from the storage room, and delivering them back to cashiers.`,
      },
      codeBlock: {
        fileName: "server.js",
        language: "javascript",
        code: `const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ১. মঙ্গোডিবি কানেকশন
mongoose.connect('mongodb://localhost:27017/academy_db')
  .then(() => console.log("Database connected successfully!"))
  .catch(err => console.error("Database connection error:", err));

// ২. মঙ্গুজ স্কিমা এবং মডেল ডিজাইন
const studentSchema = new mongoose.Schema({
  name: { type: String, required: [true, "নাম অবশ্যই দিতে হবে!"] },
  email: { type: String, required: true, unique: true },
  course: { type: String, default: "Fullstack Development" }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

// ৩. ক্রাড এপিআই রুটস
// CREATE (POST)
app.post('/api/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL (GET)
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "সার্ভার ইন্টারনাল এরর!" });
  }
});

// UPDATE (PUT)
app.put('/api/students/:id', async (req, res) => {
  try {
    // { new: true } রিটার্ন করে আপডেটেড ডকুমেন্ট
    const student = await Student.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!student) {
      return res.status(404).json({ error: "শিক্ষার্থী পাওয়া যায়নি!" });
    }
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE (DELETE)
app.delete('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "শিক্ষার্থী পাওয়া যায়নি!" });
    }
    res.json({ message: "শিক্ষার্থীর রেকর্ড ডেটাবেজ থেকে মুছে ফেলা হয়েছে।" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ৪. পোর্ট লিসেন
app.listen(PORT, () => {
  console.log(\`Express-Mongoose CRUD Server is listening on port \${PORT}\`);
});`,
        explanations: [
          {
            line: 18,
            text: {
              bn: "timestamps: true কনফিগারেশন যোগ করায় মঙ্গোডিবি অটোমেটিক্যালি createdAt এবং updatedAt ডেট ফিল্ড ম্যানেজ করবে।",
              en: "Setting timestamps: true instructs Mongoose to append createdAt and updatedAt dates on documents automatically.",
            },
          },
          {
            line: 30,
            text: {
              bn: "await student.save() একটি অ্যাসিনক্রোনাস কাজ যা ডেটা সফলভাবে ডেটাবেজে রাইট হওয়া পর্যন্ত অপেক্ষা করে।",
              en: "await student.save() performs a non-blocking disk write, returning compiled document variables.",
            },
          },
          {
            line: 52,
            text: {
              bn: "runValidators: true নিশ্চিত করে যে ডাটা আপডেট করার সময়ও স্কিমার ভ্যালিডেশন রুলস যেন চেক করা হয়।",
              en: "Enabling runValidators forces Mongoose validation engines to check inputs during PUT/Update requests.",
            },
          },
        ],
      },
    },
    {
      id: "practice-crud-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অ্যাসাইনমেন্টগুলো সম্পন্ন করুন। এটি আপনার ফুলস্ট্যাক মঙ্গোডিবি এপিআই ইন্টিগ্রেশন স্কিলকে চমৎকার করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your Express-Mongoose CRUD pipelines before proceeding to secure logins and JSON Web Token (JWT) authentications in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "মঙ্গুজ ও এক্সপ্রেস ইন্টিগ্রেশন ফ্রন্টএন্ড থেকে আসা ডেটা ভ্যালিডেট করে ডাটাবেজের স্থায়িত্ব রক্ষা করতে সাহায্য করে।",
          en: "Mongoose + Express bridges the gap between dynamic HTTP endpoints and persistent NoSQL document engines.",
        },
        whyWorks: {
          bn: "মঙ্গুজের প্রমিজ ও নোড জেএসের অ্যাসিনক্রোনাস ইভেন্ট লুপ একত্রে ডাটা রাইট ও রিড কুয়েরি অপ্টিমাইজড করে স্পিড বাড়ায়।",
          en: "The integration routes asynchronous callbacks inside try-catch shells to prevent Express runtime exceptions.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা ডাটাবেজ কুয়েরি করার সময় সবসময় স্কিমার \`select('-password')\` মেথড ব্যবহার করে পাসওয়ার্ড হাইড করে ডেটা রিটার্ন করেন।",
          en: "Seniors chain `.select('-password')` to read queries to prevent transmitting hashed credentials in JSON payloads.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় ডাটাবেজ এরর হলো মঙ্গুজের স্বয়ংক্রিয়ভাবে জেনারেট করা ইউনিক ইনডেক্স এরর (যেমন: duplicate key error 11000) সঠিকভাবে হ্যান্ডেল না করা।",
          en: "Ignoring MongoDB's duplicate key error (11000). Catch blocks should parse index exceptions gracefully.",
        },
        debugging: {
          bn: "ইউনিক এরর বা কুয়েরি ঝুলন্ত থাকলে আপনার ডাটাবেজ কানেকশন স্ট্রিং এ আইপি পোর্টের (\`localhost\` বনাম \`127.0.0.1\`) আইপি প্রোটোকল চেক করুন।",
          en: "If DB calls freeze, swap 'localhost' for '127.0.0.1' in connection URIs to resolve DNS hostname conflicts.",
        },
        performance: {
          bn: "ডাটাবেজে হাজার হাজার ফাইল থাকলে গেট এপিআই-তে মঙ্গুজের \`limit()\` এবং \`skip()\` ব্যবহার করে পেজিনেশন ইমপ্লিমেন্ট করুন।",
          en: "Implement API pagination patterns using Mongoose `.limit()` and `.skip()` to keep server responses fast.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "int-q1",
      question: {
        bn: "মঙ্গুজ (Mongoose)-এর ক্ষেত্রে মডেল (Model) বলতে কী বোঝায়?",
        en: "What is a Model in Mongoose?",
      },
      options: [
        {
          bn: "একটি ডেটাবেজ এডিট করার সফটওয়্যার",
          en: "A database editor software interface",
        },
        {
          bn: "স্কিমার ওপর ভিত্তি করে তৈরি ক্লাস যা দিয়ে ডেটাবেজে CRUD অপারেশন চালানো হয়",
          en: "A constructor class compiled from schemas to execute CRUD database queries",
        },
        {
          bn: "এইচটিএমএল ফাইল কমপ্রেস করার মিডলওয়্যার",
          en: "An HTML compressor middleware",
        },
        {
          bn: "জাভাস্ক্রিপ্ট ভেরিয়েবল ক্যাশিং ইঞ্জিন",
          en: "A JavaScript variable caching engine",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "মডেল হলো স্কিমা থেকে তৈরি হওয়া রিঅ্যাক্টিভ ও ইন্টারঅ্যাক্টিভ ক্লাস যা দিয়ে ডেটাবেজে সরাসরি কুয়েরি চালানো হয়।",
        en: "Models are compiled classes that wrap MongoDB collections with CRUD operations.",
      },
    },
    {
      id: "int-q2",
      question: {
        bn: "মঙ্গুজের নতুন স্কিমা তৈরির ক্লাসে \`unique: true\` কনফিগারেশনটির ভূমিকা কী?",
        en: "What is the purpose of the 'unique: true' configuration in a Mongoose schema field?",
      },
      options: [
        {
          bn: "ডাটাবেজে ডুপ্লিকেট ভ্যালু সেভ করা ব্লক করা (যেমন ডুপ্লিকেট ইমেইল)",
          en: "Blocking duplicate values from being saved in the database (e.g. duplicate email fields)",
        },
        {
          bn: "পাসওয়ার্ড হাইড করা",
          en: "Hashing database passwords automatically",
        },
        {
          bn: "সার্ভারের মেমরি ফ্রী করা",
          en: "Deallocating server RAM variables",
        },
        { bn: "সকল ডাটা ডিলিট করা", en: "Purging all collection records" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "unique: true ডেটাবেজে ইউনিক ইনডেক্স তৈরি করে ডুপ্লিকেট এন্ট্রি (যেমন একই ইমেলে একাধিক অ্যাকাউন্ট) রোধ করে।",
        en: "Unique indexes throw validation exceptions if duplicate key entries are saved.",
      },
    },
    {
      id: "int-q3",
      question: {
        bn: "মঙ্গুজ দিয়ে তৈরি ডকুমেন্ট আপডেট করার এক্সপ্রেস এপিআই রাউটে \`{ new: true }\` অপশনটি কেন ব্যবহার করা হয়?",
        en: "Why is the '{ new: true }' option passed to findByIdAndUpdate in Express routes?",
      },
      options: [
        {
          bn: "সম্পূর্ণ ডেটাবেজ শাটডাউন করতে",
          en: "To shut down database servers",
        },
        {
          bn: "রেসপন্সে আপডেটের আগের (পুরনো) ডাটা রিটার্ন করতে",
          en: "To return the original document version prior to modifications",
        },
        {
          bn: "রেসপন্সে আপডেট হওয়ার পরের (নতুন) ডাটা রিটার্ন করতে",
          en: "To return the modified document version containing the new updates",
        },
        { bn: "কোনো রেসপন্স না পাঠাতে", en: "To block API response streams" },
      ],
      correctAnswerIndex: 2,
      explanation: {
        bn: "findByIdAndUpdate ডিফল্টভাবে পুরনো ডাটা রিটার্ন করে। { new: true } পাস করলে এটি মডিফাইড করা নতুন ডাটা রিটার্ন করে।",
        en: "By default Mongoose returns the old document version. `new: true` overrides this to return the updated record.",
      },
    },
    {
      id: "int-q4",
      question: {
        bn: "ডাটাবেজ কুয়েরি করার সময় কেন \`try-catch\` ব্লক ব্যবহার করা বাধ্যতামূলক?",
        en: "Why is using try-catch blocks mandatory when querying databases in API routes?",
      },
      options: [
        {
          bn: "এটি কুয়েরির স্পিড ডাবল করে দেয়",
          en: "It doubles database processing speeds",
        },
        {
          bn: "কুয়েরি বা কানেকশনে এরর হলে সার্ভার ক্র্যাশ করা থেকে রক্ষা করতে",
          en: "To prevent server runtime crashes during database query errors",
        },
        {
          bn: "এটি এক্সপ্রেস লাইব্রেরি ডিলিট করে দেয়",
          en: "It deletes the Express library file",
        },
        {
          bn: "এটি সিএসএস ক্লাস রিমুভ করে",
          en: "It strips CSS styles parameters",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডাটাবেজ এরর হলে try-catch তা ক্যাচ করে ক্লায়েন্টে এরর মেসেজ পাঠায় এবং নোড সার্ভার ক্র্যাশ বা বন্ধ হয়ে যাওয়া থেকে বাঁচায়।",
        en: "Catch blocks intercept database errors, returning error responses without crashing the Node engine.",
      },
    },
    {
      id: "int-q5",
      question: {
        bn: "মঙ্গুজ মডেল ব্যবহার করে ডেটাবেজ থেকে একটি আইডি দ্বারা কোনো ডকুমেন্ট ডিলিট করার সঠিক এক্সপ্রেস এপিআই মেথড কোনটি?",
        en: "Which Mongoose method deletes a document from MongoDB by its Object ID?",
      },
      options: [
        {
          bn: "Product.findByIdAndDelete(id)",
          en: "Product.findByIdAndDelete(id)",
        },
        {
          bn: "Product.removeCollection(id)",
          en: "Product.removeCollection(id)",
        },
        { bn: "Product.dropTable(id)", en: "Product.dropTable(id)" },
        { bn: "Product.clearAll(id)", en: "Product.clearAll(id)" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "findByIdAndDelete(id) মেথডটি এক্সপ্রেস ডাইনামিক রাউট আইডি দ্বারা নির্দিষ্ট ডকুমেন্টকে ডিলিট অপারেশন সম্পন্ন করে।",
        en: "findByIdAndDelete targets documents matching ID values and deletes them from MongoDB.",
      },
    },
  ],
  practice: [
    {
      bn: "১. এক্সপ্রেস-মঙ্গুজ ইন্টিগ্রেশন প্রজেক্টে এপিআই রিকোয়েস্টে \`async/await\` বাদ দিলে কী ধরণের সমস্যা হতে পারে?",
      en: "1. Explain the architectural consequences of omitting async/await from database queries inside Express routes.",
    },
    {
      bn: "২. কেন প্রোডাক্ট আপডেটের সময় \`runValidators: true\` অপশনটি ব্যবহার করা আবশ্যক তা ব্যাখ্যা করুন।",
      en: "2. Argue why runValidators: true is necessary when executing PUT / Update operations in Mongoose.",
    },
    {
      bn: "৩. মঙ্গুজে \`createdAt\` এবং \`updatedAt\` ডেট স্ট্যাম্প নিজে না লিখে অটোমেটিক পেতে কোন স্কিমা অপশন সেট করতে হয় তা লিখুন।",
      en: "3. Identify the schema option configuration that automates document date updates (createdAt/updatedAt).",
    },
  ],
  assignment: {
    title: {
      bn: "প্রোডাকশন-রেডি প্রোডাক্ট ক্যাটালগ ক্রাড (CRUD) ব্যাকএন্ড",
      en: "Production-Ready Product Catalog CRUD Backend",
    },
    description: {
      bn: "এক্সপ্রেস জেএস ও মঙ্গুজ ওআরএম ব্যবহার করে একটি সম্পূর্ণ প্রোডাক্ট ক্যাটালগ এপিআই সার্ভার তৈরি করুন। প্রোডাক্ট স্কিমায় নাম, দাম (অবশ্যই পজিটিভ নাম্বার) এবং ক্যাটাগরি থাকতে হবে। ক্রিয়েট, রিড অল, আপডেট ও আইডি দ্বারা ডিলিট করার ৪টি রুট অ্যাসিনক্রোনাস ট্রাই-ক্যাচ দিয়ে তৈরি করুন।",
      en: "Develop a complete production-ready Express/Mongoose CRUD server for a products inventory. Enforce schema validations (e.g., name is required, price is a positive number). Wrap all routes in asynchronous try-catch blocks with status codes.",
    },
    starterCode: `// Products CRUD API Server
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// ১. মঙ্গোডিবি সংযোগ

// ২. প্রোডাক্ট স্কিমা ও মডেল ডিফাইন করুন

// ৩. ক্রাড রাউটস ইমপ্লিমেন্ট করুন (POST, GET, PUT, DELETE)

`,
    solution: {
      code: `// Products CRUD API Server Solution
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ১. মঙ্গোডিবি সংযোগ
mongoose.connect('mongodb://localhost:27017/product_catalog_db')
  .then(() => console.log("Catalog Database connected!"))
  .catch(err => console.error("Database connection failed:", err));

// ২. প্রোডাক্ট স্কিমা ও মডেল
const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "প্রোডাক্টের নাম দিতেই হবে!"] },
  price: { 
    type: Number, 
    required: true, 
    min: [0, "দাম নেগেটিভ হতে পারে না!"] 
  },
  category: { type: String, default: "General" }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

// ৩. ক্রাড রাউটস
// CREATE (POST)
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL (GET)
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "সার্ভার ইন্টারনাল এরর!" });
  }
});

// UPDATE (PUT)
app.put('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({ error: "প্রোডাক্ট পাওয়া যায়নি!" });
    }
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE (DELETE)
app.delete('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "প্রোডাক্ট পাওয়া যায়নি!" });
    }
    res.json({ message: "প্রোডাক্ট সফলভাবে মুছে ফেলা হয়েছে।" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(\`Product Catalog Server listening on port \${PORT}\`);
});`,
      explanation: {
        bn: "অসাধারণ ব্যাকএন্ড ডেভেলপমেন্ট! মঙ্গুজ স্কিমা ভ্যালিডেশন (যেমন: min: 0 দাম চেকিং), এবং এক্সপ্রেসের ক্রাড এপিআই কোডের অ্যাসিনক্রোনাস ট্রাই-ক্যাচ হ্যান্ডলিং শতভাগ নিখুঁত হয়েছে।",
        en: "Flawless API development! Incorporating schema validators checks like positive price validations next to error catch blocks matches senior standards.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "মঙ্গুজের ডাটাবেজ কুয়েরি মেথড \`findByIdAndUpdate()\` এবং \`save()\` এর মধ্যে ওআরএম লেভেলে এবং লাইফসাইকেল হুকের ক্ষেত্রে মূল পার্থক্য কী?",
        en: "What are the structural differences between findByIdAndUpdate() and save() regarding schema validation and Mongoose lifecycle hooks?",
      },
      answer: {
        bn: "মঙ্গুজে \`findByIdAndUpdate()\` এবং \`save()\` এর মধ্যে গুরুত্বপূর্ণ ওআরএম এবং লাইফসাইকেল পার্থক্যসমূহ হলো:\n১. লাইফসাইকেল মিডলওয়্যার হুক (Lifecycle Hooks): \`save()\` মেথডটি রান করলে মঙ্গুজের 'pre-save' এবং 'post-save' ইভেন্ট হুকগুলো (যেমন পাসওয়ার্ড হ্যাকিং বা ডাটা ফিল্টারিং স্ক্রিপ্ট) ট্রিগার হয়। কিন্তু \`findByIdAndUpdate()\` সরাসরি ডাটাবেজে মডিফিকেশন কুয়েরি পাঠায়, যার ফলে 'pre-save' হুকগুলো ট্রিগার হয় না।\n২. ডিফল্ট ভ্যালিডেশন (Validation Checks): \`save()\` রান করলে স্কিমার সমস্ত ভ্যালিডেশন চেক ডিফল্টভাবে সক্রিয় থাকে। কিন্তু \`findByIdAndUpdate()\` রান করার সময় ভ্যালিডেশন বাইপাস হতে পারে যদি না আমরা স্পেসিফিকালি \`{ runValidators: true }\` পাস করি।\n৩. ব্যবহারের ক্ষেত্র: নতুন ডকুমেন্ট তৈরিতে বা কাস্টম প্রাক-সংরক্ষণ লজিক থাকলে \`save()\` সেরা চয়েস। দ্রুত ও পারফরম্যান্স-অপ্টিমাইজড আপডেটের জন্য \`findByIdAndUpdate()\` ব্যবহার করা উত্তম।",
        en: "Mongoose handles document updates differently depending on the method invoked:\n1. Middleware Hooks Trigger: Running `.save()` fires document middleware hooks like `pre('save')` and `post('save')` (useful for hashing passwords). In contrast, `.findByIdAndUpdate()` bypasses save hooks, executing updates directly in MongoDB.\n2. Validation Rules: `.save()` validates all schema constraints by default. `.findByIdAndUpdate()` bypasses schema rules unless you explicitly pass the option `{ runValidators: true }`.\n3. Performance and Memory: `.save()` requires fetching the document, keeping it in server memory, mutating the fields, and saving. `.findByIdAndUpdate()` executes a single database operation in a single round-trip, optimizing throughput.",
      },
    },
    {
      question: {
        bn: "মঙ্গুজ মিডলওয়্যার (Mongoose Middleware/Hooks) বলতে কী বোঝায় এবং এটি প্রোডাকশন সিকিউরিটিতে কীভাবে কাজ করে?",
        en: "What are Mongoose Middlewares (Hooks), and how are they used to secure production applications?",
      },
      answer: {
        bn: "মঙ্গুজ মিডলওয়্যার (যাকে প্রি এবং পোস্ট হুকও বলা হয়) হলো এমন কিছু ফাংশন যা ডেটাবেজ অপারেশনের আগে বা পরে স্বয়ংক্রিয়ভাবে নোড সার্ভারে রান হয়।\n১. 'pre' হুকস: কোনো অ্যাকশন ঘটার পূর্বে রান হয়। যেমন: ডেটাবেজে ইউজার পাসওয়ার্ড সেভ হওয়ার পূর্বে পাসওয়ার্ডটিকে ক্রিপ্টোগ্রাফিক অ্যালগরিদম (যেমন: bcrypt) দিয়ে হ্যাশ করে ফেলা। এর ফলে পাসওয়ার্ড ডাটাবেজে লিক হলেও নিরাপদ থাকে।\n২. 'post' হুকস: অ্যাকশন ঘটার পরে রান হয়। যেমন: নতুন ইউজার রেজিস্টার হওয়ার পর তাকে স্বয়ংক্রিয়ভাবে ইমেইল নোটিফিকেশন পাঠানো।\n৩. প্রোডাকশন সিকিউরিটি: এই হুকগুলোর সুবিধা হলো এপিআই কন্ট্রোলার কোডে বারবার সিকিউরিটি স্ক্রিপ্ট লিখতে হয় না। ডেটাবেজ মডেলেই সিকিউরিটি লজিক লকিং থাকার কারণে ব্যাকএন্ড শতভাগ সিকিউরড থাকে।",
        en: "Mongoose Middleware (pre/post hooks) allows developers to intercept database writes, reads, or updates to execute logic automatically:\n1. Pre Hooks: Triggered before database executions. The most common use case is encrypting passwords using hash engines (e.g. bcrypt) prior to storing them in MongoDB documents.\n2. Post Hooks: Triggered after database transactions complete. Useful for logging operations or sending user emails after account creation.\n3. Security Benefits: Centralizing encryption and validation checks within Mongoose models prevents developers from forgetting to hash credentials inside Express controllers, securing database layers.",
      },
    },
  ],
};
