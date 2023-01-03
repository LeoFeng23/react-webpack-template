const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 公共配置
module.exports = {
    // 为了在导入模块时不需要带文件的格式后缀
    resolve: {
      extensions: ['js', 'tsx', 'ts']
    },
  // 入口文件
  entry: path.join(__dirname, '../src/index.tsx'),
  // 出口文件
  output: {
    filename: 'static/js/[name].js',
    path: path.join(__dirname, '../build'),
    clean: true,
    publicPath: '/'
  },
  // 模块配置
  module: {
    // 配置babel，解析ts、tsx语法
    rules: [
      { 
        test: /.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            // 先解析ts语法，再解析jsx
            presets: ['@babel/preset-react', '@babel/preset-typescript']
          }
        }
      }
    ]
  },

  // webpack插件
  plugins: [
    // 获取html模板
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      // 自动注入静态资源
      inject: true
    })
  ]
}