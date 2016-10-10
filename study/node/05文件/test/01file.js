/**
 * Created by qingyun on 16/8/23.
 * 文件的操作
 */



var fs=require('fs')
fs.open('test/test.json','r+',function (err) {
    if(!err){
        console.log('open success');
        fs.readFile('test/test.json',{encoding:"utf8",mode:"0666",flag:"r+"},function (err, data) {
            var str=data.toString().replace(/\s/g,"");
            console.log(str);
        })
    }
})
fs.open('test/01file.js','r+',function (err) {
    if(!err){
        console.log('open success');
        fs.readFile('test/01file.js',{encoding:"utf8",mode:"0666",flag:"r+"},function (err, data) {
            if(err){
                console.error(err);
            }
            var str=data.toString().replace(/\s/g,"");
            console.log(str);
            console.log(data);
        })
    }
})
// var str = 'Twas the night before Xmas...';
// var newstr = str.replace(/" "/g, 'Christmas');
// console.log(newstr);  // Twas the night before Christmas...
