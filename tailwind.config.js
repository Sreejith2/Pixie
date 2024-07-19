import { keyframes } from '@emotion/react'
import { Key } from '@mui/icons-material'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navColor':'#EADBC8',
        'formColor':'#C7B7A3'
      },
      backgroundImage:{
        'hero':"url('./src/assets/Pixie.png')"
      }
    },
  },
  plugins: [],
}

