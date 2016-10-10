
$(document).ready(function () {
    $('#myTab a').click(function (e) {
        console.log($(this).parent().siblings().find);
        $(this).parent().siblings().find("div").css("background-color","#8c8887");
       $(this).children("div").css("background-color","#56df39");
    })
})
