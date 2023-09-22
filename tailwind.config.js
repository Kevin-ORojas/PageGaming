/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueClaro: "#1d4ed8",
        colorCnt: "#d97706",
      },
      fontFamily: {
        custom: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
