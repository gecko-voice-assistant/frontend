// tailwind.config.js
// const colors = require("tailwindcss/colors");

export default {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  safelist: [
    "router-link-exact-active",
    "router-link-active",
      "delay-500",
    { pattern: /delay-./ }
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'text': {
          'normal': '#d5d5d7'
        },
        'main': {
          'light': '#3b3f1a',
          'medium': '#232613',
          'dark': '#11130a'
        },
        'accent': {
          'light': '#f0b605',
          'medium': '#52581b'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};