module.exports = {
  root: true,
  extends: ['react-app'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
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
}
