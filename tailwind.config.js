/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderRadius: {
          '0%, 100%': { 'border-radius': '40% 80% 40% 60%' },
          '50%': { 'border-radius': '60% 40% 50% 35%' }
        },
        barsMenuSlider:{
          '0%':{'right': '100%', 'left': '-100%'},
          '100%':{'right': '0', 'left': '0'}
        }
      },
      animation: {
        borderRadius: 'borderRadius 15s ease-in-out infinite',
        barsMenu: 'barsMenuSlider 2s'
      }
    },
  },
  plugins: [],
}
