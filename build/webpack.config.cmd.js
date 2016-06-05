const config = require('./webpack.config.base')

config.output.libraryTarget = 'commonjs'
config.output.filename = '[name].common.js'
config.output.path = './dist'

module.exports = config
