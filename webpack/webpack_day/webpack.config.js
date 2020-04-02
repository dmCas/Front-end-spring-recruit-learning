const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js', // 指定打包的入口
  output: { // 指定打包后的资源位置
    // publicPath: 'https://cdn.baidu.com' ,     // 公共路径设置
    path: path.resolve(__dirname, './build'),
    filename: 'index.js'
  },
  plugins: [new HtmlWebpackPlugin(
    { // 项目构建的流程过程当中的某一个特定的时间点，不同的插件执行的时间点不一样，插件相当于是我们webpack的一个生命周期
      // 他执行的作用就是在webpack执行构建的过程当中的某一个特定的时间点来注入我们的扩展逻辑，达到一个什么修改构建结果的这么一个目的
      // 
      template: "./index.html", // 指定一个自己定义的模板
      title:'标题-自己取的',
      filename: '[name].[ext]'
    } 
  )],
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
        use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
      },
      {
        test:/\.scss$/, // loader是有执行顺序的,从后往前
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }

};