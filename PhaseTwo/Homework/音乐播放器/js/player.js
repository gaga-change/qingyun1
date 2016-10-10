"use strict"
var _dog = 1;
var _circulate = 2;
var _random = 3;
var STYLE = ["单曲循环", "顺序播放", "随机播放"];
var PLAYSTYLE = _circulate;
var PAUSE = true;
var radio = "";
$(document).ready(function () {
    // console.log();
    var minH = $(".body").height();
    console.log("minH" + minH);

    var minWH = $("#wrapper").height()
    console.log("minWH" + minWH);

    radio = $("#my_audio").get(0);

    changeAsideSize();
    $(window).resize(function () {
        changeAsideSize()
    });

    /**
     * 自动改变中间内容的高度
     */
    function changeAsideSize() {
        //最小为xx px; #body中获取
        // 如果大约最小的那么给aside 加多出来的
        // 即 wrapper的初始加多出来的
        var h = $(window).height();
        console.log($("#aside").height());
        if (h > minH || minWH < $("#aside").height()) {
            $("#aside").css("height", h - minH + minWH);
            console.log(h - minH + minWH);
        }
        //突然快速滑动 瞬间h小于minH 没有执行resize 导致出错
        // 如果h小于minH 判断aside的高度是不是超出了默认,如果是也改
    }

    // 加载音乐
    var table = $("#my_table");
    var arr = getMusics();
    var INDEX = 0;
    var DD = 0;
    var CHOOSE = 0
    var sign = 0

    console.log(arr);
    trLoad(); //先加载一次
    function trLoad() {
        table.empty();
        changeImg();
        arr.map(function (ele, index) {
            var tr = $().add("<tr class='haha' title=" + index + "></tr>");
            var str = "<td><a class='start_start'>☆</a></td>";//★
            str += "<td><a>" + ele.name + "</a></td>";
            str += "<td><a>" + ele.singer.name + "</a></td>";
            str += "<td><ul id='shares_ul'><li><a id='share'><img src='img/分享.png'></a><ul><li><a href=''><img src='img/QQ.png' alt=''></a></li><li><a href=''><img src='img/微博.png' alt=''></a></li></ul></li></ul></td>";
            str += "<td><a class='gaga'>×</a></td>";
            //tr的点击事件
            tr.click(function (ele) {
                //亮颜色
                var temp = $(this).attr("title");
                changeIndex(temp);

            });
            tr.append(str);
            table.append(tr);
        });
        //星星点击事件
        $("a.start_start").on("click",function (ele) {
            var temp=ele.target.innerHTML;
            if(temp=="☆")temp="★";
            else temp="☆";
            ele.target.innerHTML=temp;
           ele.stopPropagation();
        });
        //删除的点击事件
        $(".gaga").on("click", function (eve) {
            var baba = $(this).closest("tr");

            DD = baba.get(0).title;
            console.log(DD);
            $(this).closest("tr").remove();
            eve.stopPropagation();
            //同时删除数组里的东西
            arr = arr.filter(function (ele, index) {
                if (index != DD)return true;
                else
                    return false;
            })
            //如果删除的是我当前选中的 INDEX  那么暂停歌曲 INDEX-1 或 +1
            if (arr.length == 0) {  //没有歌曲了 得考虑

                return;
            }
            if (DD == INDEX) {
                if (INDEX == 0) {
                    INDEX = arr.length - 1;
                } else {
                    INDEX -= 1;
                }
                // 处理播放器
            }
            console.log("删除后要显示的行:" + INDEX);
            changeIndex(INDEX, true);

        });
    }

    //第一行先亮色
    // $("tr.haha").eq(0).attr("class", $(this).attr("class") + " change");

    changeIndex(0, true);
    //改变右侧 和下方 图
    function changeImg() {
        var singer = arr[INDEX].singer;
        // #aside
        $("#aside .singer_img_name").attr("src", "img/" + singer.imgName);
        $("#aside .singer_style").text(singer.style);
        $("#aside .singer_name").text(singer.name);
        $("#aside .singer_pep_num").text(singer.pepNum);
        $("#aside .singer_muc_num").text(singer.mucNum);
        //#footer singer_img_blur
        $("#footer .singer_img_blur").attr("src", "img/" + singer.imgBlur);
        //.body
        $(".body").css("background", singer.color);
    }

    // -----------控制区-------------

    //加进度条
    var range1 = new jQuery.Range();
    var date = new Date();
    range1.setRange("jquery_range", "4px", "545px", "#fffff9", "rgba(255,255,255,0.1)", "#fffff9", function (x, y, left) {
        if(arr.length==0)return;
        date = new Date();
        $("#gaga_chang").fadeIn("slow");
        $("#gaga_chang>em").text(turnTime(parseInt(arr[INDEX].timeAll * (1 - left))));
        $("#gaga_chang").get(0).style.left = 545 * left - 25 + "px";
        setTimeout(function () {
            if (new Date() - date < 1000)return;
            $("#gaga_chang").fadeOut("slow");
        }, 1000);
    }, function (value) {
        if(arr.length==0)return;
        radio.currentTime = value * arr[INDEX].timeAll;
        if(PAUSE==true){ //如果正在暂停
            radio.pause();
        }else{
            radio.play(); //如果正在播放
        }
    });
    radio.addEventListener("timeupdate", function () {
        if(arr.length==0)return;
        // console.log(radio.currentTime);
        range1.setValue(radio.currentTime / arr[INDEX].timeAll, false);
        //时间
        $("#else>.right").text(turnTime(arr[INDEX].timeAll - parseInt(radio.currentTime)));

    });
    //音量
    var range2 = new jQuery.Range();
    range2.setRange("jquery_range_volume", "4px", "60px", "#fffff9", "rgba(255,255,255,0.1)", "#fffff9", function () {

    }, function change(value) {
        radio.volume = value;
    });
    range2.setValue(0.5, true);
    //随机顺序循环

    $(".volume>img").eq(0).on("click", function () {
        console.log(this.title);
        var style = (this.title - 1 + 1) % 3;
        this.title = (this.title - 1 + 1) % 3 + 1;
        this.src = "img/" + STYLE[style] + ".png";
        // console.log("现在的状态:"+STYLE[style]);
        PLAYSTYLE = style + 1;
    });
    //喇叭
    $(".volume>img").eq(1).on("click", function () {
        $(".volume>img").eq(1).next().fadeToggle("slow");
    });
    //上一首
    $(".pause>img").eq(0).on("click", function () {
        var temp = INDEX;
        if (arr.length <= 1) {
            return;
        }
        if (temp == 0) {
            temp = arr.length - 1;
        } else {
            temp -= 1;
        }
        changeIndex(temp);
    });

    //暂停和开始
    $(".pause>img").eq(1).on("click", function () {
        PAUSE = !PAUSE;
        if (PAUSE) {
            this.src = "img/开始.png";
            radio.pause();
            console.log("暂停");
        } else {
            this.src = "img/暂停.png";
            radio.play();
            console.log("播放");
        }

    });
    //下一首
    $(".pause>img").eq(2).on("click", function () {
        var temp = Number(INDEX);
        if (arr.length <= 1) {
            return;
        }
        if (temp-1 + 3 > arr.length) {
            temp = 0;
        } else {
            temp += 1;
        }

        console.log("下一首的index是:"+temp);
        changeIndex(temp);
    });
    function changeIndex(temp, bool) {
        console.log("总歌曲数目:"+arr.length+"--------");
        if (arr.length==0)return;
        console.log("temp:" + temp + " bool:" + bool);
        var self = $("table tr").eq(temp);
        console.log($(self).attr("class"));
        $(self).attr("class", $(self).attr("class") + " change");
        if (arr.length == 0) {
            radio.src = "";
            return;

        }
        if (arr.length > 1) {
            $(self).siblings().attr("class", $(self).siblings().attr("class").replace(/ change/g, ""));
        }

        // var temp = $(self).attr("title");
        if (temp == INDEX) {
            if (bool == undefined || bool == false)return;
        }
        else {
            INDEX = temp;
            changeImg();
        }
        //歌曲标题
        $("#else>.left").text(arr[INDEX].name);
        //时间
        $("#else>.right").text(turnTime(arr[INDEX].timeAll));
        console.log("------------");
        radio.src = arr[INDEX].getUrl(); //加载资源
        console.log(PAUSE);
        if (PAUSE) {
            console.log("状态:暂停的")
            radio.pause();
        } else {
            console.log("状态:播放的")
            radio.play();
        }
        //歌词
        $("#show_lyric_p").get(0).innerHTML = arr[INDEX].text;
        //显示当前的曲目数和当前的index
        // now_index
        $("#now_index").text(INDEX-1+2);
        $("#arr_length").text(arr.length);
    }

    function turnTime(num) {
        if (num <= 0)return "-00:00";
        var a = parseInt(num / 60);
        var b = num % 60;
        if (a < 10)a = "0" + a;
        if (b < 10)b = "0" + b;
        return "-" + a + ":" + b;
    }

    //歌词的处理
    $("#show_lyric").on("click", function () {
        // console.log("jin")
        // 先获取爸爸的高和宽 然后 歌词的界面往上覆盖 高度和宽度
        var h = $("#aside").css("height");
        var w = $("#aside").css("width");
        console.log("h:" + h + " w:" + w);
        var lyric = $("#lyric");
        lyric.siblings().fadeOut();  //淡出后面的
        lyric.animate({  //自己变高
            "height": h
        }, "slow");
        setTimeout(function () {  //自己固定高
            lyric.css('height', '100%');
        }, 1000);
    });
    //监听播放的进度
    setInterval(function () {
        if (radio.ended) {
            if (PLAYSTYLE == 2) { //顺序
                var temp = INDEX;
                console.log(temp);
                if (arr.length <= 1) {
                    return;
                }
                if (temp + 2 > arr.length) {
                    temp = 0;
                } else {
                    temp += 1;
                }
                changeIndex(temp);
                console.log("顺序")
            } else if (PLAYSTYLE == 3) { //随机
                console.log("随机");
                var temp=parseInt(Math.random()*arr.length)
                changeIndex(temp);
            } else {//单曲
                console.log("单曲")
                radio.currentTime=0;
            }
            radio.play();
        }
    }, 1000);
    $("#hide_lyric").on("click", function () {
        // 先获取爸爸的高和宽 然后 歌词的界面往下覆盖 高度和宽度
        var h = $("#aside").css("height");
        var w = $("#aside").css("width");
        console.log("h:" + h + " w:" + w);
        var lyric = $("#lyric");
        lyric.siblings().fadeIn();  //淡入后面的
        lyric.animate({  //自己变矮
            "height": 0
        }, "slow");
        setTimeout(function () {  //自己固定高
            lyric.css('height', '0');
        }, 1000);
    })
    // var num=8;
    // while (num--){
    //     var temp=parseInt(Math.random()*arr.length);
    //     console.log(temp);
    // }
    $("#last_last_ku").click(function () {
        $("#my_table").empty();
        radio.src="";
        arr=[];
    });
});

