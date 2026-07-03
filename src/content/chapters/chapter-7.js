export const chapter7Content = {
  id: "chapter-7",
  number: 7,
  title: {
    bn: "অধ্যায় ৭: কম্পিউটার হার্ডওয়্যার — যন্ত্রাংশের বিস্তারিত ব্যবচ্ছেদ",
    en: "Chapter 7: Computer Hardware — Deep Breakdown",
  },
  description: {
    bn: "সিপিইউ, র‍্যাম, রম, এসএসডি, জিপিউ এবং মাদারবোর্ডের গভীর মনস্তত্ত্ব ও কাজের নিখুঁত প্রবাহ।",
    en: "Explore details of computer hardware architecture including CPU pipelines, RAM volatile workspace, ROM boot instructions, GPU parallel visual shaders, and Motherboard circuitry.",
  },
  difficulty: "beginner",
  readingTime: 12,
  objectives: [
    {
      bn: "কম্পিউটারের বাহ্যিক ও অভ্যন্তরীণ ফিজিক্যাল পার্টস বা হার্ডওয়্যারগুলোর কাজ স্পষ্টভাবে চেনা।",
      en: "Identify physical hardware parts and trace their operations.",
    },
    {
      bn: "সিপিইউ এবং র‍্যামের কাজের গতির সম্পর্ক ও রমের (ROM) বুট রিকোয়েস্ট প্রক্রিয়া বোঝা।",
      en: "Understand CPU-RAM throughput speeds and ROM booting operations.",
    },
    {
      bn: "মেকানিক্যাল হার্ডডিস্ক (HDD) এবং ইলেকট্রনিক এসএসডি (SSD) এর গতির ব্যবধান জানা।",
      en: "Analyze the performance gaps between magnetic HDDs and solid-state SSDs.",
    },
    {
      bn: "জিপিইউ (GPU) কীভাবে সমান্তরালভাবে (Parallel) পিক্সেলে ছবি আঁকে তা অনুধাবন করা।",
      en: "Comprehend how GPUs render visual pixel layouts through parallel computing shaders.",
    },
  ],
  sections: [
    {
      id: "what-is-hardware-deep",
      title: {
        bn: "১. হার্ডওয়্যার পরিচিতি ও সিপিইউ-র ব্যবচ্ছেদ (Hardware Intro & CPU Deep Dive)",
        en: "1. Hardware Intro & CPU Deep Dive",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
কম্পিউটার সিস্টেমের প্রতিটি পার্টস কীভাবে একে অপরের সাথে কানেক্টেড থাকে এবং কীভাবে ডাটা ট্রান্সফার করে তা বোঝা একজন ফুল স্ট্যাক ডেভেলপারের জন্য অপরিহার্য। এই অধ্যায়ে আমরা কম্পিউটারের ক্যাসিং বা বক্সের ভেতরের ফিজিক্যাল হার্ডওয়্যারগুলোকে গভীরভাবে ব্যবচ্ছেদ করব।

## Why should I learn this? (কেন শিখবো?)
আমরা যখন কোনো অ্যাপ্লিকেশন তৈরি করি, তখন আমাদের জানা দরকার তা কীভাবে সিপিইউ কোরের ওপরে লোড শেয়ার করছে এবং কেন একটি গেমের জন্য জিপিউ প্রয়োজন হয়। এটি আপনার সিস্টেম আর্কিটেকচারাল চিন্তাভাবনাকে অনন্য উচ্চতায় নিয়ে যাবে।

## What is Hardware? (হার্ডওয়্যার কী?)
কম্পিউটারের যেসব ভৌত অংশকে আমরা স্পর্শ করতে ও দেখতে পারি, তাকে **হার্ডওয়্যার (Hardware)** বলে। 
*   **রূপক**: মানুষের অঙ্গ-প্রত্যঙ্গ (যেমন হাত, পা, চোখ) হলো হার্ডওয়্যার, আর আমাদের মন বা চিন্তাধারা হলো সফটওয়্যার।

---
## CPU: Central Processing Unit (সিপিইউ-র গভীর ডাইভ)
সিপিইউ প্রসেসরের কাজের গভীর সাইকেলটি লক্ষ্য করুন। এটি কেবল রান্না করার মতোই নয়, এটি বিলিয়ন ট্রানজিস্টর সংকেতের মেলবন্ধন:
১. **ফেচ (Fetch)**: র‍্যাম থেকে নতুন নির্দেশের ঠিকানা বা এড্রেস বাফার নিয়ে আসা।
২. **ডিকোড (Decode)**: নির্দেশটি ০ এবং ১ এর কোন ইলেকট্রিক্যাল সিগন্যাল তা চিপসেটের ভেতর অনুবাদ করা।
৩. **এক্সিকিউট (Execute)**: গাণিতিক বা লজিক্যাল সিদ্ধান্ত নিয়ে ফলাফল স্টোর করা।

সিপিইউ হলো প্রজেক্টের সেন্ট্রাল ম্যানেজার—যার ওপরে পুরো অ্যাপের রানিং স্পিড নির্ভর করে।`,
        en: `## Introduction
Tracing data paths across structural hardware boundaries prepares you to design optimized server-side logic and database architectures.

## CPU Mechanics
The processor utilizes high-speed internal caches (L1, L2, L3) to hold values closer to registers, optimizing execution loops:
1. **Fetch**: Query instruction addresses in RAM registry.
2. **Decode**: Translate bytes into gate operations.
3. **Execute**: Process registers using ALU.`,
      },
    },
    {
      id: "ram-rom-memory",
      title: {
        bn: "২. র‍্যাম বনাম রম মেমরি (RAM & ROM Decoded)",
        en: "2. RAM & ROM Decoded",
      },
      content: {
        bn: `## RAM vs ROM: The Dynamic Duo (র‍্যাম বনাম রম)
মেমরি বলতে আমরা সাধারণত র‍্যাম বুঝি, কিন্তু কম্পিউটারে আরেকটি গুরুত্বপূর্ণ নীরব চিপ আছে—যার নাম **রম (ROM)**।

---
## RAM & ROM Key Differences (পার্থক্য ছক)
| বৈশিষ্ট্য (Features) | র‍্যাম (RAM) | রম (ROM - Read Only Memory) |
| :--- | :--- | :--- |
| **ডাটার স্থায়িত্ব** | সাময়িক মেমরি (Volatile) | স্থায়ী মেমরি (Non-Volatile) |
| **ডাটা এডিট** | রিড ও রাইট করা যায় | শুধুমাত্র রিড করা যায় (পরিবর্তন করা কঠিন) |
| **ভূমিকা** | রানিং অ্যাপ্লিকেশনের ডাটা স্টোর রাখা | কম্পিউটার স্টার্ট বা বুট করার বেসিক কোড (BIOS) রাখা |
| **বিদ্যুৎ চলে গেলে** | ডাটা শূন্য হয়ে যায় | ডাটা চিরকাল অক্ষত থাকে |

## ROM Analogy (রম-এর রূপক)
রম-কে কল্পনা করুন একটি খেলনা গাড়ির ভেতরের ফ্যাক্টরি প্রোগ্রামিংয়ের মতো। খেলনা গাড়িটি অন করলেই সেটি ডানে ও বাঁয়ে ঘুরবে—এই বেসিক নির্দেশটি কিন্তু আপনি এডিট করতে পারেন না। কম্পিউটার চালু করার জন্য প্রথম যে সবুজ স্ক্রিন বা মাদারবোর্ডের নির্দেশ লোড হয়, সেটি এই রমে সুরক্ষিত থাকে। একে **বায়োস (BIOS - Basic Input Output System)** বলা হয়।`,
        en: `## RAM vs. ROM
*   **RAM**: Random Access Memory. Dynamic read-write buffer used by running operating systems.
*   **ROM**: Read-Only Memory. Immutable hardware chip storage preloaded with firmware (BIOS) needed to locate SSD bootable sectors during start-up.

## Analogy
*   **RAM**: Your working desk sketchpad. Wipe clean every night.
*   **ROM**: The printed factory manual glued to the table leg. It cannot be edited and is always read first when sitting down.`,
      },
    },
    {
      id: "storage-gpu-artist",
      title: {
        bn: "৩. স্টোরেজ ও গ্রাফিক্স প্রসেসর (SSD vs HDD & GPU Artist)",
        en: "3. SSD vs HDD & GPU Artist",
      },
      content: {
        bn: `## Physical Storage: HDD vs SSD (মেকানিক্যাল বনাম ইলেকট্রনিক)
স্থায়ী ফাইল স্টোর করার জন্য বাজারে দুই ধরনের ড্রাইভার রয়েছে:
*   **HDD (Hard Disk Drive)**: এটি একটি ঘুরতে থাকা মেকানিক্যাল সিডি বা ডিস্কের মতো। এর ভেতরে একটি রিডিং হেড থাকে যা ডিস্ক ঘুরে ঘুরে ডাটা পড়ে। এটি অনেক স্লো এবং ঝাকুনি লাগলে নষ্ট হওয়ার ভয় থাকে।
*   **SSD (Solid State Drive)**: এতে কোনো মেকানিক্যাল পার্টস নেই। এটি সম্পূর্ণ মাইক্রোচিপ বা ফ্ল্যাশ মেমরি দিয়ে তৈরি (আপনার পেনড্রাইভ বা মেমরি কার্ডের মতো)। এটি হার্ডডিস্কের চেয়ে ৫ থেকে ১০ গুণ বেশি ফাস্ট ডাটা ট্রান্সফার করতে পারে।

---
## GPU: The Visual Artist (গ্রাফিক্স কার্ড কী?)
সিপিইউতে সাধারণত ২ থেকে ১৬টি অত্যন্ত ফাস্ট এবং স্মার্ট 'কোর' বা মস্তিষ্ক থাকে। কিন্তু স্ক্রিনে হাজার হাজার ভিডিও ফ্রেম রেন্ডার করার জন্য লাখ লাখ পিক্সেলের কালার সমান্তরালভাবে হিসাব করতে হয়।

**GPU (Graphics Processing Unit)** এর কাজ হলো এই সমান্তরাল বা প্যারালাল ক্যালকুলেশনগুলো করা।
*   সিপিইউতে ৪টি বড় কোর থাকলে জিপিউতে থাকবে হাজার হাজার ছোট ছোট কোর।
*   **রূপক**: জিপিউ হলো একজন পেইন্টিং আর্টিস্ট যে একসাথে ব্রাশের হাজার টানে দ্রুত স্ক্রিনের ছবিগুলো এঁকে শেষ করে দেয়। গেম রান করা, ভিডিও রেন্ডারিং এবং কৃত্রিম বুদ্ধিমত্তা বা এআই মডেল ট্রেইনিংয়ের জন্য জিপিউ অত্যন্ত জরুরি।`,
        en: `## Permanent Storage
*   **HDD**: Magnetic disks spun physically. High Latency, slow seek times.
*   **SSD**: Flash memory transistors. High throughput, zero mechanical delay.

## GPU: Parallel Shaders
Unlike CPU cores that run sequential threads fast, GPUs pack thousands of smaller stream cores to compute visual pixel coordinates in parallel. Ideal for games, video decoding, and machine learning array operations.`,
      },
    },
    {
      id: "motherboard-highway",
      title: {
        bn: "৪. মাদারবোর্ড — যোগাযোগের মহাসড়ক (Motherboard Highway)",
        en: "4. Motherboard Highway",
      },
      content: {
        bn: `## The Central Hub: Motherboard (মাদারবোর্ড কী?)
কম্পিউটারের সমস্ত যন্ত্রাংশকে একসাথে ধরে রাখার বড় সবুজ বা কালো সার্কিট বোর্ডটি হলো **মাদারবোর্ড (Motherboard)**।

এর গুরুত্ব:
*   সিপিইউ, র‍্যাম, এসএসডি ও জিপিউ সরাসরি মাদারবোর্ডের স্লটে কানেক্ট করা থাকে।
*   এতে ছোট ছোট তামার তারের লাইন বা ট্র্যাক থাকে, যাদের **বাস (Bus)** বলা হয়। এই বাস লাইনের মাধ্যমেই বিদ্যুৎ গতিতে ডাটা এক অংশ থেকে অন্য অংশে ট্রাভেল করে।
*   **রূপক**: মাদারবোর্ড হলো একটি আধুনিক সিটি রোড সিস্টেম বা হাইওয়ে, যার মাধ্যমে গাড়িগুলো (ডাটা প্যাকেট) সিপিইউ থেকে র‍্যামে যাতায়াত করে।

মাদারবোর্ড ভালো না হলে শক্তিশালী সিপিইউ এবং র‍্যামও কিন্তু তাদের সর্বোচ্চ গতি দিতে পারে না, কারণ হাইওয়েতে জ্যাম তৈরি হয়!`,
        en: `## Motherboard Architecture
The primary printed circuit board (PCB) connecting silicon components. Data travels across copper wires called system buses, delivering voltage signals between registers.`,
      },
    },
    {
      id: "system-flow-factory",
      title: {
        bn: "৫. ইনপুট/আউটপুট ও ফ্যাক্টরি অ্যানালজি (System Flow & Factory Analogy)",
        en: "5. System Flow & Factory Analogy",
      },
      content: {
        bn: `## Input & Output Systems (সংকেত আনা-নেওয়া)
*   **ইনপুট ডিভাইস (Input)**: বাইরে থেকে কম্পিউটারকে কমান্ড পাঠানোর মাধ্যম। যেমন: কিবোর্ড (টেক্সট ইনপুট), মাউস (লোকেশন ইনপুট), মাইক (সাউন্ড ইনপুট)।
*   **আউটপুট ডিভাইস (Output)**: প্রসেস হওয়া ডাটা ব্যবহারকারীকে দেখানোর মাধ্যম। যেমন: মনিটর (ভিজ্যুয়াল ডিসপ্লে), স্পীকার (শব্দ), প্রিন্টার (ফিজিক্যাল ডকুমেন্ট)।

---
## The Complete Factory Analogy (ফ্যাক্টরি রূপক)
আসুন কম্পিউটারের ভেতরের যন্ত্রাংশগুলোর রিলেশনশিপ একটি খেলনা তৈরির ফ্যাক্টরি বা কারখানার সাথে মিলিয়ে নিই:
*   **ম্যানেজার (Manager)**: সিপিইউ (CPU - যিনি সিদ্ধান্ত নেন ও তদারকি করেন)।
*   **ম্যানেজারের রানিং ডেস্ক (Desk)**: র‍্যাম (RAM - যেখানে ম্যানেজার ফাইল দ্রুত চেক করতে পারেন)।
*   **ফ্যাক্টরি গুদাম (Warehouse)**: স্টোরেজ (SSD - যেখানে হাজার হাজার র মেটেরিয়াল বা ফাইল স্থায়ীভাবে সেভ থাকে)।
*   **ফ্যাক্টরি ডিজাইনার (Designer)**: জিপিউ (GPU - যিনি শুধু খেলনার প্যাকেট ডিজাইন ও কালারের কাজ করেন)।
*   **ফ্যাক্টরির রাস্তা ও করিডোর (Roads)**: মাদারবোর্ড (Motherboard - যা গুদাম থেকে ডেস্ক পর্যন্ত মালামাল পরিবহন করে)।
*   **র কাঁচামাল ট্রাক (Trucks)**: ইনপুট (যা ফ্যাক্টরির ভেতরে ম্যাটেরিয়াল আনে)।
*   **তৈরি খেলনা (Finished Toys)**: আউটপুট (যা ফ্যাক্টরি থেকে বাইরে বাজারে বিক্রির জন্য বের হয়)।`,
        en: `## I/O Registers
Input devices stream coordinates and keystrokes into the OS buffers. Output devices capture render maps and sound frequencies to deliver human-readable results.

## The Factory Metaphor:
*   **CPU**: The General Manager (directs workers and operations).
*   **RAM**: The desk (holds current active papers).
*   **Storage**: The archives warehouse.
*   **GPU**: The artist packaging designs.
*   **Motherboard**: The internal forklifts and conveyor belt tracks.`,
      },
      codeBlock: {
        fileName: "hardware_bus.js",
        language: "javascript",
        code: `// সিস্টেম বাস ও মেমরি ট্রাফিকের লজিক্যাল ডেমো
const motherboardBus = {
  bandwidth: "PCIe 4.0 (64 GB/s)",
  transferData: function (from, to, payload) {
    console.log(\`🔌 বাস অ্যাক্টিভেটেড! ব্যান্ডউইথ: \${this.bandwidth}\`);
    console.log(\`📦 ডাটা ট্রান্সফার হচ্ছে: [\${from}] ➔ [\${to}] ...\`);
    console.log(\`⚡ ডাটা কনটেন্ট: \`, payload);
    return true;
  }
};

const keyboardInput = { key: "Spacebar", timestamp: "14:54:01" };
const renderOutput = { pixels: "RGB(255, 255, 255)", frameIndex: 108 };

// ইনপুট থেকে সিপিইউ হয়ে জিপিউ-র মাধ্যমে মনিটরে ডাটা পাঠানোর সিকোয়েন্স
motherboardBus.transferData("Keyboard", "CPU", keyboardInput);
motherboardBus.transferData("CPU", "GPU / Monitor", renderOutput);`,
        explanations: [
          {
            line: 4,
            text: {
              bn: "মাদারবোর্ডের বাস ব্যান্ডউইথ ট্রান্সফার স্পিড নির্ধারণ করে।",
              en: "Motherboard bus speed determines data throughput capabilities.",
            },
          },
          {
            line: 16,
            text: {
              bn: "কিবোর্ডের বাটন প্রেস করার সিগন্যাল বাস দিয়ে সিপিইউতে পাঠানো হচ্ছে।",
              en: "Transmitting keystroke coordinates to CPU registers.",
            },
          },
        ],
      },
    },
    {
      id: "practice-hardware-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচে দেওয়া প্রশ্নগুলো নিয়ে শান্ত মাথায় গভীরভাবে ভাবুন। এটি আপনার হার্ডওয়্যার ম্যাপ ও সিস্টেম ডিজাইনের দক্ষতা বাড়াতে সাহায্য করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your hardware mechanics concepts before building web client codes.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "হার্ডওয়্যারের ব্যান্ডউইথ ও বাস আর্কিটেকচার সম্পর্কে ধারণা থাকলে আপনি জাভাস্ক্রিপ্ট কোড অপ্টিমাইজ করে রেন্ডারিং স্পিড বাড়াতে পারবেন।",
          en: "Understanding CPU registers helps you structure optimized algorithms that prevent system throttling.",
        },
        whyWorks: {
          bn: "মাদারবোর্ডের তামার বাস লাইনে ডেটা মূলত বাইনারি ইলেকট্রিক্যাল হাই/লো ভোল্টেজ সিগন্যাল হিসেবে ট্রাভেল করে।",
          en: "Data travel represents electrical voltage transitions inside parallel buses, decoding into logic operations.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা ভারী প্রজেক্ট সার্ভারে আপলোড করার সময় মেমরি অপ্টিমাইজ করতে লাইটওয়েট কম্পাইল টার্গেট কনফিগার করেন।",
          en: "Seniors audit compute layers, ensuring application logic splits workloads between CPU threads and GPU shaders efficiently.",
        },
        mistakes: {
          bn: "নতুনদের বড় ভুল হলো ভাবা যে জিপিউ ছাড়া কোনো অ্যাপ্লিকেশন স্ক্রিনে দেখা যাবে না। আসলে সিপিইউর ইন-বিল্ট ইন্টিগ্রেটেড জিপিউ বেসিক রেন্ডারিং করতে পারে।",
          en: "Integrated graphics chips share CPU system memory (RAM), while dedicated GPUs utilize ultra-fast VRAM buffers.",
        },
        debugging: {
          bn: "ভিডিও প্লে করার সময় স্লো হলে বা ল্যাগ করলে বাফার ক্যাশ মেমরির সাইজ চেক করে অপ্টিমাইজ করুন।",
          en: "When debugging rendering latency, isolate whether the thread block originates from CPU calculations or GPU pipeline bottlenecks.",
        },
        performance: {
          bn: "মেকানিক্যাল হার্ডডিস্ক (HDD) বারবার রিড করলে ডিস্ক ঘুরে ঘুরে নষ্ট হতে পারে, তাই এসএসডি (SSD) ব্যবহার করা ফাস্ট ও নিরাপদ।",
          en: "SSD storage drives process file transactions dynamically, eliminating seek delays common in physical magnetic platters.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "hw-q1",
      question: {
        bn: "সিপিইউ (CPU) প্রসেসরের মূল কাজ ও ভূমিকা কী?",
        en: "What is the primary role of the CPU processor?",
      },
      options: [
        {
          bn: "ভিডিও ফাইল ডাউনলোড করে রাখা",
          en: "Download video files permanently",
        },
        {
          bn: "নির্দেশ ফেচ, ডিকোড ও এক্সিকিউট করে সিদ্ধান্ত নেওয়া",
          en: "Fetch, decode, and execute instructions to process data",
        },
        {
          bn: "মনিটরের ব্রাইটনেস বা উজ্জ্বলতা বাড়ানো",
          en: "Increase screen display brightness",
        },
        { bn: "বিদ্যুৎ সংযোগ বন্ধ করা", en: "Shut down electrical power grid" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সিপিইউ নির্দেশ রিড করে লজিক্যাল ও গাণিতিক অপারেশন সম্পন্ন করে আউটপুট জেনারেট করে।",
        en: "The processor is the central system manager executing logic gates operations.",
      },
    },
    {
      id: "hw-q2",
      question: {
        bn: "রুটিন ও বায়োস (BIOS) এর মতো স্থায়ী বুট নির্দেশাবলী কম্পিউটারের কোন মেমরিতে সুরক্ষিত থাকে?",
        en: "Where are bootloader instructions and BIOS firmwares permanently saved?",
      },
      options: [
        { bn: "র‍্যাম (RAM)", en: "RAM" },
        { bn: "রম (ROM - Read Only Memory)", en: "ROM (Read-Only Memory)" },
        { bn: "এসএসডি (SSD)", en: "SSD storage" },
        { bn: "গ্রাফিক্স কার্ড (GPU)", en: "GPU" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রম (ROM) হলো স্থায়ী নন-ভোলাটাইল মেমরি চিপ যা বুট এবং বেসিক ওএস লোডিং নির্দেশাবলী ধারণ করে।",
        en: "ROM contains immutable boot sectors read by system buses during power start-up.",
      },
    },
    {
      id: "hw-q3",
      question: {
        bn: "গ্রাফিক্স প্রসেসর (GPU) এর মূল সুপারপাওয়ার কোনটি?",
        en: "What is the primary performance benefit of a GPU?",
      },
      options: [
        {
          bn: "ডাটাবেজ ফাইল চিরতরে সেভ রাখা",
          en: "Archive database collections permanently",
        },
        {
          bn: "হাজার হাজার কোর দিয়ে সমান্তরালভাবে (Parallel) রেন্ডারিং এবং ক্যালকুলেশন সম্পন্ন করা",
          en: "Compute parallel calculations and visual renders using thousands of cores simultaneously",
        },
        {
          bn: "কম্পিউটারের তাপমাত্রা কমানো",
          en: "Reduce general hardware CPU heat",
        },
        { bn: "ইনপুট স্পিড বাড়ানো", en: "Increase keyboard scan speed" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "জিপিউ লাখ লাখ পিক্সেল সমান্তরালভাবে ড্র বা রেন্ডার করতে পারে যা গেমস এবং ভিডিওর জন্য অত্যন্ত প্রয়োজনীয়।",
        en: "GPUs operate in massive parallel shader lanes to calculate vector pixels concurrently.",
      },
    },
    {
      id: "hw-q4",
      question: {
        bn: "কম্পিউটার হার্ডওয়্যার পার্টসগুলো একে অপরের সাথে যার মাধ্যমে কানেক্ট করে ডাটা ট্রান্সফার করে তার নাম কী?",
        en: "What connects hardware components and facilitates data transfers?",
      },
      options: [
        { bn: "বিদ্যুৎ জেনারেটর", en: "Power generator" },
        {
          bn: "মাদারবোর্ড ও বাস লাইন (Motherboard & System Buses)",
          en: "Motherboard and System Buses",
        },
        { bn: "মনিটরের কেবল", en: "Monitor cables" },
        { bn: "ইনপুট বাটন", en: "Input switches" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "মাদারবোর্ড সমস্ত যন্ত্রাংশকে ধরে রাখে এবং তামার বাস লাইন দিয়ে তাদের মধ্যে ডেটা ট্রান্সফার করে।",
        en: "The motherboard provides slots and copper lines (buses) to connect memory and processor layers.",
      },
    },
    {
      id: "hw-q5",
      question: {
        bn: "মেকানিক্যাল হার্ডডিস্ক (HDD) এর চেয়ে এসএসডি (SSD) কেন অনেক বেশি ফাস্ট ও স্পিডি?",
        en: "Why do SSDs outperform HDDs in throughput speeds?",
      },
      options: [
        {
          bn: "এটি বেশি বিদ্যুৎ সাশ্রয় করে",
          en: "It consumes more electrical voltages",
        },
        {
          bn: "এতে কোনো ঘুরতে থাকা মেকানিক্যাল পার্টস নেই, এটি সম্পূর্ণ ফ্ল্যাশ মেমরি চিপ দিয়ে তৈরি",
          en: "It has no physical moving parts and is built entirely on flash memory chips",
        },
        { bn: "এটি দেখতে বড় আকৃতির", en: "It has a larger structural size" },
        {
          bn: "এটি কেবল সাউন্ড ফাইল প্রসেস করে",
          en: "It only processes audio file packages",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "মেকানিক্যাল ডিস্ক না থাকায় এসএসডিতে কোনো ল্যাটেন্সি বা বিলম্ব তৈরি হয় না এবং রিড স্পিড অত্যন্ত বেশি থাকে।",
        en: "Solid-state drives execute electronic switches, eliminating physical read-write head seek latency.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার ডেস্কটপ বা মোবাইলের স্ক্রিনে যখন আপনি টাচ করেন, ডাটা ইনপুট থেকে মনিটর আউটপুট পর্যন্ত মাদারবোর্ড বাস কীভাবে কাজ করে তা ১টি লাইনে লিখুন।",
      en: "Trace how a touchscreen tap moves data from input register to display output.",
    },
    {
      bn: "জিপিউ (GPU) রেন্ডারিং এবং সিপিইউ (CPU) প্রসেসিংয়ের মূল পার্থক্যের ১টি বাস্তব উদাহরণ দিন।",
      en: "Contrast CPU single-thread calculations with GPU multi-core vector renders.",
    },
    {
      bn: "র‍্যামের সাথে বাসের উইডথ (Bus Width) কম হলে শক্তিশালী প্রসেসরের গতি কীভাবে ব্যাহত হয়? সংক্ষেপে লিখুন।",
      en: "Describe how a narrow motherboard bus width bottlenecks a fast CPU-RAM connection.",
    },
  ],
  assignment: {
    title: {
      bn: "কম্পিউটার বুটআপ (Bootup) এবং গেম লোডিং সিকোয়েন্স",
      en: "System Bootup & Game Loading Execution Sequence",
    },
    description: {
      bn: "কম্পিউটার পাওয়ার অন করার পর থেকে একটি গেম বা সফটওয়্যার রান হওয়া পর্যন্ত রম, র‍্যাম, সিপিইউ ও জিপিউ এর ডাটা আদান-প্রদান সিকোয়েন্স অবজেক্ট সাজিয়ে সাবমিট করুন।",
      en: "Model the sequence of hardware events that occur from cold bootup to starting a game executable.",
    },
    starterCode: `// Bootup & Execution Logic Schema
const bootupExecutionFlow = {
  currentStage: "Cold Boot",
  romRoleInBios: "রমে থাকা বায়োসের কাজ কী?",
  ssdToRamLoadAction: [
    // হার্ডডিস্ক থেকে র‍্যামে ওএস লোড হওয়ার ধাপসমূহ
  ],
  gpuRoleInGame: "গেম লোড হওয়ার পর জিপিউর ভূমিকা",
  completedSuccessfully: false
};`,
    solution: {
      code: `// Bootup Sequence Processed
const bootupExecutionFlow = {
  currentStage: "গেম অ্যাপ্লিকেশন সাকসেস লোডেড",
  romRoleInBios: "মাদারবোর্ডের রম থেকে বায়োস লোড হয়ে মেমরি ও হার্ডওয়্যার কানেকশন টেস্ট করা।",
  ssdToRamLoadAction: [
    "ধাপ ১: ওএস বুট ফাইলের ডিরেক্টরি এসএসডি থেকে ফাস্ট র‍্যাম মেমরিতে লোড করা।",
    "ধাপ ২: ইউজার গেমে ডাবল ক্লিক করলে গেমের কোড ফাইল র‍্যাম মেমরিতে লোড হয়ে সিপিইউ রান করে।",
    "ধাপ ৩: গেমের টেক্সচার ও গ্রাফিক্স ডাটা জিপিউ মেমরিতে (VRAM) ক্যাশ করা।"
  ],
  gpuRoleInGame: "প্রতি সেকেন্ডে ৬০ বা ১২০ টি ভিডিও ফ্রেম প্যারালালি প্রসেস করে মনিটরে আউটপুট দেখানো।",
  completedSuccessfully: true
};`,
      explanation: {
        bn: "দারুণ সমাধান! বায়োস বুটআপ থেকে শুরু করে র‍্যাম লোডিং এবং জিপিউর ভি-র‍্যাম মেমরি বরাদ্দকরণের পুরো হাইওয়ে ফ্লোটি লজিক্যালি নির্ভুল হয়েছে।",
        en: "Decomposing hardware steps reflects how configurations organize device resource requests.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "রম (ROM) এবং এসএসডি (SSD) স্টোরেজ উভয়েই বিদ্যুৎ চলে গেলেও ডাটা ধরে রাখে—তবুও রমের আলাদা প্রয়োজনীয়তা কী?",
        en: "Since ROM and SSD are both non-volatile, why does a computer need ROM separately?",
      },
      answer: {
        bn: "এসএসডি বা হার্ডডিস্ক অনেক বড় এবং জটিল স্টোরেজ। এটি রিড করার জন্য প্রসেসরকে প্রথমে একটি অপারেটিং সিস্টেম বা 'ফাইল সিস্টেম ড্রাইভার' রান করতে হয়। কিন্তু কম্পিউটার যখন একদম নতুন চালু হয়, তখন প্রসেসর নিজে কিছুই জানে না। রমে (ROM) খুব ছোট এবং অনুন্নত কোড (BIOS) সরাসরি হার্ডকোড করা থাকে যা প্রসেসরকে বলে দেয় কীভাবে এসএসডিকে খুঁজে বের করতে হবে এবং সেখান থেকে ওএস লোড করতে হবে। রম ছাড়া প্রসেসর বুট ড্রাইভ খুঁজেই পাবে না।",
        en: "The SSD requires device controller drivers and file system configurations to access directory sectors, which are handled by OS files. ROM hosts basic BIOS routines executed directly by hardware gates, instructing the CPU how to communicate with the SSD controller to fetch OS sectors during boot.",
      },
    },
    {
      question: {
        bn: "ডেডিকেটেড গ্রাফিক্স কার্ড (Dedicated GPU) এবং ইন্টিগ্রেটেড গ্রাফিক্স (Integrated GPU) এর মধ্যে পার্থক্য কী?",
        en: "What is the difference between a Dedicated GPU and an Integrated GPU?",
      },
      answer: {
        bn: "ইন্টিগ্রেটেড গ্রাফিক্স সিপিইউ প্রসেসরের চিপের ভেতরেই বসানো থাকে এবং এটি কম্পিউটারের মেইন র‍্যাম মেমরি শেয়ার করে কাজ করে, যার ফলে ভারী গেমে মেইন র‍্যাম কমে যায় এবং পারফরম্যান্স স্লো হয়। আর ডেডিকেটেড গ্রাফিক্স কার্ড আলাদা একটি হার্ডওয়্যার কার্ড—যার নিজস্ব অতি দ্রুতগতির মেমরি থাকে (যাকে VRAM বা Video RAM বলা হয়) এবং নিজস্ব কুলিং ফ্যান থাকে। এটি মেইন র‍্যামে কোনো চাপ ফেলে না এবং রেন্ডারিং পারফরম্যান্স অনেক বেশি দেয়।",
        en: "An Integrated GPU resides within the CPU die, sharing motherboard system memory (RAM). This reduces available RAM bandwidth for other execution threads. A Dedicated GPU sits on its own expansion card, utilizing high-bandwidth Video RAM (VRAM) buses to isolate visual workloads from system resources.",
      },
    },
  ],
};
