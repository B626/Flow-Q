import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",
        "black": "#000000",
        "dark-purple": "#313752",
        "light-purple": "#9A91BC",
        "light-green": "#D9E6DC",
        "light-beige": "#FCDDCD",
      },
      screens: {
        "2xl": "1400px",
        "xl": "1200px",
        "2md": "992px",
        "md": "768px",
        "3sm": "576px",
        "2sm": "440px",
        "sm": "240px",
      },
      fontFamily: {
        "montserrat": ["Montserrat Alternates", "sans-serif"],
        "prompt": ["Prompt", "sans-serif"],
        "telex": ["Telex", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
