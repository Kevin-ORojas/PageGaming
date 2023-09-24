/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueClaro: "#4338ca",
        colorCnt: "#DC7000",
        seeAll:"#6366f1",
      },
      fontFamily: {
        custom: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
