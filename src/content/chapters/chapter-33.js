export const chapter33Content = {
  id: "chapter-33",
  number: 33,
  title: {
    bn: "অধ্যায় ৩৩: মঙ্গোডিবি ও ডেটাবেজ পরিচিতি — ডেটা স্টোরেজ ও নোএসকিউএল এর প্রাথমিক পাঠ",
    en: "Chapter 33: MongoDB & Database Basics (Data Storage Fundamentals)",
  },
  description: {
    bn: "ডেটাবেজ কী ও এর প্রয়োজনীয়তা, নোএসকিউএল (NoSQL) ও মঙ্গোডিবি কালেকশন ও ডকুমেন্ট কাঠামো এবং ক্লায়েন্ট-সার্ভার ডেটা ফ্লোর বিবরণ।",
    en: "Explore database persistence, NoSQL structures, MongoDB collections and documents models, and client-server backend data flows.",
  },
  difficulty: "beginner",
  readingTime: 12,
  objectives: [
    {
      bn: "ডেটাবেজের প্রয়োজনীয়তা এবং ডেটা স্থায়ীভাবে সংরক্ষণের গুরুত্ব অনুধাবন করা।",
      en: "Understand why databases are essential and the importance of permanent data persistence.",
    },
    {
      bn: "মঙ্গোডিবি (MongoDB) কী এবং এটি রিলেশনাল ডেটাবেজ থেকে কীভাবে আলাদা তা জানা।",
      en: "Learn what MongoDB is and how it differs from traditional relational databases.",
    },
    {
      bn: "কালেকশন (Collection) এবং ডকুমেন্ট (Document) এর মডিউলার কাঠামো ব্যাখ্যা করা।",
      en: "Explain the modular structure of NoSQL Collections and Documents.",
    },
    {
      bn: "ফ্রন্টএন্ড, এপিআই, ব্যাকএন্ড এবং ডেটাবেজের মধ্যকার সম্পূর্ণ তথ্যপ্রবাহের চক্র বিশ্লেষণ করা।",
      en: "Trace the complete data cycle from Frontend, through APIs and Backends, to Databases.",
    },
  ],
  sections: [
    {
      id: "intro-database",
      title: {
        bn: "১. ডেটাবেজ পরিচিতি ও এর প্রয়োজনীয়তা (What is Database & Why is it Needed)",
        en: "1. What is a Database & Why is it Needed",
      },
      content: {
        bn: `## What is a Database? (ডেটাবেজ কী?)
একটি অ্যাপ্লিকেশন পরিচালনার জন্য আমাদের প্রচুর ডেটা স্টোর করতে হয়। 

**Database (ডেটাবেজ)** হলো তথ্য বা ডেটা স্থায়ীভাবে সংরক্ষণ, সহজে সাজানো এবং দ্রুত অনুসন্ধান করার জন্য একটি সুবিন্যস্ত ডিজিটাল গুদাম ঘর বা ব্যবস্থা।
*   **বাস্তব উদাহরণ**: 
    - **ইউজার প্রোফাইল**: নাম, পাসওয়ার্ড ও প্রোফাইল ছবি।
    - **ই-কমার্স প্রোডাক্ট**: নাম, ছবি, দাম ও স্টক সংখ্যা।
    - **সোশ্যাল পোস্ট**: লেখা, লাইক সংখ্যা ও কমেন্টস লিস্ট।

---

## Why Database is Needed (ডেটাবেজের প্রয়োজনীয়তা)
আমরা পূর্ববর্তী চ্যাপ্টারগুলোতে এক্সপ্রেস সার্ভারে একটি লোকাল অ্যারে ব্যবহার করে সাময়িকভাবে ডেটা স্টোর করেছিলাম। কিন্তু বাস্তব ক্ষেত্রে এটি অসম্ভব কারণ:
১.  **Data Loss (ডেটা হারিয়ে যাওয়া)**: সার্ভার একবার রিস্টার্ট নিলে বা কোড ক্র্যাশ করলেই মেমরিতে থাকা সব ডেটা চিরতরে মুছে যায়।
২.  **Limited Memory (সীমিত মেমরি)**: কম্পিউটারের র‍্যাম (RAM) সীমিত। লাখ লাখ ইউজারের ডাটা র‍্যামে ধরে রাখলে কম্পিউটার সম্পূর্ণ হ্যাং বা ডাউন হয়ে যাবে।
৩.  **No Persistence**: ডেটাবেজ ছাড়া ইউজারের অ্যাকাউন্ট তৈরি বা রিয়েল-লাইফ কোনো ফিচার স্থায়ী করা সম্ভব নয়।`,
        en: `## What is a Database?
Applications process massive volumes of information. 

A **Database** is a dedicated system configured to store, retrieve, update, and organize datasets permanently.
*   **Typical Datasets**:
    - **User Records**: Login emails, hashed credentials, and avatars.
    - **Product Inventories**: Prices, description blocks, and stock tallies.
    - **Social Feeds**: Post messages, timestamps, and comments arrays.

---

## Why Database is Needed
Previously, we stored API mock data in Express variables. This is impossible in production due to three constraints:
1.  **Volatility**: If the server restarts or crashes, all data stored in RAM is wiped out instantly.
2.  **RAM Exhaustion**: System memory (RAM) is scarce. Storing millions of user profiles in program variables degrades hardware.
3.  **Persistence Failure**: Without database engine files, web operations like user sign-ups cannot persist beyond single page refreshes.`,
      },
    },
    {
      id: "what-is-mongodb",
      title: {
        bn: "২. মঙ্গোডিবি পরিচিতি ও জনপ্রিয়তার কারণ (What is MongoDB & Why is it Popular)",
        en: "2. What is MongoDB & Why is it Popular",
      },
      content: {
        bn: `## What is MongoDB? (মঙ্গোডিবি কী?)
**MongoDB** হলো একটি আধুনিক, ডকুমেন্ট-ভিত্তিক এবং বিশ্বের সবচেয়ে জনপ্রিয় **NoSQL** ডেটাবেজ। এটি ট্র্যাডিশনাল রিলেশনাল ডেটাবেজের (যেমন: MySQL বা SQL Server) মতো সারি-কলাম বিশিষ্ট শক্ত টেবিল ব্যবহার না করে মুক্ত নোএসকিউএল মেকানিজম মেনে চলে।

মঙ্গোডিবি ডেটা সংরক্ষণ করতে জাভাস্ক্রিপ্ট অবজেক্টের মতো দেখতে **JSON-like** ফরম্যাট ব্যবহার করে (যাকে টেকনিক্যালি **BSON** বা Binary JSON বলা হয়)।

---

## Why MongoDB is Popular (জনপ্রিয়তার কারণ)
১.  **Flexible Schema (নমনীয় কাঠামো)**: রিলেশনাল ডেটাবেজের মতো মঙ্গোডিবিতে টেবিলের কলাম আগে থেকে ফিক্সড করতে হয় না। আপনি চাইলে যেকোনো ডকুমেন্টে নতুন ফিল্ড খুব সহজেই যুক্ত করতে পারেন।
২.  **JSON Format (সহজ বিন্যাস)**: জাভাস্ক্রিপ্ট অবজেক্টের সাথে এর সিনট্যাক্স মিলে যাওয়ায় ফ্রন্টএন্ড ডেভেলপারদের জন্য এর তথ্য রিড বা রাইট করা খুবই সহজ।
৩.  **High Scalability (উচ্চ স্কেলাবিলিটি)**: প্রচুর পরিমাণ ডেটা নিয়ে কাজ করার জন্য মঙ্গোডিবি অত্যন্ত দ্রুত কাজ করে এবং অনুভূমিকভাবে (Horizontal) এর সাইজ বাড়ানো বা স্কেল করা যায়।`,
        en: `## What is MongoDB?
**MongoDB** is a document-oriented NoSQL database. Instead of organizing datasets in rigid tables (rows and columns) like SQL databases (MySQL, PostgreSQL), MongoDB stores records dynamically.

Data is formatted in JSON-like structures called **BSON** (Binary JSON), matching the data structures JavaScript programmers write daily.

---

## Why MongoDB is Popular
1.  **Flexible Schema**: You do not have to define strict tables layout fields in advance. A document can have dynamic fields added on the fly.
2.  **Developer Friendly**: Because documents match JavaScript objects, full-stack engineers do not have to translate between SQL queries and JSON objects.
3.  **Scalability**: MongoDB scales horizontally (sharding), allowing systems to distribute massive database queries across clusters of servers.`,
      },
    },
    {
      id: "collections-documents",
      title: {
        bn: "৩. কালেকশনস ও ডকুমেন্টস এর ধারণা (Collections & Documents)",
        en: "3. Collections & Documents",
      },
      content: {
        bn: `## Collections & Documents (কালেকশন ও ডকুমেন্ট)
রিলেশনাল ডেটাবেজের টেবিল ও সারিকে মঙ্গোডিবিতে ভিন্ন নামে ডাকা হয়:

*   **Document (ডকুমেন্ট)**: এটি হলো মঙ্গোডিবির একক ডেটা এন্ট্রি, যা রিলেশনাল ডেটাবেজের একটি রো (Row) বা সারির সমতুল্য। এটি দেখতে একটি পিওর JSON অবজেক্টের মতো।
*   **Collection (কালেকশন)**: এটি হলো অনেকগুলো ডকুমেন্টের সমাহার, যা রিলেশনাল ডেটাবেজের একটি টেবিল (Table)-এর সমতুল্য। একটি কালেকশনের ভেতর শত শত ডকুমেন্ট থাকতে পারে।

---

## Metaphorical Mapping (কাঠামো তুলনা):
| SQL (রিলেশনাল) | MongoDB (নোএসকিউএল) | বাস্তব উদাহরণ |
| :--- | :--- | :--- |
| **Table** | **Collection** | \`users\` (ইউজারদের তালিকা) |
| **Row** | **Document** | একটি নির্দিষ্ট ইউজারের তথ্য |
| **Column** | **Field** | \`name\` বা \`email\` কী |

---

## JSON Document Example (ডকুমেন্টের উদাহরণ):
\`\`\`json
{
  "_id": "60c72b2f9b1d8b2bad000001",
  "name": "Maruf Hasan",
  "age": 20,
  "skills": ["JavaScript", "React"]
}
\`\`\`
*ক্লু: \`_id\` হলো মঙ্গোডিবির স্বয়ংক্রিয়ভাবে তৈরি করা ইউনিক প্রাইমারি চাবি যা প্রতিটি ডকুমেন্টকে আলাদা করে চিহ্নিত করে।*`,
        en: `## Collections & Documents
NoSQL concepts map to SQL layouts under different terminologies:
*   **Document**: The single unit of data storage in MongoDB, represented as a JSON/BSON object (equivalent to a SQL Row).
*   **Collection**: A structural grouping of multiple documents (equivalent to a SQL Table).

---

## Metaphorical Mapping:
| SQL Relational | MongoDB NoSQL | Real Concept |
| :--- | :--- | :--- |
| **Table** | **Collection** | \`users\` (A list of user records) |
| **Row** | **Document** | Single user object |
| **Column** | **Field** | \`name\`, \`email\` keys |

---

## JSON Document Example:
\`\`\`json
{
  "_id": "60c72b2f9b1d8b2bad000001",
  "name": "Maruf Hasan",
  "age": 20,
  "skills": ["JavaScript", "React"]
}
\`\`\`
*Note: \`_id\` is a unique primary key generated automatically by MongoDB to identify every document.*`,
      },
    },
    {
      id: "backend-database-flow",
      title: {
        bn: "৪. ব্যাকএন্ড ও ডেটাবেজের তথ্যপ্রবাহ (Backend & Database Data Flow)",
        en: "4. Backend & Database Data Flow",
      },
      content: {
        bn: `## Complete Fullstack Data Flow (পূর্ণাঙ্গ তথ্যপ্রবাহ)
ল্যান্ডিং পেজ লোড হওয়া থেকে শুরু করে ডাটাবেজ থেকে তথ্য এসে স্ক্রিনে রেন্ডার হওয়া পর্যন্ত ৫টি ধাপে ডেটা ফ্লো প্রবাহিত হয়:

1.  **Request Input (অনুরোধ)**: ব্যবহারকারী ব্রাউজার (Frontend)-এ 'কোর্সেস' বাটনে ক্লিক করেন। ফ্রন্টএন্ড এপিআই গেটওয়েতে একটি গেট রিকোয়েস্ট পাঠায়।
2.  **API Bridge (সেতু)**: এপিআই রিকোয়েস্ট নেটওয়ার্কের মাধ্যমে ব্যাকএন্ড সার্ভারে পৌঁছায়।
3.  **Database Query (কোয়েরি)**: ব্যাকএন্ড এক্সপ্রেস সার্ভার রিকোয়েস্টটি পড়ে সরাসরি ডেটাবেজ মঙ্গোডিবি ড্রাইভারের মাধ্যমে বলে: *"আমাকে কোর্স কালেকশনের সব ডাটা দাও।"*
4.  **Fetch & Return (রিটার্ন)**: মঙ্গোডিবি সার্ভার তার ডিস্ক থেকে ডেটা ফাইল রিড করে এক্সপ্রেস সার্ভারের কাছে JSON আকারে রিটার্ন করে।
5.  **JSON Response**: ব্যাকএন্ড ডাটাটি গুছিয়ে ফ্রন্টএন্ড ব্রাউজারে পাঠায় এবং রিঅ্যাক্ট চমৎকার কার্ড আকারে ডেটাটি স্ক্রিনে সাজিয়ে দেখায়।

---

## Visual Data Flow Sequence (তথ্যপ্রবাহের ভিজ্যুয়াল সিকোয়েন্স)
\`\`\`
Frontend  ─── 1. Request (API) ───>  Backend (Express)
                                            │
                                    2. Database Query
                                            ▼
Frontend  <─── 4. JSON Response ───  Backend (Express)
                                            ▲
                                    3. Data Return (JSON)
                                            │
                                     Database (MongoDB)
\`\`\``,
        en: `## Complete Fullstack Data Flow
Data flows through a structured 5-step loop to render a dynamic page:
1.  **Trigger (Frontend)**: A user clicks a link, initiating a browser Fetch query.
2.  **API Bridge**: The endpoint carries parameters across HTTP channels to the backend server.
3.  **Database Query**: The Express controller reads request metrics and invokes DB drivers: *"Find all items inside products collection."*
4.  **Retrieve (MongoDB)**: The DB engine parses collection indices, compiles matching documents, and returns them as a JSON-like list.
5.  **Render (Frontend)**: The backend sends an HTTP response, and React maps the JSON list into interactive card grids.

---

## Visual Data Flow Sequence
\`\`\`
Frontend  ─── 1. Request (API) ───>  Backend (Express)
                                            │
                                    2. Database Query
                                            ▼
Frontend  <─── 4. JSON Response ───  Backend (Express)
                                            ▲
                                    3. Data Return (JSON)
                                            │
                                     Database (MongoDB)
\`\`\``,
      },
    },
    {
      id: "mistakes-analogy",
      title: {
        bn: "৫. সাধারণ ভুল ও লাইব্রেরির রূপক (Common Mistakes & Library Analogy)",
        en: "5. Common Mistakes & Library Analogy",
      },
      content: {
        bn: `## Common Mistakes (সাধারণ ভুলসমূহ)
*   **সার্ভার কোডে ফাইল সেভ করা**: নতুনদের ধারণা, ইউজার ছবি বা ডাটা সরাসরি ব্যাকএন্ড নোড জেএস ফাইলের ফোল্ডারে টেক্সট ফাইল আকারে লিখে রাখাই ব্যাকএন্ড ডেটা স্টোরেজ। এটি অত্যন্ত ভুল প্র্যাকটিস। ছবি স্টোরেজ সার্ভারে (যেমন AWS S3) এবং ডাটা ডেটাবেজে সেভ করতে হবে।
*   **কালেকশন ও ডকুমেন্টের গোলমাল**: অনেক সময় ডকুমেন্টের ফিল্ড ডাটা সরাসরি কালেকশন লেভেলে সার্চ করার চেষ্টা করা হয়। কালেকশন হলো কেবল পাত্র, আর ডকুমেন্ট হলো কন্টেন্ট।
*   **SQL বনাম NoSQL এর এরর**: রিলেশনাল ডেটাবেজের মতো মঙ্গোডিবিতে 'Join Table' তৈরি করার চেষ্টা করা। নোএসকিউএল সিস্টেমে আমরা ডাটা ডিরেক্ট এম্বেড (nested JSON) করে ডিজাইন করি।

---

## The Library Metaphor (লাইব্রেরির রূপক)
ব্যাকএন্ড ও ডেটাবেজ সিস্টেমকে একটি বিশাল পাবলিক লাইব্রেরির সাথে মিলিয়ে নিন:
*   **লাইব্রেরি ভবন (The Database)**: পুরো লাইব্রেরি যেখানে সমস্ত বই নিরাপদ আলমারিতে সাজানো থাকে (আমাদের মঙ্গোডিবি)।
*   **বইয়ের সেলফ (The Collection)**: লাইব্রেরির একেকটি আলাদা বুকশেলফ বা তাক। যেমন 'ইতিহাস সেলফ' বা 'বিজ্ঞান সেলফ' (আমাদের \`users\` কালেকশন বা \`products\` কালেকশন)।
*   **বই (The Document)**: সেলফে থাকা প্রতিটি সুনির্দিষ্ট বই (আমাদের Document)। বই খুললে যেমন নাম, পৃষ্ঠা ও লেখক দেখা যায়, ডকুমেন্টে ঠিক তেমনই ফিল্ড ও ভ্যালু থাকে।
*   **লাইব্রেরিয়ান (The Backend)**: আপনি টেবিলে বসে নিজে সেলফে যেতে পারবেন না (ইউজার সরাসরি ডাটাবেজ এক্সেস করতে পারে না)। আপনি লাইব্রেরিয়ানকে বলবেন (Request), লাইব্রেরিয়ান বই এনে আপনার টেবিলে দেবে (Response)।`,
        en: `## Common Mistakes
*   **Storing data inside server memory**: Saving user profiles in a local \`.txt\` file inside Express folders. When you scale, server folders wipe or re-create dynamically. Data belongs in database engines.
*   **Collection vs. Document confusion**: Thinking collections hold data directly. The collection is just a box; documents inside the collection hold the fields.
*   **SQL-izing NoSQL**: Attempting to force strict foreign key relationships in MongoDB. In NoSQL, nested arrays or embedded JSON document structures are preferred.

---

## The Library Metaphor
*   **Library Building (The Database)**: The physical architecture storing all catalogs securely (MongoDB).
*   **Bookshelves (The Collection)**: The individual classified shelving blocks. The "History Shelf" holds history books (our \`users\` collection).
*   **Single Book (The Document)**: A specific book residing on a shelf, detailing attributes (title, index, pages) in text fields.
*   **Librarian (The Backend)**: The gateway coordinator. You do not search shelves directly. The librarian takes your request (API query), finds the book, and hands it to you.`,
      },
      codeBlock: {
        fileName: "userSchema.json",
        language: "json",
        code: `{
  "_comment": "১. মঙ্গোডিবির ইউজার ডকুমেন্ট কাঠামোর স্ট্যান্ডার্ড নমুনা",
  "user_profile": {
    "_id": "60c72b2f9b1d8b2bad000001",
    "name": "Tanvir Rahman",
    "email": "tanvir@bignanpro.com",
    "is_premium": true,
    "enrolled_courses": [
      {
        "course_id": "course-react-101",
        "progress_percent": 85,
        "completed_at": null
      },
      {
        "course_id": "course-nextjs-201",
        "progress_percent": 100,
        "completed_at": "2026-07-03T15:30:00Z"
      }
    ],
    "settings": {
      "theme": "dark",
      "notifications_enabled": true
    }
  }
}`,
        explanations: [
          {
            line: 4,
            text: {
              bn: "_id হলো মঙ্গোডিবির প্রতিটি ডকুমেন্টের জন্য জেনারেট করা ইউনিক অবজেক্ট আইডি।",
              en: "The Object ID provides a unique primary index, letting servers fetch records with O(1) complexity.",
            },
          },
          {
            line: 8,
            text: {
              bn: "enrolled_courses হলো একটি নেস্টেড অ্যারে অবজেক্ট, যা রিলেশনাল ডেটাবেজের মতো আলাদা টেবিল তৈরি না করে এক ফাইলেই রিলেশন দেখায়।",
              en: "Using dynamic nested arrays avoids heavy relational SQL joins, optimizing fetch latency.",
            },
          },
          {
            line: 21,
            text: {
              bn: "settings হলো একটি এমবেডেড অবজেক্ট যা ইউজারের প্রোফাইল পছন্দ এক জায়গায় স্টোর করে।",
              en: "Embedded document settings showcase NoSQL schema flexibility, holding nested configs without altering tables.",
            },
          },
        ],
      },
    },
    {
      id: "practice-database-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অ্যাসাইনমেন্টগুলো সম্পন্ন করুন। এটি আপনার ফুলস্ট্যাক ডেটাবেজ থিংকিং মজবুত করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your NoSQL data schemas architectures before configuring MongoDB Express server drivers in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "ডেটাবেজ মূলত অ্যাপ্লিকেশনের সেশন এবং কনফিগারেশন ডাটা চিরতরে ধরে রাখার বিশ্বস্ত ব্যাকবোন হিসেবে কাজ করে।",
          en: "Databases provide decoupled, permanent persistence storage detached from unstable web application servers.",
        },
        whyWorks: {
          bn: "মঙ্গোডিবি তার V8 স্টাইল ডাইনামিক BSON ইঞ্জিনের মাধ্যমে মেমরিতে দ্রুত ডকুমেন্ট রাইট ও রিড কুয়েরি প্রসেস করে।",
          en: "MongoDB leverages BSON binary data structures to perform high-speed reads and writes.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা ডাটাবেজ মডেল করার সময় অপ্রয়োজনীয় নেস্টিং বা অতিরিক্ত গভীর লুপের বদলে এম্বেডেড বনাম রেফারেন্স ডিজাইন ঠিক করেন।",
          en: "Seniors balance embedded document arrays against document referencing based on read vs. write ratios.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় নোএসকিউএল ভুল হলো রিলেশন ডাটাবেজের অনুকরণে অতিরিক্ত ডকুমেন্ট লিংক তৈরি করা, যা পারফরম্যান্স ধ্বংস করে।",
          en: "Avoid deep nesting paths or excessive inter-document linking that requires manual joins in server code.",
        },
        debugging: {
          bn: "ডাটাবেজ কানেকশন বা কোয়েরি ডিবাগ করার সময় 'MongoDB Compass' নামক ভিজ্যুয়াল ইউজার ইন্টারফেস দিয়ে কালেকশনস ব্রাউজ করুন।",
          en: "Install MongoDB Compass to visually inspect collections, examine document IDs, and test search index execution.",
        },
        performance: {
          bn: "সার্চ অপ্টিমাইজড করতে ফিল্ড লেভেলে ইনডেক্সিং (Indexing) ম্যাপ সেট করতে হবে যেন কোটি ডকুমেন্টের মধ্য থেকেও সেকেন্ডে সার্চ রেজাল্ট পাওয়া যায়।",
          en: "Add database index keys on frequently queried fields like emails to maintain fast searches as database records scale.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "db-q1",
      question: {
        bn: "ওয়েব অ্যাপ্লিকেশনে ডেটাবেজ (Database)-এর প্রধান কাজ কী?",
        en: "What is the primary role of a Database in web applications?",
      },
      options: [
        {
          bn: "ব্রাউজার পেজ স্পিড বাড়ানো",
          en: "Increasing browser page loading speed",
        },
        {
          bn: "অ্যাপ্লিকেশনের তথ্যসমূহ স্থায়ীভাবে ও নিরাপদে সংরক্ষণ করা",
          en: "Storing application data safely and permanently",
        },
        {
          bn: "এইচটিএমএল কোড জেনারেট করা",
          en: "Generating raw HTML code templates",
        },
        { bn: "সার্ভার রিস্টার্ট বন্ধ করা", en: "Preventing server restarts" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডেটাবেজ সার্ভার রিস্টার্ট বা শাটডাউন হলেও তথ্য চিরতরে ডিস্কে সেভ রাখে যা পরবর্তিতে রিড করা যায়।",
        en: "Databases write records to non-volatile disk storage, ensuring data persistence.",
      },
    },
    {
      id: "db-q2",
      question: {
        bn: "মঙ্গোডিবি (MongoDB) কী ধরনের ডেটাবেজ সিস্টেম?",
        en: "What type of database system is MongoDB?",
      },
      options: [
        { bn: "SQL বা রিলেশনাল ডেটাবেজ", en: "SQL / Relational database" },
        {
          bn: "NoSQL বা ডকুমেন্ট-ভিত্তিক ডেটাবেজ",
          en: "NoSQL / Document-oriented database",
        },
        {
          bn: "কেবল ব্রাউজার লোকালস্টোরেজ",
          en: "Browser LocalStorage extension",
        },
        {
          bn: "অপারেটিং সিস্টেম রেজিস্ট্রি",
          en: "Operating system registry key store",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "মঙ্গোডিবি হলো একটি নোএসকিউএল ডাটাবেজ যা রিলেশনাল টেবিলের পরিবর্তে JSON-like ডকুমেন্ট আকারে ডেটা স্টোর করে।",
        en: "MongoDB organizes data dynamically using JSON-like documents rather than relational tables.",
      },
    },
    {
      id: "db-q3",
      question: {
        bn: "রিলেশনাল ডেটাবেজের একটি 'Row' বা সারি মঙ্গোডিবিতে কী নামে পরিচিত?",
        en: "Which MongoDB concept corresponds to a Row in SQL relational databases?",
      },
      options: [
        { bn: "Field (ফিল্ড)", en: "Field" },
        { bn: "Document (ডকুমেন্ট)", en: "Document" },
        { bn: "Collection (কালেকশন)", en: "Collection" },
        { bn: "Primary Key (প্রাইমারি কি)", en: "Primary Key" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "মঙ্গোডিবির একক ডাটা ইউনিট হলো ডকুমেন্ট (Document) যা রিলেশনাল ডেটাবেজের একটি রো বা সারির সমান।",
        en: "A single database record in MongoDB is represented as a Document.",
      },
    },
    {
      id: "db-q4",
      question: {
        bn: "রিলেশনাল ডেটাবেজের একটি 'Table' বা টেবিল মঙ্গোডিবিতে কী নামে পরিচিত?",
        en: "Which MongoDB concept corresponds to a Table in SQL relational databases?",
      },
      options: [
        { bn: "Document (ডকুমেন্ট)", en: "Document" },
        { bn: "Collection (কালেকশন)", en: "Collection" },
        { bn: "Database (ডেটাবেজ)", en: "Database" },
        { bn: "Index (ইনডেক্স)", en: "Index" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "একই ধরণের একাধিক ডকুমেন্টের গ্রুপ বা সমাহারকে কালেকশন (Collection) বলা হয় যা রিলেশনাল টেবিলের মতোই কাজ করে।",
        en: "A Collection is a grouping of related NoSQL documents.",
      },
    },
    {
      id: "db-q5",
      question: {
        bn: "মঙ্গোডিবি ডকুমেন্টে থাকা \`_id\` প্রপার্টিটির গুরুত্ব কী?",
        en: "What is the importance of the '_id' field in a MongoDB document?",
      },
      options: [
        {
          bn: "এটি ইউজার অ্যাকাউন্ট ডিলিট করতে সাহায্য করে",
          en: "It deletes user accounts automatically",
        },
        {
          bn: "এটি প্রতিটি ডকুমেন্টকে আলাদা করার ইউনিক প্রাইমারি কি বা চাবি",
          en: "It provides a unique primary key to distinguish each document from others",
        },
        {
          bn: "এটি ডেটাবেজের স্পিড স্লো করে দেয়",
          en: "It slows down database indexing",
        },
        {
          bn: "এটি ফন্টের সাইজ নির্ধারণ করে",
          en: "It defines paragraph font styles",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "মঙ্গোডিবি প্রতিটি ডকুমেন্টের জন্য একটি ইউনিক \`_id\` জেনারেট করে যা প্রতিটি তথ্যকে আলদা আইডি প্রদান করে।",
        en: "Every document requires a unique `_id` identifier to serve as its primary key index.",
      },
    },
  ],
  practice: [
    {
      bn: "১. রিলেশনাল ডেটাবেজের টেবিল-সারি এবং মঙ্গোডিবির কালেকশন-ডকুমেন্টের মধ্যে তুলনামূলক পার্থক্য ছক আকারে লিখুন।",
      en: "1. Create a table contrasting SQL Tables/Rows against NoSQL Collections/Documents.",
    },
    {
      bn: "২. কেন নোড ব্যাকএন্ড সার্ভার থাকা সত্ত্বেও মঙ্গোডিবির মতো ডাটাবেজ ব্যবহার করা বাধ্যতামূলক?",
      en: "2. Explain why a dedicated database layer is mandatory, despite having Node.js server storage buffers.",
    },
    {
      bn: "৩. লাইব্রেরি অ্যানালজিতে লাইব্রেরিয়ান (Librarian) এর সাথে ব্যাকএন্ড সার্ভারের কাজ কীভাবে সম্পর্কিত?",
      en: "3. Illustrate how the Librarian metaphor describes the role of the backend server in querying databases.",
    },
  ],
  assignment: {
    title: {
      bn: "অনলাইন কোর্সের ডেটাবেজ স্কিমা ডিজাইন",
      en: "Online Course Database Schema Configuration",
    },
    description: {
      bn: "বিজ্ঞানপ্রো একাডেমির কোর্সের তালিকা ও ইউজারদের কোর্স সাবস্ক্রিপশন ডাটা সংরক্ষণের জন্য মঙ্গোডিবির দুটি কালেকশন (\`courses\` এবং \`users\`) এবং তাদের ভেতরের ডকুমেন্টের জন্য JSON স্কিমা ডিজাইন করুন। ইউজার ম্যাপে তার এনরোল করা কোর্সের তথ্য ও প্রগ্রেস পার্সেন্টেজ যেন রিফ্লেক্ট হয় তা নিশ্চিত করুন।",
      en: "Design the MongoDB document schemas for two collections: 'courses' and 'users'. Ensure the user document dynamically tracks progress details of enrolled courses using nested JSON arrays.",
    },
    starterCode: `{
  "courses_collection": [
    // ১. এখানে একটি কোর্স ডকুমেন্টের JSON ডেটা লিখুন
  ],
  "users_collection": [
    // ২. এখানে একটি এনরোলড কোর্সের অ্যারে বিশিষ্ট ইউজার ডকুমেন্টের JSON ডেটা লিখুন
  ]
}`,
    solution: {
      code: `{
  "courses_collection": [
    {
      "_id": "60c72b2f9b1d8b2bad000101",
      "title": "React Architecture Masterclass",
      "instructor": "Munir Ahmed",
      "price": 3500,
      "category": "Frontend",
      "lessons_count": 24
    }
  ],
  "users_collection": [
    {
      "_id": "60c72b2f9b1d8b2bad000202",
      "name": "Sadia Islam",
      "email": "sadia@gmail.com",
      "enrolled_courses": [
        {
          "course_id": "60c72b2f9b1d8b2bad000101",
          "completed_lessons": 12,
          "progress_percent": 50,
          "enrolled_at": "2026-07-03T10:00:00Z"
        }
      ]
    }
  ]
}`,
      explanation: {
        bn: "অসাধারণ এপিআই ডাটা মডেলিং! courses_collection এবং users_collection এর মধ্যকার রেফারেন্সিং আইডি লিংক এবং নেস্টেড কোর্স প্রগ্রেস রিলেশনটি শতভাগ পারফেক্ট হয়েছে।",
        en: "Superb data modeling! Linking user courses to courses_collection ObjectIDs using nested arrays showcases complete understanding of NoSQL schemas.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "SQL এবং NoSQL ডেটাবেজের মধ্যে মূল ৩টি পার্থক্য কী কী?",
        en: "What are the three main differences between SQL and NoSQL databases?",
      },
      answer: {
        bn: "SQL এবং NoSQL ডেটাবেজের মূল ৩টি পার্থক্য নিচে দেওয়া হলো:\n১. ডেটা স্ট্রাকচার (Data Structure): SQL হলো রিলেশনাল ডেটাবেজ যা সারি-কলাম বিশিষ্ট কঠোর টেবিলে ডেটা সেভ করে। NoSQL হলো নন-রিলেশনাল এবং ডকুমেন্ট-ভিত্তিক, যা নমনীয় JSON/BSON ফরম্যাটে ডেটা রাখে।\n২. স্কিমা স্টাইল (Schema Style): SQL ডেটাবেজে কাজ শুরু করার আগেই প্রতিটি টেবিলের কলাম ও ডেটা টাইপ ফিক্সড করতে হয় (Strict Schema)। NoSQL-এ আগে থেকে স্কিমা নির্দিষ্ট করা বাধ্যতামূলক নয়, কন্টেন্ট ডাইনামিকালি চেঞ্জ হতে পারে (Dynamic Schema)।\n৩. স্কেলিং পদ্ধতি (Scaling): SQL ডেটাবেজকে প্রধানত ভার্টিকালি স্কেল (Vertical Scaling) করতে হয়, অর্থাৎ সার্ভারের সিপিইউ-র‍্যাম বাড়াতে হয়। NoSQL ডেটাবেজকে চমৎকারভাবে হরলিকালি স্কেল (Horizontal Scaling) করা যায়, অর্থাৎ লোড শেয়ার করতে একাধিক সস্তা সার্ভার ম্যাপ যোগ করা যায়।",
        en: "SQL and NoSQL engines differ across three core structural dimensions:\n1. Data Structure: SQL relational databases store records in rigid tables with strictly defined rows and columns. NoSQL databases (like MongoDB) utilize flexible document streams (JSON/BSON).\n2. Schema Definition: SQL databases require predefined, strict table schemas. Changing column layouts requires schema migrations. NoSQL databases support dynamic schemas, allowing documents in the same collection to have unique fields.\n3. Scaling Model: SQL databases scale vertically by upgrading memory/CPUs on a single server. NoSQL scales horizontally (sharding), allowing clusters of commodity servers to store segments of massive databases.",
      },
    },
    {
      question: {
        bn: "নোড জেএস (Node.js) এবং এক্সপ্রেস সার্ভার কীভাবে ডাটাবেজ মঙ্গোডিবির সাথে রিয়েল-টাইমে ডেটা এক্সচেঞ্জ করে?",
        en: "How does Node.js/Express server communicate and exchange data with MongoDB?",
      },
      answer: {
        bn: "নোড জেএস এবং এক্সপ্রেস সার্ভার মঙ্গোডিবির সাথে নিচে ৩টি ধাপে যোগাযোগ স্থাপন করে:\n১. ড্রাইভার বা ওআরএম লাইব্রেরি (Mongoose/MongoDB Driver): নোড সার্ভার মঙ্গোডিবির সাথে কথা বলার জন্য 'Mongoose' বা অফিশিয়াল 'mongodb' নামক ড্রাইভার প্যাকেজ ইনস্টল করে। এই প্যাকেজগুলো ডাটাবেজ কানেকশন হ্যান্ডেল করে।\n২. কানেকশন ইউআরআই (Connection URI): এক্সপ্রেস কোডে ডাটাবেজের ইউআরআই (যেমন: \`mongodb://localhost:27017/dbname\`) দিয়ে কানেক্ট ফাংশন রান করা হয়। এটি পোর্ট লিসেনার চালুর পর ডাটাবেজ কানেকশন সফলভাবে বাইন্ড করে।\n৩. ড্রাইভার এপিআই কুয়েরি: কানেকশন স্ট্যাবল হওয়ার পর এক্সপ্রেসে কোনো এপিআই রিকোয়েস্ট এলে, আমরা ড্রাইভারের কোড বা ফাংশন রান করে (যেমন: \`User.find()\` বা \`User.create()\`) ডাটাবেজ থেকে ডেটা নিয়ে আসি বা পাঠাই। ডাটাবেজ কুয়েরি প্রসেস করে জাভাস্ক্রিপ্ট অবজেক্টে নোড সার্ভারে ডাটা পাঠায় এবং নোড তা ক্লায়েন্টে সেন্ড করে।",
        en: "Express servers exchange data with MongoDB through a structured driver integration pipeline:\n1. Database Drivers (Mongoose/MongoDB client): Node.js uses npm packages like `mongoose` or the official Node driver to establish network sockets with the database daemon.\n2. Connection URI: Express registers connection handlers passing a Connection URI string (e.g. `mongodb+srv://...` or local instances). This sets up connection pools to recycle network queries efficiently.\n3. Model Operations: Inside API callbacks, Express invokes driver queries (e.g., `User.find()` or `User.create()`). The driver sends binary packets, MongoDB runs query plan indices, compiles the matching documents, and dispatches JSON back across Node sockets.",
      },
    },
  ],
};
