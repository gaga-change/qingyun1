/**
 * Created by qingyun on 16/8/26.
 */
var fs=require('fs');
var m=require('./modle');
var User=m.User;
// var User=m.User;
// var url='user.json';
var url='./data/user.json';
//根据用户名获取 用户对象
function getUser(username,fn) {
    readFile(function (data) {
        var data=JSON.parse(data);
        if(data[username]==undefined){
            fn("没有改用户")
        }else{
            fn(undefined,new User(username,data[username]["password"]))
        }

    })
}
function addUser(user,fn) {
    readFile(function (data) {
        var data=JSON.parse(data);
        var temp=JSON.parse(JSON.stringify(user));
        delete temp.username;
        console.log(temp)
        console.log(user);
        data[user.username]=temp;
        fs.writeFile(url,JSON.stringify(data),function () {
            fn();
        });
    })
}
//链接json数据库
function readFile(fn) {
    fs.open(url,'rs+',function (err) {
        if(err){
            console.warn("链接数据库出错,数据库可能不存在!");
        }else{
            console.log("打开文件啦")
            fs.readFile(url,function (err,d) {
                fn(d);
            })
        }
    });
}

// getUser('',function (err, user) {
//     if(err){
//         console.log("没有改用户");
//     }else{
//         console.log("该用户的密码为:"+user.password);
//     }
// })

// addUser({username:'a',password:'123'})

module.exports.getUser=getUser;
module.exports.addUser=addUser;