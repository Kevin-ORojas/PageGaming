/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/img-2.png')",
      },
      colors: {
        blueClaro: "#4338ca",
        colorCnt: "#DC7000",
        seeAll: "#6366f1",
        barraloop: "#1C140F",
        aboutcolr: "#B000DC1C",
        cardcolor: "#1C140F",
        carColorOne: "#DC42001C",
        carColorTwo: "#00DC8D1C"
      },
      fontFamily: {
        custom: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
