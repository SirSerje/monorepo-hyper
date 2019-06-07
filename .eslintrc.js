const path = require('path');

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
  },
  'extends': ['airbnb'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'import',
  ],
  'rules': {
    'react/jsx-one-expression-per-line': 0,
    'react/prefer-stateless-function': 0,
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: path.resolve(__dirname, 'packages'),
      },
    },
  },
};