/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F3EE',
          dark: '#EDE6DB',
        },
        parchment: '#FDFCFA',
        'gray-light': '#C8C2BC',
        'gray-mid':   '#8A8480',
        'gray-dark':  '#3A3633',
        red: {
          DEFAULT: '#B8222A',
          light:   '#D43D46',
        },
        ink: '#1E1B19',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.28em',
        wide3: '0.18em',
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
        fadeUp:  'fadeUp 0.8s ease both',
        fadeIn:  'fadeIn 1.2s ease both',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

