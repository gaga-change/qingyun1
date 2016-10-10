
var http=require("http"),
    fs=require("fs"),
    url=require('url');

function startServer(router,handle) {
    function run (req,res) {
        var pathName=url.parse(req.url).pathname;
        // console.log(pathName);
        router(handle,pathName,req,res);
    }
    var server=http.createServer(run);
    server.listen(8888,function () {
        console.log("run server");
    })
}
module.exports=startServer;
