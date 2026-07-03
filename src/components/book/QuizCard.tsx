"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RefreshCw, AlertCircle } from "lucide-react";
import { QuizQuestion } from "@/types";
import { useLanguage } from "@/providers/LanguageProvider";

interface QuizCardProps {
  quiz: QuizQuestion;
  index: number;
}

export function QuizCard({ quiz, index }: QuizCardProps) {
  const { question, options, correctAnswerIndex, explanation } = quiz;
  const { localize, language: currentLang } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleOptionClick = (idx: number) => {
    if (submitted) return;
    setSelectedIdx(idx);
  };

  const handleSubmit = () => {
    if (selectedIdx === null) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedIdx(null);
    setSubmitted(false);
  };

  const isCorrect = selectedIdx === correctAnswerIndex;

  return (
    <div className="my-6 border border-border/80 rounded-2xl bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
          {currentLang === "bn" ? `কুইজ ${index + 1}` : `Quiz ${index + 1}`}
        </span>
        {submitted && (
          <span className={`flex items-center gap-1 text-xs font-bold ${isCorrect ? "text-emerald-500" : "text-destructive"}`}>
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                {currentLang === "bn" ? "সঠিক উত্তর!" : "Correct!"}
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" />
                {currentLang === "bn" ? "ভুল উত্তর!" : "Incorrect!"}
              </>
            )}
          </span>
        )}
      </div>

      <h3 className="text-lg font-medium mb-6 leading-relaxed">
        {localize(question)}
      </h3>

      <div className="space-y-3">
        {options.map((opt, idx) => {
          const isSelected = selectedIdx === idx;
          const isAnswer = idx === correctAnswerIndex;
          
          let optionStyle = "border-border/60 bg-background/50 hover:bg-secondary/40";
          if (isSelected) {
            optionStyle = "border-primary/80 bg-primary/5 ring-1 ring-primary/30";
          }
          if (submitted) {
            if (isAnswer) {
              optionStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 ring-1 ring-emerald-500/30";
            } else if (isSelected) {
              optionStyle = "border-destructive bg-destructive/10 text-destructive-foreground ring-1 ring-destructive/30";
            } else {
              optionStyle = "border-border/40 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              disabled={submitted}
              onClick={() => handleOptionClick(idx)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${optionStyle} ${
                !submitted ? "cursor-pointer active:scale-[0.99]" : "cursor-default"
              }`}
              id={`quiz-${quiz.id}-opt-${idx}`}
            >
              <span className="text-sm font-medium leading-relaxed">{localize(opt)}</span>
              <div className="shrink-0 ml-3">
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/80 bg-background"
                  }`}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end gap-3 select-none">
        {!submitted ? (
          <button
            disabled={selectedIdx === null}
            onClick={handleSubmit}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${
              selectedIdx === null
                ? "bg-secondary text-muted-foreground opacity-50 cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:bg-primary/95 cursor-pointer active:scale-95"
            }`}
            id={`quiz-submit-${quiz.id}`}
          >
            {currentLang === "bn" ? "উত্তর জমা দাও" : "Submit Answer"}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 border border-border/40 text-sm font-semibold transition-all active:scale-95 cursor-pointer"
            id={`quiz-reset-${quiz.id}`}
          >
            <RefreshCw className="w-4 h-4" />
            {currentLang === "bn" ? "আবার চেষ্টা করো" : "Try Again"}
          </button>
        )}
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-6 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-sm leading-relaxed">
              <div className="flex items-center gap-2 mb-2 text-emerald-800 dark:text-emerald-300 font-semibold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-emerald-500" />
                {currentLang === "bn" ? "বিশ্লেষণ ও ব্যাখ্যা" : "Explanation & Feedback"}
              </div>
              <p className="opacity-90">{localize(explanation)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
