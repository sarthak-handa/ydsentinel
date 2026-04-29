/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yd-red': '#C61128', // Exact hex from logo extraction
        'yd-gray': '#8FA3AD'
      }
    },
  },
  plugins: [],
}
