const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

// 开发环境配置
module.exports = merge(baseConfig, {
  // 开发环境
  mode: 'development',
  // 开启sourceMap
  devtool: 'eval-cheap-module-source-map',
  // 本地开发服务配置
  devServer: {
    // 本地运行的端口
    port: 3000,
    // 开发环境不开启代码压缩，提升热更新速度
    compress: false,
    // 开启HMR热更新
    hot: true,



  }

})