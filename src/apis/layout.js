/**
 * @description 布局相关API接口
 * @author relimount
 * @version 1.0.0
 */

import httpInstance from "@/utils/http"

/**
 * 获取分类导航数据
 * @returns {Promise} API响应结果
 */
export function getCategoryAPI () {
  return httpInstance({
    url: 'home/category/head'
  })
}
