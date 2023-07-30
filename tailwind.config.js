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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        line: '#19191A',
      },
      keyframes: {
        flip: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)',
          },
        },
        backgroundShine: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        infiniteSlider: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(calc(-250px * 5))',
          },
        },
      },
      animation: {
        flip: 'flip 6s infinite steps(2, end)',
        rotate: 'rotate 3s linear infinite both',
        backgroundShine: 'backgroundShine 2s linear infinite',
        ['infinite-slider']: 'infiniteSlider 20s linear infinite',
      },
    },
  },
  plugins: [],
};
