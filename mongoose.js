var mongoose = require('mongoose');
var redis = require("redis");
var client = redis.createClient(6379, '139.196.127.127', {});
client.auth('12345', function () {
  console.log('通过认证');
});
/* 连接redis */
client.on('connect', function() {
  console.log('Redis client connected');
});
client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});
/* 连接Mongo */
var mongooseIP = ""
if (commons.IS_TEST()) {
  mongooseIP = "mongodb://139.196.127.127:8803/testMobile"
}else {
  mongooseIP = "mongodb://139.196.127.127:8803/mobile"
}
var db = mongoose.connect(mongooseIP, {
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', function () {
  console.log('connect error');
});
db.once('open', function () {
  // we're connected!
  console.log('connected success');
});

global.mongoose = mongoose
global.db = db
global.client = client