module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true,
    },
    jsxPragma: null,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-refresh'],
  settings: { react: { version: '18.2' } },
  ignorePatterns: ['**/dist/'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/ban-ts-comment': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
