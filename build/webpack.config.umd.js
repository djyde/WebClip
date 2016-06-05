const config = require('./webpack.config.base')

config.output.libraryTarget = 'umd'
config.output.filename = '[name].min.js'
config.output.path = './dist'

module.exports = config
