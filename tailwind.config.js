/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '1200' : '1200px'
      },
      colors: {
        'green' : '#A5C926',
        'orange' : '#FFC12C',
        'pink' : '#FB416B',
        'black' : '#111111',
        'gray' : '#999999',
        'bluevold' : '#F8F8F8',
      },
      backgroundImage:{
        'hero': "url('/images/jpg/bg.jpg')",
        'play' : "url('/images/jpg/story.jpg')"
      },
      boxShadow: {
        'card': '0px 1px 2px 0px #00000026'
      },
    },
  },
  plugins: [],
}