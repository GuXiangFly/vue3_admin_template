import { createRouter, createWebHashHistory } from 'vue-router'

let router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      name: 'login',
    },
    {
      //登录成功后展示的数据
      path: '/layout',
      component: () => import('@/layout/index.vue'),
      name: 'layout', // 命名路由(做路由权限用的)
    },
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      name: 'layout',
    },
  ],
})
export default router
