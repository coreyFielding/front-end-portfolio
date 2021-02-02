const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false,
  theme: {
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
          skyDark: '#e0eafc',
          skyLight: '#cfdef3'
      },
    fontSize: {
      '9xl': '7rem',
      'xs': '0.8rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
