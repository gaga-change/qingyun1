// var http=require("http");
// var fs=require("fs");
// var url=require("url");
// var querystring=require("querystring");
// http.createServer(function (request, response) {
//     var pu=url.parse(request.url);
//     var pathname=pu.pathname;
//     var getPars=querystring.parse(pu.query);
//     if(pathname=="/"){
//         fs.readFile("01index.html","utf-8",function (err,data) {
//             response.write(data);
//             response.end();
//         })
//     }else if (pathname=="/getTemp"){
//         console.log("你输入的是:"+getPars.name);
//         response.write("<a href='http://localhost:8888/'>点我回去</a>")
//         response.end()
//     }
// }).listen(8888);

var http=require("http");
var fs=require("fs");
var url=require("url");
var querystring=require("querystring");
http.createServer(function (request, response) {
    var pu=url.parse(request.url);
    var pathname=pu.pathname;
    console.log(pathname);
    var getPars=querystring.parse(pu.query);
    if(pathname=="/"){
        fs.readFile("01index.html","utf-8",function (err,data) {
            response.write(data);
            response.end();
        })
    }else if (pathname=="/getTemp"){
        console.log("你输入的是:"+getPars.name);
        response.write("<a href='http://localhost:8888/'>点我回去</a>")
        response.end()
    }
    // else if (pathname=="img/haha.gif"){
    //     fs.readFile("img/haha.gif",function (err,data) {
    //         response.writeHead("200",{"content-type":"image/gif"});
    //         response.write(data);
    //         response.end();
    //     })
    // }
    else if (pathname.search(/^\/img\//)!=-1){
        fs.readFile(pathname.substr(1),function (err,data) {
            response.writeHead("200",{"content-type":"image/gif"});
            response.write(data);
            response.end();
        })
    }
}).listen(8888);


