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
        'yd-gray': '#8FA3AD',
        'yd-dark': '#050505',
        'yd-blue-dark': '#0a0f14',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'scan': 'scan 4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(198,17,40,0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(198,17,40,0.8)' },
        }
      }
    },
  },
  plugins: [],
}
