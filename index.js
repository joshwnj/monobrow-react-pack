const babelify = require('babelify')
const monobrow = require('monobrow')

module.exports = monobrow.pack({
  // we can run `monobrow --build-vendor` to produce the output
  vendor: [
    'classnames',
    'react',
    'react-dom',
    'redux',
    'react-redux'
  ],

  setup: function setup (b, opts) {
    b.transform(babelify, {
      plugins: [
        require('babel-plugin-transform-class-properties'),
        require('babel-plugin-transform-object-rest-spread')
      ],

      presets: [
        require('babel-preset-latest'),
        require('babel-preset-react')
      ]
    })
  }
})
