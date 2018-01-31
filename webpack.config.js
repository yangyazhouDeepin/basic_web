const path = require('path');
module.exports = {
  entry: './src/index.js',
  //entry: 入口文件 ， 因为已经指定了基础目录 context（/src）
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
    //该选项的值是以 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 为前缀。因此，在多数情况下，此选项的值都会以/结束。例如这里的，运行后的文件地址是/build，如果你写成http://www.xx.com,运行后实际的地址是 http://www.xx.com/build  我们可以使用它解决一些图片等静态资源的路径问题，默认值是一个空字符串 ""。
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: '/node_modules',
        use: [{loader: 'babel-loader'}]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.css/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  }
}
