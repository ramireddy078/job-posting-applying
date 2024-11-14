/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#141414",
        "blue":"#3575E2"
      }
    },
  },
  plugins: [],
}

