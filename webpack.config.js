const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader'] },
            { test: /\.(js)$/, loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'], 
                }
            }
    ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
      },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    mode: "development",
};