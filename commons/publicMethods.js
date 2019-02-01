class publicMethods {
  /* 是否为测试环境 */
  IS_TEST() {
    if (this.GET_IP_ADDRESS() == '172.19.82.106') {
      return false
    } else {
      return true
    }
  }
  /* 获取IP */
  GET_IP_ADDRESS() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
      var iface = interfaces[devName];
      for (var i = 0; i < iface.length; i++) {
        var alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          return alias.address;
        }
      }
    }
  }
  /* 返回数据接口 */
  JSON_BACK(code, data, mess) {
    return { code, data, mess }
  }
}

module.exports = new publicMethods()