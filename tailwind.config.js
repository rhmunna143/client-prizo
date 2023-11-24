/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merinda: 'Merienda, cursive',
      },

      colors: {
        primary: "#0ECDB9",
        secondary: "#1F2340",
        tertiary: "#1B1D4D",
        formulary: "#1F2340"
      }
    },
  },
  plugins: [],
}

