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
    colors: {
      preto88: '#1F1F1F',
      branco100: "#fff",
      branco44: "#818181",
      vermelho100: '#F32626',
      azul100: '#3790E1',
      amarelo100: '#F4CD00'
    },
    boxShadow: {
      '3xl': '0px 35px 40px -15px rgba(0, 0, 0, 0.25)',
    },  
  },
  plugins: [],
};
