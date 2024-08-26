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
      scropion: '#5C5C5C'
    },
    extend: {
      animation: {
        bounce: `bounce 0.7s infinite`,
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'none' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
} satisfies Config;
