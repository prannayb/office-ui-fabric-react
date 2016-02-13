'use strict';

module.exports = {
  serve: {
    initialPage: '/'
  },
  build: {
    paths: {
      staticsMatch: [ 'src/**/*.scss' ],
      templateMatch: [ 'src/**/*.txt' ]
    },
    copyTo: {
      'dist': [
        'node_modules/react/dist/react.js',
        'node_modules/react-dom/dist/react-dom.js',
        'node_modules/systemjs/dist/system.src.js'
      ]
    }
  },
  test: {
    include: [ 'lib/tests.js' ]
  },
  bundle: {
    entries: [
      {
        useWebpack: true,
        outputPath: 'dist',
        webpackConfig: require('./webpack.config')
      }
    ]
  }
};