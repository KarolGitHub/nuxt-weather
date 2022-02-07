module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],

  plugins: ['vue'],

  rules: {
    'prettier/prettier': [
      'warn',
      { singleQuote: true, endOfLine: 'auto', trailingComma: 'all' },
    ],
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
};
