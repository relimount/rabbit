/**
 * @description Vue 3 应用入口文件
 * @author relimount
 * @version 1.0.0
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 引入根组件
import App from './App.vue'
// 引入路由配置
import router from './router'

// 引入全局样式
import '@/styles/common.scss'

// 引入自定义指令插件
import { lazyPlugin } from './directives/index'

// 创建应用实例
const app = createApp(App)

// 安装插件
app.use(createPinia())    // 状态管理
app.use(router)           // 路由管理
app.use(lazyPlugin)       // 自定义指令插件

// 挂载应用
app.mount('#app')


