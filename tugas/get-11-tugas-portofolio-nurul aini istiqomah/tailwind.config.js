/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Comfortaa'],
        'icon' : ['Pacifico'],
        'sans' : ['Quicksand']
      },
      colors: {
        light: '#fbfcfe',
        primary: '#DB3069',
        second: '#1446A0',
        last: '#d0d6e4'
      }
    },
  },
  plugins: [],
}
