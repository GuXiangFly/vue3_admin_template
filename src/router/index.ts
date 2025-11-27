import {createRouter, createWebHashHistory} from "vue-router";

let router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path : '/login',
            component : () => import('@/views/login/index.vue'),
            name : 'login',
        },
        {
            //登录成功后展示的数据
            path : '/layout',
            component :() => import('@/views/layout/index.vue'),
            name: 'layout', // 命名路由(做路由权限用的)
        }
    ]
})
export default router