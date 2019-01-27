var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin-advanced');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
	entry: './scripts/app.js',
	output: {
		path: path.resolve(__dirname, 'public/build'),
		filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		]
	},
    plugins: [
        new CopyWebpackPlugin([
            {
            from: './assets/**/**',
            flatten: true,
            },
            {
                from: 'index.html'
            },
        ]),
    ],
	stats: {
		colors: true
	},
};
