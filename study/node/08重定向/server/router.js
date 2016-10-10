
var fs = require('fs');
function route(handle, pathName, req, res) {
    console.log(pathName);
    console.log(req);
    fs.access("./public" + pathName, function (err) {
        if (err||pathName=="/"){
            // console.log("文件不存在");
            if(pathName=="/")pathName="/index";
            if(typeof(handle[pathName]) == "function") {
                handle[pathName](req, res);
            }else{
                res.statusCode=404;
                res.end('404 NO FOUND');
            }
        }else {
            // console.log("文件存在a")
            fs.readFile('./public'+pathName,function (err,data) {
                // console.log(r)
                res.end(data);
            })
        }

    })

}
module.exports = route;