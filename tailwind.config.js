/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        nunito:"'Nunito Sans', sans-serif",
        roboto:"'Roboto', sans-seri"
      },
      colors: {
        logoRed: '#AD131B',
      }
    },  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}

