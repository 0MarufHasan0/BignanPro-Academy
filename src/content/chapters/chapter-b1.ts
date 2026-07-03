import { Chapter } from "@/types";

export const chapterB1Content: Chapter = {
  id: "chapter-b1",
  number: 37, // Using 37 in sequential flow or custom index mapping
  title: {
    bn: "অধ্যায় বি১: নেক্সটঅথ ও মডার্ন অথেন্টিকেশন — ও-অথ ও সেশন পরিচিতি",
    en: "Chapter B1: NextAuth / Better Auth (Modern Authentication System)",
  },
  description: {
    bn: "নিজে কোডিং না করে প্রফেশনাল কোম্পানির মতো নেক্সটঅথ (NextAuth.js) ও ও-অথ (OAuth) সোশ্যাল লগইন এবং সেশন-ভিত্তিক নিরাপত্তা তৈরির বাস্তব গাইড।",
    en: "Integrate modern production auth frameworks like Auth.js/NextAuth, configuring Google/GitHub OAuth logins and managing session states.",
  },
  difficulty: "intermediate",
  readingTime: 12,
  objectives: [
    {
      bn: "ম্যানুয়াল পাসওয়ার্ড ভেরিফিকেশন বনাম মডার্ন অথেন্টিকেশন ফ্রেমওয়ার্কের (NextAuth, Clerk) পার্থক্য বোঝা।",
      en: "Contrast custom authentication setups with modern libraries like NextAuth, Better Auth, and Clerk.",
    },
    {
      bn: "ও-অথ (OAuth) মেকানিজম ব্যবহার করে পাসওয়ার্ড ছাড়া গুগল ও গিটহাব সোশ্যাল লগইন সিস্টেম তৈরি করা।",
      en: "Implement passwordless Google and GitHub social logins using the OAuth protocol.",
    },
    {
      bn: "সার্ভার কুকি ব্যবহার করে অটোমেটিক সেশন-বেসড ইউজার ট্র্যাকিং সিস্টেম নিশ্চিত করা।",
      en: "Manage automatic user state sessions stored in secure browser cookies.",
    },
    {
      bn: "ভিআইপি ক্লাব গেটের বাস্তব রূপক ব্যবহার করে প্রটেক্টেড রাউট ও সেশন লাইফসাইকেলের সংযোগ স্থাপন করা।",
      en: "Map protected routes guards and session lifecycles to real-world VIP club access passes.",
    },
  ],
  sections: [
    {
      id: "intro-modern-auth",
      title: {
        bn: "১. মডার্ন অথেন্টিকেশন ও প্রডাকশন ইন্টিগ্রেশন (Modern Auth & Industry Adoption)",
        en: "1. What is Modern Auth & Why Industry Uses This",
      },
      content: {
        bn: `## What is Modern Auth? (মডার্ন অথেন্টিকেশন কী?)
একটি ওয়েবসাইটে নিরাপদ ইউজার লগইন সিস্টেম তৈরি করার জন্য পাসওয়ার্ড হ্যাশ করা, সেশন জেনারেট করা এবং রিফ্রেশ টোকেন পরিচালনা করার কাস্টম কোডিং অত্যন্ত জটিল ও ঝুঁকিপূর্ণ। 

আধুনিক সফটওয়্যার ইন্ডাস্ট্রিতে এই জটিল সিকিউরিটি ফ্লো নিজে ম্যানুয়ালি না লিখে রেডিমেড সিকিউরিটি ফ্রেমওয়ার্ক ব্যবহার করা হয়। একে বলা হয় **Modern Auth System**।
*   **NextAuth.js (Auth.js)**: নেক্সট জেএস ফ্রেমওয়ার্কের সবচেয়ে জনপ্রিয় এবং অফিশিয়াল প্রডাকশন অথেনটিকেশন লাইব্রেরি।
*   **Better Auth**: টাইপসেফ ও লাইটওয়েট মডার্ন লাইব্রেরি যা নেক্সট জেএস ও এক্সপ্রেস উভয়ের সাথেই চমৎকার মানিয়ে যায়।
*   **Clerk**: সম্পূর্ণ ক্লাউড-হোস্টেড সলিউশন যা রেডিমেড ভিজ্যুয়াল লগইন প্যানেল ও সেশন ড্যাশবোর্ড প্রদান করে।

---

## Why Industry Uses Auth Libraries (লাইব্রেরি কেন ব্যবহার করা হয়)
ম্যানুয়াল কোডিংয়ের প্রধান সমস্যাসমূহ:
*   **Security Risks**: সিকিউরিটি লজিকের সামান্যতম ছিদ্র পুরো ডাটাবেজ হ্যাক হওয়ার ঝুঁকি তৈরি করে।
*   **Time Consuming**: পাসওয়ার্ড এনক্রিপশন, ও-অথ টোকেন ভ্যালিডেশন এবং কুকি প্রোটোকল কনফিগার করতে কয়েক সপ্তাহ সময় লেগে যেতে পারে।

অথেনটিকেশন লাইব্রেরিসমূহের সমাধান:
*   **আউট-অফ-দ্য-বক্স সিকিউরিটি**: CSRF আক্রমণ প্রতিরোধ, সেশন রোটেশন এবং পাসওয়ার্ড এনক্রিপশন প্রাক-কনফিগারড থাকে।
*   **সহজ সোশাল লগইন**: গুগল বা গিটহাব কানেক্ট করা মাত্র কয়েক লাইনের কোডের বিষয়।`,
        en: `## What is Modern Auth?
Building login forms, database validation queries, JWT cryptography, and cookie rotation logic manually is complex and error-prone.

Rather than coding security pipelines from scratch, modern web development teams deploy verified session libraries. This is called a **Modern Auth System**.
*   **NextAuth.js (Auth.js)**: The official, industry-standard authentication adapter built for Next.js applications.
*   **Better Auth**: A lightweight, runtime-agnostic library designed for modern full-stack systems.
*   **Clerk**: A managed identity service providing pre-built forms and profile dashboards.

---

## Why Industry Uses Auth Libraries
Writing custom handlers introduces critical bottlenecks:
*   **Security Overhead**: Minor bugs in token decoding or encryption open doors to session hijacking.
*   **Development Speed**: Managing token expiry cycles, DB synchronization, and OAuth redirects manually can delay shipping MVPs by weeks.

Auth frameworks resolve this:
*   **Proven Security**: Built-in protections against CSRF, SQL injections, and automated session invalidations.
*   **OAuth Integrations**: Simplifies adding social login buttons (Google, GitHub) to a few lines of configuration.`,
      },
    },
    {
      id: "sessions-oauth",
      title: {
        bn: "২. সেশন-বেসড অথেনটিকেশন ও ও-অথ (Session-Based Auth & OAuth Systems)",
        en: "2. Session-Based Auth & OAuth Systems",
      },
      content: {
        bn: `## Session-Based Auth (সেশন-বেসড অথেন্টিকেশন)
ম্যানুয়াল সিস্টেমে এপিআই রিকোয়েস্ট সচল রাখতে ফ্রন্টএন্ড থেকে প্রতিবার ম্যানুয়ালি JWT টোকেন পাঠাতে হতো। কিন্তু নেক্সটঅথে আমাদের সেশন ট্র্যাকিং অনেক সহজ:
*   **অটোমেটিক কুকি হ্যান্ডলিং**: ইউজার একবার লগইন করলে নেক্সটঅথ ব্রাউজারে একটি সুরক্ষিত সেশন কুকি সেভ করে দেয়।
*   **ইউজার সেশন ডিটেকশন**: ফ্রন্টএন্ড কোডে আমরা যেকোনো জায়গায় সরাসরি \`useSession()\` হুক কল করে ব্যবহারকারীর প্রোফাইল ইমেজ ও ইমেল এক্সেস করতে পারি। কোনো ম্যানুয়াল টোকেন ভেরিফিকেশন কোড লেখার প্রয়োজন হয় না।

---

## OAuth Login System (ও-অথ বা সোশ্যাল লগইন)
পাসওয়ার্ড টাইপ করার ঝামেলা এড়িয়ে সরাসরি গুগল বা গিটহাব অ্যাকাউন্টের সাহায্যে সাইনইন করার ব্যবস্থাকে বলা হয় **OAuth (Open Authorization)**।
*   **কীভাবে কাজ করে?**: ইউজার যখন 'Sign in with Google' বাটনে ক্লিক করেন, ব্রাউজার গুগলের নিজস্ব সুরক্ষিত উইন্ডোতে চলে যায়। গুগল ব্যবহারকারীকে সনাক্ত করে আমাদের সার্ভারে একটি সংকেত পাঠায়। এর ফলে ইউজারকে পাসওয়ার্ড বানাতে হয় না এবং আমরাও তাদের পিন কোড জানতে পারি না। এটি শতভাগ নিরাপদ।`,
        en: `## Session-Based Auth
In legacy setups, developers manually stored JWTs in localStorage and attached headers to every query. NextAuth automates user session management:
*   **Automated Cookie Sync**: Upon login, NextAuth writes encrypted session records to secure browser cookies.
*   **Session State Hooks**: You query active session variables on any React client component using simple hooks like 'useSession()'. No manual token fetches are needed.

---

## OAuth Login System
Rather than typing user emails and credentials, modern SaaS applications rely on **OAuth** providers (like Google, GitHub, or Facebook) to verify accounts.
*   **How it works**: Clicking a social login button redirects clients to the provider's secure domain. Once authorized, the provider transmits a secure token back to NextAuth. The user logs in securely without storing passwords in our database.`,
      },
    },
    {
      id: "nextauth-flow-protected",
      title: {
        bn: "৩. নেক্সটঅথ ফ্লো ও সুরক্ষিত রাউটস (NextAuth Flow & Protected Routes)",
        en: "3. NextAuth Flow & Protected Routes",
      },
      content: {
        bn: `## NextAuth User Flow (নেক্সটঅথ তথ্যপ্রবাহ)
নেক্সটঅথ ব্যবহার করে ইউজার লগইন করার পুরো চক্রটি নিম্নরূপ:

\`\`\`
User Action ──> Click Google Signin ──> Consent Window ──> NextAuth API Handler ──> Session Cookie Created ──> Redirect to Dashboard
\`\`\`

---

## Protected Routes (সুরক্ষিত রাউটস)
একটি কোম্পানির ড্যাশবোর্ড বা সেটিংস পেজে কেবল লগইন করা মেম্বারদের ঢুকতে দেওয়া উচিত। নেক্সটঅথ আমাদের পেজ এবং এপিআই প্রটেক্ট করার জন্য সরাসরি মিডলওয়্যার ও হুক সাপোর্ট দেয়।

ফ্রন্টএন্ড ক্লায়েন্ট সাইডে পেজ লক করার লজিক:
\`\`\`javascript
const { data: session, status } = useSession();

if (status === "unauthenticated") {
  return <p>অ্যাক্সেস ডিনাইড! প্রথমে লগইন করুন।</p>;
}
\`\`\`
*ক্লু: নেক্সটঅথ মিডলওয়্যার কনফিগারেশনে নির্দিষ্ট রাউট (যেমন: '/dashboard') লকিং লিস্টে অ্যাড করে দিলে, লগইন ছাড়া কেউ সেই পেজের লিংকে ক্লিক করলেও ব্রাউজার তাকে পেজ লোড হতে না দিয়েই সরাসরি হোমপেজে বা লগইন স্ক্রিনে রিডাইরেক্ট করে দেবে।*`,
        en: `## NextAuth User Flow
A complete OAuth session cycle follows these steps:
\`\`\`
User Action ──> Click Google Signin ──> Consent Window ──> NextAuth API Handler ──> Session Cookie Created ──> Redirect to Dashboard
\`\`\`

---

## Protected Routes
Dashboard views, payment pages, and settings screens must remain invisible to anonymous web crawlers. NextAuth provides middleware guards to secure routes easily.

Client-side React component protection layout:
\`\`\`javascript
const { data: session, status } = useSession();

if (status === "unauthenticated") {
  return <p>Access denied. Please log in first.</p>;
}
\`\`\``,
      },
    },
    {
      id: "auth-power-limitations",
      title: {
        bn: "৪. নেক্সটঅথের শক্তি ও সীমাবদ্ধতা (Why NextAuth is Powerful & Limitations)",
        en: "4. Why NextAuth is Powerful & Limitations",
      },
      content: {
        bn: `## Why NextAuth is Powerful (নেক্সটঅথের শক্তি)
*   **Standard Security**: CSRF টোকেন প্রটেকশন, সেশন রোটেশন এবং কুকি সাইনিং স্বয়ংক্রিয়ভাবে হ্যান্ডেল হয়।
*   **OAuth Ready**: গুগল, গিটহাব, ফেসবুক, টুইটার সহ প্রায় সব জনপ্রিয় সোশ্যাল মিডিয়া কানেক্টর লাইব্রেরিতেই বিল্ট-ইন থাকে।
*   **Next.js Native**: নেক্সট জেএস ফ্রেমওয়ার্কের রাউটিং ও সার্ভার কম্পোনেন্টের সাথে এটি শতভাগ সিংক্রোনাইজড।

---

## Limitations (সীমাবদ্ধতা)
মডার্ন ফ্রেমওয়ার্কের অসাধারণ সুবিধার পাশাপাশি কিছু সীমাবদ্ধতাও রয়েছে:
*   **কম কন্ট্রোল (Less Control)**: যেহেতু অনেক অভ্যন্তরীণ লজিক লাইব্রেরির ভেতরে ঢাকা থাকে (Abstraction), তাই সেশন কুকির মেকানিজম বা ইউজার ডাটার কাস্টম টেবিল জয়েনিং ডেটাবেজে পরিবর্তন করা কঠিন হয়।
*   **ডিপেন্ডেন্সি লকিং**: লাইব্রেরির নতুন ভার্সনে বড় কোনো পরিবর্তন (Breaking Changes) এলে কোড বডি রি-ফ্যাক্টর করতে প্রচুর বেগ পেতে হয়।`,
        en: `## Why NextAuth is Powerful
*   **Automated Security**: NextAuth handles CSRF tokens, session rotation, and encrypted cookies natively.
*   **Built-in Providers**: Out-of-the-box configurations for Google, GitHub, Facebook, Apple, and active directory sign-ins.
*   **Next.js Optimization**: Seamlessly syncs with Next.js App Router layout engines and Server Action lifecycles.

---

## Limitations
Despite the security and speed benefits, developers face architectural trade-offs:
*   **High Abstraction**: Core token-issuing behaviors are hidden. Customizing session persistence details outside the library's design parameters is difficult.
*   **Dependency Risks**: Upgrading between major versions of auth libraries can require complete refactoring of route configurations.`,
      },
    },
    {
      id: "vip-club-metaphor",
      title: {
        bn: "৫. ভিআইপি ক্লাব রূপক ও সাধারণ ভুলসমূহ (VIP Club Metaphor & Common Mistakes)",
        en: "5. VIP Club Analogy & Common Mistakes",
      },
      content: {
        bn: `## Common Mistakes (সাধারণ ভুলসমূহ)
*   **Exposing Secrets inside Client Code**: গুগল ও-অথ এর ক্লায়েন্ট আইডি বা সিক্রেট কি (.env variables) নেক্সট জেএস-এর ক্লায়েন্ট ফাইলে ডিরেক্ট লিখে ফেলা। এগুলো শুধু সার্ভার সাইডে রাখতে হবে।
*   **Callback URL ভুল কনফিগার করা**: গুগল কনসোলে কন্ট্যাক্ট রিডাইরেক্ট ইউআরএল সেট করতে ভুল করা। এর ফলে লগইন বাটনে ক্লিক করলে 'Redirect URL Mismatch Error' দেখায়।
*   **সেশন চেক বাদ দেওয়া**: এপিআই লেভেলে প্রটেকশন না রেখে শুধু ফ্রন্টএন্ডে বাটন হাইড করে রাখা। হ্যাকাররা সরাসরি এপিআই ডোমেইন হিট করে সিক্রেট ডাটা বের করে নেবে।

---

## The VIP Club Metaphor (ভিআইপি ক্লাবের রূপক)
মডার্ন সেশন অথেনটিকেশন ফ্লোকে একটি এক্সক্লুসিভ ভিআইপি ক্লাবের সাথে মিলিয়ে নিন:
*   **গুগল লগইন ও আইডি কার্ড (OAuth Provider)**: আপনি যখন ক্লাবে ঢোকার জন্য আপনার লাইসেন্স বা পাসপোর্ট দেখান (গুগল অ্যাকাউন্টের মাধ্যমে আপনার আইডেন্টিটি ভেরিফিকেশন)।
*   **ক্লাবের কব্জির ব্যান্ড (Session Cookie)**: আইডি সঠিক হলে কাউন্টার থেকে আপনাকে একটি প্লাস্টিকের কব্জির ব্যান্ড (Wristband) পরিয়ে দেয়। এর পর আপনি যতবার গেট দিয়ে ঢুকবেন, আপনাকে আর পাসপোর্ট দেখাতে হবে না, শুধু হাতের ব্যান্ডটি উঁচিয়ে ধরলেই হবে (আমাদের সেশন কুকি)।
*   **ভিআইপি এরিয়া (Protected Route)**: ক্লাবের ভেতরের লাউঞ্জ যেখানে শুধু ব্যান্ড পরা মেম্বারদের ঢুকতে দেওয়া হয় (আমাদের সুরক্ষিত রাউটস)।`,
        en: `## Common Mistakes
*   **Exposing Secret Keys**: Committing OAuth Client Secrets to Git or referencing them in Client Components without Next.js server protection. Keep keys strictly in '.env' files.
*   **Misconfiguring Callback URLs**: Setting mismatched redirect paths in Google Developer consoles, causing 'Redirect URL Mismatch' exceptions.
*   **Client-only Route Security**: Relying solely on client UI route checks. You must secure server API endpoints independently since client guards can be bypassed.

---

## The VIP Club Metaphor
*   **Google Login (OAuth Provider)**: The official government passport verification. You present a trusted ID card at the entrance to verify your name.
*   **The Wristband (Session Cookie)**: Once verified, bouncers snap a security wristband onto your arm. For the rest of the night, you show the wristband (session cookie) instead of your passport to enter.
*   **Restricted VIP Lounges (Protected Route)**: Private rooms checking wristbands at doors before admitting entry.`,
      },
      codeBlock: {
        fileName: "frontend/LoginButton.jsx",
        language: "jsx",
        code: `import React from 'react';
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';

// ১. রুট কম্পোনেন্ট যেখানে সেশন প্রোভাইডার সেটআপ থাকে
export function AppWrapper({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

// ২. লগইন বাটন কম্পোনেন্ট (সেশন ভ্যালু ডিটেকশন সহ)
export default function LoginButton() {
  const { data: session, status } = useSession();

  // লোডিং স্টেট হ্যান্ডল করা
  if (status === "loading") {
    return <span className="text-slate-400 text-sm">যাচাই করা হচ্ছে...</span>;
  }

  // ইউজার লগইন অবস্থায় থাকলে ড্যাশবোর্ড বাটন দেখাবে
  if (session) {
    return (
      <div className="flex items-center gap-3">
        <img 
          src={session.user.image} 
          alt="Avatar" 
          className="w-8 h-8 rounded-full border border-slate-200" 
        />
        <div className="text-left">
          <p className="text-sm font-semibold text-slate-800">{session.user.name}</p>
          <button 
            onClick={() => signOut()} 
            className="text-xs text-red-500 hover:underline"
          >
            লগআউট করুন
          </button>
        </div>
      </div>
    );
  }

  // ইউজার লগইন না থাকলে গুগল লগইন বাটন দেখাবে
  return (
    <button 
      onClick={() => signIn('google')} 
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors"
    >
      গুগল দিয়ে লগইন
    </button>
  );
}`,
        explanations: [
          {
            line: 5,
            text: {
              bn: "SessionProvider সেশন স্টেটকে পুরো অ্যাপ্লিকেশন ডিরেক্টরিতে ছড়িয়ে দেয়, যার ফলে সব সাব-কম্পোনেন্ট সেশন ডাটা রিড করতে পারে।",
              en: "SessionProvider wraps the component tree, sharing authentication states globally across children components.",
            },
          },
          {
            line: 14,
            text: {
              bn: "useSession হুকটি কল করার সাথে সাথে বর্তমান ইউজারের তথ্য (ইমেইল, নাম, প্রোফাইল ইমেজ) এবং লগইন স্ট্যাটাস পাওয়া যায়।",
              en: "useSession retrieves active user payloads (email, image) and tracks connection statuses.",
            },
          },
          {
            line: 52,
            text: {
              bn: "signIn('google') মেথডটি কল করলে স্বয়ংক্রিয়ভাবে গুগলের সুরক্ষিত সাইন-ইন উইন্ডো লোড হবে।",
              en: "Calling signIn('google') automatically launches the Google OAuth provider login process.",
            },
          },
        ],
      },
    },
    {
      id: "practice-auth-mentor",
      title: {
        bn: "৬. কুইজ, অনুশীলন ও এআই মেন্টর প্যানেল (Practice & AI Mentor Box)",
        en: "6. Practice & AI Mentor Box",
      },
      content: {
        bn: `## Reflection & Lab Tasks (অনুশীলন)
নিচের কুইজ ও অ্যাসাইনমেন্ট সম্পন্ন করুন। এটি আপনার মডার্ন সোশাল অথেনটিকেশন ও সেশন লাইফসাইকেলের বাস্তব ধারণাকে নিখুঁত করবে।`,
        en: `## Reflection & Lab Tasks
Solidify your NextAuth concepts before integrating manual backends and full-stack session configurations in the next chapter.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "মডার্ন অথেনটিকেশন লাইব্রেরি ক্লায়েন্ট সেশন ও সোশাল লগইন মেকানিজমকে ফাস্ট ট্র্যাকে কনফিগার করতে সাহায্য করে।",
          en: "NextAuth wraps complex security checks into simple components, allowing teams to ship features faster.",
        },
        whyWorks: {
          bn: "এটি নেক্সট জেএস মিডলওয়্যার ও কুকি প্রোটোকল সিংক্রোনাইজড করে প্রডাকশন-গ্রেড সেশন সিকিউরিটি নিশ্চিত করে।",
          en: "It binds React context providers directly with encrypted cookie storage in the browser.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা ডেভেলপমেন্টে ও-অথ টেস্টিং করার সময় লোকালহোস্টের নির্দিষ্ট রিডাইরেক্ট কোড বা কাস্টম সেশন কলিং চেক করেন।",
          en: "Seniors review redirect callback white-lists to prevent domain phishing attacks during login redirection.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় কনফিগারেশন ভুল হলো প্রডাকশনে ডাটাবেজ অ্যাডাপ্টার অ্যাড না করে সেশন সচল রাখা। এতে ইউজারের ডাটাবেজের রেকর্ড সিঙ্ক ব্যাহত হয়।",
          en: "Omitting database adapters on production. Connect adapters (like Prisma or Mongoose) to sync profiles with your DB.",
        },
        debugging: {
          bn: "গুগল লগইন ফেইল করলে আপনার ডেভেলপমেন্ট প্যানেলের 'NEXTAUTH_URL' কনফিগারেশনটি লোকালহোস্ট ও পোর্টের সাথে ঠিকভাবে ম্যাপড আছে কিনা তা চেক করুন।",
          en: "If logins crash, verify that NEXTAUTH_URL environment variables match your active server host exactly.",
        },
        performance: {
          bn: "ক্লাইন্টের রেন্ডার স্পীড বাড়াতে সেশন হুক বেশি গভীর লেভেলের সাব-কম্পোনেন্টে ব্যবহার না করে প্যারেন্ট লেভেলে হ্যান্ডেল করুন।",
          en: "Keep useSession hooks in parent components to avoid triggering redundant API requests down the tree.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "auth-lib-q1",
      question: {
        bn: "কেন প্রডাকশন সফটওয়্যারে সোশাল লগইন বা অথেনটিকেশনের জন্য কাস্টম কোডের বদলে NextAuth-এর মতো লাইব্রেরি ব্যবহার করা হয়?",
        en: "Why do production systems prefer using libraries like NextAuth over writing custom social login code?",
      },
      options: [
        { bn: "এটি ডাটাবেজের মেমোরি ফ্রী করে", en: "It clears database memory records" },
        { bn: "নিরাপত্তা নিশ্চিত করা, সিএসআরএফ প্রটেকশন এবং ফাস্ট ডেভেলপমেন্ট স্পিডের জন্য", en: "To guarantee security compliance, prevent CSRF, and accelerate development speed" },
        { bn: "এটি সিএসএস ক্লাস জেনারেট করে", en: "It generates style helper utilities" },
        { bn: "এটি সার্ভার পোর্ট রিস্টার্ট করে", en: "It restarts local connection ports" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এই লাইব্রেরিগুলো ইন্ডাস্ট্রি-প্রুভেন সিকিউরিটি প্রোটোকল ম্যাপ করে দ্রুত সোশ্যাল মিডিয়া লগইন ইমপ্লিমেন্ট করতে সাহায্য করে।",
        en: "Auth libraries handle encryption, cookies, and OAuth protocols safely out-of-the-box.",
      },
    },
    {
      id: "auth-lib-q2",
      question: {
        bn: "ও-অথ (OAuth) অথেনটিকেশন মেকানিজমের প্রধান সিকিউরিটি সুবিধা কোনটি?",
        en: "What is the primary security advantage of using OAuth authentication?",
      },
      options: [
        { bn: "ব্যবহারকারীকে আমাদের ডাটাবেজে প্লেইন পাসওয়ার্ড স্টোর করতে হয় না", en: "Users do not store raw passwords in our local database catalog" },
        { bn: "সব ডাটা রিমুভ করে ফেলা", en: "Deleting all database records" },
        { bn: "সার্ভারের সিপিইউ ফ্যান স্পিড বাড়ানো", en: "Scaling up server hardware limits" },
        { bn: "লোকালস্টোরেজে পাসওয়ার্ড লিখে রাখা", en: "Writing passwords to plain localStorage files" },
      ],
      correctAnswerIndex: 0,
      explanation: {
        bn: "ও-অথ ব্যবস্থায় ইউজার গুগলের উইন্ডোতে লগইন করে। আমাদের ডাটাবেজে কোনো পাসওয়ার্ড সেভ করতে হয় না, যা হ্যাকিং ঝুঁকি কমায়।",
        en: "OAuth delegates credentials check to providers, meaning database leaks won't expose user passwords.",
      },
    },
    {
      id: "auth-lib-q3",
      question: {
        bn: "নেক্সট জেএস ক্লায়েন্ট কম্পোনেন্টে লগইন সেশন রিড করতে কোন হুকটি ব্যবহার করা হয়?",
        en: "Which React hook is used to read active NextAuth session data in client components?",
      },
      options: [
        { bn: "useContext()", en: "useContext()" },
        { bn: "useSession()", en: "useSession()" },
        { bn: "useAuthToken()", en: "useAuthToken()" },
        { bn: "useStates()", en: "useStates()" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "useSession হুক কল করার মাধ্যমে আমরা সেশন স্টেট ও ব্যবহারকারীর ডাটা সরাসরি রিয়্যাক্ট কম্পোনেন্টে পেয়ে যাই।",
        en: "The useSession hook fetches status and active user profiles from the SessionProvider.",
      },
    },
    {
      id: "auth-lib-q4",
      question: {
        bn: "সোশ্যাল অথেনটিকেশন বা গুগলে লগইন ইমপ্লিমেন্ট করার সময় 'Redirect URL Mismatch' এরর আসার প্রধান কারণ কী?",
        en: "What is the most likely cause of a 'Redirect URL Mismatch' error during Google Login integration?",
      },
      options: [
        { bn: "ডাটাবেজ সার্ভার শাটডাউন থাকা", en: "Database server connection failure" },
        { bn: "গুগল ডেভেলপার কনসোলের কলব্যাক ইউআরএল এবং আমাদের অ্যাপের সোর্স কোডের ইউআরএল পাথ ভিন্ন হওয়া", en: "The callback URL registered in the Google Developer Console does not match our application URL" },
        { bn: "সিএসএস ক্লাস ডিলিট হওয়া", en: "Deletion of style CSS files parameters" },
        { bn: "ইউজারের ইন্টারনেট বন্ধ থাকা", en: "User losing internet connection midway" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "গুগল কনসোলের সিকিউর হোয়াইটলিস্টেড রিডাইরেক্ট ইউআরএল এবং আমাদের এপিআই কলব্যাক পাত আলাদা হলেই গুগল ও-অথ ব্লক করে দেয়।",
        en: "OAuth providers require exact redirect callback matches to prevent token-stealing phishing attacks.",
      },
    },
    {
      id: "auth-lib-q5",
      question: {
        bn: "ভিআইপি ক্লাবের রূপকে ক্লাবের কব্জির ব্যান্ড (Wristband)-টি নিচের কোন সিকিউরিটি এলিমেন্টের সাথে তুলনা করা হয়েছে?",
        en: "In the VIP Club Analogy, the Wristband corresponds to which security element?",
      },
      options: [
        { bn: "গিটহাব রেপো", en: "GitHub Repository" },
        { bn: "সেশন কুকি (Session Cookie)", en: "Session Cookie" },
        { bn: "ডাটাবেজ পাসওয়ার্ড", en: "Database Password" },
        { bn: "সিএসএস এনিমেশন", en: "CSS Animation" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "কব্জির ব্যান্ড হলো সেশন কুকি, যা আইডি চেক করার পর একবার পরানো হয় এবং গেটে দেখিয়ে বারবার অ্যাক্সেস পাওয়া যায়।",
        en: "The wristband represents secure session cookies, allowing repeating access checkouts without re-authenticating.",
      },
    },
  ],
  practice: [
    {
      bn: "১. কেন পাসওয়ার্ড-বেসড অথেনটিকেশনের চেয়ে ও-অথ (OAuth) সোশ্যাল লগইন ইউজার ফ্রেন্ডলি এবং সিকিউর?",
      en: "1. Explain why OAuth logins are structurally more secure than manual email/password auth setups.",
    },
    {
      bn: "২. কীভাবে ব্রাউজারের সেশন কুকি ক্লায়েন্ট রিকোয়েস্ট সিকিউর রাখে তা ব্যাখ্যা করুন।",
      en: "2. Detail how secure session cookies prevent unauthorized access during network calls.",
    },
    {
      bn: "৩. নেক্সটঅথে প্রজেক্ট ডেপ্লয় করার পূর্বে \`NEXTAUTH_SECRET\` কেন এনভায়রনমেন্ট ভ্যারিয়েবলে কনফিগার করা আবশ্যক?",
      en: "3. Identify the security role of the NEXTAUTH_SECRET environment variable on production.",
    },
  ],
  assignment: {
    title: {
      bn: "নেক্সটঅথ লগইন ও সেশন স্ট্যাটাস প্যানেল",
      en: "NextAuth Login & Session Status Panel",
    },
    description: {
      bn: "নেক্সটঅথ (NextAuth.js) এর হুক ব্যবহার করে একটি ইউজার লগইন চেক প্যানেল কম্পোনেন্ট (\`LoginPanel.jsx\`) তৈরি করুন। ব্যবহারকারী লগইন অবস্থায় থাকলে তার প্রোফাইল নেম এবং একটি লগআউট বাটন প্রদর্শন করবেন। লগইন না থাকলে একটি 'Sign in with GitHub' বাটন দেখাবেন যা গিটহাব ও-অথ কল সম্পন্ন করবে।",
      en: "Develop a React component (`LoginPanel.jsx`) utilizing NextAuth.js client hooks. If the user session is active, render their name, email address, profile photo, and a logout button. If anonymous, display a styled 'Sign in with GitHub' button.",
    },
    starterCode: `// NextAuth Client Status Component
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginPanel() {
  // সেশন স্টেট ও স্ট্যাটাস রিসিভ করুন

  // কন্ডিশনাল রেন্ডারিং লজিক ইমপ্লিমেন্ট করুন
}
`,
    solution: {
      code: `// NextAuth Client Status Component Solution
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginPanel() {
  const { data: session, status } = useSession();

  // ১. সেশন লোডিং ফেস
  if (status === "loading") {
    return (
      <div className="p-6 text-center text-sm font-medium text-slate-500">
        Loading session...
      </div>
    );
  }

  // ২. ব্যবহারকারী লগইন অবস্থায় থাকলে
  if (session) {
    return (
      <div className="p-8 max-w-sm mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm mt-10 text-center">
        <img 
          src={session.user.image || 'https://via.placeholder.com/150'} 
          alt="Profile" 
          className="w-20 h-20 rounded-full mx-auto border-2 border-indigo-50 shadow-sm"
        />
        <h3 className="mt-4 text-lg font-bold text-slate-800">{session.user.name}</h3>
        <p className="text-xs text-slate-400 mt-1">{session.user.email}</p>
        <button 
          onClick={() => signOut()} 
          className="mt-6 w-full py-2 bg-rose-550 hover:bg-rose-600 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  // ৩. ব্যবহারকারী লগইন না থাকলে (গিটহাব বাটন দেখাবে)
  return (
    <div className="p-8 max-w-sm mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm mt-10 text-center">
      <h2 className="text-xl font-bold text-slate-800">BignanPro Academy</h2>
      <p className="text-sm text-slate-400 mt-2">Access premium fullstack courses.</p>
      <button 
        onClick={() => signIn('github')} 
        className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}`,
      explanation: {
        bn: "চমৎকার সেশন প্যানেল! গিটহাব ও-অথ কানেকশন এবং নেক্সটঅথ সেশন কন্ডিশনাল রেন্ডারিং লজিক প্রফেশনাল স্ট্যান্ডার্ড অনুযায়ী পারফেক্ট হয়েছে।",
        en: "Excellent session integration! Mounting the GitHub provider hooks alongside responsive conditional states handles dynamic client authentication perfectly.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "নেক্সটঅথ (NextAuth.js)-এ 'JWT Session' এবং 'Database Session' এর মধ্যে স্থাপত্যগত (Architectural) পার্থক্য কী এবং কোন পদ্ধতিটি বেশি স্কেলেবল?",
        en: "What are the architectural differences between JWT-based sessions and Database-based sessions in NextAuth, and which is more scalable?",
      },
      answer: {
        bn: "নেক্সটঅথে সেশন ট্র্যাকিংয়ের ২টি আর্কিটেকচারাল পদ্ধতির পার্থক্যসমূহ নিচে ব্যাখ্যা করা হলো:\n১. JWT সেশন (ডিফল্ট): লগইন করার পর সমস্ত ইউজার ডেটা ও মেয়াদ একটি এনক্রিপ্টেড টোকেনে স্বাক্ষর করে কুকি আকারে ক্লায়েন্টে পাঠিয়ে দেওয়া হয়। সার্ভারে কোনো রেকর্ড সেভ থাকে না। প্রতি এপিআই কলে সার্ভার শুধু টোকেনের ডিজিটাল সিগনেচার যাচাই করে। এটি ডেটাবেজ কোয়েরি কমায় এবং চরম স্কেলেবল (Stateless)।\n২. ডাটাবেজ সেশন: লগইন করার পর সেশন আইডি ও মেয়াদ সরাসরি ডেটাবেজে (যেমন: মঙ্গোডিবি টেবিল) সেভ করা হয়। ক্লায়েন্টকে শুধু সেশন আইডি সম্বলিত কুকি দেওয়া হয়। প্রতি এপিআই কলে সার্ভার ডাটাবেজে কুয়েরি করে সেশনটি সক্রিয় আছে কিনা যাচাই করে। এতে ডেটাবেজে অতিরিক্ত লোড পড়ে, তবে সেশন ফোর্স-ডিলিট বা রিভোক করার সুবিধা পাওয়া যায়।\n৩. স্কেলেবিলিটি রায়: উচ্চ ট্রাফিকের জন্য 'JWT Session' সবচেয়ে স্কেলেবল কারণ এতে প্রতি এপিআই কলে ডাটাবেজ রাউন্ড-ট্রিপ (DB Roundtrip) করতে হয় না, যা এপিআই রেসপন্স ফাস্ট রাখে।",
        en: "NextAuth supports two primary strategies for managing user sessions:\n1. JWT Strategy (Default): Session data is encrypted and signed into a cookie sent to the client. The server retains no session state. During requests, NextAuth decrypts the cookie using its secret key. This is stateless and highly scalable as it eliminates database query bottlenecks.\n2. Database Strategy: The server writes a unique session token to database tables (e.g. MongoDB) and sets a matching ID cookie on the browser. On every HTTP request, NextAuth queries the database to verify the session record. This permits immediate session revocation (invalidating sessions), but introduces database load overhead.\n3. Scalability Verdict: The JWT strategy is significantly more scalable for high-traffic apps because it avoids database queries on every API access, optimizing server throughput."
      },
    },
    {
      question: {
        bn: "ও-অথ (OAuth) অথেনটিকেশন ফ্লোতে ক্লায়েন্ট রিডাইরেক্ট এবং সিকিউরিটি এক্সচেঞ্জ স্টেপগুলো বিস্তারিতভাবে ব্যাখ্যা করুন।",
        en: "Explain the complete step-by-step redirect and token exchange flow of the OAuth protocol.",
      },
      answer: {
        bn: "ও-অথের সিকিউর তথ্য আদান-প্রদান ফ্লো মূলত ৪টি ধাপে সম্পন্ন হয়:\n১. রিডাইরেকশন (Redirection): ইউজার লগইন বাটনে ক্লিক করলে অ্যাপ তাকে গুগলের অথেনটিকেশন পেজে রিডাইরেক্ট করে। এখানে কন্ট্যাক্ট ডোমেন ও অ্যালাউড স্কোপ (Scope - যেমন ইমেইল, প্রোফাইল ডাটা) চেক হয়।\n২. অথরাইজেশন কোড (Authorization Code): ইউজার সম্মতি দিলে গুগল তাকে আমাদের অ্যাপের রেজিস্টার্ড কলব্যাক ইউআরএলে (\`/api/auth/callback/google\`) ফেরত পাঠায় এবং ব্রাউজার অ্যাড্রেস বারে একটি গোপন অস্থায়ী কোড (Code) প্রদান করে।\n৩. টোকেন এক্সচেঞ্জ (Token Exchange): আমাদের ব্যাকএন্ড সার্ভার সেই অস্থায়ী কোডটি এবং আমাদের গোপন \`Client Secret Key\` সরাসরি গুগলের সিকিউর ব্যাকএন্ড সার্ভারে পাঠিয়ে এক্সচেঞ্জ রিকোয়েস্ট করে।\n৪. সেশন টোকেন ইস্যু (Token Issue): গুগল কোড ও সিক্রেট কি মিলিয়ে নিশ্চিত হওয়ার পর ব্যাকএন্ডে ইউজারের প্রোফাইল ডাটা ও অ্যাক্সেস টোকেন রিটার্ন করে। নেক্সটঅথ সেই ডাটা দিয়ে সেশন কুকি তৈরি করে ইউজারকে ড্যাশবোর্ডে ঢুকতে দেয়। এই এক্সচেঞ্জ ব্যাকগ্রাউন্ডে হওয়ার কারণে ব্রাউজারে ডাটা লিক হওয়ার কোনো সুযোগ থাকে না।",
        en: "The OAuth protocol handles token verification securely in four distinct steps:\n1. Client Redirect: Clicking the social login button triggers a redirect to the provider's domain (e.g. Google), passing the application's Client ID and requested scopes (permissions for email, profile image).\n2. Authorization Code: The user authenticates and grants access. Google redirects the browser back to our registered Callback URL, attaching a short-lived authorization code in the URL query string.\n3. Code Exchange: NextAuth catches the code server-side and dispatches a secure request to Google's endpoint, exchanging the authorization code and our secret Client Secret Key for tokens.\n4. Session Setup: Google validates the exchange and transmits the user profile data. NextAuth encrypts this data into a session cookie, logs the user in, and redirects them to the private dashboard."
      },
    },
  ],
};
