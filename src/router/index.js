import { createRouter, createWebHistory } from 'vue-router'
 const HomeView= ()=> import ('../views/HomeView.vue')
 const AboutView =  () => import('../views/AboutView.vue')
 const BlogsView =  () => import('../views/BlogsView.vue')
 const PageNotFund=  () => import('../components/PageNotFound.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: PageNotFund
    }
  ]
})

export default router
