/**
 * Created by jundong on 16/8/13.
 */
var express=require("express");
var app=express();
app.get("/",function (req, res) {
    res.send("hello express");
});
app.listen(3000);
