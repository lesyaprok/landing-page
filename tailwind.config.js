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
      'lavender-dark': '#6C2BD9',
      'lavender-light': '#CABFFD',
      red: '#E02424',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '290px',
          '@screen sm': {
            maxWidth: '490px',
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
