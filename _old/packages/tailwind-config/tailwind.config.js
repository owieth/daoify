const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8em',
      base: '1em',
      md: '1.5em',
      lg: '3em',
    },
    screens: {
      xs: '380px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        'flip': {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        'rotate': {
          to: {
            transform: 'rotate(90deg)',
          },
        },
        'dripping': {
          to: {
            transform: 'translateY(300px)',
          },
        },
        'background-shine': {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        'infinite-slider': {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(calc(-250px * 5))',
          },
        },
      },
      animation: {
        'flip': 'flip 6s infinite steps(2, end)',
        'rotate': 'rotate 3s linear infinite both',
        'dripping': 'dripping 6s linear infinite',
        'background-shine': 'background-shine 2s linear infinite',
        'infinite-slider': 'infinite-slider 40s linear infinite',
      },
    },
  },
  plugins: [],
};
