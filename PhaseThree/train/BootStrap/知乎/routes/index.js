var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  res.render('test.html', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login.html', { title: 'Express' });
});
module.exports = router;
