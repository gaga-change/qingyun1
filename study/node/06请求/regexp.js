/**
 * Created by qingyun on 16/8/25.
 */

var str="http://n.sinaimg.cn/tech/transform/20160825/pyhF-fxvecqa7642222.png";
// var regExp= new RegExp(/\/(.+?\.png|.+?\.gif)/,"g");
// var regExp= new RegExp(/.*\/(.*?)$/,"g");

var regExp=new RegExp(/.*\/(.*?)$/,"g");
// var re=regExp.exec(str);
// console.log(re)

var re;
while ((re=regExp.exec(str))!=null){
    console.log(re);
}
