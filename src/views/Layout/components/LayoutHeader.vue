<script setup>
/**
 * 引入Pinia状态管理
 */
import { useCategoryStore } from '@/stores/category'

// 使用分类Store
const categoryStore = useCategoryStore()
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <!-- 网站Logo -->
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      
      <!-- 主导航菜单 -->
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to='/'> 首页 </RouterLink>
        </li>
        <!-- 动态生成分类菜单项 -->
        <li class="home" v-for='item in categoryStore.categoryList' :key='item.id'>
          <RouterLink 
            :to="`/category/${item.id}`" 
            active-class="active"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
      
      <!-- 搜索框 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      
      <!-- 购物车区域 - 待开发 -->
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }

      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
