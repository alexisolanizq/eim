/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#f1eafa',
        'main-dark': '#b5a7d3'
      }
    },
  },
  plugins: [],
}

