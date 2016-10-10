var http=require("http");
http.createServer(function (request, response) {

    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
        postData += postDataChunk;
        console.log("Received POST data chunk '"+
            postDataChunk + "'.");
    });
    request.addListener("end", function() {
        route(handle, pathname, response, postData);
    });


    response.end("gaga")
}).listen("8888");
