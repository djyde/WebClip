const config = require('./webpack.config.base')

config.output.libraryTarget = 'commonjs'
config.output.filename = '[name].js'
config.output.path = './lib'

module.exports = config
