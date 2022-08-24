/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '40-r':'40rem',
        '35-r': '35rem'
      },
      height:{
        '40-r':'40rem',
        '35-r': '35rem'
      },
      boxShadow:{
        '5xl':'20px 20px 50px rgba(0, 0, 0, 0.5)',

      },
      fontFamily:{
        'Poppins':['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
