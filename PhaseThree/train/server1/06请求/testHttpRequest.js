/**
 * Created by qingyun on 16/8/25.
 * request 请求
 */
var http= require('http');
var fs=require('fs')
var url="http://www.sina.com.cn" ;
url="http://www.bilibili.com";
var getImgUrls=[];
var i=0;

// fs.mkdirSync("./img");
http.get(url,function (res) {
    res.on('data',function (con) {
        con=con.toString();
        con.replace(/<img.*>/g,function (a,b) {
            // console.log(a)
            console.log(a)
        })
        
        // var str=con.toString();
        // <img src="" >
        // console.log("?")
        // var patt=new RegExp(/(<img).+?>/,"g");
        // var result;
        // while ((result=patt.exec(str))!=null){
            // var src=new RegExp(/(src=('|")).+?('|")/,"g").exec(result[0]);
            // // console.log(result[0]);
            // // console.log(src[0]);
            // var url=new RegExp(/('|").+?('|")/,"g").exec(src[0]);
            // url=url[0].substring(1,url[0].length-1)
            // if(url.search("http")==0){
            //     var b=true;
            //     getImgUrls.map(function (ele,index) {
            //         if(ele==url){
            //             b=false;
            //             // console.log(ele)
            //         }
            //     })
            //     if(b)getImgUrls.push(url);
            // }
        // }
    })
    res.on('end',function () {
        // console.log(getImgUrls)
        getImgUrls.map(function (ele) {
            // downloadImg(ele);
            downloadImg(ele);

        })
    })
}).on('error',function (e) {
    console.error(e);
})

function downloadImg(url) {
    http.get(url,function (res) {
        res.on("data",function (data) {
            // if(i>10)return;
            var fileName=new RegExp(/.*\/(.*?)$/).exec(url)[1];
            console.log(fileName)
            // fs.open("./img/"+fileName,"w",function () {
            //     fs.writeFile("./img/"+fileName,data)
            // });
            // i++;
            fs.appendFile('./img/'+fileName,data);
        })
    })
}


//
// var str="<img src='fdsa'>";
// var patt=new RegExp(/fd/,"g")
// var result;
// while((result=patt.exec(str))!=null){
//     console.log(result);
// }



// console.log(str);

