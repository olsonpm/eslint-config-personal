/**
 * doesn't extend eslint-plugin-import since those rules aren't editor friendly
 * e.g. removing an import line from one file doesn't update the state for the
 * exporting files.
 */

module.exports = require('./base')
