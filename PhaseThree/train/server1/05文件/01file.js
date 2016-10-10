/*****
 * Created by qingyun on 16/8/23.
 * 文件的操作
 */
var fs=require('fs')
var fd=fs.open('test/test.json','r+',function (err) {
    if(!err){
        console.log('open success');
        fs.readFile('test/test.json',{encoding:"utf8",mode:"0666",flag:"r+"},function (err, data) {
            var str=data.toString().replace(/\/\/.*?\n/g,"-------");
            console.log(str);
        })
    }
})
console.log("fd:"+fd);
// fs.open('test/01file.js','r+',function (err) {
//     if(!err){
//         console.log('open success');
//         fs.readFile('test/01file.js',{encoding:"utf8",mode:"0666",flag:"r+"},function (err, data) {
//             if(err){
//                 console.error(err);
//             }
//             var str=data.toString().replace(/\/\/.*?\n/g,"");
//             // var str=data.toString().replace(/\s/g,"");
//             // console.log(str);
//             var str=str.replace(/\s/g,"");
//             var str=str.replace(/\/\*+.*?\*+\//g,"");
//             console.log("--------------")
//             console.log(str);
//             // fs.writeFile("test/01file.js",str,{encoding:"utf8",mode:"0666",flag:"w+"},function (err) {})
//         })
//     }
// })
