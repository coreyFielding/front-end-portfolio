const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false,
  theme: {
      theme: {
          screens: {
              'sm': '640px',
              // => @media (min-width: 640px) { ... }

              'md': '768px',
              // => @media (min-width: 768px) { ... }

              'lg': '1024px',
              // => @media (min-width: 1024px) { ... }

              'xl': '1280px',
              // => @media (min-width: 1280px) { ... }

              '2xl': '1536px',
              // => @media (min-width: 1536px) { ... }
          }
      },
      colors: {
        royal: {
          50: '#f3f4f5',
          100: '#e8e9ea',
          200: '#c4c7cb',
          300: '#a1a5ac',
          400: '#243b55',
          500: '#141e30',
          600: '#121b2b',
          700: '#0f1724',
          800: '#0c121d',
          900: '#0a0f18'
        },
        lime: {
            50: '#fcfff2',
            100: '#f9ffe6',
            200: '#efffbf',
            300: '#e5ff99',
            400: '#d2ff4d',
            500: '#BFFF00',
            600: '#ace600',
            700: '#8fbf00',
            800: '#739900',
            900: '#5e7d00'
        },
          emerald: {
              50: '#f6fcf8',
              100: '#eefaf2',
              200: '#d3f1dd',
              300: '#b9e9c9',
              400: '#85d9a1',
              500: '#50c878',
              600: '#48b46c',
              700: '#3c965a',
              800: '#307848',
              900: '#27623b'
          },
          green: {
              50: '#f2fff2',
              100: '#e6ffe6',
              200: '#bfffbf',
              300: '#99ff99',
              400: '#4dff4d',
              500: '#00ff00',
              600: '#00e600',
              700: '#00bf00',
              800: '#009900',
              900: '#007d00'
          },
          indigo: {
              50: '#f6f2f9',
              100: '#ede6f3',
              200: '#d2bfe0',
              300: '#b799cd',
              400: '#814da8',
              500: '#4b0082',
              600: '#440075',
              700: '#380062',
              800: '#2d004e',
              900: '#250040'
          },
          purple: {
              50: '#f9f2f9',
              100: '#f2e6f2',
              200: '#dfbfdf',
              300: '#cc99cc',
              400: '#a64da6',
              500: '#800080',
              600: '#730073',
              700: '#600060',
              800: '#4d004d',
              900: '#3f003f'
          },
          cararra: {
              50: '#ffffff',
              100: '#fdfdfd',
              200: '#fafaf9',
              300: '#f7f6f5',
              400: '#f2f0ee',
              500: '#ece9e6',
              600: '#d4d2cf',
              700: '#b1afad',
              800: '#8e8c8a',
              900: '#747271'
          },
          azure: {
              50: '#f3f9ff',
              100: '#e7f3ff',
              200: '#c2e0ff',
              300: '#9dceff',
              400: '#54a9ff',
              500: '#0a84ff',
              600: '#0977e6',
              700: '#0863bf',
              800: '#064f99',
              900: '#05417d'
          },
          skyDark: '#e0eafc',
          skyLight: '#cfdef3'
      },
    fontSize: {
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
        'lg': '5rem',
       'md': '3rem',
      'sm': '2rem',
      'xs': '0.8rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
