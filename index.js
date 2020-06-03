module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "plugin:react/recommended",
    "universe",
    "plugin:react-hooks/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "__DEV__": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "rules": {
    "react/display-name": 0,
    "prettier/prettier": [
      "warn",
      {
        "semi": false,
        "singleQuote": true,
        "jsxBracketSameLine": true,
        "trailingComma": "none"
      }
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}