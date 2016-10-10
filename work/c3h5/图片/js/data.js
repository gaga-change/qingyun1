var DATA={url:"img"};
function getData() {
    return [new Img("angelababy.jpg"),new Img("chenhao.jpg"),new Img("fanbingbing.jpg"),new Img("gaoyuanyuan.jpg"),new Img("liushishi.jpg"),new Img("liutao.jpg"),new Img("liuyifei.jpg"),new Img("tongliya.jpg"),new Img("yangmi.jpg"),new Img("yangzi.jpg"),new Img("zhangxinyi.jpg"),new Img("zhaoliying.jpg")];
}
function Img (name) {
    this.name=name;
}
Img.prototype.getUrl=function () {
  return DATA.url+"/"+this.name;
};
