/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FCFBFA',
      black: '#27272A',
      grey: '#696969',
      'light-grey': '#E5E7EB',
      lavender: '#7E3AF2',
      'lavender-dark': '#6C2BD9',
      'lavender-light': '#CABFFD',
      red: '#E02424',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
    screens: {
      xxs: '270px',
      xs: '300px',
      xs2: '340px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '290px',
          '@screen xxs': {
            maxWidth: '260px',
          },
          '@screen xs': {
            maxWidth: '290px',
          },
          '@screen xs2': {
            maxWidth: '90%',
          },
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '714px',
          },
          '@screen lg': {
            maxWidth: '990px',
          },
          '@screen xl': {
            maxWidth: '1110px',
          },
          '@screen 2xl': {
            maxWidth: '1400px',
          },
        },
      });
    },
  ],
};
