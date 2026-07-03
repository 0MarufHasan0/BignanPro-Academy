export const chapter6Content = {
  id: "chapter-6",
  number: 6,
  title: {
    bn: "অধ্যায় ৬: কম্পিউটার ফান্ডামেন্টালস — যন্ত্রের ভেতরের গল্প",
    en: "Chapter 6: Computer Fundamentals — Inside the Machine",
  },
  description: {
    bn: "কম্পিউটার কীভাবে ডাটা প্রসেস করে, সিপিইউ, র‍্যাম এবং স্টোরেজের ভূমিকা এবং আপনার কোড কীভাবে হার্ডওয়্যার স্তরে রান করে।",
    en: "Understand how computers process instructions, the roles of CPU, RAM, and Storage, and how software code executes on physical hardware.",
  },
  difficulty: "beginner",
  readingTime: 12,
  objectives: [
    {
      bn: "কম্পিউটারকে যাদু মনে না করে ইনপুট, প্রসেসিং, আউটপুট ও স্টোরেজের একটি লজিক্যাল সিস্টেম হিসেবে চেনা।",
      en: "Demystify the computer as a logical system of Input, Processing, Output, and Storage.",
    },
    {
      bn: "সিপিইউ (CPU) এর মূল কাজ এবং এর ফেচ, ডিকোড, এক্সিকিউট (Fetch-Decode-Execute) সাইকেলটি বোঝা।",
      en: "Understand the core functions of a CPU and its Fetch-Decode-Execute cycle.",
    },
    {
      bn: "র‍্যাম (RAM) এবং পার্মানেন্ট স্টোরেজ (SSD/HDD) এর ভেতরের পার্থক্য রূপক ব্যবহার করে শেখা।",
      en: "Learn the core differences between volatile RAM and permanent Storage using analogies.",
    },
    {
      bn: "আমরা যে কোড লিখি তা কীভাবে হার্ডওয়্যারে বাইনারি সিগন্যাল হিসেবে প্রসেস হয় তা বিস্তারিত জানা।",
      en: "Trace how software programming code translates into hardware instruction executions.",
    },
  ],
  sections: [
    {
      id: "what-is-computer",
      title: {
        bn: "১. কম্পিউটার আসলে কী ও কীভাবে কাজ করে? (What is a Computer & Flow)",
        en: "1. What is a Computer & Flow",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা সবাই কম্পিউটার বা স্মার্টফোন প্রতিদিন ব্যবহার করছি। কিন্তু একজন সাধারণ ব্যবহারকারী এবং একজন সফটওয়্যার ডেভেলপারের মধ্যে পার্থক্য হলো—ডেভেলপাররা জানেন ডিভাইসের স্ক্রিনের পেছনে হার্ডওয়্যার স্তরে ঠিক কী ঘটছে। এই লেসনে আমরা কম্পিউটারের মস্তিস্ক ও মেমরি নিয়ে সহজ বাংলায় আলোচনা করব।

## Why should I learn this? (কেন শিখবো?)
আপনার কোড শেষ পর্যন্ত কিন্তু রান করবে কম্পিউটারের প্রসেসর আর র‍্যামের ওপরেই। কম্পিউটার কীভাবে মেমরি এবং প্রসেস ম্যানেজ করে তা জানলে আপনি অনেক ফাস্ট ও অপ্টিমাইজড প্রোগ্রাম লিখতে পারবেন।

## What is a Computer? (কম্পিউটার কী?)
সহজ কথায়: **কম্পিউটার হলো এমন একটি যন্ত্র যা নির্দিষ্ট নিয়ম বা নির্দেশনা (Instructions) মেনে ডাটা প্রসেস বা প্রক্রিয়াকরণ করতে পারে।**

একটি কম্পিউটার মূলত ৪টি প্রধান ভাগে কাজ করে:
১. **ইনপুট (Input)**: ব্যবহারকারী কিবোর্ড, মাউস বা মাইকের মাধ্যমে তথ্য দেন।
২. **প্রসেসিং (Processing)**: কম্পিউটারের প্রসেসর বা সিপিইউ সেই তথ্যকে প্রসেস করে।
৩. **আউটপুট (Output)**: মনিটর বা স্পীকারের মাধ্যমে ফলাফল বা প্রসেস করা তথ্য প্রকাশ পায়।
৪. **স্টোরেজ (Storage)**: ভবিষ্যতে ব্যবহারের জন্য তথ্য মেমরিতে চিরতরে বা সাময়িকভাবে সংরক্ষণ করা হয়।

## The Data Flow (তথ্য প্রবাহের ধাপগুলো)
\`\`\`
User Input (ইনপুট) ➔ RAM (অস্থায়ী মেমরি) ➔ CPU (প্রসেসিং) ➔ Monitor Output (আউটপুট) ➔ Storage (স্থায়ী মেমরি)
\`\`\``,
        en: `## Introduction
A standard user interacts only with UI screens. A developer must comprehend what transactions take place in the semiconductor layers below.

## What is a Computer?
A programmable device that accepts raw data, processes it according to preloaded instruction codes, and outputs the calculated results.

## The Logical Processing Loop:
"Input (Keyboard/Mouse) ➔ Memory (RAM) ➔ Processing (CPU) ➔ Output (Monitor) ➔ Storage (SSD/HDD)"`,
      },
    },
    {
      id: "cpu-brain",
      title: {
        bn: "২. সিপিইউ (CPU) — কম্পিউটারের চালিকাশক্তি (CPU: Central Processing Unit)",
        en: "2. CPU: Central Processing Unit",
      },
      content: {
        bn: `## The Brain of the Machine: CPU (সিপিইউ কী?)
**CPU** এর পূর্ণরূপ হলো **Central Processing Unit**। এটিকে কম্পিউটারের মস্তিষ্ক বলা হয়। এর প্রধান কাজ হলো আপনি যে নির্দেশনা (Code) দিচ্ছেন তা ধাপে ধাপে সম্পন্ন করা।

সিপিইউ প্রতি সেকেন্ডে বিলিয়ন বিলিয়ন অপারেশন বা কাজ করতে পারে।

---
## The Fetch-Decode-Execute Cycle (সিপিইউর কাজের চক্র)
সিপিইউ মূলত ৩টি ধাপে যেকোনো নির্দেশ বা কাজ সমাধান করে:
১. **ফেচ (Fetch)**: র‍্যাম (RAM) থেকে পরবর্তী নির্দেশের বাইনারি কোডটি প্রসেসরে নিয়ে আসা।
২. **ডিকোড (Decode)**: নির্দেশটি কী করতে বলছে তা সিপিইউ-এর কন্ট্রোল ইউনিট দিয়ে অনুবাদ বা ডিকোড করা (যেমন: যোগ করা, নাকি ডাটা মুভ করা)।
৩. **এক্সিকিউট (Execute)**: এএলইউ (ALU - Arithmetic Logic Unit) দিয়ে নির্দেশটির কাজ সম্পন্ন করা এবং ফলাফল মেমরিতে ফেরত পাঠানো।

## Simple Analogy (সিপিইউ-এর রূপক)
সিপিইউ-কে একটি রেস্টুরেন্টের রানিং শেফ বা বাবুর্চির সাথে তুলনা করুন। ওয়েটার (র‍্যাম) তাকে যে রেসিপির নির্দেশ এনে দিচ্ছে, বাবুর্চি তা দেখছেন (Fetch), বুঝছেন কী বানাতে হবে (Decode), এবং কড়াইতে রান্না শুরু করে দিচ্ছেন (Execute)!`,
        en: `## CPU: Central Processing Unit
The CPU executes software commands. It cycles continuously through three execution states:
1. **Fetch**: Retrieves binary instruction words from RAM.
2. **Decode**: The Control Unit translates what execution path to trigger.
3. **Execute**: The ALU (Arithmetic Logic Unit) executes the computation (addition, logical comparisons).`,
      },
    },
    {
      id: "ram-vs-storage",
      title: {
        bn: "৩. র‍্যাম বনাম স্টোরেজ (RAM vs Storage Memory)",
        en: "3. RAM vs Storage Memory",
      },
      content: {
        bn: `## Memory Layers: RAM vs Storage (র‍্যাম বনাম স্টোরেজ)
নতুন বিগিনারদের মধ্যে সবচেয়ে বড় বিভ্রান্তি তৈরি হয় র‍্যাম (RAM) এবং রম/স্টোরেজ (SSD/HDD) এর পার্থক্য নিয়ে। আসুন বিষয়টিকে পানির মতো সহজ করে দিই।

---
## Memory Comparison Table (মেমরি তুলনা)
| বৈশিষ্ট্য (Features) | র‍্যাম (RAM - Random Access Memory) | স্টোরেজ (SSD/HDD) |
| :--- | :--- | :--- |
| **কাজের ধরন** | সাময়িক মেমরি (Volatile) | স্থায়ী মেমরি (Non-Volatile) |
| **গতি (Speed)** | অত্যন্ত ফাস্ট ও বিদ্যুৎ গতিসম্পন্ন | র‍্যামের চেয়ে তুলনামূলক স্লো |
| **বিদ্যুৎ সংযোগ** | কম্পিউটার বন্ধ করলে সব ডাটা মুছে যায় | বিদ্যুৎ চলে গেলেও ডাটা সুরক্ষিত থাকে |
| **আকার ও সাইজ** | সাধারণত ৮ জিবি বা ১৬ জিবি হয় | সাধারণত ২৫৬ জিবি বা ১ টেবি (TB) হয় |

## Analogy (র‍্যাম বনাম স্টোরেজের রূপক)
ধরুন আপনি একটি রান্নার টেবিলে রান্না করছেন:
*   **রান্নার টেবিলটি হলো র‍্যাম (RAM)**: আপনি যখন রান্না করছেন, সব উপকরণ টেবিলের ওপরে সাজানো থাকে যাতে দ্রুত হাত বাড়িয়ে নেওয়া যায়। কিন্তু কাজ শেষ হলে আপনি টেবিল পরিষ্কার করে ফেলেন।
*   **রান্নাঘরের আলমারি বা ফ্রিজ হলো স্টোরেজ (Storage)**: যেখানে চাল, ডাল ও সবজি স্থায়ীভাবে স্টোর করা থাকে। আলমারি অনেক বড় হয় কিন্তু সেখান থেকে চাল ডাল বের করে টেবিলে আনতে একটু বেশি সময় লাগে।`,
        en: `## RAM vs. Storage
*   **RAM (Random Access Memory)**: Volatile workspace. Highly fast, but wipes clean once electrical power disconnects.
*   **Storage (SSD/HDD)**: Non-volatile archive. Slower access, but retains system boot configs, file folders, and apps permanently.

## Analogy
*   **RAM**: The kitchen preparation table. Active ingredients sit here for fast reach.
*   **Storage**: The refrigerator. Secure bulk archiving, but takes longer to open and retrieve items.`,
      },
    },
    {
      id: "hardware-software-os",
      title: {
        bn: "৪. হার্ডওয়্যার, সফটওয়্যার ও অপারেটিং সিস্টেম (Hardware, Software & OS)",
        en: "4. Hardware, Software & OS",
      },
      content: {
        bn: `## Hardware vs Software (দেহ বনাম প্রাণ)
একটি কম্পিউটার চালনা করতে হার্ডওয়্যার ও সফটওয়্যার উভয়েরই প্রয়োজন।
*   **হার্ডওয়্যার (Hardware)**: কম্পিউটারের যেসব ভৌত বা ফিজিক্যাল পার্টস ছোঁয়া যায়। যেমন: কিবোর্ড, মাউস, মাদারবোর্ড, র‍্যাম ও চিপস। (এটি কম্পিউটারের দেহের মতো)।
*   **সফটওয়্যার (Software)**: নির্দেশনার ডিজিটাল সেট যা হার্ডওয়্যারকে নির্দেশ দেয় কী করতে হবে। যেমন: উইন্ডোজ, গুগল ক্রোম, ভিএস কোড বা আপনি যে জাভাস্ক্রিপ্ট কোড লিখছেন তা। (এটি কম্পিউটারের প্রাণের মতো)।

## Operating System: The Bridge (অপারেটিং সিস্টেম কী?)
**Operating System (OS)** হলো কম্পিউটারের প্রধান সফটওয়্যার যা ইউজার এবং ভেতরের জটিল হার্ডওয়্যারের মধ্যে সেতু বা দোভাষী হিসেবে কাজ করে।

আপনি যখন মাউসে ক্লিক করে কোনো গান প্লে করেন, ওএস (যেমন Windows, macOS বা Linux) সেই ক্লিকের সিগন্যাল সিপিইউ এবং সাউন্ড কার্ডকে বুঝিয়ে দেয়। ওএস ছাড়া কম্পিউটার কেবল এক টুকরো অকেজো লোহা ছাড়া কিছুই নয়!`,
        en: `## Hardware vs. Software
*   **Hardware**: Physical semiconductor circuitry (processors, memory units).
*   **Software**: Digital binary instructions telling hardware gates how to switch.

## Operating System (OS)
The primary system manager (Windows, Linux, macOS). It serves as the abstract bridge, communicating user software requests down to registers and transistors.`,
      },
    },
    {
      id: "how-code-runs-restaurant",
      title: {
        bn: "৫. কোড রান হওয়ার সিক্রেট ও রেস্টুরেন্ট অ্যানালজি (How Code Runs & Restaurant Analogy)",
        en: "5. How Code Runs & Restaurant Analogy",
      },
      content: {
        bn: `## How does code run? (কোড রান হওয়ার বাস্তব সিক্রেট)
কম্পিউটার কিন্তু বাংলা বা ইংরেজি বোঝে না, এমনকি আমরা যে জাভাস্ক্রিপ্ট কোড লিখি তাও বোঝে না। কম্পিউটার বোঝে কেবল বিদ্যুৎ প্রবাহিত হওয়া এবং না হওয়া—যাকে বাইনারি বা **১ এবং ০ (Binary: 1 & 0)** বলা হয়।

কোড রান করার প্রক্রিয়া:
১. **কোড লেখা**: আমরা মানুষের বোঝার উপযোগী ভাষায় কোড লিখি (যেমন: JavaScript, Python)।
২. **অনুবাদ করা (Compile/Interpret)**: আমাদের কোড কম্পাইলার বা ইন্টারপ্রেটার নামক ওএস প্রোগ্রামের মাধ্যমে ১ এবং ০ এর বাইনারি কোডে রূপান্তরিত হয় (Machine Code)।
৩. **র‍্যাম লোডিং**: ওএস এই মেশিন কোডটি হার্ডডিস্ক থেকে ফাস্ট র‍্যামে (RAM) লোড করে।
৪. **সিপিইউ এক্সিকিউশন**: সিপিইউ-এর ভেতরের ট্রানজিস্টর গেটগুলো বন্ধ এবং অন হওয়ার মাধ্যমে নির্দেশগুলো সম্পন্ন করে এবং আউটপুট স্ক্রিনে পাঠিয়ে দেয়।

---
## The Complete Restaurant Analogy (সম্পূর্ণ রেস্টুরেন্ট রূপক)
কম্পিউটারের পুরো কাজকে নিচের চমৎকার ডাইনিং হলের সাথে মিলিয়ে নিন:
*   **কাস্টমার (Customer)**: ইউজার ইনপুট (যিনি খাবারের অর্ডার দিচ্ছেন)।
*   **ওয়েটার (Waiter)**: ওএস ও কানেক্টর ক্যাবল (যিনি অর্ডার নিয়ে যাচ্ছেন ও খাবার এনে দিচ্ছেন)।
*   **রান্নার টেবিল (Prep Table)**: র‍্যাম (RAM - যেখানে কাটা পেঁয়াজ ও মসলা সাময়িকভাবে সাজানো আছে)।
*   **ফ্রিজ বা স্টোর রুম (Cold Storage)**: এসএসডি/স্টোরেজ (SSD - যেখানে স্থায়ীভাবে সব র-মেটেরিয়াল সেভ আছে)।
*   **প্রধান বাবুর্চি (Chef)**: সিপিইউ (CPU - যিনি রেসিপি দেখে চপ করছেন ও দ্রুত রান্না শেষ করছেন)।
*   **সুস্বাদু বিরিয়ানি (Delicious Biryani)**: আউটপুট (যা কাস্টমার খাবার হিসেবে পাচ্ছেন)।`,
        en: `## How Programming Code Executes
1. Developer writes readable human instructions (JS, C++).
2. Translation tools (Compilers/Interpreters) parse text, compiling it into machine language (0s and 1s).
3. The Operating System loads these binary blocks from the SSD into RAM.
4. The CPU fetches bytes, decoding and triggering logic gates to output results.`,
      },
      codeBlock: {
        fileName: "hardware_simulation.js",
        language: "javascript",
        code: `// মেমরি ও প্রসেস লোডিংয়ের লজিক্যাল রূপক
const storageSSD = {
  savedFiles: ["calculator.exe", "photo.png", "index.html"],
  speed: "Slower (600 MB/s)"
};

const activeRAM = {
  runningProcesses: [],
  speed: "Super Fast (32000 MB/s)"
};

function launchApplication(appName) {
  console.log(\`🔍 স্টোরেজ থেকে "\${appName}" খোঁজা হচ্ছে...\`);
  if (storageSSD.savedFiles.includes(appName)) {
    console.log(\`⚡ অ্যাপ্লিকেশনটি ফাস্ট র‍্যামে (RAM) লোড করা হচ্ছে...\`);
    activeRAM.runningProcesses.push(appName);
    console.log(\`🚀 CPU এখন এক্সিকিউট করছে! র‍্যাম প্রসেস: \`, activeRAM.runningProcesses);
  } else {
    console.log(\`❌ ফাইলটি খুঁজে পাওয়া যায়নি!\`);
  }
}

launchApplication("calculator.exe");`,
        explanations: [
          {
            line: 13,
            text: {
              bn: "প্রথম ধাপ: ফাইলটি স্থায়ী স্টোরেজে আছে কিনা তা চেক করা।",
              en: "Locating the program execution file on SSD.",
            },
          },
          {
            line: 15,
            text: {
              bn: "দ্বিতীয় ধাপ: দ্রুত অ্যাক্সেসের জন্য ফাইল ডাটা র‍্যামে লোড করে সিপিইউ এক্সিকিউট করা।",
              en: "Pushing target file stream to RAM buffer arrays for CPU execution.",
            },
          },
        ],
      },
    },
    {
      id: "practice-computer-mentor",
      title: {
        bn: "৬. কুইজ, প্র্যাকটিস ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection Tasks (অনুশীলন)
নিচের প্র্যাকটিস সেকশনে দেওয়া প্রশ্নগুলো নিয়ে গভীরভাবে ভাবুন। এটি আপনার মেমরি রিডিং ও কম্পিউটার আর্কিটেকচার সম্পর্কে ধারণা স্পষ্ট করবে।`,
        en: `## Reflection Tasks
Assess your understanding of internal processing pipelines before proceeding to internet networking.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "সফটওয়্যারের ব্যাকগ্রাউন্ডে কম্পিউটারের গতিবিধি জানা থাকলে আপনি বুঝতে পারবেন কেন কোড বেশি মেমরি নেয় এবং কীভাবে কোড অপ্টিমাইজ করা যায়।",
          en: "Knowing computer fundamentals allows you to write memory-efficient code, preventing leaks in production environments.",
        },
        whyWorks: {
          bn: "কম্পাইলাররা মানুষের হাই-লেভেল কোডকে সিপিইউ-এর বোঝার উপযোগী সরাসরি ইলেকট্রিক্যাল বাইনারি সিগন্যালে কনভার্ট করে কাজ সম্পন্ন করে।",
          en: "Translation chains parse loops into binary blocks, matching compiler targets to CPU architecture registries.",
        },
        professionalThinking: {
          bn: "পেশাদাররা যেকোনো বড় ডেটা প্রসেস করার সময় ডেটা প্রথমে ব্যাচ করে নেন যাতে প্রসেসিংয়ের সময় র‍্যাম ওভারফ্লো বা ক্র্যাশ না করে।",
          en: "Seniors manage memory footprints proactively to prevent heap overflows and garbage collection freezes.",
        },
        mistakes: {
          bn: "নতুনরা প্রায়ই ভাবেন কোড সরাসরি ল্যাপটপ বুঝতে পারে। আসলে ওএস এবং কম্পাইলার নামক অনুবাদক প্রোগ্রাম ছাড়া কোড এক লাইনের টেক্সট ফাইল ছাড়া কিছুই নয়।",
          en: "Never assume hardware reads JavaScript directly. Engines like V8 translate scripts into bytecode formats.",
        },
        debugging: {
          bn: "মেমরি ওভারফ্লো এরর আসলে আপনার কোডে কোনো ইনফিনিট লুপ (Infinite Loop) মেমরি গ্রাস করছে কিনা তা চেক করুন।",
          en: "Out of memory warnings usually indicate memory leaks or unbounded infinite recursive calls.",
        },
        performance: {
          bn: "স্থায়ী হার্ডডিস্ক (SSD) থেকে বারবার ডাটা পড়া স্লো হতে পারে। তাই ফাস্ট অ্যাক্সেসের জন্য প্রয়োজনীয় ডাটা র‍্যাম মেমরিতে ক্যাশ (Cache) করে রাখুন।",
          en: "SSD reads are order of magnitudes slower than RAM access. Cache high-frequency data structures in RAM buffers.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "cf-q1",
      question: {
        bn: "সিপিইউ (CPU) এর মূল কাজ ও চক্রের সঠিক ক্রমানুসার কোনটি?",
        en: "What is the correct CPU cycle sequence?",
      },
      options: [
        { bn: "রান ➔ স্টপ ➔ ডিলিট", en: "Run ➔ Stop ➔ Delete" },
        {
          bn: "ফেচ ➔ ডিকোড ➔ এক্সিকিউট (Fetch-Decode-Execute)",
          en: "Fetch ➔ Decode ➔ Execute",
        },
        { bn: "টাইপ ➔ সেভ ➔ রিলোড", en: "Type ➔ Save ➔ Reload" },
        { bn: "কপি ➔ পেস্ট ➔ প্রিন্ট", en: "Copy ➔ Paste ➔ Print" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সিপিইউ প্রথমে নির্দেশ মেমরি থেকে আনে (Fetch), তা ডিকোড করে অনুবাদ করে (Decode) এবং কাজ সম্পন্ন করে (Execute)।",
        en: "The CPU registers fetch, parse decodes, and triggers execution logic in an endless loop.",
      },
    },
    {
      id: "cf-q2",
      question: {
        bn: "র‍্যাম (RAM) এর প্রধান বৈশিষ্ট্য কোনটি?",
        en: "What is the defining characteristic of RAM?",
      },
      options: [
        {
          bn: "এটি একটি স্থায়ী মেমরি যেখানে ডাটা সবসময় থাকে",
          en: "It is a permanent storage keeping data forever",
        },
        {
          bn: "এটি বিদ্যুৎ চলে গেলে সমস্ত ডাটা মুছে ফেলা সাময়িক মেমরি (Volatile)",
          en: "It is volatile temporary memory that wipes clean once power turns off",
        },
        {
          bn: "এটি এসএসডির চেয়ে ধীর গতির মেমরি",
          en: "It is slower than permanent SSD drives",
        },
        {
          bn: "এটি কেবল ছবি সেভ করার জন্য ব্যবহৃত হয়",
          en: "It is only used to store images",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "র‍্যাম হলো বিদ্যুৎ নির্ভর সাময়িক হাই-স্পিড মেমরি। কম্পিউটার বন্ধ হলে এর ভেতরের সব তথ্য সাফ হয়ে যায়।",
        en: "RAM is volatile. It acts as the fast scratchpad for running processes.",
      },
    },
    {
      id: "cf-q3",
      question: {
        bn: "হার্ডডিস্ক বা এসএসডি (SSD) স্টোরেজকে আমাদের রূপকের কোন অংশের সাথে তুলনা করা যায়?",
        en: "Which part of the restaurant analogy corresponds to physical storage SSD/HDD?",
      },
      options: [
        { bn: "প্রধান রাঁধুনি বা বাবুর্চি", en: "The Head Chef" },
        {
          bn: "রান্নাঘরের স্থায়ী আলমারি বা কোল্ড স্টোরেজ ফ্রিজ",
          en: "The permanent pantry cupboard / cold storage refrigerator",
        },
        { bn: "রান্নার কাজের টেবিল", en: "The prep cutting table" },
        { bn: "খাবারের ওয়েটার", en: "The dining waiter" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রান্নাঘরের আলমারি বা ফ্রিজে কাঁচামাল স্থায়ীভাবে সেভ থাকে, যা কম্পিউটারের পার্মানেন্ট স্টোরেজ (SSD) এর মতো কাজ করে।",
        en: "Storage SSD acts as the cupboard archiving variables, apps, and boot sectors permanently.",
      },
    },
    {
      id: "cf-q4",
      question: {
        bn: "কম্পিউটারের হার্ডওয়্যার এবং ইউজার অ্যাপের মধ্যে সংযোগকারী প্রধান সফটওয়্যার কোনটি?",
        en: "What is the primary interface bridging hardware gates and software apps?",
      },
      options: [
        { bn: "গুগল ক্রোম ব্রাউজার", en: "Google Chrome browser" },
        {
          bn: "অপারেটিং সিস্টেম (OS - Operating System)",
          en: "Operating System (OS)",
        },
        { bn: "ভিএস কোড এডিটর", en: "VS Code editor" },
        { bn: "কিবোর্ড হার্ডওয়্যার", en: "Keyboard hardware" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "অপারেটিং সিস্টেম (যেমন Windows, macOS) হলো প্রধান সিস্টেম সফটওয়্যার যা হার্ডওয়্যার ও ইউজারের সংযোগ সেতু।",
        en: "The OS handles hardware calls, abstracting CPU scheduler algorithms and file systems.",
      },
    },
    {
      id: "cf-q5",
      question: {
        bn: "মানুষের লেখা কোড কীভাবে কম্পিউটারের প্রসেসরে রান করে?",
        en: "How does human code run inside the computer processor?",
      },
      options: [
        {
          bn: "কম্পিউটার কোডের বাংলা অর্থ সরাসরি বুঝতে পারে",
          en: "Computers understand Bangla text directly",
        },
        {
          bn: "কম্পাইলার/ইন্টারপ্রেটার কোডকে বাইনারি ১ ও ০ এর মেশিন কোডে অনুবাদ করে এবং সিপিইউ তা এক্সিকিউট করে",
          en: "Translation tools compile code text into binary machine code (0s and 1s), which the CPU executes",
        },
        {
          bn: "কোড সরাসরি কিবোর্ড দিয়ে স্ক্রিনে প্রসেস হয়",
          en: "Code runs directly inside keyboard circuits",
        },
        {
          bn: "ফাইলটি সরাসরি মনিটরে রান করে",
          en: "Files render on screen without processing",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কম্পিউটার ট্রানজিস্টর কেবল বিদ্যুৎ অন/অফ (১ ও ০) বোঝে। কম্পাইলার আমাদের কোডকে মেশিন ভাষায় রূপান্তর করে তা রান করায়।",
        en: "Compilers convert human scripts into electrical pulses (1s and 0s) that trigger logic transistors.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার রুমে থাকা কোনো গেমিং কনসোল বা মোবাইল কীভাবে ডাটা ইনপুট নেয় ও আউটপুট দেখায় তা ১টি উদাহরণ দিয়ে লিখুন।",
      en: "Describe input and output flows on a smartphone gaming console.",
    },
    {
      bn: "আপনার বন্ধুকে র‍্যাম (RAM) এবং পার্মানেন্ট স্টোরেজ (SSD) এর মূল তফাৎটি রেস্টুরেন্ট বা আপনার নিজের কোনো রূপক দিয়ে বুঝিয়ে বলুন।",
      en: "Write an analogy to explain RAM vs SSD memory speeds and volatility to a non-tech friend.",
    },
    {
      bn: "উইন্ডোজ বা লিনাক্স ওএস (OS) এর অনুপস্থিতিতে কম্পিউটারের অবস্থা কেমন হতে পারে? ব্যাখ্যা করুন।",
      en: "Explain what happens to system hardware registers if the operating system files get deleted.",
    },
  ],
  assignment: {
    title: {
      bn: "কম্পিউটার সিস্টেম প্রসেসিং এবং মেমরি আর্কিটেকচার",
      en: "Computer Processing Systems & Memory Layout Design",
    },
    description: {
      bn: "ইউটিউব (YouTube) এ যখন একটি ভিডিও প্লে করা হয়, তখন কম্পিউটারের হার্ডডিস্ক, র‍্যাম ও সিপিইউ ধাপে ধাপে কী কাজ করে তার একটি লজিক্যাল মডিউল কনফিগারেশন তৈরি করুন।",
      en: "Decompose the computer hardware transactions triggered when opening a online video link.",
    },
    starterCode: `// YouTube Video Loading Process Schema
const videoProcessLayout = {
  videoName: "Intro to HTML",
  fileSourceLocation: "Remote Server / Permanent Storage",
  hardwareProcessingSteps: [
    // প্রসেসিংয়ের ক্রমানুসার ধাপসমূহ
  ],
  ramRoleDescription: "র‍্যামের ভূমিকা কী?",
  cpuRoleDescription: "সিপিইউ এর ভূমিকা কী?"
};`,
    solution: {
      code: `// YouTube Processing Process Completed
const videoProcessLayout = {
  videoName: "Intro to HTML",
  fileSourceLocation: "ইউটিউব ক্লাউড স্টোরেজ থেকে লোকাল এসএসডিতে ক্যাশ হিসেবে",
  hardwareProcessingSteps: [
    "ধাপ ১: ব্রাউজার এপিআই দিয়ে নেটওয়ার্ক ইন্টারফেস কার্ড নেটওয়ার্ক প্যাকেট রিসিভ করে।",
    "ধাপ ২: প্রসেস ডেটা স্ট্রিমগুলো দ্রুত ডিকোড করার জন্য ফাস্ট র‍্যামে (RAM) লোড করা হয়।",
    "ধাপ ৩: জিপিইউ ও সিপিইউ বাইনারি ভিডিও ফ্রেম প্রসেস করে মনিটরে রেন্ডার করে।"
  ],
  ramRoleDescription: "ভিডিওর কারেন্ট প্লেব্যাক বাফারিং ডেটা ফাস্ট অ্যাক্সেসের জন্য ধারণ করে রাখা।",
  cpuRoleDescription: "কম্প্রেসড ভিডিও ডাটা ডিকোড করা এবং ফ্রেম রেন্ডারিংয়ের নির্দেশনা মেমরি থেকে রিড করা।"
};`,
      explanation: {
        bn: "চমৎকার প্রসেসিং মডেল! নেটওয়ার্ক প্যাকেট রিসিভ করা থেকে র‍্যাম বাফারিং ও সিপিইউ ডিকোডিংয়ের পুরো চক্রটি সঠিক লজিক আর্কিটেকচারে সাজানো হয়েছে।",
        en: "Mapping execution states model how systems allocate processing slots and network buffers dynamically.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "র‍্যাম (RAM) সাইজ বেশি হলে কম্পিউটার হ্যাং করা বা স্লো হওয়া কেন কমে যায়?",
        en: "Why does having more RAM prevent system freezes and slowdowns?",
      },
      answer: {
        bn: "যখন একাধিক ভারী অ্যাপ্লিকেশন (যেমন: গুগল ক্রোম ট্যাব ও ভিএস কোড) একই সাথে ওপেন থাকে, তারা রান করার জন্য র‍্যামে জায়গা খোঁজে। র‍্যামের সাইজ কম হলে ওএস বাধ্য হয়ে হার্ডডিস্ক বা এসএসডির মেমরিকে ব্যাকআপ হিসেবে ব্যবহার করে (যাকে Virtual Memory বা Page file বলা হয়)। যেহেতু এসএসডি র‍্যামের চেয়ে অনেক ধীর গতির, তাই কম্পিউটার অনেক স্লো বা হ্যাং হয়ে যায়। র‍্যাম বেশি থাকলে সরাসরি ফাস্ট মেমরিতে ডাটা থাকায় হ্যাং হওয়া কমে যায়।",
        en: "When memory demand exceeds active physical RAM capacity, the OS falls back to swapping page files into permanent storage SSDs (virtual memory). Because solid-state storage reads are orders of magnitude slower than DRAM channels, execution threads freeze. More RAM prevents storage thrashing.",
      },
    },
    {
      question: {
        bn: "কম্পাইলার (Compiler) এবং ইন্টারপ্রেটার (Interpreter) এর মধ্যে মূল পার্থক্য কী?",
        en: "What is the difference between a Compiler and an Interpreter?",
      },
      answer: {
        bn: "কম্পাইলার পুরো সোর্স কোড একসাথে রিড করে সম্পূর্ণ মেশিন কোড ফাইল বা এক্সিকিউটেবল ফাইল (.exe বা বাইনারি) বানিয়ে ফেলে, যা পরবর্তীতে সরাসরি খুব দ্রুত রান করা যায় (যেমন C++)। আর ইন্টারপ্রেটার কোডের প্রতিটি লাইন এক এক করে রিড করে এবং সাথে সাথেই রান করায়, কোনো অফলাইন ডিস্ট্রিবিউশন ফাইল তৈরি করে না (যেমন JavaScript বা Python)। কম্পাইল করা প্রোগ্রাম সাধারণত ইন্টারপ্রেটেড প্রোগ্রামের চেয়ে অনেক ফাস্ট রান করে।",
        en: "A compiler translates the entire source code file in one pass into target native machine instructions (executables), enabling faster run times. An interpreter reads, translates, and executes the script source line-by-line during runtime, which introduces a processing overhead.",
      },
    },
  ],
};
