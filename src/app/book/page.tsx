"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Zap, CheckCircle2, Bookmark, Flame } from "lucide-react";
import { chaptersList } from "@/config/chapters";
import { useLanguage } from "@/providers/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function BookIndexPage() {
  const { language, localize } = useLanguage();
  const [streak, setStreak] = useState(3);
  const [completedCount, setCompletedCount] = useState(0);
  const [bookmarksCount, setBookmarksCount] = useState(0);

  useEffect(() => {
    // Load local storage states if any
    const savedBookmarks = JSON.parse(localStorage.getItem("bignanpro-bookmarks") || "[]") as string[];
    setBookmarksCount(savedBookmarks.length);

    const savedCompleted = JSON.parse(localStorage.getItem("bignanpro-completed") || "[]") as string[];
    setCompletedCount(savedCompleted.length);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Book Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 select-none">
            <BookOpen className="w-3.5 h-3.5" />
            {language === "bn" ? "বিজ্ঞানপ্রো কোর্স বুক" : "BignanPro Interactive Book"}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {language === "bn" ? "ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট" : "Full Stack Web Development"}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            {language === "bn"
              ? "শূন্য থেকে প্রফেশনাল লেভেলে যাওয়ার সম্পূর্ণ গাইডবুক। এখানে প্রতিটি অধ্যায় সাজানো হয়েছে রিয়েল-লাইফ কোডিং এক্সপেরিয়েন্স এবং প্রজেক্টের সমন্বয়ে।"
              : "Go from absolute zero to a job-ready developer. Every chapter combines theoretical foundations with interactive coding and real-world projects."}
          </p>
        </div>

        {/* User Stats Board */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* Streak Card */}
          <div className="p-6 rounded-2xl border border-border/60 bg-card flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-2xl shrink-0">
              <Flame className="w-6 h-6 fill-amber-500" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {language === "bn" ? "লার্নিং streak" : "Learning Streak"}
              </span>
              <span className="text-xl font-bold font-mono">
                {streak} {language === "bn" ? "দিন" : "days"}
              </span>
            </div>
          </div>

          {/* Progress Card */}
          <div className="p-6 rounded-2xl border border-border/60 bg-card flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {language === "bn" ? "সম্পন্ন অধ্যায়" : "Completed Chapters"}
              </span>
              <span className="text-xl font-bold font-mono">
                {completedCount} / {chaptersList.length}
              </span>
            </div>
          </div>

          {/* Bookmarks Card */}
          <div className="p-6 rounded-2xl border border-border/60 bg-card flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-primary/10 text-primary rounded-2xl shrink-0">
              <Bookmark className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {language === "bn" ? "বুকমার্ক সংগ্রহ" : "Bookmarked Chapters"}
              </span>
              <span className="text-xl font-bold font-mono">
                {bookmarksCount} {language === "bn" ? "টি" : "items"}
              </span>
            </div>
          </div>
        </div>

        {/* Chapters Partitioning */}
        {(() => {
          const volume1Chapters = chaptersList.filter((ch) => ch.number <= 17);
          const volume2Chapters = chaptersList.filter((ch) => ch.number >= 18 && ch.number <= 30);
          const volume3Chapters = chaptersList.filter((ch) => ch.number >= 31 && ch.number <= 37);
          const volume4Chapters = chaptersList.filter((ch) => ch.number >= 38);

          const renderVolumeChapters = (chapters: typeof chaptersList, borderGradient: string) => (
            <div className="grid gap-6 md:grid-cols-2">
              {chapters.map((ch) => (
                <div
                  key={ch.id}
                  className="group flex flex-col justify-between p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${borderGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div>
                    <div className="flex items-center justify-between mb-4 text-xs font-bold select-none">
                      <span className="uppercase text-accent tracking-wider font-extrabold">
                        {language === "bn" ? `অধ্যায় ${ch.number}` : `Chapter ${ch.number}`}
                      </span>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                          {ch.readingTime} {language === "bn" ? "মিনিট" : "mins"}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary capitalize">
                          {language === "bn"
                            ? ch.difficulty === "beginner"
                              ? "সহজ"
                              : "কঠিন"
                            : ch.difficulty}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {localize(ch.title).replace(/^(অধ্যায় \d+: |Chapter \d+: )/, "")}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {localize(ch.description)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-auto select-none">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Zap className="w-3.5 h-3.5 text-primary" />
                      <span>{ch.sections.length} {language === "bn" ? "টি সেকশন" : "sections"}</span>
                    </div>
                    <Link
                      href={`/book/${ch.id}`}
                      className="flex items-center gap-1.5 text-sm font-bold text-primary group-hover:translate-x-1 transition-transform"
                      id={`start-reading-btn-${ch.id}`}
                    >
                      <span>{language === "bn" ? "পড়া শুরু করুন" : "Start Reading"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          );

          return (
            <div className="space-y-16">
              {/* Volume 1 Sections */}
              {volume1Chapters.length > 0 && (
                <div>
                  <div className="border-b border-border/30 pb-4 mb-8 flex justify-between items-end select-none">
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {language === "bn"
                        ? "📚 ভলিউম ১: প্রোগ্রামিংয়ের প্রস্তুতি ও ইন্টারনেট ইনফ্রাস্ট্রাকচার"
                        : "📚 Volume 1: Foundation & Internet Infrastructure"}
                    </h2>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {volume1Chapters.length} {language === "bn" ? "টি অধ্যায়" : "Chapters"}
                    </span>
                  </div>
                  {renderVolumeChapters(volume1Chapters, "from-primary to-accent")}
                </div>
              )}

              {/* Volume 2 Sections */}
              {volume2Chapters.length > 0 && (
                <div>
                  <div className="border-b border-border/30 pb-4 mb-8 flex justify-between items-end select-none">
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-accent via-indigo-500 to-primary bg-clip-text text-transparent">
                      {language === "bn"
                        ? "📚 ভলিউম ২: ফ্রন্টএন্ড কোডিং ও ইন্টারেক্টিভ ওয়েব"
                        : "📚 Volume 2: Frontend Engineering & Interactive Web"}
                    </h2>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {volume2Chapters.length} {language === "bn" ? "টি অধ্যায়" : "Chapters"}
                    </span>
                  </div>
                  {renderVolumeChapters(volume2Chapters, "from-accent to-primary")}
                </div>
              )}

              {/* Volume 3 Sections */}
              {volume3Chapters.length > 0 && (
                <div>
                  <div className="border-b border-border/30 pb-4 mb-8 flex justify-between items-end select-none">
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                      {language === "bn"
                        ? "📚 ভলিউম ৩: ব্যাকএন্ড সিস্টেম ও ডাটাবেজ ইন্টিগ্রেশন"
                        : "📚 Volume 3: Backend Systems & Database Integration"}
                    </h2>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {volume3Chapters.length} {language === "bn" ? "টি অধ্যায়" : "Chapters"}
                    </span>
                  </div>
                  {renderVolumeChapters(volume3Chapters, "from-emerald-500 to-teal-500")}
                </div>
              )}

              {/* Volume 4 Sections */}
              {volume4Chapters.length > 0 && (
                <div>
                  <div className="border-b border-border/30 pb-4 mb-8 flex justify-between items-end select-none">
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-650 bg-clip-text text-transparent">
                      {language === "bn"
                        ? "📚 ভলিউম ৪: অ্যাডভান্সড ব্যাকএন্ড আর্কিটেকচার ও অথেন্টিকেশন"
                        : "📚 Volume 4: Advanced Backend Architecture & Authentication"}
                    </h2>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {volume4Chapters.length} {language === "bn" ? "টি অধ্যায়" : "Chapters"}
                    </span>
                  </div>
                  {renderVolumeChapters(volume4Chapters, "from-indigo-600 to-violet-650")}
                </div>
              )}
            </div>
          );
        })()}
      </main>

      <Footer />
    </div>
  );
}
