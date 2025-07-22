/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        magicalAppear: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.94) translateY(10px)',
            filter: 'brightness(0.5)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.02)',
            filter: 'brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.4))'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0)',
            filter: 'brightness(1)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      animation: {
        'magical': 'magicalAppear 1.5s ease-out forwards, float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
