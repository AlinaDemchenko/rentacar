/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Prompt", "sans-serif"],
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%": { width: 0 },
          "100%": { width: "40%" },
        },
        scale: {
          "0%": {
            transform: "scaleX(0)",
          },
          "30%": {
            transform: "scaleX(0.3)",
          },
          "50%": {
            transform: "scaleX(0.7)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        collapseAccordion: {
          "0%": {
            "max-height": "1000px",
            opacity: "1",
          },
          "100%": {
            "max-height": "0",
            opacity: "0",
          },
        },
        expandAccordion: {
          "0%": {
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "max-height": "1000px",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
