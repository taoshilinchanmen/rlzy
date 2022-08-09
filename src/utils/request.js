import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})
// 请求拦截器
request.interceptors.request.use(config => {
// Do something before request is sent
  return config
}, error => {
// Do something with request error
  return Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use(response => {
// Do something before response is sent
  // 正常情况下解构数据
  const { data: { success, message, data }} = response
  // 状态码为200，success为false的错误
  if (success) {
    // 简化数据返回，组件返回数据
    return data
  } else {
    Message.error(message)
    // 密码或者手机号错误阻止跳转的方式1
    // 此处需要在响应拦截器处主动产生一个错误
    // throw new Error(message)   //es5的主动产生错误

    // 密码或者手机号错误阻止跳转的方式2
    return Promise.reject(new Error(message))
  }
}, error => {
// Do something with request error
  Message.error('服务器报错，请稍后重试')
  return Promise.reject(error)
})
export default request
