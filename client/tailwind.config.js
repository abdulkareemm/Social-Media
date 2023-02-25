module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron, sans-serif",
      secondary: "Inter, sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        background: "#f3f3f3",
        white: "#fff",
        pink: "pink",
        transparent: "transparent",
        Yellow: "#f5c32c",
        Orange: "#fca61f",
        Black: "#242d49",
        Gray: "rgba(36,45,73,0.65)",
        hrColor: "#cfcdcd",
        cardColor: "rgba(255,255,255,0.64)",
        buttonBg: "linear-gradient(98.63deg,#f9a225 0%,#f95f35 100%)",
        inputColor: "rgba(40,52,62,0.07)",
        Photo: "#4CB256",
        Vidoe: "#4A4EB7",
        Location: "#EF5757",
        Shedule: "#E1AE4A",
      },
      boxShadow: {
        profileShadow: "0 4px 17px 2px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
