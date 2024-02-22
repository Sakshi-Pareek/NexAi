/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nexai': "url('assets/images/webp/ThingsEasierBg.webp)",
        'utility': "url('assets/images/webp/UtilityBg.webp')",
        'getintouch': "url('assets/images/webp/GetInTouchBg.webp')",
        'footerbg': "url('assets/images/webp/FooterBg.webp')",
        'earth': "url('assets/images/gif/GloblyEarthGif.gif')",

      },
      backgroundSize: {
        'full': "100% 100%",
      },
      screens: {
        'fulldesk': "1600px",
        'desktop': "1365px"
      }

    },
  },
  plugins: [],
}

