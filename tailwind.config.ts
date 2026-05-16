import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          deep: "#050505",
          soft: "#111111",
          line: "#1c1c1c"
        },
        cream: {
          DEFAULT: "#f4ecd8",
          soft: "#ebe2c9",
          muted: "#a8a191"
        },
        gold: {
          DEFAULT: "#c9a96a",
          deep: "#8a7340",
          glow: "#e9d39a"
        },
        lime: {
          DEFAULT: "#c8ff3e",
          deep: "#9bcc1f"
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.05em",
        ultrawide: "0.35em"
      },
      animation: {
        "ticker": "ticker 40s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both"
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
