// tailwind.config.js
// const colors = require("tailwindcss/colors");

export default {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey': {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          500: '#95979d',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ededef',
          100: '#f2f3f5'
        },
        'green': {
          900: '#126701',
          500: '#144332',
          100: '#85d574'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};