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
      colors: {}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};