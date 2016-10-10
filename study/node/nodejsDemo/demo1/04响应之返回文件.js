var http=require("http");
var fs=require("fs");
http.createServer(function (request, response) {
    console.log("hha");
    response.writeHead("200",{"content-type":"text/html;charset=utf-8"})
    fs.readFile('temp.html', 'utf8', function (err,data) {
        console.log(data);
        response.write(data);
        response.end();
    });

}).listen(8888);
// http://tool.oschina.net/commons

//
// var http=require("http");
// var fs=require("fs");
// http.createServer(function (request, response) {
//     console.log("hha");
//     response.writeHead("200",{"content-type":"image/gif"})
//     fs.readFile('haha.gif' , function (err,data) {
//         response.write(data);
//         response.end();
//     });
//
// }).listen(8888);