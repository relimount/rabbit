import XtxSku from './XtxSku/index.vue'
import ImageView from './ImageView/index.vue'

export const componentPlugins = {
  install(app) {
    app.component('XtxSku', XtxSku)
    app.component('ImageView', ImageView)
  }
}
