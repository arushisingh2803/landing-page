/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        'dark-bg': '#1a202c', // Example dark background color
        'dark-text': '#e2e8f0', // Example dark text color
      },
    },
  },
  plugins: [],
}
