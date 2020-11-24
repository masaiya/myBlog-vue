var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require("cors");
var router = require('./router');
var session = require('express-session');

app.use('/public/', express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var corslet = cors({
  // 应许改域访问
  origin: ['http://localhost:3001'],
  // 允许状态为200
  // optionsSuccessStatus: 200,
  // 只应许GET\POST请求
  methods: ['GET', 'POST'],
  // 只应许带content-type请求头访问
  allowedHeaders: ['Content-Type']
})

app.use(corslet);
app.use(session({
  // 配置加密字符串，它会在原有加密基础之上和这个字符串拼接起来去加密,目的是为了增加安全性，防止客户端恶意伪造
  secret: 'itcast',
  resave: false,
  // 无论你是否使用Session，都会默认给客户端分配一个Cookie钥匙
  saveUninitialized: true
}))
app.use(router);

// 当在别的中间件出现错误时，调用 next(err) 将直接往后找到带有四个参数的应用程序级别的中间件
// 配置一个全局错误处理中间件
app.use(function(err, req, res, next) {
  res.status(500).json({
    err_code: 500,
    message: err.message
  })
})

app.listen(3000,()=>{
  console.log('http://localhost:3000/')
})