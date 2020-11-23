var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
  res.send('首页')
})

router.post('/register', function (req, res, next) {
  console.log("req:::");
  console.log(req.body);
  res.status(200).send('aaaaa')
})
module.exports = router;