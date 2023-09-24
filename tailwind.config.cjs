/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["fantasy"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
