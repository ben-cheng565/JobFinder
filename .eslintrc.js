module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'jsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react-native/no-inline-styles': 0,
    'react/no-unstable-nested-components': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': [
      'error',
      { variables: false, functions: false, classes: false },
    ],
  },
};
