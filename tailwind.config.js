/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#5C7F67',
        grey: '#E9E7E7',
        black: '#100F0F',
        'light-green': '#ECF4E7',
        'dark-green': '#24331A',
        brown: '#5D5656',
        pink: '#EB7C7C',
        modalBg: '#A4A2A2',
      },
      height: {
        112: '28rem',
        128: '32rem',
        sideBarFit: 'calc(100% - 64px);',
      },
      lineHeight: {
        7: '7rem',
        12: '12rem',
      },
      maxHeight: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
