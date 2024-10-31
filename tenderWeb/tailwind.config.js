/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "start-blue": "#1768AC",
        "end-blue": "#03256C",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #1768AC, #03256C)",
        "custom-gradientblue":
          "linear-gradient(-90deg, #1768AC 0%, #06BEE1 100%)",
        "custom-gradient2": "linear-gradient(360deg, #1768AC, #03256C)",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "scroll-right": "scrollRight 30s linear infinite",
      },
    },
  },
  plugins: [],
};
