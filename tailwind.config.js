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
        "body-gray":"#f3f4f6",
        "blue-color":"rgb(59, 130, 246)",
        "black-shade":"rgb(9, 9, 11)",
        "gray-text":"rgb(113, 113, 122)"
      },
    },
  },
  plugins: [],
}

