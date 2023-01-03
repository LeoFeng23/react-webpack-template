const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

// 开发环境配置
module.exports = merge(baseConfig, {
  // 开发环境
  mode: 'production',

})