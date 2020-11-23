var express = require('express');
var app = express();
const cors = require("cors");
var router = require('./router');

var corslet = cors({
  // 应许改域访问
  origin: ['http://localhost:3001'],
  // 允许状态为200
  optionsSuccessStatus: 200,
  // 只应许GET\POST请求
  methods: ['GET', 'POST'],
  // 只应许带content-type请求头访问
  allowedHeaders: ['Content-Type']
})

app.use(corslet);
app.use(router);

app.listen(3000,()=>{
  console.log('http://localhost:3000/')
})