/*
This file is part of G.E.C.K.O.
Copyright (C) 2023  Finn Wehn

G.E.C.K.O. is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
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