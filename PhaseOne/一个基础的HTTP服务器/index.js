var server=require("./myHttp");
var router=require("./router");
var requestHandlers=require("./requestHandlers");
var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;
server.myServer(handle,router.route);