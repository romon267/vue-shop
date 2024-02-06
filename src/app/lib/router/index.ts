import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import Playground from '@/pages/PlaygroundPage.vue'

export enum AppRoutes {
    Home = 'home',
    Playground = 'playground'
}

export const routesPaths: Record<AppRoutes, string> = {
    [AppRoutes.Home]: '/',
    [AppRoutes.Playground]: '/playground'
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: routesPaths.home,
            name: AppRoutes.Home,
            component: Home
        },
        {
            path: routesPaths.playground,
            name: AppRoutes.Playground,
            component: Playground
        }
    ]
})

export default router
