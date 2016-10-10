

var Man=require("./Man").Man;
var man=new Man("yan",12);

console.log(man.getName());
console.log("log")
console.info("info")
console.warn("warn")
console.error("error")
console.assert(false,function () {
    console.log("assert");
})
console.log("hahaha");
