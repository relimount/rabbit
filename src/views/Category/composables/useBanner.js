/**
 * @description 分类页面轮播图组合式函数
 * @author relimount
 * @version 1.0.0
 */

import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

/**
 * 分类页面轮播图管理组合式函数
 * @returns {Object} 包含轮播图数据和方法的对象
 */
export function useBanner() {
  // 轮播图数据
  const bannerList = ref([])

  /**
   * 获取分类页轮播图
   * 分类页轮播图使用distributionSite='2'
   */
  const getBanner = async () => {
    try {
      const res = await getBannerAPI({
        distributionSite: '2'  // 2表示分类页轮播图
      })
      bannerList.value = res.result
    } catch (error) {
      console.error('获取分类页轮播图失败:', error)
    }
  }

  // 组件挂载时获取数据
  onMounted(() => {
    getBanner()
  })

  return {
    bannerList
  }
}
