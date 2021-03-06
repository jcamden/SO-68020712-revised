module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontSize: {
        "small-lg": ["0.75rem", "0.9375rem"], 
        "small": ["0.75rem", "0.9375rem"], 
      },
      colors: {
        test: '#ff0000',
    },
  },
  plugins: [],
}