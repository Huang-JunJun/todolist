import request from '../../utils/request'

// 登录接口
const login = async (params) => request({
    url: '/check/StockAndOrder',
    method: 'POST',
    data: params
})