/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#faf8f5',
          100: '#f3ebe1',
          200: '#e2d5c4',
        },
        gold: {
          400: '#F4C430',
          500: '#E5B32D',
          600: '#D4A024',
        },
        dark: '#2b2b2b',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
