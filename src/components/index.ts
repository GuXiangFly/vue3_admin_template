import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponent: any = { SvgIcon}

//对外暴露插件对象
export default {
  //务必叫做install方法
  install(app: any) {
    //注册项目全部的全局组件
    Object.keys(allGlobalComponent).forEach((key) => {
      //注册为全局组件
      app.component(key, allGlobalComponent[key])
    })
    //将element-plus提供图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}
