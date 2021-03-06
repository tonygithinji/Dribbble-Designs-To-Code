const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    // './*.js',
    './index.html'
  ],
  css: ['./tailwind.css'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})


module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ],
};