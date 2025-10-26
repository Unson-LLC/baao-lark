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
        // BAAO Brand Colors
        primary: {
          DEFAULT: '#1E40AF', // 青系 - 信頼性を表現
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        accent: {
          DEFAULT: '#F59E0B', // アクセント - 道場の和テイスト
          light: '#FBBF24',
          dark: '#D97706',
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F9FAFB',
          dark: '#F3F4F6',
        },
        text: {
          DEFAULT: '#111827',
          light: '#6B7280',
          dark: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'Meiryo', 'sans-serif'],
        serif: ['Georgia', 'Yu Mincho', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
}

