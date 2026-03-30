/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#D4AF37',
          DEFAULT: '#C9A14A',
          dark: '#B8860B',
        },
        grey: {
          light: '#F5F5F5',
          medium: '#9CA3AF',
          dark: '#374151',
        },
        luxury: {
          black: '#000000',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}
