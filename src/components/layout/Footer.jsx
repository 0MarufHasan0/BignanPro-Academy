"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="w-full border-t border-border/40 bg-card/50 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-md bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BignanPro Academy
            </span>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-muted-foreground">
            <Link href="/book" className="hover:text-primary transition-colors">
              {language === "bn" ? "বইয়ের সূচী" : "Book Index"}
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-muted-foreground select-none">
          <p>
            &copy; {new Date().getFullYear()} BignanPro Academy.{" "}
            {language === "bn"
              ? "সর্বস্বত্ব সংরক্ষিত। এটি একটি বিজ্ঞানপ্রো ইনিশিয়েটিভ।"
              : "All rights reserved. A BignanPro initiative."}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              {language === "bn" ? "প্রাইভেসি পলিসি" : "Privacy Policy"}
            </Link>
            <Link href="#" className="hover:underline">
              {language === "bn" ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
