var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:'./a.js',
  mode:'development',
  output:{
    filename:'[name].js',
    chunkFilename:'[name].js',// 设置按需加载后的chunk名字
    // publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    // contentBase: './',
    static: {
        directory: path.join(__dirname, './dist'),
    },
    open: true,
    port: 9010,
    hot: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // proxy: {
    //   ["/"]: {
    //     bypass: function(req, res, proxyOptions) {
    //       return "/index.html"
    //     }
    //   }
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './index.html')
    }),
    //   new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    moduleIds: "named",
  }
}
