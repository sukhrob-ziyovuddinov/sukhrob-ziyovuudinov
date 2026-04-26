import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#040b1f",
        panel: "#0b1736",
        glow: "#2f6fff",
        accent: "#23a4ff",
        text: "#d8e6ff"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(47,111,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(47,111,255,0.12) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
