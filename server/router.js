var express = require('express');
const User = require('./models/user');
const Topic = require('./models/topic');
var router = express.Router();
var md5 = require('md5');

router.get('/', async function(req, res) {
  var topics = await Topic.find();
  res.send(topics);
})
router.post('/register', async function (req, res, next) {
  var body = req.body;
  try {
    if(await User.findOne({email: body.email})) {
      return res.status(200).json({
        err_code: 1,
        message: '邮箱已存在'
      })
    }
    body.password = md5(md5(body.password));
    var user = await new User(body).save();
    // 注册成功，使用 Session 记录用户的登录状态
    req.session.user = user;
    console.log(req.session.user);
    return res.status(200).json({
      err_code: 0,
      message: 'OK'
    })
  } catch(err) {
    return res.status(500).json({
      err_code: 500,
      message: 'Internal serve error.'
    })
  }
})

router.post('/login', async function (req, res, next) {
  var body = req.body;
  try {
    var user = await User.findOne({
      email: body.email,
      password: md5(md5(body.password))
    })
    if(!user) {
      return res.status(200).json({
        err_code: 1,
        message: '邮箱或密码错误'
      })
    }
    req.session.user = user;
    return res.status(200).json({
      err_code: 0,
      message: 'OK'
    })
  } catch(err) {
    return res.status(500).json({
      err_code: 500,
      message: 'Internal serve error.'
    })
  }
})
module.exports = router;