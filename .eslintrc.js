module.exports = {
  root: true,
  extends: ['react-app', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  'prettier/prettier': [
    'error',
    {
      printWidth: 120,
      tabWidth: 2,
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
    },
  ],
}
