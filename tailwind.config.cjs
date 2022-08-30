/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/Componentes/**/*.{html,js,jsx}",
    "./src/*",
    "./src/Pages/*",
    "./src/Pages/**/*",
    "./src/Pages/**/**/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/line-clamp'),
  require('@tailwindcss/aspect-ratio'),],
}
