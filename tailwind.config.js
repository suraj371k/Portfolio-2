/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fade: {
          '0% 100%' : {opacity: 0},
          '50%': {opacity: 1}
        },
        scale: {
          '0% , 100%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.1)'}
        }
      },
      animation :{
        fade: "fade 2s infinite",
        scale: "scale 2s infinite"
      }
    },
  },
  plugins: [],
}

