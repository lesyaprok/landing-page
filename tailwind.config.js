/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FCFBFA',
      black: '#27272A',
      grey: '#696969',
      'light-grey': '#E5E7EB',
      lavender: '#7E3AF2',
      red: '#E02424',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
