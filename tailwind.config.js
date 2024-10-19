/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 20px #000',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
