module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'plugin:react/recommended',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/display-name': 'off',
    'react/prop-types': [
      'error',
      {
        ignore: ['navigation', 'theme', 'color', 'size', 'title', 'route'],
      },
    ],
  },
};
