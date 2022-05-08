var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var vertoken = require('./public/javascripts/token')
var expressJwt = require('express-jwt');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todolist/users', usersRouter);

// 解析token获取用户信息
app.use(function(req, res, next) {
  var token = req.headers['authorization'];
  if(token == undefined){
    return next();
  }else{
    vertoken.verToken(token).then((data)=> {
      req.data = data;
      return next();
    }).catch((error)=>{
      return next();
    })
  }
});

//验证token是否过期并规定哪些路由不用验证
app.use(expressJwt({
  secret: 'hello_token',
  algorithms: ['HS256']
}).unless({
  path: ['/todolist/users/login']//除了这个地址，其他的URL都需要验证
}));

//当token失效返回提示信息
app.use(function(err, req, res, next) {
  if (err.status == 401) {
    return res.status(401).send('token失效');
  }
});

require('../todolist/dao/database')

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
// 更改启动命令
app.listen(3000, () => {console.log('3000端口启动成功')})
