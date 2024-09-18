/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "serif"],
    },
    extend: {
      boxShadow: {
        'shadowmd': '0 35px -60px -15px rgba(55, 65, 81, 0.3)',
      },
      colors: {
        "purple-shade": "rgb(79, 70, 229)",
        "gray-color": "rgb(55, 65, 81)",
        "black-shade": "rgb(17, 24, 39)",
        "light-gray": "#e5e7eb",
        "lightgray-400": "#94a3b8",
        "body-gray": "#f3f4f6",
        "blue-color": "rgb(59, 130, 246)",
        "black-shade": "rgb(9, 9, 11)",
        "gray-text": "rgb(113, 113, 122)",
        "darkmode-100": "#1a1625",
        "darkmode-300": "#2f2b3a",
        "primary-500": "#a688fa",
        "dark-600":"#dbdbdb",
        "dark-200":"#3f3f3f",
        "inputdark-200":"#2f2b3a",
      },
    },
  },
  plugins: [],
};
