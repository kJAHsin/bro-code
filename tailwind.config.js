/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Noto Serif Display', 'serif']
    },
    extend: {
      colors: {
        'darkGrey': '#585346',
        'lightGrey': '#898984',
        'gold': '#CDAB64',
        'black': '#000000'
      },
      backgroundImage: {
        'DRM-logo': "url('./DRM-logo.png')"
      }
    },
  },
  plugins: [],
}

