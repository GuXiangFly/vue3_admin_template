import {createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

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
app.use(pinia)
app.use(router)
app.mount("#app")
