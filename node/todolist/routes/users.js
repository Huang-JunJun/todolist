var express = require('express');
const verToken = require('../public/javascripts/token');
var router = express.Router();

const { login } = require('../service/usersService')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async function(req, res, next) {
  // 1.接受前端发送的数据
  // - post： req.body
  // - get: req.query
  // send方法处理响应结果给到前端
  // 接收到前端发送的用户数据
  const username = req.body.username;
  const user = req.body
  const result = await login(user)
  if (result.length !== 0) {
    verToken.setToken(username, result._id).then((data) => {
      res.send({
        msg: '登录成功',
        status: 200,
        token: data
      })
    })
  } else {
    res.send({
      msg: '登录失败,账号或密码错误!'
    })
  }
})

module.exports = router;
