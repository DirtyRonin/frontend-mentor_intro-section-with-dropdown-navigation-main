/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)'
      },
      height: {
        mobile: '775px',
        desktop: '900px'
      },
      width: {
        mobile: '375px',
        desktop: '1440px',
        'mobile-navigation': '240px'
      }
    }
  },
  plugins: []
}
