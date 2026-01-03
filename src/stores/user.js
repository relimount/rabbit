import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})

  const getUserInfo = async ({account,password}) => {
    const res = await loginAPI({account,password})

    // 由于axios拦截器返回response.data，所以res本身就是{ code: "1", msg: "操作成功", result: {...} }
    // 应该直接访问res.result
    if (res && res.result && res.result.token) {
      userInfo.value = res.result
      console.log('用户信息存储成功:', userInfo.value)
    } else {
      console.error('登录响应数据格式异常:', res)
    }
  }

  const clearUserInfo = () => {
    userInfo.value = {}
  }

  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true
})
