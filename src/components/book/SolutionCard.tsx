"use client";

import React, { useState } from "react";
import { Eye, EyeOff, CheckCircle, Lightbulb } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

interface SolutionCardProps {
  solution: {
    code: string;
    explanation: { bn: string; en: string };
  };
}

export function SolutionCard({ solution }: SolutionCardProps) {
  const { code, explanation } = solution;
  const { localize, language: currentLang } = useLanguage();
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="my-6 border border-emerald-500/30 rounded-2xl bg-card overflow-hidden shadow-sm">
      <div className="bg-emerald-500/5 px-6 py-4 border-b border-emerald-500/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-md font-bold text-emerald-800 dark:text-emerald-300">
              {currentLang === "bn" ? "প্রজেক্ট সমাধান" : "Project Solution"}
            </h3>
            <p className="text-xs text-emerald-600 dark:text-emerald-400">
              {currentLang === "bn"
                ? "এসাইনমেন্টের অফিশিয়াল রেফারেন্স সলিউশন"
                : "Official reference implementation"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setRevealed(!revealed)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
            revealed
              ? "bg-secondary border-border/80 text-foreground"
              : "bg-emerald-500 border-emerald-600 text-white hover:bg-emerald-600"
          } cursor-pointer active:scale-95`}
          id="reveal-solution-btn"
        >
          {revealed ? (
            <>
              <EyeOff className="w-3.5 h-3.5" />
              {currentLang === "bn" ? "লুকাও" : "Hide Solution"}
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5" />
              {currentLang === "bn" ? "সমাধান দেখো" : "Reveal Solution"}
            </>
          )}
        </button>
      </div>

      {revealed ? (
        <div className="p-6 space-y-6">
          <div>
            <span className="text-xs font-mono font-semibold text-muted-foreground block mb-2">
              {currentLang === "bn" ? "💻 সলিউশন কোড" : "💻 Solution Code"}
            </span>
            <pre className="p-4 rounded-xl bg-code-bg text-code-text font-mono text-xs md:text-sm overflow-x-auto border border-border/40 select-text">
              <code>{code}</code>
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-secondary/30 border border-border/40 text-sm leading-relaxed">
            <div className="flex items-center gap-1.5 mb-2 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-emerald-500" />
              {currentLang === "bn" ? "সলিউশন কোড বিশ্লেষণ" : "Solution Explanation"}
            </div>
            <p className="opacity-95">{localize(explanation)}</p>
          </div>
        </div>
      ) : (
        <div className="py-12 px-6 flex flex-col items-center justify-center text-center space-y-3 bg-secondary/10">
          <Eye className="w-10 h-10 text-muted-foreground/40" />
          <h4 className="text-sm font-semibold opacity-90">
            {currentLang === "bn"
              ? "প্রথমে প্রজেক্টটি নিজে করার চেষ্টা করুন!"
              : "Try to solve the assignment yourself first!"}
          </h4>
          <p className="text-xs text-muted-foreground max-w-sm">
            {currentLang === "bn"
              ? "কঠিন মনে হলে বা নিজের উত্তরের সাথে মেলাতে সমাধান বোতামে চাপুন।"
              : "If you get stuck or want to compare your implementation, click the button above."}
          </p>
        </div>
      )}
    </div>
  );
}
