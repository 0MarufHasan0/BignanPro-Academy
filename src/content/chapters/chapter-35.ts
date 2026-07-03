import { Chapter } from "@/types";

export const chapter35Content: Chapter = {
  id: "chapter-35",
  number: 35,
  title: {
    bn: "অধ্যায় ৩৫: অথেন্টিকেশন সিস্টেম — সাইনআপ, লগইন ও জেডাব্লিউটি (JWT)",
    en: "Chapter 35: Authentication System (Login / Register + JWT)",
  },
  description: {
    bn: "পাসওয়ার্ড সিকিউরিটি হ্যাশিং (bcrypt), জেডাব্লিউটি (JWT) টোকেন চক্র, অ্যাক্সেস ও রিফ্রেশ টোকেন, কুকিজ এবং ও-অথ (OAuth) সহ মডার্ন অথেন্টিকেশন ফ্রেমওয়ার্কের মাস্টারক্লাস।",
    en: "Master secure user sessions, bcrypt password hashing, JWT token cycles (Access/Refresh), HTTP-only cookies, and OAuth via NextAuth/Better Auth.",
  },
  difficulty: "advanced",
  readingTime: 18,
  objectives: [
    {
      bn: "সাইনআপ ও লগইন সিস্টেমের অথেন্টিকেশন ফ্লো এবং ডেটা ভ্যালিডেশন ব্যাখ্যা করা।",
      en: "Explain signup and login authentication flow cycles and validation pipelines.",
    },
    {
      bn: "bcrypt প্যাকেজ ব্যবহার করে পাসওয়ার্ড নিরাপদে হ্যাশ করা এবং কম্পেয়ার করা শেখা।",
      en: "Secure user credentials using bcrypt hashing and verification algorithms.",
    },
    {
      bn: "JWT অ্যাক্সেস ও রিফ্রেশ টোকেন এবং XSS আক্রমণ থেকে রক্ষায় HTTP-Only কুকিজ ব্যবহার করা।",
      en: "Implement JWT Access/Refresh tokens and protect systems against XSS using HTTP-only cookies.",
    },
    {
      bn: "Better Auth বা NextAuth-এর মতো মডার্ন অথেন্টিকেশন ও ও-অথ (OAuth) সোশ্যাল লগইন বুঝা।",
      en: "Understand OAuth social logins and modern auth frameworks like NextAuth and Better Auth.",
    },
  ],
  sections: [
    {
      id: "intro-auth-jwt",
      title: {
        bn: "১. অথেন্টিকেশন ও জেডাব্লিউটি (JWT) এর ধারণা (What is Auth & What is JWT)",
        en: "1. What is Authentication & What is JWT",
      },
      content: {
        bn: `## What is Authentication? (অথেন্টিকেশন কী?)
একটি ওয়েবসাইটে কোটি ইউজার অ্যাকাউন্ট থাকতে পারে। তবে প্রতিটি ইউজার যেন কেবল তার নিজের ব্যক্তিগত ডাটাই এক্সেস করতে পারে, তা নিশ্চিত করার নিরাপত্তামূলক পদ্ধতিকে বলা হয় **Authentication (অথেন্টিকেশন)**।
*   **রেজিস্টার (Register/Signup)**: নতুন ব্যবহারকারীর নাম, ইমেইল ও পাসওয়ার্ড ম্যাপ করে ডাটাবেজে তার অ্যাকাউন্ট তৈরি করা।
*   **লগইন (Login/Signin)**: ইতিমধ্যে অ্যাকাউন্ট থাকা ইউজার সঠিক ইমেইল-পাসওয়ার্ড দিয়ে তার প্রোফাইল এক্সেস করা।

---

## What is JWT (JSON Web Token)?
প্রথাগত সিস্টেমে লগইন করার পর সার্ভার মেমরিতে একটি সেশন সেভ করা হতো। কিন্তু এতে সার্ভার স্কেলিং করতে সমস্যা হতো। আধুনিক ওয়েব আর্কিটেকচারে ক্লায়েন্ট-সার্ভার কানেকশন সিকিউর রাখতে বহুল ব্যবহৃত প্রযুক্তি হলো **JWT (জেডাব্লিউটি)**।
*   **সহজ সংজ্ঞা**: এটি হলো একটি কম্প্যাক্ট, সেলফ-কন্টেইনড ইউআরএল-সেফ ডিজিটাল স্ট্রিং টোকেন, যা ক্লায়েন্ট ও সার্ভারের মধ্যে নিরাপদ তথ্য আদান-প্রদান করতে ব্যবহৃত হয়।
*   **এর কাঠামো**: একটি JWT টোকেন মূলত ৩টি অংশে বিভক্ত থাকে (যা ডট \`.\` দ্বারা বিভক্ত থাকে):
    1.  **Header**: এটি কি ধরণের টোকেন এবং কোন অ্যালগরিদম ব্যবহার করা হয়েছে তা প্রকাশ করে।
    2.  **Payload**: ইউজারের তথ্য (যেমন: ইউজার আইডি, নাম)। এর ভেতরে পাসওয়ার্ডের মতো কোনো সিক্রেট রাখা যাবে না।
    3.  **Signature**: টোকেনটি আসার পথে কেউ টেম্পার বা চেঞ্জ করেছে কিনা তা চেক করার জন্য সার্ভার সাইড সিক্রেট কি (Secret Key) দিয়ে তৈরি করা ডিজিটাল সিগনেচার।`,
        en: `## What is Authentication?
In web applications, databases house millions of records. **Authentication** is the security protocol verifying a user's identity before resolving data queries.
*   **Registration (Signup)**: Collecting credentials to insert a new user document in the database.
*   **Login (Signin)**: Checking client-submitted credentials against database values to authorize dashboard access.

---

## What is JWT (JSON Web Token)?
Legacy servers stored session states in RAM. However, as web traffic scaled, synchronized RAM setups proved inefficient. Modern full-stack apps use **JWTs** to manage stateless user sessions.
*   **Definition**: A compact, URL-safe token structure used to securely transmit JSON payloads between client apps and API endpoints.
*   **Anatomy of a JWT**: A token is formatted as three segments separated by periods (\`.\`):
    1.  **Header**: Defines the token type and cryptographic hashing algorithm used (e.g. HS256).
    2.  **Payload**: Houses claims or metadata (user ID, roles). Never insert plain text passwords here.
    3.  **Signature**: Cryptographic checksum computed using a server secret key, verifying that the payload was not altered in transit.`,
      },
    },
    {
      id: "secure-bcrypt-cookies",
      title: {
        bn: "২. পাসওয়ার্ড হ্যাশিং ও সিকিউর কুকিজ (Bcrypt Hashing & Secure Cookies)",
        en: "2. Bcrypt Hashing & Secure Cookies",
      },
      content: {
        bn: `## Why Plain Passwords are Dangerous (পাসওয়ার্ড সিকিউরিটি)
*   **কখনই প্লেইন টেক্সট সেভ করবেন না**: ইউজারের দেওয়া পাসওয়ার্ড (যেমন: \`mySecret123\`) সরাসরি ডাটাবেজে সেভ করা একটি জঘন্য ভুল। যদি কখনো হ্যাকার ডাটাবেজ এক্সেস করতে পারে, তবে সব ইউজারের পাসওয়ার্ড লিক হয়ে যাবে।
*   **সমাধান**: আমরা পাসওয়ার্ডটিকে একটি ওয়ান-ওয়ে অ্যালগরিদম দিয়ে এমন হিজিবিজি কোডে রূপান্তর করবো যা রিভার্স বা ডিক্রিপ্ট করা অসম্ভব। একে বলা হয় **Password Hashing**।

---

## Bcrypt Hashing (ডিক্রিপ্ট ও হ্যাশিং)
জাভাস্ক্রিপ্ট ওয়ার্ল্ডে পাসওয়ার্ড হ্যাশ করার জন্য সবচেয়ে জনপ্রিয় ইন্ডাস্ট্রি স্ট্যান্ডার্ড হলো **bcrypt** প্যাকেজ।
*   **bcrypt.hash()**: এটি পাসওয়ার্ড এবং একটি লবণের মিক্সচার বা **Salt Rounds** (সাধারণত ১০ রাউন্ড) নিয়ে শক্তিশালী হ্যাশ তৈরি করে।
    - *ইনপুট*: \`123456\` ➡️ *আউটপুট*: \`$2b$10$g1kGgW7jV8y/x6r123...456\`
*   **bcrypt.compare()**: লগইন করার সময় ইউজারের টাইপ করা পাসওয়ার্ড এবং ডেটাবেজে থাকা হ্যাশ পাসওয়ার্ড তুলনা করে বুলিয়ান (\`true/false\`) রিটার্ন করে।

---

## HTTP-Only Cookies (সিকিউর কুকিজ)
টোকেন তৈরি করার পর সেটি যদি ফ্রন্টএন্ডের \`localStorage\`-এ রাখা হয়, তবে ওয়েবসাইটে কোনো ক্ষতিকর স্ক্রিপ্ট ঢুকলে (যাকে **XSS** বা Cross-Site Scripting আক্রমণ বলে) সহজেই টোকেনটি হ্যাক হয়ে যাবে।
*   **HTTP-Only Cookies**: এটি এমন এক ধরণের সার্ভার-সাইড কুকি যা ব্রাউজারের জাভাস্ক্রিপ্ট কোড থেকে একেবারেই অদৃশ্য বা রিড-অযোগ্য থাকে। ফলে XSS আক্রমণ হলেও হ্যাকার কোনোভাবেই টোকেনটি চুরি করতে পারে না।`,
        en: `## Why Plain Passwords are Dangerous
*   **Zero Plaintext Rules**: Storing raw user passwords in databases is a critical security vulnerability. If database tables are compromised, all client credentials leak instantly.
*   **The Hashing Fix**: We pass raw passwords through a one-way cryptographic hashing function. The resulting hash cannot be reversed back to plain text.

---

## Bcrypt Hashing
The gold standard for backend password encryption is **bcrypt**.
*   **bcrypt.hash()**: Combines a raw password string with a configurable computational value called a **Salt** (usually set to 10 rounds) to generate a secure hash.
    - *Raw Input*: \`123456\` ➡️ *Hashed String*: \`$2b$10$g1kGgW7jV8y/x6r123...456\`
*   **bcrypt.compare()**: Compares client-submitted plain text passwords with the stored database hash, verifying matches without reversing the hash.

---

## HTTP-Only Cookies
Storing active session tokens in browser \`localStorage\` leaves users vulnerable to **XSS (Cross-Site Scripting)** attacks, as client-side JavaScript can read these storage slots.
*   **HTTP-Only Cookies**: A specialized cookie configuration flag. Once set, browsers block JavaScript environments from accessing the cookie keys, securing tokens from malicious client scripts.`,
      },
    },
    {
      id: "jwt-tokens-protected-routes",
      title: {
        bn: "৩. অ্যাক্সেস/রিফ্রেশ টোকেন ও প্রটেক্টেড রাউটস (Access/Refresh Tokens & Protected Routes)",
        en: "3. Access/Refresh Tokens & Protected Routes",
      },
      content: {
        bn: `## Dual Token Strategy (অ্যাক্সেস ও রিফ্রেশ টোকেন)
একটি টোকেন যদি দীর্ঘদিন সক্রিয় থাকে, তবে সেটি লিক হলে হ্যাকার দীর্ঘদিন ইউজারের অ্যাকাউন্ট চালাতে পারবে। এই রিস্ক এড়াতে প্রফেশনাল সিকিউরিটি ডিজাইনাররা ২টি টোকেন ব্যবহার করেন:

1.  **Access Token**: এটি একটি অত্যন্ত সংক্ষিপ্ত মেয়াদের টোকেন (যেমন: ১৫ মিনিট)। ফ্রন্টএন্ড এটি দিয়ে সার্ভারে ডাটা রিড বা রাইট করার রিকোয়েস্ট পাঠায়।
2.  **Refresh Token**: এটি একটি দীর্ঘ মেয়াদের টোকেন (যেমন: ৭ দিন) যা ডাটাবেজে এবং ক্লায়েন্টের সিকিউর কুকিজে স্টোর থাকে। এক্সেস টোকেনের মেয়াদ শেষ হয়ে গেলে ফ্রন্টএন্ড এই রিফ্রেশ টোকেনটি ব্যাকএন্ডে পাঠিয়ে অটোমেটিক্যালি একটি নতুন শর্ট-লাইফ এক্সেস টোকেন জেনারেট করে নেয়। ইউজারকে বারবার আইডি-পাসওয়ার্ড দিয়ে লগইন করতে হয় না।

---

## Protected Routes (সুরক্ষিত রাউটস)
সার্ভারের কিছু এপিআই রুট (যেমন: \`/api/profile\`, \`/api/billing\`) কেবল লগইন করা ইউজারদের জন্য ভিজ্যুয়াল হওয়া উচিত। এর জন্য ব্যাকএন্ডে আমরা একটি মিডলওয়্যার (Middleware) তৈরি করি যা এক্সপ্রেস রাউটের মাঝখানে বসে চেক করে টোকেনটি ভ্যালিড কিনা:

\`\`\`javascript
// এক্সপ্রেস প্রটেক্টেড রাউটের নমুনা
app.get('/api/profile', verifyTokenMiddleware, (req, res) => {
  // কেবল টোকেন সঠিক হলেই এই ব্লক এক্সিকিউট হবে
  res.json({ user: req.user });
});
\`\`\``,
        en: `## Dual Token Strategy
Setting long lifetimes on tokens is dangerous. If a token leaks, hijackers retain access. Production servers deploy a dual-token strategy:
1.  **Access Token**: Short-lived token (e.g. 15 minutes) used in headers to authorize API requests.
2.  **Refresh Token**: Long-lived token (e.g. 7 days) securely stored in HTTP-only cookies and databases. When access tokens expire, clients present the refresh token to silently request new short-lived access tokens.

---

## Protected Routes
Private API resources (like profile profiles or payment histories) require validation checks. We implement Express **Middlewares** that intercept network requests, parsing headers or cookies to verify active JWTs before resolving endpoints:

\`\`\`javascript
// Example of an Express route protected by middleware
app.get('/api/profile', verifyTokenMiddleware, (req, res) => {
  // Executes only if the verified token assigns a valid user payload to req.user
  res.json({ profile: req.user });
});
\`\`\``,
      },
    },
    {
      id: "modern-auth-frameworks",
      title: {
        bn: "৪. মডার্ন অথেন্টিকেশন ফ্রেমওয়ার্ক ও ও-অথ (Modern Auth & OAuth)",
        en: "4. Modern Auth Frameworks & OAuth",
      },
      content: {
        bn: `## What is Modern Auth? (মডার্ন অথেন্টিকেশন কী?)
উপরে আলোচনা করা সিকিউরিটি হ্যাসেলগুলো (হ্যাস ফাইল, সেশন ম্যাচিং, টোকেন রোটেশন, রিফ্রেশ লজিক) নিজে কোড করতে গেলে অনেক সময় এরর বা লুপহোল থেকে যেতে পারে।

আধুনিক প্রডাকশন অ্যাপে আমরা সবকিছু নিজে না লিখে তৈরি রেডিমেড সিকিউরিটি ফ্রেমওয়ার্ক ব্যবহার করি।
*   **জনপ্রিয় ফ্রেমওয়ার্কসমূহ**:
    - **Better Auth**: নেক্সট জেএস ও এক্সপ্রেসের জন্য আধুনিক টাইপসেফ লাইব্রেরি।
    - **NextAuth.js (Auth.js)**: নেক্সট জেএস অ্যাপ্লিকেশনের জন্য বিশ্বের সবচেয়ে জনপ্রিয় অথেনটিকেশন লাইব্রেরি।
    - **Clerk**: ক্লাউড-হোস্টেড অথেন্টিকেশন সার্ভিস যা রেডিমেড ইউজার ড্যাশবোর্ড ও বাটন প্রদান করে।

---

## OAuth Social Login (ও-অথ বা সোশ্যাল লগইন)
পাসওয়ার্ড টাইপ করার ঝামেলা দূর করতে গুগল, গিটহাব বা ফেসবুক ব্যবহার করে যে এক ক্লিকে লগইন করা যায়, তাকে বলা হয় **OAuth**।
*   **মেকানিজম**: ব্যবহারকারী গুগলের সিকিউর উইন্ডোতে লগইন করেন। গুগল ব্যাকএন্ডকে একটি ভ্যালিডেশন কোড দেয় যা ব্যাকএন্ড চেক করে টোকেন জেনারেট করে। এতে ইউজারকে আমাদের ডাটাবেজে কোনো পাসওয়ার্ড স্টোর করতে হয় না।

---

## NextAuth / Better Auth Syntax (সহজ কোড উদাহরণ)
আমাদের কাস্টম কোডিং কম করে রিঅ্যাক্ট/নেক্সট পেজে গুগলে লগইন করানোর সিম্পল মেথড কল:
\`\`\`javascript
import { signIn } from 'next-auth/react';

// গুগল লগইন বাটনের অ্যাকশন ট্রিগার
<button onClick={() => signIn('google')}>
  গুগল দিয়ে লগইন করুন
</button>
\`\`\``,
        en: `## What is Modern Auth?
Writing password comparison loops, managing tokens, rotation logs, and handling CORS settings manually is highly prone to developer errors.

Modern teams leverage validated authentication frameworks:
*   **Industry Tools**:
    - **NextAuth.js (Auth.js)**: The standard auth library for Next.js App Router.
    - **Better Auth**: Lightweight, type-safe library for modern frameworks.
    - **Clerk / Auth0**: Fully managed SaaS identity services, providing ready-made UI layouts.

---

## OAuth Social Logins
Password entries are becoming obsolete. **OAuth** protocol delegates authentication to trusted providers (Google, GitHub, Facebook).
*   **Security benefits**: Users authenticate directly on Google's domain, which returns encrypted validation codes to our server. We never receive or store raw passwords.

---

## NextAuth / Better Auth Syntax
Invoking social workflows is simplified into basic helper queries on client layouts:
\`\`\`javascript
import { signIn } from 'next-auth/react';

// Trigger Google OAuth window
<button onClick={() => signIn('google')}>
  Sign in with Google
</button>
\`\`\``,
      },
    },
    {
      id: "mistakes-analogies",
      title: {
        bn: "৫. সাধারণ ভুল ও নিরাপত্তা সিস্টেমের রূপক (Common Mistakes & Analogies)",
        en: "5. Common Mistakes & Security Metaphors",
      },
      content: {
        bn: `## Common Mistakes (সাধারণ ভুলসমূহ)
*   **প্লেইন পাসওয়ার্ড স্টোরেজ**: ডাটাবেজে ইউজারের প্লেইন পাসওয়ার্ড লিখে রাখা বা ইমেইল পাঠানোর বডিতে পাসওয়ার্ড ওপেন রাখা।
*   **লোকালস্টোরেজে টোকেন রাখা**: JWT টোকেন \`localStorage\`-এ রেখে দেওয়া যা সাইটকে XSS স্ক্রিপ্ট চুরির ঝুঁকিতে ফেলে। টোকেন সবসময় HTTP-only কুকিজে পাঠাতে হবে।
*   **টোকেন মেয়াদহীন করা**: JWT টোকেনের কোনো এক্সপায়ারি ডেট (expiration) সেট না করা। টোকেন লিক হলে তা আজীবন সক্রিয় থাকবে!

---

## Metaphors (বাস্তব জীবনের রূপক)

### ১. এয়ারপোর্ট সিকিউরিটি রূপক (Manual JWT Auth):
*   **পাসওয়ার্ড ও পাসপোর্ট চেক (Login)**: আপনি যখন টিকিট ও পাসপোর্ট দেখান (আমাদের পাসওয়ার্ড ভেরিফিকেশন)।
*   **বোর্ডিং পাস (Access Token)**: সিকিউরিটি পাসের পর আপনাকে একটি বোর্ডিং পাস দেওয়া হয় (আমাদের Access Token)। বোর্ডিং পাসটি দিয়ে আপনি সীমিত সময়ের জন্য প্লেনে বা লাউঞ্জে অ্যাক্সেস পান (প্রটেক্টেড রাউট)।
*   **রি-এন্ট্রি পাস (Refresh Token)**: বোর্ডিং পাস হারিয়ে বা মেয়াদ শেষ হয়ে গেলে আপনি রি-এন্ট্রি পাস দিয়ে নতুন বোর্ডিং পাস ইস্যু করে নেন।

### ২. হোম সিকিউরিটি রূপক (Manual vs Modern Auth):
*   **ম্যানুয়াল সিস্টেম (Manual Auth)**: আপনি নিজে দরজা কেটে তালা লাগাচ্ছেন, সিসিটিভি তার টেনে ফিট করছেন (নিজে কোড করা)। এতে ছোট ছিদ্র থাকলে চোর ঢুকতে পারে।
*   **সিকিউরিটি কোম্পানি (Modern Auth)**: আপনি একটি বড় সিকিউরিটি এজেন্সিকে আপনার বাড়ির নিরাপত্তার চাবি ও সিসিটিভি লজিক লিজ দিলেন (যেমন Better Auth বা Clerk)। তারা রেডিমেড বুলেটপ্রুফ গেট ও ২৪/৭ সিকিউরিটি গার্ড দিয়ে দেয়!`,
        en: `## Common Mistakes
*   **Storing plain passwords**: Saving raw passwords in MongoDB without applying bcrypt hashes, rendering data vulnerable to catalog leaks.
*   **LocalStorage exposure**: Keeping JWT keys in browser storage where scripts can fetch them. Shift keys to HTTP-only cookies.
*   **Missing Expiration limits**: Setting long-lived or infinite access times on JWT signatures. Access tokens must expire within minutes.

---

## Metaphors

### 1. Airport Security Metaphor (Manual JWT)
*   **Passport Verification (Login)**: Presenting passport credentials at gate counters to verify identity.
*   **Boarding Pass (Access Token)**: You receive a short-lived boarding card (Access Token) to access plane gates (Protected Routes). 
*   **Re-entry Pass (Refresh Token)**: Presenting passport IDs at security gates to renew expired passes without starting over.

### 2. Home Defense Metaphor (Manual vs. Modern Auth)
*   **Manual Auth**: Building your own security locks, wiring local alarms, and casting keys. A tiny alignment slip leaves doors unlatched.
*   **Modern Auth**: Hiring a professional security systems vendor (Clerk, Better Auth). They deploy standardized bulletproof frames and automated alarms.`,
      },
      codeBlock: {
        fileName: "authServer.js",
        language: "javascript",
        code: `const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5000;
const JWT_SECRET = "super_secret_key_123"; // রিয়েল প্রোজেক্টে এটি .env ফাইলে থাকে

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// ১. ডাটাবেজ মডেল
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// ২. SIGNUP / REGISTER (পাসওয়ার্ড হ্যাশিং সহ)
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // পাসওয়ার্ড হ্যাশ করা (১০ রাউন্ড সল্ট সহ)
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "অ্যাকাউন্ট তৈরি সফল হয়েছে!" });
  } catch (err) {
    res.status(400).json({ error: "ইমেইলটি ইতিমধ্যে ব্যবহার করা হয়েছে!" });
  }
});

// ৩. LOGIN (পাসওয়ার্ড চেক ও টোকেন জেনারেট)
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "ভুল ইমেল বা পাসওয়ার্ড!" });
    }

    // পাসওয়ার্ড কম্পেয়ার করা
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "ভুল ইমেল বা পাসওয়ার্ড!" });
    }

    // JWT অ্যাক্সেস টোকেন তৈরি (মেয়াদ: ১৫ মিনিট)
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '15m' });

    res.json({ token, message: "লগইন সফল হয়েছে!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ৪. PROTECTED ROUTE MIDDLEWARE (সুরক্ষিত রাউট যাচাইকারী)
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Authorization: Bearer <TOKEN>

  if (!token) {
    return res.status(403).json({ error: "কোনো সিকিউরিটি টোকেন পাওয়া যায়নি!" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // ডিকোডেড ডাটা রিকোয়েস্ট অবজেক্টে সেট করা
    next(); // পরবর্তী ফাংশনে যাওয়া
  } catch (err) {
    return res.status(401).json({ error: "ইনভ্যালিড বা মেয়াদোত্তীর্ণ টোকেন!" });
  }
};

// ৫. PROTECTED ENDPOINT (সুরক্ষিত এপিআই)
app.get('/api/profile', verifyToken, (req, res) => {
  res.json({ message: "সুরক্ষিত প্রোফাইল ডাটা অ্যাক্সেস সফল!", user: req.user });
});

app.listen(PORT, () => {
  console.log(\`Auth Server is running on port \${PORT}\`);
});`,
        explanations: [
          {
            line: 25,
            text: {
              bn: "bcrypt.hash(password, 10) রান করে ব্যবহারকারীর প্লেইন পাসওয়ার্ডকে সিকিউর হ্যাশ কোডে রূপান্তর করা হয়েছে।",
              en: "bcrypt.hash encrypts raw text into a secure hash before writing documents to MongoDB.",
            },
          },
          {
            line: 45,
            text: {
              bn: "bcrypt.compare ইউজার টাইপ করা পাসওয়ার্ড এবং ডাটাবেজের হ্যাশ পাসওয়ার্ডের মধ্যে নিরাপদ গাণিতিক তুলনা সম্পন্ন করে।",
              en: "bcrypt.compare validates credentials against database hashes safely without decrypting them.",
            },
          },
          {
            line: 74,
            text: {
              bn: "jwt.verify সিগনেচার কি চেক করে প্রমাণ করে যে টোকেনটি সার্ভার দ্বারাই তৈরি করা হয়েছে এবং মেয়াদ সক্রিয় আছে।",
              en: "jwt.verify checks the token signature using the secret key, rejecting expired or forged tokens.",
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
নিচের কুইজ ও অ্যাসাইনমেন্টগুলো সম্পন্ন করুন। এটি আপনার ফুলস্ট্যাক অ্যাপ্লিকেশন সিকিউরিটি লেভেলকে অত্যন্ত উঁচুতে নিয়ে যাবে।`,
        en: `## Reflection & Lab Tasks
Solidify your authentication pipeline concepts before beginning production scaling, payment integrations, or advanced software development.`,
      },
      aiMentorNotes: {
        whyExists: {
          bn: "অথেন্টিকেশন সিস্টেম ব্যবহারকারীর আসল পরিচয় যাচাই করে ডাটাবেজের প্রাইভেট ডেটা অ্যাক্সেস সীমাবদ্ধ রাখতে সাহায্য করে।",
          en: "Authentication limits database access to verified accounts, protecting private user documents.",
        },
        whyWorks: {
          bn: "জেডাব্লিউটি ও সিকিউর কুকিজ ক্লায়েন্ট স্টোরেজের উপর নির্ভরতা কমিয়ে নেটওয়ার্ক রিকোয়েস্ট সিকিউর রাখে।",
          en: "JWT cryptographic signatures allow servers to trust user claims without repeating database lookups.",
        },
        professionalThinking: {
          bn: "প্রফেশনালরা কখনো JWT সিক্রেট কি সোর্স কোডে লেখেন না, সর্বদা পরিবেশ ভেরিয়েবল (.env ফাইল) থেকে লোড করেন।",
          en: "Seniors load secret keys strictly from environment variables (.env files), keeping secrets out of Git repositories.",
        },
        mistakes: {
          bn: "সবচেয়ে বড় নিরাপত্তা ভুল হলো JWT টোকেনের মেয়াদ অনির্দিষ্ট বা খুব দীর্ঘ (যেমন ১ বছর) রাখা। এতে টোকেন চুরি হলে আইডি হ্যাক হওয়া অবধারিত।",
          en: "Setting long lifetimes on access tokens. Keep access tokens under 15 minutes, relying on refresh cycles to update them.",
        },
        debugging: {
          bn: "টোকেন ভেরিফিকেশন কাজ না করলে Bearer প্রিফিক্স এবং টোকেন স্ট্রিংটি 'split' ফাংশন দিয়ে ঠিকভাবে সেপারেট করেছেন কিনা চেক করুন।",
          en: "If middlewares fail, verify authorization header parsing (e.g., extracting token string past 'Bearer ' prefix).",
        },
        performance: {
          bn: "bcrypt রাউন্ড বাড়ানোর ক্ষেত্রে খুব বেশি ভ্যালু (যেমন ১৫ এর বেশি) দেবেন না, এতে সার্ভারের সিপিইউ স্পীড অতিরিক্ত ধীর হয়ে যায়।",
          en: "Keep bcrypt salt rounds at 10. Higher rounds consume server CPU cycles, causing login response lag.",
        },
      },
    },
  ],
  quizzes: [
    {
      id: "auth-q1",
      question: {
        bn: "ওয়েবসাইটে অথেন্টিকেশন (Authentication)-এর প্রধান কাজ কোনটি?",
        en: "What is the primary role of Authentication in a website?",
      },
      options: [
        { bn: "সার্ভারে ফাইল আপলোড দ্রুত করা", en: "Speeding up file uploads to servers" },
        { bn: "ব্যবহারকারীর পরিচয় যাচাই করে সঠিক অ্যাকাউন্টের অ্যাক্সেস প্রদান করা", en: "Verifying user identities to grant access to correct accounts" },
        { bn: "ইউজারের মাউস ক্লিক ট্র্যাক করা", en: "Tracking user mouse clicks" },
        { bn: "সিএসএস ক্লাস ডিলিট করা", en: "Deleting CSS style properties" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "অথেন্টিকেশনের কাজ হলো ইউজারনেম-পাসওয়ার্ড চেক করে ইউজারটি ভ্যালিড কিনা তা যাচাই করা।",
        en: "Authentication verifies credentials to validate active user identities.",
      },
    },
    {
      id: "auth-q2",
      question: {
        bn: "জেডাব্লিউটি (JWT) টোকেনের ৩টি প্রধান অংশের সিকোয়েন্স বা ক্রমটি কী?",
        en: "What is the correct sequence of the three parts of a JWT token?",
      },
      options: [
        { bn: "Payload.Header.Signature", en: "Payload.Header.Signature" },
        { bn: "Header.Payload.Signature", en: "Header.Payload.Signature" },
        { bn: "Signature.Payload.Header", en: "Signature.Payload.Header" },
        { bn: "Header.Signature.Payload", en: "Header.Signature.Payload" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "একটি স্ট্যান্ডার্ড জেডাব্লিউটি টোকেন ডট দ্বারা বিভক্ত ৩টি অংশের সিকোয়েন্স মেনে চলে: Header.Payload.Signature।",
        en: "JWT structures always follow the order: Header, Payload, and Signature.",
      },
    },
    {
      id: "auth-q3",
      question: {
        bn: "টোকেন চুরি প্রতিরোধে \`HTTP-Only Cookies\` ব্যবহারের বড় সুবিধা কোনটি?",
        en: "What is the primary advantage of using HTTP-Only cookies to store tokens?",
      },
      options: [
        { bn: "কুকি ফাইল অটোমেটিক ডিলিট হওয়া", en: "Automating cookie deletions" },
        { bn: "জাভাস্ক্রিপ্ট কোড থেকে কুকি রিড হওয়া ব্লক করে XSS আক্রমণ থেকে রক্ষা করা", en: "Blocking client-side JavaScript access to prevent token theft via XSS attacks" },
        { bn: "সার্ভারের মেমরি স্পেস খালি করা", en: "Clearing server RAM caches" },
        { bn: "ডাটাবেজ সার্চ স্পিড বৃদ্ধি করা", en: "Accelerating database indexing" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "HTTP-Only কুকিজ ব্রাউজার জাভাস্ক্রিপ্ট দ্বারা রিড করা যায় না, ফলে ক্ষতিকর কোড (XSS) ওয়েবসাইট হ্যাক করতে পারে না।",
        en: "HTTP-only flags hide cookies from JavaScript engines, neutralizing XSS hijacking attempts.",
      },
    },
    {
      id: "auth-q4",
      question: {
        bn: "রিফ্রেশ টোকেন (Refresh Token)-এর প্রধান দায়িত্ব কী?",
        en: "What is the primary function of a Refresh Token?",
      },
      options: [
        { bn: "ইউজারের পাসওয়ার্ড পরিবর্তন করা", en: "Modifying user passwords" },
        { bn: "অ্যাক্সেস টোকেন মেয়াদোত্তীর্ণ হলে ইউজার রি-লগইন ছাড়া নতুন অ্যাক্সেস টোকেন ইস্যু করা", en: "Generating a new Access Token automatically when the old one expires without forcing re-logins" },
        { bn: "ডাটাবেজের স্কিমা ফাইল আপডেট করা", en: "Altering database schema definitions" },
        { bn: "সিপিইউ ফ্যান অফ করা", en: "Stopping CPU hardware fans" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "রিফ্রেশ টোকেন শর্ট-লাইফ এক্সেস টোকেন এক্সপায়ার হলে ইউজারকে বিরক্ত না করে ব্যাকগ্রাউন্ডে নতুন টোকেন তৈরি করে দেয়।",
        en: "Refresh tokens extend user sessions silently by renewing expired access tokens.",
      },
    },
    {
      id: "auth-q5",
      question: {
        bn: "Better Auth বা NextAuth-এর মতো মডার্ন অথেন্টিকেশন লাইব্রেরি ব্যবহারের বড় সুবিধা কোনটি?",
        en: "What is a major benefit of using modern auth frameworks like NextAuth or Better Auth?",
      },
      options: [
        { bn: "ইউজার ইন্টারফেস সম্পূর্ণ ডিলিট করা", en: "Deleting user interfaces entirely" },
        { bn: "নিজে জটিল সিকিউরিটি কোড না লিখে তৈরি ও প্রুভেন সিকিউরড সিস্টেম ও ও-অথ সোশ্যাল লগইন ব্যবহার করা", en: "Leveraging proven, pre-built security architectures and ready-to-use OAuth social logins" },
        { bn: "ডাটাবেজের রিলেশন বাদ দেওয়া", en: "Eliminating database relational links" },
        { bn: "ডিজাইন ফাইল জেনারেট করা", en: "Generating layout design assets" },
      ],
      correctAnswerIndex: 1,
      explanation: {
        bn: "এই লাইব্রেরিগুলো রেডিমেড সেশন ভ্যালিডেশন, কুকি প্রোটোকল ও সোশ্যাল লগইন প্রদান করায় ডেভেলপমেন্ট দ্রুত ও নিরাপদ হয়।",
        en: "Auth frameworks deploy standardized session managers and social login configurations safely out-of-the-box.",
      },
    },
  ],
  practice: [
    {
      bn: "১. কেন জেডাব্লিউটি (JWT) টোকেন ক্লায়েন্ট-সাইড \`localStorage\`-এ রাখা অত্যন্ত অনিরাপদ তা সংক্ষেপে ব্যাখ্যা করুন।",
      en: "1. Outline why storing JWT access keys in browser localStorage exposes apps to XSS attacks.",
    },
    {
      bn: "২. রিফ্রেশ টোকেন ব্যবহারের সময় কেন সেটির মেয়াদ এক্সেস টোকেনের চেয়ে অনেক বেশি (যেমন ৭ দিন) রাখা হয়?",
      en: "2. Argue why refresh tokens require longer expiration lifetimes compared to primary access tokens.",
    },
    {
      bn: "৩. মডার্ন অথেনটিকেশন ফ্রেমওয়ার্ক (Better Auth) ব্যবহারে কাস্টম এপিআই ডিজাইনের চেয়ে কী কী প্রোডাকশন সুবিধা পাওয়া যায়?",
      en: "3. Detail the production benefits of outsourcing session handling to Better Auth instead of coding custom controllers.",
    },
  ],
  assignment: {
    title: {
      bn: "এক্সপ্রেস-মঙ্গুজ রেজিস্টার ও লগইন এপিআই সিস্টেম",
      en: "Secure Express-Mongoose Signup & Login Auth Gateway",
    },
    description: {
      bn: "এক্সপ্রেস জেএস ও মঙ্গুজ মডেল ব্যবহার করে একটি সম্পূর্ণ সাইনআপ ও লগইন এপিআই ব্যাকএন্ড সিস্টেম তৈরি করুন। ইউজার সাইনআপ করলে পাসওয়ার্ডটি অবশ্যই \`bcrypt\` দিয়ে হ্যাশ করে সেভ করবেন। লগইন করার সময় পাসওয়ার্ড চেক করে সফল হলে একটি ১৫ মিনিট মেয়াদের JWT অ্যাক্সেস টোকেন রেসপন্সে রিটার্ন করুন।",
      en: "Develop a secure auth backend router in Express.js. Configure a Schema enforcing unique emails. On user signup, hash passwords using bcrypt. On login, verify hashed credentials, issuing a 15-minute JWT Access Token on success.",
    },
    starterCode: `// Secure Auth Server
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const JWT_SECRET = "test_secret_key";

// ১. ডাটাবেজ মডেল (ইউনিক ইমেল ভ্যালিডেশন সহ)

// ২. SIGNUP রাউট (POST /api/auth/signup)

// ৩. LOGIN রাউট (POST /api/auth/login)
`,
    solution: {
      code: `// Secure Auth Server Solution
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5000;
const JWT_SECRET = "production_secure_token_secret_key";

app.use(cors());
app.use(express.json());

// ১. ডাটাবেজ মডেল
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// ২. SIGNUP রাউট
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "ইমেইল ও পাসওয়ার্ড দুটিই দিতে হবে!" });
    }

    // পাসওয়ার্ড হ্যাশ করা (১০ রাউন্ড)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ success: true, message: "নিবন্ধন সফল হয়েছে!" });
  } catch (err) {
    res.status(400).json({ error: "ইমেইলটি ইতিমধ্যে ব্যবহার করা হয়েছে!" });
  }
});

// ৩. LOGIN রাউট
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "ভুল ইমেল বা পাসওয়ার্ড!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "ভুল ইমেল বা পাসওয়ার্ড!" });
    }

    // ১৫ মিনিট মেয়াদের টোকেন জেনারেট
    const token = jwt.sign(
      { userId: user._id, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: '15m' }
    );

    res.json({ token, message: "লগইন সফল!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(\`Auth Gateway Server is listening on port \${PORT}\`);
});`,
      explanation: {
        bn: "দারুণ সিকিউরড গেটওয়ে! পাসওয়ার্ড হ্যাশ সেভিং এবং এক্সপ্রেস মেম্বার চেক সিকোয়েন্স ইমপ্লিমেন্টেশন শতভাগ সঠিক হয়েছে।",
        en: "Excellent secure coding! Encrypting user passwords using bcrypt salt generators next to generating JSON Web Tokens with tight expirations (15m) aligns with production standards.",
      },
    },
  },
  interviewQuestions: [
    {
      question: {
        bn: "XSS (Cross-Site Scripting) আক্রমণ বলতে কী বোঝায় এবং কুকিজের \`httpOnly\` ফ্ল্যাগটি কীভাবে এই আক্রমণ থেকে সেশন টোকেনকে রক্ষা করে?",
        en: "Explain XSS (Cross-Site Scripting) attacks and how cookie 'httpOnly' flags block session token hijackings.",
      },
      answer: {
        bn: "XSS আক্রমণ এবং httpOnly কুকিজের নিরাপত্তা মেকানিজম নিচে ব্যাখ্যা করা হলো:\n১. XSS (ক্রস-সাইট স্ক্রিপ্টিং): হ্যাকার যখন কোনো সাইটের ইনপুট বক্স বা স্ক্রিপ্ট ইঞ্জেকশনের মাধ্যমে ওয়েবসাইটে ক্ষতিকর জাভাস্ক্রিপ্ট কোড রান করায়। ওই কোডটি সহজে ইউজারের ব্রাউজার ক্যাশে অ্যাক্সেস করে \`document.cookie\` বা \`localStorage.getItem()\` স্ক্রিপ্ট দিয়ে টোকেন চুরি করে হ্যাকারের সার্ভারে পাঠিয়ে দিতে পারে।\n২. httpOnly প্রটেকশন: কুকি সেভ করার সময় আমরা যদি কুকি হেডারে \`httpOnly=true\` ফ্ল্যাগটি সেট করে দেই, তবে ব্রাউজার সেই কুকির চাবিকে জাভাস্ক্রিপ্ট রুট (\`document.cookie\`) থেকে সম্পূর্ণ ডিসকানেক্ট বা হাইড করে ফেলে।\n৩. ফলাফল: জাভাস্ক্রিপ্ট রান করলেও ব্রাউজার কোনো কুকি ডাটা কোডে রিড করতে দেয় না। কুকিটি কেবল নেটওয়ার্ক রিকোয়েস্টের (HTTP Request Headers) সাথে সার্ভারে পাঠানো যায়। ফলে হ্যাকারের স্ক্রিপ্ট সাইটে ঢুকলেও টোকেন চুরি করা তার পক্ষে অসম্ভব হয়ে যায়।",
        en: "XSS attacks and HTTP-Only protections represent core browser security layers:\n1. XSS (Cross-Site Scripting): Occurs when dynamic inputs permit injection of malicious JavaScript scripts onto a web page. This code executes in the client's browser context, reading storage strings like `localStorage.getItem()` or `document.cookie` to hijack sessions.\n2. HTTP-Only Isolation: By tagging headers with `httpOnly=true`, servers instruct browsers to block JavaScript APIs from reading the cookie value.\n3. Protection Result: Even if XSS scripts run on client viewports, queries reading `document.cookie` return blank strings. The browser only attaches the cookie automatically to outgoing HTTP request headers, ensuring token safety."
      },
    },
    {
      question: {
        bn: "জেডাব্লিউটি (JWT) টোকেন স্ট্রাকচারের ভেতরের হেডার (Header), পে-লোড (Payload) এবং সিগনেচার (Signature) অংশগুলোর পৃথক কাজ ও গুরুত্ব কী?",
        en: "What are the roles of the Header, Payload, and Signature segments in a JSON Web Token?",
      },
      answer: {
        bn: "JWT টোকেনের ৩টি অংশের পৃথক গুরুত্ব নিম্নরূপ:\n১. হেডার (Header): এটি সাধারণত বেস৬৪ (Base64) এনকোডেড JSON ফাইল যা নির্দেশ করে টোকেনটি কী ধরণের (যেমন: JWT) এবং সিগনেচার তৈরিতে কোন হ্যাশিং বা সিগনেচার মেথড (যেমন: HS256, RS256) ব্যবহার করা হয়েছে।\n২. পে-লোড (Payload): টোকেনের মূল তথ্য ধারণকারী বডি (Claims)। এতে ইউজারের আইডি, নাম বা রোল সেভ থাকে। মনে রাখতে হবে, পে-লোড অংশটি কেবল এনকোড করা থাকে, এনক্রিপ্ট নয়। অর্থাৎ যে কেউ বেস৬৪ ডিকোড করে ডাটা দেখতে পারে। তাই পে-লোডে পাসওয়ার্ড রাখা দণ্ডনীয় অপরাধ!\n৩. সিগনেচার (Signature): এটি টোকেনের সবচেয়ে গুরুত্বপূর্ণ অংশ। হেডার ও পে-লোডের স্ট্রিং নিয়ে সার্ভারের গোপন চাবি (Secret Key) দিয়ে এনক্রিপ্ট করে এটি তৈরি হয়। সিগনেচারের কাজ হলো প্রমাণ করা যে টোকেনটি হ্যাকার দ্বারা পরিবর্তিত হয়নি। হ্যাকার পে-লোডে কিছু চেঞ্জ করলেই সার্ভারে সিগনেচার ভেরিফিকেশন ফেইল করবে এবং এপিআই রিকোয়েস্ট রিজেক্ট হবে।",
        en: "A JWT is partitioned into three dot-separated Base64URL-encoded strings:\n1. Header: Identifies metadata properties, declaring token formats (JWT) and cryptographic signing algorithms (e.g. HS256 or RS256).\n2. Payload: Holds claim declarations (e.g., user ID, roles, authorization scopes). Since Base64 strings can be decoded by anyone, never store private keys, plain text passwords, or credentials inside payloads.\n3. Signature: The security anchor. Generated by hashing the encoded Header and Payload together with a server secret key. During API requests, Express recalculates checksum hashes; if payload fields have been altered, validation fails and requests are blocked."
      },
    },
  ],
};
