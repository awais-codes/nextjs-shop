/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          border: 'var(--color-theme-border)',
          main: 'var(--color-theme-main)',
          'main-strong': 'var(--color-theme-main-strong)',
        },
      },
      backgroundImage: {
        'hero-circle': "url('public/assets/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
}
