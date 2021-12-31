// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    tailwindcss: { config: './tailwind.config.js' },
    autoprefixer: {},
  },
};

const tailwindcss = require('tailwindcss');

mix.sass('resources/sass/app.scss', 'public/css').options({
  processCssUrls: false,
  postCss: [tailwindcss('./path/to/your/tailwind.config.js')],
});
