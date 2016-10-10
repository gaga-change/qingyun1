var ARR = new Array();//存储当前所有的数据
var delTr;
$(document).ready(function () {
    $("form.set_msg").on("submit", addMessage);
    $("table.show_msg").on("show.update", updateTable)
    $("#nav").on("click","li",scroll);

    //方法区域

    //事件函数区域区域
    function addMessage(ele) {
        var cd;
        with (this) {
            cd = new ChartDate(name.value, data.value, unit.value, color.value);
        }
        // 判断 各种提示 提交
        ARR.push(cd);
        //更新表格
        $("table.show_msg").trigger("show.update");
        return false;

    }
    function updateTable(event) {
        // con(ARR);
        $(event.currentTarget).find("tr:gt(1)").remove();
        ARR.map(function (ele, index) {
            var tr = new $("<tr></tr>");
            var str = " <td>" + ele.name + "</td>";
            str += " <td>" + ele.data + "</td>";
            str += " <td>" + ele.unit + "</td>";
            var temp="background-color:" + ele.color;
            str += "<td style="+temp+"></td>";
            str+="<td><input onclick='delTr(this)' title="+index+" type='button' value='删除'></td>";
            tr.html(str);
            $(event.target).append(tr);
        });
    }
    function scroll(event) {
        var index=$(event.delegateTarget).find("li").index(event.currentTarget);
        console.log(index);
        $("#scroll").animate({
            "left":-index*600
        },"slow");

    }
    delTr= function (id) {
        // con(id);
        $(id).closest("tr").remove();
        ARR=ARR.del(id.title);
        console.log("删除后:"+ARR.length);
        //更新表格
        $("table.show_msg").trigger("show.update");
    }
    // var x = 200;
    // var y = 200;
    // var r = 100;
    // var arr = getDate();
    // console.log(arr);
    // var ctx = $("#top .my_canvas_pie").get(0).getContext("2d");
    //
    // var sum = 0;
    // arr.map(function (ele, index) {
    //     // if (index>3)return;
    //     console.log(ele);
    //     var start = sum;
    //     sum += ele.num;
    //     var end = sum;
    //     console.log("st:" + start + " end:" + end);
    //     ctx.beginPath();
    //     ctx.moveTo(200, 200);
    //     ctx.arc(x, y, r, 2 * Math.PI * start, 2 * Math.PI * end);
    //     ctx.lineTo(200, 200);
    //     ctx.fillStyle = ele.color;
    //     ctx.fill()
    //     ctx.closePath();
    // });
    //
    //
    // ctx = $("#top .my_canvas_bar").get(0).getContext("2d");
    // // ctx.translate(-,-0);
    // x=0;
    // y=0;
    //
    // ctx.translate(0,400);
    // ctx.scale(-1,1);
    // ctx.rotate(Math.PI);
    // console.log("-----------");
    // var sum = 0;
    // arr.map(function (ele, index) {
    //     // if (index>0)return;
    //     sum+=10;
    //     // console.log(sum);
    //     ctx.beginPath();
    //     ctx.fillRect(sum,0,20,400*ele.num);
    //     ctx.fillStyle = ele.color;
    //
    //     ctx.closePath();
    //     ctx.fill()
    //     sum+=30;
    // });
    // ctx.fill();

});