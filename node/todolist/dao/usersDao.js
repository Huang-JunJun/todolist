const { userModel } = require('./models/usersModel')

// 持久层
// 进行对数据库的操作
module.exports.login = async function (user) {
  const result = await userModel.find(user)
  
  return result
}