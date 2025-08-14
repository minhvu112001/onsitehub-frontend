
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '@/pages/Login.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Register from '@/pages/Register.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
   { path: '/', redirect: '/login' } ,
  {path: '/register', name: 'register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('token')
  
  if (to.name === 'dashboard' && !isLoggedIn) {
    // Chưa login thì về trang login
    next('/login')
  } else if (to.name === 'login' && isLoggedIn) {
    // Đã login mà vào trang login thì chuyển sang dashboard
    next('/dashboard')
  } else {
    next()
  }
})
export default router
