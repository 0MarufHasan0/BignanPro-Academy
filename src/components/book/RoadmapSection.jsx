"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Code,
  Palette,
  Wind,
  Layers,
  Sparkles,
  ShieldCheck,
  Atom,
  Compass,
  Server,
  Database,
  Lock,
  Briefcase,
  Trophy,
  ChevronDown,
  Play,
} from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export function RoadmapSection() {
  const { language, localize } = useLanguage();
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: "foundation",
      icon: <Terminal className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-500",
      title: { bn: "১. ফাউন্ডেশন (Foundation)", en: "1. Foundation" },
      subtitle: {
        bn: "কম্পিউটার ও ইন্টারনেট বেসিক",
        en: "Computer & Internet Basics",
      },
      details: {
        bn: [
          "টার্মিনাল কমান্ড লাইন",
          "গিট ও গিটহাব",
          "কোড এডিটর (VS Code) সেটিংস",
        ],
        en: [
          "Terminal command lines",
          "Git & GitHub version control",
          "VS Code environment setup",
        ],
      },
    },
    {
      id: "html",
      icon: <Code className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      title: { bn: "২. এইচটিএমএল (HTML5)", en: "2. HTML5" },
      subtitle: {
        bn: "ওয়েবসাইটের কঙ্কাল বা কাঠামো",
        en: "Skeletal Structure of Web",
      },
      details: {
        bn: [
          "ট্যাগ এবং এলিমেন্ট",
          "ফরম ও ইনপুট",
          "সিম্যান্টিকস ও অ্যাক্সেসিবিলিটি",
        ],
        en: [
          "Tags and DOM elements",
          "Forms, tables, and inputs",
          "Semantic HTML & a11y basics",
        ],
      },
    },
    {
      id: "css",
      icon: <Palette className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-500",
      title: { bn: "৩. সিএসএস (CSS3)", en: "3. CSS3" },
      subtitle: { bn: "ডিজাইন, স্টাইল ও রঙ", en: "Styling & Visual Design" },
      details: {
        bn: [
          "ফ্লেক্সবক্স ও গ্রিড লেআউট",
          "মিডিয়া কোয়েরি ও রেসপন্সিভ ডিজাইন",
          "অ্যানিমেশন ও ট্রানজিশন",
        ],
        en: [
          "Flexbox and Grid systems",
          "Media Queries & responsiveness",
          "CSS Transitions & animations",
        ],
      },
    },
    {
      id: "tailwind",
      icon: <Wind className="w-5 h-5" />,
      color: "from-sky-400 to-cyan-500",
      title: {
        bn: "৪. টেইলউইন্ড সিএসএস (Tailwind CSS)",
        en: "4. Tailwind CSS",
      },
      subtitle: {
        bn: "রিয়েল-টাইম রানিং স্টাইলিং",
        en: "Rapid Utility-First Styling",
      },
      details: {
        bn: [
          "ইউটিলিটি ক্লাস ও শর্টকাট",
          "কাস্টম থিমিং",
          "রেসপন্সিভ গ্রিড ডিজাইন",
        ],
        en: [
          "Utility classes and shorthand",
          "Custom themes config",
          "Responsive layouts built fast",
        ],
      },
    },
    {
      id: "heroui",
      icon: <Layers className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      title: { bn: "৫. হিরো ইউআই (HeroUI)", en: "5. HeroUI Components" },
      subtitle: {
        bn: "প্রি-বিল্ট প্রিমিয়াম কম্পোনেন্ট",
        en: "Pre-built Premium Components",
      },
      details: {
        bn: [
          "রেডিমেড ইন্টারঅ্যাক্টিভ মডাল",
          "নেভিগেশন ও ফর্ম ইনপুটস",
          "স্মুথ থিম ইন্টিগ্রেশন",
        ],
        en: [
          "Interactive ready-to-use Modals",
          "Navigation shells and layouts",
          "Built-in dark mode switches",
        ],
      },
    },
    {
      id: "javascript",
      icon: <Sparkles className="w-5 h-5" />,
      color: "from-amber-400 to-orange-500",
      title: { bn: "৬. জাভাস্ক্রিপ্ট (JavaScript)", en: "6. JavaScript" },
      subtitle: {
        bn: "ওয়েবসাইটের প্রাণ এবং লজিক",
        en: "Programming Logic & Mechanics",
      },
      details: {
        bn: [
          "ভ্যারিয়েবল, লুপ ও ফাংশন",
          "ডম (DOM) ম্যানিপুলেশন",
          "অ্যাসিনক্রোনাস কলস ও এপিআই (API)",
        ],
        en: [
          "Variables, loops, and functions",
          "DOM manipulation & event listener",
          "Asynchronous calls and APIs",
        ],
      },
    },
    {
      id: "typescript",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "from-blue-600 to-sky-600",
      title: { bn: "৭. টাইপস্ক্রিপ্ট (TypeScript)", en: "7. TypeScript" },
      subtitle: { bn: "নিরাপদ ও বাগ-মুক্ত কোড", en: "Robust Typesafe Coding" },
      details: {
        bn: [
          "টাইপ ইন্টারফেস ও এনাম",
          "এরর হ্যান্ডলিং ও টাইপ ডিফেন্স",
          "স্কেলেবল কোডবেস",
        ],
        en: [
          "Type interfaces and custom types",
          "Static type checking & error prevention",
          "Scalable codebase structuring",
        ],
      },
    },
    {
      id: "react",
      icon: <Atom className="w-5 h-5" />,
      color: "from-sky-500 to-blue-600",
      title: { bn: "৮. রিঅ্যাক্ট (React)", en: "8. React.js" },
      subtitle: {
        bn: "কম্পোনেন্ট ভিত্তিক লাইব্রেরি",
        en: "Component-Driven SPA Builder",
      },
      details: {
        bn: [
          "স্টেট (State) ও প্রপস (Props)",
          "হুকস (useState, useEffect)",
          "রিউজেবল কম্পোনেন্ট তৈরি",
        ],
        en: [
          "State and props management",
          "Custom hooks lifecycle",
          "Building highly reusable components",
        ],
      },
    },
    {
      id: "nextjs",
      icon: <Compass className="w-5 h-5" />,
      color: "from-zinc-800 to-black dark:from-zinc-700 dark:to-zinc-900",
      title: { bn: "৯. নেক্সট জেএস (Next.js)", en: "9. Next.js" },
      subtitle: {
        bn: "পূর্ণাঙ্গ প্রোডাকশন ফ্রেমওয়ার্ক",
        en: "Full-Stack Server & Client",
      },
      details: {
        bn: [
          "সার্ভার কম্পোনেন্টস ও এসএসজি",
          "ডায়নামিক রাউটিং (App Router)",
          "সার্ভার অ্যাকশন ও অপ্টিমাইজেশন",
        ],
        en: [
          "Server Component architecture",
          "Dynamic App Router",
          "Server actions and optimization",
        ],
      },
    },
    {
      id: "backend",
      icon: <Server className="w-5 h-5" />,
      color: "from-green-600 to-emerald-600",
      title: {
        bn: "১০. ব্যাকএন্ড (Node & Express)",
        en: "10. Backend API Server",
      },
      subtitle: {
        bn: "সার্ভার ও এপিআই ইন্টিগ্রেশন",
        en: "API Routers & Middleware",
      },
      details: {
        bn: [
          "এক্সপ্রেস সার্ভার লাইফসাইকেল",
          "রিকোয়েস্ট ও রেসপন্স সাইকেল",
          "রেস্ট এপিআই (REST API) ডিজাইন",
        ],
        en: [
          "Express server lifecycle",
          "Request & response handling",
          "REST API architecture",
        ],
      },
    },
    {
      id: "database",
      icon: <Database className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-500",
      title: { bn: "১১. ডাটাবেজ (MongoDB)", en: "11. MongoDB & Mongoose" },
      subtitle: {
        bn: "স্থায়ীভাবে ডেটা বা তথ্য রাখা",
        en: "Persistent Database Storage",
      },
      details: {
        bn: [
          "মঙ্গুজ স্কিমা ও মডেলস",
          "ক্রাড (CRUD) ডেটা কুয়েরি",
          "রিলেশনাল রিলেশনশিপস",
        ],
        en: [
          "Mongoose schemas & models",
          "CRUD operations",
          "Relational mapping configurations",
        ],
      },
    },
    {
      id: "auth",
      icon: <Lock className="w-5 h-5" />,
      color: "from-rose-500 to-orange-500",
      title: {
        bn: "১২. অথেনটিকেশন (Better Auth)",
        en: "12. Authentication & Guard",
      },
      subtitle: {
        bn: "নিরাপত্তা ও ইউজার অ্যাকাউন্টস",
        en: "Login, Session & Security",
      },
      details: {
        bn: [
          "বেটার অথ ক্লায়েন্ট ও সার্ভার",
          "মিডলওয়্যার গার্ডস ও টোকেনস",
          "অ্যাক্সেস রোলস",
        ],
        en: [
          "Better Auth integration",
          "Middleware route protection",
          "OAuth & role configurations",
        ],
      },
    },
    {
      id: "projects",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-indigo-600 to-purple-600",
      title: {
        bn: "১৩. রিয়েল প্রজেক্টস (Real Projects)",
        en: "13. Capstone Projects",
      },
      subtitle: {
        bn: "পূর্ণাঙ্গ প্রজেক্ট ডেপ্লয়মেন্ট",
        en: "Production Apps Built end-to-end",
      },
      details: {
        bn: [
          "ভার্সেল ক্লাউড ও ভিপিএস হোস্টিং",
          "পূর্ণাঙ্গ লার্নিং প্ল্যাটফর্ম",
          "পোর্টফোলিও প্রোমোশন",
        ],
        en: [
          "Vercel and VPS cloud server hosting",
          "Complete LMS setup project",
          "Publishing developer portfolios",
        ],
      },
    },
    {
      id: "career",
      icon: <Trophy className="w-5 h-5" />,
      color: "from-yellow-500 to-amber-500",
      title: {
        bn: "১৪. ক্যারিয়ার (Career Ready)",
        en: "14. Career Acceleration",
      },
      subtitle: {
        bn: "ইন্টারভিউ ও রিমোট চাকরি",
        en: "Resume, Interview & Portfolio",
      },
      details: {
        bn: [
          "রেজুমে ও গিটহাব অপ্টিমাইজেশন",
          "কাল্পনিক ও টেকনিক্যাল ইন্টারভিউ",
          "রিমোট এবং ফ্রিল্যান্সিং গাইড",
        ],
        en: [
          "GitHub profile optimization",
          "Mock technical interviews",
          "Remote and freelancing guidance",
        ],
      },
    },
  ];

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl border border-border/80 bg-card/40 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="text-center max-w-2xl mx-auto mb-10 select-none">
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {language === "bn"
            ? "🚀 লার্নিং রোডম্যাপ (Roadmap)"
            : "🚀 Full Stack Roadmap"}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
          {language === "bn"
            ? "বিজ্ঞানপ্রো একাডেমির ধাপে ধাপে তৈরি কোর্স রোডম্যাপ। কার্ডগুলোতে ট্যাপ করে বিস্তারিত দেখুন।"
            : "Click on any phase to see the curriculum details and what you will master."}
        </p>
      </div>

      {/* Grid of Roadmap Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => {
          const isOpen = activeStep === step.id;
          return (
            <motion.div
              key={step.id}
              onClick={() => setActiveStep(isOpen ? null : step.id)}
              className={`p-5 rounded-2xl border text-left cursor-pointer transition-all ${
                isOpen
                  ? "bg-card border-primary ring-1 ring-primary/20 shadow-sm"
                  : "bg-card/50 hover:bg-secondary/40 border-border/60"
              }`}
              layout
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-r ${step.color} text-white shrink-0`}
                >
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm leading-tight truncate">
                    {localize(step.title)}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate leading-normal mt-0.5">
                    {localize(step.subtitle)}
                  </p>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-4 pt-4 border-t border-border/30"
                  >
                    <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-2 select-none">
                      {language === "bn" ? "যা যা শিখবেন:" : "Key Topics:"}
                    </span>
                    <ul className="space-y-1.5 text-xs text-foreground/90 font-medium">
                      {localize(step.details).map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Play className="w-2.5 h-2.5 text-primary shrink-0 fill-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
