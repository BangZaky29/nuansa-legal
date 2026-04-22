/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#fdd025', // Golden Yellow
          dark: '#e5bc22',
          light: '#fde047',
        },
        secondary: {
          DEFAULT: '#1e3a8a', // Deep Blue
          light: '#3b82f6',
        },
        navy: {
          DEFAULT: '#0a192f',
          900: '#0a192f',
          800: '#112240',
          700: '#233554',
        }
      },
      fontFamily: {
        sen: ['Sen', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
