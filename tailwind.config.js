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
      colors: {
        primary: 'var(--color-primary)',
        'primary-lt': 'var(--color-primary-lt)',
        'primary-dk': 'var(--color-primary-dk)',
        'primary-inverse': 'var(--color-primary-inverse)',
        secondary: 'var(--color-secondary)',
        'secondary-lt': 'var(--color-secondary-lt)',
        'secondary-dk': 'var(--color-secondary-dk)',
        'secondary-inverse': 'var(--color-secondary-inverse)',
        accent: 'var(--color-accent)',
        'accent-lt': 'var(--color-accent-lt)',
        'accent-dk': 'var(--color-accent-dk)',
        surface: 'var(--color-surface)',
        'on-lt': 'var(--color-on-lt)',
        'on-dk': 'var(--color-on-dk)',
        dark: 'var(--color-dark)'
      },
      textColor: {
        primary: 'var(--color-primary)',
        'primary-lt': 'var(--color-primary-lt)',
        'primary-dk': 'var(--color-primary-dk)',
        'primary-inverse': 'var(--color-primary-inverse)',
        secondary: 'var(--color-secondary)',
        'secondary-lt': 'var(--color-secondary-lt)',
        'secondary-dk': 'var(--color-secondary-dk)',
        'secondary-inverse': 'var(--color-secondary-inverse)',
        accent: 'var(--color-accent)',
        'accent-lt': 'var(--color-accent-lt)',
        'accent-dk': 'var(--color-accent-dk)',
        'on-lt': 'var(--color-on-lt)',
        'on-dk': 'var(--color-on-dk)',
        gray: 'var(--color-gray)'
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
