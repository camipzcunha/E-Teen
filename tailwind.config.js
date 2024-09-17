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
    },
  },
  plugins: [],
};
