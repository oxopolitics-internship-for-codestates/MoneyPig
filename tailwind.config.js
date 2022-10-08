/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './elements/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
    './common/**/*.{js,ts,jsx,tsx}',
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
