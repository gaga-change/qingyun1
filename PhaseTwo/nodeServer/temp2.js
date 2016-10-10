var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.get("/temp",function (req, res) {
//     // console.log(querystring(req.url)["name"]);
//     // var name=req.query.name;
//     // var name=req.body.name;
//     var name=req.param('name');
//     console.log(name);
//     // res.send();
// })
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post("/temp",function (req, res) {
    // console.log(querystring(req.url)["name"]);
    // var name=req.query.name;
    // var name=req.body.name;
    // var name=req.param('name');
    console.log("body:"+req.body);
    res.send(req.body);
    // res.send();
})

app.listen(3000, function () {
    console.log('Ready');
})
