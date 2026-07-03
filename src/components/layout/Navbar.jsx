"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Menu,
  X,
  Languages,
  Sun,
  Moon,
  Flame,
  Search,
  User,
  Type,
  Eye,
  BookMarked,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import { useTheme } from "@/providers/ThemeProvider";

export function Navbar({ toggleSidebar, showSidebarButton = false }) {
  const { language, setLanguage, localize } = useLanguage();
  const { theme, setTheme, largeFont, setLargeFont } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [streak, setStreak] = useState(3); // Mock user learning streak
  const [bookmarksCount, setBookmarksCount] = useState(2); // Mock bookmarks

  // Reading scroll progress logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themes = [
    {
      id: "light",
      label: { bn: "লাইট মোড", en: "Light Mode" },
      icon: <Sun className="w-4 h-4" />,
    },
    {
      id: "dark",
      label: { bn: "ডার্ক মোড", en: "Dark Mode" },
      icon: <Moon className="w-4 h-4" />,
    },
    {
      id: "reading",
      label: { bn: "রিডিং (সেপিয়া)", en: "Reading (Sepia)" },
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "high-contrast",
      label: { bn: "হাই কন্ট্রাস্ট", en: "High Contrast" },
      icon: <Eye className="w-4 h-4" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-primary transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand and Sidebar Button */}
        <div className="flex items-center gap-3">
          {showSidebarButton && (
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              title="Toggle Table of Contents"
              aria-label="Toggle Table of Contents"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <Link href="/" className="flex items-center gap-2 select-none group">
            <div className="p-1.5 rounded-lg bg-primary text-primary-foreground group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BignanPro
            </span>
          </Link>
        </div>

        {/* Center/Right Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-4">
          {/* Quick links */}
          <Link
            href="/book"
            className="text-sm font-semibold hover:text-primary transition-colors px-2 py-1"
          >
            {language === "bn" ? "বইয়ের সূচী" : "Book Index"}
          </Link>
          <Link
            href="/notes"
            className="text-sm font-semibold hover:text-primary transition-colors px-2 py-1"
          >
            {language === "bn" ? "আমার নোটস" : "My Notes"}
          </Link>

          <span className="h-4 w-px bg-border/60 mx-1" />

          {/* Learning Streak indicator */}
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold"
            title={
              language === "bn" ? "আপনার শেখার স্ট্রিক" : "Your learning streak"
            }
          >
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
            <span>
              {streak} {language === "bn" ? "দিন" : "days"}
            </span>
          </div>

          {/* Bookmarks Counter */}
          <button
            className="flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground text-xs font-semibold relative"
            title={language === "bn" ? "বুকমার্ক সমূহ" : "Bookmarks"}
            aria-label="Bookmarks"
          >
            <BookMarked className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold">
              {bookmarksCount}
            </span>
          </button>

          {/* Search Button */}
          <button
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            title={language === "bn" ? "খুঁজুন" : "Search"}
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Font scale accessibility toggle */}
          <button
            onClick={() => setLargeFont(!largeFont)}
            className={`p-2 rounded-lg transition-colors border ${
              largeFont
                ? "bg-primary/10 border-primary/30 text-primary"
                : "hover:bg-secondary border-transparent text-muted-foreground hover:text-foreground"
            }`}
            title={
              language === "bn"
                ? "অক্ষরের সাইজ বড় করুন"
                : "Toggle Large Font Size"
            }
            aria-label="Toggle Large Font Size"
          >
            <Type className="w-4 h-4" />
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-secondary border border-border/40 text-xs font-bold transition-all active:scale-95 cursor-pointer"
            title={
              language === "bn" ? "English এ পরিবর্তন করুন" : "Switch to বাংলা"
            }
            id="lang-toggle-btn"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{language === "bn" ? "English" : "বাংলা"}</span>
          </button>

          {/* Theme Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2 rounded-lg hover:bg-secondary border border-transparent transition-all text-muted-foreground hover:text-foreground cursor-pointer"
              title="Change Theme"
              aria-label="Change Theme"
              id="theme-dropdown-btn"
            >
              {theme === "light" && <Sun className="w-4 h-4" />}
              {theme === "dark" && <Moon className="w-4 h-4" />}
              {theme === "reading" && (
                <BookOpen className="w-4 h-4 text-amber-600" />
              )}
              {theme === "high-contrast" && (
                <Eye className="w-4 h-4 text-emerald-500" />
              )}
            </button>

            {showThemeMenu && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowThemeMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-card p-1 shadow-lg z-50">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setShowThemeMenu(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs font-semibold hover:bg-secondary/70 transition-colors ${
                        theme === t.id
                          ? "text-primary bg-primary/5"
                          : "text-foreground"
                      }`}
                      id={`theme-opt-${t.id}`}
                    >
                      {t.icon}
                      <span>{localize(t.label)}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Auth Button */}
          <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-foreground text-background font-semibold text-xs hover:opacity-90 active:scale-95 transition-all">
            <User className="w-3.5 h-3.5" />
            <span>{language === "bn" ? "সাইন ইন" : "Sign In"}</span>
          </button>
        </nav>

        {/* Mobile Header Buttons */}
        <div className="flex md:hidden items-center gap-2">
          {/* Flame status */}
          <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-full text-xs font-bold border border-amber-500/20">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{streak}</span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground"
            title="Toggle Menu"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-card p-4 space-y-4 shadow-inner animate-in fade-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground uppercase">
              {language === "bn" ? "মেনু" : "Menu"}
            </span>
            <button
              onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-secondary text-xs font-bold border border-border/40"
            >
              <Languages className="w-3 h-3" />
              <span>{language === "bn" ? "English" : "বাংলা"}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center p-3 rounded-lg border border-border/60 text-sm font-semibold hover:bg-secondary transition-colors"
            >
              {language === "bn" ? "বইয়ের সূচী" : "Book Index"}
            </Link>
            <Link
              href="/notes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center p-3 rounded-lg border border-border/60 text-sm font-semibold hover:bg-secondary transition-colors"
            >
              {language === "bn" ? "আমার নোটস" : "My Notes"}
            </Link>
          </div>

          {/* Theme selection in Mobile */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-semibold text-muted-foreground uppercase block pl-1">
              {language === "bn" ? "থিম নির্বাচন" : "Select Theme"}
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-lg border text-[10px] font-semibold transition-all ${
                    theme === t.id
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border/60 hover:bg-secondary/40"
                  }`}
                >
                  {t.icon}
                  <span className="mt-1">{t.id}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border/40 pt-4">
            {/* Font scale */}
            <button
              onClick={() => setLargeFont(!largeFont)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                largeFont
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "border-border/60"
              }`}
            >
              <Type className="w-4 h-4" />
              <span>{language === "bn" ? "বড় ফন্ট" : "Large Text"}</span>
            </button>

            {/* Auth */}
            <button className="flex items-center gap-1.5 px-5 py-1.5 rounded-lg bg-foreground text-background font-semibold text-xs">
              <User className="w-3.5 h-3.5" />
              <span>{language === "bn" ? "সাইন ইন" : "Sign In"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
