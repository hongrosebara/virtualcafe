/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '1rem',
      'sm': '1.125rem',
      'tiny': '1.25rem',
      'base': '1.6rem',
      'lg': '1.875rem',
      'xl': '2.25rem',
      '2xl': '2.5rem',
      '3xl': '2.75rem',
      '4xl': '3rem',
      '5xl': '5rem'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      beige: '#f4efed',
      dark: '#000',
      primary: {
        50:  '#ff998d',
        100: '#fb8f83',
        200: '#f18579',
        300: '#e77b6f',
        400: '#dd7165',
        500: '#d3675b',
        600: '#c95d51',
        700: '#bf5347',
        800: '#b5493d',
        900: '#ab3f33'
      },
      secondary: {
        50:  '#d5cb99',
        100: '#cbc18f',
        200: '#c1b785',
        300: '#b7ad7b',
        400: '#ada371',
        500: '#a39967',
        600: '#998f5d',
        700: '#8f8553',
        800: '#857b49',
        900: '#7b713f'
      }
    }
  },
  plugins: [],
}