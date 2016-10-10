
var server=require('./server/server'),
    router=require('./server/router'),
    requestHandle=require('./server/requestHandle');
var handle={};
handle['/index']=requestHandle.index;
handle['/ajaxLogin']=requestHandle.ajaxLogin;
handle['/']=requestHandle.index;
handle['/ajaxRegister']=requestHandle.ajaxRegister;
handle['/temp']=requestHandle.temp;
server(router,handle);
