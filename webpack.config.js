const path = require('path');

module.exports = {
    resolve: {
        fallback: {
          "fs": false,
          "net": false,
          "http": false,
          "url": false,
          "assert": require.resolve("assert"),
          "os": require.resolve("os-browserify/browser"),
          "async_hooks": require.resolve("async_hooks"),
          "zlib": require.resolve("browserify-zlib"), // Add this line for zlib
          "querystring": require.resolve("querystring-es3"), // Add this line for querystring
          "path": require.resolve("path-browserify"), // Add this line for path
          "crypto": require.resolve("crypto-browserify"), // Add this line for crypto
          "stream": require.resolve("stream-browserify"), // Add this line for stream
          "util": require.resolve("util/") // Add this line for util
        },
      },
  entry: './app.js', // Update the entry path to point to your app.js file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'production', // Set the mode to 'production' or 'development'
};

