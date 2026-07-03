export const chapter13Content = {
  id: "chapter-13",
  number: 13,
  title: {
    bn: "অধ্যায় ১৩: এইচটিটিপি ও এইচটিটিপিএস — ওয়েব যোগাযোগের প্রোটোকল",
    en: "Chapter 13: HTTP & HTTPS (Web Communication Protocol)",
  },
  description: {
    bn: "ব্রাউজার ও সার্ভার কীভাবে প্রোটোকল মেনে কথা বলে, জিইটি (GET) ও পোস্ট (POST) মেথড কী এবং সিকিউর এনক্রিপশন ও স্ট্যাটাস কোড পরিচিতি।",
    en: "Understand the stateless HyperText Transfer Protocol (HTTP), SSL/TLS encryption (HTTPS), GET vs. POST request methods, and HTTP status codes.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "এইচটিটিপি (HTTP) প্রোটোকল কী এবং এটি কীভাবে ব্রাউজার ও সার্ভারের ভাষা হিসেবে কাজ করে তা জানা।",
      en: "Understand the HTTP protocol as the communication language between client and server.",
    },
    {
      bn: "জিইটি (GET) এবং পোস্ট (POST) মেথডের মূল কাজের পার্থক্য বাস্তব কোড উদাহরণ দিয়ে চেনা।",
      en: "Distinguish between GET and POST request methods using practical code snippets.",
    },
    {
      bn: "এইচটিটিপিএস (HTTPS) কীভাবে ডাটা এনক্রিপ্ট করে নিরাপত্তা নিশ্চিত করে তা বোঝা।",
      en: "Learn how HTTPS secures data transmissions through encryption mechanisms.",
    },
    {
      bn: "২০০, ৪০৪ ও ৫০০ এর মতো অত্যন্ত সাধারণ এইচটিটিপি স্ট্যাটাস কোডগুলোর সঠিক অর্থ শেখা।",
      en: "Identify common HTTP status codes like 200 (Success), 404 (Not Found), and 500 (Server Error).",
    },
  ],
  sections: [
    {
      id: "what-is-http-request",
      title: {
        bn: "১. এইচটিটিপি কী ও রিকোয়েস্ট-রেসপন্স লাইফসাইকেল (What is HTTP & Request-Response)",
        en: "1. What is HTTP & Request-Response",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
যখন আপনি ইন্টারনেটে কোনো লিঙ্কে ক্লিক করেন, তখন আপনার ব্রাউজার সুদূর সার্ভারের সাথে ডেটা আদান-প্রদান করতে শুরু করে। কিন্তু ব্রাউজার এবং সার্ভার কীভাবে একে অপরের সাথে কথা বলে? তারা কি এলোমেলোভাবে তথ্য পাঠায়? না, তাদের মধ্যে যোগাযোগের একটি আন্তর্জাতিক সুনির্দিষ্ট নিয়ম রয়েছে। এই নিয়মের নাম হলো **HTTP (HyperText Transfer Protocol)**।

## Why should I learn this? (কেন শিখবো?)
ফুল স্ট্যাক কোডিংয়ের সময় প্রতিবার আপনাকে এপিআই তৈরি করতে হবে এবং এপিআই কলের রিকোয়েস্ট রেডি করতে হবে। এইচটিটিপি প্রোটোকলের গঠন ও কাজের নিয়ম না জানলে আপনি এপিআই-তে ভুল ডেটা পাঠিয়ে বিভ্রান্তিকর বাগে আটকে যাবেন।

## What is HTTP? (এইচটিটিপি কী?)
সহজ কথায়: **HTTP হলো ব্রাউজার এবং সার্ভারের মধ্যে তথ্য আদান-প্রদান করার জন্য নির্ধারিত একটি স্ট্যান্ডার্ড প্রোটোকল বা যোগাযোগের নিয়মাবলি।**

*   **রূপক**: দুজন ভিন্ন দেশের মানুষের মধ্যে কথা বলার জন্য যেমন একটি কমন ভাষা (যেমন ইংরেজি) প্রয়োজন হয়, তেমনি ব্রাউজার ও সার্ভারের মধ্যে যোগাযোগের ভাষা হলো এইচটিটিপি।

## The Request-Response Cycle (রিকোয়েস্ট-রেসপন্স চক্র)
এইচটিটিপি প্রোটোকল সর্বদা নিচের দুটি ধাপে কাজ করে:
১. **রিকোয়েস্ট (Request)**: ক্লায়েন্ট ব্রাউজার সার্ভারের কাছে নির্দিষ্ট ডাটা বা পেজ চেয়ে একটি মেসেজ পাঠায়।
২. **রেসপন্স (Response)**: সার্ভার সেই রিকোয়েস্ট চেক করে ডেকোরেশন বা বাফার ডাটা ফাইল ক্লায়েন্টকে ফেরত পাঠায়।`,
        en: `## Introduction
Web resources exchange over network nodes using standardized protocols. The primary standard for browser-server interfaces is HTTP.

## What is HTTP?
HyperText Transfer Protocol. A stateless application-layer protocol defining formatting rules for request payloads and response packets.

## Cycle:
1. **Request**: Browser requests a resource from the server.
2. **Response**: Server responds back with files (HTML, CSS, JSON) or error flags.`,
      },
    },
    {
      id: "http-methods-get-post",
      title: {
        bn: "২. এইচটিএমএল মেথডসমূহ: জিইটি ও পোস্ট (HTTP Methods: GET vs POST)",
        en: "2. HTTP Methods: GET vs POST",
      },
      content: {
        bn: `## HTTP Methods (কাজের ধরন বা মেথড)
সার্ভারকে রিকোয়েস্ট পাঠানোর সময় আমাদের জানাতে হবে আমরা ঠিক কী ধরণের কাজ করতে চাচ্ছি। এই কাজের অ্যাকশনকে **এইচটিটিপি মেথড (HTTP Methods)** বলা হয়। বিগিনার হিসেবে আপনার ২টি মেথড জানা সবচেয়ে জরুরি:

১. **GET Method (ডাটা পড়া)**:
   *   **কাজ**: সার্ভার থেকে কোনো তথ্য বা ফাইল নিয়ে আসা (রিড করা)।
   *   **উদাহরণ**: ব্রাউজারে \`google.com\` বা \`facebook.com/user\` পেজ ওপেন করা।
   *   **বৈশিষ্ট্য**: জিপিউ বা সার্ভারে কোনো ডাটা চেঞ্জ হয় না, কেবল পড়া হয়।
২. **POST Method (ডাটা পাঠানো)**:
   *   **কাজ**: সার্ভারে নতুন কোনো তথ্য বা ফাইল সাবমিট করা বা রাইট করা।
   *   **উদাহরণ**: লগইন করার সময় পাসওয়ার্ড পাঠানো, নতুন ফেসবুক পোস্ট সাবমিট করা বা কার্টে প্রোডাক্ট যোগ করা।
   *   **বৈশিষ্ট্য**: সার্ভারে নতুন তথ্য যুক্ত হয় বা আগের তথ্য এডিট হয়।

---
## GET vs POST Comparison (তুলনা ছক)
| বৈশিষ্ট্য (Features) | GET Method | POST Method |
| :--- | :--- | :--- |
| **মূল কাজ** | ডাটা পড়া বা রিট্রাইভ করা | নতুন ডাটা তৈরি বা সাবমিট করা |
| **ডাটা পাঠানো** | ইউআরএলের শেষে দৃশ্যমান অবস্থায় যায় | রিকোয়েস্টের বডি (Payload Body) তে গোপনে যায় |
| **নিরাপত্তা** | পাসওয়ার্ডের মতো সিক্রেট ডাটার জন্য সম্পূর্ণ অনিরাপদ | সিক্রেট ডাটার জন্য নিরাপদ ও সঠিক নিয়ম |
| **ক্যাশিং** | ব্রাউজারে ক্যাশ বা সেভ থাকে | ব্রাউজারে ক্যাশ হয় না |`,
        en: `## HTTP Methods (Verbs)
*   **GET**: Requests data from a specified resource. Safe and idempotent (does not alter server database states). E.g., loading homepages.
*   **POST**: Submits data payload packets to be processed to a specified resource. Creates new database documents. E.g., submitting logins.`,
      },
    },
    {
      id: "what-is-https-encryption",
      title: {
        bn: "৩. এইচটিটিপিএস ও এনক্রিপশন লজিক (What is HTTPS & Encryption)",
        en: "3. What is HTTPS & Encryption",
      },
      content: {
        bn: `## What is HTTPS? (এইচটিটিপিএস কী?)
**HTTPS** এর পূর্ণরূপ হলো **HyperText Transfer Protocol Secure**। এটি হলো এইচটিটিপির নিরাপদ এবং এনক্রিপ্ট করা রূপ।
*   আপনি ব্রাউজারে অ্যাড্রেস বারের শুরুতে একটি ছোট 'সবুজ তালা' (Padlock) চিহ্ন দেখতে পান, এটিই নির্দেশ করে সাইটটি এইচটিটিপিএস দিয়ে সুরক্ষিত।

## Why HTTPS is Important (নিরাপত্তার প্রয়োজনীয়তা)
আমরা যখন সাধারণ HTTP ব্যবহার করি, তখন আমাদের ইমেল ও পাসওয়ার্ড নেটওয়ার্ক ক্যাবলের মধ্য দিয়ে প্লেইন টেক্সট বা সরল বর্ণ (যেমন: \`correct-password\`) হিসেবে ট্রাভেল করে। একই ওয়াইফাই বা নেটওয়ার্কের কোনো হ্যাকার চাইলে খুব সহজে মাঝপথ থেকে ডাটা চুরি করতে পারেন।

HTTPS প্রোটোকল **SSL/TLS এনক্রিপশন** যুক্ত করে ডাটা ট্রান্সফার করে:
*   **এনক্রিপশন (Encryption)**: আপনার পাঠানো পাসওয়ার্ডটিকে জগাখিচুড়ি বা অপাঠ্য কোডে (যেমন: \`a8#d9%f2k@ls\`) রূপান্তর করা।
*   **ডিক্রিপশন (Decryption)**: সুদূর আমেরিকার টার্গেট সার্ভারটি যখন ডাটা প্যাকেট রিসিভ করে, কেবল সেটির কাছেই স্পেশাল কি বা চাবি থাকে যার সাহায্যে সে পুনরায় ডিকোড করে মূল পাসওয়ার্ড দেখতে পারে।

মাঝপথে কোনো হ্যাকার ডাটা ট্রাফিকে হানা দিলেও সে কেবল অপাঠ্য টেক্সট দেখবে, যার ফলে আপনার পাসওয়ার্ড চিরকাল সুরক্ষিত থাকবে!`,
        en: `## What is HTTPS?
HyperText Transfer Protocol Secure. It layers SSL/TLS encryption protocols over HTTP transactions.

## SSL/TLS Encryption
Placing passwords on a standard HTTP connection streams plain-text bytes. Anyone intercepting packets reads data directly. HTTPS encrypts streams into unreadable garbage hashes, decrypted only by destination servers possessing target private key decoders.`,
      },
    },
    {
      id: "http-status-codes",
      title: {
        bn: "৪. এইচটিটিপি স্ট্যাটাস কোড পরিচিতি (HTTP Status Codes Decoded)",
        en: "4. HTTP Status Codes Decoded",
      },
      content: {
        bn: `## The Server Response: Status Codes (স্ট্যাটাস কোড কী?)
সার্ভার যখন রিকোয়েস্টের উত্তর দেয়, তখন সে ৩ সংখ্যার একটি বিশেষ নম্বরের মাধ্যমে রিকোয়েস্টের ফলাফল বা স্ট্যাটাস বুঝিয়ে দেয়। একে **এইচটিটিপি স্ট্যাটাস কোড (HTTP Status Codes)** বলে।

ডেভেলপার হিসেবে নিচের ৪টি গ্রুপ চেনা আবশ্যক:

১. **2xx Success (সফল)**:
   *   **200 OK**: আপনার রিকোয়েস্ট সফল হয়েছে এবং ফাইল পাওয়া গেছে।
২. **3xx Redirection (পুনর্নির্দেশনা)**:
   *   **301 Moved Permanently**: লিঙ্কটি অন্য অ্যাড্রেসে পার্মানেন্টলি রিডাইরেক্ট করা হয়েছে।
৩. **4xx Client Error (ক্লায়েন্ট বা ইউজারের ভুল)**:
   *   **404 Not Found**: ইউজার যে ফাইল বা লিঙ্কটি খুঁজছেন তা সার্ভারে নেই। (বানান ভুল বা ডিলিট হওয়া লিঙ্ক)।
   *   **401 Unauthorized**: এই ডাটা দেখার জন্য ইউজার লগইন করেননি বা পারমিশন নেই।
৪. **5xx Server Error (সার্ভারের ভুল বা ক্র্যাশ)**:
   *   **500 Internal Server Error**: সার্ভারের ভেতরের কোডে কোনো বাগ বা ক্র্যাশ রয়েছে যার কারণে সে রিকোয়েস্ট হ্যান্ডেল করতে পারছে না।
   *   **503 Service Unavailable**: সার্ভারে অনেক বেশি ট্রাফিক জ্যাম বা মেইনটেনেন্স চলছে।`,
        en: `## HTTP Status Codes
*   **2xx (Success)**: E.g., **200 OK**. Request resolved successfully.
*   **3xx (Redirection)**: E.g., **301 Moved**. Resource location changed.
*   **4xx (Client Errors)**: E.g., **404 Not Found** (requested endpoint is missing) or **401 Unauthorized** (missing auth tokens).
*   **5xx (Server Errors)**: E.g., **500 Internal Error** (backend code crashed) or **503 Unavailable** (server CPU overload).`,
      },
    },
    {
      id: "restaurant-order-analogy",
      title: {
        bn: "৫. রিয়েল লাইফ ফ্লো ও অর্ডার স্লিপ অ্যানালজি (Web Flow & Ordering Analogy)",
        en: "5. Web Flow & Ordering Analogy",
      },
      content: {
        bn: `## The Restaurant Order Slip Analogy (অর্ডার স্লিপ রূপক)
এইচটিটিপি রিকোয়েস্ট-রেসপন্স পাইপলাইনকে একটি রেস্টুরেন্টের ফুড অর্ডার ফ্লোর সাথে মিলিয়ে নিন:
*   **গ্রাহক (Customer)**: ক্লায়েন্ট ব্রাউজার।
*   **অর্ডার স্লিপ (Order Slip)**: এইচটিটিপি রিকোয়েস্ট (HTTP Request - যেখানে টেবিলে গ্রাহক লিখে দেন খাবারের নাম)।
*   **অর্ডার মেথড (Order Method)**: 
    - **GET**: অর্ডার স্লিপে লেখা *"আমাকে মেনু থেকে ২নং বিরিয়ানি দিন"* (ডাটা রিড)।
    - **POST**: অর্ডার স্লিপে লেখা *"আমি রান্নাঘরে আমার নিজের কাস্টম রেসিপির চাল-সবজি দিলাম, বিরিয়ানি তৈরি করুন"* (ডাটা রাইট/সেন্ড)।
*   **রান্নাঘর (Kitchen)**: সার্ভার ব্যাকএন্ড।
*   **রান্নাঘরের উত্তর স্লিপ বা বিল**: এইচটিটিপি রেসপন্স এবং স্ট্যাটাস কোড (HTTP Response - যেমন: বিলের ওপরে লেখা **২০০ OK** মানে খাবার রেডি, আর **৪০৪ Not Found** মানে মেনুর খাবারটি আজ রান্নাঘরে শেষ হয়ে গেছে!)।`,
        en: `## Metaphor
*   **Customer**: Client browser.
*   **Order Slip**: HTTP Request metadata.
*   **GET Verb**: Slip requesting: "Bring me recipe number 5 from menu."
*   **POST Verb**: Slip submitting raw beef, writing: "Store this payload in kitchen vault."
*   **Chef Invoice**: HTTP Response status. E.g., **200 OK** (meal delivered), **404 Not Found** (kitchen out of menu ingredients).`,
      },
      codeBlock: {
        fileName: "http_simulator.js",
        language: "javascript",
        code: `// এইচটিটিপি রিকোয়েস্ট ও স্ট্যাটাস কোড সিমুলেটর
const mockServerData = {
  "/welcome": { status: 200, body: "বিজ্ঞানপ্রো একাডেমির হোমপেজে স্বাগতম!" },
  "/admin": { status: 401, body: "❌ অ্যাক্সেস ডিনাইড! আপনি লগইন করেননি।" }
};

function dispatchRequest(method, endpoint, payload = null) {
  console.log(\`📡 HTTP Request Dispatch: [\${method}] ➔ \${endpoint}\`);
  if (payload) console.log(\`📦 Payload: \`, payload);
  
  // সার্ভার রাউটিং রিজলভার
  const responseData = mockServerData[endpoint];
  if (responseData) {
    console.log(\`📦 HTTP Response: Status \${responseData.status}\`);
    console.log(\`💬 Body: "\${responseData.body}"\`);
    return responseData.status;
  } else {
    console.log(\`📦 HTTP Response: Status 404\`);
    console.log("💬 Body: ❌ দুঃখিত, ফাইলটি খুঁজে পাওয়া যায়নি!");
    return 404;
  }
}

dispatchRequest("GET", "/welcome");
dispatchRequest("GET", "/admin");
dispatchRequest("POST", "/login", { user: "tasnim", pass: "123" });`,
        explanations: [
          {
            line: 7,
            text: {
              bn: "এপিআই রিকোয়েস্টের মেথড ও অ্যান্ডপয়েন্ট অ্যাড্রেস কনসোলে ট্র্যাক করা।",
              en: "Tracking HTTP method verbs and target path endpoints.",
            },
          },
          {
            line: 16,
            text: {
              bn: "যদি রিকোয়েস্ট করা পেজটি ডিরেক্টরিতে না থাকে, তবে ৪০৪ নট ফাউন্ড স্ট্যাটাস কোড জেনারেট করা।",
              en: "Defaulting response code to 404 if path key does not exist on database registry.",
            },
          },
        ],
      },
    },
    {
      id: "practice-http-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার এইচটিটিপি ট্রাফিক, মেথডস এবং স্ট্যাটাস কোড সম্পর্কে ধারণা ক্লিয়ার করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your HTTP protocol structures before coding backend API routes in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "এইচটিটিপি নেটওয়ার্কের সিক্রেট ও রেসপন্স স্ট্যাটাস জানলে আপনি ব্যাকএন্ড এপিআই এর সঠিক সিকিউরিটি এবং এরর হ্যান্ডলিং কোড লিখতে পারবেন।",
          en: "Knowing HTTP specifications enables you to map appropriate REST standards inside server router instances.",
        },
        whyWorks: {
          bn: "এইচটিটিপি প্রোটোকলের রিকোয়েস্ট মেসেজ মূলত হেডার (Header) এবং বডি (Body) নামক ফিজিক্যাল টেক্সট ব্লকে বিভক্ত হয়ে ক্যাবল দিয়ে প্রবাহিত হয়।",
          en: "HTTP transactions parse into plaintext string streams containing header tags and payload bodies.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা নিরাপত্তা নিশ্চিত করতে সর্বদা সেনসিটিভ জেসন ফাইল জিপিউ বা লোকাল নেটওয়ার্কে পাঠানোর সময় এইচটিটিপিএস প্রোটোকল দিয়ে এনক্রিপ্ট করেন।",
          en: "Seniors enforce SSL redirections globally, forcing all client HTTP traffic to upgrade to secure HTTPS endpoints.",
        },
        mistakes: {
          bn: "বিগিনারদের ভুল হলো পাসওয়ার্ড বা আইডি পাঠানোর জন্য GET মেথড ব্যবহার করা। এতে ইউআরএলের ব্রাউজার হিস্টোরিতে পাসওয়ার্ড সেভ হয়ে যায়।",
          en: "Never pass authentication tokens inside GET request URLs; query parameters are cached in browser history logs.",
        },
        debugging: {
          bn: "ক্রোম ডেভটুলসের 'Network' ট্যাব ব্যবহার করে রিকোয়েস্টের হেডার ও জেসন রেসপন্সের ডাটা নিখুঁতভাবে ডিবাগ করুন।",
          en: "Audit API failures by inspecting Network response tabs to locate malformed JSON formats.",
        },
        performance: {
          bn: "স্ট্যাটিক ফাইলগুলো বারবার সার্ভার থেকে লোড না করে এইচটিটিপি হেডার 'Cache-Control' ব্যবহার করে ব্রাউজারে ক্যাশ করে রাখুন।",
          en: "Leverage Cache-Control headers to specify resource lifespans, eliminating redundant network roundtrips.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "ht-q1",
      question: {
        bn: "এইচটিটিপি (HTTP) প্রোটোকল বলতে কী বোঝায়?",
        en: "What is HTTP?",
      },
      options: [
        {
          bn: "কম্পিউটারের প্রসেসর কুলিং সিস্টেম",
          en: "A CPU cooling system manager",
        },
        {
          bn: "ব্রাউজার এবং সার্ভারের মধ্যে যোগাযোগের আন্তর্জাতিক সুনির্দিষ্ট নিয়মনীতি বা প্রোটোকল",
          en: "A standardized protocol governing client-server communication",
        },
        { bn: "ওয়াইফাই স্পিড বাড়ানোর টুল", en: "A Wi-Fi diagnostic utility" },
        {
          bn: "শুধুমাত্র একটি ব্রাউজার আইকন",
          en: "Just a browser frame label",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এইচটিটিপি হলো স্ট্যান্ডার্ড প্রোটোকল যা নির্ধারণ করে ব্রাউজার ও সার্ভার কীভাবে মেথড ও ফাইল ট্রান্সফার করবে।",
        en: "HTTP is the foundational protocol for data exchange across the World Wide Web.",
      },
    },
    {
      id: "ht-q2",
      question: {
        bn: "সার্ভার থেকে তথ্য রিড বা ডাটা পড়ার জন্য কোন এইচটিটিপি মেথডটি সঠিক?",
        en: "Which HTTP method verb is used to read data from a resource?",
      },
      options: [
        { bn: "POST Method", en: "POST Method" },
        { bn: "GET Method", en: "GET Method" },
        { bn: "DELETE Method", en: "DELETE Method" },
        { bn: "BIOS Program", en: "BIOS Program" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "জিইটি (GET) মেথড সার্ভার থেকে কেবল তথ্য পড়ার বা ফাইল ক্যাচ করে ভিউ করানোর জন্য ব্যবহৃত হয়।",
        en: "GET operations retrieve read-only parameters, preserving database state integrity.",
      },
    },
    {
      id: "ht-q3",
      question: {
        bn: "পাসওয়ার্ড বা ক্রেডিট কার্ড সাবমিট করার রিকোয়েস্টে এইচটিটিপিএস (HTTPS) এর প্রধান ভূমিকা কী?",
        en: "What is the primary role of HTTPS during credential submissions?",
      },
      options: [
        { bn: "কোডের ফাইল সাইজ কমানো", en: "Reduce code script storage size" },
        {
          bn: "ডাটা এনক্রিপ্ট বা অপাঠ্য কোডে রূপান্তর করে মাঝপথে হ্যাকারদের ডাটা চুরির হাত থেকে বাঁচানো",
          en: "Encrypt data to protect payload streams from packet sniffing and theft",
        },
        {
          bn: "সার্ভার স্পিড দ্বিগুণ করা",
          en: "Double server response throughput",
        },
        { bn: "ফাইলের নাম পরিবর্তন করা", en: "Rename data folders" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এইচটিটিপিএস ডাটা স্ক্র্যাম্বল বা এনক্রিপ্ট করে সিকিউর চ্যানেলে পাঠায়, ফলে হ্যাকাররা ডাটা রিড করতে পারে না।",
        en: "HTTPS secures connections using asymmetric encryption keys before packet transmission.",
      },
    },
    {
      id: "ht-q4",
      question: {
        bn: "ইউজার ব্রাউজারে ভুল লিঙ্ক টাইপ করলে বা কোনো লিঙ্ক ডিলিট হয়ে গেলে সার্ভার কোন স্ট্যাটাস কোড দেয়?",
        en: "Which HTTP status code is generated when a client requests a missing resource link?",
      },
      options: [
        { bn: "200 OK", en: "200 OK" },
        { bn: "404 Not Found", en: "404 Not Found" },
        { bn: "500 Internal Error", en: "500 Internal Error" },
        { bn: "301 Redirect", en: "301 Redirect" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "৪০৪ নট ফাউন্ড কোড নির্দেশ করে ক্লায়েন্টের রিকোয়েস্ট করা ডিরেক্টরি অ্যাড্রেসটি সার্ভারে অনুপস্থিত।",
        en: "404 is the client-side error status indicating resource endpoints do not exist.",
      },
    },
    {
      id: "ht-q5",
      question: {
        bn: "সার্ভারের কোডে বা লজিকে কোনো মারাত্মক বাগ বা ক্র্যাশ থাকলে ওএস কোন স্ট্যাটাস কোড জেনারেট করে?",
        en: "Which HTTP status code indicates a crash inside the server code logic?",
      },
      options: [
        { bn: "200 OK", en: "200 OK" },
        { bn: "500 Internal Server Error", en: "500 Internal Server Error" },
        { bn: "401 Unauthorized", en: "401 Unauthorized" },
        { bn: "301 Redirect", en: "301 Redirect" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "৫০০ ইন্টারনাল সার্ভার এরর নির্দেশ করে সার্ভারের ব্যাকএন্ড ফাইলে ক্র্যাশ বা কোড জ্যাম তৈরি হয়েছে।",
        en: "500 error represents a backend server-side exception state preventing processing completion.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার ফেসবুক নোটিফিকেশন পেজ লোড হওয়া এবং নতুন নোটিফিকেশন কমেন্ট পোস্ট হওয়া—এই দুটির এইচটিটিপি মেথড জোড়া কেমন হবে? লিখুন।",
      en: "Define the HTTP method verbs for loading a notification list vs. writing a comment reply.",
    },
    {
      bn: "এনক্রিপশন (Encryption) এবং ডিক্রিপশন (Decryption) এর কাজের মূল পার্থক্যের ১টি উদাহরণ দিন।",
      en: "Contrast encryption scrambling logic with decryption private key decoding operations.",
    },
    {
      bn: "সার্ভারে ৫০০ এরর (Status Code 500) আসলে ডেভেলপারের প্রথম করণীয় পদক্ষেপ কী? সংক্ষেপে লিখুন।",
      en: "Describe the debugging procedure a developer follows when API calls return a 500 status code.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি ইউজার রেজিস্ট্রেশন প্রসেসের এইচটিটিপি রিকোয়েস্ট পাইপলাইন",
      en: "User Registration HTTP Request Pipeline Layout",
    },
    description: {
      bn: "একটি নতুন সাইনআপ রেজিস্ট্রেশন ফর্মের সাবমিশন মেথড, ইউআরএল, রিকোয়েস্ট বডি ডাটা ও সফল রেসপন্স স্ট্যাটাস ডিক্লেয়ার করে জেসন স্ট্রাকচার সাবমিট করুন।",
      en: "Map out the HTTP metadata parameters (method, endpoint, payload, success code) for registering a user account.",
    },
    starterCode: `// Registration HTTP Pipeline Schema
const registrationHttpPipeline = {
  requestMethod: "GET / POST",
  targetUrl: "/api/users/signup",
  headers: {
    "Content-Type": "application/json"
  },
  requestBody: {
    // ফর্ম থেকে পাঠানো নতুন ইউজারের ডাটা জেসন
  },
  expectedResponse: {
    status: 0,
    body: {}
  }
};`,
    solution: {
      code: `// Registration Pipeline Processed
const registrationHttpPipeline = {
  requestMethod: "POST",
  targetUrl: "https://bignanpro.com/api/users/signup",
  headers: {
    "Content-Type": "application/json"
  },
  requestBody: {
    username: "afreen_mirza",
    email: "afreen@bignanpro.com",
    password: "hashed-strong-pass-XYZ"
  },
  expectedResponse: {
    status: 201,
    body: {
      success: true,
      message: "ব্যবহারকারী অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!",
      userId: 508
    }
  }
};`,
      explanation: {
        bn: "চমৎকার ডিজাইন! সাইনআপের জন্য সঠিক POST মেথড সিলেক্ট করা এবং সাকসেসফুল রেজিস্ট্রেশনের জন্য ২০১ (Created) স্ট্যাটাস ব্যবহারের পুরো লজিক ফ্লোটি চমৎকার হয়েছে।",
        en: "Structuring HTTP request metadata models how browsers request server resources dynamically over SSL.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "জিইটি (GET) এবং পোস্ট (POST) রিকোয়েস্টের মধ্যে ডাটা পাঠানোর সিকিউরিটি ও ব্যান্ডউইথ ব্যবহারের মূল পার্থক্য কী?",
        en: "What are the core security and data format differences between GET and POST requests?",
      },
      answer: {
        bn: "GET রিকোয়েস্টের সমস্ত প্যারামিটার ইউআরএলের কুয়েরি স্ট্রিং হিসেবে প্রকাশ্যে পাঠানো হয় (যেমন: ?user=name&pass=123)। এটি ব্রাউজার ইউআরএল বারে দৃশ্যমান থাকে, ব্রাউজার হিস্টোরি ও সার্ভার লগ ফাইলে ক্যাশ হিসেবে সেভ হয়, যা পাসওয়ার্ডের জন্য চরম অনিরাপদ। এছাড়া ইউআরএলের সর্বোচ্চ সাইজ লিমিট (২০০০ অক্ষরের মতো) থাকে। আর POST রিকোয়েস্টের ডাটা মেসেজের বডি (Body) খামে মোড়ানো অবস্থায় গোপনে সার্ভারে ট্রাভেল করে। এটি ইউআরএল বারে দৃশ্যমান হয় না, ব্রাউজারে ক্যাশ থাকে না এবং সাইজের কোনো সুনির্দিষ্ট লিমিটেশন নেই, ফলে ফাইল বা বড় জেসন অবজেক্ট সাবমিটের জন্য উপযুক্ত।",
        en: "GET transmits variables appended to the URI query string, making them visible in address bars, logs, and proxy buffers. They are size-restricted (~2KB) and cached. POST transmits variables inside the HTTP payload body, keeping them out of address bars and history caches. POST imposes no strict size restrictions, making it suitable for secure credentials and media uploads.",
      },
    },
    {
      question: {
        bn: "এইচটিটিপি স্ট্যাটাস কোড (HTTP Status Codes) এর গ্রুপভিত্তিক রেঞ্জগুলোর মূল অর্থ কী কী?",
        en: "Explain the general semantic grouping of HTTP status code ranges.",
      },
      answer: {
        bn: "স্ট্যাটাস কোডের প্রথম সংখ্যাটি উত্তরের শ্রেণী বা ক্যাটাগরি নির্দেশ করে:\n১. **1xx (Informational)**: সাময়িক তথ্য প্রদানকারী নোটিশ।\n২. **2xx (Success)**: রিকোয়েস্ট সফলভাবে সম্পন্ন হয়েছে (যেমন: 200 OK, 201 Created)।\n৩. **3xx (Redirection)**: কাস্টমারকে অন্য লিঙ্কে রিডাইরেক্ট করা হচ্ছে (যেমন: 301 Moved)।\n৪. **4xx (Client Error)**: ক্লায়েন্ট বা ইউজারের ভুল (যেমন: 404 Not Found বা 401 Unauthorized)।\n৫. **5xx (Server Error)**: ব্যাকএন্ড সার্ভারের ভেতরের কোডের ভুল বা ফেইলুর (যেমন: 500 Internal Error, 503 Service Unavailable)।",
        en: "The first digit defines the response class: 1xx representing Informational, 2xx representing Success (action resolved), 3xx representing Redirections, 4xx representing Client Errors (malformed requests, missing authentication), and 5xx representing Server Errors (internal system crashes).",
      },
    },
  ],
};
