/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        'surface-lt': 'var(--color-surface-lt)',
        'surface-dk': 'var(--color-surface-dk)',
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
        'on-primary': 'var(--color-on-primary)',
        'on-primary-lt': 'var(--color-on-primary-lt)',
        'on-primary-dk': 'var(--color-on-primary-dk)',
        'on-primary-inverse': 'var(--color-on-primary-inverse)',
        gray: 'var(--color-gray)'
      },
      fontSize: {
        xxs: "var(--fs-50)",
        xs: "var(--fs-100)", 
        sm: "var(--fs-200)", 
        base: "var(--fs-300)",
        "lg": "var(--fs-400)",
        "xl": "var(--fs-500)",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.responsive-text': {
          '@apply text-xs md:text-sm lg:text-base': {},
        },
        '.secondary-heading': {
          '@apply font-heading text-primary font-bold text-center text-2xl': {}
        },
        '.tertiary-heading': {
          '@apply font-serif font-medium text-lg': {}
        }
      })
    }
  ],
};
