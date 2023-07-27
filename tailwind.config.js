/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#000'
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
        bg2: `url('../public/images/bg2.jpg')`
      },
      height: {
        '32': '32rem',
        '150': '50rem',
        '28': '28rem',
        '46': '600px',
        '688': '688px'
      },
      width: {
        '350': '350px',
        '600': '600px'
      },
      padding: {
        '30': '30rem'
      },
      fontSize: {
        '300': '300px'
      },
      letterSpacing: {
        tightest: '-.075em'
      }
    },
  },
  plugins: [],
}

