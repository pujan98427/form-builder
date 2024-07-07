/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#F2F7FC',
          20: '#DCEAFC',
          30: '#C6DEFD',
          40: '#AFD1FD',
          50: '#99C4FD',
          60: '#83B8FE',
          70: '#6DABFE',
          80: '#569EFE',
          90: '#4092FF',
          100: '#2A85FF'
        },
        extraPrimary: {
          10: '#A5D1F0',
          100: '#005DA5'
        },
        base: {
          10: '#F9F9FB',
          20: '#EFF1F5',
          30: '#DCDFEA',
          40: '#B9C0D4',
          50: '#7D89AF',
          60: '#5D6B98',
          70: '#4A5578',
          80: '#404869',
          90: '#30374F',
          100: '#111322'
        },

        'light-grey': '#F2F4F7',
        dark: '#D0D5DD',
        'alert-green': '#12B76A',
        'alert-red': '#E93D3D',
        'alert-yellow': '#F79009',
        'alert-error': '#F04438',
        white: '#ffff'
      },
      fontSize: {
        xs: ['0.75em', '1.5'],
        sm: ['0.875em', '1.42'],
        base: ['1em', '1.75'],
        lg: ['1.125em', '1.6'],
        xl: ['1.25em', '1.6'],
        '2xl': ['clamp(1.25em, calc(1.25em + ((1vw - 7.68px) * 0.1736)), 1.375em)', '1.2'],
        '3xl': ['clamp(1.375em, calc(1.375em + ((1vw - 7.68px) * 0.1736)), 1.5em)', '1.2'],
        '4xl': ['clamp(1.375em, 0.8948em + 1.0017vw, 1.75em);', '1.21'],
        '5xl': ['clamp(1.375em, 0.5747em + 1.6694vw, 2em)', '1.21'],
        '6xl': ['clamp(1.75em, 0.7896em + 2.0033vw, 2.5em)', '1.4'],
        48: ['calc(2.1em + ((1vw - 0.48em) * 0.6944))', '1.4'],
        60: ['clamp(3em, 2.5em + 1.0416666666666665vw, 3.75em)', '1.4']
      },

      fontFamily: {
        body: ['Inter', 'sans-serif']
      },

      boxShadow: {
        1: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        2: '0px 4px 10px rgba(0,0,0,0.1)',
        3: '0px 5px 30px rgba(21, 48, 68, 0.04)',
        4: ' 0px 4px 16px rgba(0, 0, 0, 0.08)',
        5: ' 0px 4px 8px rgba(92, 15, 9, 0.1)',
        6: ' 0px 40px 40px -40px rgba(0, 0, 0, 0.16)',
        7: '  0px -40px 40px -40px rgba(0, 0, 0, 0.40)',
        8: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        9: ['0px 0px 10px rgba(0, 0, 0, 0.1)', '0px 60px 50px -30px rgba(0, 0, 0, 0.2)'],
        10: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        11: '10px 10px 100px 15px rgba(102, 102, 102, 0.25)',
        12: '0px 8px 40px  rgba(0, 0, 0, 0.08)',
        13: '0px 3px 8px 0px rgba(0, 0, 0, 0.16)',
        14: '-4px 4px 32px 0px rgba(0, 0, 0, 0.16)',
        15: '0px 20px 40px -20px #00000029',
        16: '0px 16px 32px 0px rgba(188, 201, 214, 0.4)',
        17: '0px 1px 3px 0px #1018281A'
      },
      dropShadow: {
        1: '0px 0px 40px rgba(0, 0, 0, 0.16)'
      },

      screens: {
        'tablet-md': '992px',
        'tablet-lg': '1200px',
        'laptop-md': '1366px',
        'laptop-xl': '1440px'
      }
    }
  },
  plugins: [require('@mertasan/tailwindcss-variables'), require('tw-elements/dist/plugin.cjs')]
}
