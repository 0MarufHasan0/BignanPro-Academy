"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "light" | "dark" | "reading" | "high-contrast";

interface ThemeContextType {
  theme: ThemeType;
  largeFont: boolean;
  setTheme: (theme: ThemeType) => void;
  setLargeFont: (large: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>("light");
  const [largeFont, setLargeFontState] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Sync with localStorage and document attributes on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("bignanpro-theme") as ThemeType;
    const savedLargeFont = localStorage.getItem("bignanpro-large-font") === "true";

    if (savedTheme) {
      setThemeState(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }

    if (savedLargeFont) {
      setLargeFontState(true);
      document.documentElement.setAttribute("data-font-size", "large");
    } else {
      document.documentElement.removeAttribute("data-font-size");
    }

    setMounted(true);
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("bignanpro-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const setLargeFont = (large: boolean) => {
    setLargeFontState(large);
    localStorage.setItem("bignanpro-large-font", String(large));
    if (large) {
      document.documentElement.setAttribute("data-font-size", "large");
    } else {
      document.documentElement.removeAttribute("data-font-size");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, largeFont, setTheme, setLargeFont }}>
      {/* Hide content until mounted to prevent hydration flash of incorrect theme */}
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
