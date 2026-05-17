import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Lima Plank palette — warm paper, walnut wood, moss, ember, brass.
        // Reads as Main Street artisan rather than supper-club dark.
        paper: {
          50: '#FBF8EE',
          100: '#F7F1E0',
          200: '#F0E7CC',
          300: '#E6D9B0',
          400: '#D9C68C',
          500: '#C8B16A',
        },
        linen: '#FAF6EC',
        ink: {
          50: '#3D332A',
          100: '#2D2620',
          200: '#221C17',
          300: '#1C1612', // primary text
          400: '#120E0B',
          500: '#080604',
        },
        plank: {
          50: '#F2E5D4',
          100: '#E2C7A3',
          200: '#C99E6C',
          300: '#A8743D',
          400: '#7E5128',
          500: '#5B3B22', // walnut wood
          600: '#3E280F',
          700: '#291906',
        },
        moss: {
          50: '#E6EDE6',
          100: '#C6D3C5',
          200: '#9DB29D',
          300: '#6F8770',
          400: '#506751',
          500: '#3E5544', // primary moss
          600: '#2C3F31',
          700: '#1B281F',
        },
        ember: {
          50: '#FBE7DD',
          100: '#F4C2AB',
          200: '#E89472',
          300: '#D26E45',
          400: '#B85433', // terracotta
          500: '#933E22',
          600: '#6E2D17',
          700: '#481B0D',
        },
        brass: {
          50: '#FBF0D8',
          100: '#F2DBA0',
          200: '#E2BE6E',
          300: '#D1A24E',
          400: '#C99B4B', // warm gold
          500: '#A07730',
          600: '#74561F',
          700: '#46340F',
        },
        sky: {
          chalk: '#9BB0BD',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', '"Fraunces"', 'Georgia', 'serif'],
        body: ['var(--font-body)', '"Inter"', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', '"Caveat"', 'cursive'],
        mono: ['var(--font-mono)', '"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'paper-grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.36 0 0 0 0 0.24 0 0 0 0 0.10 0 0 0 0.16 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'wood-grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='w'%3E%3CfeTurbulence baseFrequency='0.02 0.6' numOctaves='3' seed='5'/%3E%3CfeColorMatrix values='0 0 0 0 0.36 0 0 0 0 0.24 0 0 0 0 0.13 0 0 0 0.25 0'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23w)'/%3E%3C/svg%3E\")",
        'speckle':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='s'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.2' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23s)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'slow-spin': 'slow-spin 80s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
      maxWidth: {
        page: '1500px',
      },
    },
  },
  plugins: [],
};

export default config;
