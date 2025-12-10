import {createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入自定义插件对象:注册整个项目全局组件
import globalComponent from '@/components'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import '@/styles/index.scss'
import router from '@/router'
import 'virtual:svg-icons-register'
//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import pinia from "@/store";

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
//安装自定义插件
app.use(globalComponent)
app.use(pinia)
app.use(router)
app.mount("#app")
