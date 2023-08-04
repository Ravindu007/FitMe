/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryColor':'#ABFF32',
        'secondaryColor':'#2E3840'
      }
    },
  },
  plugins: [],
}