import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/login.vue'
import Signup from '../views/Signup.vue'
import ForgotPass from '@/views/ForgotPass.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: ForgotPass
    }
  ]
})

export default router
