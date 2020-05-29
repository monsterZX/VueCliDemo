import axios from 'axios'
import store from '@/store'
import nprogress from 'nprogress'
import { Message } from 'element-ui'

nprogress.configure({showSpinner: false})
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 12000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

// 请求拦截器
request.interceptors.request.use(
    config => {
        config.headers['token'] = store.state.token
        nprogress.start()
        return config
    } ,
    error => {
        Message.error({
            message:error.message
        })
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        nprogress.done()
        return response
    },
    error => {
        nprogress.done()
        return Promise.reject(error)
    }
)

export default request
