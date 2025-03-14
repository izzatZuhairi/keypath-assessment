import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('../pages/HomePage.vue') },
  { path: '/questions/:type', component: () => import('../pages/ListQuestions.vue') },
  { path: '/register', component: () => import('../pages/RegisterPage.vue') },
  { path: '/login', component: () => import('../pages/LoginPage.vue') },
  { path: '/result', component: () => import('../pages/ResultPage.vue') },
  { path: '/stats', component: () => import('../pages/StatisticPage.vue') },
  { path: '/test', component: () => import('../pages/TestTest.vue') },
  { path: '/set-data', component: () => import('../pages/SetData.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
