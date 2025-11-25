/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // BAAO Dojo Brand Colors - 道場のテーマカラー
        dojo: {
          green: '#2F4538', // 深緑（メインカラー）
          'green-light': '#3D5A47', // 明るい深緑
          'green-dark': '#1F2E26', // 暗い深緑
          gold: '#D4AF37', // 金色（アクセント）
          'gold-light': '#E5C158', // 明るい金色
          'gold-dark': '#B8941F', // 暗い金色
          indigo: '#0F4C81', // 藍色（アクセント）
          'indigo-light': '#1A6AAD', // 明るい藍色
          'indigo-dark': '#0A3558', // 暗い藍色
        },
        ink: {
          DEFAULT: '#2C2C2C', // 墨色
          dark: '#1A1A1A', // 炭色
          light: '#4A4A4A', // 明るい墨色
        },
        bamboo: {
          DEFAULT: '#4A6741', // 竹の緑
          light: '#6B8E23', // 明るい竹の緑
        },
        washi: {
          DEFAULT: '#F5F1E8', // 和紙のベージュ
          light: '#FAF7F0', // 明るい和紙
          dark: '#E8DCC4', // 暗い和紙
        },
        // 互換性のため既存カラーも保持
        primary: {
          DEFAULT: '#2F4538',
          light: '#3D5A47',
          dark: '#1F2E26',
        },
        accent: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B8941F',
        },
        secondary: {
          DEFAULT: '#0F4C81',
          light: '#1A6AAD',
          dark: '#0A3558',
        },
        background: {
          DEFAULT: '#F5F1E8',
          light: '#FAF7F0',
          dark: '#E8DCC4',
        },
        text: {
          DEFAULT: '#1D1A15',
          light: '#4B4135',
          dark: '#1A1A1A',
        },
        vermillion: {
          DEFAULT: '#E74C3C', // 朱色
          dark: '#C0392B', // 暗い朱色
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'Meiryo', 'sans-serif'],
        serif: ['var(--font-noto-serif)', 'Yu Mincho', 'Georgia', 'serif'],
        brush: ['var(--font-yuji-brush)', 'Yu Mincho', 'serif'], // 筆文字風フォント
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'ink-spread': 'inkSpread 1.2s ease-out',
        'shoji-open': 'shojiOpen 0.5s ease-out',
        'brush-draw': 'brushDraw 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        inkSpread: {
          '0%': {
            opacity: '0',
            filter: 'blur(10px)',
            transform: 'scale(0.8)',
          },
          '50%': {
            filter: 'blur(5px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0px)',
            transform: 'scale(1)',
          },
        },
        shojiOpen: {
          '0%': {
            clipPath: 'inset(0 100% 0 0)',
            opacity: '0',
          },
          '100%': {
            clipPath: 'inset(0 0 0 0)',
            opacity: '1',
          },
        },
        brushDraw: {
          '0%': {
            strokeDashoffset: '1000',
            opacity: '0',
          },
          '100%': {
            strokeDashoffset: '0',
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
}

