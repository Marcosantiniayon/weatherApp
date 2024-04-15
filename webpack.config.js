const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/script.js', // Your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist', // Folder to serve files from
    open: true, // Open the browser after server had been started
    port: 3000 // Port to run the server on
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Look for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript (ES6+) files
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
