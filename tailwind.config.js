/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {

    screens: {
      'sm': '390px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },

    colors: {
      'primary': 'hsla(228, 69%, 13%, 1)',
      'primary2': 'hsla(228, 69%, 20%, 1)',
      'yellow': 'hsla(50, 87%, 91%, 1)',
      'pink': 'hsla(306, 87%, 91%, 1)',
      'peach': 'hsla(11, 87%, 91%, 1)',
      'green': 'hsla(137, 87%, 91%, 1)',
      'disabled': 'hsla(228, 9%, 63%, 1)',
      'focused': 'hsla(228, 56%, 87%, 1)',
      'white': 'hsla(0, 0%, 100%, 1)',
      'black': 'hsla(0, 0%, 13%, 1)',
      'ash': 'hsla(0, 0%, 75%, 1)',
      'grey': 'hsla(0, 2%, 44%, 1)'
    },

    fontFamily: {
      'DM': ['DM', 'sans-serif'],
      
    


    extend: {},
  },
  plugins: [],
}
}

