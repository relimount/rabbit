import {getTopCategoryAPI} from '@/apis/category'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export function useCategory(){
  const categoryData = ref({})
  const route = useRoute()

  const getCategory = async(id = route.params.id)=>{
    const res = await getTopCategoryAPI(id)
    categoryData.value = res.result
  }

  //路由变化 重新发送请求
  onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)
  })


  onMounted(()=>{
      getCategory()
    })

  return {categoryData}
}
