import globals from 'globals'

export default {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.mocha,
      ...globals.es2022,
    },
  },
  rules: {
    'no-async-promise-executor': 'off',
    'no-confusing-arrow': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-extra-semi': 'off',
    'prefer-const': ['error', { destructuring: 'all' }],
    'require-atomic-updates': 'off',
    semi: 'off',
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
  },
}
