import { createRouter, createWebHistory } from 'vue-router'
import MainPG from '@/pages/MainPage.vue'
import ApprovePG from '@/pages/ApprovePage.vue'
import ConditionPG from '@/pages/ConditionPage.vue'
import ConclusionPG from '@/pages/ConclusionPage.vue'


const routes = [
    {
        path: '/',
        name: 'MainPG',
        component: MainPG,
        meta: {
            page: 'main',
        },
    },
    {
        path: '/approve',
        name: 'ApprovePG',
        component: ApprovePG,
        meta: {
            page: 'approve',
        },
    },
    {
        path: '/condition',
        name: 'conditionPG',
        component: ConditionPG,
        meta: {
            page: 'approve',
        },
    },
    {
        path: '/conclusion',
        name: 'conclusionPG',
        component: ConclusionPG,
        meta: {
            page: 'conclusion',
        },
    }

]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router