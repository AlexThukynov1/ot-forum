/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tilium: ['Titillium Web', 'sans-serif'],
      },
      colors: {
        logo: {
          green: '#5cb85c',
          darkGreen: '#3d8b3a',
          gray: '#bbb',
          black: '#373a3c',
          'light-black': '#999',
          'light-gray': '#ddd',
          'semi-gray': '#aaa',
          'page-hover-bg': '#eceeef',
          'tag-cloud-bg': '#f3f3f3'
        }
      },
      spacing: {
        navItem: '0.425rem',
        m03: '0.3rem',
        '02': '0.2rem',
        '06': '0.6rem'
      },
      boxShadow: {
        banner: 'inset 0 8px 8px -8px rgb(0 0 0 /30%), inset 0 -8px 8px -8px rgb(0 0 0 /30%'
      },
      dropShadow: {
        logo: '0px 1px 3px rgb(0 0 0 / 30%'
      },
      fontSize: {
        logo: '3.5rem',
        date: '0.8rem',
      },
      borderRadius: {
        'btn-sm': '0.2rem',
        tag:'10rem'
      }
    },
  },
  plugins: [],
}
