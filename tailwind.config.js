/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9D5AE3",
        secondary: "#484848",
        background: "#2E2E2E",
      },
    },
  },
  plugins: [],
};
