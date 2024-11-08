module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    strict: 0,
    'function-paren-newline': 0,
    'guard-for-in': 0,
    'max-len': 0,
    'no-nested-ternary': 0,
    no_underscore_dangle: 0,
    'no-console': 0,
    'no-shadow': 0,
    'object-curly-newline': 0,
    'global-require': 0,
    'new-cap': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'jsx-a11y/label-has-for': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/imports-first': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'no-trailing-spaces': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-case-declarations': 0,
    'no-param-reassign': 0,
    camelcase: 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'react/no-did-mount-set-state': 0,
    radix: 0,
    'linebreak-style': 0
  }
}
