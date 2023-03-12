import axios from "axios";
import { getToken} from "@/utils/setToken";
import {Message} from "element-ui";

// 定义请求规则
const service = axios.create({
    baseURL: '/api', // baseURL回自动加在url地址上
    timeout: 3000,  //超时时间
})

//请求拦截器，自动设置请求的token等
service.interceptors.request.use(config => {
    // 在请求之前做什么（获取并设置token）
    config.headers['token'] = getToken('token')
    return config
}, error => {
    return Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(response => {
    // 请求结束后做什么
    let message = response.data.message
    let status = response.status
    if(status != 200){
        Message({mesage: message || 'error', type: 'warning'})
    }
    return response
}, error => {
    return Promise.reject(error)
})

export default service