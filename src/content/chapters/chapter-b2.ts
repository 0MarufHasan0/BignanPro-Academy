import { Chapter } from "@/types";

export const chapterB2Content: Chapter = {
  id: "chapter-b2",
  number: 40,
  title: {
    bn: "অধ্যায় বি২: মডার্ন অথেনটিকেশন ও বুকিং সিস্টেম ইন্টিগ্রেশন",
    en: "Chapter B2: Modern Auth & Booking System Integration",
  },
  description: {
    bn: "বেটার অথ (Better Auth), এক্সপ্রেস ও মঙ্গোডিবি ব্যবহার করে একটি সম্পূর্ণ নিরাপদ রুম/ইভেন্ট বুকিং সিস্টেম তৈরির ধাপে ধাপে গাইডলাইন।",
    en: "Learn to build a secure event/room booking system using Better Auth, Next.js JSX, MongoDB, and Node.js + Express.js.",
  },
  difficulty: "advanced",
  readingTime: 15,
  objectives: [
    {
      bn: "বেটার অথ (Better Auth) লাইব্রেরি ডিক্লেয়ার করে নোড/এক্সপ্রেস ব্যাকএন্ডে সেশন ভ্যালিডেশন সেটআপ করা।",
      en: "Configure Better Auth session validation handlers in Node.js & Express.js APIs.",
    },
    {
      bn: "মঙ্গোডিবি স্কিমা ডিজাইনে ইউজার আইডি এবং ইভেন্ট বুকিং কালেকশনের মধ্যে রিলেশনশিপ ম্যাপ করা।",
      en: "Design MongoDB schemas mapping relationships between User records and Event bookings.",
    },
    {
      bn: "এক্সপ্রেস সার্ভারে বুকিং ক্যাচ, চেক ও রিমুভ করার জন্য ফুল CRUD এন্ডপয়েন্ট তৈরি করা।",
      en: "Build full Express CRUD endpoints (POST, GET, DELETE) to schedule and cancel bookings.",
    },
    {
      bn: "রিয়্যাক্ট/নেক্সট জেএস ফ্রন্টএন্ডে বুকিং ফরম ও ইন্টারেক্টিভ শিডিউল লিস্ট ডিজাইন করা।",
      en: "Construct responsive booking forms and dynamic scheduling calendars in Next.js JSX.",
    },
  ],
  sections: [
    {
      id: "better-auth-intro",
      title: {
        bn: "১. মডার্ন অথেনটিকেশন ও বেটার অথ পরিচিতি (Introduction to Better Auth)",
        en: "1. Introduction to Better Auth & Modern Setup",
      },
      content: {
        bn: `## What is Better Auth? (বেটার অথ কী?)
আধুনিক ওয়েব ডেভেলপমেন্টে নেক্সট জেএস এবং এক্সপ্রেস ব্যাকএন্ডের জন্য অন্যতম গতিশীল, টাইপসেফ ও ডেভেলপার ফ্রেন্ডলি অথেনটিকেশন লাইব্রেরি হলো **Better Auth**। এটি মঙ্গোডিবির মতো ডাটাবেজ নোডগুলোর সাথে সহজে সিঙ্ক করে সেশন জেনারেট করতে পারে।

---

## Configuring Better Auth Adapter (ডাটাবেজ কানেকশন সেটআপ)
বেটার অথ সরাসরি ডাটাবেজে ইউজার সেশন ও অ্যাকাউন্টের রেকর্ড লেখার জন্য ডাটাবেজ অ্যাডাপ্টার ব্যবহার করে। নোড প্রজেক্টে একে কনফিগার করার স্ট্রাকচার:

\`\`\`javascript
const { betterAuth } = require("better-auth");
const { mongooseAdapter } = require("better-auth/adapters/mongoose");
const mongoose = require("mongoose");

const auth = betterAuth({
  database: mongooseAdapter(mongoose.connection),
  emailAndPassword: {
    enabled: true // ইমেল ও পাসওয়ার্ড লগইন সক্রিয় করা
  }
});
\`\`\`
*ক্লু: বেটার অথ ব্যবহার করলে সাইনআপ, লগইন ও টোকেন জেনারেশনের রাউটগুলো লাইব্রেরি নিজেই ব্যাকগ্রাউন্ডে হ্যান্ডেল করে। আমাদের কাস্টম সাইনআপ কোড লিখতে হয় না!*`,
        en: `## What is Better Auth?
**Better Auth** is a TypeScript-first, developer-friendly authentication framework built for Next.js ecosystems and Express.js backend services. It abstracts away session management, credentials hashing, and cookie rotations.

---

## Configuring Better Auth Adapter
Better Auth utilizes database adapters to write accounts and sessions records directly to your tables:

\`\`\`javascript
const { betterAuth } = require("better-auth");
const { mongooseAdapter } = require("better-auth/adapters/mongoose");
const mongoose = require("mongoose");

const auth = betterAuth({
  database: mongooseAdapter(mongoose.connection),
  emailAndPassword: {
    enabled: true // Enable Email/Password authentication
  }
});
\`\`\``,
      },
    },
    {
      id: "booking-schema",
      title: {
        bn: "২. বুকিং সিস্টেম ডেটাবেজ স্কিমা (Booking Database Schemas)",
        en: "2. Booking Database Schemas & MongoDB",
      },
      content: {
        bn: `## Schema Design for Bookings (বুকিং কালেকশন স্কিমা)
একটি সুরক্ষিত বুকিং সিস্টেমে বুকিং কালেকশনের সাথে ইউজার কালেকশনের সম্পর্ক (Relationship) স্থাপন করা বাধ্যতামূলক। এর মাধ্যমে জানা যায় কোন ইউজার কোন রুম বা সিট বুকিং করেছেন।

মঙ্গোডিবি ও মঙ্গুজে রিলেশনাল লিংক তৈরি করার পদ্ধতি:
*   **userId Reference**: বুকিং ডকুমেন্টে ইউজারের ইউনিক আইডি (\`Schema.Types.ObjectId\`) রেকর্ড রাখা হয়।
*   **Unique Slot Indexing**: একই তারিখ ও সময়ে ডাবল বুকিং (Overlap) রোধ করতে মঙ্গোডিবির ইউনিক ইনডেক্স ব্যবহার করা হয়।

\`\`\`javascript
const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // User কালেকশনের সাথে যুক্ত
    required: true
  },
  roomName: { type: String, required: true },
  bookingDate: { type: String, required: true }, // e.g., "2026-07-15"
  timeSlot: { type: String, required: true }    // e.g., "10:00 AM - 11:00 AM"
});
\`\`\``,
        en: `## Schema Design for Bookings
A robust reservation system requires mapping relational ties between user profiles and booking records.
*   **userId Reference**: Employs Mongoose ObjectID references (\`Schema.Types.ObjectId\`) to associate each booking with a registered owner.
*   **Unique Slot Constraints**: Uses compound indexing rules on date and time fields to prevent overlapping double-bookings.

\`\`\`javascript
const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Links to the User collection
    required: true
  },
  roomName: { type: String, required: true },
  bookingDate: { type: String, required: true }, // e.g., "2026-07-15"
  timeSlot: { type: String, required: true }    // e.g., "10:00 - 11:00"
});
\`\`\``,
      },
    },
    {
      id: "backend-booking-endpoints",
      title: {
        bn: "৩. এক্সপ্রেস বুকিং ক্রাড এপিআই (Express Booking CRUD Endpoint APIs)",
        en: "3. Express Booking CRUD Endpoint APIs",
      },
      content: {
        bn: `## Express Booking Endpoints (বুকিং এন্ডপয়েন্ট)
সার্ভার সাইডে এক্সপ্রেস রাউট ফাইল বুকিং তৈরি (POST), বুকিং হিস্টোরি রিড (GET) এবং বুকিং ক্যান্সেল (DELETE) করার অপশন অফার করে:

### ১. Create Booking (POST /api/bookings):
ইনপুট হিসেবে রুম ও স্লট নিয়ে চেক করে দেখে স্লটটি ফ্রী আছে কিনা, এরপর ডাটাবেজে সেভ করে।
### ২. Get My Bookings (GET /api/bookings/my):
লগইন করা ইউজারের নিজস্ব বুকিংগুলোর তালিকা ডাটাবেজ থেকে কুয়েরি করে পাঠায়।
### ৩. Delete Booking (DELETE /api/bookings/:id):
নির্দিষ্ট বুকিং রিমুভ করে। তবে এখানে অবশ্যই চেক করতে হবে বুকিংটি ডিলিট করার রিকোয়েস্ট বুকিংয়ের আসল মালিক পাঠাচ্ছেন কিনা!`,
        en: `## Express Booking Endpoints
Our Express backend exposes routes to schedule, view, and delete reservations:
1.  **POST /api/bookings**: Accepts scheduling inputs, checks seat availability, and persists booking documents.
2.  **GET /api/bookings/my**: Filters and fetches active bookings belonging strictly to the authenticated user's ID.
3.  **DELETE /api/bookings/:id**: Removes booking records, verifying first that the deleting client is the actual owner.`,
      },
    },
    {
      id: "frontend-booking-ui",
      title: {
        bn: "৪. ফ্রন্টএন্ড বুকিং ইন্টারফেস ও ডাইনামিক ইউআই (Next.js JSX Booking Viewport)",
        en: "4. Next.js JSX Booking Viewport & UI",
      },
      content: {
        bn: `## Next.js JSX Booking UI (ফ্রন্টএন্ড শিডিউলার)
ব্যবহারকারী যেন সহজে রুম ও টাইম স্লট বেছে নিতে পারেন, তার জন্য আমরা নেক্সট জেএস-এ একটি শিডিউলার ফর্ম এবং বুকড থাকা রুমগুলোর সুন্দর মেম্বারশিপ গ্রিড ডিজাইন করবো।

ইন্টারফেসের প্রধান অংশসমূহ:
*   **Select Form**: রুমের নাম ও টাইমের ড্রপডাউন ইনপুট।
*   **Dynamic Slots Grid**: বুক করা স্লটগুলোর রিয়্যাল-টাইম কালার স্টেট (যেমন: অ্যাভেলেবল হলে গ্রিন, বুকড হলে রেড)।
*   **State Updates**: বুকিং বাটনে চাপ দিলে সার্ভারে রিকোয়েস্ট যাবে এবং রেসপন্স এলেই ফ্রন্টএন্ডের স্টেট রি-লোডিং হয়ে বুকড লিস্টে নতুন স্লটটি যোগ হবে।`,
        en: `## Next.js JSX Booking UI
Learners need a responsive calendar form to book time slots and select rooms.

The booking viewport contains:
*   **Option Pickers**: Dropdown selections for rooms and hours slots.
*   **Dynamic Slots Grid**: Interactive indicators rendering green (available) or red (taken) based on database responses.
*   **React State Cycle**: Dispatches API requests on clicks, appending new bookings to lists upon success.`,
      },
    },
    {
      id: "auth-booking-integration",
      title: {
        bn: "৫. সেশন ও সিকিউর এপিআই ইন্টিগ্রেশন (Enforcing Security & Session Integration)",
        en: "5. Enforcing Security & Session Integration",
      },
      content: {
        bn: `## Enforcing Better Auth Security (অথেন্টিকেশন সংযোগ)
লগইন ছাড়া যেন কেউ বুকিং এপিআই রিকোয়েস্ট করতে না পারে, তার জন্য আমরা এক্সপ্রেস ব্যাকএন্ডে বেটার অথের সেশন মিডলওয়্যার কানেক্ট করি।

মিডলওয়্যার যেভাবে কাজ করে:
1.  ক্লায়েন্ট যখন এপিআই হিট করে, মিডলওয়্যার রিকোয়েস্টের কুকি বা হেডার থেকে সেশন টোকেন রিড করে।
2.  বেটার অথ লাইব্রেরি টোকেনটি ডিকোড করে ডাটাবেজের সাথে মিলিয়ে দেখে সেশনটি ভ্যালিড কিনা।
3.  ভ্যালিড হলে ইউজারের অবজেক্টটি \`req.user\` এ সেট করে দেয়, যার ফলে আমাদের বুকিং কন্ট্রোলার সহজেই ইউজারের আইডি (\`req.user.id\`) রিড করতে পারে।
4.  ইনভ্যালিড হলে কন্ট্রোলারের কাছে রিকোয়েস্ট না পাঠিয়ে সরাসরি \`401 Unauthorized\` এরর রেসপন্স পাঠিয়ে দেয়।`,
        en: `## Enforcing Better Auth Security
To protect booking API endpoints, we implement an Express validation middleware checking Better Auth sessions.

Data Flow Validation:
1.  **Interception**: Reads cookie tokens from headers.
2.  **Decryption**: Asks Better Auth to decrypt tokens and cross-reference active sessions.
3.  **Context Bind**: If valid, attaches user profiles to the request object ('req.user = session.user') for query lookups.
4.  **Rejection**: Returns a '401 Unauthorized' status if tokens are expired or invalid.`,
      },
      codeBlock: {
        fileName: "backend/bookingApp.js",
        language: "javascript",
        code: `// =========================================================
// ১. DATABASE SCHEMAS (models/Booking.js)
// =========================================================
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  roomName: { type: String, required: true },
  bookingDate: { type: String, required: true },
  timeSlot: { type: String, required: true }
});

// এক দিনে এক রুমে এক স্লট ডাবল বুকিং প্রতিরোধ করার ইউনিক ইনডেক্স
bookingSchema.index({ roomName: 1, bookingDate: 1, timeSlot: 1 }, { unique: true });

const Booking = mongoose.model('Booking', bookingSchema);

// =========================================================
// ২. AUTH MIDDLEWARE (middleware/auth.js)
// =========================================================
const { betterAuth } = require("better-auth");
const { mongooseAdapter } = require("better-auth/adapters/mongoose");

const auth = betterAuth({
  database: mongooseAdapter(mongoose.connection)
});

// এক্সপ্রেস ভ্যালিডেশন মিডলওয়্যার
async function requireAuth(req, res, next) {
  try {
    // হেডার কুকি থেকে সেশন চেক করা
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) {
      return res.status(401).json({ error: "অনুগ্রহ করে প্রথমে লগইন করুন!" });
    }
    
    // রিকোয়েস্ট অবজেক্টে ইউজার ডেটা সেট করা
    req.user = session.user;
    next();
  } catch (err) {
    res.status(500).json({ error: "অথেন্টিকেশন প্রসেস ব্যর্থ হয়েছে!" });
  }
}

// =========================================================
// ৩. EXPRESS ROUTER (routes/bookingRoutes.js)
// =========================================================
const express = require('express');
const router = express.Router();

// বুকিং তৈরি করার এন্ডপয়েন্ট (প্রটেক্টেড)
router.post('/api/bookings', requireAuth, async (req, res) => {
  try {
    const { roomName, bookingDate, timeSlot } = req.body;
    
    // নতুন বুকিং অবজেক্ট তৈরি (req.user.id থেকে ইউজার রেফারেন্স সেট)
    const newBooking = new Booking({
      userId: req.user.id,
      roomName,
      bookingDate,
      timeSlot
    });
    
    await newBooking.save();
    res.status(201).json({ message: "বুকিং সফলভাবে সম্পন্ন হয়েছে!", booking: newBooking });
  } catch (err) {
    // ডাবল বুকিং চেক বা ডুপ্লিকেট কি এরর ট্র্যাপ
    if (err.code === 11000) {
      return res.status(400).json({ error: "দুঃখিত, এই স্লটটি ইতিমধ্যে বুকড হয়ে গেছে!" });
    }
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;`,
        explanations: [
          {
            line: 16,
            text: {
              bn: "bookingSchema.index নিশ্চিত করে যে এক রুমে একই দিন ও একই সময়ে দ্বিতীয় কোনো বুকিং এন্ট্রি করা যাবে না। ডেটাবেজ লেভেলেই এটি ডুপ্লিকেট রিজেক্ট করে দেয়।",
              en: "Mongoose compound unique indexes reject duplicates if room, date, and slots parameters overlap.",
            },
          },
          {
            line: 33,
            text: {
              bn: "auth.api.getSession মেথডটি এক্সপ্রেস রিকোয়েস্ট হেডার রিড করে সেশন টোকেন ডিকোড ও ডাটাবেজের সাথে ভ্যালিডেশন চেক করে।",
              en: "The Better Auth API reads cookie tokens from incoming headers to authorize calls.",
            },
          },
          {
            line: 72,
            text: {
              bn: "err.code === 11000 হলো মঙ্গোডিবির ইউনিক ইনডেক্স ডুপ্লিকেট কী এরর। এর মাধ্যমে আমরা জানতে পারি স্লটটি অন্য কেউ বুক করে ফেলেছেন।",
              en: "Code 11000 catches database index violation errors, flagging overlapping slots reservations.",
            },
          },
        ],
      },
    },
    {
      id: "practice-booking-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও প্রজেক্ট ইমপ্লিমেন্টেশন অনুশীলনটি সম্পন্ন করুন। এটি আপনার ফুলস্ট্যাক অ্যাপ্লিকেশন আর্কিটেকচার ও সিকিউরিটি কনসেপ্টকে প্রফেশনাল স্তরে নিয়ে যাবে।`,
        en: `## Reflection & Lab Tasks
Solidify your Better Auth configurations before studying payment gateway integrations in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "বুকিং সিস্টেম ডিজাইন মূলত রিয়েল-টাইম ডাটা সিঙ্ক্রোনাইজেশন ও সেশন সুরক্ষার সমন্বয় ঘটিয়ে প্রডাকশন সলিউশন তৈরি করে।",
          en: "Booking modules bind asynchronous user actions with transaction boundaries, solving resource limits.",
        },
        whyWorks: {
          bn: "এটি মঙ্গোডিবি ইউনিক কম্পাউন্ড ইনডেক্স ব্যবহার করে মাল্টিপল বুকিং ট্রানজ্যাকশন ওভারল্যাপ হওয়া সম্পূর্ণ প্রতিরোধ করে।",
          en: "It leverages MongoDB unique compound indexing to resolve race conditions on database records.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা এপিআই রিকোয়েস্টে বুকিং আইডি বা প্যারামিটার ডিলিট করার সময় সর্বদা রিকোয়েস্ট ইউজারের আইডির সাথে ডাটাবেজের বুকিং ওনারের আইডি ম্যাচ করে দেখেন।",
          en: "Seniors match 'req.user.id' with the target booking owner ID on every delete query to prevent security bypasses.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় বুকিং ভুল হলো ডেটাবেজ লেভেলে ইউনিক ইনডেক্স ডিক্লেয়ার না করা। এর ফলে একই টাইমে একাধিক ইউজার একই রুম বুকিং করতে পারে এবং ডাবল-বুকিং বাগ তৈরি হয়।",
          en: "Omitting unique compound indexes, which leads to double-booking anomalies on concurrent traffic.",
        },
        debugging: {
          bn: "বুকিং ফেইল করলে এক্সপ্রেস এপিআই কনসোলের এরর অবজেক্টটি চেক করুন এবং মঙ্গোডিবি ইনডেক্স ঠিকভাবে তৈরি হয়েছে কিনা তা ডাটাবেজ প্যানেলে রি-চেক করুন।",
          en: "If reservations fail, check if Mongoose index creation triggered successfully on the collection schema startup.",
        },
        performance: {
          bn: "মেম্বার ড্যাশবোর্ডে গত হয়ে যাওয়া পুরনো বুকিং এন্ট্রি লোড না করে কুয়েরিতে সর্বদা বর্তমান তারিখের পরবর্তী বুকিং এন্ট্রি ফিল্টার করুন।",
          en: "Keep query sizes small by fetching only active/future bookings rather than historical reservation lists.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "book-sys-q1",
      question: {
        bn: "বুকিং সিস্টেমে ডাটাবেজ লেভেলে কম্পাউন্ড ইউনিক ইনডেক্স ( roomName, bookingDate, timeSlot ) কেন ব্যবহার করা হয়?",
        en: "Why do we deploy compound unique indexes on booking collection fields?",
      },
      options: [
        { bn: "সার্ভারের মেমোরি রিসেট করতে", en: "To reset server memory blocks" },
        { bn: "একই রুমে, একই দিন ও একই সময়ে দ্বিতীয় কোনো বুকিং এন্ট্রি প্রতিরোধ করতে (ডাবল বুকিং প্রতিরোধ)", en: "To prevent double-booking anomalies where two users reserve the same room at the same time" },
        { bn: "সিএসএস ক্লাস অপ্টিমাইজ করতে", en: "To optimize stylesheet layouts" },
        { bn: "ডাটাবেজের সমস্ত ইউজার অ্যাকাউন্ট ডিলিট করতে", en: "To delete all user database records" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ইউনিক কম্পাউন্ড ইনডেক্স একাধিক ফিল্ডের মানের সমন্বয়ে ডাটাবেজ লেভেলে ডুপ্লিকেট এন্ট্রি ব্লক করে।",
        en: "Compound indexing acts as a database guard blocking duplicated entries for rooms and slot schedules.",
      },
    },
    {
      id: "book-sys-q2",
      question: {
        bn: "Better Auth ব্যবহার করে এক্সপ্রেস ব্যাকএন্ডে সেশন ভ্যালিডেট করতে কোন মেথডটি সাহায্য করে?",
        en: "Which Better Auth method extracts active sessions from Express request headers?",
      },
      options: [
        { bn: "auth.api.getSession()", en: "auth.api.getSession()" },
        { bn: "auth.verifyToken()", en: "auth.verifyToken()" },
        { bn: "auth.loginUser()", en: "auth.loginUser()" },
        { bn: "auth.checkAuth()", en: "auth.checkAuth()" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "auth.api.getSession({ headers: req.headers }) মেথডটি এক্সপ্রেস রিকোয়েস্ট হেডার থেকে সরাসরি সেশন ডাটা ডিকোড করে দেয়।",
        en: "getSession decodes auth tokens from cookies and checks active DB sessions.",
      },
    },
    {
      id: "book-sys-q3",
      question: {
        bn: "বুকিং ডিলিট করার এপিআই এন্ডপয়েন্টে (DELETE /api/bookings/:id) কোন প্রফেশনাল সিকিউরিটি চেকটি করা আবশ্যক?",
        en: "What is the mandatory security verification step during booking deletions?",
      },
      options: [
        { bn: "সার্ভারের পোর্ট নাম্বার চেঞ্জ করা", en: "Swapping active server ports" },
        { bn: "বুকিং ডিলিট করতে চাওয়া ইউজারের আইডি এবং ডাটাবেজে বুকিংয়ের মালিকের আইডি ম্যাচ করে দেখা", en: "Verifying that the deleting user ID matches the booking owner ID stored in the database document" },
        { bn: "ডাটাবেজের সব কালেকশন ডিলিট করে দেওয়া", en: "Deleting all database collections instantly" },
        { bn: "সিএসএস এনিমেশন রিমুভ করা", en: "Stripping stylesheet animation layouts" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ওনারশিপ ভেরিফিকেশন না থাকলে যেকোনো ইউজার অন্যের এপিআই বুকিং আইডি ক্যাচ করে রিমুভ করে দিতে পারে যা সিকিউরিটি হোল তৈরি করে।",
        en: "Validating ownership secures API requests against unauthorized deletions.",
      },
    },
    {
      id: "book-sys-q4",
      question: {
        bn: "মঙ্গোডিবির ইউনিক ইনডেক্স ভায়োলেশন বা ডুপ্লিকেট কী এরর কোড কোনটি?",
        en: "Which database exception error code represents a duplicate key violation in MongoDB?",
      },
      options: [
        { bn: "404", en: "404" },
        { bn: "11000", en: "11000" },
        { bn: "500", en: "500" },
        { bn: "200", en: "200" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "মঙ্গোডিবির এরর কোড 11000 ট্রিগার হয় যখন কোনো ইনপুট ইউনিক ইনডেক্স রুল ভেঙে ডুপ্লিকেট করতে চায়।",
        en: "Code 11000 flags duplicate key index violations inside MongoDB databases.",
      },
    },
    {
      id: "book-sys-q5",
      question: {
        bn: "বুকিং কালেকশন ডকুমেন্টে ইউজারের আইডি রিলেশনশিপ ম্যাপ করার জন্য মঙ্গুজ স্কিমার টাইপ কোনটি?",
        en: "Which Mongoose Schema type is deployed to link booking documents with User ID references?",
      },
      options: [
        { bn: "mongoose.Schema.Types.String", en: "mongoose.Schema.Types.String" },
        { bn: "mongoose.Schema.Types.ObjectId", en: "mongoose.Schema.Types.ObjectId" },
        { bn: "mongoose.Schema.Types.Number", en: "mongoose.Schema.Types.Number" },
        { bn: "mongoose.Schema.Types.Boolean", en: "mongoose.Schema.Types.Boolean" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ObjectId ব্যবহার করে আমরা অন্য কালেকশনের ডকুমেন্টের রেফারেন্স সেভ করে রিলেশনশিপ কানেক্ট করি।",
        en: "ObjectId type permits storing dynamic document links referencing other MongoDB tables.",
      },
    },
  ],
  practice: [
    {
      bn: "১. বুকিং ডাটাবেজে কনকারেন্সি বা একসাথে একাধিক ইউজার একই স্লট সাবমিট করলে কীভাবে ডাটাবেজ ইউনিক ইনডেক্স তা সলভ করে?",
      en: "1. Explain how MongoDB resolves database race conditions during concurrent bookings requests.",
    },
    {
      bn: "২. কেন বেটার অথের কুকি সেশন মেকানিজম লোকালস্টোরেজ টোকেন স্টোর করার চেয়ে বেশি সিকিউর?",
      en: "2. Contrast cookie-based session verification with manual localStorage token transmissions.",
    },
    {
      bn: "৩. এক্সপ্রেস বুকিং কন্ট্রোলারে try-catch ব্লকের ভেতর ইউনিক কোড 11000 ক্যাচ করার গুরুত্ব কী?",
      en: "3. Outline the validation importance of trapping error code 11000 inside controllers.",
    },
  ],
  assignment: {
    title: {
      bn: "মডার্ন বুকিং ক্রিয়েশন ও সেশন প্রটেক্টেড গেটওয়ে",
      en: "Secure Mongoose Booking Engine with Better Auth Security",
    },
    description: {
      bn: "এক্সপ্রেস ও মঙ্গুজ ব্যবহার করে একটি প্রটেক্টেড বুকিং এপিআই রাউট তৈরি করুন। রাউটটি Better Auth-এর সাহায্যে লগইন চেক করবে। রিকোয়েস্ট বডি থেকে রুমের নাম, তারিখ ও টাইম স্লট নিয়ে নতুন বুকিং তৈরি করার আগে চেক করে দেখবে স্লটটি আগে বুক করা কিনা। স্লট খালি থাকলে বুকিং সেভ করে সাকসেস মেসেজ ও বুকিং আইডি রিটার্ন করবে।",
      en: "Write an Express post router (`/api/bookings`) wrapped inside a Better Auth requireAuth validation middleware. Extract room, date, and slots variables. Prevent overlapping reservations by returning Mongoose index violation warnings if code 11000 trips. Otherwise, save the booking linked with the user reference and return success headers.",
    },
    starterCode: `// Secure Mongoose Booking Engine
const express = require('express');
const router = express.Router();
const Booking = require('./models/Booking');

// requireAuth মিডলওয়্যার এবং বুকিং ক্রিয়েশন কোড ইমপ্লিমেন্ট করুন
`,
    solution: {
      code: `// Secure Mongoose Booking Engine Solution
const express = require('express');
const router = express.Router();
const Booking = require('./models/Booking');

// ১. Better Auth initialized instance
const { betterAuth } = require("better-auth");
const auth = betterAuth({ /* Database configurations */ });

// ২. requireAuth middleware
async function requireAuth(req, res, next) {
  const session = await auth.api.getSession({ headers: req.headers });
  if (!session) {
    return res.status(401).json({ error: "Unauthorized access!" });
  }
  req.user = session.user;
  next();
}

// ৩. POST Booking route
router.post('/api/bookings', requireAuth, async (req, res) => {
  const { roomName, bookingDate, timeSlot } = req.body;

  if (!roomName || !bookingDate || !timeSlot) {
    return res.status(400).json({ error: "Missing required variables!" });
  }

  try {
    const booking = new Booking({
      userId: req.user.id,
      roomName,
      bookingDate,
      timeSlot
    });

    await booking.save();
    res.status(201).json({ message: "Booking confirmed!", booking });
  } catch (err) {
    // Catch Mongoose unique constraint error code 11000
    if (err.code === 11000) {
      return res.status(400).json({ error: "Slot already booked!" });
    }
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;`,
      explanation: {
        bn: "চমৎকার বুকিং ইঞ্জিন সলিউশন! বেটার অথের requireAuth ভ্যালিডেশন এবং মঙ্গুজের কম্পাউন্ড ইউনিক ইনডেক্স ডুপ্লিকেট ক্যাচিং শতভাগ নিরাপদ ও প্রফেশনাল হয়েছে।",
        en: "Flawless booking scheduler! Combining requireAuth filters with MongoDB index validations handles production-grade reservations securely.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "একটি হাই-ট্রাফিক বুকিং সিস্টেমে ডাটাবেজ স্তরে রেস কন্ডিশন (Race Condition - যেমন একই স্লট একসাথে দুজন বুক করতে চাওয়া) প্রতিরোধ করার জন্য আমরা কী কী কৌশল অবলম্বন করতে পারি?",
        en: "Detail strategies to prevent database race conditions (e.g. concurrent reservations on the same slot) in high-traffic booking platforms.",
      },
      answer: {
        bn: "হাই-ট্রাফিক অ্যাপ্লিকেশনে বুকিং ওভারল্যাপ বা রেস কন্ডিশন প্রতিরোধ করার ৩টি মূল প্রফেশনাল কৌশল:\n১. unique compound index (মঙ্গোডিবি লেভেলে): সবচেয়ে সহজ ও কার্যকর সমাধান হলো ডাটাবেজ লেভেলে নির্দিষ্ট স্লট ফিল্ডগুলোর ওপর ইউনিক ইনডেক্স ম্যাপ করে রাখা। মাল্টিপল রিকোয়েস্টের মধ্যে যেটি মিলি সেকেন্ডের ব্যবধানে আগে ডাটাবেজে হিট করবে, সেটি সেভ হবে। অন্য রিকোয়েস্টকে ডাটাবেজ ডুপ্লিকেট এরর কোড (11000) রিটার্ন করে আটকে দেবে।\n২. Optimistic Lock (সংস্করণ যাচাই): ডকুমেন্টের সাথে একটি \`__v\` সংস্করণ বা ভার্সন যুক্ত থাকে। বুকিং করার সময় ভার্সন মিলিয়ে চেক করা হয়। অন্য কেউ ইতিমধ্যে আপডেট করে ফেললে ভার্সন অমিল হয়ে আপডেট ব্যর্থ হয় (Mongoose-এ এটি \`optimisticConcurrency\` দিয়ে সচল করা যায়)।\n৩. Pessimistic Lock (ট্রানজ্যাকশন লক): ডাটাবেজ রিড করার সময় নির্দিষ্ট রেকর্ডকে লক করে দেওয়া হয় যেন অন্য কোনো থ্রেড বা কুয়েরি তা রিড/রাইট করতে না পারে যতক্ষণ না পূর্বের রাইট ট্রানজ্যাকশন সম্পন্ন হচ্ছে। এটি প্রডাকশনে ডাটা সিঙ্ক শতভাগ নিশ্চিত করে।",
        en: "Trapping database conflicts under heavy concurrent load relies on three core design strategies:\n1. Unique Compound Indexing: Declaring unique multi-key constraints (e.g. room, date, hour slot) on MongoDB collections. The database handles requests atomically; the write transaction arriving first locks the key, forcing subsequent concurrent updates to fail with index errors (code 11000).\n2. Optimistic Concurrency Control (OCC): Leverages version checking flags (like Mongoose's '__v'). During updates, it checks if another query mutated the document version since it was loaded. If true, the update rejects, preventing stale overwrites.\n3. Pessimistic Locking: Explicitly locking the target database row during reads. This prevents any other query threads from writing to the locked slot until the active reservation transaction completes successfully."
      },
    },
    {
      question: {
        bn: "বেটার অথ (Better Auth)-এর সেশন প্রটেকশন মেকানিজম কীভাবে কাস্টম এক্সপ্রেস মিডলওয়্যারের সাথে কানেক্ট হয় এবং নিরাপত্তা নিশ্চিত করে?",
        en: "Explain how Better Auth's session validation checks sync with custom Express middlewares to enforce secure API authorization gateways.",
      },
      answer: {
        bn: "বেটার অথের সেশন প্রটেকশন এক্সপ্রেস মিডলওয়্যারে ৩টি সিকিউর ধাপে সিঙ্ক হয়ে থাকে:\n১. টোকেন ডিক্রিপশন ও রিড: যখন কোনো ক্লায়েন্ট এপিআই রিকোয়েস্ট পাঠায়, এক্সপ্রেসের \`requireAuth\` মিডলওয়্যার রিকোয়েস্টের হেডার কুকি রিড করে এবং বেটার অথের সেশন এপিআই মেথড \`auth.api.getSession({ headers: req.headers })\` এ পাস করে।\n২. ডাটাবেজ ভ্যালিডেশন চেক: বেটার অথ সেশন কুকির সিগনেচার ডিক্রিপ্ট করে ডাটাবেজের ইউজার সেশন কালেকশনে ম্যাচ করে দেখে টোকেনটি ভ্যালিড এবং এর মেয়াদ সক্রিয় আছে কিনা।\n৩. এক্সপ্রেস রিকোয়েস্ট বাইন্ডিং (Request Binding): সেশন ভ্যালিড হলে মিডলওয়্যার ইউজারের প্রোফাইল রেকর্ডটি এক্সপ্রেসের লোকাল রিকোয়েস্ট অবজেক্টে (\`req.user = session.user\`) বাইন্ড করে দেয় এবং \`next()\` কল করে পরবর্তী বুকিং রাউটার কন্ট্রোলারে পাস করে। সেশন ইনভ্যালিড হলে কন্ট্রোলারে না পাঠিয়ে সরাসরি \`401 Unauthorized\` ফেরত পাঠায়। এর ফলে আমাদের কোনো কাস্টম ক্রিপ্টোগ্রাফি কোড লিখতে হয় না।",
        en: "Better Auth secures Express API layers through a structured session-checking middleware workflow:\n1. Header Extraction: The custom Express middleware captures the request context, forwarding headers and cookies to the Auth SDK handler.\n2. Token Verification: The library inspects the cookie claim, decrypts the session payload, and verifies the session token against MongoDB session collections to ensure it has not expired or been revoked.\n3. Request Context Binding: Upon successful validation, the middleware binds the profile parameters directly to the request object ('req.user = session.user'), and calls 'next()' to proceed to controller logic. Mismatched or missing sessions are blocked instantly, returning a '401 Unauthorized' JSON status."
      },
    },
  ],
};
