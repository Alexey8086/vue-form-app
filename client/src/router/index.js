import { createRouter, createWebHistory } from 'vue-router'
import MainPG from '@/pages/MainPage.vue'


const routes = [
    {
        path: '/',
        name: 'MainPG',
        component: MainPG,
        meta: {
            page: 'main',
        },
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router