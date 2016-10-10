// var http=require("http");
// http.createServer(function (request, response) {
    // console.log(request);
    // console.log(request.url);
    // console.log(request["url"]);
    // console.log(request.method);
    // console.log(request.);
// }).listen(8888);

// var http = require("http");
// var url = require("url");
// var querystring = require("querystring");
// http.createServer(function (request, response) {
//     //接受pathname
//     var pathname = url.parse(request.url).pathname;
//     console.log(pathname);
//     //接受参数
//     var q = url.parse(request.url).query.toString();
//     console.log(querystring.parse(q)["name"]);
//
// }).listen(8888);


//                                  url.parse(string).query
//                                                |
//                   url.parse(string).pathname   |
//                              |                 |
//                              |                 |
//                           ----- -------------------
//     http://localhost:8888/start?foo = bar&hello=world
//                                       ---       -----
//                                        |          |
//                                        |          |
//                    querystring.parse(string)["foo"]     |
//                                                   |
//                              querystring.parse(string)["hello"]


