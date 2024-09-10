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
            component: () => import('@/pages/hospital/index.vue'),
            children: [
                {
                    path: 'register',
                    name: 'register',
                    component: () => import('@/pages/hospital/register/index.vue')
                },
                {
                    path: 'detail',
                    name: 'detail',
                    component: () => import('@/pages/hospital/detail/index.vue')
                },
                {
                    path: 'notice',
                    name: 'notice',
                    component: () => import('@/pages/hospital/notice/index.vue')
                },
                {
                    path: 'close',
                    name: 'close',
                    component: () => import('@/pages/hospital/close/index.vue')
                },
                {
                    path: 'search',
                    name: 'search',
                    component: () => import('@/pages/hospital/search/index.vue')
                },
            ]
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