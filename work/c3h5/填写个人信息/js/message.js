var fixColorEle="0";
$(document).ready(function () {
    console.log($("ul.nav_menu a"));
    $("ul.nav_menu a").click(function (event) {
        //上次的固定元素取消
        if(fixColorEle!=event.target&&fixColorEle!="0"){
            console.log("进来了");
            fixColorEle.style.backgroundColor="beige";
        }
        // 当前颜色固定
        event.target.style.backgroundColor="aqua";
        fixColorEle=event.target;
        var num = event.target.title;
        console.log(num);
        var wrap = $("#scroll");
        wrap.animate({left: -num * 580 + "px"}, "slow");
    });
});
