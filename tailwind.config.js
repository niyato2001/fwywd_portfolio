module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        black:{
          font:'#384359',
          bg:'#262c3a',
        },
        green:{
          font:'#008c8d',
          bg:'#6bc2c3',
          prolight:'#c5eaea',
          prodark:'#2bb9ba',
          line:'#c5eaea',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
