/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,ejs}',
    "./src/*.{html,js,css,ejs}",
    "./views/*.ejs",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
