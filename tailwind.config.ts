import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--muted)",
        line: "var(--line)",
        brand: {
          red: "var(--red)",
          redDark: "var(--red-d)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          text: "var(--ink-text)",
          muted: "var(--ink-muted)",
          line: "var(--ink-line)",
        },
        hover: "var(--hover)",
        field: {
          DEFAULT: "var(--field)",
          focus: "var(--field-f)",
        },
        foot: "var(--foot)",
      },
      fontFamily: {
        head: ["var(--font-head)", '"Arial Narrow"', "Arial", "sans-serif"],
        body: ["var(--font-body)", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(.22, .8, .3, 1)",
      },
      screens: {
        xs: "560px",
        md: "900px",
        nav: "1060px",
      },
    },
  },
  plugins: [],
};

export default config;
