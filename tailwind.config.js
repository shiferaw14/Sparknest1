/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sparknest: {
          green: '#07501B',
          gold: '#C9921A',
          mint: '#CFFFDC',
        },
      },
      fontFamily: {
        sans: ['Inclusive Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
