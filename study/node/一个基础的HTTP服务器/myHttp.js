var http=require("http");
var url=require("url");
function myServer(handle,route){
	function onRequest(request,response){
		var postData="";
		var pathname=url.parse(request.url).pathname;
		console.log("server得到的request请求："+pathname);
		
		// request.setEncoding("utf8");

		// request.addListener("data",function(postDataChunk){
		// 	postData+=postDataChunk;
		// 	console.log("我接受到的post数据：'"+postDataChunk+"'.");

		// });
		route(handle,pathname,response,request);
		// request.addListener("end",function(){
			
		// });

	}
	http.createServer(onRequest).listen(8888);
	console.log("server运行末尾");
}
exports.myServer=myServer;



