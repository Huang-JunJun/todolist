/*
 * @Autor: syq
 * @Date: 2021-09-13 10:11:08
 */
import axios from 'axios'

const request = axios.create({
  baseURL: '/todolist',
  timeOut: 10 * 1000
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log('error-req :>> ', error)
  }
)

request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    console.log('error-res :>> ', error)
  }
)

export default request
