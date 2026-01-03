<script setup>
/**
 * 引入API接口和Vue组合式API
 */
import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

// 轮播图数据
const bannerList = ref([])

/**
 * 获取轮播图数据
 * @async
 */
const getBanner = async () => {
  try {
    const res = await getBannerAPI()
    bannerList.value = res.result
  } catch (error) {
    console.error('获取轮播图失败:', error)
  }
}

// 组件挂载时获取数据
onMounted(() => {
  getBanner()
})
</script>

<template>
  <!-- 首页轮播图容器 -->
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item 
        v-for="item in bannerList" 
        :key="item.id"
      >
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
