"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Lightbulb,
  UserCheck,
  ShieldAlert,
  Bug,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export function AIMentor({ notes }) {
  const { localize, language: currentLang } = useLanguage();
  const [openSection, setOpenSection] = useState("whyExists");

  if (!notes) return null;

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sectionsList = [
    {
      id: "whyExists",
      icon: <Brain className="w-4 h-4 text-indigo-500" />,
      title: {
        bn: "ধারণাটি কেন প্রয়োজন? (Why it exists)",
        en: "Why this concept exists",
      },
      content: notes.whyExists,
    },
    {
      id: "whyWorks",
      icon: <Lightbulb className="w-4 h-4 text-amber-500" />,
      title: {
        bn: "কোডটি কীভাবে কাজ করছে? (Why it works)",
        en: "Why this code works",
      },
      content: notes.whyWorks,
    },
    {
      id: "professionalThinking",
      icon: <UserCheck className="w-4 h-4 text-emerald-500" />,
      title: {
        bn: "প্রফেশনালরা যেভাবে চিন্তা করেন (Pro Mindset)",
        en: "How professionals think",
      },
      content: notes.professionalThinking,
    },
    {
      id: "mistakes",
      icon: <ShieldAlert className="w-4 h-4 text-rose-500" />,
      title: {
        bn: "নতুনদের সাধারণ ভুলসমূহ (Common Mistakes)",
        en: "Common beginner mistakes",
      },
      content: notes.mistakes,
    },
    {
      id: "debugging",
      icon: <Bug className="w-4 h-4 text-cyan-500" />,
      title: {
        bn: "ডিবাগিং ও পারফরম্যান্স (Debugging & Perf)",
        en: "Debugging & Performance",
      },
      content: notes.debugging, // Combine debugging + performance into one clean tab
    },
  ];

  return (
    <div className="my-8 border border-primary/20 rounded-2xl bg-primary/5 p-5 shadow-sm transition-all duration-300">
      <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-primary/10">
        <div className="p-2 rounded-xl bg-primary/15 text-primary">
          <Brain className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-md font-bold tracking-tight">
            {currentLang === "bn"
              ? "🤖 এআই মেন্টর গাইডেন্স"
              : "🤖 AI Mentor Insights"}
          </h3>
          <p className="text-[11px] text-muted-foreground">
            {currentLang === "bn"
              ? "ধারণা গভীর করতে প্রফেশনাল গাইডেন্স"
              : "Deepen understanding with industry insights"}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {sectionsList.map((sec) => {
          const isOpen = openSection === sec.id;
          return (
            <div
              key={sec.id}
              className="border border-border/40 rounded-xl bg-background overflow-hidden transition-shadow duration-300"
            >
              <button
                onClick={() => toggleSection(sec.id)}
                className="w-full flex items-center justify-between p-3 text-left font-medium text-sm transition-colors hover:bg-secondary/40 select-none cursor-pointer"
                aria-expanded={isOpen}
                id={`ai-mentor-btn-${sec.id}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="shrink-0">{sec.icon}</div>
                  <span className="font-semibold text-xs md:text-sm tracking-wide">
                    {localize(sec.title)}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="p-4 border-t border-border/20 text-xs md:text-sm leading-relaxed opacity-95">
                      {localize(sec.content)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
