import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A73E8', // Google Blue
          light: '#4285F4',
          dark: '#0D47A1',
        },
        secondary: {
          DEFAULT: '#F5F5F5', // White Smoke
          light: '#FFFFFF',
          dark: '#E0E0E0',
        },
        accent: {
          DEFAULT: '#FFA500', // Orange
          light: '#FFB74D',
          dark: '#F57C00',
        },
        text: {
          DEFAULT: '#333333', // Very Dark Gray
          light: '#666666',
          dark: '#000000',
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'title': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'title-lg': ['48px', { lineHeight: '1.1', fontWeight: '700' }],
        'subtitle': ['24px', { lineHeight: '1.3', fontWeight: '400' }],
        'subtitle-lg': ['30px', { lineHeight: '1.2', fontWeight: '500' }],
        'heading': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-lg': ['30px', { lineHeight: '1.2', fontWeight: '700' }],
        'subheading': ['18px', { lineHeight: '1.4', fontWeight: '400' }],
        'subheading-lg': ['22px', { lineHeight: '1.3', fontWeight: '500' }],
        'section-header': ['18px', { lineHeight: '1.4', fontWeight: '700' }],
        'section-header-lg': ['22px', { lineHeight: '1.3', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'quote': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'quote-lg': ['22px', { lineHeight: '1.4', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption-lg': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
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

export default config
