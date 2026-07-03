import { Chapter } from "@/types";

export const chapter0Content: Chapter = {
  id: "chapter-0",
  number: 0,
  title: {
    bn: "অধ্যায় ০: শুরু করার আগে — ফাউন্ডেশন ও পরিচিতি",
    en: "Chapter 0: Before Starting — Foundation & Introduction",
  },
  description: {
    bn: "ফুল স্ট্যাক ডেভেলপার হওয়ার রোডম্যাপ, বিজ্ঞানপ্রো একাডেমির পরিচিতি এবং লার্নিং মেথডোলজি।",
    en: "Roadmap to becoming a Full Stack Developer, introduction to BignanPro Academy, and our learning methodology.",
  },
  difficulty: "beginner",
  readingTime: 12,
  objectives: [
    {
      bn: "ফুল স্ট্যাক ওয়েব ডেভেলপমেন্টের মূল ধারণা এবং ক্লায়েন্ট-সার্ভার মডেল বোঝা।",
      en: "Understand the core concepts of Full Stack Web Development and the Client-Server model.",
    },
    {
      bn: "বিজ্ঞানপ্রো একাডেমির লার্নিং মেথডোলজি এবং কীভাবে দ্রুত শিখতে হয় তা জানা।",
      en: "Learn the BignanPro Academy methodology and how to optimize your study habits.",
    },
    {
      bn: "ভবিষ্যতের চমৎকার জার্নির জন্য মানসিক প্রস্তুতি সম্পন্ন করা।",
      en: "Build the necessary developer mindset for a successful learning journey.",
    },
  ],
  sections: [
    {
      id: "intro",
      title: {
        bn: "ভূমিকা (Introduction)",
        en: "Introduction",
      },
      content: {
        bn: `বিজ্ঞানপ্রো একাডেমিতে আপনাকে স্বাগতম! এটি কোনো সাধারণ টিউটোরিয়াল ওয়েবসাইট নয়। এটি মূলত একটি ইন্টারঅ্যাক্টিভ বই যা আপনাকে প্রোগ্রামিংয়ের জটিল জগত খুব সহজ ভাষায় বোঝাবে। 

আমরা ধরে নিচ্ছি আপনার প্রোগ্রামিং সম্পর্কে আগে থেকে কোনো ধারণা বা জ্ঞান নেই। আমরা একদম শূন্য (০) থেকে শুরু করবো এবং ধাপে ধাপে একজন প্রফেশনাল ফুল স্ট্যাক ডেভেলপার হিসেবে তৈরি হতে যা যা দরকার, সবকিছু হাতে কলমে শিখবো। 

এই বইটিতে প্রতিটা অধ্যায়ের সাথে থাকবে এআই মেন্টরের বিশ্লেষণ, কুইজ, কাস্টম প্র্যাকটিস এবং এসাইনমেন্ট চ্যালেঞ্জ। শুধু রিডিং পড়লেই হবে না, লার্নিং হবে প্র্যাক্টিক্যাল!`,
        en: `Welcome to BignanPro Academy! This is not just a tutorial site. It is a premium interactive programming book designed to demystify coding for absolute beginners.

We assume you have zero background in programming. We start from absolute ground zero and guide you step-by-step toward becoming a job-ready Full Stack Web Developer. 

Every chapter here features interactive code playgrounds, AI Mentor insights, quick quizzes, practice questions, and projects. Don't just read — code and interact!`,
      },
    },
    {
      id: "why-fullstack",
      title: {
        bn: "ফুল স্ট্যাক কী? (What is Full Stack?)",
        en: "What is Full Stack?",
      },
      content: {
        bn: `ওয়েব ডেভেলপমেন্টের জগতে আমরা যখন কোনো ওয়েবসাইট তৈরি করি, তখন মূলত দুটি মূল পার্ট থাকে:

1. **ফ্রন্টএন্ড (Frontend) বা ক্লায়েন্ট-সাইড**: যা ব্যবহারকারী স্ক্রিনে দেখতে পান। যেমন: ডিজাইন, বাটন, টেক্সট, অ্যানিমেশন। এটি ব্রাউজারে রান হয় (HTML, CSS, JavaScript দিয়ে তৈরি)।
2. **ব্যাকএন্ড (Backend) বা সার্ভার-সাইড**: যা পেছনে কাজ করে এবং ব্যবহারকারী সরাসরি দেখতে পান না। যেমন: ডেটাবেজ ম্যানেজমেন্ট, ইউজার অথেনটিকেশন, সিকিউরিটি এবং এপিআই (API)। এটি রিমোট সার্ভারে রান হয় (Node.js, Python, বা Go দিয়ে তৈরি)।

**ফুল স্ট্যাক ডেভেলপার (Full Stack Developer)** হলেন তিনি যিনি ফ্রন্টএন্ড এবং ব্যাকএন্ড—উভয় অংশের কাজই করতে পারেন। অর্থাৎ, একটি পূর্ণাঙ্গ ওয়েবসাইট একাই তৈরি করার ক্ষমতা রাখেন।`,
        en: `In web development, any application is divided into two primary halves:

1. **Frontend (Client-side)**: What the user interacts with directly on screen, such as layouts, buttons, colors, and graphics. Built with HTML, CSS, and JavaScript, it runs inside the user's browser.
2. **Backend (Server-side)**: The behind-the-scenes engine. It processes requests, manages databases, handles user authentication, and serves APIs. It runs on a remote server (using technologies like Node.js, Express, MongoDB, etc.).

A **Full Stack Developer** is a programmer who is competent in both frontend and backend development, meaning they can build entire applications end-to-end.`,
      },
      codeBlock: {
        fileName: "architecture.js",
        language: "javascript",
        code: `// ফুল স্ট্যাক অ্যাপ্লিকেশনের একটি অতি সরল রূপক উদাহরণ
const client = "ফ্রন্টএন্ড (Frontend) — ব্রাউজার";
const server = "ব্যাকএন্ড (Backend) — সার্ভার";
const database = "ডেটাবেজ (Database) — তথ্য ভান্ডার";

function userRequest(action) {
  console.log(\`ব্যবহারকারী \${client} এ ক্লিক করেছেন: \${action}\`);
  console.log(\`অনুরোধ পাঠানো হলো \${server} এর কাছে...\`);
  console.log(\`সার্ভার ডেটা নিয়ে আসছে \${database} থেকে...\`);
  return "সফল! ডেটা লোড হয়েছে।";
}

userRequest("প্রোফাইল দেখা");`,
        explanations: [
          {
            line: 2,
            text: {
              bn: "ক্লায়েন্ট বা ফ্রন্টএন্ড ভ্যারিয়েবল, যা ব্রাউজারকে নির্দেশ করে।",
              en: "The client-side (Frontend) variable, which represents the browser.",
            },
          },
          {
            line: 7,
            text: {
              bn: "এই ফাংশনটি দিয়ে একটি কাল্পনিক ইউজার রিকোয়েস্ট তৈরি করা হয়েছে, যা ফ্রন্টএন্ড থেকে সার্ভার এবং ডেটাবেজে যাচ্ছে।",
              en: "This function simulates a user request travelling from frontend to server, fetching from database.",
            },
          },
          {
            line: 12,
            text: {
              bn: "ফাংশনটি চালনা করা হচ্ছে ব্যবহারকারীর প্রোফাইল দেখার অনুরোধের মাধ্যমে।",
              en: "Triggering the simulated function request for viewing profile data.",
            },
          },
        ],
      },
      aiMentorNotes: {
        whyExists: {
          bn: "সফটওয়্যার তৈরিতে কাজ ভাগ করে নেওয়ার জন্য ক্লায়েন্ট-সার্ভার মডেল তৈরি হয়েছে। যদি পুরো হিসাব ব্রাউজারে হতো, তবে হ্যাকাররা সহজে সব ডেটা চুরি করতে পারতো।",
          en: "The client-server architecture isolates data logic from presentation. Putting all application database logic in the browser would create extreme security vulnerabilities.",
        },
        whyWorks: {
          bn: "জাভাস্ক্রিপ্ট ব্রাউজার (ক্লায়েন্ট) এবং নোড ডট জেএস (সার্ভার) দুই জায়গাতেই রান হতে পারে। তাই এটি দিয়ে খুব সহজে ফুল স্ট্যাক কাজ করা যায়।",
          en: "JavaScript is unique because it compiles inside web browsers (V8 engine) and runs on server environments (Node.js). Hence, a single language covers the entire stack.",
        },
        professionalThinking: {
          bn: "একজন পেশাদার ডেভেলপার কোড লেখার আগে চিন্তা করেন: 'এই কাজটি কি ব্রাউজারে হওয়া উচিত (ফ্রন্টএন্ড), নাকি সিকিউরিটির জন্য সার্ভারে হওয়া উচিত (ব্যাকএন্ড)?'",
          en: "Senior engineers think: 'Should this logic run client-side to decrease latency, or server-side to guarantee data safety?' Prioritize data validation on the server.",
        },
        mistakes: {
          bn: "নতুনরা প্রায়ই ভাবেন ব্যাকএন্ড ছাড়াই কেবল ফ্রন্টএন্ড দিয়ে ফেসবুকের মতো বড় অ্যাপ বানানো সম্ভব। আসলে ব্যাকএন্ড ও ডেটাবেজ ছাড়া কোনো ইউজারের ডেটা স্থায়ীভাবে সেভ রাখা যায় না।",
          en: "Beginners often build static sites and wonder why login credentials disappear on page refresh. Persistent state requires database integrations.",
        },
        debugging: {
          bn: "ব্রাউজারের কোড ভুল হলে Inspect Element এর Console এ দেখা যায়। কিন্তু সার্ভারের কোড ভুল হলে তা দেখতে হয় সার্ভার টার্মিনাল লগে।",
          en: "Inspect browser errors using DevTools Console. Inspect backend errors using server terminal outputs (e.g. nodemon or pm2 logs).",
        },
        performance: {
          bn: "ফ্রন্টএন্ডের ইমেজ ও কোড কম্প্রেস করে রাখা উচিত যাতে কম ইন্টারনেট স্পীডেও সাইট দ্রুত লোড হয়।",
          en: "Optimize frontend bundle assets (lazy loading, responsive images) for lightning fast first contentful paint.",
        },
      },
    },
    {
      id: "how-to-study",
      title: {
        bn: "কীভাবে পড়বেন? (How to Study)",
        en: "How to Study",
      },
      content: {
        bn: `এই বইটি পড়ার সময় নিচের ৪টি নিয়ম মেনে চললে আপনি সফল হবেনই:

1. **পড়ুন এবং বুঝুন**: শুধু লাইন মুখস্থ করবেন না। 'কেন' এই পদ্ধতি ব্যবহার করা হলো তা বোঝার চেষ্টা করুন।
2. **কোড প্র্যাকটিস করুন**: প্রতিটা কোড ব্লক নিজে টাইপ করে চালান। স্ক্রিনশট বা কপি-পেস্ট করে কোডিং শেখা যায় না। টাইপ করার সময় মেমরি মাসল তৈরি হয়।
3. **কুইজ দিন**: অধ্যায়ের শেষে কুইজে অংশ নিয়ে আপনার শেখার গভীরতা যাচাই করুন।
4. **এসাইনমেন্ট ও এআই মেন্টর**: এআই মেন্টরের টিপসগুলো মনোযোগ দিয়ে পড়ুন এবং এসাইনমেন্টগুলো সাবমিট করুন।`,
        en: `Follow these 4 study rules to maximize your progress:

1. **Understand 'Why'**: Never just memorize syntax. Focus on why a pattern exists and how it solves real problems.
2. **Type the Code**: Run the interactive code yourself. Copy-pasting doesn't build muscle memory. Actually typing the syntax trains your developer instincts.
3. **Test with Quizzes**: Participate in active recall using quizzes at the end of each module.
4. **Leverage AI Mentor & Projects**: Read the professional context sections carefully and complete the challenges.`,
      },
    },
    {
      id: "conclusion",
      title: {
        bn: "আমাদের লক্ষ্য (Our Goal)",
        en: "Our Goal",
      },
      content: {
        bn: `আমাদের লক্ষ্য হলো আপনাকে শুধু সিনট্যাক্স শেখানো নয়, বরং প্রফেশনালদের মতো চিন্তা করতে শেখানো। অধ্যায় ১ থেকে আমাদের মূল কোডিং জার্নি শুরু হচ্ছে। আপনি কি প্রস্তুত?`,
        en: `Our final goal is not to just teach syntax, but to teach you how to think like software engineers. Our actual coding adventure starts in Chapter 1. Are you ready?`,
      },
    },
  ],
  quizzes: [
    {
      id: "q1",
      question: {
        bn: "একজন ফুল স্ট্যাক ডেভেলপারের প্রধান কাজ কী?",
        en: "What is the primary role of a Full Stack Developer?",
      },
      options: [
        { bn: "শুধু ওয়েবসাইটের ডিজাইন তৈরি করা", en: "Only design layouts of websites" },
        { bn: "শুধু ডেটাবেজে তথ্য সেভ করা", en: "Only write query operations inside databases" },
        { bn: "ফ্রন্টএন্ড এবং ব্যাকএন্ড—উভয় অংশেরই কাজ করা", en: "Develop both client-side and server-side components" },
        { bn: "শুধুমাত্র এআই টুলস ব্যবহার করা", en: "Only write prompt structures in AI tools" },
      ],
      correctAnswerIndex: 2,
      explanation: {
        bn: "ফুল স্ট্যাক ডেভেলপার ফ্রন্টএন্ড (ইউজার ইন্টারফেস) এবং ব্যাকএন্ড (সার্ভার ও ডেটাবেজ) উভয় দিকের কাজেই পারদর্শী হন।",
        en: "Full Stack Developers are proficient in both frontend (user interface) and backend (server, API, database) architecture.",
      },
    },
    {
      id: "q2",
      question: {
        bn: "ওয়েবসাইটের কোন অংশটি ব্রাউজারের ভেতর সরাসরি রান হয়?",
        en: "Which part of a website runs directly inside the web browser?",
      },
      options: [
        { bn: "ব্যাকএন্ড (Backend)", en: "Backend" },
        { bn: "ফ্রন্টএন্ড (Frontend)", en: "Frontend" },
        { bn: "ডেটাবেজ (Database)", en: "Database" },
        { bn: "হার্ডওয়্যার সার্ভার (Hardware Server)", en: "Hardware Server" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ফ্রন্টএন্ড অংশটি (HTML, CSS, JavaScript) সরাসরি ব্রাউজার ইন্টারপ্রেট করে স্ক্রিনে প্রদর্শন করে।",
        en: "The frontend, written in HTML, CSS, and JS, is compiled and rendered locally in the user's browser client.",
      },
    },
  ],
  practice: [
    {
      bn: "ফ্রন্টএন্ড এবং ব্যাকএন্ডের ৩টি করে ভিন্ন টেকনোলজির তালিকা তৈরি করুন।",
      en: "List 3 separate technologies used in Frontend and 3 used in Backend development.",
    },
    {
      bn: "একটি ওয়েবসাইট ব্রাউজ করার পর পেজ লোড হওয়া পর্যন্ত কী কী ঘটে তা নিজের ভাষায় ব্যাখ্যা করুন।",
      en: "Describe in your own words what happens when you type a URL in the browser until the page renders.",
    },
  ],
  assignment: {
    title: {
      bn: "আপনার প্রথম প্রোফাইল পেজের স্থাপত্য পরিকল্পনা",
      en: "Architectural Plan for Your First Profile Page",
    },
    description: {
      bn: "একটি খাতা বা টেক্সট ফাইলে আপনার নিজের একটি কাল্পনিক পোর্টফোলিও ওয়েবসাইটের লেআউট আঁকুন। সেখানে কোন কোন জিনিস ফ্রন্টএন্ডে থাকবে আর কোন কোন কাজ ব্যাকএন্ডে হবে, তার একটি ফ্লো-চার্ট বা তালিকা তৈরি করুন।",
      en: "Sketch the visual layout of your personal portfolio website. Write down a list mapping which features will be client-side (Frontend) and which operations will be server-side (Backend).",
    },
    starterCode: `// Portfolio Architecture Plan
const myPortfolio = {
  owner: "Your Name",
  frontendFeatures: [
    // এখানে ফ্রন্টএন্ড ফিচারের তালিকা লিখুন
  ],
  backendFeatures: [
    // এখানে ব্যাকএন্ড ফিচারের তালিকা লিখুন
  ]
};`,
    solution: {
      code: `// Portfolio Architecture Reference Solution
const myPortfolio = {
  owner: "বিজ্ঞানপ্রো ছাত্র",
  frontendFeatures: [
    "সুন্দর প্রফেশনাল নেভিগেশন বার",
    "আমার কাজের প্রজেক্ট কার্ড গ্রিড লেআউট",
    "যোগাযোগ করার জন্য ফর্ম ইন্টারফেস"
  ],
  backendFeatures: [
    "কন্টাক্ট ফর্মের ইমেইল ডাটাবেজে সংরক্ষণ করা",
    "প্রজেক্টের তালিকা এপিআই (API) এর মাধ্যমে ফ্রন্টএন্ডে পাঠানো",
    "আমার ভিজিটরদের সংখ্যার ট্র্যাক রেকর্ড রাখা"
  ]
};`,
      explanation: {
        bn: "এখানে ফ্রন্টএন্ডে ব্যবহারকারী ইন্টারফেস দেখছেন আর ব্যাকএন্ডে ডেটা প্রসেসিং ও সেভ করার কাজ হচ্ছে। এটিই একটি আদর্শ ফুল স্ট্যাক আর্কিটেকচার।",
        en: "This separates UI visual displays (Frontend) from background persistent data operations (Backend), yielding a standard full-stack setup.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "ফ্রন্টএন্ড এবং ব্যাকএন্ডের মধ্যে প্রধান পার্থক্য কী?",
        en: "What is the primary difference between Frontend and Backend?",
      },
      ariaLabel: "interview-q-1",
      answer: {
        bn: "ফ্রন্টএন্ড হলো ক্লায়েন্ট-সাইড যা ব্রাউজারে রান হয় এবং ইউজার সরাসরি দেখতে ও ব্যবহার করতে পারেন। ব্যাকএন্ড হলো সার্ভার-সাইড যা ব্যাকগ্রাউন্ডে কাজ করে, ডেটাবেজের সাথে যোগাযোগ করে এবং ফ্রন্টএন্ডকে প্রয়োজনীয় ডেটা সরবরাহ করে।",
        en: "Frontend is the client-side which compiles in the browser and forms the visible UI. Backend is the server-side which handles security, database queries, and processes logic in the background.",
      },
    } as any,
    {
      question: {
        bn: "ডেটাবেজ (Database) কেন প্রয়োজন?",
        en: "Why do we need a Database?",
      },
      ariaLabel: "interview-q-2",
      answer: {
        bn: "ওয়েবসাইটে ইউজারদের যেকোনো গুরুত্বপূর্ণ তথ্য (যেমন: ইউজারনেম, পাসওয়ার্ড, স্টুডেন্ট প্রগ্রেস) স্থায়ীভাবে সংরক্ষণ করার জন্য ডেটাবেজ প্রয়োজন। ডেটাবেজ ছাড়া ব্রাউজার রিফ্রেশ করলে বা কম্পিউটার বন্ধ করলে সব তথ্য হারিয়ে যাবে।",
        en: "Databases provide persistent storage. Without databases, all site modifications, updates, and user states would be lost as soon as the client browser refreshes or the server resets.",
      },
    } as any,
  ],
};
