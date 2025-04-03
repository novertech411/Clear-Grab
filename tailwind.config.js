/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenk: "#447cf4", // Jiji-inspired green
        primeblue: "#1cac1c", // OLX-inspired blue

        secondry: {
          funnyblue: "#3094f8",
        },
      },
    },
  },
  plugins: [],
};
