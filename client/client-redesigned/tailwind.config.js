/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0029FF",
        secondaryColor: "#0D1821",
        lightBlue: "#0029FF",
        darkBlue: "#06176E",
        black: "#22201B",
        grey: "#D7D7D7",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}