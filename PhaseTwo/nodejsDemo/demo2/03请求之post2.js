var http=require("http");
var fs=require("fs");
var url=require("url");
var querystring=require("querystring");
var formidable = require("formidable");

http.createServer(function (request, response) {
    var pu=url.parse(request.url);
    var pathname=pu.pathname;
    if(pathname=="/"){
        fs.readFile("03index.html","utf-8",function (err,data) {
            response.write(data);
            response.end();
        })
    }else if (pathname=="/getTemp"){

        var form = new formidable.IncomingForm();
        form.parse(request, function(error, fields, files) {
            if (error){
                console.log("出错了");
                response.end("不要乱发东西");
            }
            console.log(files.my_img);
            var type=files.my_img.type;
            // if (type!="image/jpeg"){
            //     response.write("我需要jpg的图片");
            //     response.end();
            // }
            fs.renameSync(files.my_img.path,"img/"+files.my_img.name);
            response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            response.write("接受成功");
            response.end();

        });

    }
}).listen(8888);


// File {
//     domain: null,
//         _events: {},
//     _eventsCount: 0,
//         _maxListeners: undefined,
//         size: 23578,
//         path: '/var/folders/6q/q10pg1v95395c27dwpyq6qr80000gn/T/upload_508b9bda4460fcd9e5873a617dabaa97',
//         name: 'ef6ed4b111f0658c68d89857f62d96d0.jpg',
//         type: 'image/jpeg',
//         hash: null,
//         lastModifiedDate: Thu Aug 18 2016 20:00:02 GMT+0800 (CST),
//         _writeStream:
//     WriteStream {
//         _writableState:
//             WritableState {
//             objectMode: false,
//                 highWaterMark: 16384,
//                 needDrain: true,
//                 ending: true,
//                 ended: true,
//                 finished: true,
//                 decodeStrings: true,
//                 defaultEncoding: 'utf8',
//                 length: 0,
//                 writing: false,
//                 corked: 0,
//                 sync: false,
//                 bufferProcessing: false,
//                 onwrite: [Function],
//                 writecb: null,
//                 writelen: 0,
//                 bufferedRequest: null,
//                 lastBufferedRequest: null,
//                 pendingcb: 0,
//                 prefinished: true,
//                 errorEmitted: false,
//                 bufferedRequestCount: 0,
//                 corkedRequestsFree: [Object] },
//         writable: true,
//             domain: null,
//             _events: {},
//         _eventsCount: 0,
//             _maxListeners: undefined,
//             path: '/var/folders/6q/q10pg1v95395c27dwpyq6qr80000gn/T/upload_508b9bda4460fcd9e5873a617dabaa97',
//             fd: null,
//             flags: 'w',
//             mode: 438,
//             start: undefined,
//             pos: undefined,
//             bytesWritten: 23578,
//             closed: true } }
