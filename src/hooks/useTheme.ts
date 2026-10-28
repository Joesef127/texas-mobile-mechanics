"use client";

import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute(
      "data-theme"
    ) as ThemeMode | null;

    if (current === "dark" || current === "light") {
      setThemeState(current);
      document.documentElement.style.colorScheme = current;
      document.documentElement.style.backgroundColor =
        current === "dark" ? "#101216" : "#F6F6F4";
      return;
    }

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
    document.documentElement.style.colorScheme = initial;
    document.documentElement.style.backgroundColor =
      initial === "dark" ? "#101216" : "#F6F6F4";
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: ThemeMode = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      document.documentElement.style.colorScheme = next;
      document.documentElement.style.backgroundColor =
        next === "dark" ? "#101216" : "#F6F6F4";
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
