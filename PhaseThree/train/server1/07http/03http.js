/**
 * Created by qingyun on 16/8/25.
 */
var http=require("http")
http.createServer(function (req, res) {
    res.setHeader("content-type","text/plain;charset=utf-8");
    res.end("哈哈");
}).listen(8888,function () {
    console.log("start server!");
})