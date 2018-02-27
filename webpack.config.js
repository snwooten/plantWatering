'use strict'

const { resolve } = require('path')

module.exports = {
  entry: './app/main', // the starting point for our program
  output: {
    path: __dirname, // the absolute path for the directory where we want the output to be placed
    filename: './public/bundle.js' // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
  },
  context: __dirname,
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
module: {
    loaders: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './app'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
