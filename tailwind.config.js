/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Use "sans" as the default
        poppins: ['Poppins', 'sans-serif'], // Add a specific name if desired
      },
      colors: {
        'gray': '#6F6F6F', 
        'dgray': '#1E1E1E', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-textshadow'),
  ],
}