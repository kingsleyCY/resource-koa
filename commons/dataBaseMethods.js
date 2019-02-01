class dataBaseMethods {
  /* 根据单个条件查询数据 */
  findBySingle(model, key, value) {
    return new Promise((resolve, reject) => {
      if (!model || !key || !value) {
        model.findOne({ key: value }, function (err, docs) {
          if (err) {
            reject(commons.JSON_BACK(10000, {}, ""))
          } else {
            if (docs) {
              resolve(1, docs, "查询成功")
            } else {
              resolve(10002, docs[0], "数据库未查询到此数据")
            }
          }
        })
      } else {
        resolve(10001, {}, "参数错误")
      }
    })
  }
}

module.exports = new dataBaseMethods()