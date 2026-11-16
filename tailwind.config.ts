import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.22)',
      },
      colors: {
        accent: {
          50: '#fff1f0',
          100: '#ffe3df',
          400: '#ff7a66',
          500: '#ef5c47',
          600: '#d74838',
          700: '#b63527',
        },
      },
    },
  },
  plugins: [],
};

export default config;
