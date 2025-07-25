import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/sonner/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brown: "hsl(var(--brown))",
        greenPaper: "hsla(var(--color-green-paper))",
        greenLight: "hsla(var(--color-green-light))",
      },
    },
  },
  plugins: [],
};

export default config;
