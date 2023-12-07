/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black-900': '#191919',
        'black-800': '#2B2B2B',
      },
    },
  },
  plugins: [],
}
