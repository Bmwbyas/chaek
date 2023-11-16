/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", 'sans-serif'],
   
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require ('@tailwindcss/typography'),
  ],
}

