module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'future': "url('/introduction/bg-future.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
