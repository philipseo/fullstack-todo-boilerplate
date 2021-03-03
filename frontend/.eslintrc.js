module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'never' },
    ],
    'no-use-before-define': 'off',
  },
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
  },
  overrides: [
    {
      'files': ['**/*.tsx'],
      'rules': {
        'react/prop-types': 'off'
      }
    }
  ]
};
