const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    "base":"/src/base/base.js",
    "theme": '/src/primeflex/theme.js',
    // "base": '/src/base.js',
    // "icons": '/src/icons.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  output: { filename: "[name]/bundle.min.js", path: path.resolve(__dirname, 'dist') },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    static: './dist',
    hot: true
  }
}
