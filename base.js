module.exports = {
  env: {
    browser: true,
    es2022: true,
    mocha: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'no-async-promise-executor': 'off',
    'no-confusing-arrow': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-extra-semi': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': ['error', { functions: false, variables: false }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'require-atomic-updates': 'off',
    semi: 'off',
  },
}
