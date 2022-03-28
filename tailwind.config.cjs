const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.yellow,
        warning: colors.red,
        gray: colors.gray,
      },
      fontFamily: {
        sans: ['Inter var', 'Helvetica', 'Arial'],
      },
    },
  },
  plugins: [],
}
