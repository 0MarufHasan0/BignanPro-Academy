export const chapter20Content = {
  id: "chapter-20",
  number: 20,
  title: {
    bn: "অধ্যায় ২০: এইচটিএমএল ফান্ডামেন্টালস — ওয়েবসাইটের কাঠামো নির্মাণ",
    en: "Chapter 20: HTML Fundamentals (Web Structure Building)",
  },
  description: {
    bn: "এইচটিএমএল কী, ট্যাগ ও এলিমেন্টের কাজ, হেড বনাম বডি এবং সিমেন্টিক ডিক্লেয়ারেশনের মাধ্যমে ওয়েবসাইটের মজবুত স্ট্রাকচার তৈরি।",
    en: "Understand HTML tags, nested elements, page structures, head vs. body compartments, and semantic markup layouts.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "এইচটিএমএল (HTML) এর পূর্ণ রূপ এবং এটি কীভাবে ওয়েবসাইটের কঙ্কাল কাঠামো গড়ে তোলে তা শেখা।",
      en: "Learn how HTML establishes the core layout skeleton of web pages.",
    },
    {
      bn: "ট্যাগ, এলিমেন্ট এবং কন্টেন্টের মধ্যকার সম্পর্ক স্পষ্ট চেনা।",
      en: "Differentiate between tags, elements, and content definitions.",
    },
    {
      bn: "ডকুমেন্টের হেড (Head) এবং বডি (Body) সেকশনের কাজের তফাৎ বোঝা।",
      en: "Identify head metadata targets vs. body visible viewport content.",
    },
    {
      bn: "সিমেন্টিক এইচটিএমএল (Semantic HTML) ব্যবহারের মাধ্যমে এসইও-বান্ধব কোড লিখতে শেখা।",
      en: "Apply semantic tags (header, section, footer) to build SEO-friendly web page layouts.",
    },
  ],
  sections: [
    {
      id: "what-is-html-markup",
      title: {
        bn: "১. এইচটিএমএল কী ও কীভাবে কাজ করে? (What is HTML & Tags)",
        en: "1. What is HTML & Tags",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা যখনই কোনো ব্রাউজার ওপেন করে গুগলে সার্চ করি বা ফেসবুক নিউজফিড স্ক্রোল করি, ব্রাউজার আমাদের সামনে চমৎকার সব বাটন, ছবি ও লেখা ফুটিয়ে তোলে। কিন্তু ব্রাউজার কীভাবে জানে কোন বাটনটি কোথায় রাখতে হবে বা কোন ছবিটি সবার ওপরে থাকবে? এর জন্য ব্রাউজারকে একটি মডিউলার আর্কিটেকচারাল লেআউট ম্যাপ দিতে হয়। এই ম্যাপের নাম হলো **HTML (HyperText Markup Language)**।

## Why should I learn this? (কেন শিখবো?)
এইচটিএমএল হলো সম্পূর্ণ ফ্রন্টএন্ড জগতের প্রবেশদ্বার বা বেস। আপনি যতই জটিল জাভাস্ক্রিপ্ট কোড বা চমৎকার সিএসএস ডিজাইন শিখুন না কেন, সেগুলো রেন্ডার করার জন্য এইচটিএমএল পেজ লেআউট থাকা বাধ্যতামূলক। এইচটিএমএল ডিক্লেয়ারেশন সঠিকভাবে শিখলে আপনার ওয়েবসাইট গুগল সার্চ ইঞ্জিনে (SEO) সবার ওপরে র‍্যাঙ্ক করবে।

## What is HTML? (এইচটিএমএল কী?)
**HTML** এর পূর্ণ রূপ হলো **HyperText Markup Language**।
*   এটি কোনো প্রোগ্রামিং ল্যাঙ্গুয়েজ নয়, এটি হলো একটি **মার্কআপ ল্যাঙ্গুয়েজ**।
*   এর কাজ হলো ব্রাউজারকে নির্দেশ দেওয়া যে পেজের কাঠামো বা স্ট্রাকচার কেমন হবে।

---
## Tags and Elements (ট্যাগ এবং এলিমেন্ট)
এইচটিএমএল ফাইল মূলত অনেকগুলো ছোট-বড় ট্যাগের সাহায্যে গঠিত হয়:
*   **ট্যাগ (Tags)**: ব্রাউজারের বিশেষ নির্দেশিকা যা অ্যাঙ্গেল ব্র্যাকেট (\`<\` এবং \`>\`) দিয়ে শুরু ও শেষ হয়।
    - **উদাহরণ**: \`<h1>\` হলো ওপেনিং ট্যাগ এবং \`</h1>\` হলো ক্লোজিং ট্যাগ।
*   **এলিমেন্ট (Element)**: ওপেনিং ট্যাগ, মাঝের ডাটা বা কন্টেন্ট এবং ক্লোজিং ট্যাগ—সবটুকু মিলে তৈরি হয় একটি পূর্ণাঙ্গ **এইচটিএমএল এলিমেন্ট**।

\`\`\`text
<h1>আমার হেডিং</h1>
 │       │        │
 │       │        └── ক্লোজিং ট্যাগ
 │       └─────────── আসল কন্টেন্ট
 └─────────────────── ওপেনিং ট্যাগ
\`\`\``,
        en: `## Introduction
Web layout coordinates must be declared in text format. Browsers read HTML documents to place buttons, links, and text coordinates correctly.

## What is HTML?
HyperText Markup Language. A markup language declaring layout elements to establish the structure of a webpage.

## Tags vs. Elements
*   **Tag**: Suffixes enclosed in angle brackets specifying container types (e.g., \`<h1>\` or \`</h1>\`).
*   **Element**: The entire construction consisting of the opening tag, internal content payload, and closing tag.`,
      },
    },
    {
      id: "basic-page-structure",
      title: {
        bn: "২. বেসিক পেজ স্ট্রাকচার: হেড বনাম বডি (HTML Document Structure)",
        en: "2. HTML Document Structure",
      },
      content: {
        bn: `## HTML Document Skeleton (এইচটিএমএল কঙ্কাল কাঠামো)
একটি স্ট্যান্ডার্ড এইচটিএমএল ফাইল নিচের নমনীয় কাঠামো মেনে তৈরি করা হয়:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>বিজ্ঞানপ্রো একাডেমি</title>
  </head>
  <body>
    <h1>হ্যালো ওয়ার্ল্ড!</h1>
  </body>
</html>
\`\`\`

---
## Head vs. Body (হেড বনাম বডি)
এইচটিএমএল পেজকে প্রধানত দুটি অংশে ভাগ করা হয়:

১. **Head Section (\`<head>\`)**:
   *   **ভূমিকা**: এটি হলো ওয়েবসাইটের অদৃশ্য ব্যাকগ্রাউন্ড ব্রেন।
   *   **কাজ**: পেজের মেটাডাটা (Metadata), টাইটেল বার টেক্সট, সার্চ ইঞ্জিন কি-ওয়ার্ড এবং এক্সটার্নাল সিএসএস/জাভাস্ক্রিপ্ট ফাইলের লিঙ্ক এখানে ডিক্লেয়ার করা হয়। এর ভেতরের অংশ পেজের স্ক্রিনে দেখা যায় না (টাইটেল বাদে)।
২. **Body Section (\`<body>\`)**:
   *   **ভূমিকা**: এটি হলো ওয়েবসাইটের দৃশ্যমান শরীর বা ইউজার ইন্টারফেস।
   *   **কাজ**: স্ক্রিনের ছবি, বাটন, হেডিং ও প্যারাগ্রাফ যা ইউজার ব্রাউজারে দেখতে পান—তার সবকিছুই বডি ট্যাগের ভেতরে থাকে।`,
        en: `## HTML Document Structure
All HTML configurations start with the doctype header declaration, branching into nested tags:
*   \`<!DOCTYPE html>\`: Declares the document is an HTML5 page.
*   \`<html>\`: The root container encompassing the entire document structure.

## Head vs. Body
*   **Head (\`<head>\`)**: Stores metadata properties, browser tab titles, font linkages, and styling references (Invisible to users).
*   **Body (\`<body>\`)**: Contains visible viewport element structures (headings, buttons, sections).`,
      },
    },
    {
      id: "common-html-tags",
      title: {
        bn: "৩. সাধারণ এইচটিএমএল ট্যাগ পরিচিতি (Common HTML Tags)",
        en: "3. Common HTML Tags",
      },
      content: {
        bn: `## Essential Tags (সবচেয়ে প্রয়োজনীয় ট্যাগসমূহ)
ওয়েবসাইট সাজানোর জন্য আমরা যে ট্যাগগুলো সবচেয়ে বেশি ব্যবহার করি:

১. **Headings (\`<h1>\` থেকে \`<h6>\`)**:
   - পেজের শিরোনাম বা হেডিং প্রকাশের জন্য। \`<h1>\` সবচেয়ে বড় এবং \`<h6>\` সবচেয়ে ছোট আকারের টেক্সট দেখায়।
২. **Paragraph (\`<p>\`)**:
   - ব্লগ বা রচনার সাধারণ টেক্সট লেখার জন্য।
৩. **Link / Anchor (\`<a>\`)**:
   - এক পেজ থেকে অন্য পেজে যাওয়ার জন্য হাইপারলিঙ্ক তৈরি করতে ব্যবহৃত হয়।
   - **কোড**: \`<a href="https://google.com">গুগল</a>\`
৪. **Image (\`<img>\`)**:
   - পেজে ছবি ডিসপ্লে করতে ব্যবহৃত হয়। এটি একটি সেলফ-ক্লোজিং বা সিঙ্গেল ট্যাগ (যার কোনো ক্লোজিং ট্যাগ লাগে না)।
   - **কোড**: \`<img src="photo.jpg" alt="প্রোফাইল পিক">\`
৫. **Button (\`<button>\`)**:
   - ইউজার ক্লিকের ইন্টারেক্টিভ বাটন তৈরি করতে।
   - **কোড**: \`<button>ক্লিক করুন</button>\``,
        en: `## Core HTML Tag Reference
*   **Headings (\`<h1>\`-\`<h6>\`)**: Declare hierarchal section titles.
*   **Paragraph (\`<p>\`)**: Declares block-level paragraphs.
*   **Anchor (\`<a href="...">\`)**: Creates hyper-links to other pages.
*   **Image (\`<img src="..." alt="...">\`)**: Self-closing node loading media files.
*   **Button (\`<button>\`)**: Interactive element handling user clicks.`,
      },
    },
    {
      id: "semantic-html-layout",
      title: {
        bn: "৪. সিমেন্টিক এইচটিএমএল ও আধুনিক পেজ লেআউট (Semantic HTML & Layout)",
        en: "4. Semantic HTML & Layout",
      },
      content: {
        bn: `## Semantic HTML (অর্থপূর্ণ মার্কআপ)
ঐতিহ্যগতভাবে ডেভেলপাররা আগে পেজের সব জায়গায় কেবল \`<div>\` ট্যাগ ব্যবহার করতেন। কিন্তু এতে গুগল সার্চ ইঞ্জিনের রোবট বুঝতে পারে না কোন অংশটি হেডার আর কোনটি ফুটার।

**সিমেন্টিক এইচটিএমএল (Semantic HTML)** হলো এমন ট্যাগ যা ব্রাউজার এবং ডেভেলপার উভয়কেই তার কাজের স্পষ্ট অর্থ বুঝিয়ে দেয়:
*   \`<header>\`: ওয়েবসাইটের টপ নেভিগেশন বা মেনুবার।
*   \`<section>\`: পেজের নির্দিষ্ট অংশ (যেমন: ফিচার বা কন্টাক্ট সেকশন)।
*   \`<article>\`: স্বাধীন কোনো আর্টিকেল বা ব্লগের ব্লগপোস্ট কার্ড।
*   \`<footer>\`: ওয়েবসাইটের একদম নিচের কপিরাইট ও সোশ্যাল লিঙ্ক এরিয়া।

---
## Modern Web Page Layout (বাস্তব লেআউট মডেল)
একটি মডার্ন সিমেন্টিক পেজের ফ্লো সাধারণত নিচের মডেলে তৈরি করা হয়:
\`\`\`text
my-page/
  ├── <header> (Menu & Logo)
  ├── <main> (Core Body Content)
  │     ├── <section> (Hero Intro)
  │     └── <section> (Product Cards)
  └── <footer> (Copyright & Links)
\`\`\``,
        en: `## Semantic HTML Markup
Semantic tags provide context and semantic meanings to browser engines and search engine crawlers:
*   \`<header>\`: Top nav banner menu.
*   \`<main>\`: Primary unique viewport payload wrapper.
*   \`<section>\`: Groupings of related elements.
*   \`<footer>\`: Bottom copyright area.

Using semantic layouts improves accessibility profiles and search SEO ranking indices.`,
      },
    },
    {
      id: "house-skeleton-analogy",
      title: {
        bn: "৫. ঘরের কঙ্কাল ও ওয়েবসাইটের কানেকশন অ্যানালজি (House Skeleton Metaphor)",
        en: "5. House Skeleton Metaphor",
      },
      content: {
        bn: `## The House Skeleton Metaphor (বাড়ির কঙ্কাল রূপক)
এইচটিএমএল, সিএসএস ও জাভাস্ক্রিপ্টের মেলবন্ধনকে একটি নতুন বাড়ি তৈরির সাথে মিলিয়ে নিন:
*   **এইচটিএমএল (HTML)**: বাড়ির ইট, বালির বেসিক গাঁথুনি বা কঙ্কাল কাঠামো (Skeleton)। যেখানে ইট দিয়ে আপনি ওয়াশরুম, কিচেন ও বেডরুমের ঘর আলাদা করে লেআউট করেন।
*   **সিএসএস (CSS)**: দেয়ালের টাইলস, চমৎকার নীল পেইন্ট, ঝাড়বাতি ও ফার্নিচারের সাজসজ্জা।
*   **জাভাস্ক্রিপ্ট (JavaScript)**: পানির ট্যাব খুললে পানি আসা, সুইচ টিপলে ফ্যান ঘোরা এবং স্মার্ট সিকিউরিটি লক সচল হওয়া।

---
## The Trinity Connection (ত্রিমুখী সংযোগ)
*   **এইচটিএমএল** ফোল্ডারে আমরা বাটন ডিক্লেয়ার করি: \`<button id="btn">সেভ</button>\`
*   **সিএসএস** ফাইলে বাটন সুন্দর করি: \`#btn { background: green; }\`
*   **জাভাস্ক্রিপ্ট** দিয়ে বাটনে অ্যাকশন দিই: \`btn.addEventListener("click", saveCallback)\``,
        en: `## Metaphor
*   **HTML**: The raw concrete structure, brick pillars, and room partitions (Skeleton).
*   **CSS**: Wall paint colors, marble floor stylings, and decorative lighting.
*   **JavaScript**: Running water pipes, working elevators, and automated security locks.`,
      },
      codeBlock: {
        fileName: "page_layout.html",
        language: "html",
        code: `<!-- ওয়েবসাইট হোমপেজ লেআউট ম্যাপ -->
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বিজ্ঞানপ্রো ডেমো</title>
</head>
<body>
  
  <header>
    <h1>🚀 বিজ্ঞানপ্রো একাডেমি</h1>
  </header>

  <main>
    <section id="hero">
      <p>আমরা কোডিং শেখাই সম্পূর্ণ বাংলা ভাষায়!</p>
      <button>কোর্স বুক করুন</button>
    </section>
  </main>

  <footer>
    <p>© ২০২৬ বিজ্ঞানপ্রো কপিরাইট সংরক্ষিত।</p>
  </footer>

</body>
</html>`,
        explanations: [
          {
            line: 8,
            text: {
              bn: "হেডার ট্যাগ যা ওয়েবসাইটের টপ মেনুবার এবং ব্র্যান্ডিং হেডিং ধারণ করে।",
              en: "Semantic header tag housing the primary brand title.",
            },
          },
          {
            line: 12,
            text: {
              bn: "সেকশন ট্যাগ যা হিরো ব্যানার বা নির্দিষ্ট কন্টেন্ট ব্লককে মডিউলার ভাবে আলাদা করে।",
              en: "Semantic section node grouping hero texts and button tags together.",
            },
          },
        ],
      },
    },
    {
      id: "practice-html-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার এইচটিএমএল পেজ আর্কিটেকচার এবং সিমেন্টিক ডিক্লেয়ারেশনের ধারণা পোক্ত করবে।`,
        en: `## Reflection & Lab Tasks
Solidify page structure concepts before exploring visual CSS styles configurations in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "এইচটিএমএল এর সঠিক মার্কআপ জানলে সার্চ ইঞ্জিনের ক্রলার খুব সহজে আপনার সাইটের গুরুত্বপূর্ণ ডাটা খুঁজে বের করতে পারে ও এসইও অপ্টিমাইজড হয়।",
          en: "Clean HTML structures improve page parsing speeds and enable screen readers for visually impaired clients.",
        },
        whyWorks: {
          bn: "ব্রাউজার ফাইল রিড করার সময় ডকট্যাক (DOCTYPE) দেখে ঠিক করে এইচটিএমএল৫ স্ট্যান্ডার্ড ইঞ্জিনে রেন্ডারিং পাইপলাইন রান করাতে হবে কিনা।",
          en: "The DOCTYPE flag triggers browsers to compile in standards mode instead of legacy quirks mode.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা ক্লাস এবং আইডি নাম সর্বদা রিডেবল এবং লজিক্যাল রাখেন (যেমন: 'btn-submit' এর বদলে ad-hoc নাম ব্যবহার এড়ান)।",
          en: "Seniors write descriptive class naming structures (e.g., BEM) to make styling targets obvious.",
        },
        mistakes: {
          bn: "বিগিনারদের ভুল হলো ক্লোজিং ট্যাগ দিতে ভুলে যাওয়া, যার ফলে নিচের ট্যাগগুলো ডম ট্রিতে হেপাhazardly নেস্টেড হয়ে লেআউট ভেঙে ফেলে।",
          en: "Failing to close tag trees causes elements to leak into parent nodes, breaking layout rendering calculations.",
        },
        debugging: {
          bn: "কোনো ট্যাগ ক্লোজ হয়েছে কিনা তা চেক করতে ব্রাউজার ডেভটুলসের 'Elements' ট্যাব ওপেন করে লাইভ ডম নোড কাঠামো ইন্সপেক্ট করুন।",
          en: "Inspect parsed node structures directly using Chrome DevTools Elements tab to catch nesting issues.",
        },
        performance: {
          bn: "পেজের হেড সেকশনে অপ্রয়োজনীয় স্ক্রিপ্ট বসিয়ে পেজ পার্সিং ব্লক হওয়া এড়াতে স্ক্রিপ্ট ট্যাগে 'defer' অ্যাট্রিবিউট ব্যবহার করুন।",
          en: "Use non-blocking features (like 'defer') on script tags located in head zones to prevent layout rendering blocks.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "ht-q1",
      question: {
        bn: "HTML এর পূর্ণ রূপ কোনটি?",
        en: "What does HTML stand for?",
      },
      options: [
        { bn: "HyperText Markup Language", en: "HyperText Markup Language" },
        { bn: "HighText Machine Language", en: "HighText Machine Language" },
        {
          bn: "Hyperlink Transfer protocol Layout",
          en: "Hyperlink Transfer protocol Layout",
        },
        { bn: "Home Tool Markup Ledger", en: "Home Tool Markup Ledger" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "HTML এর পূর্ণ রূপ হলো HyperText Markup Language, যা দিয়ে ওয়েব পেজের বেসিক কাঠামো মার্ক করা হয়।",
        en: "HTML is the standard markup language for creating web documents.",
      },
    },
    {
      id: "ht-q2",
      question: {
        bn: "একটি পূর্ণাঙ্গ এইচটিএমএল এলিমেন্ট (Element) কী নিয়ে গঠিত হয়?",
        en: "What components form a complete HTML element?",
      },
      options: [
        { bn: "শুধুমাত্র একটি ওপেনিং ট্যাগ", en: "Just an opening tag" },
        {
          bn: "ওপেনিং ট্যাগ, ভেতরের কন্টেন্ট এবং ক্লোজিং ট্যাগ (Opening tag + Content + Closing tag)",
          en: "Opening tag + Content + Closing tag",
        },
        { bn: "একটি ডেটাবেজ ক্যোয়ারী", en: "A database query string" },
        { bn: "কীবোর্ড শর্টকাট", en: "A keyboard shortcut" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ওপেনিং ট্যাগ, কন্টেন্ট এবং ক্লোজিং ট্যাগ—সবটুকু নিয়ে একটি পূর্ণাঙ্গ এইচটিএমএল এলিমেন্ট গঠিত হয়।",
        en: "Elements comprise opening boundaries, inner text/nodes payload, and closing tags.",
      },
    },
    {
      id: "ht-q3",
      question: {
        bn: "এইচটিএমএল পেজের হেড সেকশনের (\`<head>\`) প্রধান দায়িত্ব কী?",
        en: "What is the primary purpose of the HTML head section?",
      },
      options: [
        {
          bn: "ইউজারের জন্য বাটন বা ছবি ভিজ্যুয়ালি ডিসপ্লে করা",
          en: "Display visual buttons or images directly to users",
        },
        {
          bn: "মেটাডাটা, পেজ টাইটেল, সার্চ কি-ওয়ার্ড ও ফাইল লিঙ্ক স্টোর করা (অদৃশ্য ব্যাকগ্রাউন্ড ব্রেন)",
          en: "Store metadata properties, tab titles, meta tags, and style linkages",
        },
        { bn: "ডাটাবেজে ফাইল রাইট করা", en: "Write database files on drive" },
        {
          bn: "কম্পিউটারের ওএস রিফ্রেশ করা",
          en: "Refresh operating system variables",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "হেড সেকশন পেজের অদৃশ্য মেটাডাটা ও কনফিগারেশন লিঙ্ক ধারণ করে যা ব্রাউজার ব্যাকগ্রাউন্ডে প্রসেস করে।",
        en: "Head sections configure application properties, indexing keywords, and external file pathways.",
      },
    },
    {
      id: "ht-q4",
      question: {
        bn: "নিচের কোন এইচটিএমএল ট্যাগটি কোনো ক্লোজিং ট্যাগ ছাড়াই সচল থাকে (সিঙ্গেল / সেলফ-ক্লোজিং ট্যাগ)?",
        en: "Which of the following is a self-closing HTML tag?",
      },
      options: [
        { bn: "<h1>", en: "<h1>" },
        { bn: "<img> (ইমেজ ট্যাগ)", en: "<img> (Image tag)" },
        { bn: "<button>", en: "<button>" },
        { bn: "<p>", en: "<p>" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "<img> ট্যাগ হলো সেলফ-ক্লোজিং ট্যাগ, এর ভেতরের ছবি লোড করার জন্য আলাদা কোনো ক্লোজিং ট্যাগ লাগে না।",
        en: "Image nodes retrieve content from the source attribute directly, requiring no closing tags.",
      },
    },
    {
      id: "ht-q5",
      question: {
        bn: "সিমেন্টিক এইচটিএমএল (Semantic HTML) ব্যবহারের মূল সুবিধা কোনটি?",
        en: "What is the primary benefit of using Semantic HTML tags?",
      },
      options: [
        { bn: "পেজের স্টাইল লাল করা", en: "Force styles color red" },
        {
          bn: "সার্চ ইঞ্জিনের ক্রলার (SEO) ও রিডারদের কাছে পেজের প্রতিটি ব্লকের কাজের স্পষ্ট অর্থ বুঝিয়ে দেওয়া",
          en: "Provide semantic meanings to browser engines and crawlers, improving SEO indexing",
        },
        {
          bn: "জাভাস্ক্রিপ্ট কোড ছোট করা",
          en: "Shorten Javascript function blocks",
        },
        { bn: "ডিএনএস স্পিড বাড়ানো", en: "Increase DNS lookup speeds" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সিমেন্টিক ট্যাগ (যেমন header, footer) পেজ লেআউটকে অর্থপূর্ণভাবে ভাগ করে যা এসইও র‍্যাঙ্কিং বৃদ্ধিতে সাহায্য করে।",
        en: "Semantic tags describe their contents to index spiders, optimizing accessibility.",
      },
    },
  ],
  practice: [
    {
      bn: "গুগলে যাওয়ার জন্য একটি লিংক ট্যাগ (Anchor Tag) লেখার এইচটিএমএল কোড লিখুন।",
      en: "Write an HTML anchor tag link pointing to https://google.com.",
    },
    {
      bn: "একটি পূর্ণাঙ্গ পেজ কাঠামো তৈরি করুন যেখানে রুট html, হেড ও বডি ট্যাগগুলো নেস্টেড অবস্থায় সাজানো থাকবে।",
      en: "Write the basic HTML document boilerplate tree structure.",
    },
    {
      bn: "সিমেন্টিক লেআউটের ৪টি প্রধান ট্যাগের নাম ক্রমানুসারে লিখুন।",
      en: "List 4 core semantic tags defining modern page layout zones.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি পার্সোনাল প্রোফাইল পেজের মডিউলার এইচটিএমএল স্ট্রাকচার",
      en: "Modular HTML Page Structure for a Personal Profile",
    },
    description: {
      bn: "আপনার নিজের প্রোফাইলের জন্য একটি এইচটিএমএল কঙ্কাল কাঠামো ডিজাইন করুন। হেডার, প্রোফাইল ইমেজ, আপনার তথ্য ডিক্লারেটিভ আকারে সাজিয়ে সাবমিট করুন।",
      en: "Design the semantic HTML structural skeleton of a developer profile page, nesting header, sections, buttons, and footers.",
    },
    starterCode: `<!-- Personal Profile Layout Map -->
<!DOCTYPE html>
<html>
<head>
  <title>আমার প্রোফাইল</title>
</head>
<body>
  <!-- কোড লিখুন: হেডার, মেইন সেকশন, প্রোফাইল ইমেজ ও ফুটার ট্যাগগুলো নেস্ট করুন -->
  
</body>
</html>`,
    solution: {
      code: `<!-- Profile Layout Schema Completed -->
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>প্রোফাইল | তাসনিম কোডার</title>
</head>
<body>

  <header>
    <h1>💻 তাসনিম জাহান</h1>
    <p>ফুল স্ট্যাক সফটওয়্যার ডেভেলপার</p>
  </header>

  <main>
    <section id="about">
      <h2>আমার সম্পর্কে</h2>
      <p>আমি বাংলা কোডিং রিসোর্স বিজ্ঞানপ্রো একাডেমিতে কাজ করছি।</p>
      <button>কন্টাক্ট করুন</button>
    </section>
  </main>

  <footer>
    <p>© ২০২৬ তাসনিম কোড ল্যাব।</p>
  </footer>

</body>
</html>`,
      explanation: {
        bn: "চমৎকার ডিজাইন! সিমেন্টিক হেডার, মেইন বডি ও ফুটার ট্যাগগুলো নেস্টিং করার প্রতিটি ধাপ শতভাগ সঠিক হয়েছে।",
        en: "Nesting semantic elements provides structural foundations for browser style calculations.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "একটি এইচটিএমএল ডক টাইপ (<!DOCTYPE html>) ডিক্লেয়ারেশন পেজের শুরুতে থাকা কেন বাধ্যতামূলক?",
        en: "Why is the <!DOCTYPE html> declaration mandatory at the very top of HTML files?",
      },
      answer: {
        bn: "ডকটাইপ ডিক্লেয়ারেশন কোনো এইচটিএমএল ট্যাগ নয়। এটি হলো ব্রাউজার ইঞ্জিনের জন্য একটি সংকেত। এটি ব্রাউজারকে নির্দেশ দেয় যে ফাইলটি এইচটিএমএল৫ (HTML5) স্ট্যান্ডার্ড মেনে লেখা হয়েছে। এটি না থাকলে ব্রাউজার ফাইলটিকে 'কুইর্কস মোড' (Quirks Mode) নামক একটি ব্যাকওয়ার্ড কম্প্যাটিবিলিটি মোডে রান করে, যার ফলে আধুনিক সিএসএস ৩ এবং এইচটিএমএল ৫ এর অনেক নতুন এলিমেন্ট ও ডিজাইন স্ক্রিনে ভেঙে যেতে পারে বা সঠিকভাবে রেন্ডার হবে না।",
        en: "The doctype header is a declaration telling the browser layout engine to render the document in standards mode. Without it, browsers compile pages in quirks mode, defaulting parsing behaviors to support legacy web specifications, which breaks modern CSS styles grids.",
      },
    },
    {
      question: {
        bn: "সিমেন্টিক এইচটিএমএল (Semantic HTML) এবং সাধারণ নন-সিমেন্টিক ডিক্লেয়ারেশনের (যেমন: div ও span) মধ্যে মূল পার্থক্য কী?",
        en: "What is the difference between Semantic HTML and Non-Semantic elements?",
      },
      answer: {
        bn: "১. **নন-সিমেন্টিক (Non-semantic)**: \`<div>\` এবং \`<span>\` এর কোনো নিজস্ব ভিজ্যুয়াল বা স্ট্রাকচারাল অর্থ নেই। এরা কেবল কন্টেন্ট ধরে রাখার সাধারণ বক্স। গুগল রোবট বা স্ক্রিন রিডার এদের আলাদা কোনো গুরুত্ব দিতে পারে না।\n২. **সিমেন্টিক (Semantic)**: \`<header>\`, \`<article>\`, \`<footer>\` ট্যাগগুলোর নামে তাদের কাজের সুনির্দিষ্ট অর্থ প্রকাশ পায়। এর ফলে স্ক্রিন রিডার অন্ধ ব্যবহারকারীদের পেজ পড়ে শোনানোর সময় আলাদা টোন দেয় এবং গুগলের সার্চ ক্রলার খুব সহজে বুঝতে পারে পেজের মূল কন্টেন্ট অংশ কোনটি, যা সাইটের সামগ্রিক কোড কোয়ালিটি ও এসইও অপ্টিমাইজেশনকে অনেক শক্তিশালী করে।",
        en: "1. **Non-Semantic Elements (div, span)**: Contain no structural meaning about their contents. They are generic box wrappers used for layouts and style hooks.\n2. **Semantic Elements (header, main, section, footer)**: Describe their contents to browser engines, accessibility readers, and SEO scrapers. It ensures web structures are readable and parsed cleanly.",
      },
    },
  ],
};
