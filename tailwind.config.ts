import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        'dark-rose': '#0b080e',
        'rose-velvet': '#1a0f1e',
        'dusty-rose': '#e8a2b8',
        'champagne': '#d4a853',
        'champagne-light': '#f0c97a',
        'champagne-pale': '#fdf3e0',
        'gold': '#c9a84c',
        'gold-light': '#e8c96a',
        'rose-glow': '#c4637a',
        'rose-dark': '#8b3a54',
        'emerald-glow': '#10d9a4',
        'glass-white': 'rgba(255,255,255,0.05)',
        'glass-border': 'rgba(212,168,83,0.2)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'typing': 'typing 0.1s steps(1) infinite',
        'badge-pulse': 'badgePulse 2s ease-in-out infinite',
        'gradient-x': 'gradientX 4s ease infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(196, 99, 122, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(196, 99, 122, 0.6), 0 0 80px rgba(196, 99, 122, 0.2)' },
        },
        badgePulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(212, 168, 83, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(212, 168, 83, 0.8), 0 0 50px rgba(212, 168, 83, 0.3)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundSize: {
        '200%': '200%',
        '300%': '300%',
      },
    },
  },
  plugins: [],
}

export default config
