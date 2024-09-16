/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        modak: ['Modak', 'sans-serif'],
        quantico: ['Quantico', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

