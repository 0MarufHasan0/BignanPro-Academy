"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Mini header */}
      <header className="h-16 border-b border-border/40 flex items-center px-6">
        <Link href="/" className="flex items-center gap-2 select-none">
          <div className="p-1.5 rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-bold text-md bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            BignanPro
          </span>
        </Link>
      </header>

      {/* Main 404 block */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="space-y-6 max-w-md">
          {/* Big number indicator */}
          <h1 className="text-8xl font-black tracking-widest text-primary/20 font-mono">
            404
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-bold">
            {language === "bn" ? "দুঃখিত! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি।" : "Oops! Page Not Found."}
          </h2>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {language === "bn"
              ? "আপনি যে লিংকটি খুঁজছেন তা হয়তো পরিবর্তন করা হয়েছে বা মুছে ফেলা হয়েছে। দয়া করে সঠিক লিংক চেক করুন।"
              : "The link you followed might be broken, or the page has been moved. Check the URL or return to our dashboard."}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/book"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === "bn" ? "পড়া শুরু করুন" : "Start Reading"}</span>
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl border border-border/60 hover:bg-secondary text-sm font-semibold transition-all active:scale-95 cursor-pointer"
            >
              <Home className="w-4 h-4 text-muted-foreground" />
              <span>{language === "bn" ? "হোম পেজ" : "Go Home"}</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border/40">
        <p>&copy; {new Date().getFullYear()} BignanPro Academy</p>
      </footer>
    </div>
  );
}
