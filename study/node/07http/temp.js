/**
 * Created by qingyun on 16/8/25.
 */
/**
 * Created by qingyun on 16/8/25.
 */
//正则表达式
// var str="waoijfdmolAFIWOJNvbjkz";
// var pat1=/a/gi;
// var b=/mm/;
// console.log(str.match(pat1));
// console.log(b.test(str));
// console.log(b.exec(str));
    
//    数组的入
// var  a=[];
// a[0]="zero";
// a[1]="one";
// a.push('er');
//
// for(var i in a){
//     console.log(a[i]);
//     console.log(a.join());
// }
// console.log(a.reverse().join());


//引入http模块,文件模块
var ht=require('http');
var fs=require("fs");
// 利用http模块创建服务器
var server=ht.createServer(function (req,res) {
    var url=req.url;
    res.setHeader("content-type", "text/html;charset=utf-8");
    //设置缓存
    var curData = new Date(Date.now() + 1000 * 6);
    var gmt = curData.toGMTString;
    res.setHeader('expires', gmt);
    res.setHeader('max-age', gmt);
    // res.setHeader('charset=utf-8', 'max-age');
    save("."+url,function (content) {
        res.end(content);
    })
    console.log("文件读取成功,文件地址为:"+url);
})


//对文件读取并且保存
function save(path,fn) {
    fs.access(path,function (err) {
        if(!err){
            fs.readFile(path,function (a,content) {
                if(!a){
                    fn(content);
                }
                else{
                    console.log("文件读取失败")
                }
            })
        }else
        {
            console.log("没有找到");
        }
    })
}

//对服务器增加一个端口号
var port=8000;
server.listen(port,function (err) {
    if(!err){
        console.log("服务器的端口号为"+port);
    }else{
        console.log("没有检测到端口号");
    }

})


