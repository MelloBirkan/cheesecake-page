/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        source: ["Source Code Pro", "monospace"],
        source4: ["Source Serif 4", "serif"],
      },
      css: {
        ".antialiased": {
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },
      },
      colors: {
        honey: "#a54328",
      },
    },
  },
  plugins: [],
};
