/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Lato', 'sans-serif'],
      },
      colors: {
        'primary': "var(--color-primary)",
        'secondary': "var(--color-secondary)",
        'placeholder': "var(--color-placeholder)",
        'bg': "var(--color-background)",
        'bg-paper': "var(--color-background-paper)",
        'text': "var(--color-text)",
        'border': "var(--color-border)",
      },
      boxShadow: {
        'shadow': "var(--box-shadow)",
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
