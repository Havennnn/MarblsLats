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
      keyframes: {
        // Define custom keyframes
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        // Link keyframes to animation utilities
        wiggle: "wiggle 1s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-textshadow'),
  ],
}