const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

   /*  entry: `./src/js/index.js`,
    output: {

        filename: `bundle.js`
    }, */
   
   //n watch: true,
    devServer: {
        contentBase: './dist'
    },
   
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
         })
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' 
                }
            }
        ]
    }
    
};

