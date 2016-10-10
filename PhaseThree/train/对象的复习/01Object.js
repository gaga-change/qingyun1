
function Per(name) {
    this.name=name;
}
Per.prototype.showName=function () {
    console.log(this.name);
}
function Man(name) {
    Per.apply(this,arguments);
}
Man.prototype=Object.create(Per.prototype);
Man.prototype.constructor=Man;
var man1=new Man("1");
man1.showName();

console.log(Man.prototype)
console.log(man1.constructor)