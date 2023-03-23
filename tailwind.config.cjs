/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'DME': '#2b3945',
        'DMB': '#202c37',
        'LMT': '#111517',
        'LMInput': '#858585',
        'LMB': '#fafafa',
        'DMT': '#ffffff'
      },
      fontFamily:{
        'nunito':['nunito', 'sans-serif']
      }

    }
  },
  plugins: [],
}
