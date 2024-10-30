/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customFromAboutUsBg : "#F0F8FF",
        customFromAboutDetailsBg : "#FFFFFF",
        customFromAboutUsBtnBg : "#0C98EB"
      }
    },
  },
  plugins: [],
}

