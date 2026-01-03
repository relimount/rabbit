/**
 * @description 首页相关API接口
 * @author relimount
 * @version 1.0.0
 */

import httpInstance from '@/utils/http'

/**
 * 获取首页轮播图
 * @param {Object} params - 请求参数
 * @param {string} params.distributionSite - 展示位置，1为首页，2为分类页，默认1
 * @returns {Promise} API响应结果
 */
export function getBannerAPI (params = {}) {
  const { distributionSite = '1' } = params
  return httpInstance({
    url: 'home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * 获取新鲜好物
 * @returns {Promise} API响应结果
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * 获取人气推荐
 * @returns {Promise} API响应结果
 */
export const findHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}

/**
 * 获取所有商品模块
 * @returns {Promise} API响应结果
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
