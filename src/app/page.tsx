"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Brain,
  Terminal,
  Eye,
  ArrowRight,
  Flame,
  ArrowUpRight,
  Languages,
} from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const { language, localize } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const features = [
    {
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      title: { bn: "ইন্টারেক্টিভ বুক লেআউট", en: "Interactive Book Layout" },
      description: {
        bn: "ভিজ্যুয়াল আর্কিটেকচার ও গোছানো কন্টেন্টের সংমিশ্রণ, যা পড়তে আরামদায়ক ও কার্যকর।",
        en: "Blends structured, beautiful typography with rich, visual layout designed for reading comfort.",
      },
    },
    {
      icon: <Terminal className="w-5 h-5 text-accent" />,
      title: { bn: "লাইনভিত্তিক কোড বিশ্লেষণ", en: "Line-by-Line Code Breakdown" },
      description: {
        bn: "কোড ব্লকের যেকোনো লাইনে ট্যাপ করে তার বাংলা ব্যাখ্যা ও প্রফেশনাল মিনিং বুঝে নিন।",
        en: "Tap on any line of code to view detailed explanations and professional developer context.",
      },
    },
    {
      icon: <Brain className="w-5 h-5 text-emerald-500" />,
      title: { bn: "এআই মেন্টর গাইডেন্স", en: "AI Mentor Guidance" },
      description: {
        bn: "কেন এই কোডটি কাজ করে, রিয়েল-লাইফে কীভাবে ভাববেন এবং সাধারণ ভুলগুলো কী—সব এক জায়গায়।",
        en: "Learn why a concept exists, how professionals think, and debugging advice directly on the page.",
      },
    },
    {
      icon: <Eye className="w-5 h-5 text-indigo-500" />,
      title: { bn: "৫টি রিডিং থিম", en: "5 Custom Themes" },
      description: {
        bn: "সেপিয়া (রিডিং মোড), ডার্ক, লাইট এবং হাই-কন্ট্রাস্টসহ আপনার চোখের আরামদায়ক থিম বেছে নিন।",
        en: "Switch between Light, Dark, Warm Sepia (Reading), High Contrast, and Large Font modes instantly.",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 md:py-32 flex items-center justify-center border-b border-border/20 bg-gradient-to-b from-primary/5 via-transparent to-transparent">
          {/* Background Glow effects */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Top pill badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border/80 text-xs font-bold select-none">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span>
                  {language === "bn" ? "প্রোগ্রামিংয়ের নতুন বিপ্লব" : "The Future of Learning Code"}
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground"
              >
                {language === "bn" ? (
                  <>
                    প্রোগ্রামিং শিখুন{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-indigo-500 bg-clip-text text-transparent">
                      ইন্টারেক্টিভ উপায়ে
                    </span>
                    <br />
                    একদম শূন্য থেকে।
                  </>
                ) : (
                  <>
                    Learn Coding{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-indigo-500 bg-clip-text text-transparent">
                      Interactively
                    </span>
                    <br />
                    From Absolute Zero.
                  </>
                )}
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                {language === "bn"
                  ? "বিজ্ঞানপ্রো একাডেমি হলো বইয়ের মতো গোছানো আর সফটওয়্যারের মতো ইন্টারেক্টিভ একটি অভিনব লার্নিং প্ল্যাটফর্ম। বাংলা ও ইংরেজি ভাষার সাপোর্ট নিয়ে সাজানো।"
                  : "BignanPro Academy is a premium interactive book combined with a modern coding workspace. Master Full Stack Development in simple, friendly Bengali and English."}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 select-none"
              >
                <Link
                  href="/book"
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-8 py-4 rounded-2xl bg-foreground text-background font-extrabold text-sm md:text-base hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer"
                  id="hero-start-reading-btn"
                >
                  <span>{language === "bn" ? "পড়া শুরু করুন" : "Start Reading"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="/book/chapter-0"
                  className="w-full sm:w-auto flex items-center justify-center gap-1 px-8 py-4 rounded-2xl border border-border/80 bg-background text-foreground font-bold text-sm md:text-base hover:bg-secondary transition-all active:scale-95 cursor-pointer"
                  id="hero-preview-btn"
                >
                  <span>{language === "bn" ? "অধ্যায় ০ প্রাকদর্শন" : "Preview Chapter 0"}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-20 bg-secondary/15 transition-colors duration-300">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 select-none">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {language === "bn" ? "বিজ্ঞানপ্রো কেন অনন্য?" : "Why choose BignanPro?"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                {language === "bn"
                  ? "আমরা শুধু ভিডিও দেখার প্ল্যাটফর্ম নই, আমরা আপনার শেখার অভিজ্ঞতাকে করেছি ইন্টারঅ্যাক্টিভ।"
                  : "We reject long boring videos. We design interactive text layers for direct active engagement."}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow duration-300 flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-secondary shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">
                      {localize(feat.title)}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {localize(feat.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
