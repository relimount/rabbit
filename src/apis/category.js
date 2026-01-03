/**
 * @description 分类相关API接口
 * @author relimount
 * @version 1.0.0
 */

import request from '@/utils/http'

/**
 * 获取一级分类数据
 * @param {string} id - 分类id
 * @returns {Promise} API响应结果
 */
export const getTopCategoryAPI = (id) => {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}

/**
 * 获取二级分类筛选数据
 * @param {string} id - 分类id
 * @returns {Promise} API响应结果
 */
export const getCategoryFilterAPI = (id) => {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}
