"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { CodeBlockData } from "@/types";
import { useLanguage } from "@/providers/LanguageProvider";

interface CodeBlockProps {
  data: CodeBlockData;
}

export function CodeBlock({ data }: CodeBlockProps) {
  const { code, language, fileName, explanations = [] } = data;
  const { localize, language: currentLang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeLine, setActiveLine] = useState<number | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const lines = code.trim().split("\n");

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border/80 bg-code-bg shadow-md transition-all duration-300">
      {/* Code Header */}
      <div className="flex items-center justify-between border-b border-border/50 bg-secondary px-4 py-2 text-xs font-mono select-none">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="w-4 h-4 text-primary" />
          <span>{fileName}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="uppercase tracking-wider text-muted-foreground px-1.5 py-0.5 rounded bg-background/50 border border-border/30">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 hover:text-foreground text-muted-foreground transition-colors py-0.5 px-1.5 rounded hover:bg-background/80"
            title="Copy Code"
            aria-label="Copy Code"
            id={`copy-btn-${fileName.replace(/\./g, "-")}`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[10px] text-emerald-500 font-semibold">
                  {currentLang === "bn" ? "কপি হয়েছে" : "Copied"}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[10px]">{currentLang === "bn" ? "কপি" : "Copy"}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="relative flex overflow-x-auto font-mono text-sm leading-relaxed p-4 select-text">
        {/* Line Numbers */}
        <div className="flex flex-col text-right text-muted-foreground/40 pr-4 border-r border-border/30 select-none text-xs w-8">
          {lines.map((_, i) => (
            <span key={i} className="h-6">
              {i + 1}
            </span>
          ))}
        </div>

        {/* Code Content */}
        <div className="flex-1 pl-4 text-xs md:text-sm font-mono whitespace-pre text-foreground">
          {lines.map((line, i) => {
            const lineNum = i + 1;
            const hasExplanation = explanations.some((e) => e.line === lineNum);
            const isActive = activeLine === lineNum;

            return (
              <div
                key={i}
                onClick={() => hasExplanation && setActiveLine(isActive ? null : lineNum)}
                className={`h-6 px-1.5 -mx-1.5 rounded transition-colors group relative ${
                  hasExplanation ? "cursor-pointer hover:bg-primary/10 border-l-2 border-dashed border-primary/45" : ""
                } ${isActive ? "bg-primary/20 border-l-2 border-solid border-primary" : ""}`}
              >
                <span>{line || " "}</span>
                
                {hasExplanation && !isActive && (
                  <span className="absolute right-2 top-0.5 text-[9px] px-1 rounded bg-primary/20 text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity select-none">
                    {currentLang === "bn" ? "ব্যাখ্যা" : "Explain"}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Explanations Display */}
      {explanations.length > 0 && (
        <div className="border-t border-border/50 bg-secondary/30 p-4 text-sm leading-relaxed">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">
              {currentLang === "bn" ? "লাইনভিত্তিক কোড বিশ্লেষণ" : "Line-by-Line Code Breakdown"}
            </span>
            {activeLine && (
              <button
                onClick={() => setActiveLine(null)}
                className="text-xs text-primary hover:underline font-semibold"
              >
                {currentLang === "bn" ? "সব দেখাও" : "Show All"}
              </button>
            )}
          </div>

          <div className="space-y-3 mt-2">
            {explanations.map((exp, idx) => {
              const isSelected = activeLine === exp.line;
              const isAnySelected = activeLine !== null;

              if (isAnySelected && !isSelected) return null;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveLine(exp.line)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-background border-primary shadow-sm"
                      : "bg-background/40 hover:bg-background/80 border-border/60"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary text-primary-foreground font-bold">
                      {currentLang === "bn" ? `লাইন ${exp.line}` : `Line ${exp.line}`}
                    </span>
                  </div>
                  <p className="text-sm opacity-90">{localize(exp.text)}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
