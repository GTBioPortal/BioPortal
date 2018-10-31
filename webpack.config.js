var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development'
}
