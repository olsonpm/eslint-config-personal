module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: [
    'plugin:@olsonpm/eslint-plugin-import/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    '@olsonpm/eslint-plugin-import/resolver': ['node', 'pjson-imports'],
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
    '@olsonpm/eslint-plugin-import/no-extraneous-dependencies': [
      'error',
      { workspaces: true },
    ],
  },
}
