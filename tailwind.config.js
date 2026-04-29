/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'yd-red': '#C41230',
        'yd-gray': '#3D4A52',
        'yd-dark': '#080808',
      },
      fontFamily: {
        sans:     ['Inter', 'Helvetica Neue', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        mono:     ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};

