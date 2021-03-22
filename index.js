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
    'no-async-promise-executor': 'off',
    'no-confusing-arrow': 'error',
    'no-constant-condition': {
      checkLoops: false
    },
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
