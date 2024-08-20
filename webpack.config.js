const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let production = process.env.NODE_ENV==='production';

let config = {
    entry : "./src/scripts/funciones.js",
    output:{
        filename:'main.js',
        path:path.resolve(__dirname, 'dist'),
        clean:true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    devtool:"inline-source-map",
    mode:'development',
    devServer: {
        watchFiles: ["src/**/*"],
        static:"./dist"
    }
}
if(production){
    config.mode = 'production';
    config.devtool = 'inline-source-map';
}

module.exports = config;