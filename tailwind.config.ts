import type { Config } from 'tailwindcss';

export default {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      silver: '#CCCCCC',
      alabaster: '#FAFAFA',
      vermilion: '#F84300',
      shark: '#2F3132',
      blue: '#7CC2F2',
      white: '#FFFFFF',
      mercury: '#EAE9E9',
      alto: '#CECECE',
      scropion: '#5C5C5C',
      mineShaft: '#1F1F1F'
    },
    extend: {
      animation: {
        overlapping: `overlapping 3s ease-in-out 1`,
      },
      keyframes: {
        overlapping: {
          '0%': { transform: 'translateX(-500px)'},
          '100%': { transform: 'translateX(1200px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
} satisfies Config;
