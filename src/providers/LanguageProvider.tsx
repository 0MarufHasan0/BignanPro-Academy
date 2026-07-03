"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type LanguageType = "bn" | "en";

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  localize: <T>(obj: { bn: T; en: T }) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageType>("bn");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("bignanpro-language") as LanguageType;
    if (savedLang === "bn" || savedLang === "en") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem("bignanpro-language", lang);
  };

  const localize = <T,>(obj: { bn: T; en: T }): T => {
    return language === "bn" ? obj.bn : obj.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, localize }}>
      {/* Hide rendering until mounted to prevent hydration mismatch */}
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
