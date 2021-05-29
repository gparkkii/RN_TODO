module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          components: './src/components',
          screens: './src/screens',
          styles: './src/styles',
        },
      },
    ],
  ],
};
