// filepath: displaypage/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, black 0%, black 00%, #200000 100%)', // Darker red color
      },
    },
  },
  plugins: [],
}