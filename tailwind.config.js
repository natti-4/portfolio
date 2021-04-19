module.exports = {
  purge: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        'header-menu' : '0 calc(-50vw + 50%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
