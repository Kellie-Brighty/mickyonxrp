/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'broccoli': {
          yellow: '#FFD700',
          brown: '#8B4513',
          gray: '#333333',
        }
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'future': ['Rajdhani', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 