import axios from 'axios'
const request = axios.create({
    baseURL: 'http://47.115.147.246:2004',
    timeout: 5000 // 请求超时
})
export default request // 导出 axios 对象