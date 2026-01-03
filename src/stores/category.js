/**
 * @description 分类状态管理
 * @author relimount
 * @version 1.0.0
 */

import { ref } from 'vue'
import { defineStore } from 'pinia'

// 引入API接口
import { getCategoryAPI } from '@/apis/layout'

/**
 * 分类Store
 * 使用组合式API方式定义状态管理
 */
export const useCategoryStore = defineStore('category', () => {
  // 分类列表数据
  const categoryList = ref([])

  /**
   * 获取分类数据
   * @async
   */
  const getCategory = async () => {
    try {
      const res = await getCategoryAPI()
      categoryList.value = res.result
    } catch (error) {
      console.error('获取分类数据失败:', error)
    }
  }

  return {
    categoryList,
    getCategory
  }
})
