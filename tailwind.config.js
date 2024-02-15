/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",

    "./*.{html,js}",

    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('../assets/empty-blackboard.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

