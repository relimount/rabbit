/**
 * @description 商品详情相关API接口
 * @author relimount
 * @version 1.0.0
 */

import request from '@/utils/http'

/**
 * 获取商品详情信息
 * @param {string} id - 商品id
 * @returns {Promise} API响应结果
 */
export const getDetail = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

/**
 * 获取热榜商品
 * @param {Object} params - 请求参数
 * @param {Number} params.id - 商品id
 * @param {Number} params.type - 1代表24小时热销榜，2代表周热销榜
 * @param {Number} params.limit - 获取个数，默认3
 * @returns {Promise} API响应结果
 */
export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
