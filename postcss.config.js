const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
var isModeDevelopment = process.env.NODE_ENV === 'development';
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    !isModeDevelopment
      ? cssnano({
          preset: 'default'
        })
      : null,
    !isModeDevelopment
      ? purgecss({
          content: ['./dist/**/*.html'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
      : null
  ]
};
