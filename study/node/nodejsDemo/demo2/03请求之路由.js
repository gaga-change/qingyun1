var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");
http.createServer(function (request, response) {
    var pu = url.parse(request.url);
    var pathname = pu.pathname;
    if (pathname == "/") {
        console.log("我得到的路径为/");
        response.end();
    } else if (pathname == "/a") {
        console.log("我得到的路径为/a");
        //一大段代码
        response.end();
    } else if (pathname == "/b/h1") {
        console.log("我得到的路径为/b/h1");
        //一大段代码
        response.end();
    } else if (pathname == "/c/h2") {
        console.log("我得到的路径为//c/h2");
        //一大段代码
        response.end();
    } else if (pathname == "/d/h3") {
        console.log("我得到的路径为/d/h3");
        //一大段代码
        response.end();
    }
}).listen(8888);
