/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    flex: {
      auto: "1 1 0%",
      10: "0 0 10%",
      15: "0 0 15%",
      20: "0 0 20%",
      30: "0 0 30%",
      50: "0 0 50%",
      60: "0 0 60%",
      70: "0 0 70%",
      80: "0 0 80%",
      85: "0 0 85%",
    },
  },
  plugins: [],
};
