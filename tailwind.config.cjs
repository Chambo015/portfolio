/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBg: '#1F1D2B',
        highlight: '#67b1d2'
      },
    },
  },
  plugins: [],
};
