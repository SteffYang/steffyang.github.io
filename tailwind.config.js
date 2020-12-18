module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
