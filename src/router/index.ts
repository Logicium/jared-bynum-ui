import { createRouter, createWebHistory } from 'vue-router'
import { notFoundRoute, publicRoutes } from '@/routes'

/*
 * The public pages live in src/routes.ts with their SEO records; the
 * prerender reads the same list. The head is applied by installSeo in
 * main.ts on every navigation.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, notFoundRoute],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
