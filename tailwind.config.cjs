/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '300px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',
    },
    extend: {},
  },
  plugins: [],
};
