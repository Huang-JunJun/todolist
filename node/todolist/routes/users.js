var express = require('express');
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
  const user = req.body
  console.log(req.body);
  const result = await login(user)
  if (result.length !== 0) {
    res.send({
      msg: '登录成功',
      status: 200
    })
  } else {
    res.send({
      msg: '登录失败,账号或密码错误!'
    })
  }
})

module.exports = router;
