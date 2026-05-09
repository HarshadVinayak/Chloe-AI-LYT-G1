/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
        },
        eco: {
          neon: '#ccff00',
          glow: 'rgba(204, 255, 0, 0.5)',
          dark: '#0f2105',
        },
        cyan: {
          neon: '#00f2ff',
          glow: 'rgba(0, 242, 255, 0.5)',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'neural-pulse': 'neuralPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        neuralPulse: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

