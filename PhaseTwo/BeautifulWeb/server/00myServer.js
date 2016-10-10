var http = require("http");
var url = require("url");
var fs = require("fs");
var arr=[{name:"yjd",pas:"123"}];
var path=require("path");
function myServer(handle, route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var realPath="../"+pathname;
        console.log("我收到的url"+pathname);
        if (pathname == "/") {
            console.log("server得到的request请求：" + pathname);
            response.writeHead(200, {"Content-Type": "text/html"});
            fs.readFile("public/index.html", function (err, data) {
                response.end(data);
            });
        }else if(pathname=="/getPas"){

            request.addListener("data",function (temp) {
                console.log(temp);
            });

            response.writeHead(200,{"Content-Type":"text/plain"})
            var user={name:"gaga",password:"123"};
            user=JSON.stringify(user);
            response.end(user);
        }else if (pathname=="/package/jquery-3.1.0.min.js"){
            response.writeHead(200,{"Content-Type":"text/javascript"});
            fs.readFile("../package/jquery-3.1.0.min.js", function (err, data) {
                if(err){
                    console.log("错误:"+err);
                }else{
                    response.write(data);
                }
            //     response.write(data,"binary");
                response.end();
            });
        }
        else{
            response.writeHead(404,{"Content-Type":"text/plain;charset=utf-8"});
            response.end("我没有响应的url");
        }

    }

    http.createServer(onRequest).listen(9000);
    console.log("server运行末尾");
}
myServer();
exports.myServer = myServer;