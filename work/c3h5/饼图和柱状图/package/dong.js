/**
 * 我的个人包
 */
"use strict"
console.log("jun")
function con() {
    if (arguments.length == 0)return;
    var str=new Object();
    for (var i=0; i < arguments.length; i++) {
        str["con"+i]=arguments[i];
    }
    console.log(str);
}
Array.prototype.del=function (index) {
    var newArr=[];
    for(var i=0;i<this.length;i++){
        if(i==index)continue;
        newArr.push(this[i]);
    }
    return newArr;
};
function random(min, max) {
    return min + (max - min) * Math.random();
}
