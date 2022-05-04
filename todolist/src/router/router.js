import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: '主页'
        },
        component: () => import('../pages/home'),
        children: [
            {
                icon: 'mdi-playlist-check',
                path: '/todolist',
                name: 'todolist',
                meta: {
                    title: '待做清单'
                },
                component: () => import('../pages/todolist')
            }
        ],
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录页'
        },
        component: () => import('../pages/login')
    }
]

const router = new VueRouter({
    routes
})

export { router }