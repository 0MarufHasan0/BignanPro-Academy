export const chapter25Content = {
  id: "chapter-25",
  number: 25,
  title: {
    bn: "অধ্যায় ২৫: রিঅ্যাক্ট স্টেট ও ইভেন্টস — ডাইনামিক ইউআই",
    en: "Chapter 25: React State & Events (Dynamic UI)",
  },
  description: {
    bn: "রিঅ্যাক্ট স্টেট কী, ইউজ-স্টেট (useState) হুকের পরিচিতি এবং বাটনে বা ইনপুটে ইউজার অ্যাকশন ইভেন্ট হ্যান্ডল করার বাস্তব গাইড।",
    en: "Learn about React state, the useState hook, and capturing user actions using interactive event handlers.",
  },
  difficulty: "beginner",
  readingTime: 12,
  objectives: [
    {
      bn: "স্টেট (State) এবং প্রপস (Props)-এর মধ্যে পার্থক্য ও ব্যবহার ক্ষেত্র পরিষ্কারভাবে বোঝা।",
      en: "Understand the core difference and use cases of State versus Props.",
    },
    {
      bn: "ইউজ-স্টেট (useState) হুক দিয়ে কীভাবে কম্পোনেন্টের মেমরিতে ডাটা স্টোর করতে হয় তা শেখা।",
      en: "Learn how to store variables in component memory using the useState hook.",
    },
    {
      bn: "রিঅ্যাক্টে বিভিন্ন ইউজার ইন্টারঅ্যাকশন যেমন ক্লিক (onClick) ও ইনপুট চেঞ্জ (onChange) ইভেন্ট হ্যান্ডল করা।",
      en: "Handle user interactions in React using events like onClick and onChange.",
    },
    {
      bn: "স্টেট আপডেট কীভাবে কম্পোনেন্টের রি-রেন্ডার লাইফসাইকেল ট্রিগার করে তা জানা।",
      en: "Comprehend how state modifications schedule re-renders to update browser displays.",
    },
  ],
  sections: [
    {
      id: "what-is-state-concept",
      title: {
        bn: "১. স্টেট কী ও কেন প্রয়োজন? (What is State & Why We Need It)",
        en: "1. What is State & Why We Need It",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
পূর্ববর্তী অধ্যায়ে আমরা দেখেছি কীভাবে **Props (প্রপস)** ব্যবহার করে প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাঠানো যায়। কিন্তু প্রপসের একটি বড় সীমাবদ্ধতা রয়েছে: এটি **রিড-অনলি (Read-only)**। অর্থাৎ, একবার প্রপস ডিফাইন করে দিলে চাইল্ড কম্পোনেন্ট নিজের থেকে সেটি পরিবর্তন করতে পারে না।

কিন্তু আমাদের ওয়েবসাইটগুলো তো কেবল স্ট্যাটিক রিডিং ম্যাটেরিয়াল নয়। ব্যবহারকারী যখন কোনো বাটনে ক্লিক করবেন, কিংবা ফর্মে কিছু লিখবেন, তখন সেই অনুযায়ী স্ক্রিনের ইউআই পরিবর্তন হওয়া দরকার। এই ডাইনামিক ডেটা স্টোর করার জন্য রিঅ্যাক্টে ব্যবহৃত হয় **State (স্টেট)**।

---

## What is State? (স্টেট কী?)
**স্টেট** হলো কোনো একটি নির্দিষ্ট কম্পোনেন্টের নিজস্ব **অভ্যন্তরীণ মেমরি বা ব্রেইন (Internal Memory)**।
*   এটি কম্পোনেন্টের ভেতরেই তৈরি হয় এবং পরিবর্তিত হতে পারে।
*   যখনই স্টেট পরিবর্তন হয়, রিঅ্যাক্ট স্বয়ংক্রিয়ভাবে সেই কম্পোনেন্ট এবং তার চাইল্ড কম্পোনেন্টগুলোকে পুনরায় ড্র বা রেন্ডার করে।

### সাধারণ জাভাস্ক্রিপ্ট ভ্যারিয়েবল বনাম রিঅ্যাক্ট স্টেট
আপনার মনে প্রশ্ন জাগতে পারে, সাধারণ জাভাস্ক্রিপ্ট ভ্যারিয়েবল (যেমন: \`let count = 0\`) দিয়ে কেন আমরা কাজ করতে পারি না?

\`\`\`javascript
// সাধারণ জাভাস্ক্রিপ্ট ভ্যারিয়েবল দিয়ে চেষ্টা
let count = 0;
function handleClick() {
  count = count + 1; // মেমরিতে মান বৃদ্ধি পাবে, কিন্তু রিঅ্যাক্ট স্ক্রিন আপডেট করবে না!
}
\`\`\`
**সমস্যা**: সাধারণ ভ্যারিয়েবলের মান পরিবর্তন হলে রিঅ্যাক্ট তা জানতে পারে না। স্ক্রিন আপডেট বা রি-রেন্ডার করার জন্য রিঅ্যাক্টকে একটি নোটিফিকেশন পাঠাতে হয়। রিঅ্যাক্ট স্টেট ব্যবহারের মাধ্যমেই কেবল এই অটো-রেন্ডার নোটিফিকেশনটি পাঠানো সম্ভব।`,
        en: `## Introduction
In the previous chapter, we learned how to pass read-only data using **Props**. However, real-world web apps require interactivity. When a user clicks a button, types in a form, or opens a modal, the UI must update. To handle dynamic changes in React, we use **State**.

---

## What is State?
State is a component's **internal memory**. It holds information that belongs to the component and can change over time based on user interactions.
*   Unlike Props, which are passed down from a parent, State is defined and modified directly within the component itself.
*   Whenever a component's state changes, React automatically schedules a **re-render** to display the updated data.

### JavaScript Variables vs. React State
Why can't we just use a standard JavaScript variable like \`let count = 0\`?
Normal variables do not trigger a UI update when their values change. React doesn't monitor standard variable reference changes. We need React's built-in state engine to tell it when a visual re-render is required.`,
      },
    },
    {
      id: "use-state-hook",
      title: {
        bn: "২. ইউজ-স্টেট হুকের পরিচিতি (The useState Hook)",
        en: "2. The useState Hook",
      },
      content: {
        bn: `## The useState Hook (ইউজ-স্টেট হুক)
ফাংশনাল কম্পোনেন্টে স্টেট যোগ করার জন্য রিঅ্যাক্ট আমাদের একটি বিল্ট-ইন ফাংশন দেয়, যার নাম **useState (ইউজ-স্টেট)**। একে রিঅ্যাক্টের ভাষায় একটি **Hook (হুক)** বলা হয়।

### useState লেখার সিনট্যাক্স
ইউজ-স্টেট ব্যবহার করতে হলে প্রথমে ফাইলের একদম ওপরে এটি ইম্পোর্ট করতে হয়:
\`\`\`javascript
import React, { useState } from 'react';
\`\`\`

এরপর কম্পোনেন্ট ফাংশনের ভেতর নিচের লাইনের মতো স্টেট ডিক্লেয়ার করা হয়:
\`\`\`javascript
const [stateName, setStateFunction] = useState(initialValue);
\`\`\`

আসুন এই সিনট্যাক্সের প্রতিটি অংশ ভেঙে বুঝি:
1.  **useState(initialValue)**: এই ফাংশনটি আমাদের স্টেটের একটি প্রাথমিক মান গ্রহণ করে (যেমন: সংখ্যা \`0\`, খালি স্ট্রিং \`""\`, কিংবা বুলিয়ান \`false\`)।
2.  **Array Destructuring ([ ])**: \`useState\` ফাংশনটি ২টি উপাদান বিশিষ্ট একটি অ্যারে রিটার্ন করে:
    *   **stateName (স্টেট ভ্যারিয়েবল)**: এটি স্টেটের বর্তমান মান ধারণ করে (যেমন: \`count\`)।
    *   **setStateFunction (স্টেট সেটার ফাংশন)**: এটি একটি স্পেশাল ফাংশন যা ব্যবহার করে আমরা স্টেটের মান পরিবর্তন করি (যেমন: \`setCount\`)।

\`\`\`javascript
// উদাহরণ:
const [count, setCount] = useState(0);
// এখানে count-এর শুরুর মান ০। count পরিবর্তন করতে হলে setCount ফাংশন কল করতে হবে।
\`\`\``,
        en: `## The useState Hook
To add state to a functional component, React provides a built-in function called **useState**. This belongs to a special category of functions in React known as **Hooks**.

### Syntax of useState
First, import it at the very top of your React file:
\`\`\`javascript
import React, { useState } from 'react';
\`\`\`

Inside your component, call \`useState\` to declare a state variable:
\`\`\`javascript
const [stateName, setStateFunction] = useState(initialValue);
\`\`\`

Let's break down this syntax:
1.  **initialValue**: The default starting value of your state (e.g., a number \`0\`, a boolean \`false\`, or a string \`""\`).
2.  **Array Destructuring ([ ])**: \`useState\` returns an array with exactly two elements:
    *   **stateVariable**: The variable holding the current state value.
    *   **stateSetterFunction**: A function you call to update the state variable and trigger a re-render.`,
      },
    },
    {
      id: "event-handling-react",
      title: {
        bn: "৩. রিঅ্যাক্টে ইভেন্ট হ্যান্ডলিং (Event Handling in React)",
        en: "3. Event Handling in React",
      },
      content: {
        bn: `## Event Handling (ইভেন্ট হ্যান্ডলিং কী?)
ব্যবহারকারী যখন ওয়েবসাইটে কোনো বাটনে ক্লিক করেন, ইনপুট বক্সে টাইপ করেন কিংবা মাউস নাড়াচড়া করেন, ব্রাউজার তখন এক একটি **Event (ইভেন্ট)** তৈরি করে। এই ইভেন্টগুলোকে রিসিভ করে কোড এক্সিকিউট করাকেই বলা হয় ইভেন্ট হ্যান্ডলিং।

### HTML বনাম React Event Handling
এইচটিএমএল এবং রিঅ্যাক্ট ইভেন্ট হ্যান্ডলিংয়ের সিনট্যাক্সে ২টি প্রধান পার্থক্য রয়েছে:

1.  **CamelCase নামকরণ**: রিঅ্যাক্ট ইভেন্টগুলোর নাম CamelCase আকারে লিখতে হয়। যেমন: HTML-এর \`onclick\` হয়ে যায় \`onClick\`, এবং \`onchange\` হয়ে যায় \`onChange\`।
2.  **ফাংশন রেফারেন্স পাস**: রিঅ্যাক্ট ইভেন্ট হ্যান্ডলারে কোটেশন মার্কের বদলে সেকেন্ড ব্র্যাকেট বা কার্লি ব্রেসের ভেতর ফাংশনের রেফারেন্স দিতে হয়।

\`\`\`jsx
// HTML style
<button onclick="handleClick()">ক্লিক করুন</button>

// React style (ফাংশনের শেষে প্রথম বন্ধনী বা Parentheses থাকবে না!)
<button onClick={handleClick}>ক্লিক করুন</button>
\`\`\`

### ফাংশন রেফারেন্স বনাম ফাংশন কল
ইভেন্ট লিসেনারে \`onClick={handleClick}\` লিখতে হবে, ভুল করেও \`onClick={handleClick()}\` লেখা যাবে না।
*   **রেফারেন্স (\`{handleClick}\`)**: মানে হলো "বাটনে ক্লিক করা হলে তবেই এই ফাংশনটি রান করো।" (সঠিক)
*   **কল (\`{handleClick()}\`)**: মানে হলো "বাটনে ক্লিক করার জন্য অপেক্ষা না করে পেজটি লোড হওয়ার সাথে সাথেই ফাংশনটি ইনস্ট্যান্ট রান করে দাও!" (ভুল, এটি অনেক সময় ইনফিনিট লুপ তৈরি করে)।`,
        en: `## Event Handling
An event is an action triggered by the user (like clicking a button, hovering, typing, or submitting a form). React captures these browser events and allows us to handle them using JavaScript functions.

### HTML vs. React Event Handling
There are two main differences:
1.  **CamelCase Naming**: Event names are camelCase in React. E.g., \`onclick\` becomes \`onClick\`, and \`onchange\` becomes \`onChange\`.
2.  **Function Reference Passing**: In JSX, we pass the function reference in curly braces rather than a string callback.

\`\`\`jsx
// HTML
<button onclick="handleClick()">Click Me</button>

// React (Pass the function reference directly without calling it)
<button onClick={handleClick}>Click Me</button>
\`\`\`

### Reference vs. Execution
Make sure you pass \`onClick={handleClick}\` and not \`onClick={handleClick()}\`.
*   \`{handleClick}\` passes the function reference to be executed later when the click occurs.
*   \`{handleClick()}\` calls the function immediately during rendering, which will cause unwanted execution or infinite render loops.`,
      },
    },
    {
      id: "re-render-lifecycle",
      title: {
        bn: "৪. রি-রেন্ডার লাইফসাইকেল (The Re-render Lifecycle)",
        en: "4. The Re-render Lifecycle",
      },
      content: {
        bn: `## Re-render Lifecycle (রি-রেন্ডার কীভাবে কাজ করে?)
যখনই আমরা কোনো স্টেট সেটার ফাংশন কল করি (যেমন: \`setCount\`), রিঅ্যাক্ট ব্যাকগ্রাউন্ডে একটি নিখুঁত লাইফসাইকেল বা ফ্লো অনুসরণ করে:

1.  **Trigger (ট্রিগার)**: ব্যবহারকারী বাটনে ক্লিক করলেন ➔ ইভেন্ট হ্যান্ডলার চললো ➔ স্টেট সেটার ফাংশন \`setCount(newValue)\` কল হলো।
2.  **Render (রেন্ডার)**: রিঅ্যাক্ট বুঝতে পারলো যে কম্পোনেন্টের স্টেট চেঞ্জ হয়েছে। সে পুনরায় কম্পোনেন্ট ফাংশনটি রান করে একটি নতুন ভার্চুয়াল ডম (Virtual DOM) তৈরি করে।
3.  **Commit (কমিট)**: রিঅ্যাক্ট পূর্বের ভার্চুয়াল ডমের সাথে নতুনটির তুলনা করে কেবল পরিবর্তিত ডম নোডটি আসল ব্রাউজার স্ক্রিনে আপডেট করে দেয়।

এই চমৎকার রেন্ডারিং ফ্লো-র কারণেই পেজ রিফ্রেশ না হয়েই ইউজার ইন্টারফেস চোখের পলকে ডাইনামিকালি আপডেট হয়ে যায়।`,
        en: `## The Re-render Lifecycle
When a state update is initiated, React follows a simple, structured loop:
1.  **Trigger**: User clicks a button ➔ Setter function \`setCount(count + 1)\` is called.
2.  **Render**: React re-executes the component function with the updated state value, building a new Virtual DOM tree representation.
3.  **Commit**: React compares the new Virtual DOM with the old one (Diffing) and applies only the exact difference to the real browser DOM.

This ensures high-performance UI updates without reloading the browser window.`,
      },
    },
    {
      id: "state-analogy-switch",
      title: {
        bn: "৫. সুইচ ও কাউন্টার অ্যানালজি (Light Switch & Counter Analogy)",
        en: "5. Light Switch & Counter Analogy",
      },
      content: {
        bn: `## Real-world Analogy (বাস্তব রূপক)
রিঅ্যাক্ট স্টেটকে দেয়ালের একটি লাইট সুইচের সাথে তুলনা করতে পারেন:
*   **State (অবস্থা)**: লাইটের অবস্থা (হয় \`ON\` অথবা \`OFF\`)। এটি একটি বুলিয়ান মান।
*   **Event (ইভেন্ট)**: সুইচে আঙুল দিয়ে চাপ দেওয়া।
*   **State Update (স্টেট পরিবর্তন)**: চাপ দেওয়ার ফলে সুইচটি অন থেকে অফ বা অফ থেকে অন হলো।
*   **UI Render (দৃশ্যমান পরিবর্তন)**: ঘর অন্ধকার হলো অথবা আলোতে ভরে উঠলো!

আসুন এবার একটি সম্পূর্ণ ইন্টারেক্টিভ কাউন্টার কম্পোনেন্টের কোড দেখি:`,
        en: `## Real-world Analogy
Think of state as a wall-mounted light switch:
*   **State**: The physical light status (either \`ON\` or \`OFF\`).
*   **Event**: Pressing the switch toggle.
*   **State Update**: Flipping the value from true to false or vice versa.
*   **UI Render**: The light bulb illuminating or shutting down on the wall.

Let's look at a fully functional Counter component below:`,
      },
      codeBlock: {
        fileName: "Counter.jsx",
        language: "jsx",
        code: `import React, { useState } from 'react';

export default function Counter() {
  // ১. স্টেট ডিক্লেয়ারেশন (শুরুর মান ০)
  const [count, setCount] = useState(0);

  // ২. ইভেন্ট হ্যান্ডলার ফাংশনসমূহ
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 border border-slate-100 text-center">
      <h2 className="text-xl font-bold text-slate-800">রিঅ্যাক্ট কাউন্টার (React Counter)</h2>
      
      {/* ৩. স্টেটের মান প্রদর্শন */}
      <div className="text-4xl font-extrabold text-indigo-600 my-4">{count}</div>
      
      <div className="flex justify-center gap-4">
        {/* ৪. ক্লিক ইভেন্টের সাথে ফাংশন লিংক করা */}
        <button 
          onClick={handleDecrement}
          className="px-4 py-2 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
        >
          হ্রাস করুন (-)
        </button>
        <button 
          onClick={handleIncrement}
          className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          বৃদ্ধি করুন (+)
        </button>
      </div>
    </div>
  );
}`,
        explanations: [
          {
            line: 5,
            text: {
              bn: "useState(0) দিয়ে count স্টেটের মান শুরুতে ০ সেট করা হয়েছে। setCount হলো মান পরিবর্তন করার গেটওয়ে ফাংশন।",
              en: "Declaring count state initialized at 0. setCount is the dedicated update function.",
            },
          },
          {
            line: 9,
            text: {
              bn: "setCount(count + 1) কল করার মাধ্যমে আমরা রিঅ্যাক্টকে বলছি count-এর মান ১ বৃদ্ধি করে স্ক্রিন রি-রেন্ডার করতে।",
              en: "setCount schedules a state transition and tells React to re-render the component.",
            },
          },
          {
            line: 28,
            text: {
              bn: "onClick={handleDecrement} বাটনে ক্লিক করার সাথে সাথে ডিক্লেয়ার্ড ইভেন্ট ফাংশনটিকে ট্রিগার করবে।",
              en: "onClick attributes connect click events to custom handler references.",
            },
          },
        ],
      },
    },
    {
      id: "practice-state-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Practice (অনুশীলন)
নিচের কুইজ ও অ্যাসাইনমেন্ট সম্পন্ন করুন। এটি আপনার রিঅ্যাক্ট ইভেন্ট বাইন্ডিং ও স্টেট ম্যানেজমেন্টের ভিত্তি শতভাগ মজবুত করবে।`,
        en: `## Reflection & Practice
Take the following assessment to solidify your understanding of state hooks, render cycles, and UI interaction mechanics.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "স্ট্যাটিক ওয়েবসাইট থেকে ইন্টারেক্টিভ ওয়েব অ্যাপ (যেমন ফেসবুক লাইক বাটন, জিমেইল কম্পোজ উইন্ডো) বানানোর একমাত্র জাদুকরী উপায় হলো রিঅ্যাক্ট স্টেট।",
          en: "State is the defining difference between static visual layouts and dynamic interactive web apps.",
        },
        whyWorks: {
          bn: "স্টেট সেট করার সময় রিঅ্যাক্ট পূর্ববর্তী স্টেটের মেমরি অ্যাড্রেস চেক করে দেখে কোনো পরিবর্তন আছে কিনা। পরিবর্তন পেলেই কেবল সে রি-রেন্ডার প্রসেস শুরু করে।",
          en: "React compares old and new state references. A re-render is scheduled only if values differ.",
        },
        professionalThinking: {
          bn: "প্রফেশনাল ডেভেলপাররা যখন স্টেটের আগের মানের ওপর ভিত্তি করে নতুন মান তৈরি করেন (যেমন কাউন্টার), তখন সরাসরি \`setCount(count + 1)\`-এর বদলে ফাংশনাল আপডেট \`setCount(prev => prev + 1)\` ব্যবহার করেন। এতে ডাটা রেস কন্ডিশন এড়ানো যায়।",
          en: "Professionals use functional updates like `setCount(prev => prev + 1)` when updates depend on the previous state to avoid stale closure bugs.",
        },
        mistakes: {
          bn: "কখনোই স্টেট ভ্যারিয়েবল সরাসরি অ্যাসাইনমেন্ট অপারেটর দিয়ে এডিট করতে যাবেন না (যেমন: \`count = 5\`)। এটি করলে স্টেট পরিবর্তন হবে না এবং রিঅ্যাক্ট কোনো এররও দেবে না, কিন্তু আপনার পেজে কোনো চেঞ্জ দেখা যাবে না!",
          en: "Never mutate state variables directly (e.g., `count = 5`). Direct mutations bypass React's render scheduler entirely.",
        },
        debugging: {
          bn: "স্টেটের মান ট্র্যাক করতে বাটনের ইভেন্ট হ্যান্ডলারে \`console.log(count)\` করলে স্টেট সেট হওয়ার ঠিক আগের মানটি প্রিন্ট হবে, কারণ স্টেট সেটিং প্রসেসটি অ্যাসিনক্রোনাস (Asynchronous)। লাইভ ভ্যালু দেখতে 'React DevTools' এক্সটেনশন ব্যবহার করুন।",
          en: "State updates are asynchronous. A `console.log` right after a setter call shows the previous value. Use React DevTools to inspect live states.",
        },
        performance: {
          bn: "অপ্রয়োজনে সব ভ্যারিয়েবল স্টেট বানাবেন না। যে ডেটা চেঞ্জ হলে স্ক্রিনের ভিউতে কোনো পরিবর্তন আসে না, সেটিকে সাধারণ লোকাল ভ্যারিয়েবল হিসেবেই রাখুন। এতে অপ্রয়োজনীয় রি-রেন্ডার কমবে ও সাইট ফাস্ট হবে।",
          en: "Minimize state footprint. If a variable's changes do not impact visual markup outputs, keep it as a standard local variable.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "state-q1",
      question: {
        bn: "রিঅ্যাক্ট স্টেট (State) মূলত কী?",
        en: "What is React State?",
      },
      options: [
        {
          bn: "সার্ভারের স্থায়ী ডেটাবেজ রেকর্ড",
          en: "A permanent server database record",
        },
        {
          bn: "কম্পোনেন্টের নিজস্ব অভ্যন্তরীণ স্মৃতি বা পরিবর্তনশীল ডেটা স্টোরেজ",
          en: "A component's internal memory that can change over time",
        },
        {
          bn: "একটি ব্রাউজার কুকি ফাইল",
          en: "A local browser cookie storage file",
        },
        {
          bn: "সিএসএস অ্যানিমেশন লাইব্রেরি",
          en: "A custom CSS animation library",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "স্টেট হলো কম্পোনেন্টের অভ্যন্তরীণ মেমরি যা ব্যবহারকারীর কাজের ওপর ভিত্তি করে পরিবর্তিত হতে পারে এবং রেন্ডারিং নিয়ন্ত্রণ করে।",
        en: "State is local, mutable memory kept inside individual component fibers.",
      },
    },
    {
      id: "state-q2",
      question: {
        bn: "ইউজ-স্টেট (useState) হুক থেকে রিটার্ন হওয়া অ্যারের দ্বিতীয় উপাদানটির কাজ কী?",
        en: "What is the second element returned from useState?",
      },
      options: [
        {
          bn: "স্টেটের শুরুর মান ডিফাইন করা",
          en: "Setting the initial value of the state",
        },
        {
          bn: "স্টেটের মান আপডেট করার এবং রি-রেন্ডার ট্রিগার করার স্পেশাল সেটার ফাংশন",
          en: "The state setter function used to update state values and schedule re-renders",
        },
        { bn: "ইউআই ডিলিট করার মেথড", en: "A method to delete DOM nodes" },
        {
          bn: "জাভাস্ক্রিপ্ট ইম্পোর্ট চেক",
          en: "An import statement validation utility",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "useState-এর দ্বিতীয় রিটার্ন ভ্যালুটি হলো স্টেট সেটার ফাংশন, যা কল করলে স্টেট আপডেট হয় ও কম্পোনেন্ট রি-রেন্ডার হয়।",
        en: "The second element is a function designed specifically to modify the state value.",
      },
    },
    {
      id: "state-q3",
      question: {
        bn: "রিঅ্যাক্ট জেএসএক্স ইভেন্টে ফাংশনাল রেফারেন্স দেওয়ার সঠিক সিনট্যাক্স কোনটি?",
        en: "Which is the correct way to pass an event handler in React?",
      },
      options: [
        { bn: "onClick={handleClick()}", en: "onClick={handleClick()}" },
        { bn: "onClick={handleClick}", en: "onClick={handleClick}" },
        { bn: 'onclick="handleClick()"', en: 'onclick="handleClick()"' },
        { bn: 'onClick="handleClick"', en: 'onClick="handleClick"' },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রিঅ্যাক্টে ফাংশন কলের বদলে ফাংশনের রেফারেন্স দিতে হয় (বন্ধনী ছাড়া)। তাই সঠিক সিনট্যাক্স হলো onClick={handleClick}।",
        en: "We must pass the function reference {handleClick} without brackets so it executes only on trigger.",
      },
    },
    {
      id: "state-q4",
      question: {
        bn: "নিচের কোন কোডটি রিঅ্যাক্ট স্টেট সরাসরি পরিবর্তন বা মিউটেশনের চেষ্টা করেছে (যা করা নিষেধ)?",
        en: "Which code directly mutates state (which is forbidden)?",
      },
      options: [
        { bn: "setCount(5)", en: "setCount(5)" },
        { bn: "count = count + 1", en: "count = count + 1" },
        { bn: "setCount(prev => prev + 1)", en: "setCount(prev => prev + 1)" },
        { bn: "setCount(count - 1)", en: "setCount(count - 1)" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "count = count + 1 স্টেট ভ্যারিয়েবল সরাসরি মিউটেশনের চেষ্টা করে, যা রিঅ্যাক্টের রেন্ডারিং সাইকেলকে বাইপাস করে ও স্ক্রিন আপডেট করে না।",
        en: "Reassigning the state variable directly (count = count + 1) bypasses React's render loops.",
      },
    },
    {
      id: "state-q5",
      question: {
        bn: "স্টেটের মান পরিবর্তন বা আপডেট করার সাথে সাথে রিঅ্যাক্ট ব্যাকগ্রাউন্ডে কী করে?",
        en: "What happens when a state update function is called?",
      },
      options: [
        {
          bn: "সম্পূর্ণ পেজ রিফ্রেশ বা রিলোড করে",
          en: "Reloads the entire browser page",
        },
        {
          bn: "কম্পোনেন্ট ফাংশনটি পুনরায় রান করে মেমরিতে ভার্চুয়াল ডম তুলনা করে প্রয়োজনীয় অংশ আপডেট করে",
          en: "Re-runs the component function to construct a new Virtual DOM and updates the real DOM based on the differences",
        },
        {
          bn: "ডাটাবেজ সম্পূর্ণ ডিলিট করে দেয়",
          en: "Deletes all local databases",
        },
        { bn: "ব্রাউজার ক্লোজ করে দেয়", en: "Shuts down the browser app" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "স্টেট আপডেট হলে রিঅ্যাক্ট কম্পোনেন্ট পুনরায় রান করে ভার্চুয়াল ডম তৈরি করে ও কেবল পরিবর্তিত অংশ রিয়েল ডমে আপডেট করে।",
        en: "React initiates a render, compares Virtual DOM snapshots (Diffing), and commits the delta to the screen.",
      },
    },
  ],
  practice: [
    {
      bn: "একটি রিঅ্যাক্ট ডাইনামিক লাইক বাটন তৈরি করার চিন্তাপদ্ধতি লিখুন। এর স্টেট কী হবে এবং কোন ইভেন্ট দিয়ে লাইক কাউন্ট চেঞ্জ হবে?",
      en: "Describe the state variables and event triggers needed to build a Facebook-like Like button component.",
    },
    {
      bn: "useState(false) ডিক্লেয়ার করা হলে এর শুরুর মান বা Initial Value কী হয় এবং তা কোন ডেটা টাইপ?",
      en: "Identify the starting value and data type configuration of useState(false).",
    },
    {
      bn: "setCount(count + 1) ইভেন্ট হ্যান্ডলারের লাইনে console.log(count) করলে কেন আপডেটেড মান পাওয়া যায় না?",
      en: "Explain why logging state values immediately after updating them displays stale data.",
    },
  ],
  assignment: {
    title: {
      bn: "পাসওয়ার্ড হাইড/শো টগল বোতাম",
      en: "Password Visibility Toggle Button Design",
    },
    description: {
      bn: "একটি পাসওয়ার্ড ইনপুট ফর্ম তৈরি করুন যা স্টেটের মান অনুযায়ী পাসওয়ার্ড দেখাতে বা লুকাতে সাহায্য করবে। পাসওয়ার্ড টাইপের অবস্থা (password নাকি text) একটি বুলিয়ান স্টেটের সাহায্যে নিয়ন্ত্রণ করুন এবং বাটনে 'লুকান' বা 'দেখুন' টেক্সট পরিবর্তন করুন।",
      en: "Design a PasswordInput component with a visibility toggler button. Control input type (text vs password) and toggle button label ('Hide' vs 'Show') using a boolean state variable.",
    },
    starterCode: `// React Password Toggler Component
import React, { useState } from 'react';

function PasswordInput() {
  // ১. স্টেট ডিক্লেয়ার করুন (isVisible boolean state)
  
  return (
    <div className="p-4 max-w-xs bg-slate-50 rounded-xl border border-slate-200">
      <label className="block text-sm font-medium text-slate-700 mb-1">
        পাসওয়ার্ড (Password)
      </label>
      <div className="flex gap-2">
        {/* ২. পাসওয়ার্ড ইনপুট ফিল্ড ও বাটন যুক্ত করুন */}
        
      </div>
    </div>
  );
}`,
    solution: {
      code: `// React Password Toggler Completed Solution
import React, { useState } from 'react';

export default function PasswordInput() {
  // ১. boolean state ডিক্লেয়ার করা হলো (শুরুর মান false, অর্থাত্ লুকানো)
  const [isVisible, setIsVisible] = useState(false);

  // ২. ইভেন্ট হ্যান্ডলার ফাংশন যা পূর্বের বুলিয়ান মানকে উল্টে দেবে (!)
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-4 max-w-xs bg-slate-50 rounded-xl border border-slate-200">
      <label className="block text-sm font-medium text-slate-700 mb-1">
        পাসওয়ার্ড (Password)
      </label>
      <div className="flex gap-2">
        {/* ৩. স্টেটের মানের ওপর ভিত্তি করে input type ডাইনামিক করা */}
        <input 
          type={isVisible ? "text" : "password"} 
          placeholder="পাসওয়ার্ড লিখুন"
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-800"
        />
        {/* ৪. ক্লিক ইভেন্ট ও বাটনের ডাইনামিক লেখা সেট করা */}
        <button 
          onClick={toggleVisibility}
          className="px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition"
        >
          {isVisible ? "লুকান" : "দেখুন"}
        </button>
      </div>
    </div>
  );
}`,
      explanation: {
        bn: "অসাধারণ কাজ! বুলিয়ান স্টেট (isVisible) এবং তার ওপর ভিত্তি করে ইনপুটের type অ্যাট্রিবিউট ডাইনামিক করার লজিকটি শতভাগ নিখুঁত ও ইন্ডাস্ট্রি স্ট্যান্ডার্ড হয়েছে।",
        en: "Dynamic attribute mapping (isVisible ? 'text' : 'password') utilizing boolean states correctly displays password visibility toggle solutions.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "রিঅ্যাক্টে স্টেট (State) এবং প্রপস (Props)-এর মধ্যে মূল পার্থক্যগুলো কী কী?",
        en: "What are the primary differences between React State and Props?",
      },
      answer: {
        bn: "স্টেট এবং প্রপসের মধ্যে মূল পার্থক্য ৩টি:\n১. মালিকানা (Ownership): স্টেট সম্পূর্ণভাবে ওই কম্পোনেন্টের নিজস্ব অভ্যন্তরীণ ডেটা যা কম্পোনেন্ট নিজেই তৈরি ও পরিচালনা করে। অন্যদিকে প্রপস হলো বাইরের প্যারেন্ট কম্পোনেন্ট থেকে ইনপুট হিসেবে পাঠানো ডেটা।\n২. পরিবর্তনশীলতা (Mutability): স্টেট পরিবর্তনশীল (Mutable), যা কম্পোনেন্ট তার সেটার ফাংশন দিয়ে নিজেই বদলাতে পারে। কিন্তু প্রপস রিড-অনলি বা অপরিবর্তনশীল (Immutable), যা চাইল্ড কম্পোনেন্ট সরাসরি আপডেট করতে পারে না।\n৩. ব্যবহারের ক্ষেত্র: কম্পোনেন্টের ভেতরের ইন্টারেক্টিভিটি ট্র্যাক করতে স্টেট ব্যবহৃত হয় (যেমন লাইক কাউন্ট, ইনপুট টেক্সট)। কম্পোনেন্ট কনফিগারেশন বা কাস্টমাইজেশন ডেটা পাঠাতে প্রপস ব্যবহৃত হয় (যেমন কার্ডের কালার, বাটনের টেক্সট)।",
        en: "The primary differences between State and Props are:\n1. Origin & Ownership: State is internal to the component and managed entirely by it. Props are external configuration inputs passed down from a parent component.\n2. Mutability: State is mutable and updated via a setter function (e.g., `setState`). Props are immutable and read-only within the receiving child component.\n3. Re-rendering: Changing either state or props triggers a re-render. However, State is updated internally in response to user actions, whereas Props are updated when the parent re-renders with new attribute values.",
      },
    },
    {
      question: {
        bn: "স্টেট সেটার ফাংশন (যেমন: setState) কল করার সাথে সাথেই কেন console.log করলে স্টেটের আপডেটেড মান পাওয়া যায় না?",
        en: "Why don't we immediately see the updated state value in a console.log right after calling a state setter function?",
      },
      answer: {
        bn: "রিঅ্যাক্টে স্টেট আপডেট প্রক্রিয়াটি অ্যাসিনক্রোনাস (Asynchronous) এবং ব্যাচড (Batched) উপায়ে কাজ করে। আমরা যখন \`setCount(count + 1)\` কল করি, রিঅ্যাক্ট তাত্ক্ষণিকভাবে মেমরির count ভ্যারিয়েবলটি চেঞ্জ করে না। বরং সে রেন্ডারিং পারফরম্যান্স বাড়ানোর জন্য আপডেটটিকে একটি কিউ বা লাইনে দাঁড় করিয়ে রাখে (যদি একই ইভেন্টে আরও স্টেট সেটার থাকে, তবে সবগুলোকে একত্রে ব্যাচ আকারে আপডেট করতে)। তাই সেটার কলের ঠিক পরের লাইনেই সাধারণ জাভাস্ক্রিপ্ট সিনক্রোনাস নিয়মে পুরনো মানের count-কেই দেখতে পায়। আপডেটেড স্টেট মান পেতে হলে আমাদের কম্পোনেন্টটি রি-রেন্ডার হওয়ার পর নতুন সাইকেলের কন্টেন্ট এক্সিকিউট হওয়া পর্যন্ত অপেক্ষা করতে হয়, অথবা \`useEffect\` হুক ব্যবহার করে স্টেট চেঞ্জ ট্র্যাক করতে হয়।",
        en: "React state updates are asynchronous and batched. Calling a state setter does not instantly overwrite the variable in the current execution cycle. Instead, React schedules the update and batches it with other changes to minimize rendering passes and maintain UI performance. Therefore, executing a console.log right after a setter call will access the value from the current render frame rather than the scheduled update. The new value becomes available once the component completes its scheduled re-render pass.",
      },
    },
  ],
};
