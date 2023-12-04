/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      main: ["Nova Square", "sans-serif"],
      info: ["Sarabun", "serif"],
    },
    colors: {
      text: "#f8f9fc",
      background: "#010204",
      primary: "#a3b5dc",
      secondary: "#121c30",
      accent: "#5173bd",
      yelllow: "#FFFF00",
    },
  },
  plugins: [],
};
