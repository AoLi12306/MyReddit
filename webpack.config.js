var config = {
    mode: 'development',
    entry: __dirname + '/src/index.js',
    output:{
        path: __dirname + '/dist',
        publicPath: '/',
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
      ]
    },
    devServer:{
        //inline:true,//实时刷新
        port:7777,
        historyApiFallback: true,
        contentBase: './'
    }
}

module.exports = config;