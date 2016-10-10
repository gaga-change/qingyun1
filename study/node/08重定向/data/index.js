/**
 * Created by qingyun on 16/8/26.
 */
var mod=require('./modle');
var dao=require('./dao');
/**
 * 获取用户
 * @param username  用户名
 * @param fn 参数一 err  参数二 user对象
 */
function getUser(username,fn) {
    dao.getUser(username,fn)
}
function addUser(user,fn) {
    dao.addUser(user,fn);
}
// getUser('',function (err, data) {
//     console.log(data);
// })
module.exports.getUser=getUser;
module.exports.addUser=addUser;