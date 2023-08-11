/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#fcd535',
        textColor: '#1e2329',
        bgDarkMode: '#181a20',
        textDarkMode: '#eaecef',
      },
      backgroundImage: {
        'text-gradient': `linear-gradient(
          119deg,
          #FE4CDF -11.67%,
          #FE4C4C 21.03%,
          #FFDA4C 33.54%
        )`,
      },
      backgroundSize: {
        'text-bgsize': `300% 100%`,
      },
    },
  },
  plugins: [],
};
