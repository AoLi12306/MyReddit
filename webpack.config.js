const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "src/index.html"),
    filename: "./index.html"
});
const config = {
    entry: path.join(__dirname, "src/index.js"),
    output:{
        path: path.join(__dirname, "dist"),
        publicPath: '/MyReddit/',
        filename:'bundle.js',
    },
    module:{
      rules:[
          {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                plugins: [
                [
                  'transform-runtime',
                  {
                    polyfill: false,
                    regenerator: true,
                  },
                ],
                ],
              }
            }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
      ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer:{
        //inline:true,//实时刷新
        port:7777,
        historyApiFallback: true,
        contentBase: './'
    }
}

module.exports = config;