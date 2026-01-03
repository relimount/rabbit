import XtxSku from './xtx-sku.vue'
import ImageView from './image-view.vue'

export const componentPlugins = {
  install(app) {
    app.component('XtxSku', XtxSku)
    app.component('ImageView', ImageView)
  }
}
