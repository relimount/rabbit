/**
 * @description Vue Router 路由配置文件
 * @author relimount
 * @version 1.0.0
 */

import { createRouter, createWebHistory } from 'vue-router'

// 引入页面组件
import Layout from '@/views/Layout/index.vue'          // 布局组件
import Login from '@/views/Login/index.vue'            // 登录页面
import Home from '@/views/Home/index.vue'              // 首页
import Category from '@/views/Category/index.vue'      // 分类页面
import SubCategory from '@/views/SubCategory/index.vue'// 子分类页面
import Detail from '@/views/Detail/index.vue'          // 商品详情页

// 创建路由实例
const router = createRouter({
  // 使用HTML5 History模式
  history: createWebHistory(import.meta.env.BASE_URL),
  // 定义路由规则
  routes: [
    {
      path: '/',
      // 根路径使用布局组件，包含导航栏、头部等公共部分
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0  // 页面切换时滚动到顶部
    }
  }
})

// 导出路由实例
export default router
