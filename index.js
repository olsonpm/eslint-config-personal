module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  rules: {
    'require-atomic-updates': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_unused',
      },
    ],
    'prefer-const': 'error',
    'no-use-before-define': ['error', { functions: false, variables: false }],
    'no-confusing-arrow': 'error',
    semi: ['error', 'never'],
    'no-async-promise-executor': 'off',
  },
}
