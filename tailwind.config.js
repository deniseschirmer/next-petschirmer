module.exports = {
  theme: {
    extend: {
      colors: {
        "dark-green": "#206128",
        green: "#26682b",
        black: "#000000",
        white: "#ffffff",
        light: "#c4c4c4",
        "light-bg": "#929292",
        brown: "#b07318",
        primary: "rgb(146, 146, 146)",
        bg: "rgb(244, 244, 255)",
      },
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ...
};
