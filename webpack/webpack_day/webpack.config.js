const path = require('path');

module.exports = {
  entry: './index.js', // 指定打包的入口
  output: { // 指定打包后的资源位置
    // publicPath: 'https://cdn.baidu.com' ,     // 公共路径设置
    path: path.resolve(__dirname, './build'),
    filename: 'my-first-webpack.bundle.js'
  },
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
            limit: 2048 // 限定当前体积的临界值 大于这个临界值就会以图片保存
          }
        }
      },
      {
        test:/\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
  ]
  }

};