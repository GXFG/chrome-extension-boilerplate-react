// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const config = require('../webpack.config')

webpack(config, function (err) {
  if (err) {
    throw err
  }
})
