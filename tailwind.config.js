/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#fcfaf8',
          100: '#f7f5f2',
          200: '#efebe4',
          300: '#e3ddd4',
          400: '#c7bcaf',
          500: '#a89888',
          600: '#7e6f62',
          700: '#66594e',
          800: '#554a41',
          900: '#473e36',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e5ece5',
          200: '#cbd9cc',
          300: '#a6bea8',
          400: '#7a9d7d',
          500: '#5a7f5d',
          600: '#466548',
          700: '#39513b',
          800: '#314132',
          900: '#29362a',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
