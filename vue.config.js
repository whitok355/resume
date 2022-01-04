const path = require('path')

module.exports = {
  publicPath: '/resume/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/styles/main.sass')
      ]
    }
  },
}
