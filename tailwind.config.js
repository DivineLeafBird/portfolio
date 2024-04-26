/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5C198D",
        secondary: "#1A0D42",
        tertiary: "#FFFFFF",
        pink: "#E9D3F6",
        blue: "#00D8FF",
      },
    },
  },
  plugins: [],
};
