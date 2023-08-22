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
        'hero-gradient':
          'radial-gradient(ellipse 50% 80% at 20% 40%,rgba(255,255,255,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(255,255,255,0.15),transparent)',
        'hero-glow':
          'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(255, 255, 255) 0deg, rgb(255, 255, 255) 67.5deg, rgb(255, 255, 255) 198.75deg, rgb(255, 255, 255) 251.25deg, rgb(255, 255, 255) 301.88deg, rgb(255, 255, 255) 360deg)',
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
        'image-rotate': {
          '0%': { transform: 'rotateX(25deg)' },
          '25%': { transform: 'rotateX(25deg) scale(0.9)' },
          '60%': { transform: 'none' },
          '100%': { transform: 'none' },
        },
        'image-glow': {
          '0%': {
            opacity: 0,
            'animation-timing-function': 'cubic-bezier(0.74,0.25,0.76,1)',
          },
          '10%': {
            opacity: 1,
            'animation-timing-function': 'cubic-bezier(0.12,0.01,0.08,0.99)',
          },
          '100%': {
            opacity: 0.2,
          },
        },
        'sketch-lines': {
          '0%': { 'stroke-dashoffset': 1 },
          '50%': { 'stroke-dashoffset': 0 },
          '99%': { 'stroke-dashoffset': 0 },
          '100%': { visiblity: 'hidden' },
        },
        'glow-line-horizontal': {
          '0%': { opacity: 0, transform: 'translateX(0)' },
          '5%': { opacity: 1, transform: 'translateX(0)' },
          '90%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateX(min(60vw, 45rem))' },
        },
        'glow-line-vertical': {
          '0%': { opacity: 0, transform: 'translateY(0)' },
          '5%': { opacity: 1, transform: 'translateY(0)' },
          '90%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateY(min(21vw, 45rem))' },
        },
      },
      animation: {
        flip: 'flip 6s infinite steps(2, end)',
        rotate: 'rotate 3s linear infinite both',
        'background-shine': 'background-shine 2s linear infinite',
        'infinite-slider': 'infinite-slider 40s linear infinite',
        'image-rotate': 'image-rotate 1400ms ease forwards',
        'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
        'sketch-lines': 'sketch-lines 1200ms ease-out forwards',
        'glow-line-horizontal':
          'glow-line-horizontal var(--animation-duration) ease-in forwards',
        'glow-line-vertical':
          'glow-line-vertical var(--animation-duration) ease-in forwards',
      },
    },
  },
  plugins: [],
};
