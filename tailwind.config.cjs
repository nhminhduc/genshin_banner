/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "anemo": {
          "normal": "#359697",
          "light": "#5ecea0",
          "dark": "#25885f"
        },
        "cryo": {
          "normal": "#4682B4",
          "light": "#85c5fb",
          "dark": "#3f76a5"
        },
        "dendro": {
          "normal": "#608a00",
          "light": "#83e01f",
          "dark": "#4c880c"
        },
        "electro": {
          "normal": "#945dc4",
          "light": "#b984e8",
          "dark": "#7c4ea5"
        },
        "geo": {
          "normal": "#debd6c",
          "light": "#e5c371",
          "dark": "#bda15c"
        },
        "hydro": {
          "normal": "#00BFFF",
          "light": "#63dbf9",
          "dark": "#0882a2"
        },
        "pyro": {
          "normal": "#EC4923",
          "light": "#ed532f",
          "dark": "#c32a06"
        },
        "epic": "#9174a9",
        "legendary": "#dca454",
      }
    }
  },
  plugins: [],
};
