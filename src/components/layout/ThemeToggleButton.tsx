"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="grid place-items-center w-11 h-11 p-0 rounded-full bg-transparent text-ink-text border border-ink-line cursor-pointer transition-all duration-200 ease-brand hover:bg-hover hover:border-ink-muted active:scale-[0.94]"
    >
      <svg
        className="theme-icon-sun w-4 h-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg
        className="theme-icon-moon w-4 h-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
