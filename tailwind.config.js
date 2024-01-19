/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'hard': '0px 10px 0px -7px #000000',
      },
    }
  },
  plugins: [],
}