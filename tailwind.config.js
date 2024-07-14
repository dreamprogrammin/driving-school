/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    color: {
      dark: '#171717'
    },
    extend: {},
    fontFamily: {
      display: ['Oswald'],
      body: ['Oswald']
    }
  },
  plugins: []
}
