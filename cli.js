const baseConfig = require('./base')

module.exports = {
  ...baseConfig,
  extends: ['plugin:eslint-plugin-import/recommended', ...baseConfig.extends],
  settings: {
    ...(baseConfig.settings || {}),
    'import/extensions': ['.mjs', '.cjs', '.js'],
    'import/resolver': {
      node: true,
      'pjson-imports': true,
    },
  },
  rules: {
    ...baseConfig.rules,
    'import/group-exports': 'error',
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-relative-packages': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-unused-modules': [
      'error',
      {
        unusedExports: true,
      },
    ],
    'import/no-useless-path-segments': 'error',
    'import/order': 'error',
  },
}
