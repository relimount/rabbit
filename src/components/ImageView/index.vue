<script setup>
/**
 * 引入Vue组合式API和工具函数
 */
import { ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'

// props 适配图片列表
defineProps({
  imageList: {
    type: Array,
    default: ()=>[]
  }
})

// 当前激活的图片索引
const activeIndex = ref(0)

/**
 * 切换图片
 * @param {number} i - 图片索引
 */
const changeIndex = (i) => {
  activeIndex.value = i
}

// 鼠标悬停的目标元素引用
const target = ref(null)
// 放大镜滑块的偏移位置
const left = ref(0)
const top = ref(0)

// 使用VueUse的鼠标进入元素检测
const { elementX, elementY, isOutside } = useMouseInElement(target)

// 放大镜背景图的位置
const positionX = ref(0)
const positionY = ref(0)

/**
 * 监听鼠标位置变化，计算放大镜效果
 */
watch([elementX, elementY, isOutside], () => {
  // 如果鼠标移出图片区域，不显示放大镜
  if (isOutside.value) {
    return
  }

  // 计算X轴偏移，限制在图片范围内
  if (elementX.value > 100 && elementX.value < 300) {
    left.value = elementX.value - 100
  } else if (elementX.value <= 100) {
    left.value = 0
  } else if (elementX.value >= 300) {
    left.value = 200
  }

  // 计算Y轴偏移，限制在图片范围内
  if (elementY.value > 100 && elementY.value < 300) {
    top.value = elementY.value - 100
  } else if (elementY.value <= 100) {
    top.value = 0
  } else if (elementY.value >= 300) {
    top.value = 200
  }

  // 计算放大镜背景图位置（负值实现反向移动，放大效果）
  positionX.value = -left.value * 2
  positionY.value = -top.value * 2
})
</script>

<template>
  <!-- 图片查看器容器 -->
  <div class="goods-image">
    <!-- 左侧主图区域 -->
    <div class="middle" ref="target">
      <!-- 当前激活的图片 -->
      <img :src="imageList[activeIndex]" alt="" />
      <!-- 放大镜滑块蒙层 -->
      <div
        class="layer"
        :style="{ left: `${left}px`, top: `${top}px` }"
        v-show="!isOutside"
      ></div>
    </div>

    <!-- 右侧小图列表 -->
    <ul class="small">
      <li
        v-for="(img, i) in imageList"
        :key="i"
        @mouseenter="changeIndex(i)"
        :class="{ active: i === activeIndex }"
      >
        <img :src="img" alt="" />
      </li>
    </ul>

    <!-- 右侧放大镜显示区域 -->
    <div
      class="large"
      :style="[
        {
          backgroundImage: `url(${imageList[activeIndex]})`,
          backgroundPositionX: `${positionX}px`,
          backgroundPositionY: `${positionY}px`,
        },
      ]"
      v-show="!isOutside"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
