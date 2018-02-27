module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "prettier",
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "all",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_"
      }
    ],
    "prefer-const": "error"
  }
};
