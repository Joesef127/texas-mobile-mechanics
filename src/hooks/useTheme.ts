"use client";

import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>("light");

  useEffect(() => {
    let saved: ThemeMode | null = null;
    try {
      const val = localStorage.getItem("tmm-theme");
      if (val === "dark" || val === "light") {
        saved = val;
      }
    } catch {
      // Ignore storage errors
    }
    const initial = saved || "light";
    setThemeState(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: ThemeMode = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("tmm-theme", next);
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
