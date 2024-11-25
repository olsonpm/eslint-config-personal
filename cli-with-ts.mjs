import jsEslint from '@eslint/js'
import baseTsConfigArr from './base-ts-config-arr.mjs'
import cliConfigArr from './cli-config-arr.mjs'
import baseConfigObj from './base-config-obj.mjs'

export default [
  jsEslint.configs.recommended,
  ...baseTsConfigArr,
  ...cliConfigArr,
  baseConfigObj,
]
