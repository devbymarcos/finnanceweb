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
        "base-secondary": "#5f51c5",
        "base-black": "#22212f",
        "base-black-200": "#181623",
        "base-white": "#fff",
        "font-color-light": "#1c1d21",
        "font-color-dark": "#f8f8f8",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translate(0,-20%)", opacity: "0" },
          "100%": { transform: "translate(0,0%)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translate(0,0%)", opacity: "1" },
          "100%": { transform: "translate(100%,0%)", opacity: "1" },
        },
      },
      animation: {
        "slide-down": "slideDown 0.1s linear",
        "slide-right": "slideRight 0.5s linear forwards  ",
      },
    },
  },
  plugins: [],
};
export default config;
