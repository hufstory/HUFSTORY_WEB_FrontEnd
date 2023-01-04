/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        default: "4px 12px 30px 6px rgba(0, 0, 0, 0.09)",
      },
    },
    fontFamily: {
      nanumLight: ["NanumLight", "sans-serif"],
      nanumRegular: ["NanumRegular", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}