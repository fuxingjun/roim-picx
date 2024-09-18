import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "home",
      component: () => import('../views/ManageImages.vue')
    },
    {
      path: '/up',
      name: "upload",
      component: () => import('../views/UploadImages.vue')
    },
    {
      path: '/auth',
      name: "auth",
      component: () => import('../views/auth.vue')
    },
    {
      path: '/:path(.*)',
      redirect: '/'
    }
  ]
})

export default router
