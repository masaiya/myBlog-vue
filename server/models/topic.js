// 用户登录注册页面
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/topic', {useNewUrlParser: true, useUnifiedTopology: true});

var topicSchema = new Schema({
  topic: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

var topics = [{
  topic: 'Nodejs中文乱码',
  content: '1.设置请求头  2.发送一个meta标签',
  nickname: '用户001',
  email: '12345@163.com'
},
{
  topic: '为什么前端要使用模块化',
  content: '1.复用性高  2.可以存储多个独立的功能块',
  nickname: '用户001',
  email: '12345@163.com'
},{
  topic: '如何避免回调地狱',
  content: '1.使用Promise  2.同步阻塞类型的接口',
  nickname: '用户002',
  email: 'echo_msy@163.com'
},{
  topic: '什么是跨域',
  content: '1.协议不同 2.域名不同 3.端口号不同',
  nickname: '用户002',
  email: 'echo_msy@163.com'
},{
  topic: 'Nodejs中文乱码',
  content: '1.设置请求头  2.发送一个meta标签',
  nickname: '用户001',
  email: '12345@163.com'
}]

var Topic = mongoose.model('Topic', topicSchema);
Topic.insertMany(topics, function(err) {
  console.log(err);
})

module.exports = Topic;
