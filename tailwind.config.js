/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#4CAF50", // Jiji-inspired green
          blue: "#2196F3", // OLX-inspired blue
        },
      },
    },
  },
  plugins: [],
};
