import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#03040d",
        plasma: "#ff2bd6",
        ion: "#00e5ff",
        nova: "#8f4dff",
        star: "#f7fbff",
        shield: "#37ffb5"
      },
      boxShadow: {
        neon: "0 0 28px rgba(0, 229, 255, 0.34), 0 0 70px rgba(255, 43, 214, 0.18)",
        glass: "inset 0 1px rgba(255,255,255,.18), 0 24px 90px rgba(0,0,0,.45)"
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
