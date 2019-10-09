const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            // {
            //     test: /\.jsx?/,
            //     include: [
            //         path.resolve(__dirname, 'src')
            //     ],
            //     use: 'babel-loader',
            // },
            // {
            //     test: /\.css/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: 'css-loader',
            //     }),
            // },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            // {
            //     test: /\.jsx?/, // 支持 js 和 jsx
            //     include: [
            //         path.resolve(__dirname, 'src'), // src 目录下的才需要经过 babel-loader 处理
            //     ],
            //     loader: 'babel-loader',
            // },
        ],
    },

    // 代码模块路径解析的配置
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, 'src')
        ],

        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
    },

    plugins: [
        new UglifyPlugin(),
        new HtmlWebpackPlugin(),
        // 使用 uglifyjs-webpack-plugin 来压缩 JS 代码
        // 如果你留意了我们一开始直接使用 webpack 构建的结果，你会发现默认已经使用了 JS 代码压缩的插件
        // 这其实也是我们命令中的 --mode production 的效果，后续的小节会介绍 webpack 的 mode 参数
    ],
}