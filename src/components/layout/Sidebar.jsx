"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Book, ChevronRight } from "lucide-react";
import { chaptersList } from "@/config/chapters";
import { useLanguage } from "@/providers/LanguageProvider";

export function Sidebar({ isOpen, onClose }) {
  const { language, localize } = useLanguage();
  const params = useParams();
  const pathname = usePathname();
  const activeChapterId = params?.chapterId;
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const savedCompleted = JSON.parse(
      localStorage.getItem("bignanpro-completed") || "[]",
    );
    setCompletedCount(savedCompleted.length);
  }, [pathname]);

  return (
    <>
      {/* Mobile Overlay backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-35 w-72 border-r border-border/40 bg-card overflow-y-auto p-5 transition-transform duration-300 lg:sticky lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6 select-none">
          {/* Header Title */}
          <div>
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider pl-2 mb-2">
              {language === "bn" ? "বইয়ের অধ্যায়সমূহ" : "Table of Contents"}
            </h2>
            <div className="h-px bg-border/40 my-2" />
          </div>

          {/* Chapters List */}
          {(() => {
            const volume1Chapters = chaptersList.filter(
              (ch) => ch.number <= 17,
            );
            const volume2Chapters = chaptersList.filter(
              (ch) => ch.number >= 18 && ch.number <= 30,
            );
            const volume3Chapters = chaptersList.filter(
              (ch) => ch.number >= 31 && ch.number <= 37,
            );
            const volume4Chapters = chaptersList.filter(
              (ch) => ch.number >= 38,
            );

            const renderChapterLink = (ch) => {
              const isActive = activeChapterId === ch.id;

              return (
                <div key={ch.id} className="space-y-1">
                  {/* Chapter Link Header */}
                  <Link
                    href={`/book/${ch.id}`}
                    onClick={onClose}
                    className={`group flex items-start gap-2.5 p-2 rounded-xl text-xs md:text-sm transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                        : "hover:bg-secondary text-foreground font-medium"
                    }`}
                  >
                    <Book className="w-4 h-4 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="block text-[10px] opacity-75 leading-none mb-1 uppercase font-bold">
                        {language === "bn"
                          ? `অধ্যায় ${ch.number}`
                          : `Chapter ${ch.number}`}
                      </span>
                      <span className="line-clamp-2 leading-tight">
                        {localize(ch.title).replace(
                          /^(অধ্যায় \d+: |Chapter \d+: )/,
                          "",
                        )}
                      </span>
                    </div>
                  </Link>

                  {/* Active Chapter Sections list */}
                  {isActive && ch.sections.length > 0 && (
                    <div className="ml-4 pl-4 border-l border-border/60 py-1 space-y-1">
                      {ch.sections.map((sec) => (
                        <a
                          key={sec.id}
                          href={`#${sec.id}`}
                          onClick={onClose}
                          className="block py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors truncate font-semibold pl-1"
                        >
                          <ChevronRight className="w-3 h-3 inline mr-1 text-primary/50" />
                          {localize(sec.title)}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            };

            return (
              <nav className="space-y-6">
                {/* Volume 1 */}
                {volume1Chapters.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider block pl-2">
                      {language === "bn"
                        ? "ভলিউম ১: ভিত্তি ও নেটওয়ার্কিং"
                        : "Volume 1: Foundations"}
                    </span>
                    <div className="space-y-2">
                      {volume1Chapters.map(renderChapterLink)}
                    </div>
                  </div>
                )}

                {/* Volume 2 */}
                {volume2Chapters.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-accent uppercase tracking-wider block pl-2">
                      {language === "bn"
                        ? "ভলিউম ২: ফ্রন্টএন্ড ও কোডিং"
                        : "Volume 2: Frontend & Logic"}
                    </span>
                    <div className="space-y-2">
                      {volume2Chapters.map(renderChapterLink)}
                    </div>
                  </div>
                )}

                {/* Volume 3 */}
                {volume3Chapters.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-wider block pl-2">
                      {language === "bn"
                        ? "ভলিউম ৩: ব্যাকএন্ড ও ডাটাবেজ"
                        : "Volume 3: Backend & Database"}
                    </span>
                    <div className="space-y-2">
                      {volume3Chapters.map(renderChapterLink)}
                    </div>
                  </div>
                )}

                {/* Volume 4 */}
                {volume4Chapters.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-indigo-500 uppercase tracking-wider block pl-2">
                      {language === "bn"
                        ? "ভলিউম ৪: অ্যাডভান্সড ব্যাকএন্ড"
                        : "Volume 4: Advanced Backend"}
                    </span>
                    <div className="space-y-2">
                      {volume4Chapters.map(renderChapterLink)}
                    </div>
                  </div>
                )}
              </nav>
            );
          })()}

          {/* Bottom user status details */}
          <div className="border-t border-border/40 pt-4 mt-6">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block pl-2 mb-3">
              {language === "bn" ? "লার্নিং প্রগ্রেস" : "Learning Progress"}
            </span>

            <div className="space-y-2 pl-2 text-xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="font-medium">
                  {language === "bn" ? "সম্পন্ন অধ্যায়" : "Completed"}
                </span>
                <span className="font-mono font-bold text-foreground">
                  {completedCount} / {chaptersList.length}
                </span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${chaptersList.length ? (completedCount / chaptersList.length) * 100 : 0}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
