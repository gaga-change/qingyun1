var ARR = [];
var ELE = {};
var isGather=true;
$(document).ready(function () {
    ARR = getData();
    console.log(ARR);
    ELE.content = $("#section .content");
    ELE.imgs = new $();
    //把所有的图片放入content div下
    ARR.map(function (ele, index) {
        var div = new $("<div></div>")
        var img = new $("<img width='200' height='300' />");
        ELE.imgs = ELE.imgs.add(img);
        img.get(0).src = ele.getUrl();
        div.append(img);
        ELE.content.append(div);

    });
    console.log(ELE.imgs)
    //给imgs创建点击事件
    ELE.imgs.parent().hover(pointerIn);
    //聚集图片 舒展图片
    $("a.gather").on("click",gather);

});
var time;
function pointerIn(e) {
    if(!isGather)return;
    time = e.timeStamp;
    console.log("in")
    var self = $(e.currentTarget).children();
    // console.log($(e.currentTarget))
    self.css({
        "border-radius": "20px",
        "box-shadow": "-10px 0px 10px gray,0px 10px 10px gray",
        "transform": "rotateY(180deg) translateX(20px) scale(1.1,1.1)"

    })
    ELE.imgs.not(self).css({
        "border-radius": "",
        "box-shadow": "",
        "transform": ""
    })
    
}
var setTime;
function gather(e) {
    if(e.timeStamp-setTime<1000)return;
    setTime=e.timeStamp;
    // 点击后判断要集合还是舒展
    if(e.currentTarget.innerHTML=="收") {
        e.currentTarget.innerHTML = "舒展";
        console.log("jin")
        // 每个图都往第一个位置平移,然后消失,除了第一个
        // 获取每一个图片在父元素的左上位置
        ELE.imgs.each(function (index, ele) {
            var pos = $(ele).parent().position();
            //20 40
            $(ele).css({
                "transform": "rotateY(0deg) translateX(0px) scale(1,1) translate(0px) translateY(0px)"
            });
            $(ele).parent().css({
                "transform": "translate(" + (30- pos.left) + "px)translateY(" + (80- pos.top) + "px)"
            });
            if (index == ELE.imgs.length - 1) {
                isGather = false;
                return;
            }
            $(ele).fadeOut(1000);
        });
    }else {
        console.log("chu")
        e.currentTarget.innerHTML = "收";
        ELE.imgs.each(function (index, ele) {
            var pos = $(ele).parent().position();
            //20 40
            $(ele).css({
                "transform": "rotateY(0deg) translateX(0px) scale(1,1) translate(0px) translateY(0px)"
            });
            $(ele).parent().css({
                "transform": "translate(" + 0 + "px)translateY(" + 0 + "px)"
            });
            if (index == ELE.imgs.length - 1) {
                isGather = true;
                return;
            }
            $(ele).fadeIn("fast");
        });
    }
}
