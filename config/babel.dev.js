module.exports = {
  babelrc: false,
  presets: [
    'babel-preset-react',
    'babel-preset-stage-1'
  ].map(require.resolve),
  plugins: [
    'babel-plugin-transform-decorators-legacy',
    // es2015 preset plugins
    'babel-plugin-transform-es2015-block-scoped-functions',
    'babel-plugin-transform-es2015-block-scoping',
    'babel-plugin-transform-es2015-computed-properties',
    'babel-plugin-transform-es2015-destructuring',
    'babel-plugin-transform-es2015-duplicate-keys',
    'babel-plugin-transform-es2015-for-of',
    'babel-plugin-transform-es2015-function-name',
    'babel-plugin-transform-es2015-literals',
    'babel-plugin-transform-es2015-modules-commonjs',
    'babel-plugin-transform-es2015-object-super',
    'babel-plugin-transform-es2015-shorthand-properties',
    'babel-plugin-transform-es2015-spread',
    'babel-plugin-transform-es2015-sticky-regex',
    'babel-plugin-transform-es2015-template-literals',
    'babel-plugin-transform-es2015-typeof-symbol',
    'babel-plugin-transform-es2015-unicode-regex',
    'babel-plugin-transform-regenerator',
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
