/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        anemo: {
          DEFAULT: "#359697",
          light: "#5ecea0",
          dark: "#25885f",
        },
        cryo: {
          DEFAULT: "#4682B4",
          light: "#85c5fb",
          dark: "#3f76a5",
        },
        dendro: {
          DEFAULT: "#608a00",
          light: "#83e01f",
          dark: "#4c880c",
        },
        electro: {
          DEFAULT: "#945dc4",
          light: "#b984e8",
          dark: "#7c4ea5",
        },
        geo: {
          DEFAULT: "#debd6c",
          light: "#e5c371",
          dark: "#bda15c",
        },
        hydro: {
          DEFAULT: "#00BFFF",
          light: "#63dbf9",
          dark: "#0882a2",
        },
        pyro: {
          DEFAULT: "#EC4923",
          light: "#ed532f",
          dark: "#c32a06",
        },
        rarity: {
          1: "#a4a4a4",
          2: "#5D8C81",
          3: "#6faaca",
          4: "#917ab1",
          5: "#9a6d43",
        },
      },
    },
  },
  plugins: [],
};
