// <div class="m-item">
//     <a href="#">
//     <img src="img/temp1.jpg" alt="" width="160px">
//     <div class="info">
//     <div class="t">【未来日记MMD】Mad Hatter【我妻由乃】</div>
// <p class="up">up主：AkaNxK35</p>
// <p class="play">播放：82847</p>
// </div>
// </a>
// </div>
$(document).ready(function () {


    var temp = getDataMItem()[0];
    for (var i = 0; i < 24; i++) {
        var str = new String();
        str += "<div class='m-item'>";
        str += "<a href=" + temp.mUrl + ">";
        str += "<img src=" + temp.iUrl + " alt='' width='160px'>";
        str += "<div class='info'>";
        str += "<div class='t'>" + temp.title + "</div>";
        str += "<p class='up'>up主：" + temp.up + "</p>"
        str += "<p class='play'>播放：" + temp.playNum + "</p></div></a></div>"
        var li = new $("<li></li>");
        li.html(str);
        console.log($("ul.in_carousel_one"))
        if (i < 8) {
            $("ul.in_carousel_one").append(li);
        } else if (i < 16) {
            $("ul.in_carousel_three").append(li);
        } else {
            $("ul.in_carousel_two").append(li);
        }
    }
    // <div class="push-item">
    //     <a href="#">
    //     <img src="img/temp2.jpg" alt="">
    //     <span class="time">2:10</span>
    // </a>
    // <span class="title">hahahhah</span>
    //     </div>
    temp=getDataPushItem()[0];
    for(var i=0;i<5;i++){
        var str=new String();
        str+="<div class='push-item'>";
        str+="<a href='#'>";
        str+=" <img src='img/temp2.jpg' alt=''>";
        str+="<span class='time'>2:10</span>"
        str+="</a><span class='title'>hahahhah</span></div>"
        var li=new $("<li></li>");
        li.html(str);
        $(".in_push_one").append(li);
    }
})