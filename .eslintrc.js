module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:cypress/recommended',
  ],
  plugins: ['jest', 'cypress'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/camelcase': 0,
    'import/no-dynamic-require': 0,
    'function-name': 0,
    'variable-name': 0,
    'ter-arrow-parens': 0,
    'no-else-after-return': 0,
    'no-underscore-dangle': 0,
    'global-require': 0,
    'linebreak-style': [1, 'windows'],
    'no-console': 0,
    semi: 1,
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'no-restricted-globals': 'off',
    'react/no-did-update-set-state': 'off',
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/destructuring-assignment': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    'jest/globals': true,
    'cypress/globals': true,
    browser: true,
    node: true,
  },
};
