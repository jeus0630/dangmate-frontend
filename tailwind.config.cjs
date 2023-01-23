/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true
    },
    colors: {
      gray: {
        'head': '#111111',
        'sub-head': '#505050',
        'body': '#666666',
        'disabled': '#999999',
      },
      line: {
        'light': '#F0F0F6',
        'medium': '#E5E5EC',
        'dark': '#D3D3DB'
      },
      bg: {
        'light': '#ffffff',
        'dark': '#f1f1f5'
      },
      primary: {
        'dark': '#422B99',
        'emphasys': '#5337C2',
        'base': '#6D48FF',
        'light': '#EEE9FF'
      },
      system: {
        'error': '#DC0000',
        'good': '#04B014'
      }
    },
    fontFamily: {
      pretendard: ['Pretendard']
    },
    fontWeight: {
      regular: '400',
      bold: '700'
    },
    fontSize: {
      't1': ['2rem', {
        lineHeight: '130%',
        letterSpacing: '-0.01em',
      }],
      't2': ['1.8rem', {
        lineHeight: '135%',
        letterSpacing: '0.008em',
      }],
      't3': ['1.6rem', {
        lineHeight: '140%',
        letterSpacing: '0.016em',
      }],
      't4': ['1.4rem', {
        lineHeight: '140%',
        letterSpacing: '0.016em',
      }],
      'b1': ['1.8rem', {
        lineHeight: '140%',
        letterSpacing: '-0.008em',
      }],
      'b2': ['1.6rem', {
        lineHeight: '150%',
        letterSpacing: '0em',
      }],
      'b3': ['1.4rem', {
        lineHeight: '140%',
        letterSpacing: '0.016em',
      }],
      'l1': ['1.6rem', {
        lineHeight: '130%',
        letterSpacing: '-0.008em',
      }],
      'l2': ['1.4rem', {
        lineHeight: '130%',
        letterSpacing: '0em',
      }],
      'l3': ['1.2rem', {
        lineHeight: '130%',
        letterSpacing: '0em',
      }],
      'btn1': ['1.6rem', {
        lineHeight: '140%',
        letterSpacing: '-0.008em',
      }],
      'btn2': ['1.4rem', {
        lineHeight: '140%',
        letterSpacing: '-0.008em',
      }],
      'btn3': ['1.3rem', {
        lineHeight: '140%',
        letterSpacing: '-0.008em',
      }],
    },
    extend: {},
  },
  plugins: [],
}
