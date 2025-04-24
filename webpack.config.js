 
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      
{
  test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',

         /* use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            }, */
            /* {
              loader: 'image-webpack-loader',
              options: {
                disable: true, // Disable during development
              },
            }, */
            /* {
    
loader: 'url-loader',
            options: {
              limit: 10000, // Convert images < 10kb to base64 strings
              mimetype: 'image/jpg',
                },
              },
    */    
          //],
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000,
  },
};
