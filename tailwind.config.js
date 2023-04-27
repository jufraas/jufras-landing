/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './app/*/.{js,ts,jsx,tsx}',
  ],
    darkMode: false,
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'purple2': '#B17CF4',
      'orange': '#ff7849',
      'green-light': '#13ce66',
      'green': '#69B865',
      'yellow': '#ffc82c',
      'gray-blue': '#273444',
      gray: {
        100: '#EAEAEA',
        200: '#C7C7C7',
        300: '#9D9D9D',
        400: '#5C5C5C',
        500: '#444444',
        600: '#373737',
        700: '#2E2E2E',
        800: '#232323'
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}