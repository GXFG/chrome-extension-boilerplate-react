// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const path = require('path')
const env = require('./env')
const config = require('../webpack.config')

const excludeEntriesToHotReload = ['background', 'contentScript', 'devtools']

for (const entryName of Object.keys(config.entry)) {
  if (!excludeEntriesToHotReload.includes(entryName)) {
    config.entry[entryName] = [
      'webpack/hot/dev-server',
      `webpack-dev-server/client?hot=true&hostname=localhost&port=${env.PORT}`,
      config.entry[entryName],
    ]
  }
}

config.plugins = [new webpack.HotModuleReplacementPlugin(), ...config.plugins]

const compiler = webpack(config)

const server = new WebpackDevServer(
  {
    https: false,
    hot: false,
    client: false,
    host: 'localhost',
    port: env.PORT,
    static: {
      directory: path.join(__dirname, '../build'),
    },
    devMiddleware: {
      publicPath: `http://localhost:${env.PORT}/`,
      writeToDisk: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: 'all',
  },
  compiler
);

(async () => {
  await server.start()
})()
