/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient" : "linear-gradient(30deg, #9333ea, #fbbf24)"
      }
    },
  },
  plugins: [],
}

