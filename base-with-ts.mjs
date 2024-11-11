import jsEslint from '@eslint/js'
import tsEslint from '@typescript-eslint'
import baseConfigObj from './base-config-obj.mjs'

export default [
  jsEslint.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    ...baseConfigObj,
    rules: {
      ...baseConfigObj.rules
      // fix no-unused-vars false positives
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'all',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      // fix no-use-before-define false positives
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, variables: false },
      ],
    },
    {
      files: ['test/**/*.mjs'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    }
    {
      files: ['**/*.cjs'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  }
}
