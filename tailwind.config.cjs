/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        "manrope" : ["Manrope", "sans-serif"],
      },
      colors: {
        "pr-light-cyan": "hsl(193, 38%, 86%)",
        "pr-neon-green": "hsl(150, 100%, 66%)",
        "nt-grayish-blue": "hsl(217, 19%, 38%)",
        "nt-dark-grayish-blue": "hsl(217, 19%, 24%)",
        "nt-dark-blue": "hsl(218, 23%, 16%)"
      }
    },
  },
  plugins: [],
}
