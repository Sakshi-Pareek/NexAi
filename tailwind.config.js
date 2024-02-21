/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nexai': "url('assets/images/png/ThingsEasierBg.png)",
        'utility': "url('assets/images/png/UtilityBg.png')",
        'getintouch': "url('assets/images/png/GetInTouchBg.png')",
        'footerbg': "url('assets/images/png/FooterBg.png')",
        'earth': "url('assets/images/gif/GloblyEarthGif.gif')",

      },
      backgroundSize: {
        'full': "100% 100%",
      },
      screens: {
        'desktop': "1365px"
      }

    },
  },
  plugins: [],
}

