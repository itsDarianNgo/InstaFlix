/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ejs}',
    "./src/*.{html,js,css,ejs}",
    "./views/*.ejs",
  ],
  theme: {
    clipPath: {
        mypolygon: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem))",
        myinset: "inset(200px 0px)",
    },
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require('tailwind-scrollbar-hide')
  ]
}
