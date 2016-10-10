
// http.createServer(function (request, response) {
//
// }).listen(8888);
// //

var http=require("http");
http.createServer(show).listen(8888);
function show () {console.log("我被调用了")}