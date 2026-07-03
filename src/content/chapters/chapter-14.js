export const chapter14Content = {
  id: "chapter-14",
  number: 14,
  title: {
    bn: "অধ্যায় ১৪: ডিএনএস ও ডোমেন সিস্টেম — যেভাবে ডোমেন নাম আইপিতে রূপান্তরিত হয়",
    en: "Chapter 14: DNS & Domain System (How google.com becomes IP)",
  },
  description: {
    bn: "ডোমেন নাম কী, আইপি ও ডিএনএসের কাজ এবং ব্রাউজার কীভাবে রুট, রিসলভার ও অথোরিটেটিভ সার্ভার পেরিয়ে আইপি খুঁজে বের করে।",
    en: "Learn about domain name hierarchies, Domain Name System (DNS) query flows, Root, TLD, and Authoritative nameservers, and IP address mappings.",
  },
  difficulty: "beginner",
  readingTime: 10,
  objectives: [
    {
      bn: "ডোমেন নাম এবং আইপি অ্যাড্রেসের কাজের তফাৎ স্পষ্ট চেনা।",
      en: "Differentiate between human-readable domain names and server IP addresses.",
    },
    {
      bn: "ডিএনএস (DNS) কীভাবে ইন্টারনেটের ডিরেক্টরি হিসেবে কাজ করে তা বোঝা।",
      en: "Understand DNS as the directory infrastructure of the internet.",
    },
    {
      bn: "রুট, রিসলভার এবং অথোরিটেটিভ ডিএনএস সার্ভারগুলোর কাজের ভূমিকা জানা।",
      en: "Learn the responsibilities of DNS Resolvers, Root Nameservers, and Authoritative Nameservers.",
    },
    {
      bn: "ডোমেন সাফিক্স (.com, .org, .bd) কীভাবে ডিরেক্টরি কাঠামোতে ভাগ করা থাকে তা শেখা।",
      en: "Understand domain suffix suffixes (.com, .org, .net, and country codes like .bd) in hierarchy.",
    },
  ],
  sections: [
    {
      id: "what-is-domain-ip",
      title: {
        bn: "১. ডোমেন নেম বনাম আইপি অ্যাড্রেস (Domain Name vs IP Address)",
        en: "1. Domain Name vs IP Address",
      },
      content: {
        bn: `## Introduction (ভূমিকা)
ইন্টারনেটে সংযুক্ত প্রতিটি ওয়েবসাইটের ফাইলগুলো কোনো না কোনো সার্ভারে সেভ করা থাকে এবং সেই সার্ভারের একটি নির্দিষ্ট আইপি নম্বর থাকে। কিন্তু আমরা যখন সাইট ভিজিট করি, আমরা কোনো নম্বর টাইপ করি না। আমরা সরাসরি টাইপ করি \`google.com\` বা \`bignanpro.com\`। স্ক্রিনের পেছনের এই ডোমেন নাম এবং আইপি নম্বরের মেলবন্ধন কীভাবে তৈরি হয়? এই রহস্যের উত্তর হলো **DNS (Domain Name System)**।

## Why should I learn this? (কেন শিখবো?)
আপনার ওয়েবসাইট ডোমেনের সাথে হোস্টিং কানেক্ট করার সময় আপনাকে কাস্টম নেমসার্ভার (Nameservers) বা এ-রেকর্ড (A-record) কনফিগার করতে হবে। ডিএনএস নেটওয়ার্ক প্রসেস না বুঝলে ডোমেন পয়েন্ট করতে ভুল হবে এবং আপনার সাইট ইন্টারনেট জুড়ে অফলাইন দেখাবে।

## Domain Name vs IP Address (ব্যক্তি বনাম তার বাড়ির হোল্ডিং নম্বর)
*   **ডোমেন নেম (Domain Name)**: এটি হলো মানুষের মনে রাখার সুবিধার্থে ওয়েবসাইটের একটি রিডেবল বা টেক্সট নাম।
    - **উদাহরণ**: \`google.com\`, \`facebook.com\`।
*   **আইপি অ্যাড্রেস (IP Address)**: এটি হলো ইন্টারনেটে কম্পিউটারের একটি সুনির্দিষ্ট ইউনিক গাণিতিক নম্বর ঠিকানা।
    - **উদাহরণ**: \`142.250.190.46\`।
*   **রিয়েল লাইফ অ্যানালজি**: ডোমেন নাম হলো আপনার বন্ধুর নাম *"তাসনিম"*, আর আইপি অ্যাড্রেস হলো তাসনিমের আসল বাড়ির ঠিকানা *"রোড নং ৩, হোল্ডিং নং ৪২, উত্তরা"*। আপনি বন্ধুর নাম মনে রাখেন কিন্তু ট্যাক্সি নিয়ে যাওয়ার জন্য হোল্ডিং নম্বর ব্যবহার করেন!`,
        en: `## Introduction
Computers route data packets via numeric coordinates, whereas humans communicate using text names. Understanding DNS translations prevents routing and deployment errors.

## Domain Name vs. IP Address
*   **Domain Name**: Human-friendly text alias for a web resource (e.g., \`google.com\`).
*   **IP Address**: Unique numeric routing address of target hardware node (e.g., \`142.250.190.46\`).
*   **Metaphor**: Friend's name vs. their physical home address coordinates. You recall the name, but taxis navigate using home holding numbers.`,
      },
    },
    {
      id: "why-need-dns",
      title: {
        bn: "২. ডিএনএস কী ও কেন ডোমেন নেম প্রয়োজন? (What is DNS & Why Domain Needed)",
        en: "2. What is DNS & Why Domain Needed",
      },
      content: {
        bn: `## Why Domain is Needed (ডোমেন নেম কেন প্রয়োজন?)
কল্পনা করুন, আপনাকে যদি ফেসবুক ওপেন করতে টাইপ করতে হতো \`157.240.22.35\`, গুগলের জন্য \`142.250.190.46\` এবং বিজ্ঞানপ্রো এর জন্য \`104.21.32.189\`—আপনার পক্ষে কি ১০০টি প্রিয় ওয়েবসাইটের আইপি নম্বর মুখস্থ রাখা সম্ভব হতো? অবশ্যই না! মানুষের স্মৃতিশক্তি অক্ষরের নাম সহজে মনে রাখতে পারে কিন্তু সংখ্যা মনে রাখা কঠিন। তাই ইন্টারনেটে ডোমেন নেম তৈরি করা হয়েছে।

---
## What is DNS? (ডিএনএস কী?)
**DNS (Domain Name System)** হলো বিশ্বব্যাপী নেটওয়ার্কে সংযুক্ত একটি ডিস্ট্রিবিউটেড ডিরেক্টরি বা ফোনবুক ব্যবস্থা। 

এর প্রধান দায়িত্ব হলো: **মানুষের টাইপ করা রিডেবল ডোমেন নামকে কম্পিউটারের বোঝার উপযোগী গাণিতিক আইপি অ্যাড্রেসে রূপান্তর বা অনুবাদ করা।**

ডিএনএস ছাড়া পুরো ইন্টারনেটে ফাইল নেভিগেট করা অসম্ভব হয়ে পড়ত, কারণ ব্রাউজার নামের কোড বোঝে না, সে কেবল আইপি নম্বরের রাউট বোঝে।`,
        en: `## Why Domain is Needed
Human memory cannot store hundreds of arbitrary numeric IP sequences. Names provide readable identifiers for servers.

## What is DNS?
Domain Name System. A distributed ledger system caching and translating web domain text lookups into matching target device IPs. Without it, standard browser navigation fails since web protocols navigate strictly via IP addresses.`,
      },
    },
    {
      id: "dns-lookup-flow",
      title: {
        bn: "৩. ডিএনএস কীভাবে কাজ করে? ধাপে ধাপে ক্রমানুসার (DNS Lookup Flow Steps)",
        en: "3. DNS Lookup Flow Steps",
      },
      content: {
        bn: `## The DNS Lookup Process (আইপি খুঁজে বের করার ৫টি ধাপ)
যখন আপনি ব্রাউজারে \`youtube.com\` লিখে এন্টার চাপেন, ওএস ব্যাকগ্রাউন্ডে আইপি পাওয়ার জন্য নিচের ৫টি ধাপে ডিরেক্টরি কুয়েরি করে:

১. **লোকাল ক্যাশ চেক (Browser/OS Cache)**: ব্রাউজার প্রথমে নিজের হিস্টোরি ও ওএস হোস্ট ফাইলে চেক করে দেখে পূর্বে এই সাইটের আইপি সেভ করা আছে কিনা। পাওয়া গেলে সাথে সাথে লোড করে।
২. **ডিএনএস রিসলভার (DNS Resolver - ISP)**: ক্যাশে না থাকলে ওএস আপনার ইন্টারনেট প্রোভাইডারের (ISP) ডিএনএস রিসলভারকে জিজ্ঞেস করে আইপি কত।
৩. **রুট নেমসার্ভার (Root Nameserver)**: রিসলভার যদি না জানে, সে কুয়েরি পাঠায় রুট সার্ভারে। রুট সার্ভার পুরো ডোমেন কাঠামো চেক করে দেখে ডোমেনের শেষ অংশটি কী (যেমন: \`.com\`) এবং সে ডোমেন রিসলভারকে ডট-কম সার্ভারের ঠিকানা দেয়।
４. **টিএলডি নেমসার্ভার (TLD Nameserver - Top-Level Domain)**: রিসলভার এবার \`.com\` টিএলডি সার্ভারে গিয়ে জিজ্ঞেস করে \`youtube.com\` এর আইপি কত। টিএলডি সার্ভার দেখে বলে: *"এর স্পেসিফিক নেমসার্ভারের ঠিকানা হলো ns1.google.com"*।
৫. **অথোরিটেটিভ নেমসার্ভার (Authoritative Nameserver)**: রিসলভার সবশেষে সেই ডোমেনের নির্দিষ্ট অথোরিটেটিভ নেমসার্ভারে নক করে। এটি হলো মূল মালিকের ডিরেক্টরি যা সঠিক আইপি অ্যাড্রেসটি (যেমন: \`172.217.166.110\`) রিসলভারকে দেয়। 

রিসলভার আইপিটি এনে ব্রাউজারকে দেয় এবং ওএস ভবিষ্যতে দ্রুত লোড করার জন্য আইপিটি ক্যাশ মেমরিতে সেভ করে রাখে।`,
        en: `## The DNS Lookup Flow
1. **Local Cache Check**: Browser queries local DNS table cache. If missed:
2. **DNS Resolver**: Queries client ISP resolver. If missed:
3. **Root Nameservers**: Evaluates suffix, directing query to matching TLD servers (e.g., pointing to .com registry server).
4. **TLD Nameservers**: Points resolver to target domain's Authoritative nameservers.
5. **Authoritative Nameservers**: The final registry holding the target domain IP record, returning the correct IP address (e.g., \`172.217.166.110\`).`,
      },
    },
    {
      id: "types-dns-servers",
      title: {
        bn: "৪. ডিএনএস সার্ভারের প্রকারভেদ ও ডোমেন কাঠামো (Types of DNS Servers & Domain Suffix)",
        en: "4. Types of DNS Servers & Domain Suffix",
      },
      content: {
        bn: `## Domain Structure (ডোমেন নামের ব্যবচ্ছেদ)
একটি ডোমেন নামকে স্ল্যাশ ও ডট দিয়ে কয়েকটি ভাগে ভাগ করা হয়:

\`\`\`text
subdomain.example.com
   │        │     │
   │        │     └── Top-Level Domain (TLD) - ডট কম সাফিক্স
   │        └──────── Second-Level Domain (SLD) - মূল নাম
   └───────────────── Subdomain - সাবডোমেন (মূল পেজের সাব সেকশন)
\`\`\`

## Types of Top-Level Domains (TLD এর প্রকারভেদ)
১. **Generic TLDs (gTLDs)**:
   *   \`.com\`: কমার্শিয়াল বা ব্যবসার জন্য (সবচেয়ে জনপ্রিয়)।
   *   \`.org\`: অর্গানাইজেশন বা অলাভজনক সেবামূলক প্রতিষ্ঠানের জন্য।
   *   \`.net\`: নেটওয়ার্কিং বা টেকনিক্যাল সাইটের জন্য।
২. **Country-Code TLDs (ccTLDs)**:
   *   \`.bd\`: বাংলাদেশের ওয়েবসাইট।
   *   \`.us\`: আমেরিকার ওয়েবসাইট।
   *   \`.in\`: ভারতের ওয়েবসাইট।`,
        en: `## Hierarchical Domain Structure
*   **TLD (Top-Level Domain)**: Suffixes specifying categories (.com, .org) or regional zones (.bd, .uk).
*   **SLD (Second-Level Domain)**: The brand name registered (e.g., 'bignanpro').
*   **Subdomain**: Prefixes pointing to distinct sub-servers (e.g., 'academy.bignanpro.com').`,
      },
    },
    {
      id: "phonebook-contact-analogy",
      title: {
        bn: "৫. কন্টাক্ট বুক ও ফোন নম্বর অ্যানালজি (Phonebook Contact Analogy)",
        en: "5. Phonebook Contact Analogy",
      },
      content: {
        bn: `## The Phonebook contact Metaphor (মোবাইলের কন্টাক্ট বুক রূপক)
ডিএনএস সিস্টেমকে আপনার স্মার্টফোনের কন্টাক্ট ডিরেক্টরির সাথে মিলিয়ে নিন:
*   **কন্টাক্ট নাম (Contact Name)**: ডোমেন নেম (যেমন: *"আম্মু"* বা *"মেহরাব"* ডোমেন)।
*   **ফোন নম্বর (Phone Number)**: আইপি অ্যাড্রেস (যেমন: \`01712-XXXXXX\` আইপি)।
*   **মোবাইলের ডিরেক্টরি মেমরি**: ডিএনএস সার্ভার (Domain Name System)।
*   **কল বাটন টিপে রিং করা**: ইন্টারনেট রিকোয়েস্ট (HTTP Connection)।

আপনি যখন ফোনে *"আম্মু"* লিখে ডায়াল করেন, আপনার ফোনের প্রসেসর কিন্তু স্ক্রিনের বাংলা লেখা 'আম্মু' কে রিং পাঠাতে পারে না। সে কন্টাক্ট ডিরেক্টরিতে সার্চ করে তার বিপরীতে থাকা ১১ সংখ্যার মোবাইল নম্বরটি বের করে টেলিকম টাওয়ারের আইপি সিগন্যালে ডায়াল করে। ডিএনএস ও ইন্টারনেটের ক্ষেত্রে ঠিক এই একই ঘটনা ঘটে!`,
        en: `## Metaphor
*   **Contact Name**: Domain name (human-friendly tag).
*   **Phone Number**: IP address (numerical system route).
*   **Phone Contact Database**: DNS Nameservers directory.
*   **Pressing Call**: HTTP network connection routing.`,
      },
      codeBlock: {
        fileName: "dns_lookup.js",
        language: "javascript",
        code: `// ডিএনএস চেইন কুয়েরি সিমুলেটর
const dnsNetwork = {
  root: { ".com": "TLD-COM-Server" },
  tld: { "bignanpro.com": "Auth-BignanPro-Server" },
  authoritative: { "bignanpro.com": "104.21.32.189" }
};

function resolveDomainTrace(domain) {
  console.log(\`🌐 ক্লায়েন্ট: "\${domain}" এর আইপি অ্যাড্রেস লাগবে...\`);
  
  // ১. রুট লেভেল রি-ডিরেকশন
  const suffix = "." + domain.split(".").pop();
  const tldServer = dnsNetwork.root[suffix];
  console.log(\`🌳 Root Server: সাফিক্স \${suffix} এর জন্য রিডাইরেক্ট ➔ \${tldServer}\`);
  
  // ২. টিএলডি নেমসার্ভার রি-ডিরেকশন
  const authServer = dnsNetwork.tld[domain];
  console.log(\`🏢 TLD Server: ডোমেন নেমসার্ভার রিডাইরেক্ট ➔ \${authServer}\`);
  
  // ৩. অথোরিটেটিভ আইপি রিজলভার
  const finalIp = dnsNetwork.authoritative[domain];
  console.log(\`✅ Authoritative Server: ফাইনাল আইপি অ্যাড্রেস: \${finalIp}\`);
  return finalIp;
}

resolveDomainTrace("bignanpro.com");`,
        explanations: [
          {
            line: 12,
            text: {
              bn: "রুট সার্ভার ডোমেনের সাফিক্স (যেমন .com) চেক করে উপযুক্ত টিএলডি ডিরেক্টরি লোকেশন রিটার্ন করে।",
              en: "Root server resolving top-level domain suffix to TLD server node.",
            },
          },
          {
            line: 20,
            text: {
              bn: "অথোরিটেটিভ নেমসার্ভার ডোমেনের ওনারশিপ কুয়েরি রেজাল্ট হিসেবে ফাইনাল আইপি বডি রিটার্ন করে।",
              en: "Retrieving mapped IP resource address from domain Authoritative ledger.",
            },
          },
        ],
      },
    },
    {
      id: "practice-dns-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অনুশীলন প্রশ্নগুলো সম্পন্ন করুন। এটি আপনার ডোমেন ও ডিএনএস নেমসার্ভার কনফিগারেশনের ধারণা পরিষ্কার করবে।`,
        en: `## Reflection & Lab Tasks
Assess domain mapping concepts before implementing database hosting configurations in the next volume.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "ডিএনএস রাউটিং বুঝলে আপনি প্রজেক্ট ডেপ্লয় করার সময় ক্লাউডফ্লেয়ার (Cloudflare) এর মতো প্রক্সি সার্ভিস কনফিগার করে সাইটের ডিডোস (DDoS) অ্যাটাক ঠেকাতে পারবেন।",
          en: "DNS management enables routing security controls like Cloudflare to filter malicious spam before hitting servers.",
        },
        whyWorks: {
          bn: "ডিএনএস রেকর্ডগুলোর একটি টিটিএল (TTL - Time to Live) ভ্যালু থাকে যা সেকেন্ডের এককে ঠিক করে কতক্ষণ লোকাল ব্রাউজারে আইপি ক্যাশ থাকবে।",
          en: "DNS entries use TTL (Time to Live) headers, specifying cache lifespans inside local ISP servers.",
        },
        professionalThinking: {
          bn: "সিনিয়ররা ডোমেন ট্র্যান্সফার বা নেমসার্ভার পরিবর্তন করার পর ডিএনএস প্রপাগেশন (Propagation) হতে ২৪ থেকে ৪৮ ঘণ্টা সময় লাগতে পারে তা মনে রাখেন।",
          en: "Seniors track DNS propagation offsets, waiting up to 48 hours for global nameserver sync updates.",
        },
        mistakes: {
          bn: "নতুনদের ভুল হলো এ-রেকর্ড (A Record) এবং সি-নেম (CNAME) গুলিয়ে ফেলা। এ-রেকর্ড সরাসরি আইপি দেখায় এবং সি-নেম অন্য ডোমেনের সাব-ইউআরএল দেখায়।",
          en: "Avoid confusing A Records (pointing to raw IPv4 addresses) with CNAMEs (pointing aliases to other domains).",
        },
        debugging: {
          bn: "ডোমেন কানেক্ট না হলে উইন্ডোজ টার্মিনালে 'nslookup' বা লিনাক্সে 'dig' কমান্ড দিয়ে ডিএনএস রেকর্ড সঠিক আইপিতে রিজলভ হচ্ছে কিনা চেক করুন।",
          en: "Diagnose configuration faults by running 'nslookup <domain>' to audit resolved nameservers directly.",
        },
        performance: {
          bn: "ডিএনএস লুকআপ স্পিড অপ্টিমাইজ করতে ক্লাউডফ্লেয়ার বা গুগলের ফাস্ট পাবলিক ডিএনএস (যেমন: 8.8.8.8) ব্যবহার করতে পারেন।",
          en: "Set up high-speed nameservers (like 1.1.1.1 or 8.8.8.8) to lower DNS lookup latency overheads.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "dn-q1",
      question: {
        bn: "ডোমেন নেম (Domain Name) এর প্রধান কাজ কী?",
        en: "What is the primary role of a domain name?",
      },
      options: [
        { bn: "সার্ভারে ফাইল সেভ করা", en: "Store code files directly" },
        {
          bn: "মানুষের সহজে মনে রাখার জন্য জটিল সংখ্যার আইপির একটি টেক্সট নাম বা মেমোরিবল রূপ",
          en: "A human-readable text alias for memorizing complex numeric IP addresses",
        },
        {
          bn: "প্রসেসরের স্পিড বাড়ানো",
          en: "Increase hardware processing speeds",
        },
        {
          bn: "ইন্টারনেটের ক্যাবল ঠিক করা",
          en: "Fix underwater cabling paths",
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডোমেন নেম হলো জটিল আইপি নম্বরের বিপরীতে সেট করা মানুষের সহজে মনে রাখার মতো কাস্টম নাম।",
        en: "Domains map textual brand names to underlying numeric computer interfaces.",
      },
    },
    {
      id: "dn-q2",
      question: {
        bn: "ডিএনএস (DNS - Domain Name System) এর প্রধান কাজ কোনটি?",
        en: "What is the primary function of DNS?",
      },
      options: [
        { bn: "এইচটিএমএল কোড এডিট করা", en: "Edit HTML source tags" },
        {
          bn: "ডোমেন নামকে কম্পিউটারের বোঝার উপযোগী আইপি নম্বরে অনুবাদ করা",
          en: "Translate human domain names into machine-readable IP addresses",
        },
        { bn: "পাসওয়ার্ড এনক্রিপ্ট করা", en: "Encrypt user input passwords" },
        { bn: "কম্পিউটার শাটডাউন দেওয়া", en: "Execute OS shutdown commands" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডিএনএস ডিরেক্টরি মানুষের টাইপ করা ইউআরএল নামকে ট্রান্সলেট করে আইপি নম্বরে রূপান্তর করে দেয়।",
        en: "DNS translates string labels to network coordinates to route HTTP streams.",
      },
    },
    {
      id: "dn-q3",
      question: {
        bn: "ডিএনএস কুয়েরি খোঁজার ক্ষেত্রে রুট সার্ভার বা টিএলডি সার্ভার ব্যর্থ হলে কোন নেমসার্ভার সঠিক ফাইল আইপি দেয়?",
        en: "Which nameserver holds the final registry record mapping domains to their exact IP addresses?",
      },
      options: [
        { bn: "Root Nameserver", en: "Root Nameserver" },
        {
          bn: "Authoritative Nameserver (অথোরিটেটিভ নেমসার্ভার)",
          en: "Authoritative Nameserver",
        },
        { bn: "Local Browser Cache", en: "Local Browser Cache" },
        { bn: "CPU Kernel Registry", en: "CPU Kernel Registry" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "অথোরিটেটিভ নেমসার্ভার হলো ডোমেনের চূড়ান্ত মালিকের ডিরেক্টরি যা সঠিক আইপি অ্যাড্রেসটি স্টোর করে রাখে।",
        en: "Authoritative nameservers act as the final directory mapping domain records directly to IPs.",
      },
    },
    {
      id: "dn-q4",
      question: {
        bn: "ডোমেন নামের সাফিক্স কাঠামোতে '.bd' দ্বারা কী নির্দেশ করা হয়?",
        en: "What does the '.bd' suffix represent in a domain structure?",
      },
      options: [
        {
          bn: "বাংলাদেশি কান্ট্রি-কোড টপ-লেভেল ডোমেন (ccTLD)",
          en: "Bangladeshi country-code Top-Level Domain (ccTLD)",
        },
        { bn: "আমেরিকার কমার্শিয়াল ডোমেন", en: "US commercial domain" },
        { bn: "ফাইল সাফিক্স ফরম্যাট", en: "A binary file extension format" },
        { bn: "কোনো অর্থ নেই", en: "It has no meaning" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: ".bd হলো বাংলাদেশের নির্দিষ্ট ccTLD যা নির্দেশ করে সাইটটি বাংলাদেশ কেন্দ্রিক।",
        en: ".bd is the country-code Top-Level Domain assigned specifically to Bangladesh.",
      },
    },
    {
      id: "dn-q5",
      question: {
        bn: "নেমসার্ভার বা এ-রেকর্ড পরিবর্তন করার পর তা বিশ্বব্যাপী আপডেট হতে যে সময় লাগে তাকে কী বলে?",
        en: "What is the global propagation offset duration after updating nameservers?",
      },
      options: [
        { bn: "রেন্ডারিং ল্যাগ", en: "Rendering Lag" },
        { bn: "ডিএনএস প্রপাগেশন (DNS Propagation)", en: "DNS Propagation" },
        { bn: "আইপি কনফ্লিক্ট", en: "IP Conflict" },
        { bn: "মেমরি ওভারফ্লো", en: "Memory Overflow" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "ডিএনএস প্রপাগেশনের কারণে বিশ্বজুড়ে সব ডিএনএস সার্ভার নতুন নেমসার্ভার সিঙ্ক করতে ২৪-৪৮ ঘণ্টা সময় নিতে পারে।",
        en: "Propagation specifies the time window needed for caching servers globally to clear and refresh DNS maps.",
      },
    },
  ],
  practice: [
    {
      bn: "আপনার নতুন ডোমেন 'bignanpro.academy' এর ক্ষেত্রে 'academy' অংশটি ডোমেন কাঠামোর কোন ভাগের অংশ? লিখুন।",
      en: "Isolate 'academy' in 'bignanpro.academy' according to domain level hierarchies.",
    },
    {
      bn: "মোবাইলের কন্টাক্ট বুক এবং ডিএনএস সিস্টেমের মিলগুলো ৩টি নির্দিষ্ট প্যারামিটার দিয়ে ডেক্লারেটিভ ভাবে ব্যাখ্যা করুন।",
      en: "Explain the phonebook-DNS metaphor using contact name, phone number, and lookup events.",
    },
    {
      bn: "নতুন ডোমেন ক্রয়ের পর হোস্টিং আইপি অ্যাড্রেস কানেক্ট করতে কোন ডিএনএস রেকর্ডটি (A Record নাকি CNAME) ব্যবহার করবেন? লজিকসহ লিখুন।",
      en: "Decide whether an A Record or CNAME is required to map a domain to a VPS hosting IP address.",
    },
  ],
  assignment: {
    title: {
      bn: "একটি ডোমেন আইপি কুয়েরি রেজোলিউশন সিমুলেশন",
      en: "DNS Query Resolution Pipeline Simulation",
    },
    description: {
      bn: "ব্রাউজার যখন ডোমেন কুয়েরি পাঠায়, তখন রুট, টিএলডি ও অথোরিটেটিভ সার্ভারের ক্যাশিং ও রেজোলিউশন ফ্লো অবজেক্ট ডিক্লেয়ার করে সাবমিট করুন।",
      en: "Model the DNS query stages starting from resolver query to TLD redirection and Authoritative IP retrieval.",
    },
    starterCode: `// DNS Query Pipeline Configuration
const dnsQueryPipeline = {
  domainToResolve: "bignanpro.com",
  localCacheHit: false,
  lookupSteps: [
    // রুট থেকে অথোরিটেটিভ আইপি রিট্রাইভাল চেইনের লিস্ট
  ],
  timeToLiveSeconds: 3600,
  resolvedIpAddress: ""
};`,
    solution: {
      code: `// DNS Query Pipeline Resolved
const dnsQueryPipeline = {
  domainToResolve: "bignanpro.com",
  localCacheHit: false,
  lookupSteps: [
    "ধাপ ১: আইএসপি রিসলভার রুট সার্ভার থেকে .com টিএলডি সার্ভারের অ্যাড্রেস নেয়।",
    "ধাপ ২: টিএলডি সার্ভার থেকে bignanpro.com এর নির্দিষ্ট অথোরিটেটিভ নেমসার্ভার ns1.cloudflare.com খুঁজে নেয়।",
    "ধাপ ৩: অথোরিটেটিভ সার্ভার ডোমেনের এ-রেকর্ড চেক করে ফাইনাল হোস্ট আইপি প্রদান করে।"
  ],
  timeToLiveSeconds: 3600,
  resolvedIpAddress: "104.21.32.189"
};`,
      explanation: {
        bn: "চমৎকার ডিজাইন! রিসলভার কুয়েরি থেকে অথোরিটেটিভ এ-রেকর্ড রিট্রিভ করার সম্পূর্ণ চেইন ফ্লোটি লজিক্যালি সম্পূর্ণ নির্ভুল হয়েছে।",
        en: "Mapping lookup redirects models how caching DNS clients navigate hierarchy levels to fetch host IPs.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "ডিএনএস এ-রেকর্ড (A Record) এবং সি-নেম (CNAME Record) এর মধ্যে গঠনগত ও কাজের মূল পার্থক্য কী?",
        en: "What is the structural and functional difference between an A Record and a CNAME Record?",
      },
      answer: {
        bn: "১. **এ-রেকর্ড (A Record - Address Record)**: সরাসরি একটি ডোমেনকে সার্ভারের নির্দিষ্ট ফিজিক্যাল আইপি অ্যাড্রেসের সাথে কানেক্ট করে (যেমন: example.com ➔ 192.0.2.1)। এটি মূলত প্রধান রুট ডোমেন হোস্ট করতে ব্যবহৃত হয়।\n২. **সি-নেম রেকর্ড (CNAME Record - Canonical Name)**: একটি ডোমেনকে আইপি-র বদলে অন্য আরেকটি ডোমেন নামের সাথে কানেক্ট করে বা এলিয়াস তৈরি করে (যেমন: www.example.com ➔ example.com)। আপনি যখন সার্ভার আইপি পরিবর্তন করবেন, কেবল এ-রেকর্ড চেঞ্জ করলেই সি-নেম অটোমেটিক আপডেট হয়ে যায়, কারণ সি-নেম এ-রেকর্ড ডোমেনকে ফলো করে।",
        en: "1. **A Record (Address)**: Maps a host name directly to a physical IPv4 address (e.g., brand.com ➔ 104.21.32.189). It is used for primary root domains.\n2. **CNAME Record (Canonical Name)**: Creates an alias pointing one domain name to another domain (e.g., www.brand.com ➔ brand.com). If the backend IP shifts, updating the A record automatically redirects CNAME aliases, preventing multiple configuration edits.",
      },
    },
    {
      question: {
        bn: "ডিএনএস ক্যাশিং (DNS Caching) কী এবং এটি কীভাবে ইন্টারনেটের ট্রাফিক ব্যান্ডউইথ কমাতে ও পেজ স্পিড বাড়াতে সাহায্য করে?",
        en: "What is DNS Caching and how does it optimize web navigation latency?",
      },
      answer: {
        bn: "প্রতিবার ব্রাউজারে সাইটের নাম লিখলে যদি বিশ্বব্যাপী ৫টি ধাপে রুট ও টিএলডি নেমসার্ভারে কুয়েরি চালাতে হতো, তবে প্রতিবার সাইট লোড হতে অতিরিক্ত ১-২ সেকেন্ড সময় লাগত এবং ইন্টারনেটে ট্রাফিক জ্যাম তৈরি হতো। ডিএনএস ক্যাশিং হলো পূর্বে খুঁজে পাওয়া আইপি অ্যাড্রেসগুলো লোকাল ব্রাউজার মেমরি, ওএস অথবা আইএসপি সার্ভারে একটি নির্দিষ্ট সময় (TTL) পর্যন্ত সেভ রাখা। ফলে দ্বিতীয়বার লিঙ্কে ঢুকলে ব্রাউজার গ্লোবাল ইন্টারনেট নেভিগেট না করে লোকাল ক্যাশ থেকেই ইনস্ট্যান্ট মিলি সেকেন্ডে আইপি পেয়ে কানেক্ট করে, যা ব্যান্ডউইথ কমায় ও পেজ স্পিড বহুগুণ বাড়ায়।",
        en: "DNS Caching stores resolved domain IP bindings locally inside browser memory, OS caches, or ISP routers for a duration defined by the TTL. By caching records, client browsers bypass the multi-step nameserver lookup pipeline on repeated requests, reducing round-trip lookups and network traffic congestion.",
      },
    },
  ],
};
