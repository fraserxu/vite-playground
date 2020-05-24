const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
      inset: {
        full: '100%',
      },
    },
  },
  variants: {},
  plugins: [],
}
