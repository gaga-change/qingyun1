var fs = require('fs');
var dataServer = require('../data');


// dataServer.getUser('',function (err, data) {
//     console.log(data);
// })


function index(req, res) {
    res.writeHead(302, {'location': '/index.html'});
    res.end();
}
function ajaxLogin(req, res) {
    // var cookie=req.headers.cookie;
    // console.log(cookie)
    // res.cookie("gaga",1,{maxAge:60});
    // res.setHeader('set-cookie',"name=yanjundong")
    // res.end("ajaxLogin");
    var data = '';
    req.on('data', function (d) {
        data += d;
    })
    req.on('end', function () {
        var user = JSON.parse(data);
        dataServer.getUser(user.username, function (err, u) {
            if (err) {
                res.end("err username");
            } else {
                if (user.password == u.password) {
                    user.password = '***';
                    res.end(JSON.stringify(user));
                    // res.write(302,{'location':''})
                } else {
                    res.end("err password");
                }

            }
        })
    })
}
function ajaxRegister(req,res) {
    var data = '';
    req.on('data', function (d) {
        data += d;
    })
    req.on('end',function () {
        var user=JSON.parse(data);
        dataServer.addUser(user,function () {
            user.password='***';
            res.end(JSON.stringify(user));
        });
    })
}
function temp(req, res) {
    console.log("??")             
    // res.setHeader("Access-Control-Allow-Origin","*");
    res.end("temp");
}

module.exports.index = index;
module.exports.ajaxLogin = ajaxLogin;
module.exports.ajaxRegister = ajaxRegister;
module.exports.temp = temp;
// module.exports.a = "a";x
