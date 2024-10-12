/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "400px",
      tablet: "768px",
      desktop: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
