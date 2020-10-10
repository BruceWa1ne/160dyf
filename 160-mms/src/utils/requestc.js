import axios from 'axios'
const request = axios.create({
    baseURL: 'http://120.76.247.5:2002',
    timeout: 5000 // 请求超时
})
export default request // 导出 axios 对象