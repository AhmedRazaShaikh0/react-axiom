/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "sm": "320px",
      "mm": "375px",
      "ml": "425px",
      "mn": "560px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1440px",
      "2xl": "2560px",
    },

    extend: {
      display: ["group-hover"]
    },
    
  },
  plugins: [],
}
