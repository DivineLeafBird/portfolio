/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom colors
      colors: {
        primary: "#5C198D",
        secondary: "#1A0D42",
        tertiary: "#FFFFFF",
        pink: "#E9D3F6",
        blue: "#00D8FF",
      },
      // Animations
      animation: {
        "bounce-x": "bounce-x 2.0s infinite",
        "bounce-y": "bounce-y 2.0s infinite",
        scroll: "scroll-left 160s linear infinite",
      },
      // Keyframes
      keyframes: {
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
        "bounce-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
