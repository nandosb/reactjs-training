const path = require('path')

module.exports = {
    // entry: './src/app.js',
    entry: './src/playground/nested-functions.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        // In order to process JSX, we need to put babel in between or codebase and bundle.js file
        rules: [{
            loader: 'babel-loader',
            // Use babel for every .js file...
            test: /\.js$/,
            // ... except for the /node_modules folder which is already compiled
            exclude: /node_modules/
        }, {
            test: /\.s?css$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }
        ]
    },
    // // Source map allows display the line of the original file where an error occurs instead of a line of bundle.js.
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // devServer depens on webpack-dev-server on package.json
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        // historyApiFallback: true makes web server to always return index.html so react can handle routes
        historyApiFallback: true,
    }
};