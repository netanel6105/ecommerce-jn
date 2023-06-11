/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '4.25': '17rem',
      },
      spacing: {
        '4.25': '17rem',
      }
    },
  },
  plugins: [],
}