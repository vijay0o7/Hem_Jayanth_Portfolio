/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fcfaf6',
          100: '#f7f2e8',
          200: '#eddcc5',
          300: '#dfbe96',
          400: '#cf9e68',
          500: '#c58e47',
          600: '#b17438',
          700: '#8e562d',
          800: '#73462b',
          900: '#5e3a26',
        },
        charcoal: {
          700: '#2a2a2e',
          800: '#1e1e22',
          850: '#17171a',
          900: '#111113',
          950: '#0a0a0c',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      }
    },
  },
  plugins: [],
};
