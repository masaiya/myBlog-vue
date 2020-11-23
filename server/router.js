var express = require('express');
const User = require('./models/user');
var router = express.Router();
// var md5 = require('md5');
// var User = require('./models/user');

router.get('/', function(req, res) {
  res.send('首页')
})

router.post('/register', async function (req, res, next) {
  console.log("req:::");
  console.log(req.body);
  var body = req.body;
  if(await User.findOne({
    email: body.email
  })) {
    return res.status(200).json({
      err_code: 1,
      message: '邮箱已存在'
    })
  }
  var user = await new User(body).save();
  req.session.user = user;
  return res.status(200).json({
    err_code: 0,
    message: 'OK'
  })
  // try {
  //   if(await User.findOne({email: body.email})) {
  //     return res.status(200).json({
  //       err_code: 1,
  //       message: '邮箱已存在'
  //     })
  //   }
  //   body.password = md5(md5(body.password));

  //   var user = await new User(body).save();
  //   // 注册成功，使用 Session 记录用户的登录状态
  //   req.session.user = user;
  //   res.status(200).json({
  //     err_code: 0,
  //     message: 'OK'
  //   })
  // } catch(err) {
  //   next(err)
  // }
})
module.exports = router;