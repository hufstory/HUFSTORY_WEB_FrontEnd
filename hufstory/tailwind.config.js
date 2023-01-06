/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "represent-color": "#A1CCFB",
        "title-color": "#3DA3FB",
      },
      boxShadow: {
        default: "4px 12px 30px 6px rgba(0, 0, 0, 0.09)",
      },
    },
    fontFamily: {
      nanumLight: ["NanumLight", "sans-serif"],
      nanumRegular: ["NanumRegular", "sans-serif"],
      nanumBold: ["NanumBold", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}