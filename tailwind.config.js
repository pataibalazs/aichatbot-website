/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageColors: {
          1: '#160e18',
          2: '#f7d568',
          3: '#f7c15b',
          4: '#ffffff',
          5: '#f2a74c',
        },
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

