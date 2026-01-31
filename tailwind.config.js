/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      herobg: "url('./imgs/rasm.png')",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
