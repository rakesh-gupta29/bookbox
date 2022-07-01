/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "510px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontSize: {
      sm: "0.9rem",
      base: "1rem",
      lg: "1.125rem",
      para: "1.250rem",
      subtitle: "1.5rem",
      title: "2.5rem",
      heading1: "3rem",
      heading2: "4rem",
      title: "5rem",
    },
    fontFamily: {
      light: ["light", "sans-serif"],
      regular: ["regular", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "#006EB6",
        blueBg: "#006EB6",
        blue2: "#1C6EA5",
        orange: "#FB6D3B",
        orangeLight: "#FFF0EB",
        dark: "#444444",
        smoke: "#E5E5E5",
        gray: "#d8d8d8",
      },
    },
  },
  plugins: [],
});
