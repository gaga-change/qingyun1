/**
 * Created by qingyun on 16/8/13.
 */
var express=require("express");
var app=express();

app.get("/",function (req,res) {

    res.send("hello");
})

// app.param("id",function(param, option) {
//     return function (req, res, next, val) {
//         if (val == option) {
//             next();
//         }
//         else {
//             res.sendStatus(403);
//         }
//     }
// });
// app.param('id', 1337);
// app.get('/user/:id', function (req, res) {
//     res.send('OK');
// })
app.param('user', function(req, res, next, id) {
    console.log("jin")
    User.find(id, function(err, user) {
        if (err) {
            next(err);
        } else if (user) {
            req.user = user;
            next();
        } else {
            next(new Error('failed to load user'));
        }
    });
});
app.param('id', 1337);
// app.param('id', function (req, res, next, id) {
//     console.log('CALLED ONLY ONCE');
//     next();
// })
//
app.get('/user/:id', function (req, res, next) {
    console.log('although this matches');
    next();
});
//
app.get('/user/:id', function (req, res) {
    console.log('and this matches too');
    res.end();
});
app.listen(9000);