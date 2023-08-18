/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        three: 'var(--three-color)',
        title: 'var(--title-color)',
      },
      borderRadius: {
        'default': '12px',
      },
      spacing: {
        'default': '22px',
      },
      fontSize: {
        'responsive-xs': 'var(--font-size-xs)',
        'responsive-sm': 'var(--font-size-sm)',
        'responsive-md': 'var(--font-size-md)',
        'responsive-lg': 'var(--font-size-lg)',
        'responsive-xl': 'var(--font-size-xl)',
        'responsive-xxl': 'var(--font-size-xxl)',
      },
      gridTemplateColumns: {
        '300px': 'repeat(auto-fit, minmax(300px, 1fr))'
      }
    }
  },
  plugins: [],
}

