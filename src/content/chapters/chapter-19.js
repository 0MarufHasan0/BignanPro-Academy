export const chapter19Content = {
  id: "chapter-19",
  number: 19,
  title: {
    bn: "অধ্যায় ১৯: ডম ও ইভেন্টস — ব্রাউজার ইন্টারেক্টিভ লেয়ার",
    en: "Chapter 19: DOM & Events (Browser Interaction Layer)",
  },
  description: {
    bn: "ডকুমেন্ট অবজেক্ট মডেল (DOM) কী, কীভাবে এলিমেন্ট সিলেক্ট ও মডিফাই করা হয় এবং ইভেন্ট লিসেনারের সাহায্যে ডাইনামিক ইন্টারেক্টিভ ইউআই গড়ার সহজ পাঠ।",
    en: "Learn about the Document Object Model (DOM) tree, selecting query elements, modifying styles dynamically, handling user events, and building click actions.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "ডকুমেন্ট অবজেক্ট মডেল বা ডম (DOM) এর মূল অর্থ ও গঠন ভিজ্যুয়ালাইজ করতে পারা।",
      en: "Visualize the DOM tree structure and node representation.",
    },
    {
      bn: "কোড দিয়ে এইচটিএমএল উপাদান খুঁজে পেতে ডম সিলেক্টর (querySelector) ব্যবহার করা।",
      en: "Select specific HTML elements in memory using DOM query selectors.",
    },
    {
      bn: "জাভাস্ক্রিপ্ট দিয়ে বাটন টেক্সট, ব্যাকগ্রাউন্ড কালার ও ক্লাস ডাইনামিক্যালি আপডেট করা।",
      en: "Modify element content text and styles dynamically via JavaScript.",
    },
    {
      bn: "ইভেন্ট লিসেনারের (addEventListener) মাধ্যমে ক্লিকের মতো ইউজার অ্যাকশন ক্যাপচার করা।",
      en: "Listen and respond to user actions like click, input, and scroll events.",
    },
  ],
  sections: [
    {
      id: "what-is-dom-tree",
      title: {
        bn: "১. ডম কী ও ডম ট্রি কাঠামো (What is DOM & DOM Tree)",
        en: "1. What is DOM & DOM Tree",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা যখন জাভাস্ক্রিপ্টের ভ্যারিয়েবল বা কন্ডিশন শিখেছি, সেগুলো কিন্তু কম্পিউটারের ব্যাকগ্রাউন্ড মেমরিতে রান হয়েছে। কিন্তু আমরা কীভাবে জাভাস্ক্রিপ্টের সেই ভ্যালুগুলো দিয়ে ওয়েবসাইটের আসল হেডিংয়ের লেখা পালটে দেব বা বাটনের কালার চেঞ্জ করব? এর জন্য ব্রাউজার আমাদের একটি রাজপথ বা কানেকশন এপিআই দেয়। এই এপিআই-এর নাম হলো **DOM (Document Object Model)**।

## Why should I learn this? (কেন শিখবো?)
ফ্রন্টএন্ডের মূল সৌন্দর্যই হলো ইন্টারেক্টিভিটি। ডম ও ইভেন্ট হ্যান্ডলিং না জানলে আপনি কখনো কোনো রিয়েল ক্যালকুলেটর, সাইনআপ ফর্মের এরর মেসেজ পপ-আপ কিংবা ইকমার্সের কার্ট আপডেট লজিক ওয়েবসাইট স্ক্রিনে ফুটিয়ে তুলতে পারবেন না।

## What is the DOM? (ডম কী?)
সহজ কথায়: **DOM বা ডকুমেন্ট অবজেক্ট মডেল হলো ব্রাউজারের তৈরি করা একটি মেমরি ডাটা স্ট্রাকচার যা এইচটিএমএল পেজকে একটি উল্টো ফ্যামিলি ডিরেক্টরি গাছের মতো সাজায়, যাতে জাভাস্ক্রিপ্ট কোড দিয়ে প্রতিটি ট্যাগ অ্যাক্সেস ও এডিট করা যায়।**

*   **HTML বনাম DOM**: HTML হলো কেবল টেক্সটের কঙ্কাল (Skeleton), আর DOM হলো সেই কঙ্কালের জীবন্ত ডিজিটাল থ্রিডি রিপ্রেজেন্টেশন যা ব্রাউজারের মেমরিতে সচল থাকে।

---
## The DOM Tree Structure (ডম গাছের নোড)
ডম ট্রির প্রতিটি অংশকে এক একটি **নোড (Node)** বা ডাল বলা হয়:
*   \`Document\`: পুরো পেজটির মূল গোড়া (Root of all nodes)।
*   \`Element Nodes\`: এইচটিএমএল ট্যাগগুলো (যেমন \`<body>\`, \`<h1>\`, \`<button>\`)।
*   \`Text Nodes\`: ট্যাগের ভেতরের আসল লেখাগুলো।`,
        en: `## Introduction
Variables and conditions calculate values inside JavaScript memory spaces. To apply these calculations to client viewport visuals, you need the browser's DOM API.

## What is the DOM?
Document Object Model. An object representation of parsed HTML constructed in browser memory.

## The Tree Structure
Each HTML element parses into a node:
*   **Document**: Root entry point.
*   **Element nodes**: HTML tags (e.g., \`<div>\`, \`<button>\`).
*   **Text nodes**: The text content contained inside tags.`,
      },
    },
    {
      id: "selecting-elements",
      title: {
        bn: "২. এলিমেন্ট সিলেক্ট করার উপায় (Selecting DOM Elements)",
        en: "2. Selecting DOM Elements",
      },
      content: {
        bn: `## Selecting elements (এলিমেন্ট খুঁজে বের করা)
জাভাস্ক্রিপ্ট দিয়ে কোনো এলিমেন্ট পরিবর্তন করার পূর্বে ব্রাউজারকে ডম গাছ থেকে নির্দিষ্ট এলিমেন্টটি খুঁজে বের করে দিতে হবে। একে **এলিমেন্ট সিলেকশন (Element Selection)** বলে।

জাভাস্ক্রিপ্টে এলিমেন্ট সিলেক্ট করার জন্য দুটি প্রধান বিল্ট-ইন মেথড ব্যবহার করা হয়:

১. **document.getElementById(id)**:
   *   **কাজ**: এইচটিএমএল ট্যাগের নির্দিষ্ট ইউনিক আইডি ধরে সিলেক্ট করা।
   *   **কোড**:
       \`\`\`javascript
       const loginButton = document.getElementById("btn-login");
       \`\`\`
২. **document.querySelector(selector)**:
   *   **কাজ**: আধুনিক সিএসএস সিলেক্টর (যেমন: ক্লাস \`.class\` বা আইডি \`#id\`) ধরে যেকোনো উপাদান অত্যন্ত নমনীয়ভাবে সিলেক্ট করা।
   *   **কোড**:
       \`\`\`javascript
       const mainHeading = document.querySelector(".title-main"); // ক্লাস সিলেকশন
       const firstButton = document.querySelector("button");       // প্রথম বাটন সিলেকশন
       \`\`\``,
        en: `## DOM Selectors
Before updating a node, you must fetch its memory reference from the DOM tree.

## Methods:
*   \`document.getElementById("id")\`: Selects nodes possessing a matching unique ID string.
*   \`document.querySelector(".class-name")\`: Selects the first node matching standard CSS selector syntax (class, ID, or element tags).`,
      },
    },
    {
      id: "modifying-content-style",
      title: {
        bn: "৩. কন্টেন্ট এবং স্টাইল পরিবর্তন করা (Modifying Content & Styles)",
        en: "3. Modifying Content & Styles",
      },
      content: {
        bn: `## Modifying Content (লেখা পরিবর্তন করা)
এলিমেন্ট সিলেক্ট করার পর আমরা তার ভেতরের কন্টেন্ট নিমেষেই চেঞ্জ করে দিতে পারি:

*   **textContent**: এলিমেন্টের ভেতরের সরল টেক্সট বা লেখা এডিট করতে ব্যবহৃত হয়।
    - **কোড**:
      \`\`\`javascript
      const heading = document.querySelector("h1");
      heading.textContent = "কোড সফলভাবে আপডেট হয়েছে!";
      \`\`\`
*   **innerHTML**: এলিমেন্টের ভেতরে নতুন এইচটিএমএল ট্যাগসহ কন্টেন্ট ইনজেক্ট করতে ব্যবহৃত হয়।
    - **কোড**:
      \`\`\`javascript
      const container = document.querySelector(".container");
      container.innerHTML = "<p>নতুন প্যারাগ্রাফ যোগ হলো</p>";
      \`\`\`

---
## Modifying Styles (রং ও ডিজাইন পরিবর্তন করা)
জাভাস্ক্রিপ্ট দিয়ে আমরা সিএসএস স্টাইল সরাসরি এডিট করতে পারি:
*   **style property**:
    - **কোড**:
      \`\`\`javascript
      const box = document.querySelector(".box");
      box.style.backgroundColor = "blue"; // সিএসএস ব্যাকগ্রাউন্ড পরিবর্তন
      box.style.color = "white";            // লেখার কালার সাদা করা
      \`\`\`
    *ক্লু: সিএসএস-এর ড্যাশওয়ালা প্রপার্টি (যেমন: \`background-color\`) জাভাস্ক্রিপ্টে ক্যামেলকেস (CamelCase - \`backgroundColor\`) ডিক্লেয়ারেশন স্টাইলে লিখতে হয়।*`,
        en: `## Modifying Nodes
*   **textContent**: Modifies raw text strings inside a tag safely.
*   **innerHTML**: Injects nested HTML tags and structures directly inside container nodes.

## Modifying Stylings
Modify element styles directly via the style property. camelCase naming rules apply (e.g., \`backgroundColor\` instead of \`background-color\`). E.g., \`button.style.backgroundColor = "green";\`.`,
      },
    },
    {
      id: "what-are-events-listeners",
      title: {
        bn: "৪. ইভেন্ট এবং ইভেন্ট লিসেনার (What are Events & Listeners)",
        en: "4. What are Events & Listeners",
      },
      content: {
        bn: `## What is an Event? (ইভেন্ট কী?)
ওয়েবসাইটে ব্যবহারকারীর যেকোনো ধরণের কান্ডকারখানা বা অ্যাকশনকে **ইভেন্ট (Event)** বলা হয়।
*   **উদাহরণ**: বাটন ক্লিক করা (click), কী-বোর্ডে টাইপ করা (input), মাউস নাড়ানো (hover), পেজ স্ক্রোল করা (scroll), ফর্ম সাবমিট করা (submit)।

---
## What is an Event Listener? (ইভেন্ট লিসেনার কী?)
**ইভেন্ট লিসেনার (Event Listener)** হলো ওএসের সেই বিশেষ কান পেতে রাখা কোড যা অনবরত চেক করে ইউজার কোনো নির্দিষ্ট বাটন টিপলেন কিনা। যখনই ইভেন্ট ঘটে, সে সাথে সাথে একটি জাভাস্ক্রিপ্ট ফাংশন রান করিয়ে দেয়।

*   **সিনট্যাক্স**:
    \`\`\`javascript
    const myBtn = document.querySelector("button");

    myBtn.addEventListener("click", function() {
      console.log("বাটনে ক্লিক করা হয়েছে!");
      alert("অভিনন্দন! ডম ইভেন্ট সফলভাবে কাজ করছে।");
    });
    \`\`\`
*   \`addEventListener\` মূলত দুটি ইনপুট নেয়: প্রথমটি ইভেন্টের নাম (\`"click"\`) এবং দ্বিতীয়টি একটি অ্যাকশন ফাংশন যা ক্লিক করার পর ব্যাকগ্রাউন্ডে অটোমেটিক রান হবে।`,
        en: `## What is a User Event?
Any physical interaction made by users on viewport elements (e.g., click, input, scroll, submit).

## Event Listeners
Routines waiting for a target event to fire on a specific node, executing callback logic when triggered.

## Syntax:
\`\`\`javascript
button.addEventListener("click", () => {
  button.textContent = "Loading...";
});
\`\`\``,
      },
    },
    {
      id: "smart-house-analogy",
      title: {
        bn: "৫. স্মার্ট হাউস ও সুইচবোর্ড অ্যানালজি (Smart House Analogy)",
        en: "5. Smart House Analogy",
      },
      content: {
        bn: `## The Smart House Metaphor (স্মার্ট হাউস রূপক)
সম্পূর্ণ ডম ইন্টারেক্টিভিটি এবং ইভেন্ট সিস্টেমকে একটি মডার্ন স্মার্ট হোম অটোমেশনের সাথে মিলিয়ে নিন:
*   **স্মার্ট ঘরের দেয়াল ও লাইটের তারের সংযোগ**: ডম ট্রি (DOM Tree - যেখানে প্রতিটি বাল্ব ও ফ্যান মাদারবোর্ডে যুক্ত থাকে)।
*   **দেয়ালের ফিজিক্যাল কলিং বেল বা লাইটের সুইচ**: ইভেন্ট লিসেনার (Event Listener - যা স্পর্শ করার অপেক্ষায় কান পেতে বসে থাকে)।
*   **সুইচে আঙুলের চাপ দেওয়া**: ইভেন্ট ট্রিগার (Event Trigger - যেমন: click ইভেন্ট)।
*   **সুইচ চাপার পর লাইট জ্বলে ওঠা**: জাভাস্ক্রিপ্ট অ্যাকশন ও ডম এডিট (DOM change - বাল্বের ভেতরের স্টাইল অফ থেকে অন হওয়া!)।

---
## The Dynamic Web Interaction Loop (বাস্তব ইউজার লুপ)
\`\`\`
User Click ➔ Browser fires Event ➔ Listener catches click ➔ JS runs function ➔ DOM updates Node ➔ Visual UI Render
\`\`\``,
        en: `## Metaphor
*   **Wall Wires Routing to Bulbs**: DOM Tree.
*   **Wall Switch Buttons**: Event Listeners.
*   **User Pressing the Switch**: Event Trigger.
*   **Bulb Illuminating Room**: JavaScript modifying DOM node styles from off to active.`,
      },
      codeBlock: {
        fileName: "dom_interaction.js",
        language: "javascript",
        code: `// ডম সিলেকশন ও ইভেন্ট লিসেনারের লজিক্যাল সিমুলেটর
const browserDOM = {
  heading: { textContent: "বিজ্ঞানপ্রো বুক", style: { color: "black" } },
  button: { textContent: "ডার্ক মোড অন করুন", clickListener: null }
};

function addClickTrigger(node, callback) {
  node.clickListener = callback;
  console.log("👂 Event Listener: বাটনে ক্লিক লিসেনার যুক্ত করা হয়েছে।");
}

function simulateUserClick() {
  console.log("⚡ ইউজার: বাটনে ট্যাপ করলেন!");
  if (browserDOM.button.clickListener) {
    browserDOM.button.clickListener();
  }
}

// ৩. লাইভ ইন্টারেকশন কোড
addClickTrigger(browserDOM.button, function() {
  browserDOM.heading.textContent = "🌙 ডার্ক মোড সচল!";
  browserDOM.heading.style.color = "yellow";
  console.log("🎨 DOM: হেডিং টেক্সট ও কালার আপডেট করা হয়েছে!");
});

simulateUserClick();`,
        explanations: [
          {
            line: 7,
            text: {
              bn: "বাটন অবজেক্ট নোডে ক্লিক ইভেন্টের কলব্যাক অ্যাকশন সেট করে লিসেনার অন করা।",
              en: "Binding callback action to target node click properties.",
            },
          },
          {
            line: 20,
            text: {
              bn: "কলব্যাক ফাংশন ট্রিগার হলে হেডিং ডম অবজেক্টের টেক্সট ও সিএসএস কালার চেঞ্জ করা।",
              en: "Modifying text content and style attributes inside the handler body.",
            },
          },
        ],
      },
    },
    {
      id: "practice-dom-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার ডম কুয়েরি সিলেক্টরস এবং ইভেন্ট হ্যান্ডলারের লজিক পরিষ্কার করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your browser manipulation knowledge before writing full structural HTML documents in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "ডম ইভেন্ট বুঝলে আপনি রিয়েল-টাইমে যেকোনো ইকমার্স পেজের প্রোডাক্ট ফিল্টারিং, সাইডবার ওপেন ও পপ-আপ মেসেজ তৈরির ডাইনামিক কোড লিখতে পারবেন।",
          en: "Interactive websites respond instantly to inputs. Handling events enables fluid SaaS dashboard transitions.",
        },
        whyWorks: {
          bn: "ইভেন্ট লিসেনার মূলত ইভেন্ট বাবলিং (Event Bubbling) ও ক্যাপচারিং প্রসেস মেনে চাইল্ড নোড থেকে প্যারেন্ট নোডে ট্রাভেল করে।",
          en: "Events bubble up the DOM hierarchy from target leaf nodes to parent nodes, triggering matching listeners.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা একই বাটনে বারবার নতুন লিসেনার অ্যাড না করে ইভেন্ট ডেলিগেশন (Event Delegation) টেকনিক ব্যবহার করে প্যারেন্ট ফোল্ডার থেকে ট্র্যাকিং কন্ট্রোল করেন।",
          en: "Seniors optimize memory footprint by using Event Delegation, registering a single listener on parent containers.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো স্ক্রিনে এলিমেন্ট তৈরি হওয়ার আগেই স্ক্রিপ্ট রান করানো, ফলে 'Cannot read properties of null (reading querySelector)' এরর আসে।",
          en: "Executing DOM selectors before HTML loads yields 'null reference errors'. Place scripts at the end of the body.",
        },
        debugging: {
          bn: "কনসোলে ইভেন্ট ট্র্যাক করতে ইভেন্ট অবজেক্ট 'e' (যেমন: \`e.target\`) প্রিন্ট করে চেক করুন কোন নির্দিষ্ট উপাদানে ক্লিক পড়েছে।",
          en: "Inspect event targets by logging 'e.target' inside the listener callback context.",
        },
        performance: {
          bn: "স্ক্রোল (scroll) বা রিসাইজ (resize) ইভেন্টের পারফরম্যান্স ঠিক রাখতে ডিবouncing (Debouncing) বা থ্রটলিং (Throttling) কোড মেকানিজম ব্যবহার করুন।",
          en: "Throtle heavy events (like scroll/input) using debounce helpers to bypass redundant layout calculation cycles.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "dm-q1",
      question: {
        bn: "ডকুমেন্ট অবজেক্ট মডেল (DOM) কী?",
        en: "What is the Document Object Model (DOM)?",
      },
      options: [
        { bn: "একটি কোড এডিটিং সফটওয়্যার", en: "A text editor compiler" },
        {
          bn: "এইচটিএমএল পেজের অবজেক্ট নোড ট্রি কাঠামো যা জাভাস্ক্রিপ্ট দিয়ে এডিট করা যায়",
          en: "An object node tree of the HTML document accessible by JavaScript",
        },
        { bn: "একটি ডেটাবেজ সার্ভার লিঙ্ক", en: "A remote database endpoint" },
        {
          bn: "কম্পিউটারের গ্রাফিক্স চিপসেট",
          en: "A physical graphics processor",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডম হলো এইচটিএমএল কোডের একটি মেমরি অবজেক্ট ট্রি রিপ্রেজেন্টেশন যা ব্রাউজারকে ডাইনামিক করতে সাহায্য করে।",
        en: "The DOM exposes layout nodes as programmable objects inside JS contexts.",
      },
    },
    {
      id: "dm-q2",
      question: {
        bn: "সিএসএস ক্লাস সিলেক্টর ধরে কোনো ডম এলিমেন্ট সিলেক্ট করার সেরা মেথড কোনটি?",
        en: "Which method selects DOM elements using standard CSS classes?",
      },
      options: [
        { bn: "document.getElementById", en: "document.getElementById" },
        { bn: "document.querySelector", en: "document.querySelector" },
        { bn: "document.write", en: "document.write" },
        { bn: "window.alert", en: "window.alert" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "querySelector মেথড সিএসএস ডট বা আইডি হ্যাশ ধরে যেকোনো এলিমেন্ট নমনীয়ভাবে সিলেক্ট করতে পারে।",
        en: "querySelector evaluates standard class selectors (e.g., '.active') to locate nodes.",
      },
    },
    {
      id: "dm-q3",
      question: {
        bn: "সিএসএস 'background-color' প্রপার্টি জাভাস্ক্রিপ্টে পরিবর্তন করার সঠিক নাম কোনটি?",
        en: "How is the CSS 'background-color' property written in JavaScript?",
      },
      options: [
        { bn: "background-color", en: "background-color" },
        {
          bn: "backgroundColor (ক্যামেলকেস)",
          en: "backgroundColor (camelCase)",
        },
        { bn: "bg-color", en: "bg-color" },
        { bn: "styleBackground", en: "styleBackground" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "জাভাস্ক্রিপ্টে সিএসএস ড্যাশ প্রপার্টি ক্যামেলকেস (যেমন: backgroundColor) ডিক্লেয়ারেশন হিসেবে লিখতে হয়।",
        en: "JavaScript styles properties drop hyphens, converting style attributes to camelCase naming patterns.",
      },
    },
    {
      id: "dm-q4",
      question: {
        bn: "বাটন ক্লিক করা বা কী-বোর্ডে টাইপ করার মতো ইউজারের শারীরিক অ্যাকশনকে কোডিংয়ে কী বলে?",
        en: "What are physical user actions on viewport elements called?",
      },
      options: [
        { bn: "Variables", en: "Variables" },
        { bn: "Events (ইভেন্ট)", en: "Events" },
        { bn: "Functions", en: "Functions" },
        { bn: "Root Nameservers", en: "Root Nameservers" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ইউজারের যেকোনো ইন্টারেকশন অ্যাকশনকে ব্রাউজারে ইভেন্ট (click, input, submit) বলা হয়।",
        en: "Events represent user interactions queued by the browser event loop.",
      },
    },
    {
      id: "dm-q5",
      question: {
        bn: "ইভেন্ট ঘটার পর নির্দিষ্ট অ্যাকশন রান করানোর জন্য কোন মেথডটি ডম এলিমেন্টে বাইন্ড করতে হয়?",
        en: "Which method binds callback actions to target nodes?",
      },
      options: [
        { bn: "document.select", en: "document.select" },
        { bn: "addEventListener", en: "addEventListener" },
        { bn: "console.log", en: "console.log" },
        { bn: "git commit", en: "git commit" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "addEventListener মেথড ইভেন্টের নাম ও কলব্যাক ফাংশন ইনপুট নিয়ে লিসেনার সচল রাখে।",
        en: "addEventListener listens to specific events, dispatching target handlers when fired.",
      },
    },
  ],
  practice: [
    {
      bn: "আইডি 'btn-save' যুক্ত একটি বাটন জাভাস্ক্রিপ্ট দিয়ে সিলেক্ট করার কোড লিখুন।",
      en: "Write JS selector code to select a button possessing the ID 'btn-save'.",
    },
    {
      bn: "একটি হেডিং এলিমেন্ট সিলেক্ট করে তার ভেতরের টেক্সট পরিবর্তন করে 'Welcome' লেখার ১ লাইনের কোড লিখুন।",
      en: "Write a JS command updating an h1 heading element's text to 'Welcome'.",
    },
    {
      bn: "বাটনে ক্লিক করলে তার ব্যাকগ্রাউন্ড কালার লাল (red) হয়ে যাবে—এমন ১টি সহজ ইভেন্ট লিসেনার কোড লিখুন।",
      en: "Draft a click event listener script changing a selected button's style background to red.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি ইন্টারেক্টিভ কাউন্টার অ্যাপ্লিকেশন লজিক",
      en: "Interactive Counter Application Logic Design",
    },
    description: {
      bn: "একটি প্লাস বাটন ও টেক্সট কাউন্টার নোড সিলেক্ট করুন। বাটনে ক্লিক করলে কাউন্টার ভ্যালু ১ করে বাড়বে এবং টেক্সট নোডে রিয়েল-টাইমে ডিসপ্লে আপডেট হবে—এমন একটি সিমুলেটেড কনফিগারেশন অবজেক্ট তৈরি করে সাবমিট করুন।",
      en: "Model a click counter application workflow inside a JS object, defining elements selectors, count variables, click handlers, and text updates.",
    },
    starterCode: `// Click Counter Interaction Schema
const counterApp = {
  counterValue: 0,
  btnSelector: "#btn-increment",
  displaySelector: ".counter-display",
  
  // ক্লিক হ্যান্ডলার অ্যাকশন ফাংশন
  handleIncrementClick: function() {
    // লজিক লিখুন: কাউন্টার ১ বাড়িয়ে ডিসপ্লে টেক্সট এডিট করুন
  }
};`,
    solution: {
      code: `// Click Counter Pipeline Active
const counterApp = {
  counterValue: 0,
  btnSelector: "#btn-increment",
  displaySelector: ".counter-display",
  handleIncrementClick: function() {
    this.counterValue += 1;
    // mock DOM update simulation
    const displayNode = { textContent: this.counterValue };
    console.log("🎨 DOM: ডিসপ্লে কন্টেন্ট আপডেট করা হয়েছে: " + displayNode.textContent);
    return displayNode.textContent;
  }
};

counterApp.handleIncrementClick(); // returns 1`,
      explanation: {
        bn: "চমৎকার কাউন্টার লজিক! ক্লিক ইভেন্টে কাউন্টার ভেরিয়েবলের মান ১ বাড়ানো এবং ডম অবজেক্টের টেক্সট কন্টেন্ট সাকসেসফুলি রেন্ডার করার পুরো প্রসেস ফ্লোটি নিখুঁত হয়েছে।",
        en: "Evaluating counter increments models how frameworks manage reactive states and re-render display nodes.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "ডম সিলেকশনের ক্ষেত্রে querySelector এবং getElementById এর মধ্যে পারফরম্যান্স ও নমনীয়তার পার্থক্য কী?",
        en: "Compare querySelector and getElementById in terms of performance and flexibility.",
      },
      answer: {
        bn: "১. **নমনীয়তা (Flexibility)**: \`querySelector\` অত্যন্ত নমনীয় কারণ এটি সিএসএসের যেকোনো সিলেক্টর প্যাটার্ন (যেমন: ক্লাস \`.class\`, আইডি \`#id\`, নেস্টেড \`div > p.text\`) সাপোর্ট করে। আর \`getElementById\` কেবল আইডি স্ট্রিং সিলেক্ট করতে পারে।\n২. **পারফরম্যান্স (Performance)**: \`getElementById\` পারফরম্যান্সের দিক থেকে কিছুটা দ্রুত চলে কারণ ব্রাউজার ইঞ্জিন ডম গাছের আইডি হ্যাশম্যাপ টেবিল থেকে সরাসরি নোডটি ইনস্ট্যান্ট রিটার্ন করতে পারে। \`querySelector\` কে সিএসএস সিলেক্টর পার্সিং ইঞ্জিনের সাহায্য নিয়ে ডম নোড ট্রাভার্স করতে হয়, যা সামান্য বেশি সিপিইউ সাইকেল নেয়। তবে আধুনিক প্রজেক্টে এই স্পিড তফাৎ এতটাই নগণ্য যে নমনীয়তার জন্য querySelector বেশি জনপ্রিয়।",
        en: "1. **Flexibility**: \`querySelector\` supports all standard CSS selectors (classes, tags, pseudo-classes, nested chains), whereas \`getElementById\` is restricted to simple ID strings.\n2. **Performance**: \`getElementById\` evaluates slightly faster because layout engines execute direct lookups on ID hash-maps. \`querySelector\` utilizes selector engines to traverse nodes, incurring minor CPU overhead. However, in modern web applications, the difference is negligible, making querySelector the industrial standard for convenience.",
      },
    },
    {
      question: {
        bn: "জাভাস্ক্রিপ্টে টেক্সট পরিবর্তনের ক্ষেত্রে textContent এবং innerHTML এর ব্যবহারের মধ্যে মূল সিকিউরিটি পার্থক্য কী?",
        en: "What is the security difference between using textContent and innerHTML in JavaScript?",
      },
      answer: {
        bn: "১. **textContent**: এটি যেকোনো ইনপুটকে সরল টেক্সট স্ট্রিং হিসেবে ডমে রাইট করে। আপনি যদি এর ভেতর \`<h1>Hello</h1>\` ও লেখেন, সে স্ক্রিনে ট্যাগ হিসেবে রেন্ডার না করে টেক্সট হিসেবেই ছেপে দেবে। এটি সম্পূর্ণ নিরাপদ।\n২. **innerHTML**: এটি ইনপুট স্ট্রিংকে এইচটিএমএল ট্যাগ হিসেবে পার্স করে রেন্ডার করে। ইউজার ইনপুট বক্সের ডাটা সরাসরি innerHTML দিয়ে ডিসপ্লে করা চরম অনিরাপদ, কারণ হ্যাকাররা ইনপুট বক্সে ক্ষতিকর জাভাস্ক্রিপ্ট স্ক্রিপ্ট ট্যাগ (যেমন: \`<script>stealCookie()</script>\`) ইনজেক্ট করে দিতে পারেন, যা ব্রাউজারে রান হয়ে ডাটা চুরি করবে। একে **XSS (Cross-Site Scripting)** অ্যাটাক বলা হয়। তাই নিরাপদ কোডিংয়ে textContent ব্যবহার করা উচিত।",
        en: "1. **textContent**: Writes plaintext strings. Script characters are encoded, preventing browser execution. It is highly secure for user-generated contents.\n2. **innerHTML**: Parses strings as structural HTML markup. Using it to print raw user inputs exposes applications to **XSS (Cross-Site Scripting)** vulnerabilities. Attackers can submit malicious script blocks (e.g., \`<script>...</script>\`) that execute in visitors' browsers, compromising authentication tokens.",
      },
    },
  ],
};
