var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/" + "login.html");
})
app.post("/login", function (req, res) {
    console.log("login");
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    fs.readFile(__dirname + "/" + "users.json", "utf-8", function (err, data) {
        data = JSON.parse(data);
        if (data[username] == undefined) {
            res.json({state: "false", msg: "没有该用户名"});
        } else if (data[username].password != password) {
            res.json({state: "false", msg: "密码错误"});
        } else {
            res.json({state: "true", msg: "登入成功"});
        }
    })
})
app.post("/register", function (req, res) {
    console.log(req.body);
    var newUser = {name: req.body.username, password: req.body.password}
    fs.readFile(__dirname + "/users.json", function (err, data) {
        data = JSON.parse(data);
        if (data[newUser.name] != undefined) {
            res.json({state: "false", msg: "用户已经存在"})
            return;
        }
        data[newUser.name] = newUser;
        fs.writeFile(__dirname + "/users.json", JSON.stringify(data), function (err) {
            if (err) {
                return console.error(err);
            } else {
                console.log("写入成功");
                res.json({state: "true", msg: "注册成功"});
            }
        });
    })
})
app.get("/static/:name", function (req, res, next) {
    var options = {
        root: __dirname + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    var fileName = req.params.name;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });
})

app.listen(8000);
