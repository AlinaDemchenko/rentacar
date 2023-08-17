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
      },
    },
  },
  plugins: [],
};
