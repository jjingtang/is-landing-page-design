/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#D4621A',
        'burnt-orange': '#C2541A',
        cream: '#F5F0E8',
        parchment: '#EDE5D5',
        sand: '#D9CEBC',
        charcoal: '#2E2A25',
        driftwood: '#7A6E62',
        dust: '#B5A898',
        white: '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fog-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-18px, 10px) scale(1.04)' },
          '66%': { transform: 'translate(12px, -12px) scale(0.97)' },
        },
        'fog-drift-b': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '40%': { transform: 'translate(20px, -8px) scale(1.05)' },
          '80%': { transform: 'translate(-10px, 14px) scale(0.96)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'liquid-shift': {
          '0%, 100%': { borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%' },
          '50%': { borderRadius: '40% 60% 45% 55% / 60% 40% 50% 40%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'drop-fall': {
          '0%': { opacity: '0', transform: 'scaleY(0)', transformOrigin: 'top' },
          '10%': { opacity: '0.55', transform: 'scaleY(1)' },
          '85%': { opacity: '0.3' },
          '100%': { opacity: '0', transform: 'translateY(90px) scaleY(1)' },
        },
      },
      animation: {
        'fog-drift': 'fog-drift 22s ease-in-out infinite',
        'fog-drift-b': 'fog-drift-b 30s ease-in-out infinite',
        'fade-in': 'fade-in 1.4s cubic-bezier(0.22,1,0.36,1) both',
        'liquid-shift': 'liquid-shift 8s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        'drop-fall': 'drop-fall 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
