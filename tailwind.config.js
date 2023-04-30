/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily : {
        appleBold : ['apple-bold', 'sans-serif'],
        appleMedium : ['apple-medium', 'sans-serif'],
        appleRegular : ['apple-regular', 'sans-serif'],
        appleBoldItalic : ['apple-BoldItalic', 'sans-serif'],
        appleItalic : ['apple-Italic', 'sans-serif'],
        appleSemiItalic : ['apple-SemiItalic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
