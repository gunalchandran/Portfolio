/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
  void: {
    DEFAULT: '#0B0906',
    soft: '#15110A',
    raised: '#1F1810',
    line: '#33291A'
  },
  signal: {
    DEFAULT: '#F4C430',
    dim: '#A6861F',
    bright: '#FFDD57'
  },
  flare: {
    DEFAULT: '#FF6B35',
    dim: '#C9502A',
    bright: '#FF9466'
  },
  paper: {
    DEFAULT: '#F5EFE2',
    dim: '#B9AE99',
    faint: '#7C7364'
  }
},
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
  'grid-fade': 'linear-gradient(to bottom, transparent, #0B0906 90%)',
  'signal-glow': 'radial-gradient(circle at 50% 0%, rgba(244,196,48,0.16), transparent 60%)',
  'flare-glow': 'radial-gradient(circle at 50% 100%, rgba(255,107,53,0.13), transparent 60%)'
},
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
}
