/** @type {import('tailwindcss').Config} */
const themeColor = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          soft: themeColor('brand-soft'),
          lighter: themeColor('brand-lighter'),
          DEFAULT: themeColor('brand-primary'),
          bright: themeColor('brand-bright'),
          muted: themeColor('brand-muted'),
        },
        ink: themeColor('brand-ink'),
        gray: {
          light: themeColor('brand-gray-light'),
          DEFAULT: themeColor('brand-gray'),
        },
        cream: themeColor('brand-cream'),
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
