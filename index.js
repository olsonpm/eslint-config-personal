module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: ['plugin:eslint-plugin-import/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': ['node', 'pjson-imports'],
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

    // import plugin
    'import/group-exports': 'error',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-relative-packages': 'error',
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': 'error',
  },
}
