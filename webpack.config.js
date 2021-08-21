const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  mode: 'development',
  entry: './src/app.js', //Относительный путь для точки входа
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    sourceMapFilename: "[name].js.map"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
            {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }],
      },
    ]
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    watchContentBase: true,
  }
};

console.log(module.exports.output.path);

