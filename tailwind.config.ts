import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fbf5ee",
        ink: "#2a1810",
        olive: {
          50: "#eef3ee",
          100: "#dae6db",
          200: "#bfd3c2",
          300: "#9fbea6",
          700: "#4a6b58",
          800: "#365846",
          900: "#243d2f",
        },
      },
    }
  },
  plugins: []
};

export default config;
