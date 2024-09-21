/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        modak: ["Modak", "sans-serif"],
        quantico: ["Quantico", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
    },
  
    boxShadow: {
      '3xl': '0px 35px 40px -15px rgba(0, 0, 0, 0.25)',
      'lg': '0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },  
  },
  plugins: [
   
  ],
};
