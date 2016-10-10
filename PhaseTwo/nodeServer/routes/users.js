var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("hah")
  res.send('我要上天和太阳肩并肩');
  // res.render('index2.html', { title: 'Express' });
  

});

module.exports = router;
