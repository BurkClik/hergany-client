module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFF1E6',
        secondary: '#F95E0A',
        third: '#CB997E',
        fourth: '#EDDCD2',
        fifth: '#A5A58D',
        sixth: '#DDBEA9',
        seventh: '#FDF3EC',
        demo: '#FFF9F5',
      },
      fontSize:{
        '3xs': '.5rem',
        '2xs': '.625rem',
        '28': '1.75rem',
        '32': '2rem',
      },
      height:{
          420: '420px',
          352: '352px',
          512: '512px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
