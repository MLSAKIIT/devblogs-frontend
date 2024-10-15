/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#9D5AE3",
        secondary: "#484848",
        darkFooter: "#333333", // Dark mode footer color
        lightFooter: "#F9FAFB", // Light mode footer color
      },
    },
  },
  plugins: [],
};
