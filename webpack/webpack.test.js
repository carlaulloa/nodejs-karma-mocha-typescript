const webpackMerge = require('webpack-merge');
var serverPartial = require('./webpack.server');
var nodeExternals = require('webpack-node-externals');
const commonPartial = require('./webpack.common');

const options = {};
const serverConfig = webpackMerge({}, commonPartial, serverPartial, {
  entry: serverPartial.entry,
  plugins: [
  ],
  externals: [nodeExternals({
    modulesFromFile: true
  })]
});

module.exports = serverConfig;