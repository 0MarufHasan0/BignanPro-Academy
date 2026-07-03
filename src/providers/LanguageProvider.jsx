"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("bn");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("bignanpro-language");
    if (savedLang === "bn" || savedLang === "en") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("bignanpro-language", lang);
  };

  const localize = (obj) => {
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
