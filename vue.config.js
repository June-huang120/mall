/**
 * Created by Administrator on 2021/5/12.
 */
// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components' ,
        'network': '@/network' ,
        'views': '@/views'
      }
    }
  }
}