
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports={
    mode: 'production',
    entry: './src/main.js',
    output:{

        path:__dirname + '/dist',
        filename:'bundle.js'
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
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
      },

    plugins: [new HtmlWebpackPlugin({

        template: './src/index.html'
    })],
    
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }



}
