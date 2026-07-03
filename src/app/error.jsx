"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertOctagon, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log error to console or error tracker
    console.error("ErrorBoundary caught an exception:", error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="space-y-6 max-w-md">
          {/* Error Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
            <AlertOctagon className="w-8 h-8" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold">
            কিছু একটা সমস্যা হয়েছে!
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            An unexpected error occurred while loading this page. Please try
            reloading or check back shortly.
          </p>

          {error.digest && (
            <div className="p-3 rounded-xl bg-secondary/50 border border-border/40 font-mono text-[10px] text-muted-foreground break-all">
              Error Digest: {error.digest}
            </div>
          )}

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>আবার চেষ্টা করুন (Retry)</span>
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl border border-border/60 hover:bg-secondary text-sm font-semibold transition-all active:scale-95 cursor-pointer"
            >
              <Home className="w-4 h-4 text-muted-foreground" />
              <span>হোম পেজ (Go Home)</span>
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
