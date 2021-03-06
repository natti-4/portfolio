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
      },
      height: {
        'sm-top' : '600px'
      },
      backgroundImage: {
        'header': "url('../public/top.jpeg')"
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
      transform: ['hover'],
      translate: ['hover'],
    },
  },
  plugins: [],
}
