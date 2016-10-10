var PORT = 8888;

var http = require('http');
var url = require('url');
var fs = require('fs');
var mine = require('./mine').types;
var path = require('path');

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    //var realPath = path.join("assets", pathname);
    //console.log(realPath);
    var ext = path.extname(pathname);
    ext = ext ? ext.slice(1) : 'unknown';
    pathname = pathname.substr(1);
    //api

    var getQueryStr = function (req) {
        var url = req.url;
        if( url.indexOf('?') ==-1)
            return ;
        var qStr = url.slice(url.indexOf('?') + 1);
        var qArr = qStr.indexOf('&') !==-1 ? qStr.split('&') :[qStr];
        var qMap = {};
        qArr.forEach(function (ele, i) {
            var k_v = ele.split('=');
            var key = k_v[0];
            var val = k_v[1];
            qMap[key] = val;
        })

        return qMap;
    }
    var resFile = function (name, isNotFile) {
        try {
            fs.readFile(name, "binary", function (err, file) {
                if (err) {
                    /* response.writeHead(500, {
                     'Content-Type': 'text/plain'
                     });*/
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.end(name + ' not found');
                } else {
                    var contentType = mine[ext] || "application/json";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    // console.log( name, request );
                    //console.log( response)

                    isNotFile ? response.write(file) : response.write(file, "binary");
                    response.end();
                }
            });
        } catch (e) {
            console.log(e)
        }
    }

    function getPostBody(request, response, fn) {
        if (request.method == 'POST') {
            var params = '';
            request.on('data', function (data) {
                params += data.toString();
                console.log([data.toString()])
                fn(params)
                // Too much POST data, kill the connection!
                if (data.length > 1e6)
                    request.connection.destroy();


            });
            request.on('end', function () {
                //var post = qs.parse(body);
                //console.log( body )
                // use post['blah'], etc.
            });
        }
    }

    function writeFile(str) {
        fs.open('./pwd.txt', 'w+', function (err, fd) {
            if (!err) {
                fs.writeFile('./pwd.txt', str, {encoding: 'utf-8'}, function (err, data) {
                    if (!err) {
                        console.log('写入' + str + '成功');

                    } else {
                        console.log(err);
                    }
                });
            } else {
                console.log(err);
            }
        })
    }

    function readFile(fn) {
        fs.open('./pwd.txt', 'a+', function (err, fd) {
            if (!err) {
                fs.readFile('./pwd.txt', {encoding: 'utf-8'}, function (err, data) {
                    if (!err) {
                        // var isExist = (data.indexOf(str) !=-1);
                        fn(data)

                    } else {
                        console.log(err);
                    }
                });
            } else {
                console.log(err);
            }
        })
    }

    //api

    var a = path;
    var queryMap = getQueryStr(request);
    var part = pathname.split('/');
    var categoryNum = part[part.length - 2];

    var basePath = '../';
    console.log(pathname)
    switch (pathname) {
        case 'login':
            getPostBody(request, response, function (params) {
                readFile(function (data) {

                    var user = JSON.parse(data);
                    var reqUser = JSON.parse(params);
                    var isExist = (user.name == reqUser.name) && (user.pwd == reqUser.pwd);
                    var msg = '用户 ' + (isExist ? 'exist' : 'not exist');
                    console.log(msg)
                    response.setHeader('content-type','text/plain;charset=utf-8')

                    response.end(JSON.stringify({statuCode: '200', msg: msg}));
                });

            });
            console.log('login');
            break;
        case 'getUser':
            if(request.method == 'POST') {
                getPostBody(request, response, function (params) {
                    readFile(function (data) {

                        var user = JSON.parse(data);
                        var reqUser = JSON.parse(params);
                        var isExist = (user.name == reqUser.name);
                        var msg = '用户 ' + (isExist ? 'exist' : 'not exist');
                        console.log(msg)
                        response.setHeader('content-type', 'text/plain;charset=utf-8')

                        var resObj = {statuCode: '200', msg: msg};
                        delete user.pwd;
                        isExist && (resObj.data = user);
                        setTimeout(function () {
                            response.end(JSON.stringify(resObj));
                        }, 100)
                    });

                });
            }else{
                readFile(function (data) {
                    //data = queryMap;
                    var user = JSON.parse(data);
                    var reqUser = queryMap;//JSON.parse(params);
                    var isExist = (user.name == reqUser.name);
                    var msg = '用户 ' + (isExist ? 'exist' : 'not exist');
                    console.log(msg)
                    response.setHeader('content-type', 'text/plain;charset=utf-8')

                    var resObj = {statuCode: '200', msg: msg};
                    delete user.pwd;
                    isExist && (resObj.data = user);
                    setTimeout(function () {
                        response.end(JSON.stringify(resObj));
                    }, 100)
                });
            }
            console.log('getUser');
            break;
        case 'reg':
            console.log(['regedit', queryMap]);
            getPostBody(request, response, function (params) {
                writeFile(params);
                response.end(JSON.stringify({statuCode: '200', msg: 'register success'}));
            });
            break;
        default:
            console.log('没有相关api')
            responseFile();
            ;
    }


    function responseFile() {
        pathname = basePath + pathname;
        fs.exists(pathname, function (exists) {
            if (!exists) {
                response.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                console.log('--------------un exist....' + pathname)
                response.write("This request URL " + pathname + " was not found on this server.");
                response.end();
            } else {
                resFile(pathname);
                getPostBody(request);
            }
        });

    }
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
