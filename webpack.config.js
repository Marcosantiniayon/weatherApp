const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
entry: './src/ui.js', // Your main JavaScript file
  devtool: 'inline-source-map',
   plugins: [
     new HtmlWebpackPlugin({
         title: 'Development',
         template: './src/index.html'
     }),
   ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  devServer: {
    static: './docs', // Folder to serve files from
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

