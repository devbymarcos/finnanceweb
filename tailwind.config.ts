import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-gray": "#ecf0f1",
        "base-gray-200": "#bdc3c7",
        "base-yellow": "#f3b43f",
        "base-black": "#1c1d21",
        "base-black-200": "#16171C",
        "base-white": "#fff",
        "font-color-light": "#1c1d21",
        "font-color-dark": "#f8f8f8",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translate(-50%,-20%)", opacity: "0" },
          "100%": { transform: "translate(-50%,0%)", opacity: "1" },
        },
      },
      animation: {
        "slide-down": "slideDown 0.2s linear",
      },
    },
  },
  plugins: [],
};
export default config;
