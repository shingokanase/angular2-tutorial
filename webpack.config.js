'use strict'

const webpack = require("webpack");

let config = {
  entry: {
    app:'./app/main.ts'
  },
  output: {
    filename: './assets/[name].js',
    publicPath: '/'
  },

  devtool: '#source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/,
        loaders:[
          'awesome-typescript-loader',
          'angular2-template-loader'
        ],
        exclude:/node_modules/
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
    ]
  },

  plugins: [
  ],

  // Configuration for dev server
  // TODO not working HMR
  devServer: {
    contentBase: '',
    port: 8080
  }

}

module.exports = config;