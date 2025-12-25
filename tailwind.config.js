/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dately Color Palette (Colormind Romantic)
        coral: {
          50: '#FFF5F4',
          100: '#FFE5E3',
          200: '#F5B5B0',
          300: '#ED9590',
          400: '#E27A75',  // Main coral
          500: '#D06A65',
          600: '#B85A55',
        },
        lavender: {
          50: '#F8F3F8',
          100: '#E8D8E8',
          200: '#E0C5E0',
          300: '#D8BDD8',
          400: '#D0B5D0',  // Main lavender
          500: '#B8A0B8',
        },
        peach: {
          400: '#EE8E77',  // Main peach
          500: '#D87F68',
        },
        rose: {
          400: '#ED878D',  // Main rose
          500: '#D8787E',
        },
        cream: {
          50: '#FBFDFB',   // Lightest
          100: '#F8F5F5',  // Background
          200: '#F0EAEA',
          300: '#E8E2E2',
        },
        warm: {
          brown: '#3D2A2A',  // Text color
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
