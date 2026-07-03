"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export function InterviewCard({ questions }) {
  const { localize, language: currentLang } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (questions.length === 0) return null;

  return (
    <div className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold">
          {currentLang === "bn"
            ? "চাকরির ইন্টারভিউ প্রস্তুতি"
            : "Job Interview Preparation"}
        </h3>
      </div>

      <div className="space-y-3">
        {questions.map((item, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className={`border border-border/80 rounded-xl bg-card transition-all ${
                isExpanded
                  ? "ring-1 ring-primary/25 shadow-sm"
                  : "hover:bg-secondary/20"
              }`}
            >
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="w-full flex items-start justify-between p-4 text-left font-medium text-sm md:text-base leading-relaxed cursor-pointer"
                id={`interview-q-btn-${idx}`}
              >
                <div className="flex gap-3">
                  <span className="text-xs font-mono font-bold bg-secondary border border-border/60 text-muted-foreground w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    Q
                  </span>
                  <span className="font-semibold text-sm md:text-md">
                    {localize(item.question)}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 mt-1 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-border/30 text-xs md:text-sm leading-relaxed text-foreground/90 bg-secondary/10 rounded-b-xl flex gap-3">
                  <span className="text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    A
                  </span>
                  <div className="flex-1 whitespace-pre-line pt-0.5">
                    {localize(item.answer)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
