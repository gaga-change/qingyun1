
function router(handle,pathname,response,request) {
    console.log("路由得到的request请求： "+pathname);
    if(typeof handle[pathname]==="function"){
        handle[pathname](request,response);
    }else{
        console.log("没有匹配的handler名："+pathname)
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
exports.router=router;