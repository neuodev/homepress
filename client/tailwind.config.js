module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: theme => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
      gray: theme('colors.gray.400'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
