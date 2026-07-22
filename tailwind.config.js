/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#34293f',
        coral: '#ff7667',
        cream: '#fff8f3',
        lavender: '#eae4ff',
        butter: '#fff0b5'
      },
      fontFamily: { rounded: ['ui-rounded', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'] },
      boxShadow: {
        float: '0 18px 50px rgba(115, 75, 104, .14)',
        soft: '0 8px 24px rgba(115, 75, 104, .1)'
      },
      animation: {
        bob: 'bob 4s ease-in-out infinite',
        'bob-delayed': 'bob 4.8s ease-in-out 1s infinite',
        pop: 'pop .45s cubic-bezier(.2,1.4,.45,1) both',
        drift: 'drift 12s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 1.2s ease-in-out infinite'
      },
      keyframes: {
        bob: { '0%,100%': { transform: 'translateY(0) rotate(-2deg)' }, '50%': { transform: 'translateY(-12px) rotate(2deg)' } },
        pop: { '0%': { opacity: '0', transform: 'scale(.9) translateY(14px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' } },
        drift: { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(14px,-18px)' } },
        pulseSoft: { '0%,100%': { transform: 'scale(.88)', opacity: '.4' }, '50%': { transform: 'scale(1.08)', opacity: '1' } }
      }
    }
  },
  plugins: []
}
