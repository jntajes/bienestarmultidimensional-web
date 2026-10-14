/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          soft: '#BEDFD6',
          lighter: '#D3EEE7',
          DEFAULT: '#51AB91',
          bright: '#6ED1B2',
          muted: '#66A391',
        },
        ink: '#111111',
        gray: {
          light: '#E1E1E1',
          DEFAULT: '#6A6A6A',
        },
        cream: '#FDFDFD',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        accent: ['Allura', 'cursive'],
      },
      maxWidth: {
        content: '1200px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
