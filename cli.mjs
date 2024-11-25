import jsEslint from '@eslint/js'
import cliConfigArr from './cli-config-arr.mjs'
import baseConfigObj from './base-config-obj.mjs'

export default [jsEslint.configs.recommended, ...cliConfigArr, baseConfigObj]
