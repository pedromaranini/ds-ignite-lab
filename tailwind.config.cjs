/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14, 
      small: 16, 
      medium: 18,
      large: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7CBA',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
      cyan: {
        500: '#81D8F7',
        300: '#9BE1FB',
      },

      black: '#000',
      white: '#FFF',
      transparent: 'transparent'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
