import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Onest Variable", ...fontFamily.sans],
      },
      // animation: {
      //   "background-shine": "background-shine 2s linear infinite",
      // },
      // keyframes: {
      //   "background-shine": {
      //     from: {
      //       backgroundPosition: "0 0",
      //     },
      //     to: {
      //       backgroundPosition: "-200% 0",
      //     },
      //   },
      // },
    },
  },
  plugins: [],
};
