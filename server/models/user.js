var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true, useUnifiedTopology: true});

var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    default: '用户'
  },
  password: {
    type: String,
    required: true
  },
  create_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: '/public/img/avatar-default.png'
  },
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],  // -1为保密默认
    default: -1
  },
  birthday: {
    type: Date
  },
  status: {
    type: Number,
    enum: [0, 1, 2],   // 是否可以评论， 1为不可以评论， 2为不可以登录
    default: 0
  }
})

module.exports = mongoose.model('User', userSchema);