let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const targetPath = path.resolve(__dirname,'public');
const sourcePath = path.resolve(__dirname,'src');

module.exports = {
  entry: [path.resolve(sourcePath,'index.js')],
  output: {
    path: targetPath,
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader: "babel-loader",
        presets: ["react","es2015","stage-0"],
        include: [ sourcePath ],
        exclude: /(node_modules)/

      },
      {
        test: /\.html$/, 
        loader: "raw-loader"
      },
      {
        test: /\.scss$/, 
        loaders: ["style", "css?sourceMap", "sass?sourceMap&includePaths[]=" + sourcePath],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|gif|jpg)$/,
        loader: "file?name=images/[name].[ext]",
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file?name=font/[name].[ext]'
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(
      {
        template: path.resolve(sourcePath,'index.html'),
        inject:true,
        filename:path.resolve(targetPath,'index.html')
      }
    )
  ]
};