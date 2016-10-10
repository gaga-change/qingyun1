// exports.a="gaga";

var Person=require("./Person").Person;
function Man (name,age) {
    Person.apply(this,arguments)
}

Man.prototype=Person.prototype;
module.exports.Man=Man;