/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        font: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
