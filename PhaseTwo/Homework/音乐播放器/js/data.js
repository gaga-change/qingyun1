var text1="《我在海边等你》<br>词曲唱：邵夷贝<br>编曲：纪元<br>纪录片《我在海边等你》主题曲<br><br>可曾听见潮水中的琴声<br>天际有一座翠绿的城<br>白衣少年 追逐巨浪启程<br>游向彼岸 永明灯<br><br>直到风平浪静<br>海承载水的迷津<br>穿越暗潮汹涌<br>时光在包容<br>水的懵懂 水的梦<br>却又风起云涌<br>海承载谁的迷津<br>穿越逆流幻影<br>时光在接近<br>我的懵懂 我的梦<br><br>可曾听见潮水中的琴声<br>天际有一座翠绿的城<br>白衣少年 追逐巨浪启程<br>游向彼岸永明灯<br><br>可曾想念炎夏时的虫鸣声<br>天际那座赤红的城<br>衣角飞扬 逆着光迎着风<br>骄傲着 孤独着<br><br>直到风平浪静<br>海承载水的迷津<br>穿越暗潮汹涌<br>时光在包容<br>谁的懵懂 谁的梦<br>却又风起云涌<br>海承载水的迷津<br>穿越逆流幻影<br>时光在结晶<br>谁的懵懂 谁的梦<br><br>直到风平浪静<br>海承载水的迷津<br>穿越暗潮汹涌<br>时光在包容<br>谁的懵懂 谁的梦<br>却又风起云涌<br>海承载水的迷津<br>穿越逆流幻影<br>时光在结晶<br>我的懵懂 我的梦<br><br>穿越逆流幻影<br>时光在包容<br>海的迷津 海的梦<br>";
var text2="暂无歌词";

"use strict"
//歌手: 歌手名   音乐风格    关注人数(假)  音乐数(假) 图片名
//音乐: 音乐名  歌手 歌词
function Singer(name, style, pepNum, mucNum, imgName,imgBlur,color) {
    this.name = name;
    this.style = style;
    this.pepNum = pepNum;
    this.mucNum = mucNum;
    this.imgName = imgName;
    this.imgBlur=imgBlur;
    this.color=color;
}

function Music(name, singer, timeAll,text) {
    this.name = name;
    this.singer = singer;
    this.timeAll = timeAll;
    this.text=text;
}
Music.prototype.getUrl = function () {
    return "music/" + this.singer.name + " - " + this.name + ".mp3";
}
function getMusics() {
    var s1 = new Singer("邵夷贝", "名摇 Folk", 202753, 44, "img2.jpg","mh1.png","#333332");
    var s2 = new Singer("Milkmustache", "摇滚 Rock", 246, 13, "img1.jpg","mh2.png","#33292a");
    var m1 = new Music("我在海边等你", s1, 336,text1);
    var m2 = new Music("Submarine", s2, 175,text2);
    var m3 = new Music("在希望的田野上cover", s1, 171,text2);
    return [m1, m2,m3];
}

