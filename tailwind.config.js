/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily:{
      inter:["Inter", "serif"],
    },
    extend: {
      colors:{
        "purple-shade":"rgb(79, 70, 229)",
        "gray-color":"rgb(55, 65, 81)",
        "black-shade":"rgb(17, 24, 39)",
        "light-gray":"#e5e7eb",
        "lightgray-400":"#94a3b8",
      },
    },
  },
  plugins: [],
}

