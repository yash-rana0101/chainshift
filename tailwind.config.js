/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary100: "#f2e6e9",
        primary200: "#e5ccd3",
        primary300: "#d8b3bd",
        primary400: "#a41a45",
        primary500: "#87163d",
        primary600: "#6e1330",
        primary700: "#5a1026",
        primary800: "#460d1b",
        primary900: "#380a14",
        bg100: "#cccccc",
        bg200: "#b3b3b3",
        bg300: "#999999",
        bg400: "#4d4d4d",
        bg500: "#333333",
        bg600: "#2e2e2e",
        bg700: "#262626",
        bg800: "#1f1f1f",
        bg900: "#191919",
        bg1000: "#121212",
      },
    },
  },
  plugins: [],
};
