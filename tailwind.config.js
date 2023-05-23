/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
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
        gray: "var(--color-gray)",
        slate: "rgb(156 163 175)",
      },
      fontSize: {
        xxs: "var(--fs-50)", // 0.8rem
        xs: "var(--fs-100)", // 1rem
        sm: "var(--fs-200)", // 1.25rem
        base: "var(--fs-300)",
        "lg": "var(--fs-400)",
        "1xl": "var(--fs-500)",
        "2xl": "var(--fs-600)",
      },
      fontFamily: {
        heading: ["Fraunces"],
        subheading: ["Lora"],
        serif: ["Oswald"],
        body: ["Oswald"],
      },
    },
  },
  plugins: [],
};
