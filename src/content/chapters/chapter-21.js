export const chapter21Content = {
  id: "chapter-21",
  number: 21,
  title: {
    bn: "অধ্যায় ২১: সিএসএস ফান্ডামেন্টালস — ওয়েবসাইটের রূপসজ্জা",
    en: "Chapter 21: CSS Fundamentals (Styling the Web)",
  },
  description: {
    bn: "সিএসএস কী, কালার ও ফন্টস সেট করার নিয়ম, বক্স মডেলের মার্জিন ও প্যাডিং কনসেপ্ট এবং ফ্লেক্সবক্সের সাহায্যে চমৎকার রেস্পন্সিভ লেআউট গড়ার প্রাথমিক গাইড।",
    en: "Understand CSS syntax, inline/internal/external styling methods, colors, web typography, the box model margins and paddings, display behaviors, and flexbox alignments.",
  },
  difficulty: "beginner",
  readingTime: 12,
  objectives: [
    {
      bn: "সিএসএস (CSS) এর পূর্ণ রূপ এবং এটি কীভাবে ওয়েবসাইটের রূপসজ্জা নিয়ন্ত্রণ করে তা জানা।",
      en: "Learn how CSS controls the visual layout and styles of HTML elements.",
    },
    {
      bn: "সিএসএস ইন্টিগ্রেশনের ৩টি পদ্ধতি (Inline, Internal, External) এর পার্থক্য চিহ্নিত করা।",
      en: "Contrast inline, internal, and external CSS integration approaches.",
    },
    {
      bn: "সবচেয়ে গুরুত্বপূর্ণ 'বক্স মডেল' (Box Model) এবং মার্জিন বনাম প্যাডিংয়ের তফাৎ বোঝা।",
      en: "Master the Box Model, separating margin buffers from padding paddings.",
    },
    {
      bn: "ডিসপ্লে প্রপার্টি ও ফ্লেক্সবক্স (Flexbox) ব্যবহার করে এলিমেন্ট অ্যালাইনমেন্ট করতে শেখা।",
      en: "Use Flexbox properties to center and align nested layout boxes.",
    },
  ],
  sections: [
    {
      id: "what-is-css-styling",
      title: {
        bn: "১. সিএসএস কী ও কীভাবে কাজ করে? (What is CSS & How to Inject it)",
        en: "1. What is CSS & How to Inject it",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা যখন এইচটিএমএল দিয়ে একটি সাদা পাতায় বাটন, লিংক বা ইমেজ বসাই, তখন সাইটটি দেখতে ১৯৯০ দশকের পুরোনো খবরের কাগজের মতো ম্যাড়ম্যাড়ে দেখায়। আমাদের মন চায় বাটনে সুন্দর সবুজ রং দিতে, চারকোনা কোণগুলো গোল করে বাঁকা করতে, চমৎকার ফন্ট দিয়ে বড় হেডিং সাজাতে। এই জাদুকরী রূপসজ্জার নামই হলো **CSS (Cascading Style Sheets)**।

## Why should I learn this? (কেন শিখবো?)
ডিজাইন হলো যেকোনো সফটওয়্যারের প্রথম অনুভূতি (First Impression)। একটি কুৎসিত বা অগোছালো ওয়েবসাইট ইউজার এক সেকেন্ডের মধ্যে ক্লোজ করে চলে যান। সিএসএস দিয়ে আপনি যেকোনো সাধারণ এইচটিএমএল বাটনকে আধুনিক ইন্টারফেসের প্রিমিয়াম কাঁচের মতো চকচকে (Glassmorphism) ডিজাইনে রূপান্তর করতে পারবেন।

## What is CSS? (সিএসএস কী?)
**CSS** এর পূর্ণ রূপ হলো **Cascading Style Sheets**।
*   এর কাজ হলো এইচটিএমএল এর উপাদানগুলোর ডিজাইন, লেআউট, রং ও প্রদর্শন কেমন হবে তা নির্ধারণ করা।
*   **সিনট্যাক্স**: সিএসএস মূলত একটি সিলেক্টর এবং কার্লি ব্র্যাকেটের ভেতরের এক বা একাধিক প্রপার্টি ও ভ্যালুর জোড়া নিয়ে কাজ করে।

\`\`\`css
h1 {
  color: blue;
  font-size: 24px;
}
\`\`\`
*   \`h1\` হলো সিলেক্টর (কাকে স্টাইল করবো)।
*   \`color\` হলো সিএসএস প্রপার্টি (কী চেঞ্জ করবো)।
*   \`blue\` হলো ভ্যালু (কী রঙে চেঞ্জ করবো)।

---
## How to Add CSS (সিএসএস যুক্ত করার ৩ উপায়)
১. **Inline CSS**: এইচটিএমএল ট্যাগের ভেতরে সরাসরি \`style\` অ্যাট্রিবিউট ব্যবহার করে লেখা। (অগোছালো, পরিহার করা উচিত)।
   - \`<h1 style="color: red;">হ্যালো</h1>\`
২. **Internal CSS**: এইচটিএমএল ফাইলের \`<head>\` ট্যাগের ভেতরে \`<style>\` ট্যাগ দিয়ে লেখা।
৩. **External CSS (সেরা পদ্ধতি)**: আলাদা একটি \`style.css\` ফাইল বানিয়ে এইচটিএমএল ফাইলের সাথে লিঙ্ক করা।
   - \`<link rel="stylesheet" href="style.css">\` (এটি কোডকে পরিচ্ছন্ন রাখে)।`,
        en: `## Introduction
Raw HTML without design is plain and unappealing. CSS provides color, spacing, typography, and grid alignments.

## What is CSS?
Cascading Style Sheets. A design language used to style HTML tags, adjusting colors, positions, layouts, and responsiveness.

## Methods to Add CSS:
1. **Inline**: Declared directly on elements. E.g., \`<p style="color: red;">Text</p>\`.
2. **Internal**: Declared inside \`<style>\` tags in document heads.
3. **External (Industry Standard)**: Written in dedicated \`.css\` stylesheet files linked via head tags: \`<link rel="stylesheet" href="style.css">\`.`,
      },
    },
    {
      id: "colors-fonts-design",
      title: {
        bn: "২. কালার, ফন্ট ও ডিজাইনের বেসিক (Colors, Fonts & Styles)",
        en: "2. Colors, Fonts & Styles",
      },
      content: {
        bn: `## Visual Properties (দৃশ্যমান ডিজাইনের মূল প্রপার্টিসমূহ)
সিএসএস দিয়ে লেখার চেহারা ও ব্যাকগ্রাউন্ড কালার চেঞ্জ করার সবচেয়ে সাধারণ প্রপার্টিগুলো দেখে নিই:

১. **color**: লেখার বা টেক্সটের রং পরিবর্তন করতে।
   - \`color: green;\` বা হেক্স কোড: \`color: #4CAF50;\`
২. **background-color**: যেকোনো কন্টেইনার বা বাটনের ভেতরের ব্যাকগ্রাউন্ড রং সেট করতে।
   - \`background-color: lightgray;\`
৩. **font-size**: টেক্সটের ফন্ট সাইজ বা লেখার আকৃতি বড়-ছোট করতে।
   - \`font-size: 16px;\` বা রেস্পন্সিভ সাইজ \`1.2rem;\`
৪. **font-family**: ব্রাউজারের ডিফল্ট ফন্ট বাদ দিয়ে সুন্দর প্রিমিয়াম ফন্ট ফ্যামিলি (যেমন Inter, Roboto, Montserrat) সেট করতে।
   - \`font-family: 'Poppins', sans-serif;\`

---
## Border & Radius (বর্ডার ও গোল কোণ)
*   **border**: উপাদানের চারপাশে দাগ বা বর্ডার দিতে।
    - \`border: 2px solid black;\` (২ পিক্সেল চওড়া ডিক্লেয়ারেশন)।
*   **border-radius**: চারকোণা কোণগুলোকে গোল করে বাঁকা করতে। এটি দিয়ে আমরা বাটনকে চমৎকার গোল ক্যাপসুল ডিজাইন দিতে পারি।
    - \`border-radius: 8px;\` (বাটনকে আধুনিক লুক দেয়)।`,
        en: `## Core Visual Properties
*   **color**: Changes typography text colors.
*   **background-color**: Sets container backgrounds.
*   **font-size**: Controls text size scales.
*   **font-family**: Overrides browser font fallbacks.

## Borders
*   \`border\`: Draws boundaries (e.g., \`border: 1px solid black;\`).
*   \`border-radius\`: Round-offs square corners to create capsular shapes.`,
      },
    },
    {
      id: "the-box-model",
      title: {
        bn: "৩. সিএসএস বক্স মডেল — মার্জিন ও প্যাডিং (The Essential Box Model)",
        en: "3. The Essential Box Model",
      },
      content: {
        bn: `## The Box Model (সবচেয়ে গুরুত্বপূর্ণ কনসেপ্ট)
সিএসএস-এর চোখে পেজের প্রতিটি ট্যাগ এক একটি অদৃশ্য চারকোণা বক্স বা বাক্স। এই বক্সের গঠনের নামই হলো **বক্স মডেল (Box Model)**।

বক্স মডেল মূলত ৪টি প্রধান লেয়ার বা স্তর নিয়ে গঠিত:

১. **Content**: বক্সের মাঝখানের আসল লেখা বা ছবি (আকার নিয়ন্ত্রণ করে \`width\` ও \`height\`)।
২. **Padding (প্যাডিং)**: কন্টেন্ট এবং তার চারপাশের বর্ডারের মধ্যবর্তী ভেতরের খালি জায়গা।
৩. **Border (বর্ডার)**: প্যাডিংয়ের চারপাশের দৃশ্যমান বা অদৃশ্য সীমানা লাইন।
৪. **Margin (মার্জিন)**: বর্ডারের বাইরের সীমানা পেরিয়ে অন্য এলিমেন্ট থেকে দূরত্ব বজায় রাখার জন্য বাইরের খালি জায়গা।

---
## Spacing (মার্জিন বনাম প্যাডিং)
সহজ ভাষায় মার্জিন ও প্যাডিংয়ের তফাৎ মনে রাখুন এভাবে:
*   **প্যাডিং (Padding)**: নিজের গায়ের কোট ঢিলেঢালা করার মতো ভেতরের স্পেস। (ভেতরের বাতাস বাড়ায়)।
*   **মার্জিন (Margin)**: সামাজিক দূরত্ব বজায় রাখার মতো নিজের সীমানার বাইরের স্পেস। (অন্য বস্তু থেকে দূরে ঠেলে দেয়)।`,
        en: `## The CSS Box Model
Every element in HTML page layouts acts as a rectangular box comprising 4 layout zones:
1. **Content**: The inner text, image, or payload data area.
2. **Padding**: Internal blank buffer space between content boundary and border lines.
3. **Border**: The frame wrapping the padding.
4. **Margin**: External space driving neighbor elements away.

## Margin vs. Padding
*   **Padding**: Inner spacing inside the element box.
*   **Margin**: Outer spacing pushing other boxes away.`,
      },
    },
    {
      id: "display-flexbox-intro",
      title: {
        bn: "৪. ডিসপ্লে প্রপার্টি এবং ফ্লেক্সবক্সের পরিচিতি (Display & Flexbox Intro)",
        en: "4. Display & Flexbox Intro",
      },
      content: {
        bn: `## The Display Property (ডিসপ্লে প্রপার্টি)
এইচটিএমএল উপাদানগুলো স্ক্রিনে কীভাবে জায়গা দখল করবে তা নির্ধারণ করে \`display\` প্রপার্টি:
*   **block**: পুরো লাইনের ফুল উইডথ দখল করে থাকে এবং পর পর নিচে নেমে যায় (যেমন: \`<div>\`, \`<h1>\`, \`<p>\`)।
*   **inline**: যতটুকু লেখা ততটুকুই জায়গা নেয়, নিচে নামে না (যেমন: \`<span>\`, \`<a>\`)।
*   **inline-block**: লেখার মতো পাশাপাশি থাকে কিন্তু প্যাডিং ও হাইট বাড়ানো যায়।

---
## Introduction to Flexbox (ফ্লেক্সবক্স কী?)
আগেকার দিনে সিএসএস দিয়ে এলিমেন্ট ডানে-বামে সারিবদ্ধ করা ছিল অত্যন্ত কঠিন কাজ। আধুনিক সিএসএসে এলিমেন্ট সাজানোর চমৎকার ইলাস্টিক জাদুর নাম হলো **Flexbox (ফ্লেক্সবক্স)**।

*   **সহজ কাজ**: একটি ফোল্ডারের ভেতরে থাকা বাটনগুলোকে ডানে, বামে বা সেন্টারে সমদূরত্বে সাজানো।
*   **কোড উদাহরণ**:
    \`\`\`css
    .parent-container {
      display: flex;
      justify-content: center; /* হরিজন্টাল লাইনে একদম মাঝে বসানো */
      align-items: center;     /* ভার্টিক্যাল লাইনে একদম মাঝে বসানো */
    }
    \`\`\`
*   \`justify-content: space-between;\` দিলে কার্ডগুলো পেজের ডানে-বামে সুন্দর সমান ফাঁক রেখে ছড়িয়ে পড়বে!`,
        en: `## The Display Property
Controls box behavior in relation to surrounding elements:
*   **block**: Stretches full available width, starting on new lines (e.g., div, p).
*   **inline**: Wraps tightly around content without forcing new lines (e.g., span, a).

## Flexbox Layouts
Flexbox is a one-dimensional layout model managing alignments and spaces redistribution between nested items:
*   \`display: flex\`: Enables flex layouts on parents container.
*   \`justify-content: center\`: Horizontally centers children.
*   \`align-items: center\`: Vertically centers children.`,
      },
    },
    {
      id: "interior-design-analogy",
      title: {
        bn: "৫. ইন্টেরিয়র ডিজাইন ও বক্স মডেলের রূপক (Interior Design Metaphor)",
        en: "5. Interior Design Metaphor",
      },
      content: {
        bn: `## The Interior Design Metaphor (ঘরের সাজসজ্জা রূপক)
সিএসএস কীভাবে পেজে কাজ করে তা একটি নতুন খালি রেডিমেড ফ্ল্যাটের সাজসজ্জার সাথে মিলিয়ে নিন:
*   **এইচটিএমএল বডি**: খালি ফ্ল্যাটের চার দেয়াল।
*   **সিএসএস কালার ও ফন্ট**: দেয়ালের চমৎকার লাক্সারি কালার পেইন্ট করা এবং লাইট ফিক্স করা।
*   **বক্স মডেল কন্টেন্ট**: আপনার বসার সোফা বা টিভি।
*   **প্যাডিং (Padding)**: সোফার গদি কতটুকু নরম বা সোফা থেকে তার কাঠের বর্ডারের দূরত্ব। (সোফার নিজের ভেতরের স্পেস)।
*   **মার্জিন (Margin)**: সোফাটি দেয়াল থেকে ২ ফুট দূরে সরানো বা ডাইনিং টেবিল থেকে ৫ ফুট দূরে সরিয়ে বসানো। (দুই আসবাবপত্রের মাঝের দূরত্ব)।
*   **ফ্লেক্সবক্স (Flexbox)**: সোফা, ফ্যান ও লাইটগুলোকে ড্রয়িংরুমের মাঝখানে চমৎকার সমদূরত্বে সুসজ্জিত করার বুদ্ধিমান এলাইনমেন্ট মেকানিজম!`,
        en: `## Metaphor
*   **HTML Structure**: Structural concrete apartment walls.
*   **CSS Colors/Fonts**: Painting walls blue and installing decorative lights.
*   **Box Model Content**: Your sofa.
*   **Padding**: The thickness of the cushions keeping you away from the wood frame.
*   **Margin**: Pushing the sofa 2 feet away from the wall to leave a walkway.
*   **Flexbox**: Alignment rules distributing furniture evenly.`,
      },
      codeBlock: {
        fileName: "style.css",
        language: "css",
        code: `/* কার্ড এবং বাটন আধুনিক সিএসএস লেআউট */
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.profile-card {
  width: 300px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px; /* ভেতরের প্যাডিং */
  margin: 10px;  /* বাইরের মার্জিন */
}

.btn-primary {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-family: inherit;
}`,
        explanations: [
          {
            line: 2,
            text: {
              bn: "ফ্লেক্সবক্স দিয়ে প্যারেন্ট কন্টেইনারের ভেতরের প্রোফাইল কার্ডটিকে একদম সেন্টারে নিয়ে আসা।",
              en: "Utilizing flexbox layouts to center child profile cards horizontally and vertically.",
            },
          },
          {
            line: 12,
            text: {
              bn: "প্রোফাইল কার্ডের বর্ডার থেকে কন্টেন্টের ভেতরের প্যাডিং ২৪ পিক্সেল ফাঁকা করে বডি সুন্দর করা।",
              en: "Creating 24px padding inside the card borders for readability spacing.",
            },
          },
        ],
      },
    },
    {
      id: "practice-css-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার বক্স মডেল লেআউট এবং এলিমেন্ট ডিসপ্লে এলাইনমেন্টের ধারণা পোক্ত করবে।`,
        en: `## Reflection & Lab Tasks
Solidify CSS properties knowledge before exploring media queries and mobile layouts in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "সিএসএস এর বডি লেআউট প্রপার্টি ও মার্জিন লজিক আয়ত্ত করলে আপনি যেকোনো ফিজমা বা ইউআই ডিজাইন স্ক্রিনকে হুবহু কোডে কনভার্ট করতে পারবেন।",
          en: "Translating mockups to functional code requires mastering exact CSS box layouts and alignments.",
        },
        whyWorks: {
          bn: "ব্রাউজার সিএসএস ফাইল রিড করে রেন্ডার ট্রি তৈরি করে এবং পেজের প্রতিটি পিক্সেলের অবস্থান গণনা (Reflow/Layout) করে স্ক্রিনে পেইন্ট করে।",
          en: "CSS triggers style computations, merging selector rules to output pixel positioning in layout loops.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা বক্সের চওড়া হিসেব করার ঝামেলা এড়াতে শুরুতে সর্বদা '* { box-sizing: border-box; }' গ্লোবাল রিসেট রুল ডিক্লেয়ার করেন।",
          en: "Seniors apply a universal reset 'box-sizing: border-box' so margins/paddings do not stretch widths.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো মার্জিন কোলাইডিং (Margin Collapse) না বুঝে পাশাপাশি স্পেসিং দেওয়া, যার ফলে ডিজাইন ডানে বামে অগোছালো দেখায়।",
          en: "Be aware of collapsing vertical margins, where browser renders adjacent top/bottom margins as one.",
        },
        debugging: {
          bn: "মার্জিন ও প্যাডিংয়ের ভুল স্পেস ট্র্যাক করতে ক্রোম ডেভটুলসের 'Inspect' মেকানিজম দিয়ে বক্স মডেল ভিজ্যুয়ালাইজেশন কালার ম্যাপ চেক করুন।",
          en: "Hover element grids inside browser inspect panels to view highlighted green padding and orange margin overlays.",
        },
        performance: {
          bn: "ডিজাইন স্ক্রিনকে ফ্লেক্সিবল রাখতে হাইট বা উইডথ ডিক্লেয়ার করার সময় ফিক্সড পিক্সেলের বদলে রিলেটিভ ইউনিট (যেমন %, rem, em) ব্যবহার করুন।",
          en: "Adopt relative styling units (rem/em) to ensure scaling adaptability across variable viewport fonts sizes.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "cs-q1",
      question: {
        bn: "CSS এর পূর্ণ রূপ কোনটি?",
        en: "What does CSS stand for?",
      },
      options: [
        { bn: "Cascading Style Sheets", en: "Cascading Style Sheets" },
        { bn: "Computer Style System", en: "Computer Style System" },
        { bn: "Creative Styling Sheet", en: "Creative Styling Sheet" },
        { bn: "Control Software Schema", en: "Control Software Schema" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "CSS এর পূর্ণ রূপ হলো Cascading Style Sheets যা এইচটিএমএল পেজের রূপসজ্জা ও লেআউট স্টাইল করে।",
        en: "CSS handles the presentation layer of markup pages.",
      },
    },
    {
      id: "cs-q2",
      question: {
        bn: "সিএসএস বক্স মডেলের (Box Model) অংশগুলো ক্রমানুসারে ভেতরের দিক থেকে বাইরের দিকে কোনটি সঠিক?",
        en: "Order the CSS Box Model zones from the inside out.",
      },
      options: [
        {
          bn: "Content ➔ Margin ➔ Border ➔ Padding",
          en: "Content ➔ Margin ➔ Border ➔ Padding",
        },
        {
          bn: "Content ➔ Padding ➔ Border ➔ Margin",
          en: "Content ➔ Padding ➔ Border ➔ Margin",
        },
        {
          bn: "Border ➔ Content ➔ Margin ➔ Padding",
          en: "Border ➔ Content ➔ Margin ➔ Padding",
        },
        {
          bn: "Margin ➔ Border ➔ Padding ➔ Content",
          en: "Margin ➔ Border ➔ Padding ➔ Content",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "বক্স মডেলের কেন্দ্রের লেয়ার হলো কন্টেন্ট, তার বাইরে প্যাডিং, তার বাইরে সীমানা বর্ডার এবং সবার বাইরে মার্জিন ফাঁকা স্পেস।",
        en: "The zones start with content, wrapped in padding, surrounded by border frame, and padded externally by margins.",
      },
    },
    {
      id: "cs-q3",
      question: {
        bn: "কন্টেন্ট এবং বর্ডারের ভেতরের মধ্যবর্তী খালি জায়গাকে কী বলা হয়?",
        en: "What is the space between the content boundary and its border called?",
      },
      options: [
        { bn: "Margin (মার্জিন)", en: "Margin" },
        { bn: "Padding (প্যাডিং)", en: "Padding" },
        { bn: "Box Model Out", en: "Box Model Out" },
        { bn: "Flex Line", en: "Flex Line" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "প্যাডিং হলো উপাদানের ভেতরের খালি অংশ যা কন্টেন্টকে দেয়াল বর্ডার থেকে দূরে ঠেলে স্বস্তি দেয়।",
        en: "Padding defines the internal clearance area within the element border.",
      },
    },
    {
      id: "cs-q4",
      question: {
        bn: "একটি উপাদানের বর্ডারের বাইরের দিক থেকে অন্য এলিমেন্টের মধ্যবর্তী দূরত্ব বজায় রাখার স্পেসকে কী বলে?",
        en: "What is the external space beyond an element's border called?",
      },
      options: [
        { bn: "Padding", en: "Padding" },
        { bn: "Margin (মার্জিন)", en: "Margin" },
        { bn: "Display inline", en: "Display inline" },
        { bn: "Box size", en: "Box size" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "মার্জিন হলো সীমানার বাইরের দৃশ্যমান বা অদৃশ্য স্পেস যা অন্য উপাদানকে দূরে সরিয়ে রাখে।",
        en: "Margins push adjacent containers away, managing outer spaces.",
      },
    },
    {
      id: "cs-q5",
      question: {
        bn: "এলিমেন্টগুলোকে ডানে-বামে বা সেন্টারে সহজে সুসজ্জিত ও বিন্যস্ত করতে সিএসএস-এ কোন ডাইনামিক লেআউট সিস্টেম ব্যবহার করা হয়?",
        en: "Which CSS layout system aligns items horizontally or vertically?",
      },
      options: [
        { bn: "Inline text size", en: "Inline text size" },
        { bn: "Flexbox (ফ্লেক্সবক্স)", en: "Flexbox" },
        { bn: "Anchor link style", en: "Anchor link style" },
        { bn: "Metadata", en: "Metadata" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ফ্লেক্সবক্স হলো ওয়ান-ডাইমেনশনাল ইলাস্টিক লেআউট মডেল যা আইটেম এলাইনমেন্ট ও ফাঁক ডিস্ট্রিবিউট করে।",
        en: "Flexbox aligns and distributes space among items in container blocks dynamically.",
      },
    },
  ],
  practice: [
    {
      bn: "আইডি 'btn-submit' এর ব্যাকগ্রাউন্ড কালার নীল (blue) এবং টেক্সটের কালার সাদা (white) করার সিএসএস কোড লিখুন।",
      en: "Write a CSS rule setting a #btn-submit background color blue and text color white.",
    },
    {
      bn: "একটি বাক্সের মার্জিন এবং প্যাডিংয়ের কাজের প্রধান তফাৎ দুটি সহজ বাক্যে বুঝিয়ে লিখুন।",
      en: "Explain the difference between padding and margin using two sentences.",
    },
    {
      bn: "ফ্লেক্সবক্স ব্যবহার করে কোনো প্যারেন্ট বক্সের ঠিক মাঝখানে ভেতরের চাইল্ড বক্সটিকে বসানোর ৩ লাইনের কোড লিখুন।",
      en: "Write 3 CSS lines to center children within display flex contexts.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি প্রিমিয়াম প্রোফাইল কার্ডের সিএসএস ডিজাইন",
      en: "Premium Profile Card CSS Styling Design",
    },
    description: {
      bn: "একটি ৩০০ পিক্সেল চওড়া ড্যাশবোর্ড কার্ড তৈরি করুন। কার্ডের ব্যাকগ্রাউন্ড সাদা, বর্ডার কোণগুলো ১২ পিক্সেল বাঁকা, ভেতরের প্যাডিং ২৪ পিক্সেল এবং বাইরে ১০ পিক্সেল মার্জিন যুক্ত করে স্টাইল শিট অবজেক্টটি সাবমিট করুন।",
      en: "Design the CSS styling properties for a dashboard card container, defining width, backgrounds, border-radius, paddings, and margins.",
    },
    starterCode: `/* CSS Profile Card Selector Map */
.profile-card {
  width: 300px;
  background-color: #ffffff;
  
  /* কোড লিখুন: বর্ডার-রেডিয়াস, প্যাডিং ও মার্জিন প্রপার্টি যুক্ত করুন */
  
}`,
    solution: {
      code: `/* CSS Profile Card Active Style */
.profile-card {
  width: 300px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 12px; /* গোল কোণ */
  padding: 24px;       /* ভেতরের ফাঁকা স্পেস */
  margin: 10px;        /* বাইরের সামাজিক দূরত্ব */
  box-sizing: border-box;
}`,
      explanation: {
        bn: "চমৎকার ডিজাইন স্টাইল! কার্ড উইডথ, বর্ডার রেডিয়াস, প্যাডিং ও মার্জিন প্রপার্টি ডিক্লেয়ারেশনের প্রতিটি ফ্লো শতভাগ সঠিক হয়েছে।",
        en: "Applying border-radius and paddings configures proper visual spacing hierarchies in user interfaces.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "সিএসএস-এ box-sizing: border-box; ব্যবহার করার গুরুত্ব ও প্রয়োজনীয়তা কী?",
        en: "Why is 'box-sizing: border-box' important in CSS?",
      },
      answer: {
        bn: "ডিফল্টভাবে ব্রাউজার \`content-box\` ব্যবহার করে। এর ফলে আপনি যদি কোনো বক্সের \`width: 200px\` সেট করেন এবং তারপর \`padding: 20px\` ও \`border: 2px\` যোগ করেন, তবে বক্সটির আসল মোট চওড়া হয়ে যাবে ২০৪+৪০ = ২৪৪ পিক্সেল (উইডথের সাথে প্যাডিং ও বর্ডার যোগ হয়ে বক্সটি বড় হয়ে লেআউট ভেঙে ফেলে)।\nযখন আমরা \`box-sizing: border-box\` ব্যবহার করি, তখন ব্রাউজার উইডথের ভেতরের দিকেই প্যাডিং ও বর্ডারকে হিসাব করে। অর্থাৎ, আপনি উইডথ ২০০ পিক্সেল দিলে বক্সটি সর্বাবস্থায় ২০০ পিক্সেলই থাকবে, এর ভেতরের কন্টেন্ট নিজে সংকুচিত হয়ে প্যাডিং এডজাস্ট করবে। এটি এলিমেন্টের সাইজ হিসাব করা অত্যন্ত সহজ করে দেয় এবং লেআউট ক্র্যাশ হওয়া থেকে বাঁচায়।",
        en: "By default, browser layout engines calculate element sizes using 'content-box', where padding and borders stretch the declared width (e.g., width 200px + padding 20px = 240px container). Declaring 'box-sizing: border-box' forces padding and borders to absorb space internally, keeping the total rendered width fixed at the declared value. This prevents container overflow bugs.",
      },
    },
    {
      question: {
        bn: "ডিসপ্লে প্রপার্টির block, inline এবং inline-block মানের মধ্যে মূল তফাৎগুলো কী কী?",
        en: "What are the core differences between display: block, inline, and inline-block?",
      },
      answer: {
        bn: "১. **block**: এটি স্ক্রিনের পুরো চওড়া উইডথ দখল করে নেয় এবং পর পর নতুন লাইনে শুরু হয়। এর \`width\` ও \`height\` এবং মার্জিন/প্যাডিং চারদিকে কাস্টমাইজ করা যায় (যেমন: div, p, h1)।\n২. **inline**: এটি কোনো নতুন লাইন তৈরি করে না, লাইনের পাশাপাশি থাকে এবং কেবল লেখার সমান উইডথ নেয়। সবচেয়ে বড় বিষয়, এর উপর \`width\` ও \`height\` প্রপার্টি কোনো কাজ করে না, এবং টপ/বটম মার্জিন কাজ করে না (যেমন: span, a, strong)।\n৩. **inline-block**: এটি মূলত একটি হাইব্রিড মোড। এটি inline এর মতো পাশাপাশি থাকে কিন্তু block এর মতো এর উপর \`width\`, \`height\` এবং মার্জিন/প্যাডিং পুরোপুরি কাজ করে (যেমন: বাটন ও ইমেজ ট্যাগের ডিফল্ট আচরণ)।",
        en: "1. **block**: Starts on a new line and stretches to fill the full parent width. Accepts width, height, margins, and paddings styling rules.\n2. **inline**: Remains on the same line, wrapping content tightly. Disallows width and height specifications, and ignores top/bottom margins.\n3. **inline-block**: Remains inline on the same line, but respects width, height, top/bottom margins, and paddings just like a block element.",
      },
    },
  ],
};
