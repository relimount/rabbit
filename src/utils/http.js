/**
 * @description HTTP 请求工具类
 * @author relimount
 * @version 1.0.0
 */

import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'





import axios from 'axios'

// 创建axios实例
const httpInstance = axios.create({
  // 配置基础URL
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 请求超时时间
  timeout: 5000
})

// axios请求拦截器 - 在发送请求之前处理
httpInstance.interceptors.request.use(
  config => {
    // 引入用户状态管理模块
    const userStore = useUserStore()
    // 可以在这里添加token等公共请求头
    const token = userStore.userInfo?.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

// axios响应式拦截器 - 在响应返回后处理
httpInstance.interceptors.response.use(
  response => {
    // 成功响应只返回数据部分
    return response.data
  },
  error => {
    // 失败响应返回错误信息
    ElMessage({type:'warning',message:error.response.data.message })
    if(error.response.status === 401) {
      // 401 未授权 - 清除用户信息
      useUserStore().clearUserInfo()
      // 重定向到登录页
      const router = useRouter()
      router.replace('/login')
    }
    return Promise.reject(error)
  }
)

// 导出axios实例
export default httpInstance

