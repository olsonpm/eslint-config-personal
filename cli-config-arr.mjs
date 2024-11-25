import importPlugin from 'eslint-plugin-import'

export default [
  importPlugin.flatConfigs.recommended,
  {
    settings: {
      'import/extensions': ['.mjs', '.cjs', '.js'],
      'import/resolver': {
        node: true,
        'eslint-import-resolver-pjson-imports': true,
      },
    },
    rules: {
      'import/group-exports': 'error',
      'import/newline-after-import': 'error',
      'import/no-cycle': 'error',
      'import/no-deprecated': 'error',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/no-relative-packages': 'error',
      'import/no-unresolved': ['error', { commonjs: true }],
      'import/no-useless-path-segments': 'error',

      // rules with bugs
      'import/namespace': 'off',
      'import/no-unused-modules': 'off',
      // 'import/no-unused-modules': [
      //   'error',
      //   {
      //     unusedExports: true,
      //   },
      // ],
    },
  },
]
