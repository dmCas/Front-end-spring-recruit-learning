const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './index.js', // 指定打包的入口
  output: { // 指定打包后的资源位置
    // publicPath: 'https://cdn.baidu.com' ,     // 公共路径设置
    path: path.resolve(__dirname, './build'),
    filename: 'index.js'
  },
  // devtool: "source-map",
  // devtool: "inline-source-map",
  devtool: "cheap-module-eval-source-map", // 开发环境
  // devtool: "cheap-module-source-map", // 生产环境（线上）
  // devtool: "none",
  plugins: [
    new HtmlWebpackPlugin({ 
      // 项目构建的流程过程当中的某一个特定的时间点，不同的插件执行的时间点不一样，插件相当于是我们webpack的一个生命周期
      // 他执行的作用就是在webpack执行构建的过程当中的某一个特定的时间点来注入我们的扩展逻辑，达到一个什么修改构建结果的这么一个目的
      template: "./index.html", // 指定一个自己定义的模板
      title:'标题-自己取的',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    })
  ],
  module: {
    // 遇到除了js之外的模块就在这里写,在这里找loader
    rules: [
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use:{ // url-loader是file-loader的加强版 判断当前的体积有多大 当临界值以下以base64存放起来
          loader: "url-loader", // 就是把模块放在了顶一个目录里面，并且把位置搬到里面
          options:{
            // name 是打包前模块的名称，ext是打包前的模块格式
            name: "[name]_[hash].[ext]", //cookie.jpg
            outputPath: 'images/', // 自定义output 输出路径和 public 发布目录。
            limit: 20408 // 限定当前体积的临界值 大于这个临界值就会以图片保存
          }
        }
      },
      {
        test:/\.css$/,
        // use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
        // 使用了插件 mini-css-extract-plugin插件之后
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test:/\.scss$/, // loader是有执行顺序的,从后往前
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  devServer: { // 把前端代码跑成一个服务 实时打包 启动打包之后的操作并跑在指定端口 打包过后的模块会存在js内存当中去(原来是会打包在指定文件夹下)
    contentBase: './build',
    open: true, //  运行这个服务的时候自动打开浏览器
    port: '8081', 
    proxy: { // 设置代理 解决跨域   匹配到/api/info 就转发到http://localhost:8081域名下 只在开发环境中生效
      '/api': 'http://localhost:3000' // 服务器没有同源策略 只有浏览器有
    },
  }

};