module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['react', 'import', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    '@react-native-community',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'arrow-parens': ['off', 'always'],
    'jsx-a11y/label-has-associated-control': ['off', 'always'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'comma-dangle': 'off',
    'no-restricted-syntax': 'warn',
    'global-require': 'warn',
    'react/destructuring-assignment': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'warn',
    'react/forbid-prop-types': 'warn',
  },
  globals: {
    fetch: false,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        alias: {
          components: './src/copmonents',
          screens: './src/screens',
          styles: './src/styles',
        },
      },
    },
  },
};
