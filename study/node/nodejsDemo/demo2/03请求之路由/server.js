var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

function startServer(handle,router) {
    function gogo (request, response) {
        var pu = url.parse(request.url);
        var pathname = pu.pathname;
        router(handle,pathname,response,request)
    }
    http.createServer(gogo).listen(8888);
}
exports.startServer=startServer;

