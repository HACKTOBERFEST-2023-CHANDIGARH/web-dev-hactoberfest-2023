/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["'Montserrat', sans-serif", ...defaultTheme.fontFamily.sans],
        Fraunces: ["'Fraunces', serif", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

