/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1600px',
      }
    }
  },
  plugins: [],
}