"use client";

import React, { useState } from "react";
import { ClipboardList, Code2, ArrowRight } from "lucide-react";
import { Assignment } from "@/types";
import { useLanguage } from "@/providers/LanguageProvider";

interface AssignmentCardProps {
  assignment: Assignment;
}

export function AssignmentCard({ assignment }: AssignmentCardProps) {
  const { title, description, starterCode } = assignment;
  const { localize, language: currentLang } = useLanguage();
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="my-8 border-2 border-primary/20 rounded-2xl bg-card overflow-hidden shadow-sm">
      <div className="bg-primary/5 px-6 py-4 border-b border-border/40 flex items-center gap-3">
        <div className="p-2 bg-primary/10 text-primary rounded-xl">
          <ClipboardList className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-md font-bold">
            {currentLang === "bn" ? "এসাইনমেন্ট প্রজেক্ট" : "Assignment Project"}
          </h3>
          <p className="text-xs text-muted-foreground">
            {localize(title)}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="text-sm md:text-base leading-relaxed opacity-95 mb-6 whitespace-pre-line">
          {localize(description)}
        </div>

        {starterCode && (
          <div className="mt-4">
            <span className="text-xs font-mono font-semibold text-muted-foreground block mb-2">
              {currentLang === "bn" ? "📂 স্টার্টার কোড (Starter Code)" : "📂 Starter Code"}
            </span>
            <pre className="p-4 rounded-xl bg-code-bg text-code-text font-mono text-xs md:text-sm overflow-x-auto border border-border/40">
              <code>{starterCode}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
