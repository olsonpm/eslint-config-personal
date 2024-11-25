import jsEslint from '@eslint/js'
import baseConfigObj from './base-config-obj.mjs'
import baseTsConfigArr from './base-ts-config-arr.mjs'

export default [jsEslint.configs.recommended, ...baseTsConfigArr, baseConfigObj]
