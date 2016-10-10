/**
 * Created by qingyun on 16/8/27.
 */
var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log("过此路都得经过我哈");
    next();
})
app.use(express.static('./'),function (req,res,next) {
    console.log("没有静态资源");
    next();
    
})
app.get('/:id', function(req, res){
    console.log("我得到的id:"+req.params.id);
    res.send('hello world');
});

var server=app.listen(8888,function () {
    var host=server.address().address;
    var port=server.address().port;
    // console.log(host);
    console.log(port)
    console.log("http://localhost:%s",port)
    // console.log('http://%s:%s', host, port);
});
