/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Colorblue: `hsl(223, 87%, 63%)`,
        PaleBlue: `hsl(223, 100%, 88%)`,
        LightRed: `hsl(354, 100%, 66%)`,
        Gray: `hsl(0, 0%, 59%)`,
        VeryDarkBlue: `hsl(209, 33%, 12%)`,
      }
    },
  },
  plugins: [],
}

