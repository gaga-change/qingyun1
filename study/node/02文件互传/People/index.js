// /***
//  * 如何实现继承?
//  *
//  * @type {Haha}
//  */
//
// /**
//  * People类引用过来
//  * @type {Haha}
//  */
// var Haha = require('./people');
//
//
// /**
//  * 创建一个Man类
//  * @param name
//  * @param age
//  * @param isWorking
//  * @constructor
//  */
// function Man(name,age,isWorking){
//
//     //用apply方法调用父类初始化Man实例
//     //apply,call的区别
//     //arguments对象
//     Haha.apply( this, arguments);
//     this.isWorking = isWorking;
// }
//
//
// // /**
// //  * 通过new 父类,并且设置Man的prototype属性实现继承。
// //  * @type {Haha}
// //  */
// // Man.prototype = new Haha();
// //
// //
// // Man.prototype.