/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class", //This is the key modification in this project to change the color
  theme: {
    extend: {},
  },
  plugins: [],
}

