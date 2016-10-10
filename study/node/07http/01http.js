/**
 * Created by qingyun on 16/8/25.
 * 服务器
 */
var http = require("http"),
    fs = require("fs");

http.createServer(function (req, res) {
    console.log(req.url);
    fs.access("." + req.url, function (err) {
        if (!err && req.url != "/")getFile(req, res);
        else {
            console.log("没有文件")
            fs.readFile("./error.html", function (err, data) {
                var mtime;
                fs.stat("./error.html", function (err, f) {
                    // console.log(f);
                    mtime = f.mtime;
                    // console.log("sf:"+mTime);\

                    var old=req.headers['if-modified-since'];
                    if(old==mtime){
                        res.statusCode = 304;
                    }else{
                        res.statusCode = 200;
                    }

                    // res.setHeader('cache-control', 'max-age=6');
                    res.setHeader("Last-Modified", mtime.toString());
                    //if-modified-since
                    // res.writeHead(200,{"cache-control":"max-age=60",
                    //     "content-type":"text/html;charset=utf8"
                    // });

                    res.end(data);


                })
            })
            return;
        }
    })

}).listen(8888, function () {
    console.log("start");
})


function getFile(req, res) {
    fs.readFile("." + req.url, function (err, data) {
        if (err) {
        } else {
            res.end(data);
            return;
        }
        console.log(">")
    })
}

