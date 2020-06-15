const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
const config = { 
    mode: "production",
    entry: [ path.join(CURRENT_WORKING_DIR, 'client/main.js') ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: "bundle.js",
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets:['react', 'es2015', 'stage-2']
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
            
        ]
    }
 }
module.exports = config