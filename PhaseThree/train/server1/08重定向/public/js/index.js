/**
 * Created by qingyun on 16/8/26.
 */
var user=sessionStorage.getItem('user');
$(document).ready(function () {
    if(user!=undefined){
        user=JSON.parse(user);
    // <!--<span>严俊东</span>-->
    //     <!--<a >退出</a>-->
        $("a[href='login.html']").hide();
        $('#header').append(new $('<span>'+user.username+'</span>'));
        var exit=new $('<a>退出</a>');
        $('#header').append(exit);
        exit.on('click',function () {
            sessionStorage.removeItem('user');
            // alert()
            window.location='/';
        })
    }
})