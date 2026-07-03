export const chapter11Content = {
  id: "chapter-11",
  number: 11,
  title: {
    bn: "অধ্যায় ১১: ব্রাউজার ফান্ডামেন্টালস — কীভাবে ওয়েবসাইট স্ক্রিনে ফুটে ওঠে",
    en: "Chapter 11: Browser Fundamentals (How Websites Render)",
  },
  description: {
    bn: "ব্রাউজার কীভাবে এইচটিএমএল, সিএসএস ও জাভাস্ক্রিপ্ট প্রসেস করে ডম (DOM) ট্রি তৈরি করে এবং ওয়েবসাইট স্ক্রিনে রেন্ডার করে।",
    en: "Learn how browsers fetch web assets, parse HTML into Document Object Models (DOM), compile CSS, execute Javascript scripts, and render pixels.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "ব্রাউজারকে কেবল ইন্টারনেট ভিউয়ার না ভেবে এটি কীভাবে কোডকে স্ক্রিনে রেন্ডার করে তা চেনা।",
      en: "Understand how the browser acts as a runtime engine converting code text into visible interfaces.",
    },
    {
      bn: "এইচটিএমএল, সিএসএস এবং জাভাস্ক্রিপ্টের আলাদা আলাদা দায়িত্বগুলো মানুষের শরীরের রূপক দিয়ে বোঝা।",
      en: "Comprehend the roles of HTML, CSS, and JS using the human body analogy.",
    },
    {
      bn: "ডম (DOM - Document Object Model) কীভাবে ফ্যামিলি ট্রির মতো কাজ করে তা জানা।",
      en: "Learn what the DOM is and visualize it as a structured family tree of elements.",
    },
    {
      bn: "ব্রাউজার ইঞ্জিন (Blink/Gecko) কীভাবে পেজ লোড প্রসেস সম্পন্ন করে তা বিস্তারিত শেখা।",
      en: "Trace the page loading and rendering lifecycle processed by browser layout engines.",
    },
  ],
  sections: [
    {
      id: "what-is-browser-flow",
      title: {
        bn: "১. ব্রাউজার কী ও কাজ করার ধাপসমূহ (What is a Browser & Flow)",
        en: "1. What is a Browser & Flow",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা যখন ক্রোম, ফায়ারফক্স বা সাফারি ওপেন করে কোনো অ্যাড্রেস টাইপ করি, মুহূর্তের মধ্যেই আমাদের সামনে ছবি, লেখা ও চমৎকার সব বাটন ফুটে ওঠে। কিন্তু এই ব্রাউজার আসলে কী করে? এটি কি কেবল ইন্টারনেট ওপেন করার বাটন? না, ব্রাউজার হলো মূলত একটি শক্তিশালী অনুবাদক বা কম্পাইলার যা জটিল কোডকে ভিজ্যুয়াল স্ক্রিনে রূপান্তর করে।

## Why should I learn this? (কেন শিখবো?)
ফ্রন্টএন্ড ডেভেলপার হিসেবে আপনার মূল কাজই হবে ব্রাউজারের ওপরে। ব্রাউজার কীভাবে ফাইল প্রসেস করে এবং কেন আপনার সিএসএস অনেক সময় স্ক্রিনে দেরিতে লোড হয় তা জানা থাকলে আপনি ফাস্ট ও অপ্টিমাইজড ইউজার ইন্টারফেস (UI) ডিজাইন করতে পারবেন।

## What is a Browser? (ব্রাউজার কী?)
সহজ কথায়: **ব্রাউজার হলো এমন একটি সফটওয়্যার অ্যাপ্লিকেশন যা ইন্টারনেটে থাকা বিভিন্ন ওয়েব ফাইলের কোড (HTML, CSS, JS) সার্ভার থেকে রিড করে আমাদের সামনে একটি দৃশ্যমান ওয়েবসাইট হিসেবে ফুটিয়ে তোলে।**

*   **উদাহরণ**: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari।
*   **রূপক**: ব্রাউজার হলো আপনার টিভির মতো। তারের মাধ্যমে (ইন্টারনেট) টিভির পেছনে যে ডিজিটাল সিগন্যাল আসছে, টিভি সেই সিগন্যালকে ডিকোড করে আপনার সামনে সুন্দর ভিডিও ও ছবি হিসেবে দেখাচ্ছে।

## The Browser Request Flow (ব্রাউজার কাজের ৩টি ধাপ)
১. **রিকোয়েস্ট (Request)**: আপনি ইউআরএল লিখলে ব্রাউজার সার্ভারে রিকোয়েস্ট পাঠিয়ে ফাইল নিয়ে আসে।
২. **অনুবাদ (Parsing)**: ব্রাউজার এইচটিএমএল, সিএসএস ও জেএস ফাইলগুলো রিড করে ডেকোরেট করে।
৩. **রেন্ডারিং (Rendering)**: কোডকে পিক্সেলে রূপান্তর করে আপনার স্ক্রিনে ফুটিয়ে তোলে।`,
        en: `## Introduction
Browsers compile text codes into visual layout matrices. To build highly responsive interfaces, you must trace the rendering cycle.

## What is a Browser?
A client software program that fetches HTML files, style configurations, and scripts from servers, translating bytecode structures into visual interfaces.

## Pipeline:
"URL Input ➔ Fetch Assets (HTML/CSS/JS) ➔ Parse and Build DOM ➔ Render Layout ➔ Paint Pixels"`,
      },
    },
    {
      id: "html-css-js-role",
      title: {
        bn: "২. এইচটিএমএল, সিএসএস ও জাভাস্ক্রিপ্টের ট্রায়ো (HTML, CSS & JS Roles)",
        en: "2. HTML, CSS & JS Roles",
      },
      content: {
        bn: `## The Web Trinity (তিনটি মূল হাতিয়ার)
একটি ওয়েবসাইট তৈরির পেছনে তিনটি প্রধান প্রযুক্তি একসাথে কাজ করে:

১. **HTML (Structure)**: এর পূর্ণরূপ হলো **HyperText Markup Language**। এর কাজ হলো পেজের মূল কাঠামো তৈরি করা। যেমন: হেডিং, টেক্সট বক্স, ইমেজ ও বাটনের অবজেক্ট প্লেস করা।
২. **CSS (Style)**: এর পূর্ণরূপ হলো **Cascading Style Sheets**। এর কাজ হলো পেজটিকে সুন্দর করা। যেমন: কালার দেওয়া, ফন্ট স্টাইল ঠিক করা, স্পেসিং ও পজিশনিং ঠিক করা।
৩. **JavaScript (Interaction)**: এটি হলো প্রোগ্রামিং ল্যাঙ্গুয়েজ। এর কাজ হলো ওয়েবসাইটকে সচল ও ইন্টারেক্টিভ করা। যেমন: বাটনে ক্লিক করলে পপ-আপ খোলা, এপিআই থেকে লাইভ ডাটা লোড করা ও অ্যানিমেশন করা।

---
## The Complete Human Body Analogy (মানুষের শরীরের রূপক)
আসুন একটি ওয়েবসাইটকে একজন মানুষের সাথে তুলনা করে এদের কাজ বুঝে নিই:
*   **HTML হলো কঙ্কাল (Skeleton)**: যা মানুষের হাড়ের কাঠামো বা বেস তৈরি করে। কঙ্কাল ছাড়া মানুষের কোনো স্ট্রাকচার থাকবে না। (ওয়েবসাইটের কাঠামো)
*   **CSS হলো পোশাক ও চেহারা (Clothes & Skin)**: যা মানুষের গায়ের রং, চুলের স্টাইল এবং সুন্দর জামাকাপড় নির্ধারণ করে। এটি কঙ্কালকে ঢেকে আকর্ষক করে তোলে। (ওয়েবসাইটের ডিজাইন)
*   **JavaScript হলো মস্তিষ্ক ও পেশী (Brain & Muscle)**: যা মানুষের হাত-পা নড়াচড়া করা, চিন্তা করা ও কথা বলার ক্ষমতা দেয়। বাটন ক্লিক করলে কী একশন হবে তা জাভাস্ক্রিপ্ট মস্তিষ্ক ঠিক করে। (ওয়েবসাইটের ফাংশন)`,
        en: `## The Frontend Core Stack
*   **HTML**: Structural markup declaring elements (buttons, inputs, tables). E.g., The skeleton.
*   **CSS**: Style configurations defining colors, spacing, and grid layouts. E.g., Clothes and styling.
*   **JavaScript**: Programming logic animating pages and handling events. E.g., The brain and muscles.`,
      },
    },
    {
      id: "rendering-process-dom",
      title: {
        bn: "৩. রেন্ডারিং কী ও ডম (DOM - Document Object Model) ট্রি",
        en: "3. DOM & Rendering",
      },
      content: {
        bn: `## What is Rendering? (রেন্ডারিং কী?)
কোড ফাইলকে প্রসেস করে ফিজিক্যাল পিক্সেলে রূপান্তর করে মনিটরে দৃশ্যমান করার পুরো প্রক্রিয়াকে প্রোগ্রামিংয়ের ভাষায় **রেন্ডারিং (Rendering)** বলা হয়।

---
## What is DOM? (ডম কী?)
আমরা যখন কোড ফাইলে এইচটিএমএল লিখি, ব্রাউজার সেটি সরাসরি রিড করতে পারে না। ব্রাউজার ফাইলটি ওপেন করে প্রতিটি ট্যাগকে (যেমন: \`<body>\`, \`<h1>\`, \`<button>\`) এক একটি অবজেক্ট নোড বা ডাল হিসেবে সাজায়। এই কাঠামোকে **DOM (Document Object Model)** বলা হয়।

ডম দেখতে একটি চমৎকার পারিবারিক ফ্যামিলি ট্রির (Family Tree) মতো:
*   **রুট নোড**: \`<html>\` (দাদা-দাদী)
*   **চাইল্ড নোড**: \`<head>\` ও \`<body>\` (বাবা-মা)
*   **গ্র্যান্ডচাইল্ড নোড**: \`<body>\` এর ভেতরে থাকা \`<h1>\` বা \`<p>\` (ভাই-বোন)

জাভাস্ক্রিপ্ট এই ডম ট্রি ব্যবহার করেই খুব সহজে যেকোনো ডাল বা নোডের লেখা পরিবর্তন করতে পারে, বাটন রিমুভ করতে পারে বা নতুন কার্ড ডাইনামিকালি অ্যাড করতে পারে!`,
        en: `## DOM: Document Object Model
The browser builds a memory tree representations of HTML nodes, organized like a family tree:
*   Root parent: \`<html>\`
*   Direct children: \`<head>\` and \`<body>\`
*   Grandchildren: \`<h1>\`, \`<p>\`, and \`<button>\` tags inside the body container.

## Rendering Definition
Converting HTML DOM nodes combined with CSS rules (CSSOM) into geometric visual layouts (Render Tree) painted on device displays.`,
      },
    },
    {
      id: "page-load-stages",
      title: {
        bn: "৪. পেজ লোড হওয়ার ধাপে ধাপে ক্রমানুসার (Page Load Execution Stages)",
        en: "4. Page Load Execution Stages",
      },
      content: {
        bn: `## Step-by-Step Page Loading (ওয়েবসাইট খোলার ৫টি ধাপ)
একটি ব্রাউজার যখন সার্ভার থেকে ফাইল পায়, তখন সেটি ক্রমানুসারে রান করে:

১. **HTML ডাউনলোড ও পার্স**: ব্রাউজার প্রথমে HTML টেক্সট ফাইল পড়া শুরু করে এবং উপর থেকে নিচ পর্যন্ত ডম (DOM) তৈরি করতে থাকে।
২. **CSS ব্লক ও CSSOM**: লাইনের মাঝে যখনই ব্রাউজার সিএসএস ফাইল লিঙ্ক পায়, সে তা ডাউনলোড করে সিএসএস অবজেক্ট মডেল (CSSOM) তৈরি করে।
৩. **রেন্ডার ট্রি (Render Tree)**: ডম এবং সিএসএসওএম জোড়া দিয়ে তৈরি হয় রেন্ডার ট্রি—যেখানে কেবল স্ক্রিনে দৃশ্যমান হওয়ার উপযোগী উপাদানগুলোই থাকে। (যেমন: \`display: none\` করা অংশগুলো বাদ পড়ে)।
৪. **লেআউট হিসাব (Layout)**: ব্রাউজার স্ক্রিনের সাইজ (মোবাইল নাকি ল্যাপটপ) মেপে প্রতিটি বক্স ও বাটনের সঠিক পজিশন ও সাইজ মিলিমিটারে ক্যালকুলেট করে।
৫. **পেন্টিং (Painting)**: সবশেষে ব্রাউজার গ্রাফিক্স প্রসেসর (GPU) ব্যবহার করে স্ক্রিনে পিক্সেলের রং ছড়িয়ে ওয়েবসাইট ভিজ্যুয়ালি ফুটিয়ে তোলে।

যদি লাইনের মাঝে জাভাস্ক্রিপ্ট স্ক্রিপ্ট আসে, ব্রাউজার রেন্ডারিং পজ করে প্রথমে স্ক্রিপ্ট রান করে, যার কারণে পেজ লোড হতে একটু দেরি হতে পারে। তাই ওএস ও ব্রাউজার অপ্টিমাইজ করতে জেএস ফাইল পেজের একদম নিচে লিঙ্ক করতে হয়!`,
        en: `## Critical Rendering Path
1. **DOM Tree Creation**: Parsing HTML document structure.
2. **CSSOM Tree Creation**: Translating style attributes.
3. **Render Tree Assembly**: Merging DOM and CSSOM structures.
4. **Layout Calculations**: Resolving size coordinates relative to display sizes.
5. **Painting Pixels**: Displaying pixels on screen via GPU.`,
      },
      codeBlock: {
        fileName: "dom_render.js",
        language: "javascript",
        code: `// ডম নোড ও রেন্ডারিং সিমুলেটর
const mockDOM = {
  tagName: "body",
  children: [
    { tagName: "h1", text: "বিজ্ঞানপ্রো একাডেমিতে স্বাগতম!", color: "blue" },
    { tagName: "button", text: "কোর্স শুরু করুন", color: "green" }
  ]
};

function renderHTML(node) {
  console.log(\`🔨 রেন্ডার ট্রি প্রসেস হচ্ছে: <\${node.tagName}>\`);
  
  node.children.forEach(child => {
    console.log(\`🎨 পিক্সেল পেইন্ট করা হচ্ছে: \`);
    console.log(\`   [এলিমেন্ট]: <\${child.tagName}>\`);
    console.log(\`   [টেক্সট]: "\${child.text}"\`);
    console.log(\`   [কালার]: \${child.color}\`);
  });
  
  console.log("🚀 মনিটর স্ক্রিন: রেন্ডারিং সম্পূর্ণ হয়েছে!");
}

renderHTML(mockDOM);`,
        explanations: [
          {
            line: 2,
            text: {
              bn: "কাল্পনিক ডম গাছের বডি নোড যার চিলড্রেন নোড হিসেবে হেডিং ও বাটন আছে।",
              en: "Mock document object tree with root and child layers.",
            },
          },
          {
            line: 10,
            text: {
              bn: "রেন্ডারিং লুপ প্রতিটি ডম নোডকে তার সিএসএস কালার প্রপার্টি দিয়ে স্ক্রিনে ড্র করে।",
              en: "Rendering loop translating elements and style colors into paint cycles.",
            },
          },
        ],
      },
    },
    {
      id: "browser-engines",
      title: {
        bn: "৫. ব্রাউজার ইঞ্জিন পরিচিতি (Inside Browser Engines)",
        en: "5. Inside Browser Engines",
      },
      content: {
        bn: `## The Engine: Browser Engine (ব্রাউজার ইঞ্জিন কী?)
প্রতিটি ব্রাউজারের নিচে একটি শক্তিশালী কোডিং ইঞ্জিন থাকে, যা ওএস লাইব্রেরি ব্যবহার করে কোড প্রসেস করে।

ইঞ্জিনের উদাহরণ:
*   **Blink (Chrome/Edge)**: গুগলের তৈরি করা ইঞ্জিন যা অত্যন্ত ফাস্ট রেন্ডারিং স্পিড দেয়।
*   **Gecko (Firefox)**: মজিলা টিমের শক্তিশালী ইঞ্জিন।
*   **WebKit (Safari)**: অ্যাপলের লাইটওয়েট এবং সিকিউর ব্রাউজার ইঞ্জিন।

ইঞ্জিনের মূল কাজ হলো এইচটিএমএল রিড করা এবং আপনার জাভাস্ক্রিপ্ট কোডকে প্রসেসর চিপের সিগন্যালে কনভার্ট করে দ্রুত রান করানো।`,
        en: `## Browser Engines
Layout engines process raw codes into graphic representations on screen:
*   **Blink**: Powers Google Chrome, Microsoft Edge, and Opera.
*   **WebKit**: Powers Apple Safari and all iOS browsers.
*   **Gecko**: Powers Mozilla Firefox.`,
      },
    },
    {
      id: "practice-browser-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার ব্রাউজার রেন্ডারিং এবং ডম (DOM) প্রপার্টিস সম্পর্কে ধারণা পরিষ্কার করবে।`,
        en: `## Reflection & Lab Tasks
Solidify rendering mechanics concepts before diving into frontend code syntax.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "ব্রাউজারের রেন্ডারিং পাইপলাইন জানলে আপনি বুঝতে পারবেন কীভাবে রিফ্লো (Reflow) এবং রিপেইন্ট (Repaint) কমিয়ে ফাস্ট ইউজার এক্সপেরিয়েন্স তৈরি করা যায়।",
          en: "Understanding layout cycles helps you minimize reflow calculations, preventing frame lags during user scrolls.",
        },
        whyWorks: {
          bn: "জাভাস্ক্রিপ্ট ইঞ্জিন (যেমন V8) কোড সরাসরি কম্পাইল করে লোকাল মেশিন ল্যাঙ্গুয়েজে রূপান্তর করে দ্রুত অ্যাকশন সম্পন্ন করায়।",
          en: "V8 translates JavaScript scripts into bytecode at runtime using Just-in-Time (JIT) compilation techniques.",
        },
        professionalThinking: {
          bn: "সিনিয়র ডেভেলপাররা অপ্রয়োজনীয় ডম নোড কমান এবং সিএসএস ক্লাস চেঞ্জ করে রেন্ডারিং ও পেইন্টিং স্পিড অপ্টিমাইজ করেন।",
          en: "Seniors batch layout edits together inside animations requests to prevent layout thrashing.",
        },
        mistakes: {
          bn: "বিগিনাররা স্ক্রিপ্ট ট্যাগ পেজের শুরুতে বসান। এর ফলে ব্রাউজার পুরো পেজ ব্লক করে জেএস রান করায় ও ইউজার স্ক্রিন খালি দেখে বিরক্ত হয়।",
          en: "Avoid script tags at the top of document heads without 'defer' or 'async' flags; they block HTML parsing.",
        },
        debugging: {
          bn: "ক্রোম ডেভটুলস (Chrome DevTools) এর 'Performance' ট্যাব ব্যবহার করে পেজের রেন্ডারিং টাইম ও লেআউট বাধার কারণ ডিবাগ করুন।",
          en: "Use browser DevTools Performance panels to audit repaint delays and identify long-running scripts.",
        },
        performance: {
          bn: "সিএসএস এনিমেশন করার সময় ভারী লেআউট পরিবর্তন না করে জিপিউ এক্সিলারেটেড ট্রান্সফর্ম (transform) ব্যবহার করুন।",
          en: "Leverage GPU-accelerated CSS properties (like transform, opacity) to offload layout calculations from CPU threads.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "br-q1",
      question: {
        bn: "ব্রাউজার (Browser) সফটওয়্যারের মূল কাজ কী?",
        en: "What is the primary role of a browser?",
      },
      options: [
        {
          bn: "কম্পিউটারের ওএস ফাইল রিমুভ করা",
          en: "Delete host operating system files",
        },
        {
          bn: "সার্ভার থেকে এইচটিএমএল, সিএসএস ও জেএস রিড করে ওয়েবসাইট রেন্ডার করা",
          en: "Fetch HTML, CSS, and JS from servers and render websites on screen",
        },
        {
          bn: "হার্ডডিস্কের মেমরি বাড়ানো",
          en: "Increase hardware storage storage size",
        },
        { bn: "ক্লিকের এরর সলভ করা", en: "Directly solve syntax errors" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ব্রাউজার হলো ওয়েব কোডের রানটাইম কম্পাইলার যা কোডকে প্রসেস করে সুন্দর ইন্টারফেস দেখায়।",
        en: "Browsers translate and paint textual markup files into interactive visual formats.",
      },
    },
    {
      id: "br-q2",
      question: {
        bn: "কঙ্কাল ও পোশাকের রূপক অনুযায়ী, সিএসএস (CSS) ওয়েবসাইটের কোন অংশ নিয়ন্ত্রণ করে?",
        en: "In the human body analogy, what does CSS represent?",
      },
      options: [
        { bn: "পেজের কঙ্কাল বা স্ট্রাকচার", en: "The page skeleton structure" },
        {
          bn: "চেহারা, পোশাকের কালার, স্পেসিং ও ভিজ্যুয়াল সৌন্দর্য",
          en: "The clothes, colors, spacing, and visual design layout",
        },
        {
          bn: "হাত-পা নাড়ানোর মস্তিষ্ক লজিক",
          en: "Brain logical functions and actions",
        },
        { bn: "পুরো বডি সিস্টেম", en: "The entire body system manager" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সিএসএস ওয়েবসাইটের ডিজাইন, কালার এবং সৌন্দর্য ও স্পেসিং ডেকোরেশন নিয়ন্ত্রণ করে।",
        en: "CSS handles the presentation layer, defining stylistic values for document coordinates.",
      },
    },
    {
      id: "br-q3",
      question: {
        bn: "ডম (DOM - Document Object Model) এর মূল কাজ ও গঠন কেমন হয়?",
        en: "What is the structure of the DOM?",
      },
      options: [
        {
          bn: "একটি সোজা লাইনের মতো কোড ফাইল",
          en: "A flat line text structure",
        },
        {
          bn: "এইচটিএমএল ট্যাগের পারিবারিক ফ্যামিলি ট্রির মতো মেমরি রিপ্রেজেন্টেশন",
          en: "A hierarchical family-tree-like memory representation of HTML nodes",
        },
        { bn: "হার্ডডিস্কের ফোল্ডার লিনক", en: "A physical storage link" },
        { bn: "ভিএস কোডের থিম সেটিংস", en: "VS Code user settings" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডম হলো এইচটিএমএল ট্যাগের নেস্টেড ট্রি স্ট্রাকচার, যার প্রতিটি ট্যাগকে এক একটি নোড বা ডাল বলা হয়।",
        en: "The DOM represents parsed HTML as nested object nodes inside browser memory.",
      },
    },
    {
      id: "br-q4",
      question: {
        bn: "ব্রাউজার রেন্ডারিং পাইপলাইনে লেআউট (Layout) ধাপের কাজ কী?",
        en: "What happens during the Layout phase of the rendering pipeline?",
      },
      options: [
        {
          bn: "ফাইল নেটওয়ার্ক দিয়ে আপলোড করা",
          en: "Upload code files over networking cables",
        },
        {
          bn: "স্ক্রিনের সাইজ মেপে প্রতিটি এলিমেন্টের সঠিক পজিশন ও সাইজ মিলিমিটার বা পিক্সেলে ক্যালকুলেট করা",
          en: "Calculate the exact geometry, position, and coordinates of each element relative to screen viewport size",
        },
        {
          bn: "জাভাস্ক্রিপ্ট ফাইল রান করা",
          en: "Execute Javascript functions",
        },
        {
          bn: "পিক্সেল পেইন্ট সম্পূর্ণ বন্ধ করা",
          en: "Stop painting display pixels",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "লেআউট ধাপে ব্রাউজার স্ক্রিনের রেসপন্সিভ সাইজ অনুযায়ী প্রতিটি বাটনের সঠিক জ্যামিতিক পজিশন মেপে নেয়।",
        en: "Layout evaluates boundaries and positions of render nodes based on viewport width dimensions.",
      },
    },
    {
      id: "br-q5",
      question: {
        bn: "গুগল ক্রোম (Google Chrome) ব্রাউজারের নিচে রেন্ডারিং প্রসেস হ্যান্ডেলকারী ইঞ্জিনের নাম কী?",
        en: "Which engine powers Chrome's rendering process?",
      },
      options: [
        { bn: "Gecko", en: "Gecko" },
        { bn: "Blink", en: "Blink" },
        { bn: "WebKit", en: "WebKit" },
        { bn: "V8 Engine", en: "V8 Engine" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "গুগল ক্রোমের রেন্ডারিং ইঞ্জিন হলো Blink, আর জাভাস্ক্রিপ্ট কম্পাইলকারী ইঞ্জিন হলো V8।",
        en: "Blink handles DOM rendering, styling, and layout calculations for Chrome and Edge.",
      },
    },
  ],
  practice: [
    {
      bn: "ফেসবুক ড্যাশবোর্ডে যখন মেসেজ নোটিফিকেশন বাবল লাল হয়ে ১ দেখায়—এখানে এইচটিএমএল, সিএসএস ও জাভাস্ক্রিপ্টের কার কী ভূমিকা রয়েছে? লিখুন।",
      en: "Isolate HTML, CSS, and JS roles inside a red notification badge updating on Facebook.",
    },
    {
      bn: "ফ্যামিলি ট্রির রূপক ব্যবহার করে একটি বডি নোড যার নিচে হেডিং নোড ও প্যারাগ্রাফ চাইল্ড নোড আছে—তার ডম ডায়াগ্রাম আঁকুন।",
      en: "Draft a DOM tree structure for a body containing a heading and paragraph tag.",
    },
    {
      bn: "জাভাস্ক্রিপ্ট স্ক্রিপ্ট পেজের শেষে লিঙ্ক না করে শুরুতে লিঙ্ক করলে পেজ লোডিং স্পিডে কী সমস্যা হতে পারে? ব্যাখ্যা করুন।",
      en: "Explain why blocking JavaScript tags inside document headers degrades page load speeds.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি ওয়েব পেজের ক্রিটিকাল রেন্ডারিং পাইপলাইন সিকোয়েন্স",
      en: "Web Page Critical Rendering Path Simulation",
    },
    description: {
      bn: "ব্রাউজার যখন এইচটিএমএল ও সিএসএস ফাইল রিসিভ করে, তখন থেকে স্ক্রিনে মনিটর পিক্সেল পেইন্ট হওয়া পর্যন্ত রেন্ডারিং পাইপলাইনের ৫টি লজিক্যাল ধাপ ডিক্লেয়ার করে সাবমিট করুন।",
      en: "Model the rendering pipeline operations inside a JS configuration object representing the viewport paint sequence.",
    },
    starterCode: `// Rendering Pipeline Simulation Schema
const renderingPipeline = {
  viewportSize: "Mobile / 390px",
  stages: [
    // রেন্ডারিংয়ের ক্রমানুসার ধাপের তালিকা
  ],
  gpuAccelerationActive: false,
  paintSuccessful: false
};`,
    solution: {
      code: `// Rendering Pipeline Sequence Completed
const renderingPipeline = {
  viewportSize: "মোবাইল ইউজার / 390px",
  stages: [
    "ধাপ ১: HTML ট্যাগ রিড করে DOM মেমরি ফ্যামিলি ট্রি তৈরি করা।",
    "ধাপ ২: স্টাইল রুল পার্স করে CSSOM ট্রি তৈরি করা।",
    "ধাপ ৩: DOM ও CSSOM মার্জ করে ভিজ্যুয়াল রেন্ডার ট্রি তৈরি করা।",
    "ধাপ ৪: লেআউট ধাপে বাটনের জ্যামিতিক পজিশন ও সাইজ ক্যালকুলেট করা।",
    "ধাপ ৫: পেইন্টিং ধাপে জিপিউ চিপ ব্যবহার করে মনিটর স্ক্রিনে পিক্সেল ফুটিয়ে তোলা।"
  ],
  gpuAccelerationActive: true,
  paintSuccessful: true
};`,
      explanation: {
        bn: "চমৎকার রেন্ডারিং মডেল! ডম মেমরি ট্রি থেকে শুরু করে জিপিউ পিক্সেল পেইন্টিংয়ের ক্রিটিকাল রেন্ডারিং পাথ ফ্লোটি নিখুঁত ও চমৎকার হয়েছে।",
        en: "Mapping critical rendering path layers models how browser engines allocate layout dimensions.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "ডম (DOM) কী এবং জাভাস্ক্রিপ্ট কীভাবে ডমের সাহায্যে একটি স্ট্যাটিক পেজকে ডাইনামিক পেজে রূপান্তর করে?",
        en: "What is the DOM and how does JavaScript interact with it to make web pages dynamic?",
      },
      answer: {
        bn: "ডম হলো এইচটিএমএল কোডের একটি অবজেক্ট মেমরি মডেল যা ফ্যামিলি ট্রির মতো সাজানো থাকে। জাভাস্ক্রিপ্ট সরাসরি এইচটিএমএল টেক্সট ফাইল পরিবর্তন করতে পারে না। ব্রাউজার যখন ডম তৈরি করে, জাভাস্ক্রিপ্ট তখন ডমের এপিআই ব্যবহার করে ডমের যেকোনো নোড বা ডাল সিলেক্ট করতে পারে (যেমন: document.getElementById)। জাভাস্ক্রিপ্ট তখন সেই ডালটির লেখা ইনস্ট্যান্ট চেঞ্জ করতে পারে, নতুন নোড তৈরি করতে পারে বা বাটন ক্লিকের নোটিফিকেশন লিসেনার অ্যাড করে ডাইনামিক অ্যাকশন সম্পন্ন করতে পারে, যার ফলে রিলোড ছাড়াই পেজ আপডেট হয়।",
        en: "The DOM is a structured API exposing parsed HTML elements as memory nodes. JavaScript cannot access HTML string source code directly. The browser exposes the DOM API so JavaScript scripts can query node elements, adjust inline stylings, bind action listeners, or append new child nodes dynamically without refreshing the page.",
      },
    },
    {
      question: {
        bn: "ক্রিটিকাল রেন্ডারিং পাথে রিফ্লো (Reflow) এবং রিপেইন্ট (Repaint) এর পার্থক্য কী এবং পারফরম্যান্স বাড়াতে কেন এগুলো কমানো উচিত?",
        en: "What is the difference between Reflow and Repaint in browser rendering cycles?",
      },
      answer: {
        bn: "১. **রিফ্লো (Reflow/Layout)**: যখন পেজের কোনো এলিমেন্টের জ্যামিতিক সাইজ বা পজিশন চেঞ্জ হয় (যেমন: উইডথ বা মার্জিন পরিবর্তন)। ব্রাউজারকে তখন পুরো পেজের অন্যান্য বাটনের পজিশন রি-ক্যালকুলেট করতে হয়। এটি অত্যন্ত ভারী কাজ।\n২. **রিপেইন্ট (Repaint)**: যখন এলিমেন্টের জ্যামিতি ঠিক থাকে কিন্তু ভিজ্যুয়াল লুক চেঞ্জ হয় (যেমন: ব্যাকগ্রাউন্ড কালার বা শ্যাডো পরিবর্তন)। এতে লেআউট হিসাব লাগে না, কেবল পিক্সেল পেইন্ট করা হয়।\nপারফরম্যান্স বাড়াতে রিফ্লো কমানো উচিত কারণ এটি সিপিইউতে প্রসেস হয় এবং ফ্রিকোয়েন্ট রিফ্লো হলে ব্রাউজার ল্যাগ বা ফ্রেম ড্রপ করে পেজ ধীর করে দেয়।",
        en: "1. **Reflow (Layout)**: Occurs when elements change geometry (width, height, relative margins). The layout engine must recalculate the positions of adjacent nodes, consuming high CPU cycles.\n2. **Repaint**: Occurs when layout coordinates are static but visual details shift (color, box shadow, visibility). It paints pixels directly using the GPU.\nFrequent reflows block thread executions and throttle performance, leading to frame drops during layout rendering.",
      },
    },
  ],
};
