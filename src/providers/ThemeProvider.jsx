"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("light");
  const [largeFont, setLargeFontState] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Sync with localStorage and document attributes on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("bignanpro-theme");
    const savedLargeFont =
      localStorage.getItem("bignanpro-large-font") === "true";

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

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem("bignanpro-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const setLargeFont = (large) => {
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
