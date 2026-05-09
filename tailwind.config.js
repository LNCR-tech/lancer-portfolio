/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050d1a',
          900: '#0a1628',
          800: '#0f2040',
          700: '#1a3a6b',
          600: '#2a5f8a'
        },
        cyan: {
          400: '#00d4ff',
          500: '#1e90ff',
          glow: 'rgba(0, 212, 255, 0.2)'
        },
        text: {
          primary: '#e8f4fd',
          secondary: '#7aa8c7',
          muted: '#2a5f8a'
        },
        light: {
          bg: '#f0f6ff',
          card: '#ffffff',
          text: '#0a1628',
          secondary: '#3a5f8a',
          accent: '#0066cc',
          border: '#b8d4f0'
        }
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'cyan-sm': '0 4px 15px rgba(0, 212, 255, 0.15)',
        'cyan-md': '0 8px 30px rgba(0, 212, 255, 0.2)',
        'cyan-lg': '0 15px 50px rgba(0, 212, 255, 0.3)'
      },
      animation: {
        typewriter: 'typewriter 0.1s steps(1) forwards',
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        scan: 'scan 2s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

