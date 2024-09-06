import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    // 路由的模式设置
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            name: 'hospital',
            component: () => import('@/pages/hospital/index.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    // 滚动行为：控制滚动条的位置
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})