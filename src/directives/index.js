/**
 * @description Vue自定义指令插件
 * @author relimount
 * @version 1.0.0
 */

import { useIntersectionObserver } from '@vueuse/core'
import { install } from 'element-plus'

/**
 * 图片懒加载指令插件
 * 提供 v-img-lazy 指令，实现图片进入视口时再加载
 */
export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      /**
       * 指令绑定到元素时调用
       * @param {HTMLElement} el - 指令绑定的元素
       * @param {Object} binding - 指令绑定值
       */
      mounted(el, binding) {
        // 使用 Intersection Observer 监听元素是否进入视口
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // 元素进入视口，加载图片
              el.src = binding.value
              // 停止监听，释放资源
              stop()
            }
          },
        )
      }
    })
  }
}
