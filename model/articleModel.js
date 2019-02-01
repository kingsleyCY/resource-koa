const dataBase = require('./../commons/dataBaseMethods')
var articleSchema = new mongoose.Schema({
  id: Number,
  title: String,
  cover: String,
  content: String,
  user_info: {
    username: String,
    id: Number,
    sex: Number
  },
  article_info: {
    look_num: Number,
    comment_num: Number
  },
  articleType: Number,
  labelArr: Number,
  created_time: String,
  isShow: Number
}, { collection: "articleList" });

var articleList = db.model("articleList", articleSchema);