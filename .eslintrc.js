module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],

  plugins: ['vue'],

  rules: {
    'prettier/prettier': ['warn', { singleQuote: true, endOfLine: 'auto', trailingComma: 'all' }],
    'no-unused-vars': 'warn',
    'no-console': 'off'
  }
};
