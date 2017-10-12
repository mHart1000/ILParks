var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
	watch: true,
    module: {    
		rules:[
			{
				test: /\.js$/,
				include: SRC_DIR,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: { presets: ["react", "es2015", "stage-2"] }
				}]
			}
		]
    }
};



module.exports = config;