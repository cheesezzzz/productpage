/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange': 'hsl(26, 100%, 55%)',
      'pale-orange': 'hsl(25, 100%, 94%)',
      'dark-blue': 'hsl(220, 13%, 13%)',
      'dark-gray-blue': 'hsl(219, 9%, 45%)',
      'gray-blue': 'hsl(220, 14%, 75%)',
      'light-gray-blue': 'hsl(223, 64%, 98%)',
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 0%)'
    },
    fontFamily: {
      'kumbh': ['Kumbh Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}