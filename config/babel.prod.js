module.exports = {
  babelrc: false,
  presets: [
    'babel-preset-react',
    'babel-preset-es2015',
    'babel-preset-stage-1'
  ].map(require.resolve),
  plugins: [
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-syntax-trailing-function-commas'
  ].map(require.resolve).concat([
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true
    }]
  ])
};
