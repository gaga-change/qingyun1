// require("./01文件2").a="1";
// console.log(require("./01文件2").a);


function Person(name, age) {
    this._name = name;
    this._age = age;
}
Person.prototype.getName=function () {
    return this._name;
}
module.exports.Person = Person;