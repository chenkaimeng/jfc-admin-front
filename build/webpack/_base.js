import webpack           from 'webpack';
import config            from '../../config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const paths = config.get('utils_paths');

const webpackConfig = {
    name    : 'client',
    target  : 'web',
    entry   : {
        app : [
            paths.project(config.get('dir_src')) + '/app.js'
        ]
    },
    output : {
        filename   : '[name].[hash].js',
        path       : paths.project(config.get('dir_dist')),
        publicPath : config.get('globals')['PUBLIC_PATH']
    },
    plugins : [
        new webpack.DefinePlugin(config.get('globals')),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template : paths.src('index.html'),
            hash     : true,
            filename : 'index.html',
            inject   : 'body'
        })
    ],
    module : {
        loaders : [
            {
                test: /\.js$/,
                loader: 'babel?optional[]=runtime',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/i,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test    : /\.scss$/,
                loaders : [
                    'style-loader',
                    'css-loader',
                    'autoprefixer?browsers=last 2 version',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders : [
                    'style-loader',
                    'css-loader'
                ]
            }
    ]
  }
};


export default webpackConfig;
