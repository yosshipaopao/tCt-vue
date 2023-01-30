import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/User.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: ()=> import('@/views/test.vue')
    },
    {
        path:"/setting",
        name:"setting",
        component:()=>import("@/views/setting.vue")
    },
    {
        path:'/chat/:id',
        name: 'chat',
        component: ()=> import("@/views/chat.vue"),
    }
  ]
})

export default router
