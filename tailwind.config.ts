import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: {
          cyanLightest: '#F5FFFE',
        },
        secondary: {
          cyanDarkest: '#252C2B',
        },
        accent: {
          darkCyan: '#2A6562',
          lightCyan: '#217873',
          orange: '#B1761F',
          lightOrange: '#F5A42C',
        },
        neutral: {
          black: '#000000',
          grey5: '#464646',
          grey4: '#7F7F7F',
          grey3: '#9D9D9D',
          grey2: '#B2B2B2',
          grey1: '#CDCDCD',
          grey0: '#F2F2F2',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config