/**
 * @description 计数器状态管理
 * @author relimount
 * @version 1.0.0
 */

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 计数器Store
 * 使用组合式API方式定义状态管理
 */
export const useCounterStore = defineStore('counter', () => {
  // 基础计数值
  const count = ref(0)

  // 计算属性：双倍计数值
  const doubleCount = computed(() => count.value * 2)

  /**
   * 增加计数值
   */
  function increment() {
    count.value++
  }

  return {
    count,
    doubleCount,
    increment
  }
})
