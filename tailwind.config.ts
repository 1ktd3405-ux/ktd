import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7ec",
          100: "#e0ecd1",
          200: "#c3d9a6",
          300: "#9ec173",
          400: "#7ba84a",
          500: "#5d8c32",
          600: "#477026",
          700: "#375720",
          800: "#2d4520",
          900: "#273b1d",
          950: "#111f0b",
        },
        sage: "#8B9D5C",
        honey: "#D4A853",
        cream: "#FAFAF5",
        parchment: "#F5F0E8",
        bark: "#2C2416",
        earth: "#6B4E2A",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
