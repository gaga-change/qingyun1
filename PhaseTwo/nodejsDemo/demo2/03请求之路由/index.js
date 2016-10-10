var server=require("./server");
var router=require("./router");
var requestHandlers=require("./requestHandlers");
var router=require("./router");//为了获取router.js文件给exprot的东西
var handle={};
handle["/"]=requestHandlers.kong;
handle["/a"]=requestHandlers.a;
handle["/b/h1"]=requestHandlers.bH1;
handle["/c/h2"]=requestHandlers.cH2;
handle["/d/h3"]=requestHandlers.suibianxie;
server.startServer(handle,router.router);

