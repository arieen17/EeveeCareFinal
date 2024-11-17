
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dogica: ["Dogica", "sans-serif"],
        dogicabold: ["DogicaBold", "sans-serif"],
        Stanberry: ["Stanberry", "sans-serif"],
        Bandy: ["Bandy", "sans-serif"],
        BandyBold: ["BandyBold", "sans-serif"],
      },
      colors: {
        primary: "#f7ba34",
        secondary: "#69a79c",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
        eevee: "#C5A068",
        sylveon: "#F59BAD",
        leafeon: "#89D89B",
        espeon: "#D9BAD2",
        umbreon: "#371750",
        flareon: "#e68d63",
        vaporeon: "#336E8C",
        jolteon: "#FCE487",
        glaceon: "#7EC4BC"

      },
      container: {
        center:true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}


