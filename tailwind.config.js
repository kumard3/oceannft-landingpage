module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    // colors: {
    //   gradient:
    //     "linear-gradient( 90deg, rgba(255, 255, 255, 0) -1.52%, rgba(255, 255, 255, 0.024) 104.35%), rgba(162, 96, 243, 0.3)",
    // },
    extend: {
      fontFamily: {
        orbitron: " 'Orbitron', sans-serif",
        spartan: "'Spartan', sans-serif",
        rajdhani: "'Rajdhani', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
