var http=require("http");

http.createServer(function (request, response) {
    response.write("haha");
    response.end();
    // response.end("gaga")
}).listen("8888");

//
// var http=require("http")
// console.log(http);
