var http=require("http");
var fs=require("fs");
var url=require("url");
var querystring=require("querystring");
http.createServer(function (request, response) {
    var pu=url.parse(request.url);
    var pathname=pu.pathname;
    console.log(pathname)
    if(pathname=="/"){
        fs.readFile("02index.html","utf-8",function (err,data) {
            response.write(data);
            response.end();
        })
    }else if (pathname=="/getTemp"){
        var postData="";
        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("看看postData是什么:"+postData);
            // var postPars=querystring.parse(postData);
            // console.log("参数一:"+postPars.name+" 参数二:"+postPars.password);
        });
        request.addListener("end",function () {
            response.writeHead("200",{"content-type":"text/html;charset=utf-8"})
            response.write("<a href='http://localhost:8888/'>点我回去</a>")
            response.end()
        })
    }
}).listen(8888);
