/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-blue": "#1C2541",
        "light-blue": "#3A506B",
        "dark-blue": "#0B132B",
      },
      keyframes: {
        "trans-navbar": {
          from: { opacity: "0", transform: "translateX(-2%)", width: "95%" },
          to: { opacity: "1", transform: "translateX(0)", width: "90%" },
        },
      },
      animation: {
        "trans-navbar-component": "trans-navbar 0.4s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
