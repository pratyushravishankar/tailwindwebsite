// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'grape': '#9888A5',
        'celadon-green': '#00887A',
        'alabaster': '#F1F2EB',
        'timberwolf': '#D8DAD3',
        'coffee': '#403233',
        'coral': '#F76C6C',
        'bluelightest': '#A8D0E6',
        'bluedark': '#0D19A3',
        'bluedarkest': '#080F5B',
        'aquamarine': '#15DB93',
        'champagne': '#F8E9A1',
        'blush': '#DE6C83',
        'tangerine': '#f49d6e',
        'cadet': '#2C2C54',
        'russian-green': '#6E9075',
        'amaranth': '#A40E4C',
        'mint-cream': '#EAF2EF',
        'slate-blue': '#7F7EFF',
        'lavender': '#A390E4',
        'pale-blue': '#95B8D1',
        'jet': '#333333',
        'blue-grey': '#666A86',
        'pale-yellow': '#E8DDB5',
        'magenta': '#EC368D',
        'lightpink': '#FF92C2',
        'brightpink': '#FF1F80',
      },
      boxShadow: {
        coral: '0 4px 14px 0 rgba(168, 208, 230, 0.39)',
      },
    }


  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
