const path = require('path');
const { ProvidePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC = 'app';
const DIST = '_public/';

module.exports = {
    entry : {
        'app' : path.join(__dirname, SRC, 'ts', 'app.tsx')
    },

    resolve : {
        extensions : ['', '.js', '.ts', '.tsx', '.json'],
        root : path.join(__dirname, SRC, 'ts')
    },

    module : {
        loaders : [
            {
                test : /\.tsx?$/, 
                loader: 'ts-loader'
            },
            {
                test : /\.json$/,
                loader : 'json'
            },
            {
                test : /\.scss$/,
                exclude : [path.join(__dirname, SRC, 'ts')],
                loaders : ['style', 'css', 'postcss', 'sass']
            },
            {
                test : /\.scss/,
                exclude : [path.join(__dirname, SRC, 'scss')],
                loaders : ['raw', 'sass']
            }
        ]
    },

    postcss : [require('autoprefixer')],
    
    plugins : [
        new ProvidePlugin({
            'Promise' : 'es6-promise',
            'fetch' : 'imports?this=>global!exports?global.fetch!whatwg-fetch' 
        }),
        
        new CopyWebpackPlugin([{
            from : path.join(SRC, 'images'),
            to : path.join('..', 'images')
        }]),

        new HtmlWebpackPlugin({
            template : path.join(__dirname, SRC, 'index.html'),
            filename : path.join('..', 'index.html'),
            inject : 'body'
        })
    ],
    
    output : {
        path : path.join(__dirname, DIST, 'js'),
        filename : '[name].js',
        publicPath : '/js'
    },
    
    devtool : 'source-map',
    
    devServer : {
        contentBase : '_public',
        historyApiFallback : true,
        port : 5000,
        proxy : {
            '/widgets' : {
                target : 'http://0.0.0.0:3010'
            }
        }
    },
};