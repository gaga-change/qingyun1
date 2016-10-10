var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});
router.get('/ha',function (req, res, next) {
  res.render('index.html',{name:" "});
})

module.exports = router;
