module.exports = function (app) {
  /* 自定义操作 */
  /* 公共方法 */
  const publicMethods = require('./../commons/publicMethods')
  global.commons = publicMethods
  /* 引入数据库连接 */
  require('./../mongoose')
}