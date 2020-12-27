import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.31.19:8080/api'
axios.interceptors.request.use((config) => {
  return config
})
axios.interceptors.response.use((config) => {
  console.log('请求地址：' + config.config.baseURL + config.config.url)
  console.log('请求参数：' + config.config.data)
  console.dir('响应数据：' + JSON.stringify(config.data))
  return config
})
export default axios
