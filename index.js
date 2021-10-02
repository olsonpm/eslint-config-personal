module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'no-async-promise-executor': 'off',
    'no-confusing-arrow': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
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
    'no-use-before-define': ['error', { functions: false, variables: false }],
    'prefer-const': 'error',
    'require-atomic-updates': 'off',
    semi: ['error', 'never'],
  },
}
