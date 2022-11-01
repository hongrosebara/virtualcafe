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
      'tiny': '1.5rem',
      'base': '1.6rem',
      'lg': '1.875rem',
      'xl': '2.25rem',
      '2xl': '2.5rem',
      '3xl': '2.75rem',
      '4xl': '3rem',
      '5xl': '5rem'
    },
    colors: {},
    textColor: {
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
      theme: "var(--color-text-theme)",
      "default-soft": "var(--color-text-default-soft)",
      inverse: "var(--color-text-inverse)",
      "inverse-soft": "var(--color-text-inverse-soft)",
      heart: "var(--color-bg-secondary)",
      white: "#fdfdfd",
      beige: "#fef7c6",
      grey: "777",
      slate: "rgb(156 163 175)",
    },
    backgroundColor: {
      primary: {
        default: "var(--color-bg-primary)",
        light: "var(--color-bg-primary-light)",
        medium: "var(--color-bg-primary-medium)",
        dark: "var(--color-bg-primary-dark)",
        grey: "#ccc",
      },
      secondary: "var(--color-bg-secondary)",
      other: "var(--color-bg-other)",
      inverse: "var(--color-bg-inverse)",
      beige: "#f4efed",
      surface: "var(--color-surface)",
      twitter: "var(--color-social-twitter)",
      facebook: "var(--color-social-facebook)",
      reddit: "var(--color-social-reddit)",
      pinterest: "var(--color-social-pinterest)",
    },
    fontWeights: {
      light: "300",
      normal: "400",
      semibold: "500",
      bold: "600"
    },
  },
  plugins: [],
}