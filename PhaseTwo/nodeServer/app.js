var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var jade = require('jade');
var ejs = require('ejs');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();//加载express模块,然后执行,赋值给app变量

// view engine setup
app.set('views', path.join(__dirname, 'views')); //设置视图的物理路劲
// app.set('view engine', 'jade');
// app.engine('jade', jade._express);
// app.engine('html', ejs.renderFile);
app.engine( '.html', require('ejs').renderFile );  // 注册html模板引擎
app.set('view engine', 'html');  // 将模板引擎换成html
app.set('view engine', 'jade')//设置视图的引擎为jade

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes); //
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.listen(9000);

module.exports = app;
