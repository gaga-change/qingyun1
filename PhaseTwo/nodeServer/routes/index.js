var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gaga.html', { title: 'Express' });
});
router.post("/getMsg",function (req, res, next) {
  console.log("我进到getMsg post了")
  // res.render('index.html', { title: 'Express' });
  // res.statusCode(200);
  res.end("jiangui");
})
router.get("/getMsg",function (req, res, next) {
  console.log("我进到getMsg get了")
  // res.render('index.html', { title: 'Express' });
  // res.statusCode(200);
  res.end("jiangui");
})

module.exports = router;
