/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e31837',
          50: '#fef2f3',
          100: '#fee2e5',
          200: '#fecbd1',
          300: '#fca4ae',
          400: '#f86d7d',
          500: '#f03852',
          600: '#e31837',
          700: '#c11530',
          800: '#a0152d',
          900: '#85172b',
          950: '#480a13',
        },
        secondary: {
          DEFAULT: '#ffc72c',
          50: '#fffbeb',
          100: '#fff4c6',
          200: '#ffe988',
          300: '#ffd744',
          400: '#ffc72c',
          500: '#f9ab00',
          600: '#dd8a00',
          700: '#b76504',
          800: '#964f0b',
          900: '#7c410c',
          950: '#432005',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'marble-pattern': "url('https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};