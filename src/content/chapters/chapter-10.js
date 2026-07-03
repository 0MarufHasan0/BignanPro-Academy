export const chapter10Content = {
  id: "chapter-10",
  number: 10,
  title: {
    bn: "অধ্যায় ১০: ইন্টারনেট ফান্ডামেন্টালস — বৈশ্বিক নেটওয়ার্কের সহজ পাঠ",
    en: "Chapter 10: Internet Fundamentals (Global Network System)",
  },
  description: {
    bn: "ইন্টারনেট কীভাবে কাজ করে, আইপি অ্যাড্রেস ও ডিএনএস কী এবং ব্রাউজার কীভাবে সার্ভার থেকে ওয়েবসাইট লোড করে।",
    en: "Understand the global computer network, client-server models, data packetization, IP addresses, DNS lookups, and routing.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "ইন্টারনেটকে কাল্পনিক কিছু মনে না করে একে একটি বৈশ্বিক ভৌত সংযোগ নেটওয়ার্ক হিসেবে চেনা।",
      en: "Demystify the internet as a physical global network of connected computers.",
    },
    {
      bn: "ওয়েবসাইট ব্যবহারের পেছনে ক্লায়েন্ট (Client) এবং সার্ভার (Server) এর ভূমিকা স্পষ্ট করা।",
      en: "Differentiate between client devices and server hosts in web transactions.",
    },
    {
      bn: "ডাটা কীভাবে ছোট ছোট প্যাকেট (Packets) আকারে রাউটারের মাধ্যমে ইন্টারনেটে ট্রাভেল করে তা জানা।",
      en: "Learn how data splits into packets and routes across networks via routers.",
    },
    {
      bn: "আইপি অ্যাড্রেস এবং ডিএনএস (DNS) কীভাবে ডোমেন নামকে আইপিতে অনুবাদ করে ওয়েবসাইট লোড করায় তা শেখা।",
      en: "Comprehend how IP addresses and DNS map human URLs to computer target IPs.",
    },
  ],
  sections: [
    {
      id: "what-is-internet-flow",
      title: {
        bn: "১. ইন্টারনেট কী ও কীভাবে কাজ করে? (What is Internet & Flow)",
        en: "1. What is Internet & Flow",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
আমরা প্রত্যেকে ফেসবুক, গুগল বা ইউটিউব চালানোর সময় ইন্টারনেট বা ডাটা কানেকশন অন করি। কিন্তু এই ডাটা বা ইন্টারনেট কীভাবে কাজ করে? আপনার ফোনের একটি ক্লিকের মেসেজ কীভাবে মাত্র কয়েক মিলি সেকেন্ডের মধ্যে আমেরিকার সার্ভারে গিয়ে তথ্য নিয়ে ফেরত আসে? এই লেসনে আমরা জানবো ইন্টারনেটের অসাধারণ পেছনের গল্প।

## Why should I learn this? (কেন শিখবো?)
ওয়েব ডেভেলপার হিসেবে আপনি যে ওয়েবসাইট বা এপিআই (API) তৈরি করবেন, তা ইন্টারনেটের মাধ্যমেই ব্যবহারকারীরা ব্রাউজ করবেন। ইন্টারনেট নেটওয়ার্কের ডাটা ফ্লো বুঝতে পারলে আপনি সার্ভারের ডাটা লোডিং স্পিড বহুগুণ অপ্টিমাইজ করতে পারবেন।

## What is the Internet? (ইন্টারনেট কী?)
সহজ কথায়: **ইন্টারনেট হলো বিশ্বজুড়ে কোটি কোটি কম্পিউটারের মধ্যে তৈরি হওয়া একটি বিশাল বৈশ্বিক নেটওয়ার্ক বা জাল।**

এটি কোনো জাদু নয়। আপনি যেমন আপনার ল্যাপটপ থেকে ক্যাবল বা তার দিয়ে পাশের ল্যাপটপে ডাটা শেয়ার করতে পারেন, তেমনি সমুদ্রের তলদেশ দিয়ে বসানো হাজার হাজার মাইল ফাইবার অপটিক ক্যাবল (Undersea Cables) দিয়ে পুরো বিশ্বের কম্পিউটারগুলোকে ফিজিক্যালি যুক্ত করা হয়েছে। এই ক্যাবল বা সংযোগের নেটওয়ার্কটিই হলো ইন্টারনেট।

*   **রূপক**: শহরগুলোকে যুক্ত করা পাকা সড়ক বা মহাসড়ক ব্যবস্থার মতো। সড়ক দিয়ে যেমন গাড়ি চলে, ইন্টারনেট দিয়ে তেমনি ডাটা বা তথ্য চলে।`,
        en: `## Introduction
Web applications execute over TCP/IP connections. Comprehending global network layouts is key to coding fast backend routes and managing APIs.

## What is the Internet?
The internet is a physical infrastructure. It is a global network of computers connected via undersea fiber optic cables, satellites, and routers. E.g., a massive road grid connecting distant cities.`,
      },
    },
    {
      id: "client-server-model",
      title: {
        bn: "২. ক্লায়েন্ট এবং সার্ভার মডেল (Client & Server Model)",
        en: "2. Client & Server Model",
      },
      content: {
        bn: `## The Client-Server Relationship (নেওয়া এবং দেওয়া)
ওয়েবসাইটের পুরো জগতটি মূলত ২টি প্রধান স্তরে বিভক্ত হয়ে কাজ করে, একেই বলে **ক্লায়েন্ট-সার্ভার মডেল (Client-Server Model)**:

১. **ক্লায়েন্ট (Client)**: যে ডিভাইস বা ব্রাউজার তথ্য পাওয়ার জন্য রিকোয়েস্ট পাঠায়।
   *   **উদাহরণ**: আপনার স্মার্টফোন, ল্যাপটপ বা গুগলের ক্রোম ব্রাউজার। (তথ্য গ্রহীতা)
২. **সার্ভার (Server)**: একটি শক্তিশালী কম্পিউটার যা সারাদিন অন থাকে এবং ক্লায়েন্টকে ডাটা বা ফাইল দিয়ে সাহায্য করে।
   *   **উদাহরণ**: ইউটিউবের সার্ভার (যেখানে কোটি কোটি ভিডিও ফাইল সেভ করা থাকে)। (তথ্য দাতা)

## Real Case Study: Opening YouTube (ইউটিউব ওপেন করার সিকোয়েন্স)
*   আপনি যখন ফোনে ইউটিউব অ্যাপ ওপেন করেন, আপনার ফোন হলো **ক্লায়েন্ট**।
*   আপনার ফোন ইন্টারনেট দিয়ে একটি নোটিফিকেশন রিকোয়েস্ট পাঠায়।
*   ইউটিউবের **সার্ভার** সেই রিকোয়েস্ট পেয়ে ভিডিও ডেটার ফাইল প্যাকেটগুলো ইন্টারনেট দিয়ে আপনার ফোনে পাঠায়।
*   আপনার ফোনের স্ক্রিনে ভিডিও প্লে হতে শুরু করে!`,
        en: `## The Client-Server Model
*   **Client**: The device requesting data (your browser, phone app).
*   **Server**: The high-performance computer hosting database tables and files, waiting to serve incoming client requests.

## Flow:
"Client requests content ➔ Network carries packets ➔ Server processes query ➔ Server responds ➔ Client renders"`,
      },
    },
    {
      id: "data-packets-routers",
      title: {
        bn: "৩. ডাটা প্যাকেট ও রাউটার (Data Packets & Routers)",
        en: "3. Data Packets & Routers",
      },
      content: {
        bn: `## Data Transmission: Packets (ডাটা প্যাকেট কী?)
ইন্টারনেটে যখন আপনি একটি ১ মেগাবাইটের ছবি পাঠান, সেটি কিন্তু পুরোটা একসাথে ট্রাভেল করে না। 

ফাইলটিকে ওএস নেটওয়ার্ক স্তরে হাজার হাজার ছোট ছোট টুকরোতে বিভক্ত করে ফেলে, যাদের **ডাটা প্যাকেট (Data Packets)** বলা হয়।
*   প্রতিটি প্যাকেটের ওপরে একটি লেবেল থাকে, যাতে লেখা থাকে ফাইলটি কার কাছ থেকে যাচ্ছে (Sender IP) এবং কার কাছে পৌঁছাবে (Receiver IP)।
*   প্যাকেটগুলো ইন্টারনেটের ভিন্ন ভিন্ন রুট বা রাস্তা দিয়ে গন্তব্যে পৌঁছায় এবং সব শেষে প্রাপকের ডিভাইসে গিয়ে সিকোয়েন্স অনুযায়ী আবার জোড়া লেগে মূল ফাইলে রূপ নেয়।

---
## Router: The Traffic Controller (রাউটার কী?)
**রাউটার (Router)** হলো ইন্টারনেটের ট্রাফিক কন্ট্রোলার বা পোস্ট মাস্টার। 
*   এর কাজ হলো ডাটা প্যাকেটগুলো কোন রাস্তা দিয়ে গেলে সবচেয়ে দ্রুত এবং নিরাপদে গন্তব্যে পৌঁছাবে তা নির্ধারণ করা। 

## Analogy (প্যাকেট ও রাউটারের রূপক)
ডাটা প্যাকেটকে ভাবুন ডাকঘরের চিঠির মতো। আপনি যখন একটি বড় বই (ফাইল) ডাকযোগে পাঠাতে চান, ডাকঘর প্রতি পৃষ্ঠা আলাদা খামে ভরে (Data Packets) খামের গায়ে বাড়ির ঠিকানা লিখে দেয়। পোস্টম্যানরা (Routers) খামগুলো ট্রাকে করে ভিন্ন ভিন্ন রোড দিয়ে নিয়ে যান এবং প্রাপকের ঠিকানায় পৌঁছানোর পর প্রাপক সবগুলো খাম খুলে পৃষ্ঠা সাজিয়ে মূল বই বানিয়ে ফেলেন!`,
        en: `## Data Packetization
Data payloads split into smaller segments called **Packets**. Each packet bears meta headers detailing source and destination IP addresses. Packets may travel via different routes before reassembling at the destination.

## Routers
Physical networking nodes acting as traffic controllers, routing packets along optimal network pathways. E.g., post office hubs sorting envelope addresses.`,
      },
    },
    {
      id: "ip-address-dns",
      title: {
        bn: "৪. আইপি অ্যাড্রেস ও ডিএনএস (IP Address & DNS)",
        en: "4. IP Address & DNS",
      },
      content: {
        bn: `## IP Address: Your House Number (আইপি অ্যাড্রেস কী?)
ইন্টারনেটে সংযুক্ত প্রতিটি কম্পিউটারের একটি সুনির্দিষ্ট ইউনিক নাম্বার থাকে, যাকে **আইপি অ্যাড্রেস (IP Address - Internet Protocol Address)** বলে।
*   **উদাহরণ**: \`192.168.1.1\` বা \`142.250.190.46\` (গুগলের আইপি)।
*   **রূপক**: আপনার বাড়ির হোল্ডিং নম্বর বা ফোন নম্বর, যা দিয়ে চিঠিপত্র বা ফোন সঠিক জায়গায় পৌঁছায়।

---
## DNS: The Phonebook of the Web (ডিএনএস কী?)
কম্পিউটার কেবল আইপি নম্বর বোঝে, কিন্তু মানুষের পক্ষে \`142.250.190.46\` এর মতো জটিল নম্বর মনে রাখা সম্ভব নয়। আমরা মনে রাখি ডোমেন নাম (যেমন: \`google.com\`)।

**DNS (Domain Name System)** হলো ইন্টারনেটের ডিরেক্টরি বা ফোনবুক। 
*   এর প্রধান কাজ হলো মানুষের দেওয়া ডোমেন নামকে কম্পিউটারের আইপি নম্বরে রূপান্তর বা অনুবাদ করা।

जब আপনি ব্রাউজারে \`bignanpro.com\` লেখেন, ওএস প্রথমে ডিএনএস সার্ভারে গিয়ে জিজ্ঞেস করে: *"bignanpro.com এর আইপি নম্বর কত?"* ডিএনএস আইপি নম্বর এনে দিলে ব্রাউজার সরাসরি সেই আইপির সার্ভারে নক করে।`,
        en: `## IP Address
A unique numerical label assigned to each active device connected to the network. E.g., \`142.250.190.46\` (Google's IP).

## DNS: Domain Name System
The phonebook of the web. DNS servers translate human-readable URLs (e.g., \`google.com\`) into machine-readable IP addresses.`,
      },
    },
    {
      id: "open-website-steps",
      title: {
        bn: "৫. ওয়েবসাইট ওপেন করার ক্রমানুসার (Open Website Sequence)",
        en: "5. Open Website Sequence",
      },
      content: {
        bn: `## Steps: Opening a Website (একটি ওয়েবসাইট লোড হওয়ার ৫টি ধাপ)
আসুন আমরা যখন ব্রাউজারে \`facebook.com\` লিখে এন্টার চাপি, তখন কী কী ঘটে তা মিলিয়ে নিই:

১. **ইউআরএল টাইপ (URL Input)**: আপনি ব্রাউজারে ইউআরএল লিখে এন্টার দিলেন।
২. **ডিএনএস সন্ধান (DNS Lookup)**: ব্রাউজার ডিএনএস সার্ভারে নক করে ডোমেনের আইপি অ্যাড্রেস খুঁজে নেয়।
৩. **অনুরোধ পাঠানো (HTTP Request)**: ব্রাউজার সেই আইপির সার্ভারে ফাইল (HTML/CSS) দেওয়ার জন্য নেটওয়ার্ক রিকোয়েস্ট পাঠায়।
৪. **ফাইল পাঠানো (Server Response)**: সার্ভার ডাটাবেজ থেকে ফাইলগুলো প্যাকেট আকারে ইন্টারনেট দিয়ে ব্রাউজারে পাঠায়।
৫. **রেন্ডারিং (Render)**: ব্রাউজার ফাইলগুলো রিসিভ করে সুন্দর স্ক্রিন রেন্ডার করে আপনাকে ফেসবুক ড্যাশবোর্ড দেখায়।

এই পুরো প্রক্রিয়াটি সম্পন্ন হতে এক সেকেন্ডের চেয়েও কম সময় লাগে!`,
        en: `## How a Website Loads:
1. User enters \`google.com\` in the address bar.
2. DNS resolves the URL to \`142.250.190.46\`.
3. Client browser initiates an HTTP request payload to that IP.
4. Google server responds, transmitting HTML files back in packets.
5. Client browser compiles code and renders the visuals on your screen.`,
      },
      codeBlock: {
        fileName: "dns_resolver.js",
        language: "javascript",
        code: `// ডিএনএস ও ক্লায়েন্ট রিকোয়েস্ট সিমুলেটর
const dnsPhonebook = {
  "google.com": "142.250.190.46",
  "facebook.com": "157.240.22.35",
  "bignanpro.com": "104.21.32.189"
};

function makeWebRequest(url) {
  console.log(\`🌐 ক্লায়েন্ট: ইউজার ডোমেন লিখলেন: "\${url}"\`);
  
  // ১. ডিএনএস আইপি রেজোলিউশন
  const targetIp = dnsPhonebook[url];
  if (!targetIp) {
    console.log("❌ এরর: ডোমেন খুঁজে পাওয়া যায়নি!");
    return;
  }
  console.log(\`🔍 DNS: "\${url}" এর আইপি নম্বর হলো: \${targetIp}\`);
  
  // ২. সার্ভার রিকোয়েস্ট ফ্লো
  sendHttpRequest(targetIp);
}

function sendHttpRequest(ip) {
  console.log(\`⚡ ক্লায়েন্ট: রিকোয়েস্ট পাঠানো হচ্ছে সার্ভার আইপি: \${ip}...\`);
  console.log("📦 সার্ভার: ফাইল প্যাকেট লোড করে ফেরত পাঠানো হলো! ব্রাউজার রেন্ডারিং শেষ।");
}

makeWebRequest("bignanpro.com");`,
        explanations: [
          {
            line: 10,
            text: {
              bn: "ডিএনএস ফোনবুক টেবিল থেকে ডোমেনের সমতুল্য আইপি অ্যাড্রেস বের করা।",
              en: "Resolving target domain URL to numeric IP address from DNS registry.",
            },
          },
          {
            line: 17,
            text: {
              bn: "খুঁজে পাওয়া আইপি ঠিকানায় সরাসরি সার্ভার কল বা রিকোয়েস্ট পাঠানো।",
              en: "Dispatching payload request directly to Resolved IP endpoint.",
            },
          },
        ],
      },
    },
    {
      id: "practice-network-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচে দেওয়া কুইজ ও অনুশীলন প্রশ্নগুলো সমাধান করার চেষ্টা করুন। এটি আপনার নেটওয়ার্ক ট্রাফিক এবং ক্লায়েন্ট-সার্ভার ডায়াগ্রামের ধারণা স্পষ্ট করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your network concepts before transitioning into browser engine compilation rules.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "ইন্টারনেটের রাউটিং এবং ব্যান্ডউইথ জানলে আপনি বুঝতে পারবেন কীভাবে অ্যাসেট কম্প্রেস করে ডেটা সাইজ কমালে ওয়েবসাইট দ্রুত লোড হয়।",
          en: "Knowing network flows helps you optimize bundle sizes, decreasing latency for clients on slow mobile grids.",
        },
        whyWorks: {
          bn: "ডিএনএস মূলত ক্লাউডে হোস্ট করা একটি গ্লোবাল ডিস্ট্রিবিউটেড ডেটাবেজ যা অত্যন্ত দ্রুত ডোমেন আইপি ক্যোয়ারী সলভ করতে পারে।",
          en: "DNS nodes cache values locally inside OS memory tables to bypass global queries for frequent requests.",
        },
        professionalThinking: {
          bn: "সিনিয়র ডেভেলপাররা প্রজেক্টের স্ট্যাটিক ইমেজ ও ফাইল দ্রুত লোড করতে গ্লোবাল সিডিএন (CDN - Content Delivery Network) ব্যবহার করেন।",
          en: "Seniors leverage CDNs to cache files at edge servers located closer to client IP geographical zones.",
        },
        mistakes: {
          bn: "বিগিনারদের ভুল হলো ভাবা যে ইন্টারনেট মানেই ওয়াইফাই। ওয়াইফাই হলো কেবল শেষ প্রান্তের তারবিহীন সংযোগ, মূল ইন্টারনেট সমুদ্রের তার দিয়ে তৈরি।",
          en: "Never confuse Wi-Fi (local wireless LAN) with the global WAN internet routing channels.",
        },
        debugging: {
          bn: "কোড সার্ভারে হোস্ট করার পর কানেকশন এরর আসলে প্রথমে পিং (ping) কমান্ড দিয়ে সার্ভার আইপি লাইভ আছে কিনা টেস্ট করুন।",
          en: "When diagnosing backend outages, execute 'ping <IP>' or trace route logs to isolate network block locations.",
        },
        performance: {
          bn: "সার্ভারের সাথে বারবার ডাটা রিকোয়েস্ট না পাঠিয়ে প্রয়োজনীয় ডাটা ব্রাউজারের লোকাল ক্যাশ মেমরিতে স্টোর রাখুন।",
          en: "Implement HTTP caching policies to reduce redundant roundtrips across internet routers.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "net-q1",
      question: {
        bn: "ইন্টারনেট (Internet) এর মূল সংজ্ঞা ও ভৌত রূপ কোনটি?",
        en: "What is the physical structure of the Internet?",
      },
      options: [
        {
          bn: "একটি তারবিহীন কাল্পনিক মেঘের জগত",
          en: "A virtual cloud with no physical wires",
        },
        {
          bn: "সমুদ্রের তলদেশ দিয়ে ক্যাবল ও ফাইবার অপটিক দিয়ে যুক্ত বিশ্বব্যাপী কম্পিউটারের ভৌত নেটওয়ার্ক",
          en: "A global physical network of computers connected via undersea fiber cables and routers",
        },
        { bn: "একটি ডাটাবেজ চিপ", en: "A database chip" },
        {
          bn: "শুধুমাত্র একটি ওয়াইফাই রাউটার",
          en: "Just a local Wi-Fi router",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ইন্টারনেট হলো ফাইবার অপটিক ও সমুদ্রের সাবমেরিন ক্যাবল দিয়ে জোড়া ভৌত কম্পিউটারের বিশাল নেটওয়ার্ক।",
        en: "The internet consists of global physical wiring carrying electrical and light impulses.",
      },
    },
    {
      id: "net-q2",
      question: {
        bn: "ক্লায়েন্ট-সার্ভার মডেল (Client-Server) অনুযায়ী সার্ভার (Server) এর কাজ কী?",
        en: "What is the role of a server in the client-server model?",
      },
      options: [
        {
          bn: "ব্যবহারকারীর কিবোর্ড ইনপুট টাইপ করা",
          en: "Type keyboard inputs for the user",
        },
        {
          bn: "সারাদিন অন থেকে ক্লায়েন্ট ডিভাইসের ফাইল রিকোয়েস্ট প্রসেস করে ডাটা সরবরাহ করা",
          en: "Host databases and files, responding to client requests with data payloads",
        },
        { bn: "ওয়াইফাই পাসওয়ার্ড চুরি করা", en: "Snoop Wi-Fi passwords" },
        { bn: "ইন্টারনেট বন্ধ রাখা", en: "Turn off network interfaces" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "সার্ভার হলো সর্বদা সচল শক্তিশালী হোস্ট যা ক্লায়েন্ট ডিভাইসের ফাইল রিকোয়েস্টের উত্তর দেয়।",
        en: "Servers process incoming HTTP requests and return HTML, CSS, or API JSON packets.",
      },
    },
    {
      id: "net-q3",
      question: {
        bn: "ডাকঘরের চিঠির রূপক অনুযায়ী, ইন্টারনেটে ডাটা প্যাকেট (Data Packets) এর গায়ে কোন তথ্য লেখা থাকে?",
        en: "What details are stored inside a data packet header?",
      },
      options: [
        { bn: "ইউজারের বয়স ও ঠিকানা", en: "User age and profile details" },
        {
          bn: "প্রেরক ও প্রাপকের সুনির্দিষ্ট আইপি অ্যাড্রেস (Sender & Receiver IP)",
          en: "The sender and receiver unique IP addresses",
        },
        { bn: "শুধুমাত্র পাসওয়ার্ড", en: "Only system password keys" },
        { bn: "কোনো তথ্য থাকে না", en: "No address details" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডাটা প্যাকেটের গায়ে সোর্স এবং ডেস্টিনেশন আইপি লেখা থাকে যাতে রাউটার সঠিক জায়গায় ফাইল বিলি করতে পারে।",
        en: "Packet headers map IP routes, ensuring routers direct fragments to correct network targets.",
      },
    },
    {
      id: "net-q4",
      question: {
        bn: "ডোমেন নামকে (যেমন google.com) আইপি নম্বরে অনুবাদ করার ডিরেক্টরি সিস্টেমের নাম কী?",
        en: "What system translates human URLs into numerical IP addresses?",
      },
      options: [
        { bn: "BIOS (বায়োস)", en: "BIOS" },
        { bn: "DNS (Domain Name System)", en: "DNS (Domain Name System)" },
        { bn: "CPU Core", en: "CPU Core" },
        { bn: "NTFS File System", en: "NTFS File System" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডিএনএস (DNS) হলো ওয়েবের ফোনবুক যা মানুষের টাইপ করা ইউআরএল নামকে আইপিতে রূপান্তর করে।",
        en: "DNS acts as the registry lookup translating URLs to numeric IP points.",
      },
    },
    {
      id: "net-q5",
      question: {
        bn: "WiFi এবং ইন্টারনেটের মধ্যে মূল পার্থক্য কোনটি?",
        en: "What is the primary difference between Wi-Fi and the Internet?",
      },
      options: [
        { bn: "ওয়াইফাই একটি ওয়েবসাইট", en: "Wi-Fi is a website" },
        {
          bn: "ওয়াইফাই হলো লোকাল ওয়্যারলেস সংযোগ এবং ইন্টারনেট হলো গ্লোবাল কম্পিউটারের নেটওয়ার্ক",
          en: "Wi-Fi is local wireless connectivity, whereas the Internet is the global network of computers",
        },
        { bn: "কোনো তফাৎ নেই", en: "There is no difference" },
        {
          bn: "ওয়াইফাই প্রসেসরের গতি বাড়ায়",
          en: "Wi-Fi increases CPU core speeds",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ওয়াইফাই আপনার ফোনকে লোকাল রাউটারের সাথে তার ছাড়া কানেক্ট করে, আর ইন্টারনেট রাউটার থেকে গ্লোবাল ক্যাবল সংযোগ বজায় রাখে।",
        en: "Wi-Fi handles wireless local data streams; the WAN internet routes global data streams.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার ব্রাউজারে 'facebook.com' টাইপ করার পর ডিএনএস (DNS) না থাকলে কী সমস্যা হতে পারে? সংক্ষেপে লিখুন।",
      en: "Describe what happens if DNS servers fail and you type facebook.com in browser.",
    },
    {
      bn: "ডাকঘরের রূপক ব্যবহার করে আপনার একটি টেক্সট মেসেজ ইমোজি পাঠানোর ডাটা ফ্লো চিত্রটি নিজের ভাষায় ১টি গল্প আকারে লিখুন।",
      en: "Write a short story using the post office analogy to model sending an emoji message over the network.",
    },
    {
      bn: "সার্ভারের সাথে ক্লায়েন্টের দূরত্ব বা জিওগ্রাফিক্যাল লোকেশন বেশি হলে রিকোয়েস্ট লোড স্পিডে কী ধরণের প্রভাব পড়ে? ব্যাখ্যা করুন।",
      en: "Explain why server geographic locations affect web application loading speeds.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি ওয়েবসাইট লোড হওয়ার গ্লোবাল নেটওয়ার্ক সিকোয়েন্স",
      en: "Web Loading Sequence Across DNS and Servers",
    },
    description: {
      bn: "ব্রাউজারে একটি লিঙ্ক পেস্ট করার পর নেটওয়ার্কের মডিউলগুলো কীভাবে রান করে, তার একটি লজিক্যাল কনফিগারেশন অবজেক্ট তৈরি করে সাবমিট করুন।",
      en: "Model the client-to-server request sequence when loading a web page, specifying DNS resolution and packet flows.",
    },
    starterCode: `// Internet Request Pipeline Config
const internetRequestPipeline = {
  requestUrl: "bignanpro.com",
  resolvedIpAddress: "",
  networkSteps: [
    // ডিএনএস লুকআপ থেকে শুরু করে ভিডিও বা ইমেজ ডাটা রিসিভ করার সিকোয়েন্স
  ],
  isClientDeviceMobile: true,
  packetsTransmissionSuccessful: false
};`,
    solution: {
      code: `// Internet Request Flow Completed
const internetRequestPipeline = {
  requestUrl: "bignanpro.com",
  resolvedIpAddress: "104.21.32.189",
  networkSteps: [
    "ধাপ ১: ব্রাউজার ডোমেন নেম ডিএনএস সার্ভারে কুয়েরি করে আইপি রেজোলিউশন করে।",
    "ধাপ ২: ওএস নেটওয়ার্ক ইন্টারফেস দিয়ে টিসিপি কানেকশন ওপেন করে রিকোয়েস্ট প্যাকেট পাঠায়।",
    "ধাপ ৩: প্রজেক্ট সার্ভার রিকোয়েস্ট রিসিভ করে ডাটা ফাইল প্যাকেট আকারে ব্যাকওয়ার্ড বাফারে রিপ্লাই দেয়।"
  ],
  isClientDeviceMobile: true,
  packetsTransmissionSuccessful: true
};`,
      explanation: {
        bn: "চমৎকার নেটওয়ার্ক মডেল! ডিএনএস কুয়েরি সম্পাদন ও টিসিপি কানেকশন খোলার পুরো ফ্লোটি লজিক্যালি শতভাগ সঠিক হয়েছে।",
        en: "Mapping network request steps shows how client browsers organize web requests over IP channels.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "ডোমেন নেম সিস্টেম (DNS) কীভাবে কাজ করে এবং এটি না থাকলে ইন্টারনেট ব্যবহারে কী সমস্যা হতো?",
        en: "How does DNS work and what happens if DNS gets disabled globally?",
      },
      answer: {
        bn: "ডিএনএস সার্ভার মূলত একটি গ্লোবাল ইনডেক্স টেবিল স্টোর করে যেখানে ডোমেনের নামের বিপরীতে তার সার্ভার আইপি অ্যাড্রেস ম্যাপিং করা থাকে। যখন আমরা ব্রাউজারে ইউআরএল লিখি, ওএস ডিএনএস সার্ভার থেকে আইপি রেজোলিউশন নিয়ে সেই আইপির সাথে কানেক্ট করে। যদি ডিএনএস গ্লোবালি বন্ধ হয়ে যায়, তবে আমরা 'facebook.com' বা 'google.com' লিখে কোনো সাইট ওপেন করতে পারব না। আমাদের ব্রাউজারে গুগলের আইপি (যেমন: 142.250.190.46) সরাসরি মুখস্থ টাইপ করে ঢুকতে হবে—যা সাধারণ মানুষের জন্য অসম্ভব কঠিন কাজ।",
        en: "DNS resolves text domains to numerical IP coordinates. If DNS fails, users must memorize and input raw IP addresses (e.g., 142.250.190.46) directly into address bars to browse websites, stopping commercial web usage for most users.",
      },
    },
    {
      question: {
        bn: "সিডিএন (CDN - Content Delivery Network) কী এবং এটি কীভাবে ওয়েবসাইটের ডাটা লোডিং ল্যাটেন্সি বা বিলম্ব কমায়?",
        en: "What is a CDN and how does it optimize web page performance globally?",
      },
      answer: {
        bn: "সিডিএন হলো বিশ্বজুড়ে ছড়িয়ে থাকা ইন্টারকানেক্টেড সার্ভারের একটি নেটওয়ার্ক। ধরুন আপনার মূল প্রজেক্ট সার্ভার আমেরিকায় আছে। বাংলাদেশ থেকে একজন ইউজার সাইট ব্রাউজ করলে আমেরিকার সার্ভার থেকে ফাইবার ক্যাবল দিয়ে ডাটা প্যাকেটের ডেস্টিনেশন ট্রাভেল করতে বেশি সময় লাগবে (যাকে Latency বা ল্যাগ বলা হয়)। সিডিএন আপনার ওয়েবসাইটের ইমেজ ও কোড ফাইল ভারতের বা লোকাল কোনো প্রক্সি সার্ভারে ক্যাশ বা সেভ করে রাখে। ফলে বাংলাদেশি কাস্টমার আমেরিকা না গিয়ে লোকাল ভারতের সিডিএন সার্ভার থেকেই দ্রুত ফাইল লোড করতে পারেন, যা ল্যাটেন্সি অনেক কমিয়ে দেয়।",
        en: "A CDN is a distributed network of proxy edge servers hosting static file caches closer to geographical client zones. Instead of routing packets across transatlantic lines to main servers, clients retrieve static resources (images, JS files) from local edge nodes, reducing round-trip times (RTT) and loading delays.",
      },
    },
  ],
};
