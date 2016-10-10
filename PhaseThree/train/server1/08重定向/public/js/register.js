/**
 * Created by qingyun on 16/8/27.
 */
$(document).ready(function () {
    var username=$('#username');
    var password=$('#password');
    var password2=$('#password2');
    var register=$('#register');

    username.get(0).focus();

    username.on('blur',function (e) {
        register.removeClass('disabled');
        // username.removeClass()
    })
    password.on('blur',function (e) {
        register.removeClass('disabled');
        // username.removeClass()
    })
    password2.on('blur',function (e) {
        register.removeClass('disabled');
        // username.removeClass()
    })
    username.on('blur',function (e) {
        var user={username:username.val()}
        $.post('ajaxLogin',JSON.stringify(user),function (data) {
            // console.log(data);
            if(data!="err username"){
                $('.text-warning').html('用户名已经存在');
                register.addClass('disabled');
            }else{
                $('.text-warning').html('用户名可用');
            }
        })
        return false;
    })
    register.on('click',function (e) {
        var user={username:username.val()}
        $.post('ajaxLogin',JSON.stringify(user),function (data) {
            // console.log(data);
            if(data!="err username"){
                $('.text-warning').html('用户名已经存在');
                register.addClass('disabled');
            }else{
                if(password.val()!=password2.val()){
                    $('.text-warning').html('两次密码不相同!');
                    register.addClass('disabled');
                }else{
                    var user={username:username.val(),password:password.val()};
                    $.post('ajaxRegister',JSON.stringify(user),function () {
                        console.log('注册成功');
                        user.password="***";
                        sessionStorage.setItem('user',JSON.stringify(user));
                        window.location='index.html';
                    })
                }
            }
        })
    })




})
