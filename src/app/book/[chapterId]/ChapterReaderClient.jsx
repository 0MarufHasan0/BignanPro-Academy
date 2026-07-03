"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
  BrainCircuit,
} from "lucide-react";
import { chaptersList } from "@/config/chapters";
import { useLanguage } from "@/providers/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { CodeBlock } from "@/components/book/CodeBlock";
import { QuizCard } from "@/components/book/QuizCard";
import { AIMentor } from "@/components/book/AIMentor";
import { AssignmentCard } from "@/components/book/AssignmentCard";
import { SolutionCard } from "@/components/book/SolutionCard";
import { InterviewCard } from "@/components/book/InterviewCard";
import { RoadmapSection } from "@/components/book/RoadmapSection";

export function ChapterReaderClient({ chapter }) {
  const { language, localize } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Load and sync bookmark state
  useEffect(() => {
    const savedBookmarks = JSON.parse(
      localStorage.getItem("bignanpro-bookmarks") || "[]",
    );
    setIsBookmarked(savedBookmarks.includes(chapter.id));
  }, [chapter.id]);

  // Auto-mark chapter as read/completed on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCompleted = JSON.parse(
        localStorage.getItem("bignanpro-completed") || "[]",
      );
      if (!savedCompleted.includes(chapter.id)) {
        const newCompleted = [...savedCompleted, chapter.id];
        localStorage.setItem(
          "bignanpro-completed",
          JSON.stringify(newCompleted),
        );
      }
    }
  }, [chapter.id]);

  const toggleBookmark = () => {
    const savedBookmarks = JSON.parse(
      localStorage.getItem("bignanpro-bookmarks") || "[]",
    );
    let newBookmarks = [];
    if (savedBookmarks.includes(chapter.id)) {
      newBookmarks = savedBookmarks.filter((id) => id !== chapter.id);
      setIsBookmarked(false);
    } else {
      newBookmarks = [...savedBookmarks, chapter.id];
      setIsBookmarked(true);
    }
    localStorage.setItem("bignanpro-bookmarks", JSON.stringify(newBookmarks));
  };

  // Get index of active chapter for prev/next buttons
  const currentIndex = chaptersList.findIndex((ch) => ch.id === chapter.id);
  const prevChapter = currentIndex > 0 ? chaptersList[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < chaptersList.length - 1
      ? chaptersList[currentIndex + 1]
      : null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation bar */}
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        showSidebarButton={true}
      />

      <div className="flex flex-1 max-w-7xl w-full mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Table of contents Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Reading Main Content Pane */}
        <main className="flex-1 min-w-0 py-8 lg:pl-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground select-none mb-6">
            <Link
              href="/book"
              className="hover:text-primary transition-colors font-medium"
            >
              {language === "bn" ? "বইয়ের সূচী" : "Book Index"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-foreground">
              {language === "bn"
                ? `অধ্যায় ${chapter.number}`
                : `Chapter ${chapter.number}`}
            </span>
          </nav>

          {/* Chapter Hero Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-secondary/20 to-accent/5 p-6 sm:p-8 mb-10 shadow-sm transition-all duration-300">
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary px-2.5 py-1 rounded-full bg-primary/10 mb-4 select-none">
                  {language === "bn"
                    ? `অধ্যায় ${chapter.number}`
                    : `Chapter ${chapter.number}`}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
                  {localize(chapter.title).replace(
                    /^(অধ্যায় \d+: |Chapter \d+: )/,
                    "",
                  )}
                </h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
                  {localize(chapter.description)}
                </p>
              </div>

              {/* Bookmark Toggler */}
              <button
                onClick={toggleBookmark}
                className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                  isBookmarked
                    ? "bg-primary border-primary text-primary-foreground shadow"
                    : "hover:bg-secondary bg-background border-border/60 text-muted-foreground hover:text-foreground"
                }`}
                title={isBookmarked ? "Bookmarked!" : "Bookmark Chapter"}
                aria-label="Bookmark Chapter"
                id="bookmark-chapter-btn"
              >
                {isBookmarked ? (
                  <BookmarkCheck className="w-5 h-5" />
                ) : (
                  <Bookmark className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Reading Details Grid */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8 mt-8 border-t border-border/20 pt-6 text-xs sm:text-sm font-semibold select-none">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-muted-foreground">
                  {language === "bn" ? "কঠিনতা:" : "Difficulty:"}
                </span>
                <span className="capitalize text-primary font-bold">
                  {language === "bn"
                    ? chapter.difficulty === "beginner"
                      ? "শিক্ষানবিশ"
                      : chapter.difficulty === "intermediate"
                        ? "মধ্যম"
                        : "উন্নত"
                    : chapter.difficulty}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-muted-foreground">
                  {language === "bn" ? "পড়ার সময়:" : "Reading Time:"}
                </span>
                <span className="text-foreground font-bold">
                  {chapter.readingTime} {language === "bn" ? "মিনিট" : "mins"}
                </span>
              </div>
            </div>
          </div>

          {/* Learning Objectives Callout Box */}
          <div className="my-8 p-5 rounded-2xl border border-border/60 bg-secondary/20">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2 select-none">
              <BrainCircuit className="w-4 h-4 text-primary" />
              {language === "bn"
                ? "এই অধ্যায় থেকে যা শিখবেন"
                : "Learning Objectives"}
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              {chapter.objectives.map((obj, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs select-none shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="opacity-90">{localize(obj)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chapter Body Content sections */}
          <div className="space-y-12">
            {chapter.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-20">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b border-border/30 pb-2 mb-4">
                  {localize(sec.title)}
                </h2>

                {/* Text Content */}
                <div className="text-sm md:text-base leading-relaxed opacity-95 whitespace-pre-line space-y-4 font-normal">
                  {localize(sec.content)}
                </div>

                {/* Code Block if exists */}
                {sec.codeBlock && <CodeBlock data={sec.codeBlock} />}

                {/* Inject RoadmapSection specifically on the roadmap section for Chapter 1 */}
                {sec.id === "career-roadmap-learning" &&
                  chapter.id === "chapter-1" && <RoadmapSection />}

                {/* AI Mentor Insights if exists */}
                {sec.aiMentorNotes && <AIMentor notes={sec.aiMentorNotes} />}
              </section>
            ))}
          </div>

          {/* Practice Questions */}
          {chapter.practice.length > 0 && (
            <section className="mt-16 border-t border-border/40 pt-10">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6">
                {language === "bn"
                  ? "📝 নিজে নিজে অনুশীলন"
                  : "📝 Practice Exercises"}
              </h2>
              <div className="grid gap-4">
                {chapter.practice.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-border bg-card hover:bg-secondary/10 transition-colors flex gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none">
                      {idx + 1}
                    </span>
                    <p className="text-sm md:text-base leading-relaxed opacity-95">
                      {localize(item)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Quiz Cards */}
          {chapter.quizzes.length > 0 && (
            <section className="mt-16 border-t border-border/40 pt-10">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6">
                {language === "bn"
                  ? "⚡ আপনার মেধা যাচাই"
                  : "⚡ Knowledge Check"}
              </h2>
              {chapter.quizzes.map((quiz, i) => (
                <QuizCard key={quiz.id} quiz={quiz} index={i} />
              ))}
            </section>
          )}

          {/* Assignment challenges */}
          <section className="mt-16 border-t border-border/40 pt-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6">
              {language === "bn" ? "🏆 ল্যাব এসাইনমেন্ট" : "🏆 Lab Assignment"}
            </h2>
            <AssignmentCard assignment={chapter.assignment} />
            <SolutionCard solution={chapter.assignment.solution} />
          </section>

          {/* Job Prep Interview questions */}
          {chapter.interviewQuestions.length > 0 && (
            <section className="mt-16 border-t border-border/40 pt-10">
              <InterviewCard questions={chapter.interviewQuestions} />
            </section>
          )}

          {/* Previous / Next Chapter navigation controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 border-t border-border/40 pt-8 select-none">
            {prevChapter ? (
              <Link
                href={`/book/${prevChapter.id}`}
                className="w-full sm:w-auto flex items-center gap-3 p-4 border border-border/60 rounded-xl hover:bg-secondary transition-colors"
                id="prev-chapter-nav"
              >
                <ChevronLeft className="w-5 h-5 text-primary shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] text-muted-foreground uppercase font-bold">
                    {language === "bn"
                      ? "পূর্ববর্তী অধ্যায়"
                      : "Previous Chapter"}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {localize(prevChapter.title).replace(
                      /^(অধ্যায় \d+: |Chapter \d+: )/,
                      "",
                    )}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextChapter ? (
              <Link
                href={`/book/${nextChapter.id}`}
                className="w-full sm:w-auto flex items-center gap-3 p-4 border border-primary/20 rounded-xl hover:bg-primary/5 transition-all text-right justify-end"
                id="next-chapter-nav"
              >
                <div className="text-right">
                  <span className="block text-[10px] text-primary uppercase font-bold">
                    {language === "bn" ? "পরবর্তী অধ্যায়" : "Next Chapter"}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {localize(nextChapter.title).replace(
                      /^(অধ্যায় \d+: |Chapter \d+: )/,
                      "",
                    )}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-primary shrink-0" />
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </main>
      </div>

      {/* Global page footer */}
      <Footer />
    </div>
  );
}
