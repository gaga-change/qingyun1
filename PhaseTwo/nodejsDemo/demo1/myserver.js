var http=require("http");
var querystring=require("querystring");
http.createServer(function (request, response) {
    // var postData="";
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
        console.log(postDataChunk);
        // postData += postDataChunk;
        // console.log("看看postData是什么:"+postData);
        var postPars=querystring.parse(postDataChunk);
        console.log(postPars.hah)
        // console.log("参数一:"+postPars.name+" 参数二:"+postPars.password);

    });
    response.end();
    // request.addListener("end",function () {
    //     response.writeHead("200",{"content-type":"text/html;charset=utf-8"})
    //     response.write("<a href='http://localhost:8888/'>点我回去</a>")
    //     response.end()
    // })
}).listen(8888);