const config = require('./webpack.config.base')

config.output.libraryTarget = 'commonjs2'
config.output.filename = '[name].common.js'
config.output.path = './dist'

module.exports = config
