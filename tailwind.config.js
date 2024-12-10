/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "markazi": ['"Markazi Text"', "serif"],
      "karla": ["Karla", "serif"]
    },
    extend: {
      colors: {
        primary: {
          green: '#495E57',
          yellow: '#F4CE14',
        },
        secondary: {
          orange: '#EE9972',
          peach: '#FBDABB',
        },
        highlight: {
          light: '#EDEFEF',
          dark: '#333333',
        },
      }
    },
  },
  plugins: [],
}

