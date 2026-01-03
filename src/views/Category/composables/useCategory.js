/**
 * @description 分类页面组合式函数
 * @author relimount
 * @version 1.0.0
 */

import { getTopCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

/**
 * 分类数据管理组合式函数
 * @returns {Object} 包含分类数据和方法的对象
 */
export function useCategory() {
  // 分类数据
  const categoryData = ref({})
  const route = useRoute()

  /**
   * 获取分类数据
   * @param {string} id - 分类ID，默认为当前路由参数
   */
  const getCategory = async (id = route.params.id) => {
    try {
      const res = await getTopCategoryAPI(id)
      categoryData.value = res.result
    } catch (error) {
      console.error('获取分类数据失败:', error)
    }
  }

  // 路由变化时重新发送请求
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  // 组件挂载时获取数据
  onMounted(() => {
    getCategory()
  })

  return {
    categoryData
  }
}
