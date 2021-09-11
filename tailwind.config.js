module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "zld-navy": "#1B1C27",
        "zld-light-navy": "#28293D",
        "zld-white": "#F4F4F4",
        "zld-red": "#B21D1D",
        "zld-cream": "#FCF1D3",
        "zld-yellow": "#FFCC01"
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1124",
        xl: "1124",
        "2xl" : "1124",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}