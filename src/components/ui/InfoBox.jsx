"use client";

import React from "react";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function InfoBox({ variant = "info", title, children }) {
  const configs = {
    info: {
      bg: "bg-blue-500/10 border-blue-500/30 text-blue-800 dark:text-blue-200",
      icon: <AlertCircle className="w-5 h-5 text-blue-500 shrink-0" />,
      defaultTitle: { bn: "তথ্য", en: "Info" },
    },
    warning: {
      bg: "bg-amber-500/10 border-amber-500/30 text-amber-800 dark:text-amber-200",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />,
      defaultTitle: { bn: "সতর্কতা", en: "Warning" },
    },
    success: {
      bg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-200",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
      defaultTitle: { bn: "সফল", en: "Success" },
    },
    tip: {
      bg: "bg-purple-500/10 border-purple-500/30 text-purple-800 dark:text-purple-200",
      icon: <Sparkles className="w-5 h-5 text-purple-500 shrink-0" />,
      defaultTitle: { bn: "পরামর্শ", en: "Tip" },
    },
  };

  const current = configs[variant];

  return (
    <div
      className={`my-6 flex gap-4 p-4 border rounded-xl ${current.bg} transition-all duration-200 shadow-sm`}
    >
      {current.icon}
      <div className="flex-1 space-y-1">
        {title && (
          <h4 className="font-semibold text-sm tracking-wide leading-none mb-1 opacity-90">
            {title}
          </h4>
        )}
        <div className="text-sm leading-relaxed font-normal opacity-95">
          {children}
        </div>
      </div>
    </div>
  );
}
