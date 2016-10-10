/**
 * Created by qingyun on 16/8/26.
 */
var login;
$(document).ready(function () {
    var form=$('form.form');
    var username=$("#username");
    var password=$("#password");
    var submit=$("button[type='submit']");
    submit.on('click',function (e) {
        // console.log(e);
        var data=JSON.stringify({username:username.val(),password:password.val()})
        $.post('ajaxLogin',data,function (data) {
            console.log("wo jie shou le :"+data)
            if(data=='err username'){
                $('.text-warning').html('用户名不存在!');
                $('.text-warning').removeClass('text-hide');
            }else if(data=='err password'){
                $('.text-warning').html('密码错误!');
                $('.text-warning').removeClass('text-hide');
            }else{
                sessionStorage.setItem('user',data);
                window.location='index';
            }
        });
        e.preventDefault() ;
    })
})