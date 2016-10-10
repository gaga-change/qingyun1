/**
 * Created by qingyun on 16/9/2.
 */

var http=require('http'),
    getVerImg=require('./verification-img').getImg;


var server=http.createServer(function (req, res) {
    res.setHeader("Content-Type","text/html");
    res.write("<img src="+getVerImg()+" />");
    res.end();
});

server.listen(8888,function () {
    console.log("http://localhost:8888");
})



